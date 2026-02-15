"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Accreditation & Quality Management",
  "Hospital Operations & Management",
  "Strategic Planning & Development",
  "Clinical Governance & Medical Staff",
  "Orthopedic Service Line Consulting",
  "Financial & Revenue Cycle",
  "Human Resource Management",
  "Compliance & Risk Management",
  "Technology & Information Systems",
  "Corporate Healthcare Advisory",
  "Investment & Due Diligence",
  "Training & Capacity Building",
  "Interim Management Services",
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Resources", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-primary">
            QHSConsultant
          </span>
          <span className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
            Healthcare Excellence
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {link.hasDropdown && (
                <div className="invisible absolute left-0 top-full z-50 w-72 rounded-lg border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {services.map((s) => (
                    <Link
                      key={s}
                      href="/services"
                      className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+12526914076"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            +1 (252) 691 4076
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Free Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mb-2 ml-4 space-y-1">
                      {services.map((s) => (
                        <Link
                          key={s}
                          href="/services"
                          className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+12526914076"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              +1 (252) 691 4076
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
