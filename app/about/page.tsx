import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/images"
import { CheckCircle2, Phone, Award, Building2, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Healthcare Consultancy Nigeria | Q.H.S Consultants Ltd.",
  description:
    "Quality Healthcare Services (Q.H.S) Consultants Ltd.: consultancy and advisory in healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, and medical equipment sourcing. Call +1 (252) 691 4076.",
  openGraph: {
    title: "About Q.H.S Consultants Ltd. | Healthcare Consultancy Nigeria",
    description:
      "Consultancy and advisory in healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, and medical equipment sourcing.",
  },
}

const values = [
  "Patient safety and quality at the center of every engagement",
  "Practical, context-aware solutions for Nigerian healthcare",
  "Partnership and knowledge transfer, not dependency",
  "Integrity and transparency in all we do",
]

const highlights = [
  { icon: Award, label: "JCI & SQH Experts", sub: "Accreditation leadership" },
  { icon: Building2, label: "10+ Hospitals", sub: "Transformed across Nigeria" },
  { icon: Users, label: "30+ Years", sub: "Proven experience" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-muted px-4 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Transforming Healthcare Excellence Across Nigeria
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              For over 30 years, we have partnered with healthcare institutions to achieve world-class standards through expert consulting, accreditation support, and operational transformation. Trusted by Nigeria’s leading hospitals and medical centers.
            </p>
          </div>
        </section>

        {/* Story + image */}
        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={IMAGES.aboutPage}
                  alt="Healthcare consultancy team and hospital partnership in Nigeria – diverse medical professionals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We exist to elevate the quality, safety, and sustainability of healthcare delivery in Nigeria and West Africa. Through hands-on consulting, accreditation readiness, and operational excellence, we help hospitals and health systems deliver better outcomes for patients and communities.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our team brings deep experience in JCI and SafeCare Quality of Healthcare (SQH) accreditation, hospital operations, strategic planning, and clinical governance. We combine international best practices with a sharp understanding of the Nigerian context—regulation, workforce, and market realities—so our recommendations are both ambitious and achievable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="border-t bg-muted/20 px-4 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border bg-card p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <h.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-3 text-xl font-bold text-foreground">{h.label}</p>
                  <p className="text-sm text-muted-foreground">{h.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              What We Stand For
            </h2>
            <ul className="mt-8 space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-foreground px-4 py-16 text-background lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Let’s Work Together
            </h2>
            <p className="mt-3 text-background/80">
              Discuss your goals or book an appointment with Dr Onakoya.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+12526914076"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                +1 (252) 691 4076 — Discuss services
              </a>
              <a
                href="tel:+15732647695"
                className="inline-flex items-center rounded-lg border border-background/30 px-6 py-3 text-sm font-semibold text-background hover:bg-background/10"
              >
                +1 (573) 264 7695 — Book with Dr Onakoya
              </a>
            </div>
            <p className="mt-6">
              <Link href="/" className="text-sm text-background/60 hover:text-background">
                ← Back to Home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
