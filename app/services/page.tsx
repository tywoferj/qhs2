import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ServiceConsultationCta, ConsultationCtaLink } from "@/components/service-consultation-cta"
import { ResponsiveMediaFrame } from "@/components/responsive-media-frame"
import { SERVICES } from "@/lib/services-data"
import { CheckCircle2, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Healthcare Consulting Nigeria | JCI & SQH Accreditation, Quality, Clinical Governance | QHS Consultants Ltd",
  description:
    "Hospital and healthcare consulting in Nigeria and West Africa: JCI accreditation support, SQH readiness, clinical risk and governance, quality improvement and patient safety, healthcare strategy, medical training, and medical equipment sourcing with ROI advisory. Lagos-based. Call +1 (252) 691 4076.",
  keywords: [
    "healthcare consulting Nigeria",
    "hospital consulting Lagos",
    "JCI accreditation Nigeria",
    "SQH accreditation support",
    "clinical governance consulting",
    "clinical risk management Nigeria",
    "healthcare quality improvement",
    "patient safety consulting",
    "healthcare strategy West Africa",
    "medical training hospitals",
    "medical equipment sourcing Nigeria",
    "hospital accreditation consultant",
  ],
  openGraph: {
    title: "Healthcare Consulting Services | QHS Consultants Ltd",
    description:
      "JCI and SQH accreditation, quality and patient safety, clinical governance, healthcare strategy, medical training, and equipment sourcing for hospitals in Nigeria and West Africa.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-x-hidden bg-muted px-4 py-12 sm:px-5 sm:py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              What We Do
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Healthcare consulting services for hospitals and health systems
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              JCI and SQH accreditation support, clinical strategy and governance, quality improvement and
              patient safety, healthcare strategy, medical training, and medical equipment sourcing—delivered
              for hospitals, diagnostic networks, and investors across Nigeria and West Africa.
            </p>
            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCtaLink className="w-full sm:w-auto">Request a consultation</ConsultationCtaLink>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary/25 bg-background transition-all duration-200 hover:bg-primary/5 motion-safe:hover:-translate-y-0.5 sm:w-auto"
                asChild
              >
                <a href="tel:+12526914076" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span className="leading-snug">Call +1 (252) 691 4076</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="tel:+15732647695" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span className="leading-snug">Book with Dr Onakoya</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service sections */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12 lg:px-8">
          {SERVICES.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 py-10 sm:py-14 md:py-16 ${index > 0 ? "border-t border-border" : ""}`}
            >
              <div
                className={`grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`min-w-0 w-full max-w-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ResponsiveMediaFrame>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                      unoptimized={typeof service.image === "string" && service.image.startsWith("/")}
                    />
                  </ResponsiveMediaFrame>
                </div>
                <div className={`min-w-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Link href={`/services/${service.id}`}>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl hover:text-primary hover:underline">
                      {service.title}
                    </h2>
                  </Link>
                  <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                    {service.longDescription}
                  </p>
                  {service.heroParagraph2 ? (
                    <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                      {service.heroParagraph2}
                    </p>
                  ) : null}
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 rounded-xl border border-border/80 bg-muted/40 p-5 sm:p-6">
                    <p className="mb-4 text-sm font-medium text-foreground">
                      {service.ctaSubtext}
                    </p>
                    <ServiceConsultationCta serviceId={service.id} className="w-full sm:w-auto">
                      {service.cta}
                    </ServiceConsultationCta>
                    <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <a
                        href={service.phoneAppointment ? "tel:+15732647695" : "tel:+12526914076"}
                        className="hover:text-primary hover:underline"
                      >
                        {service.phoneLabel}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="border-t bg-foreground px-4 py-12 text-background sm:px-5 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to Transform Your Facility?
            </h2>
            <p className="mt-3 text-balance text-background/70">
              Start with a structured consultation, or call us directly.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <ConsultationCtaLink tone="onDark" className="w-full sm:w-auto">
                Request a consultation
              </ConsultationCtaLink>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-background/35 bg-transparent text-background hover:bg-background/10 sm:w-auto"
                asChild
              >
                <a href="tel:+12526914076" className="inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  +1 (252) 691 4076
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-background/35 bg-transparent text-background hover:bg-background/10 sm:w-auto"
                asChild
              >
                <a href="tel:+15732647695" className="inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Dr Onakoya +1 (573) 264 7695
                </a>
              </Button>
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
