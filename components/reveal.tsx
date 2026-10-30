"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay after the element enters the viewport (ms). */
  delayMs?: number
  /** Direction the content travels from. */
  from?: "up" | "left" | "right" | "none"
}

const hiddenState = {
  up: "translate-y-4",
  left: "-translate-x-5",
  right: "translate-x-5",
  none: "",
} as const

/**
 * Fades and slides content into view as it crosses the viewport.
 *
 * Content is fully visible in the server-rendered HTML (no invisible hero text before
 * hydration, nothing hidden from crawlers). Only elements that start below the fold are
 * armed for the reveal. Respects `prefers-reduced-motion`.
 */
export function Reveal({ children, className, delayMs = 0, from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Already on screen at load: leave it alone so the first paint is never delayed.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return

    setArmed(true)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden = armed && !visible

  return (
    <div
      ref={ref}
      className={cn(
        // ease-out-expo: fast start, soft landing; only opacity/transform are animated.
        "motion-safe:transition-[opacity,transform] motion-safe:duration-[650ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
        hidden ? cn("opacity-0", hiddenState[from]) : "translate-x-0 translate-y-0 opacity-100",
        className
      )}
      style={armed && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
