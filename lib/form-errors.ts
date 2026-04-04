import type { FieldErrors } from "react-hook-form"
import type { ConsultationFormValues } from "@/lib/consultation-form-schema"

/** Collect `message` from each field error (flat consultation form). */
export function flattenConsultationFieldErrors(
  errors: FieldErrors<ConsultationFormValues>
): string[] {
  const acc: string[] = []
  for (const err of Object.values(errors)) {
    if (err && typeof err === "object" && "message" in err && err.message) {
      acc.push(String(err.message))
    }
  }
  return [...new Set(acc)]
}
