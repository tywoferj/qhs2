import { z } from "zod"

/** Dropdown labels and slugs aligned with `/services/[slug]` ids. */
export const SERVICE_CATEGORY_OPTIONS = [
  { value: "accreditation", label: "Hospital Accreditation Support" },
  { value: "clinical-risk-governance", label: "Clinical Risk and Governance" },
  { value: "clinical-strategy", label: "Clinical Strategy" },
  { value: "healthcare-quality", label: "Quality Improvement and Patient Safety" },
  { value: "healthcare-strategy", label: "Healthcare Strategy" },
  { value: "medical-equipment-sourcing", label: "Medical Equipment Sourcing" },
  { value: "medical-training", label: "Medical Training" },
] as const

export type ServiceCategorySlug = (typeof SERVICE_CATEGORY_OPTIONS)[number]["value"]

export const SERVICE_SLUG_VALUES = SERVICE_CATEGORY_OPTIONS.map((o) => o.value) as readonly ServiceCategorySlug[]

export const CONTACT_METHOD_OPTIONS = [
  "Phone Call",
  "WhatsApp Call",
  "WhatsApp Chat",
  "Email",
  "Zoom Meeting",
  "Google Meet",
  "Microsoft Teams",
  "In-Person Meeting",
  "Any Available Method",
] as const

export type ContactMethod = (typeof CONTACT_METHOD_OPTIONS)[number]

export const FACILITY_TYPE_OPTIONS = [
  "General / Teaching Hospital",
  "Specialty Hospital",
  "Clinic / Polyclinic",
  "Diagnostic / Imaging Center",
  "Laboratory",
  "HMO / Payer",
  "Government Health Facility",
  "Pharmacy / Retail Health",
  "Investor / PE / Holding",
  "Other",
] as const

export const COMPLIANCE_STATUS_OPTIONS = [
  "Not yet assessed",
  "Working toward accreditation (JCI / Society for Quality in Healthcare in Nigeria (SQHN) / other)",
  "Partially compliant",
  "Accredited (details in description above)",
  "Not applicable",
] as const

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isTodayOrFutureDate(isoDate: string): boolean {
  const parsed = new Date(`${isoDate}T12:00:00`)
  if (Number.isNaN(parsed.getTime())) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const d = new Date(parsed)
  d.setHours(0, 0, 0, 0)
  return d >= today
}

/** Stored in emails/API when the user skips date or time — means “any working-hours slot”. */
export const CONSULTATION_SCHEDULE_WORKING_HOURS = "Working hours"

export const consultationFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(120, "Name is too long"),
  jobTitle: z.string().trim().max(120).optional().default(""),
  organizationName: z
    .string()
    .trim()
    .min(2, "Enter your organization name")
    .max(200, "Organization name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(200)
    .refine((v) => emailRegex.test(v), "Enter a valid email address"),
  mobile: z.preprocess(
    (v) => (typeof v === "string" ? v.replace(/\s/g, "").trim() : ""),
    z
      .string()
      .min(8, "Enter a valid mobile number")
      .max(22, "Number is too long")
  ),
  whatsapp: z.preprocess(
    (v) => (typeof v === "string" ? v.replace(/\s/g, "").trim() : ""),
    z.string().max(22, "Number is too long").optional().default("")
  ),
  country: z.string().trim().max(100).optional().default(""),
  stateCity: z.string().trim().max(120).optional().default(""),

  /** Selected service (editable dropdown); value is slug. */
  serviceCategory: z
    .string()
    .min(1, "Select a service category")
    .refine(
      (s): s is ServiceCategorySlug => SERVICE_SLUG_VALUES.includes(s as ServiceCategorySlug),
      "Invalid service category"
    ),

  /** Original `?service=` slug when the user landed (hidden, for routing analytics). */
  serviceTag: z.string().trim().max(80).optional().default(""),

  businessRequirement: z
    .string()
    .trim()
    .min(20, "Please provide a bit more detail (at least 20 characters)")
    .max(8000, "Description is too long"),

  facilityType: z.string().trim().max(120).optional().default(""),
  numberOfBeds: z.string().trim().max(30).optional().default(""),
  numberOfStaff: z.string().trim().max(30).optional().default(""),
  complianceStatus: z.string().trim().max(200).optional().default(""),
  requiredTimeline: z.string().trim().max(200).optional().default(""),

  preferredContactMethod: z
    .string()
    .min(1, "Select how we should contact you")
    .refine(
      (s): s is ContactMethod =>
        (CONTACT_METHOD_OPTIONS as readonly string[]).includes(s),
      "Invalid contact method"
    ),

  preferredDate: z
    .string()
    .trim()
    .transform((s) => (s === "" ? CONSULTATION_SCHEDULE_WORKING_HOURS : s))
    .superRefine((val, ctx) => {
      if (val === CONSULTATION_SCHEDULE_WORKING_HOURS) return
      if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Invalid date" })
        return
      }
      if (!isTodayOrFutureDate(val)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Choose today or a future date" })
      }
    }),

  preferredTime: z
    .string()
    .trim()
    .transform((s) => (s === "" ? CONSULTATION_SCHEDULE_WORKING_HOURS : s))
    .superRefine((val, ctx) => {
      if (val === CONSULTATION_SCHEDULE_WORKING_HOURS) return
      if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/.test(val)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Invalid time" })
      }
    }),

  consent: z
    .boolean({ required_error: "Consent is required to submit" })
    .refine((v) => v === true, { message: "You must consent to being contacted by QHS Consultants Ltd" }),
})

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>

export function getDefaultServiceCategoryFromQuery(
  raw: string | undefined | null
): ServiceCategorySlug | "" {
  if (!raw || typeof raw !== "string") return ""
  const trimmed = raw.trim()
  return SERVICE_SLUG_VALUES.includes(trimmed as ServiceCategorySlug)
    ? (trimmed as ServiceCategorySlug)
    : ""
}

export function getServiceCategoryLabel(slug: string): string | undefined {
  return SERVICE_CATEGORY_OPTIONS.find((o) => o.value === slug)?.label
}

/** Server/client shared parse for API route. */
export function parseConsultationPayload(data: unknown) {
  return consultationFormSchema.safeParse(data)
}
