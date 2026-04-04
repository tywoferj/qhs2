export const COOKIE_CONSENT_STORAGE_KEY = "qhs_cookie_consent_v1"

export const COOKIE_CONSENT_EVENT = "qhs-cookie-consent-updated"

export type StoredCookiePreferences = {
  v: 1
  /** Strictly necessary cookies are always used; this flag is for optional analytics-style cookies. */
  analytics: boolean
  decidedAt: string
}

export function parseStoredPreferences(raw: string | null): StoredCookiePreferences | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as Partial<StoredCookiePreferences>
    if (parsed.v !== 1 || typeof parsed.analytics !== "boolean" || typeof parsed.decidedAt !== "string") {
      return null
    }
    return parsed as StoredCookiePreferences
  } catch {
    return null
  }
}

/** Client-only: read preferences from localStorage. */
export function getCookiePreferences(): StoredCookiePreferences | null {
  if (typeof window === "undefined") return null
  return parseStoredPreferences(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY))
}

/** Client-only: persist preferences and notify listeners (banner, cookies page). */
export function setCookiePreferences(analytics: boolean): StoredCookiePreferences {
  const next: StoredCookiePreferences = {
    v: 1,
    analytics,
    decidedAt: new Date().toISOString(),
  }
  if (typeof window !== "undefined") {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: next }))
  }
  return next
}

export function clearCookiePreferences(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: null }))
}
