"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  COOKIE_CONSENT_EVENT,
  getCookiePreferences,
  setCookiePreferences,
  clearCookiePreferences,
} from "@/lib/cookie-consent"

export function CookiePreferencesPanel() {
  const [analytics, setAnalytics] = useState(false)
  const [saved, setSaved] = useState(false)
  const [hasDecision, setHasDecision] = useState(false)

  useEffect(() => {
    const load = () => {
      const p = getCookiePreferences()
      if (p) {
        setAnalytics(p.analytics)
        setHasDecision(true)
      } else {
        setAnalytics(false)
        setHasDecision(false)
      }
      setSaved(false)
    }
    load()
    window.addEventListener(COOKIE_CONSENT_EVENT, load)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, load)
  }, [])

  const handleSave = () => {
    setCookiePreferences(analytics)
    setHasDecision(true)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 4000)
  }

  const handleReset = () => {
    clearCookiePreferences()
    setAnalytics(false)
    setHasDecision(false)
    setSaved(false)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">Your preferences</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Turn optional cookies on or off. Essential cookies cannot be disabled because they are required for the
        site to function. Changes apply to this browser only.
      </p>

      <ul className="mt-6 space-y-6">
        <li className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="font-medium text-foreground">Essential cookies</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Security, load balancing, cookie consent memory, and basic session stability. Always active.
            </p>
          </div>
          <div className="flex items-center gap-2 sm:flex-col sm:items-end">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Always on</span>
          </div>
        </li>
        <li className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="font-medium text-foreground">Analytics cookies</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Help us understand aggregate traffic and page usage (for example, which sections are viewed most).
              We do not use this setting to sell your data.
            </p>
          </div>
          <div className="flex items-center gap-3 sm:shrink-0">
            <Label htmlFor="analytics-cookies" className="sr-only">
              Enable analytics cookies
            </Label>
            <Switch
              id="analytics-cookies"
              checked={analytics}
              onCheckedChange={(v) => {
                setAnalytics(v)
                setSaved(false)
              }}
            />
          </div>
        </li>
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button type="button" onClick={handleSave}>
          Save preferences
        </Button>
        {hasDecision ? (
          <Button type="button" variant="outline" onClick={handleReset}>
            Clear choice (show banner again)
          </Button>
        ) : null}
      </div>

      {saved ? (
        <p className="mt-4 text-sm font-medium text-primary" role="status">
          Preferences saved for this browser.
        </p>
      ) : null}

      {hasDecision ? (
        <p className="mt-4 text-xs text-muted-foreground">
          Current status: optional analytics cookies are {analytics ? "enabled" : "disabled"}.
        </p>
      ) : (
        <p className="mt-4 text-xs text-muted-foreground">
          You have not confirmed a choice yet. Use the banner or save preferences here.
        </p>
      )}

      <p className="mt-6 text-sm text-muted-foreground">
        For how we process personal data more broadly, see the{" "}
        <Link href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}
