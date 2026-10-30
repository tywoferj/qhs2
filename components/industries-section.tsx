import Link from "next/link"
import {
  Building2,
  Microscope,
  HeartHandshake,
  Stethoscope,
  Landmark,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

type Industry = {
  title: string
  description: string
  icon: LucideIcon
}

const industries: Industry[] = [
  {
    title: "Hospitals",
    description: "Operational excellence, accreditation, and governance advisory",
    icon: Building2,
  },
  {
    title: "Diagnostic Centers",
    description: "Quality compliance and patient safety improvement",
    icon: Microscope,
  },
  {
    title: "HMOs",
    description: "Healthcare quality assurance and provider network strategy",
    icon: HeartHandshake,
  },
  {
    title: "Clinics",
    description: "Primary care standards, compliance, and capacity building",
    icon: Stethoscope,
  },
  {
    title: "Government Health Agencies",
    description: "Policy compliance, governance, and system-wide healthcare quality",
    icon: Landmark,
  },
  {
    title: "Investors / PE Healthcare",
    description: "Healthcare due diligence, quality risk, and investment readiness",
    icon: LineChart,
  },
]

export function IndustriesSection() {
  return (
    <section
      className="border-t border-border bg-gradient-to-b from-secondary/[0.06] via-background to-primary/[0.06] py-14 sm:py-20 lg:py-28"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Who We Work With
          </p>
          <h2
            id="industries-heading"
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground">
            Enterprise-grade consultancy tailored to regulators, operators, and capital partners across
            the healthcare ecosystem in Nigeria and West Africa.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {industries.map((item, i) => (
            <li key={item.title} className="list-none">
              <div className={`group relative h-full overflow-hidden rounded-2xl border border-border border-t-4 ${i % 2 ? "border-t-secondary/70" : "border-t-primary/70"} bg-card p-5 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-xl motion-safe:hover:shadow-primary/10 md:p-6`}>
                <div
                  className="absolute inset-y-0 left-0 w-1 origin-top bg-primary transition-transform duration-300 ease-out motion-safe:scale-y-0 motion-safe:group-hover:scale-y-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-3 sm:pl-1">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-3 ${i % 2 ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`}>
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-foreground md:text-lg">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <Link href="/consultation-request" className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 focus-visible:opacity-100 focus-visible:translate-x-0 transition-all duration-300 motion-safe:-translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 max-sm:opacity-100">
                    Discuss this sector <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center lg:mt-14">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
            asChild
          >
            <Link href="/consultation-request">Discuss Your Sector Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
