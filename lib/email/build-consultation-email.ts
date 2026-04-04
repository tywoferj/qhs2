import type { ConsultationFormValues } from "@/lib/consultation-form-schema"

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function orDash(s: string | undefined | null): string {
  const t = s?.trim()
  return t ? escapeHtml(t) : "—"
}

function row(label: string, value: string | undefined | null) {
  return `<tr><td style="padding:8px 12px 8px 0;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;width:200px;vertical-align:top;">${escapeHtml(
    label
  )}</td><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#111827;vertical-align:top;">${orDash(
    value
  )}</td></tr>`
}

export function buildConsultationEmailHtml(
  data: ConsultationFormValues,
  categoryLabel: string
): string {
  const rows = [
    row("Full name", data.fullName),
    row("Job title", data.jobTitle),
    row("Organization", data.organizationName),
    row("Email", data.email),
    row("Mobile", data.mobile),
    row("WhatsApp", data.whatsapp),
    row("Country", data.country),
    row("State / City", data.stateCity),
    row("Service category", categoryLabel),
    row("Service slug (form)", data.serviceCategory),
    row("Service tag (URL)", data.serviceTag || "—"),
    row("Preferred contact", data.preferredContactMethod),
    row("Preferred date", data.preferredDate),
    row("Preferred time", data.preferredTime),
    row("Facility type", data.facilityType),
    row("Number of beds", data.numberOfBeds),
    row("Number of staff", data.numberOfStaff),
    row("Compliance status", data.complianceStatus),
    row("Required timeline", data.requiredTimeline),
  ].join("")

  const requirement = escapeHtml(data.businessRequirement).replace(/\n/g, "<br/>")

  return `<!DOCTYPE html>
<html><body style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.5;color:#111827;">
<p style="margin:0 0 16px;">New consultation request from <strong>qhsconsultant.com</strong>.</p>
<table style="border-collapse:collapse;width:100%;max-width:640px;margin-bottom:20px;">${rows}</table>
<p style="margin:0 0 8px;font-weight:600;">Business requirement</p>
<div style="padding:12px 16px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;white-space:pre-wrap;">${requirement}</div>
<p style="margin:20px 0 0;font-size:13px;color:#6b7280;">Consent to contact: yes</p>
</body></html>`
}

export function buildConsultationEmailText(
  data: ConsultationFormValues,
  categoryLabel: string
): string {
  const lines = [
    "New consultation request (qhsconsultant.com)",
    "",
    `Full name: ${data.fullName}`,
    `Job title: ${data.jobTitle || "—"}`,
    `Organization: ${data.organizationName}`,
    `Email: ${data.email}`,
    `Mobile: ${data.mobile}`,
    `WhatsApp: ${data.whatsapp || "—"}`,
    `Country: ${data.country || "—"}`,
    `State / City: ${data.stateCity || "—"}`,
    "",
    `Service category: ${categoryLabel} (${data.serviceCategory})`,
    `Service tag (from URL): ${data.serviceTag || "—"}`,
    "",
    `Preferred contact: ${data.preferredContactMethod}`,
    `Preferred date: ${data.preferredDate}`,
    `Preferred time: ${data.preferredTime}`,
    "",
    `Facility type: ${data.facilityType || "—"}`,
    `Beds: ${data.numberOfBeds || "—"}`,
    `Staff: ${data.numberOfStaff || "—"}`,
    `Compliance: ${data.complianceStatus || "—"}`,
    `Timeline: ${data.requiredTimeline || "—"}`,
    "",
    "Business requirement:",
    data.businessRequirement,
    "",
    "Consent to contact: yes",
  ]
  return lines.join("\n")
}
