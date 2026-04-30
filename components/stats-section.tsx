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

function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(target)
      return
    }
    let start = 0
    const duration = 2000
    const step = Math.max(1, Math.ceil(target / (duration / 16)))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
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
      className="bg-primary py-10 lg:py-12"
      aria-label="Trust metrics and performance highlights"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 gap-y-5 px-4 lg:grid-cols-4 lg:gap-5 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`group relative flex min-w-0 flex-col items-center rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.06] px-2 py-4 text-center shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-primary-foreground/[0.1] hover:shadow-lg sm:px-3 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <div className="mb-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <stat.icon className="h-5 w-5 text-primary-foreground" aria-hidden />
            </div>
            <p className="text-2xl font-bold tabular-nums text-primary-foreground sm:text-3xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <p className="mt-1 max-w-[10rem] text-balance text-[11px] font-medium leading-snug text-primary-foreground/85 sm:max-w-[12rem] sm:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
