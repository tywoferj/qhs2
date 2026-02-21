"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Q.H.S Consultants Ltd.'s expertise was instrumental in our JCI accreditation success. Their methodical approach and deep understanding of international healthcare standards set them apart from any other consultancy we've worked with.",
    name: "Dr. Adeyemi Johnson",
    title: "Medical Director",
    org: "Premier Hospital Lagos",
  },
  {
    quote:
      "We achieved a 40% improvement in operational efficiency within six months of engaging Q.H.S Consultants Ltd. Their team brought transformative insights that have permanently changed how we deliver care to our patients.",
    name: "Mrs. Folake Adebayo",
    title: "CEO",
    org: "Multi-Specialty Medical Center",
  },
  {
    quote:
      "Their strategic and clinical advisory was invaluable for our healthcare portfolio. Q.H.S Consultants Ltd.'s thorough analysis and recommendations gave us the confidence to make informed decisions.",
    name: "Mr. Chidi Okonkwo",
    title: "Managing Partner",
    org: "HealthVest Capital",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by Nigeria{"'"}s Leading Healthcare Institutions
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border text-foreground transition-colors hover:bg-muted"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border text-foreground transition-colors hover:bg-muted"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <div className="flex flex-col rounded-xl border bg-card p-8 shadow-sm">
      <Quote className="mb-4 h-8 w-8 text-primary/20" />
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {`"${testimonial.quote}"`}
      </blockquote>
      <div className="border-t pt-4">
        <p className="font-semibold text-card-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.title}, {testimonial.org}
        </p>
      </div>
    </div>
  )
}
