import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hospital Accreditation Checklist | JCI & SQH Readiness | QHS Consultants Ltd",
  description:
    "A practical accreditation readiness checklist for Nigerian hospitals: governance, documentation, mock surveys, tracer readiness, and continuous improvement for JCI and SQH.",
  keywords: [
    "JCI accreditation checklist",
    "SQH accreditation Nigeria",
    "hospital accreditation readiness",
    "mock survey preparation",
    "healthcare documentation standards",
  ],
  openGraph: {
    title: "Accreditation Readiness Checklist | QHS Consultants Ltd",
    description:
      "High-level checklist to prepare your hospital for JCI, SQH, and related quality surveys.",
  },
}

const checklistSections: { title: string; items: string[] }[] = [
  {
    title: "Leadership & governance",
    items: [
      "Executive sponsor and accreditation programme owner named",
      "Cross-functional team (clinical, nursing, quality, admin, records) with clear roles",
      "Steering rhythm: milestones, risks, and decisions documented",
    ],
  },
  {
    title: "Standards & documentation",
    items: [
      "Master index of required policies, procedures, and clinical guidelines",
      "Version control, approval dates, and owners for each document",
      "Alignment with selected standard (e.g. JCI / SQH) and local regulation",
    ],
  },
  {
    title: "Clinical & operational readiness",
    items: [
      "Tracer-ready patient flows (admission, medication, surgery, infection control)",
      "Incident reporting, RCA, and improvement projects active—not only pre-survey",
      "High-risk areas audited: medication safety, IPC, patient identification, consent",
    ],
  },
  {
    title: "Mock survey & culture",
    items: [
      "At least one full mock survey with realistic tracer scenarios",
      "Staff briefed on how to describe actual practice (not aspirational)",
      "Feedback loop: findings tracked to closure before survey window",
    ],
  },
]

export default function AccreditationChecklistPage() {
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
              Accreditation readiness checklist
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Use this high-level checklist to align your hospital before JCI, SQH, or similar surveys.
              It complements—not replaces—your standard-specific requirements and local regulations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="tel:+12526914076">
                  <Phone className="mr-2 h-4 w-4" />
                  Discuss readiness
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
          {checklistSections.map((section) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="rounded-xl border bg-muted/50 p-6 text-sm text-muted-foreground">
            Need a structured gap analysis or mock survey tailored to your facility?{" "}
            <Link href="/services/accreditation" className="font-medium text-primary hover:underline">
              View our accreditation support
            </Link>{" "}
            or call{" "}
            <a href="tel:+12526914076" className="font-medium text-primary hover:underline">
              +1 (252) 691 4076
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
