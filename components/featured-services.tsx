import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import { consultationHref } from "@/lib/consultation-routes"

const features = [
  {
    serviceId: "accreditation" as const,
    title: "Quality Accreditation Excellence",
    description:
      "Our team supports healthcare institutions across JCI, Society for Quality in Healthcare in Nigeria (SQHN), and other quality accreditation pathways, translating standards into practical systems that elevate patient safety, clinical outcomes, and organisational credibility.",
    bullets: [
      "Gap analysis and readiness assessment",
      "Mock surveys and tracer methodology",
      "Policy and documentation development",
      "Staff training and culture transformation",
    ],
    cta: "Start Your Accreditation Journey",
  },
  {
    serviceId: "healthcare-strategy" as const,
    title: "Hospital Operations & Turnaround",
    description:
      "We help underperforming facilities become efficient, patient-centered organisations through practical turnaround plans that improve flow, strengthen accountability, and stabilise financial performance. Our operational frameworks deliver measurable gains in service quality, patient experience, and leadership confidence.",
    bullets: [
      "Workflow optimization and lean management",
      "Revenue cycle improvement",
      "Patient experience enhancement",
      "Performance dashboards and KPIs",
    ],
    cta: "Optimize Your Operations",
  },
]

export function FeaturedServices() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Expertise
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Flagship Services
          </h2>
        </Reveal>

        <div className="grid auto-rows-fr gap-8 lg:grid-cols-2">
          {features.map((feature, idx) => (
            <Reveal key={feature.title} delayMs={idx * 90} className="h-full">
            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-8 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl md:p-10 ${
                idx === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground text-background"
              }`}
            >
              {/* Decorative circle */}
              <div
                className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${
                  idx === 0 ? "bg-primary-foreground/5" : "bg-background/5"
                }`}
              />
              <div className="relative flex h-full flex-col">
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p
                  className={`mb-6 leading-relaxed ${
                    idx === 0 ? "text-primary-foreground/85" : "text-background/85"
                  }`}
                >
                  {feature.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          idx === 0 ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          idx === 0 ? "text-primary-foreground/90" : "text-background/90"
                        }`}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={
                    idx === 0
                      ? "mt-auto bg-primary-foreground text-primary shadow-sm transition-all duration-200 hover:bg-primary-foreground/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
                      : "mt-auto bg-background text-foreground shadow-sm transition-all duration-200 hover:bg-background/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
                  }
                  asChild
                >
                  <Link href={consultationHref(feature.serviceId)} prefetch={false}>
                    {feature.cta}
                  </Link>
                </Button>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
