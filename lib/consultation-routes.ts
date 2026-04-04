/** Universal consultation form path; service pages append `?service=<id>`. */
export const CONSULTATION_PATH = "/consultation-request"

export function consultationHref(serviceId?: string | null): string {
  if (!serviceId || serviceId.trim() === "") {
    return CONSULTATION_PATH
  }
  const q = new URLSearchParams({ service: serviceId.trim() })
  return `${CONSULTATION_PATH}?${q.toString()}`
}
