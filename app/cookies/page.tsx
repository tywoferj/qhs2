import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { CookiePreferencesPanel } from "@/components/cookie-preferences-panel"

export const metadata: Metadata = {
  title: "Cookie Policy | QHS Consultants Ltd",
  description:
    "How Quality Healthcare Services (QHS) Consultants Ltd uses cookies and similar technologies, and how you can manage preferences (NDPA 2023 and GDPR-aligned).",
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: 4 April 2026</p>

          <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. What are cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files stored on your device when you visit a website. Similar technologies
                include local storage and session storage, which we may use to remember your cookie choices. This
                policy explains what we use today and how you can control optional cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. How we use cookies</h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Essential cookies and storage</strong> are required for core
                features such as displaying the site, remembering that you have made a choice in our cookie banner,
                and keeping the experience stable. These are always on and do not require consent under typical
                interpretations of the Nigeria Data Protection Act 2023 (NDPA) and the EU/UK GDPR, because they are
                strictly necessary.
              </p>
              <p className="mt-3 text-muted-foreground">
                <strong className="text-foreground">Analytics cookies</strong> are optional. If you enable them, we
                may use them in the future to collect aggregated statistics (for example, page views and navigation
                patterns). We do not use optional cookies to sell personal data. Currently, enabling analytics
                primarily records your preference so that, when we add an analytics tool, it will respect your
                choice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Third-party content</h2>
              <p className="text-muted-foreground">
                Some pages may display embedded content or images from third parties (for example, hosted media).
                Those providers may set their own cookies or similar technologies according to their policies. We
                do not control third-party cookies; please review their privacy and cookie notices where relevant.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Managing your preferences</h2>
              <p className="text-muted-foreground">
                Use the panel below to allow or refuse optional analytics cookies. You can change your mind at any
                time. You can also clear site data for this domain in your browser settings, which will remove
                stored preferences and cause the cookie banner to appear again on your next visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Contact</h2>
              <p className="text-muted-foreground">
                Questions about cookies or this policy:{" "}
                <a href="mailto:contact@qhsconsultant.com" className="text-primary hover:underline">
                  contact@qhsconsultant.com
                </a>
                . For broader data protection topics, see our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </div>

          <div className="mt-12">
            <CookiePreferencesPanel />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
