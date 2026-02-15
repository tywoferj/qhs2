import {
  Award,
  Building2,
  Target,
  Stethoscope,
  Bone,
  DollarSign,
  Users,
  ShieldCheck,
  Monitor,
  Briefcase,
  TrendingUp,
  GraduationCap,
  UserCheck,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { SERVICES } from "@/lib/services-data"

const iconMap: Record<string, LucideIcon> = {
  accreditation: Award,
  operations: Building2,
  strategic: Target,
  clinical: Stethoscope,
  orthopedic: Bone,
  financial: DollarSign,
  hr: Users,
  compliance: ShieldCheck,
  technology: Monitor,
  corporate: Briefcase,
  investment: TrendingUp,
  training: GraduationCap,
  interim: UserCheck,
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From accreditation to operational excellence, we deliver end-to-end
            consulting services tailored to the unique needs of healthcare
            facilities across Nigeria and West Africa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.id] ?? Award
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:underline">
                  {"Learn More \u2192"}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
