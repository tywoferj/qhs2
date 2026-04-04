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
      className="bg-primary py-16 lg:py-20"
      aria-label="Trust metrics and performance highlights"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 gap-y-10 px-4 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex min-w-0 flex-col items-center px-1 text-center sm:px-2"
          >
            <div className="mb-3 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
              <stat.icon className="h-7 w-7 text-primary-foreground" aria-hidden />
            </div>
            <p className="text-3xl font-bold tabular-nums text-primary-foreground sm:text-4xl md:text-5xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <p className="mt-2 max-w-[11rem] text-balance text-xs font-medium leading-snug text-primary-foreground/85 sm:max-w-[13rem] sm:text-sm lg:max-w-[14rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
