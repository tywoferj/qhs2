import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

import { SERVICES } from "@/lib/services-data"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Board", href: "/board" },
  { label: "Resources", href: "/#insights" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-secondary-foreground">
                Q.H.S Consultants Ltd.
              </span>
              <span className="mt-0.5 block text-xs font-medium tracking-widest text-secondary-foreground/70 uppercase">
                Quality Healthcare Services
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/80">
              Consultancy and advisory in healthcare strategy, clinical strategy,
              medical training, healthcare quality, accreditation, clinical risk
              and governance, and medical equipment sourcing.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-foreground/10 text-xs font-bold text-secondary-foreground/90 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  57B, Hibiscus Street, M.K.O Abiola Gardens, C.B.D, Ikeja
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  Discuss services:{" "}
                  <a href="tel:+12526914076" className="hover:text-secondary-foreground">+1 (252) 691 4076</a>
                  <br />
                  Book with Dr Onakoya:{" "}
                  <a href="tel:+15732647695" className="hover:text-secondary-foreground">+1 (573) 264 7695</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:contact@qhsconsultant.com"
                  className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground"
                >
                  contact@qhsconsultant.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-secondary-foreground/70">
            {"© 2026 Quality Healthcare Services (Q.H.S) Consultants Ltd. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
