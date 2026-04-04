import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | Consultation Request Received | QHS Consultants Ltd",
  description:
    "Your consultation request was submitted. The QHS Consultants Ltd team will be in touch.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Thank You | QHS Consultants Ltd",
    description: "Your consultation request was received.",
  },
}

export default function ConsultationThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-background px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-9 w-9" aria-hidden />
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Thank you
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your consultation request has been received. Our team will review your details and contact
            you using your preferred method and timeframe.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you need to reach us sooner, call{" "}
            <a href="tel:+12526914076" className="font-medium text-primary hover:underline">
              +1 (252) 691 4076
            </a>
            .
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button className="w-full bg-primary text-primary-foreground sm:w-auto" asChild>
              <Link href="/">Back to home</Link>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
