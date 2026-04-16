import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, Mail, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brochures & Capability Summaries | QHS Consultants Ltd",
  description:
    "Request QHS Consultants Ltd service brochures and capability summaries for accreditation, quality, clinical governance, strategy, training, and medical equipment advisory in Nigeria.",
  keywords: [
    "healthcare consulting brochure",
    "QHS Consultants services PDF",
    "hospital consultancy Nigeria",
    "JCI accreditation consulting",
  ],
  openGraph: {
    title: "Brochures | QHS Consultants Ltd",
    description: "Request printed or PDF brochures outlining our healthcare consultancy services.",
  },
}

const brochureTopics = [
  "Accreditation & survey readiness (JCI, Society for Quality in Healthcare in Nigeria (SQHN))",
  "Quality improvement & patient safety",
  "Clinical risk, governance, and strategy",
  "Medical training & leadership development",
  "Medical equipment sourcing & ROI",
]

export default function BrochuresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="border-b bg-muted px-4 py-16 md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Resources
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Brochures
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Request overview materials for your board, procurement, or clinical leadership. We will
              send the most relevant summaries for your sector and priorities.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-16 lg:px-8">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-7 w-7" aria-hidden />
              </div>
            </div>
            <h2 className="text-center text-xl font-semibold text-foreground">What we can send</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {brochureTopics.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    •
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="mailto:contact@qhsconsultant.com?subject=Brochure%20request">
                  <Mail className="mr-2 h-4 w-4" />
                  Email brochure request
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+12526914076">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +1 (252) 691 4076
                </a>
              </Button>
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Prefer a structured ask? Use{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact
              </Link>{" "}
              and mention brochures in your message.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
