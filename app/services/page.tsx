import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/services-data"
import { CheckCircle2, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultancy & Advisory Services | Q.H.S Consultants Ltd.",
  description:
    "Quality Healthcare Services (Q.H.S) Consultants Ltd.: healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, medical equipment sourcing. Call +1 (252) 691 4076.",
  openGraph: {
    title: "Consultancy & Advisory Services | Q.H.S Consultants Ltd.",
    description:
      "Healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, medical equipment sourcing.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-muted px-4 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              What We Do
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Comprehensive Healthcare Solutions for Nigeria
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              From JCI and SQH accreditation to operational excellence and strategic growth, we deliver end-to-end consulting tailored to healthcare facilities across Nigeria and West Africa. Trusted by 10+ hospitals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="tel:+12526914076">
                  <Phone className="mr-2 h-4 w-4" />
                  Discuss Services — +1 (252) 691 4076
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15732647695">
                  Book with Dr Onakoya — +1 (573) 264 7695
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service sections */}
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          {SERVICES.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 py-16 ${index > 0 ? "border-t border-border" : ""}`}
            >
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Link href={`/services/${service.id}`}>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl hover:text-primary hover:underline">
                      {service.title}
                    </h2>
                  </Link>
                  <p className="mt-4 text-muted-foreground">
                    {service.longDescription}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 rounded-xl border bg-muted/50 p-6">
                    <p className="mb-2 text-sm font-medium text-foreground">
                      {service.ctaSubtext}
                    </p>
                    <Button className="w-full sm:w-auto" asChild>
                      <a href={service.phoneAppointment ? "tel:+15732647695" : "tel:+12526914076"}>
                        {service.cta}
                      </a>
                    </Button>
                    <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      {service.phoneLabel}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="border-t bg-foreground px-4 py-16 text-background lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to Transform Your Facility?
            </h2>
            <p className="mt-3 text-background/70">
              Discuss our services or book an appointment with Dr Onakoya.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+12526914076"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
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
