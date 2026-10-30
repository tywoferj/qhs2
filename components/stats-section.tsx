"use client"

import { useEffect, useRef, useState } from "react"
import { ClipboardList, BadgeCheck, Clock, ThumbsUp } from "lucide-react"

const stats = [
  {
    id: "incident-turnaround",
    icon: ClipboardList,
    value: 40,
    suffix: "%",
    label: "Reduction in Incident Reporting Turnaround",
  },
  {
    id: "accreditation-readiness",
    icon: BadgeCheck,
    value: 98,
    suffix: "%",
    label: "Accreditation Readiness Score",
  },
  { id: "years", icon: Clock, value: 30, suffix: "+", label: "Years Experience" },
  {
    id: "satisfaction",
    icon: ThumbsUp,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
]

/**
 * Counts up when scrolled into view. The final value is the initial state, so the
 * server-rendered HTML (and crawlers, and no-JS visitors) always see the real number.
 */
function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(target)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const duration = 1600
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 4) // ease-out quart
      setCount(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-primary via-primary to-secondary py-6 lg:py-8"
      aria-label="Trust metrics and performance highlights"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 lg:grid-cols-4 lg:gap-4 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`group relative flex min-w-0 items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.08] px-3 py-2.5 text-left shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-primary-foreground/[0.1] hover:shadow-lg sm:px-3 ${
              ""
            }`}
          >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <stat.icon className="h-4 w-4 text-primary-foreground" aria-hidden />
            </div>
            <div className="min-w-0">
            <p className="text-lg font-bold leading-none tabular-nums text-primary-foreground sm:text-2xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <p className="mt-1 text-pretty text-[10.5px] font-medium leading-tight text-primary-foreground/85 sm:text-xs">
              {stat.label}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
