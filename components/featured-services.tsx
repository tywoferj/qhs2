import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "JCI & SQH Accreditation Excellence",
    description:
      "Our team has guided over 15 healthcare institutions through successful JCI and SafeCare Quality of Healthcare accreditation, establishing them as leaders in patient safety and quality care.",
    bullets: [
      "Gap analysis and readiness assessment",
      "Mock surveys and tracer methodology",
      "Policy and documentation development",
      "Staff training and culture transformation",
    ],
    cta: "Start Your Accreditation Journey",
  },
  {
    title: "Hospital Operations & Turnaround",
    description:
      "We specialize in turning underperforming facilities into efficient, patient-centered organizations. Our operational frameworks have delivered measurable improvements across 10+ hospitals.",
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
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Expertise
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Flagship Services
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`relative overflow-hidden rounded-2xl p-8 md:p-10 ${
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
              <div className="relative">
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
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-background text-foreground hover:bg-background/90"
                  }
                  asChild
                >
                  <a href={idx === 0 ? "tel:+12526914076" : "/services#operations"}>
                    {feature.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
