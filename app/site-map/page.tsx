import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { SERVICES } from "@/lib/services-data"
import { getBlogPostsSortedNewestFirst } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Every page on the QHS Consultants Ltd website in one place: services, accreditation resources, blog articles, board of directors, contact and legal pages.",
  alternates: { canonical: "/site-map" },
}

const groups = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Board of Directors", href: "/board" },
      { label: "Contact", href: "/contact" },
      { label: "Request a consultation", href: "/consultation-request" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Accreditation checklist", href: "/accreditation-checklist" },
      { label: "Brochures", href: "/brochures" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
]

export default function SitemapPage() {
  const posts = getBlogPostsSortedNewestFirst()
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        <section className="bg-muted px-4 py-12 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Site map</p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Find your way around
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Every page on the QHS Consultants Ltd website. Search engines can read the machine
              version at{" "}
              <a href="/sitemap.xml" className="font-medium text-primary underline-offset-4 hover:underline">
                sitemap.xml
              </a>
              .
            </p>
          </div>
        </section>

        <section className="px-4 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={g.title} delayMs={i * 60}>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{g.title}</h2>
                <ul className="space-y-1">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="inline-block py-1.5 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h2>
              <ul className="space-y-1">
                <li>
                  <Link href="/services" className="inline-block py-1.5 font-medium text-foreground hover:text-primary">
                    All services
                  </Link>
                </li>
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.id}`}
                      className="inline-block py-1.5 text-muted-foreground transition-colors hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="md:col-span-2">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Blog articles</h2>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="inline-block py-1.5 text-muted-foreground transition-colors hover:text-primary"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
