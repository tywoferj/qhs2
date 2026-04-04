"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/services-data"

const resourceLinks = [
  { label: "Accreditation checklist", href: "/accreditation-checklist" },
  { label: "Blog", href: "/blog" },
  { label: "Brochures", href: "/brochures" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-md backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14 flex-shrink-0 self-center">
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
            <span className="text-xl font-bold tracking-tight text-primary">QHS Consultants Ltd</span>
            <span className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
              Quality Healthcare Services
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>

          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Services
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 w-72 rounded-lg border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/board"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Board
          </Link>

          <div className="relative group">
            <span
              className="flex cursor-default items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-label="Resources menu"
            >
              Resources
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </span>
            <div className="invisible absolute left-0 top-full z-50 w-64 rounded-lg border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {resourceLinks.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+12526914076"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            +1 (252) 691 4076
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="/#contact">Free Consultation</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-6 pt-2 lg:hidden">
          <Link
            href="/"
            className="block py-3 text-sm font-medium text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-3 text-sm font-medium text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="mb-2 ml-4 space-y-1">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/board"
            className="block py-3 text-sm font-medium text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Board
          </Link>

          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
          >
            Resources
            <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
          </button>
          {resourcesOpen && (
            <div className="mb-2 ml-4 space-y-1">
              {resourceLinks.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {r.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className="block py-3 text-sm font-medium text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+12526914076"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              +1 (252) 691 4076
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="/#contact" onClick={() => setMobileOpen(false)}>
                Free Consultation
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
