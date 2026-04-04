import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Award, Building2, Clock } from "lucide-react"
import { HeroSlider } from "@/components/hero-slider"

const trustBadges = [
  { icon: Clock, label: "30+ Years", sub: "Experience" },
  { icon: Award, label: "Hospital Accreditation Experts", sub: "Accreditation leadership" },
  { icon: Building2, label: "Hospitals", sub: "Transformed" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 py-14 md:py-20 lg:flex-row lg:gap-10 lg:px-8">
        {/* Left content */}
        <Reveal className="flex-1 lg:max-w-[60%]">
          <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Nigeria{"'"}s Leading Healthcare Consultancy
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Transforming Healthcare Excellence Across Nigeria
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            30+ Years of Proven Leadership | Hospital Accreditation Experts
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            We partner with healthcare institutions to achieve world-class
            standards through expert consulting, accreditation support, and
            operational transformation. Trusted by Nigeria{"'"}s top hospitals
            and medical centers.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
              asChild
            >
              <a href="tel:+15732647695">Book with Dr Onakoya</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary transition-all duration-200 hover:bg-primary/5 motion-safe:hover:-translate-y-0.5"
              asChild
            >
              <a href="/services">Explore Services</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 rounded-xl transition-shadow duration-300 motion-safe:hover:bg-muted/60 motion-safe:hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{badge.label}</p>
                  <p className="text-xs text-muted-foreground">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right image – slider, slightly larger */}
        <Reveal className="relative flex-1 lg:max-w-[48%] lg:min-h-[380px]" delayMs={100}>
          <HeroSlider />
          {/* Floating stat card */}
          <div className="absolute -bottom-4 -left-4 z-10 rounded-xl border border-border/50 bg-card p-4 shadow-lg motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-500 md:-bottom-6 md:-left-6">
            <p className="text-2xl font-bold text-primary">98%</p>
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
