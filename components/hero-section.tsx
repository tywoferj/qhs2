import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Building2, Clock } from "lucide-react"
import { IMAGES } from "@/lib/images"

const trustBadges = [
  { icon: Clock, label: "30+ Years", sub: "Experience" },
  { icon: Award, label: "JCI Certified", sub: "Experts" },
  { icon: Building2, label: "10+ Hospitals", sub: "Transformed" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:py-24 lg:flex-row lg:gap-12 lg:px-8">
        {/* Left content */}
        <div className="flex-1 lg:max-w-[60%]">
          <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Nigeria{"'"}s Leading Healthcare Consultancy
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Transforming Healthcare Excellence Across Nigeria
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            30+ Years of Proven Leadership | JCI & SQH Accreditation Experts
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            We partner with healthcare institutions to achieve world-class
            standards through expert consulting, accreditation support, and
            operational transformation. Trusted by Nigeria{"'"}s top hospitals
            and medical centers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="tel:+15732647695">Book with Dr Onakoya</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
              asChild
            >
              <a href="/services">Explore Services</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
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
        </div>

        {/* Right image */}
        <div className="relative flex-1 lg:max-w-[40%]">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={IMAGES.hero}
              alt="Modern healthcare facility interior - Nigeria healthcare consultancy"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg md:-bottom-6 md:-left-6">
            <p className="text-2xl font-bold text-primary">98%</p>
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
