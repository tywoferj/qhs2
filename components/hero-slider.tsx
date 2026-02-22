"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  HERO_SLIDER_IMAGES,
  HERO_SLIDE_FALLBACK_TEAM,
  HERO_SLIDE_FALLBACK_CLINIC,
} from "@/lib/images"

const INTERVAL_MS = 5000

const altTexts = [
  "Surgeon in operating theater – healthcare professional, Q.H.S Consultants Ltd.",
  "Modern operating room interior – surgical suite, healthcare facility",
  "Modern clinic – contemporary healthcare facility, Q.H.S Consultants Ltd.",
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [slide1Error, setSlide1Error] = useState(false)
  const [slide2Error, setSlide2Error] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDER_IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const getSrc = (i: number) => {
    if (i === 0 && slide1Error) return HERO_SLIDE_FALLBACK_TEAM
    if (i === 1 && slide2Error) return HERO_SLIDE_FALLBACK_CLINIC
    return HERO_SLIDER_IMAGES[i]
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
      {HERO_SLIDER_IMAGES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 1 : 0,
          }}
        >
          <Image
            src={getSrc(i)}
            alt={altTexts[i] ?? "Healthcare facility"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
            unoptimized={getSrc(i).startsWith("/images/")}
            onError={() => {
              if (i === 0) setSlide1Error(true)
              if (i === 1) setSlide2Error(true)
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-primary/20 z-[1]" />
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-2">
        {HERO_SLIDER_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
