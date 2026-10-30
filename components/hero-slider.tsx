"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  HERO_SLIDER_IMAGES,
  HERO_SLIDE_FALLBACK_TEAM,
  HERO_SLIDE_FALLBACK_CLINIC,
} from "@/lib/images"
import { cn } from "@/lib/utils"

const INTERVAL_MS = 5500
const SWIPE_PX = 40

const altTexts = [
  "Surgeon in operating theater – healthcare professional, QHS Consultants Ltd",
  "Operating room interior – surgical suite, healthcare facility",
  "Modern clinic – contemporary healthcare facility, QHS Consultants Ltd",
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [slide1Error, setSlide1Error] = useState(false)
  const [slide2Error, setSlide2Error] = useState(false)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const count = HERO_SLIDER_IMAGES.length

  // Auto-advance, but not while the tab is hidden, the user is touching it, or reduced motion is on.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % count)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, count])

  const getSrc = (i: number) => {
    if (i === 0 && slide1Error) return HERO_SLIDE_FALLBACK_TEAM
    if (i === 1 && slide2Error) return HERO_SLIDE_FALLBACK_CLINIC
    return HERO_SLIDER_IMAGES[i]
  }

  return (
    <div
      className="relative aspect-[5/4] w-full min-w-0 max-w-full touch-pan-y overflow-hidden rounded-2xl shadow-2xl sm:aspect-[4/3]"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX
        setPaused(true)
      }}
      onTouchEnd={(e) => {
        const start = touchX.current
        touchX.current = null
        setPaused(false)
        if (start == null) return
        const dx = e.changedTouches[0].clientX - start
        if (Math.abs(dx) < SWIPE_PX) return
        setIndex((i) => (dx < 0 ? (i + 1) % count : (i - 1 + count) % count))
      }}
      role="group"
      aria-roledescription="carousel"
      aria-label="Healthcare facilities"
    >
      {HERO_SLIDER_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={getSrc(i)}
            alt={altTexts[i] ?? "Healthcare facility"}
            fill
            className={cn(
              "object-cover object-center motion-safe:transition-transform motion-safe:duration-[6500ms] motion-safe:ease-out",
              i === index ? "scale-100" : "motion-safe:scale-[1.06]"
            )}
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "low"}
            onError={() => {
              if (i === 0) setSlide1Error(true)
              if (i === 1) setSlide2Error(true)
            }}
          />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-primary/10" />
      {/* Dots: 24px tap area around a small visual dot */}
      <div className="absolute bottom-1 left-1/2 z-[2] flex -translate-x-1/2">
        {HERO_SLIDER_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="flex h-8 w-8 items-center justify-center"
          >
            <span
              className={cn(
                "block h-2 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/55"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
