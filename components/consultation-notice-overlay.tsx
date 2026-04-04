"use client"

import { useEffect, useState, useCallback } from "react"
import { createPortal } from "react-dom"
import { AlertTriangle, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const CONSULTATION_SUCCESS_DISMISS_MS = 45_000
export const CONSULTATION_ERROR_DISMISS_MS = 30_000

export type ConsultationNoticeVariant = "success" | "error"

type Props = {
  open: boolean
  variant: ConsultationNoticeVariant
  /** Listed when variant is `error` (validation or API). */
  messages?: string[]
  autoDismissMs: number
  onDismiss: () => void
}

export function ConsultationNoticeOverlay({
  open,
  variant,
  messages = [],
  autoDismissMs,
  onDismiss,
}: Props) {
  const [mounted, setMounted] = useState(false)
  const secondsTotal = Math.ceil(autoDismissMs / 1000)
  const [secondsLeft, setSecondsLeft] = useState(secondsTotal)
  const isSuccess = variant === "success"

  const handleDismiss = useCallback(() => {
    onDismiss()
  }, [onDismiss])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) {
      setSecondsLeft(secondsTotal)
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const deadline = Date.now() + autoDismissMs
    const tick = () => {
      setSecondsLeft(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)))
    }
    tick()
    const interval = setInterval(tick, 200)

    const timeout = window.setTimeout(() => {
      handleDismiss()
    }, autoDismissMs)

    return () => {
      clearInterval(interval)
      window.clearTimeout(timeout)
      document.body.style.overflow = previousOverflow
    }
  }, [open, handleDismiss, autoDismissMs, secondsTotal])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDismiss()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, handleDismiss])

  if (!mounted || !open) return null

  const titleId = isSuccess ? "consultation-notice-success-title" : "consultation-notice-error-title"
  const descId = isSuccess ? "consultation-notice-success-desc" : "consultation-notice-error-desc"

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-live={isSuccess ? "polite" : "assertive"}
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/70 animate-consultation-backdrop-in backdrop-blur-md motion-reduce:animate-none motion-reduce:opacity-100"
        aria-label={isSuccess ? "Dismiss success message" : "Dismiss error message"}
        onClick={handleDismiss}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-md overflow-hidden rounded-2xl border bg-card/95 shadow-2xl backdrop-blur-xl ring-1",
          isSuccess
            ? "border-primary/15 shadow-primary/10 ring-primary/10 animate-consultation-success-in"
            : "border-destructive/25 shadow-destructive/10 ring-destructive/15 animate-consultation-success-in motion-reduce:opacity-100",
          "motion-reduce:animate-none motion-reduce:opacity-100"
        )}
      >
        {isSuccess ? (
          <>
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-secondary/15 blur-3xl" />
          </>
        ) : (
          <>
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-destructive/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />
          </>
        )}

        <div className="relative px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
          {isSuccess ? (
            <div className="absolute right-4 top-4 text-primary/30 motion-safe:animate-pulse">
              <Sparkles className="h-5 w-5" aria-hidden />
            </div>
          ) : (
            <div className="absolute right-4 top-4 text-destructive/40">
              <AlertTriangle className="h-5 w-5" aria-hidden />
            </div>
          )}

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner">
            {isSuccess ? (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 motion-safe:animate-consultation-check-pop motion-reduce:animate-none">
                  <Check className="h-7 w-7 stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round" aria-hidden />
                </div>
              </>
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive text-destructive-foreground shadow-lg shadow-destructive/25 motion-safe:animate-consultation-check-pop motion-reduce:animate-none">
                <AlertTriangle className="h-6 w-6" aria-hidden />
              </div>
            )}
          </div>

          <h2
            id={titleId}
            className="mt-6 text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {isSuccess ? "Request submitted successfully" : "Please fix the form"}
          </h2>
          <p id={descId} className="mt-2 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            {isSuccess
              ? "Thank you. Our team has received your consultation request and will follow up using your preferred contact method."
              : messages.length > 0
                ? "Review the points below, update the form, and submit again."
                : "Something went wrong. Please try again or contact us by phone."}
          </p>

          {!isSuccess && messages.length > 0 ? (
            <ul
              className="mt-4 max-h-48 list-inside list-disc space-y-1.5 overflow-y-auto rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-left text-sm text-foreground"
              aria-label="Validation issues"
            >
              {messages.map((m) => (
                <li key={m} className="leading-snug">
                  {m}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 space-y-2">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full origin-left rounded-full motion-reduce:scale-x-0",
                  isSuccess
                    ? "bg-gradient-to-r from-primary via-emerald-500/90 to-primary"
                    : "bg-gradient-to-r from-destructive via-amber-500/80 to-destructive"
                )}
                style={{
                  animation: `notice-progress-shrink ${autoDismissMs}ms linear forwards`,
                }}
                aria-hidden
              />
            </div>
            <p className="text-center text-xs text-muted-foreground">
              {isSuccess ? (
                <>
                  Closes in <span className="tabular-nums font-semibold text-foreground">{secondsLeft}</span>s — the
                  form will reset for a new request.
                </>
              ) : (
                <>
                  Closes in <span className="tabular-nums font-semibold text-foreground">{secondsLeft}</span>s — your
                  entries are kept so you can correct them.
                </>
              )}
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            className={cn(
              "mt-6 w-full",
              isSuccess ? "border-primary/20 hover:bg-primary/5" : "border-destructive/25 hover:bg-destructive/5"
            )}
            onClick={handleDismiss}
          >
            {isSuccess ? "Close now" : "Got it"}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  )
}
