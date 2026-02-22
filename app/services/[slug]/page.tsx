import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  SERVICES,
  getServiceBySlug,
  getAllServiceSlugs,
  type ServiceItem,
} from "@/lib/services-data"
import { CheckCircle2, Phone, ArrowRight, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

const BASE_URL = "https://qhsconsultant.com"

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }
  const title = `${service.title} | Q.H.S Consultants Ltd.`
  const description =
    service.shortDescription + " Call +1 (252) 691 4076 to discuss."
  const ogImage =
    typeof service.image === "string" && service.image.startsWith("/")
      ? `${BASE_URL}${service.image}`
      : service.image

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/services/${slug}`,
      images: [ogImage],
    },
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
  }
}

function RelatedServices({ currentId }: { currentId: string }) {
  const others = SERVICES.filter((s) => s.id !== currentId).slice(0, 3)
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {others.map((s) => (
        <Link
          key={s.id}
          href={`/services/${s.id}`}
          className="group rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
        >
          <h4 className="font-semibold text-foreground group-hover:text-primary">
            {s.title}
          </h4>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {s.shortDescription}
          </p>
          <span className="mt-2 inline-flex items-center text-sm font-medium text-primary">
            Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </span>
        </Link>
      ))}
    </div>
  )
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const phoneHref = service.phoneAppointment ? "tel:+15732647695" : "tel:+12526914076"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <span>/</span>
              <span className="font-medium text-foreground">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-12 md:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.longDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      {service.cta}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized={typeof service.image === "string" && service.image.startsWith("/")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t bg-muted/20 px-4 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              What We Deliver
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our engagement is tailored to your facility and goals. Here’s what you can expect.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Outcomes */}
        {service.outcomes && service.outcomes.length > 0 && (
          <section className="px-4 py-14 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                What You Gain
              </h2>
              <p className="mt-2 text-muted-foreground">
                Hospitals that partner with us see measurable, lasting results.
              </p>
              <ul className="mt-8 space-y-4">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 rounded-lg border bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA box */}
        <section className="border-t bg-foreground px-4 py-14 text-background lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-background/80">
              {service.ctaSubtext}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={phoneHref}
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                {service.cta}
              </a>
              <span className="flex items-center text-sm text-background/70">
                {service.phoneLabel}
              </span>
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="px-4 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Explore More Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              We offer end-to-end support for healthcare facilities in Nigeria and West Africa.
            </p>
            <div className="mt-8">
              <RelatedServices currentId={service.id} />
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
