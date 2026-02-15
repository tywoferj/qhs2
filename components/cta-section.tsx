import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

const PHONE_SERVICES = "+12526914076"
const PHONE_APPOINTMENT = "+15732647695"

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-20 lg:py-28">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-secondary/10" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-background md:text-4xl lg:text-5xl">
          Ready to Transform Your Healthcare Facility?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-background/70">
          Schedule a complimentary consultation with our expert team and discover
          how we can help you achieve operational excellence.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
        <div className="mt-6 space-y-2 text-sm text-background/60">
          <p className="flex flex-wrap items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Discuss our services:</span>
            <a
              href={`tel:${PHONE_SERVICES}`}
              className="font-medium text-background/80 underline underline-offset-4 hover:text-background"
            >
              +1 (252) 691 4076
            </a>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Book appointment with Dr Onakoya:</span>
            <a
              href={`tel:${PHONE_APPOINTMENT}`}
              className="font-medium text-background/80 underline underline-offset-4 hover:text-background"
            >
              +1 (573) 264 7695
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
