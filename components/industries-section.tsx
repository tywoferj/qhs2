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
  /** Revealed on hover / focus; always visible on touch-only devices. */
  focus: [string, string, string]
}

const industries: Industry[] = [
  {
    title: "Hospitals",
    description: "Operational excellence, accreditation, and governance advisory",
    focus: ["Accreditation readiness (JCI, SQHN)", "Clinical governance and quality systems", "Operational and leadership advisory"],
    icon: Building2,
  },
  {
    title: "Diagnostic Centers",
    description: "Quality compliance and patient safety improvement",
    focus: ["Quality management systems", "Patient safety and sample integrity", "Workflow and equipment review"],
    icon: Microscope,
  },
  {
    title: "HMOs",
    description: "Healthcare quality assurance and provider network strategy",
    focus: ["Provider quality assessment", "Network and tariff strategy", "Quality assurance frameworks"],
    icon: HeartHandshake,
  },
  {
    title: "Clinics",
    description: "Primary care standards, compliance, and capacity building",
    focus: ["Primary care standards", "Licensing and compliance readiness", "Staff training and capacity building"],
    icon: Stethoscope,
  },
  {
    title: "Government Health Agencies",
    description: "Policy compliance, governance, and system-wide healthcare quality",
    focus: ["Policy and regulatory compliance", "Governance frameworks", "System-wide quality programmes"],
    icon: Landmark,
  },
  {
    title: "Investors / PE Healthcare",
    description: "Healthcare due diligence, quality risk, and investment readiness",
    focus: ["Healthcare due diligence", "Quality and clinical risk review", "Investment readiness assessment"],
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

        <ul className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {industries.map((item, i) => {
            const purple = i % 2 === 1
            const tone = purple
              ? {
                  wash: "from-secondary via-secondary to-accent",
                  chip: "from-secondary to-accent",
                  glow: "shadow-secondary/15 hover:shadow-secondary/40",
                  tint: "from-secondary/[0.07]",
                  dot: "bg-secondary group-hover:bg-white",
                }
              : {
                  wash: "from-primary via-primary to-[hsl(165_55%_26%)]",
                  chip: "from-primary to-[hsl(165_55%_30%)]",
                  glow: "shadow-primary/15 hover:shadow-primary/40",
                  tint: "from-primary/[0.08]",
                  dot: "bg-primary group-hover:bg-white",
                }
            return (
              <li key={item.title} className="list-none">
                {/* idle float: staggered so the grid breathes instead of moving as one block */}
                <div className="h-full motion-safe:animate-float" style={{ animationDelay: `${i * -1.1}s` }}>
                  <div
                    tabIndex={0}
                    className={`group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-3xl border border-white bg-gradient-to-b ${tone.tint} to-card p-6 shadow-xl outline-none ring-1 ring-border/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:-translate-y-2 focus-visible:shadow-2xl motion-safe:hover:-translate-y-2 hover:shadow-2xl ${tone.glow}`}
                  >
                    {/* colour wash that fills the card on hover */}
                    <div
                      aria-hidden
                      className={`absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br ${tone.wash} transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100`}
                    />
                    <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl transition-opacity duration-500 group-hover:opacity-0" />

                    <div className="relative flex flex-1 flex-col">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tone.chip} text-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:from-white group-hover:to-white group-hover:text-foreground motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110`}
                      >
                        <item.icon className="h-6 w-6" aria-hidden />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/85 group-focus-visible:text-white/85">
                        {item.description}
                      </p>

                      {/* hover information */}
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] max-sm:grid-rows-[1fr] [@media(any-hover:none)]:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <ul className="mt-4 space-y-1.5 border-t border-white/0 pt-4 text-sm text-foreground transition-colors duration-500 group-hover:border-white/25 group-hover:text-white group-focus-visible:text-white max-sm:border-border">
                            {item.focus.map((f, k) => (
                              <li
                                key={f}
                                className="flex items-start gap-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-safe:translate-y-2 max-sm:translate-y-0 max-sm:opacity-100 [@media(any-hover:none)]:translate-y-0 [@media(any-hover:none)]:opacity-100"
                                style={{ transitionDelay: `${140 + k * 70}ms` }}
                              >
                                <span aria-hidden className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors duration-500 ${tone.dot}`} />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/consultation-request"
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:text-white group-focus-visible:text-white"
                          >
                            Discuss this sector
                            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
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
