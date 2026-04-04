/**
 * Normalises phone input to optional leading + and up to 15 digits (E.164-style storage).
 */
export function normalizeTelStorage(raw: string): string {
  const t = raw.trim()
  if (!t) return ""
  const hasPlus = t.startsWith("+")
  const digits = raw.replace(/\D/g, "").slice(0, 15)
  if (!digits) return hasPlus ? "+" : ""
  return hasPlus ? `+${digits}` : digits
}

/** Spaced groups for readability while typing (storage stays compact). */
export function prettyTelDisplay(stored: string): string {
  if (!stored) return ""
  const plus = stored.startsWith("+")
  const digits = (plus ? stored.slice(1) : stored).replace(/\D/g, "").slice(0, 15)
  if (!digits) return plus ? "+" : ""
  const parts: string[] = []
  let i = 0
  const take = (n: number) => {
    if (i >= digits.length) return
    parts.push(digits.slice(i, i + n))
    i += n
  }
  take(3)
  while (i < digits.length) {
    take(4)
  }
  const body = parts.join(" ")
  return plus ? `+${body}` : body
}
