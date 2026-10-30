"use client"

import { useState, useEffect, useCallback, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown, Menu, Phone } from "lucide-react"
import { SERVICES } from "@/lib/services-data"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"

const resourceLinks = [
  { label: "Accreditation checklist", href: "/accreditation-checklist", hint: "Self-assess your readiness" },
  { label: "Blog", href: "/blog", hint: "Insights on quality and governance" },
  { label: "Brochures", href: "/brochures", hint: "Capability summaries" },
] as const

const linkBase =
  "relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[12px] xl:px-4 xl:text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300"

function NavLink({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        linkBase,
        "group/link outline-none focus-visible:ring-2 focus-visible:ring-primary",
        active ? "text-primary-foreground" : "text-foreground/80 hover:text-primary"
      )}
    >
      <NavPill active={active} />
      <span className="relative">{children}</span>
    </Link>
  )
}

/** Active page: solid gradient pill. Others: a soft pill that grows from the centre on hover. */
function NavPill({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-0 -z-0 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        active
          ? "bg-gradient-to-r from-primary to-[hsl(165_55%_30%)] shadow-md shadow-primary/30"
          : "scale-75 bg-primary/10 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 group-hover/nav:scale-100 group-hover/nav:opacity-100 group-focus-within/nav:scale-100 group-focus-within/nav:opacity-100"
      )}
    />
  )
}

function Dropdown({
  label,
  href,
  active,
  children,
  width = "w-80",
}: {
  label: string
  href?: string
  active: boolean
  children: ReactNode
  width?: string
}) {
  const inner = (
    <>
      <NavPill active={active} />
      <span className="relative">{label}</span>
      <ChevronDown className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
    </>
  )
  const cls = cn(
    linkBase,
    "outline-none focus-visible:ring-2 focus-visible:ring-primary",
    active ? "text-primary-foreground" : "text-foreground/80 group-hover/nav:text-primary group-focus-within/nav:text-primary"
  )
  return (
    <div className="group/nav relative">
      {href ? (
        <Link href={href} className={cls} aria-haspopup="true">
          {inner}
        </Link>
      ) : (
        <button type="button" className={cls} aria-haspopup="true">
          {inner}
        </button>
      )}
      {/* hover bridge so the panel doesn't close crossing the gap */}
      <div
        className={cn(
          "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:translate-y-2",
          "group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100",
          "group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100",
          width
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/95 p-2 shadow-2xl shadow-secondary/15 ring-1 ring-black/5 backdrop-blur-xl">
          <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
          {children}
        </div>
      </div>
    </div>
  )
}

function MenuItem({ href, title, hint }: { href: string; title: string; hint?: string }) {
  return (
    <Link
      href={href}
      className="group/item relative flex items-center gap-3 rounded-xl px-3 py-2.5 outline-none transition-colors duration-300 hover:bg-primary/[0.07] focus-visible:bg-primary/[0.07]"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium leading-snug text-card-foreground transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:text-primary">
          {title}
        </span>
        {hint && <span className="block text-xs text-muted-foreground">{hint}</span>}
      </span>
      <ArrowRight className="h-4 w-4 -translate-x-2 text-primary opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const is = (p: string) => (p === "/" ? pathname === "/" : pathname === p || pathname.startsWith(p + "/"))
  const resourcesActive = resourceLinks.some((r) => is(r.href))

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-500",
          isScrolled
            ? "border-border/60 bg-background/85 shadow-lg shadow-secondary/5 backdrop-blur-xl"
            : "border-transparent bg-background"
        )}
      >
        <div aria-hidden className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-secondary" />
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 lg:px-8",
            "py-2.5"
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className={cn(
                "relative flex-shrink-0 self-center transition-all duration-500",
                "h-11 w-11 sm:h-14 sm:w-14"
              )}
            >
              <Image
                src="/images/favicon/QHS_logo.png"
                alt="QHS Consultants Ltd logo"
                fill
                sizes="56px"
                className="rounded-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-base font-bold tracking-tight text-primary sm:text-xl">QHS Consultants Ltd</span>
              <span className="hidden text-[11px] font-medium uppercase tracking-widest text-muted-foreground sm:block">
                Quality Healthcare Services
              </span>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-0.5 rounded-full border border-border/70 bg-muted/60 p-1 shadow-inner backdrop-blur xl:flex"
            aria-label="Main navigation"
          >
            <NavLink href="/" active={is("/")}>Home</NavLink>
            <NavLink href="/about" active={is("/about")}>About</NavLink>

            <Dropdown label="Services" href="/services" active={is("/services")} width="w-[22rem]">
              <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                What we do
              </p>
              {SERVICES.map((s) => (
                <MenuItem key={s.id} href={`/services/${s.id}`} title={s.title.replace(/\.$/, "")} />
              ))}
              <Link
                href="/services"
                className="mt-1 flex items-center justify-between rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:from-primary/20 hover:to-secondary/20"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Dropdown>

            <NavLink href="/board" active={is("/board")}>Board</NavLink>

            <Dropdown label="Resources" active={resourcesActive} width="w-72">
              <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Learn more
              </p>
              {resourceLinks.map((r) => (
                <MenuItem key={r.href} href={r.href} title={r.label} hint={r.hint} />
              ))}
            </Dropdown>

            <NavLink href="/contact" active={is("/contact")}>Contact</NavLink>
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+12526914076" aria-label="Call +1 252 691 4076"
              className="group/tel flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover/tel:bg-primary group-hover/tel:text-primary-foreground motion-safe:group-hover/tel:rotate-12">
                <Phone className="h-4 w-4" />
              </span>
              <span className="hidden 2xl:inline">+1 (252) 691 4076</span>
            </a>
            <Link
              href="/consultation-request"
              className="group/cta relative inline-flex h-11 items-center gap-2 whitespace-nowrap overflow-hidden rounded-full bg-gradient-to-r from-primary to-[hsl(165_55%_30%)] px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 motion-safe:hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 transition-transform duration-700 ease-out group-hover/cta:translate-x-[400%]"
              />
              <span className="relative">Free Consultation</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-foreground active:bg-muted xl:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={closeMobile} resourceLinks={resourceLinks} />
    </>
  )
}
