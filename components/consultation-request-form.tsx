"use client"

import { useCallback, useMemo, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import type { FieldErrors } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ConsultationFormSection } from "@/components/consultation-form-section"
import {
  COMPLIANCE_STATUS_OPTIONS,
  consultationFormSchema,
  CONTACT_METHOD_OPTIONS,
  FACILITY_TYPE_OPTIONS,
  getDefaultServiceCategoryFromQuery,
  SERVICE_CATEGORY_OPTIONS,
  type ConsultationFormValues,
} from "@/lib/consultation-form-schema"
import { cn } from "@/lib/utils"
import {
  ConsultationNoticeOverlay,
  CONSULTATION_ERROR_DISMISS_MS,
  CONSULTATION_SUCCESS_DISMISS_MS,
} from "@/components/consultation-notice-overlay"
import { flattenConsultationFieldErrors } from "@/lib/form-errors"
import { normalizeTelStorage, prettyTelDisplay } from "@/lib/phone-input"
import { Loader2 } from "lucide-react"
import Link from "next/link"

const selectClassName = cn(
  "flex min-h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base leading-normal ring-offset-background",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50"
)

const inputReadabilityClass =
  "min-h-11 text-base leading-normal placeholder:text-muted-foreground/80"

const labelReadabilityClass = "text-[15px] font-medium leading-snug"

function buildDefaults(initialServiceSlug?: string | null): ConsultationFormValues {
  const slug = initialServiceSlug?.trim() ?? ""
  return {
    fullName: "",
    jobTitle: "",
    organizationName: "",
    email: "",
    mobile: "",
    whatsapp: "",
    country: "",
    stateCity: "",
    serviceCategory: (getDefaultServiceCategoryFromQuery(slug) || "") as ConsultationFormValues["serviceCategory"],
    serviceTag: slug.slice(0, 80),
    businessRequirement: "",
    facilityType: "",
    numberOfBeds: "",
    numberOfStaff: "",
    complianceStatus: "",
    requiredTimeline: "",
    preferredContactMethod: "" as ConsultationFormValues["preferredContactMethod"],
    preferredDate: "",
    preferredTime: "",
    consent: false,
  }
}

type Props = {
  initialServiceSlug?: string | null
  invalidServiceSlug?: boolean
}

type OverlayState =
  | { kind: "success" }
  | { kind: "error"; messages: string[] }

export function ConsultationRequestForm({
  initialServiceSlug,
  invalidServiceSlug = false,
}: Props) {
  const [overlay, setOverlay] = useState<OverlayState | null>(null)
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), [])

  const defaults = useMemo(
    () => buildDefaults(initialServiceSlug),
    [initialServiceSlug]
  )

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: defaults,
    mode: "onSubmit",
  })

  const closeOverlay = useCallback(() => {
    setOverlay((current) => {
      if (current?.kind === "success") {
        reset(buildDefaults(initialServiceSlug))
      }
      return null
    })
  }, [reset, initialServiceSlug])

  async function onSubmit(values: ConsultationFormValues) {
    try {
      const res = await fetch("/api/consultation-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = (await res.json()) as { ok?: boolean; message?: string }
      if (!res.ok) {
        setOverlay({
          kind: "error",
          messages: [
            data.message ?? "We could not submit your request. Please try again or call us directly.",
          ],
        })
        return
      }
      setOverlay({ kind: "success" })
    } catch {
      setOverlay({
        kind: "error",
        messages: ["Network error. Check your connection and try again."],
      })
    }
  }

  function onInvalid(errors: FieldErrors<ConsultationFormValues>) {
    const msgs = flattenConsultationFieldErrors(errors)
    setOverlay({
      kind: "error",
      messages: msgs.length > 0 ? msgs : ["Please complete all required fields correctly."],
    })
  }

  return (
    <>
      {overlay ? (
        <ConsultationNoticeOverlay
          open
          variant={overlay.kind === "success" ? "success" : "error"}
          messages={overlay.kind === "error" ? overlay.messages : undefined}
          autoDismissMs={
            overlay.kind === "success" ? CONSULTATION_SUCCESS_DISMISS_MS : CONSULTATION_ERROR_DISMISS_MS
          }
          onDismiss={closeOverlay}
        />
      ) : null}

      <div
        className={cn(
          "consultation-form-shell mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.07] px-4 py-8 shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.12)] sm:px-8 sm:py-10 lg:px-10",
          "[&_input]:min-h-11 [&_input]:text-base [&_input]:leading-normal [&_textarea]:text-base [&_textarea]:leading-relaxed",
          "[&_label]:text-[15px] [&_label]:font-medium [&_label]:leading-snug"
        )}
      >
        {invalidServiceSlug ? (
          <p className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-[15px] leading-relaxed text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-50">
            The link service code was not recognised. Please choose the correct category in the form, or browse{" "}
            <Link href="/services" className="font-semibold text-primary underline underline-offset-2">
              all services
            </Link>
            .
          </p>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-8 pb-4" noValidate>
          <input type="hidden" {...register("serviceTag")} />

      <ConsultationFormSection
        title="1. Contact information"
        description="How we can reach you about this consultation. Use country code for phone numbers."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="fullName" className={labelReadabilityClass}>
              Full name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              autoComplete="name"
              className={inputReadabilityClass}
              {...register("fullName")}
            />
            {errors.fullName ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.fullName.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobTitle" className={labelReadabilityClass}>
              Job title
            </Label>
            <Input
              id="jobTitle"
              autoComplete="organization-title"
              className={inputReadabilityClass}
              {...register("jobTitle")}
            />
            {errors.jobTitle ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.jobTitle.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="organizationName" className={labelReadabilityClass}>
              Organization name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="organizationName"
              autoComplete="organization"
              className={inputReadabilityClass}
              {...register("organizationName")}
            />
            {errors.organizationName ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.organizationName.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="email" className={labelReadabilityClass}>
              Email address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              className={inputReadabilityClass}
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile" className={labelReadabilityClass}>
              Mobile number <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <Input
                  id="mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={inputReadabilityClass}
                  placeholder="+234 803 123 4567"
                  value={prettyTelDisplay(field.value ?? "")}
                  onChange={(e) => field.onChange(normalizeTelStorage(e.target.value))}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              )}
            />
            {errors.mobile ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.mobile.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className={labelReadabilityClass}>
              WhatsApp number
            </Label>
            <Controller
              name="whatsapp"
              control={control}
              render={({ field }) => (
                <Input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  className={inputReadabilityClass}
                  placeholder="+234 803 123 4567"
                  value={prettyTelDisplay(field.value ?? "")}
                  onChange={(e) => field.onChange(normalizeTelStorage(e.target.value))}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country" className={labelReadabilityClass}>
              Country
            </Label>
            <Input
              id="country"
              autoComplete="country-name"
              className={inputReadabilityClass}
              {...register("country")}
              placeholder="e.g. Nigeria"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stateCity" className={labelReadabilityClass}>
              State / City
            </Label>
            <Input
              id="stateCity"
              className={inputReadabilityClass}
              {...register("stateCity")}
              placeholder="e.g. Lagos"
            />
          </div>
        </div>
      </ConsultationFormSection>

      <ConsultationFormSection
        title="2. Service category"
        description="Choose the service that best matches your need."
      >
        <div className="space-y-2">
          <Label htmlFor="serviceCategory" className={labelReadabilityClass}>
            Service category <span className="text-destructive">*</span>
          </Label>
          <select id="serviceCategory" className={selectClassName} {...register("serviceCategory")}>
            <option value="">Select a service category</option>
            {SERVICE_CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.serviceCategory ? (
            <p className="text-sm text-destructive" role="alert">
              {errors.serviceCategory.message}
            </p>
          ) : null}
        </div>
      </ConsultationFormSection>

      <ConsultationFormSection title="3. Business requirement">
        <div className="space-y-2">
          <Label htmlFor="businessRequirement" className={labelReadabilityClass}>
            Please describe the support or challenge you need help with{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="businessRequirement"
            rows={6}
            className="min-h-[160px] resize-y text-base leading-relaxed"
            {...register("businessRequirement")}
            placeholder="Context, goals, constraints, and any deadlines we should know."
          />
          {errors.businessRequirement ? (
            <p className="text-sm text-destructive" role="alert">
              {errors.businessRequirement.message}
            </p>
          ) : null}
        </div>
      </ConsultationFormSection>

      <ConsultationFormSection
        title="4. Organization details"
        description="Optional but helps us scope the conversation."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="facilityType" className={labelReadabilityClass}>
              Facility type
            </Label>
            <select id="facilityType" className={selectClassName} {...register("facilityType")}>
              <option value="">Select facility type (optional)</option>
              {FACILITY_TYPE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="numberOfBeds" className={labelReadabilityClass}>
              Number of beds
            </Label>
            <Input
              id="numberOfBeds"
              inputMode="numeric"
              className={inputReadabilityClass}
              {...register("numberOfBeds")}
              placeholder="e.g. 120"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="numberOfStaff" className={labelReadabilityClass}>
              Number of staff
            </Label>
            <Input
              id="numberOfStaff"
              inputMode="numeric"
              className={inputReadabilityClass}
              {...register("numberOfStaff")}
              placeholder="e.g. 350"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="complianceStatus" className={labelReadabilityClass}>
              Current compliance status
            </Label>
            <select id="complianceStatus" className={selectClassName} {...register("complianceStatus")}>
              <option value="">Select status (optional)</option>
              {COMPLIANCE_STATUS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="requiredTimeline" className={labelReadabilityClass}>
              Required timeline
            </Label>
            <Input
              id="requiredTimeline"
              className={inputReadabilityClass}
              {...register("requiredTimeline")}
              placeholder="e.g. Survey window in Q3, board decision in 6 weeks"
            />
          </div>
        </div>
      </ConsultationFormSection>

      <ConsultationFormSection title="5. Preferred contact method">
        <div className="space-y-2">
          <Label htmlFor="preferredContactMethod" className={labelReadabilityClass}>
            How should we contact you? <span className="text-destructive">*</span>
          </Label>
          <select id="preferredContactMethod" className={selectClassName} {...register("preferredContactMethod")}>
            <option value="">Select a method</option>
            {CONTACT_METHOD_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.preferredContactMethod ? (
            <p className="text-sm text-destructive" role="alert">
              {errors.preferredContactMethod.message}
            </p>
          ) : null}
        </div>
      </ConsultationFormSection>

      <ConsultationFormSection
        title="6. Preferred date / time"
        description="Optional. Leave either or both blank and we will record them as working hours and schedule with you separately."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="preferredDate" className={labelReadabilityClass}>
              Preferred consultation date
            </Label>
            <Input
              id="preferredDate"
              type="date"
              min={minDate}
              className={inputReadabilityClass}
              {...register("preferredDate")}
            />
            {errors.preferredDate ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.preferredDate.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredTime" className={labelReadabilityClass}>
              Preferred consultation time
            </Label>
            <Input
              id="preferredTime"
              type="time"
              className={inputReadabilityClass}
              {...register("preferredTime")}
            />
            {errors.preferredTime ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.preferredTime.message}
              </p>
            ) : null}
          </div>
        </div>
      </ConsultationFormSection>

      <ConsultationFormSection title="7. Consent">
        <div className="flex items-start gap-3">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="consent"
                checked={field.value}
                onCheckedChange={(v) => field.onChange(v === true)}
                className="mt-1"
              />
            )}
          />
          <div className="space-y-1">
            <Label
              htmlFor="consent"
              className={cn(labelReadabilityClass, "cursor-pointer font-normal text-foreground")}
            >
              I consent to being contacted by QHS Consultants Ltd <span className="text-destructive">*</span>
            </Label>
            {errors.consent ? (
              <p className="text-sm text-destructive" role="alert">
                {errors.consent.message}
              </p>
            ) : null}
          </div>
        </div>
      </ConsultationFormSection>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:w-auto sm:min-w-[240px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Submit Consultation Request"
          )}
        </Button>
        <p className="text-center text-sm leading-relaxed text-muted-foreground sm:text-left">
          By submitting, you agree we may use these details only to respond to this request.
        </p>
      </div>
    </form>
      </div>
    </>
  )
}
