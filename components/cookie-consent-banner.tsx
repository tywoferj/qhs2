"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  COOKIE_CONSENT_EVENT,
  getCookiePreferences,
  setCookiePreferences,
} from "@/lib/cookie-consent"

export function CookieConsentBanner() {
  const [ready, setReady] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sync = () => {
      const existing = getCookiePreferences()
      setOpen(existing === null)
      setReady(true)
    }
    sync()
    window.addEventListener(COOKIE_CONSENT_EVENT, sync)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync)
  }, [])

  useEffect(() => {
    if (!ready || !open) {
      document.body.style.paddingBottom = ""
      return
    }
    document.body.style.paddingBottom = "max(7.5rem, env(safe-area-inset-bottom, 0px))"
    return () => {
      document.body.style.paddingBottom = ""
    }
  }, [ready, open])

  if (!ready || !open) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-card/95 p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm supports-[backdrop-filter]:bg-card/90 md:p-5"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">Cookies on this site</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We use essential cookies so the site works. With your permission we may use optional analytics
            cookies to understand how visitors use our pages. See our{" "}
            <Link href="/cookies" className="font-medium text-primary underline-offset-4 hover:underline">
              Cookie Policy
            </Link>{" "}
            to manage preferences, or read our{" "}
            <Link href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full sm:w-auto"
            onClick={() => {
              setCookiePreferences(false)
              setOpen(false)
            }}
          >
            Essential only
          </Button>
          <Button type="button" variant="outline" size="sm" className="w-full sm:w-auto" asChild>
            <Link href="/cookies">Cookie settings</Link>
          </Button>
          <Button
            type="button"
            size="sm"
            className="w-full bg-primary sm:w-auto"
            onClick={() => {
              setCookiePreferences(true)
              setOpen(false)
            }}
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  )
}
