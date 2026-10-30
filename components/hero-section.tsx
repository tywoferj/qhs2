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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/[0.12] via-background to-secondary/[0.12]">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
      <div className="mx-auto flex max-w-7xl min-w-0 flex-col items-center gap-8 px-4 pb-10 pt-8 sm:px-5 sm:py-14 md:py-20 lg:flex-row lg:items-start lg:gap-10 lg:px-8">
        {/* Left content */}
        <Reveal className="min-w-0 w-full flex-1 lg:max-w-[58%]">
          <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Nigeria{"'"}s Leading Healthcare Consultancy
          </p>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming Healthcare Excellence Across Nigeria
          </h1>
          <p className="mt-3 text-base font-medium text-primary sm:mt-4 sm:text-lg">
            30+ Years of Proven Leadership | Hospital Accreditation Experts
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed sm:mt-4 sm:text-base text-muted-foreground">
            We partner with healthcare institutions to achieve world-class
            standards through expert consulting, accreditation support, and
            operational transformation. Trusted by Nigeria{"'"}s top hospitals
            and medical centers.
          </p>

          <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:w-auto"
              asChild
            >
              <a href="tel:+15732647695">Book with Dr Onakoya</a>
            </Button>
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:w-auto"
              asChild
            >
              <a href="/services">Explore Services</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card/60 p-2.5 text-center transition-shadow sm:flex-row sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0 sm:text-left duration-300 motion-safe:hover:bg-muted/60 motion-safe:hover:shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10">
                  <badge.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight text-foreground sm:text-sm">{badge.label}</p>
                  <p className="hidden text-xs text-muted-foreground sm:block">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right image – slider, slightly larger */}
        <Reveal
          className="relative w-full min-w-0 max-w-full flex-1 lg:max-w-[42%] lg:min-h-0"
          from="none"
          delayMs={100}
        >
          <HeroSlider />
          {/* Floating stat card — hidden on very narrow screens to avoid overlap */}
          <div className="absolute bottom-3 left-3 z-10 rounded-xl border border-border/50 border-l-4 border-l-secondary bg-card px-3 py-2 shadow-lg motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-500 sm:bottom-4 sm:left-4 sm:p-3 lg:-bottom-4 lg:-left-4">
            <p className="text-lg font-bold text-primary">98%</p>
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
