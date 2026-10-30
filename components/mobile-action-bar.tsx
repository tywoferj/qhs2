import Link from "next/link"
import { CalendarCheck, Phone } from "lucide-react"

/**
 * Phone-only sticky action bar: the two things a visitor on a phone most often wants
 * (call, or request a consultation) stay one thumb-tap away. Hidden at lg and up.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t bg-background/95 px-3 pt-2 shadow-[0_-6px_24px_rgba(0,0,0,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/85 lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="tel:+12526914076"
        className="flex h-11 items-center justify-center gap-2 rounded-lg border border-primary/40 text-sm font-semibold text-primary transition-transform active:scale-[0.97]"
      >
        <Phone className="h-4 w-4" aria-hidden /> Call us
      </a>
      <Link
        href="/consultation-request"
        className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.97]"
      >
        <CalendarCheck className="h-4 w-4" aria-hidden /> Free consultation
      </Link>
    </div>
  )
}
