import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Reveal } from "@/components/reveal"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ServiceConsultationCta } from "@/components/service-consultation-cta"
import { ResponsiveMediaFrame } from "@/components/responsive-media-frame"
import {
  SERVICES,
  getServiceBySlug,
  getAllServiceSlugs,
  type ServiceItem,
} from "@/lib/services-data"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
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
  const title = `${service.title} | QHS Consultants Ltd`
  const description = (
    service.shortDescription +
    " QHS Consultants Ltd supports hospitals and clinics across Nigeria and West Africa. Call +1 (252) 691 4076 to discuss."
  ).slice(0, 300)
  const ogImage =
    typeof service.image === "string" && service.image.startsWith("/")
      ? `${BASE_URL}${service.image}`
      : service.image

  return {
    title: service.title.replace(/\.\s*$/, ""),
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/services/${slug}`,
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
  }
}

function ServiceJsonLd({ service }: { service: ServiceItem }) {
  const description = [service.longDescription, service.heroParagraph2].filter(Boolean).join(" ")
  const name = service.title.replace(/\.\s*$/, "")
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${BASE_URL}/services/${service.id}`,
    provider: {
      "@type": "Organization",
      name: "Quality Healthcare Services (QHS) Consultants Ltd",
      url: BASE_URL,
      telephone: "+1-252-691-4076",
    },
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Place", name: "West Africa" },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
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
  const phoneDisplay = service.phoneAppointment ? "+1 (573) 264 7695" : "+1 (252) 691 4076"

  return (
    <>
      <ServiceJsonLd service={service} />
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 lg:px-8">
            <nav className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <span>/</span>
              <span className="min-w-0 break-words font-medium text-foreground">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-x-hidden px-4 py-8 sm:py-9 md:py-12 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="min-w-0">
                <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl motion-safe:animate-in motion-safe:fade-in motion-safe:fill-mode-backwards motion-safe:duration-700 motion-safe:ease-out motion-safe:slide-in-from-bottom-4">
                  {service.title}
                </h1>
                <p style={{ animationDelay: "120ms" }} className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg motion-safe:animate-in motion-safe:fade-in motion-safe:fill-mode-backwards motion-safe:duration-700 motion-safe:ease-out motion-safe:slide-in-from-bottom-4">
                  {service.longDescription}
                </p>
                {service.heroParagraph2 ? (
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {service.heroParagraph2}
                  </p>
                ) : null}
                <div style={{ animationDelay: "260ms" }} className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap motion-safe:animate-in motion-safe:fade-in motion-safe:fill-mode-backwards motion-safe:duration-700 motion-safe:ease-out motion-safe:slide-in-from-bottom-4">
                  <ServiceConsultationCta serviceId={service.id} className="w-full sm:w-auto">
                    {service.cta}
                  </ServiceConsultationCta>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary/25 bg-background transition-all duration-200 hover:bg-primary/5 motion-safe:hover:-translate-y-0.5 sm:w-auto"
                    asChild
                  >
                    <Link href="/services">View all services</Link>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Prefer to call?{" "}
                  <a href={phoneHref} className="font-medium text-primary underline-offset-4 hover:underline">
                    {phoneDisplay}
                  </a>
                  <span className="hidden sm:inline"> — {service.phoneLabel}</span>
                </p>
              </div>
              <div style={{ animationDelay: "150ms" }} className="min-w-0 w-full max-w-full motion-safe:animate-in motion-safe:fade-in motion-safe:fill-mode-backwards motion-safe:duration-700 motion-safe:ease-out motion-safe:slide-in-from-right-8 motion-safe:duration-1000">
                <ResponsiveMediaFrame className="shadow-2xl shadow-primary/20">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover object-center motion-safe:animate-[service-zoom_1.6s_cubic-bezier(0.16,1,0.3,1)_both]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </ResponsiveMediaFrame>
              </div>
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t bg-muted/20 px-4 py-10 sm:px-5 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              What We Deliver
            </h2>
            <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">
              Our engagement is tailored to your facility and goals. Here is what you can expect.
            </p>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.bullets.map((bullet, i) => (
                <li key={bullet}>
                  <Reveal delayMs={(i % 2) * 90} className="h-full">
                    <div className="group flex h-full items-start gap-3 rounded-xl border border-white bg-card p-4 shadow-md ring-1 ring-border/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-500 group-hover:scale-125" />
                      <span className="text-muted-foreground">{bullet}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Outcomes */}
        {service.outcomes && service.outcomes.length > 0 && (
          <section className="px-4 py-10 sm:px-5 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                What You Gain
              </h2>
              <p className="mt-2 text-muted-foreground">
                Hospitals that partner with us see measurable, lasting results.
              </p>
              <ul className="mt-8 space-y-4">
                {service.outcomes.map((outcome, i) => (
                  <li key={outcome}>
                    <Reveal from="left" delayMs={i * 80}>
                      <div className="group flex items-start gap-3 rounded-2xl border border-l-4 border-l-primary bg-gradient-to-r from-primary/[0.07] to-card p-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1.5 hover:shadow-lg hover:shadow-primary/10">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-500 group-hover:scale-125" />
                        <span className="text-foreground">{outcome}</span>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA box */}
        <section className="border-t bg-foreground px-4 py-9 text-background sm:px-5 sm:py-10 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-balance text-background/80">
              {service.ctaSubtext}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <ServiceConsultationCta serviceId={service.id} tone="onDark" className="w-full sm:w-auto">
                {service.cta}
              </ServiceConsultationCta>
            </div>
            <p className="mt-6 text-sm text-background/65">
              <a href={phoneHref} className="font-medium text-background underline-offset-4 hover:underline">
                {service.phoneLabel}
              </a>
            </p>
          </Reveal>
        </section>

        {/* Related services */}
        <section className="px-4 py-10 sm:px-5 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Explore More Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              We offer end-to-end support for healthcare facilities in Nigeria and West Africa.
            </p>
            <Reveal className="mt-8">
              <RelatedServices currentId={service.id} />
            </Reveal>
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
