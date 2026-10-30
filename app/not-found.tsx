import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SERVICES } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-gradient-to-br from-primary/[0.08] via-background to-secondary/[0.08] px-4 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Error 404</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            We could not find that page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The link may be out of date or mistyped. Try one of these instead.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-primary/40 px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Contact us
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services/${s.id}`}
                  className="inline-block rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {s.title.replace(/\.$/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
