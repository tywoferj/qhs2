"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown, Phone, X } from "lucide-react"

import { SERVICES } from "@/lib/services-data"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  open: boolean
  onClose: () => void
  resourceLinks: readonly { label: string; href: string }[]
}

/**
 * Phone-only navigation: a full-height sheet with large tap targets, a pinned call-to-action
 * and body scroll lock. Desktop uses the inline menu in `Header`; this never renders at lg+.
 */
export function MobileNav({ open, onClose, resourceLinks }: MobileNavProps) {
  const pathname = usePathname()
  const closeRef = useRef<HTMLButtonElement>(null)

  // Close after navigation.
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={cn("fixed inset-0 z-[110] overflow-hidden lg:hidden", open ? "visible" : "pointer-events-none invisible delay-300")}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-foreground/40 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <nav
        aria-label="Mobile navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(88vw,22rem)] flex-col bg-background shadow-2xl",
          "transition-transform duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full"
        )}
        style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-between border-b px-5 py-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-foreground active:bg-muted"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-2">
          <ul>
            <NavItem label="Home" href="/" index={0} open={open} />
            <NavItem label="About" href="/about" index={1} open={open} />
            <li className="border-b">
              <details className="group">
                <summary className="flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between text-lg font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  Services
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <ul className="pb-3 pl-3">
                  {SERVICES.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.id}`}
                        className="block py-2.5 text-[15px] text-muted-foreground active:text-primary"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services" className="block py-2.5 text-[15px] font-medium text-primary">
                      All services →
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <NavItem label="Board" href="/board" index={3} open={open} />
            <li className="border-b">
              <details className="group">
                <summary className="flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between text-lg font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  Resources
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <ul className="pb-3 pl-3">
                  {resourceLinks.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="block py-2.5 text-[15px] text-muted-foreground active:text-primary">
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <NavItem label="Contact" href="/contact" index={5} open={open} />
          </ul>
        </div>

        <div className="space-y-3 border-t bg-muted/50 px-5 py-4">
          <Link
            href="/consultation-request"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary text-base font-semibold text-primary-foreground active:scale-[0.98]"
          >
            Free consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+12526914076"
            className="flex h-12 items-center justify-center gap-2 rounded-lg border border-primary/40 bg-background text-base font-semibold text-primary active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" /> +1 (252) 691 4076
          </a>
        </div>
      </nav>
    </div>
  )
}

function NavItem({ label, href, index, open }: { label: string; href: string; index: number; open: boolean }) {
  return (
    <li
      className={cn(
        "border-b transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
        open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
      )}
      style={{ transitionDelay: open ? `${80 + index * 35}ms` : "0ms" }}
    >
      <Link href={href} className="flex min-h-[3.25rem] items-center text-lg font-medium text-foreground active:text-primary">
        {label}
      </Link>
    </li>
  )
}
