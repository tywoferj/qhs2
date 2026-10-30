import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Board", href: "/board" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Sitemap", href: "/site-map" },
]

export function Footer() {
  return (
    <footer className="bg-secondary pb-[4.5rem] text-secondary-foreground xl:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr] lg:px-8">
        <div>
          <Link href="/" className="inline-block">
            <span className="text-lg font-bold text-secondary-foreground">QHS Consultants Ltd</span>
            <span className="mt-0.5 block text-[11px] font-medium uppercase tracking-widest text-secondary-foreground/70">
              Quality Healthcare Services
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondary-foreground/80">
            Healthcare consultancy and advisory for Nigeria and West Africa.
          </p>
        </div>

        <nav aria-label="Footer">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary-foreground/90">Explore</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary-foreground/90">Contact</h4>
          <ul className="space-y-2.5 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-foreground/70" />
              <span>57B, Hibiscus Street, M.K.O Abiola Gardens, C.B.D, Ikeja</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/70" />
              <a href="tel:+12526914076" className="hover:text-secondary-foreground">+1 (252) 691 4076</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground/70" />
              <a href="mailto:contact@qhsconsultant.com" className="hover:text-secondary-foreground">
                contact@qhsconsultant.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row lg:px-8">
          <p className="text-xs text-secondary-foreground/70">
            © 2026 Quality Healthcare Services (QHS) Consultants Ltd.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
