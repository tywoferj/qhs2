import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { IMAGES } from "@/lib/images"
import { Phone, Mail, MapPin } from "lucide-react"
import { RequestProposalDialog } from "@/components/request-proposal-dialog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Healthcare Consultancy Nigeria | QHS Consultants Ltd",
  description:
    "Contact Quality Healthcare Services (QHS) Consultants Ltd. Discuss services on +1 (252) 691 4076 or book a specialist or advisory appointment on +1 (573) 264 7695. Ikeja, Lagos.",
  openGraph: {
    title: "Contact QHS Consultants Ltd | Healthcare Consultancy Nigeria",
    description:
      "Get in touch for JCI accreditation, hospital operations, and healthcare consulting. Lagos, Nigeria.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-muted px-4 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Let’s Transform Your Healthcare Facility Together
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Get in touch to discuss our services or to book a specialist or advisory appointment. We serve healthcare institutions across Nigeria and West Africa.
            </p>
          </div>
        </section>

        {/* Content + image */}
        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-md">
                <Image
                  src={IMAGES.contactPage}
                  alt="Healthcare professional using mobile technology; contact QHS Consultants Ltd for hospital consultancy in Nigeria and West Africa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
              <Reveal delayMs={80}>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  How to Reach Us
                </h2>
                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Discuss our services</p>
                      <a href="tel:+12526914076" className="text-muted-foreground hover:text-primary">
                        +1 (252) 691 4076
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Book specialist / Advisory Appointment</p>
                      <a href="tel:+15732647695" className="text-muted-foreground hover:text-primary">
                        +1 (573) 264 7695
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:contact@qhsconsultant.com" className="text-muted-foreground hover:text-primary">
                        contact@qhsconsultant.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        57B, Hibiscus Street, M.K.O Abiola Gardens, C.B.D, Ikeja
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:w-auto"
                    asChild
                  >
                    <a href="tel:+12526914076">Call to discuss services</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full transition-all duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:w-auto"
                    asChild
                  >
                    <a href="tel:+15732647695">Book specialist / Advisory Appointment</a>
                  </Button>
                  <RequestProposalDialog />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
