import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ConsultationRequestForm } from "@/components/consultation-request-form"
import { Phone, Mail } from "lucide-react"
import { getDefaultServiceCategoryFromQuery } from "@/lib/consultation-form-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultation Request | QHS Consultants Ltd",
  description:
    "Submit a consultation request to QHS Consultants Ltd. Hospital accreditation, clinical governance, quality, strategy, training, and equipment advisory in Nigeria and West Africa.",
  openGraph: {
    title: "Consultation Request | QHS Consultants Ltd",
    description:
      "Structured consultation form for healthcare institutions and partners across Nigeria and West Africa.",
  },
}

type PageProps = {
  searchParams: Promise<{ service?: string }>
}

export default async function ConsultationRequestPage({ searchParams }: PageProps) {
  const params = await searchParams
  const raw = params.service?.trim() || undefined
  const invalidServiceSlug = Boolean(raw && !getDefaultServiceCategoryFromQuery(raw))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative overflow-x-hidden border-b border-border/60 bg-muted/30 px-4 py-6 sm:px-5 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Consultation request
            </p>
            <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Tell us what you need
            </h1>
          </div>
        </section>

        <section className="border-b border-border/40 bg-muted/20 px-4 py-8 sm:px-5 sm:py-10 lg:px-8">
          <ConsultationRequestForm
            key={raw ?? "__default__"}
            initialServiceSlug={raw}
            invalidServiceSlug={invalidServiceSlug}
          />
        </section>

        <section className="bg-background px-4 py-10 sm:px-5 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:text-left">
            <Button size="lg" className="w-full bg-primary text-primary-foreground sm:w-auto" asChild>
              <a href="tel:+12526914076">
                <Phone className="mr-2 h-4 w-4" />
                Call +1 (252) 691 4076
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="tel:+15732647695">
                <Phone className="mr-2 h-4 w-4" />
                Book specialist / advisory
              </a>
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto" asChild>
              <a href="mailto:contact@qhsconsultant.com" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@qhsconsultant.com
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
