"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Award, Clock, ThumbsUp } from "lucide-react"

const stats = [
  { icon: Building2, value: 12, suffix: "+", label: "Healthcare Transformed" },
  { icon: Award, value: 15, suffix: "+", label: "JCI/SQH Accreditations" },
  { icon: Clock, value: 30, suffix: "+", label: "Years Experience" },
  { icon: ThumbsUp, value: 100, suffix: "%", label: "Client Satisfaction" },
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
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-primary py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
              <stat.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="text-4xl font-bold text-primary-foreground md:text-5xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <p className="mt-1 text-sm font-medium text-primary-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
