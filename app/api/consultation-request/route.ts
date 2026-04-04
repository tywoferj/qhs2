import { NextResponse } from "next/server"
import { getServiceCategoryLabel, parseConsultationPayload } from "@/lib/consultation-form-schema"
import { sendConsultationNotification } from "@/lib/email/send-consultation-notification"

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 400 })
  }

  const parsed = parseConsultationPayload(json)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Validation failed",
        fieldErrors: parsed.error.flatten().fieldErrors,
        formErrors: parsed.error.flatten().formErrors,
      },
      { status: 422 }
    )
  }

  const data = parsed.data
  const categoryLabel = getServiceCategoryLabel(data.serviceCategory)

  console.info("[consultation-request]", {
    submittedAt: new Date().toISOString(),
    fullName: data.fullName,
    organizationName: data.organizationName,
    email: data.email,
    serviceCategory: data.serviceCategory,
    serviceCategoryLabel: categoryLabel,
  })

  const emailResult = await sendConsultationNotification(data)
  if (!emailResult.ok) {
    const status = emailResult.code === "missing_env" ? 503 : 502
    return NextResponse.json(
      {
        ok: false,
        message:
          emailResult.code === "missing_env"
            ? "This form cannot send email yet. Please try again later or call us directly."
            : "We could not deliver your request by email. Please try again or contact us by phone.",
      },
      { status }
    )
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
