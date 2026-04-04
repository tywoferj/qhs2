import { Resend } from "resend"
import type { ConsultationFormValues } from "@/lib/consultation-form-schema"
import { getServiceCategoryLabel } from "@/lib/consultation-form-schema"
import { buildConsultationEmailHtml, buildConsultationEmailText } from "@/lib/email/build-consultation-email"

export type SendConsultationResult =
  | { ok: true; messageId?: string }
  | { ok: false; code: "missing_env" | "resend"; message: string }

/**
 * Sends the consultation payload to the inbox configured in env.
 *
 * Deliverability / standards:
 * - `from` (RESEND_FROM_EMAIL): Must be a domain you verify in Resend (e.g. noreply@qhsconsultant.com)
 *   so SPF/DKIM align with your domain. Do not put the visitor’s address in `from`.
 * - `replyTo`: The submitter’s email from the form so “Reply” in your mail client goes to them.
 *
 * Required env: RESEND_API_KEY, RESEND_FROM_EMAIL, CONSULTATION_INBOX_EMAIL
 */
export async function sendConsultationNotification(
  data: ConsultationFormValues
): Promise<SendConsultationResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.RESEND_FROM_EMAIL?.trim()
  const to = process.env.CONSULTATION_INBOX_EMAIL?.trim()

  if (!apiKey || !from || !to) {
    return {
      ok: false,
      code: "missing_env",
      message: "Email is not configured (RESEND_API_KEY, RESEND_FROM_EMAIL, CONSULTATION_INBOX_EMAIL).",
    }
  }

  const resend = new Resend(apiKey)
  const categoryLabel = getServiceCategoryLabel(data.serviceCategory) ?? data.serviceCategory
  const subject = `[QHS] Consultation: ${categoryLabel} — ${data.organizationName}`

  const submitterEmail = data.email.trim()

  const { data: sent, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: submitterEmail,
    subject,
    html: buildConsultationEmailHtml(data, categoryLabel),
    text: buildConsultationEmailText(data, categoryLabel),
  })

  if (error) {
    console.error("[resend] send failed:", error)
    return {
      ok: false,
      code: "resend",
      message: error.message ?? "Failed to send email",
    }
  }

  return { ok: true, messageId: sent?.id }
}
