"use client"

import { Award, Building2, Users } from "lucide-react"

const highlights = [
  {
    icon: Award,
    label: "Hospital Accreditation Experts",
    sub: "Accreditation leadership",
    story:
      "We have supported hospitals through multiple quality accreditation journeys, including more than four JCI accreditation cycles, while also guiding facilities through Society for Quality in Healthcare in Nigeria (SQHN) pathways and broader quality readiness programmes. Our team helps translate standards into practical systems, clear governance, and sustained performance improvements.",
  },
  {
    icon: Building2,
    label: "Hospitals",
    sub: "Transformed across Nigeria",
    story:
      "We have worked with multi-specialist hospitals in different capacities across growth, profitability, quality improvement, infection prevention and control, procurement, and supply chain strengthening. Our approach combines operational discipline with local context so improvements are measurable, sustainable, and aligned with leadership priorities.",
  },
  {
    icon: Users,
    label: "30+ Years",
    sub: "Proven experience",
    story:
      "Our leadership brings decades of practical experience in clinical governance, hospital operations, strategy, and quality systems. This depth enables us to identify high-impact opportunities quickly, mentor teams effectively, and deliver outcomes that balance patient safety, operational efficiency, and long-term institutional resilience.",
  },
] as const

export function AboutHighlights() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {highlights.map((h, index) => (
        <div
          key={h.label}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-xl border bg-card p-6 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary/15">
              <h.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="relative mt-3 text-xl font-bold text-foreground">{h.label}</p>
            <p className="relative text-sm text-muted-foreground">{h.sub}</p>
            <p className="relative mt-2 text-xs font-medium text-primary/90">
              Hover to read story
            </p>
          </div>

          <div
            className={`pointer-events-none absolute top-full z-20 mt-3 w-[min(42rem,94vw)] rounded-2xl border p-5 text-left opacity-0 shadow-2xl ring-1 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 sm:w-[min(40rem,92vw)] ${
              index === 0
                ? "left-0 translate-y-2"
                : index === 1
                  ? "left-1/2 -translate-x-1/2 translate-y-2"
                  : "right-0 translate-y-2"
            } border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-teal-100/80 ring-emerald-200/60 dark:border-emerald-800/60 dark:from-emerald-950/55 dark:via-background dark:to-teal-950/45 dark:ring-emerald-800/50`}
          >
            <div className="mb-2 flex items-center gap-2 text-foreground">
              <h.icon className="h-5 w-5 text-primary" />
              <p className="font-semibold">{h.label}</p>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">{h.story}</p>
            <div
              className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-primary via-emerald-500 to-cyan-400/80"
              style={{ animationDelay: `${index * 80}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
