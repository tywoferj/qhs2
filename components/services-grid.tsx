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
import { Reveal } from "@/components/reveal"
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
  "clinical-risk-governance": ShieldCheck,
  "clinical-strategy": Stethoscope,
  "healthcare-quality": Award,
  "healthcare-strategy": Target,
  "medical-equipment-sourcing": Monitor,
  "medical-training": GraduationCap,
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-gradient-to-b from-background via-primary/[0.05] to-background py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mb-10 text-center">
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
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.id] ?? Award
            const purple = idx % 2 === 1
            return (
              <Reveal key={service.id} delayMs={idx * 55}>
                {/* gradient hairline ring + idle float */}
                <div
                  className={`h-full rounded-[1.6rem] bg-gradient-to-br p-[1.5px] shadow-lg transition-shadow duration-500 motion-safe:animate-float hover:shadow-2xl ${
                    purple
                      ? "from-secondary/60 via-border to-accent/50 shadow-secondary/10 hover:shadow-secondary/30"
                      : "from-primary/60 via-border to-[hsl(165_55%_35%)]/50 shadow-primary/10 hover:shadow-primary/30"
                  }`}
                  style={{ animationDelay: `${(idx % 6) * -1.3}s` }}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-card p-6 outline-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:-translate-y-1.5 motion-safe:hover:-translate-y-1.5"
                  >
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-60 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100 ${
                        purple ? "from-secondary/25 to-accent/10" : "from-primary/25 to-primary/5"
                      }`}
                    />
                    <span
                      aria-hidden
                      className="absolute right-5 top-4 select-none text-5xl font-black leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.08]"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110 ${
                        purple ? "from-secondary to-accent shadow-secondary/30" : "from-primary to-[hsl(165_55%_30%)] shadow-primary/30"
                      }`}
                    >
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <h3 className="relative mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
                    <p className="relative mb-5 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                    <span
                      className={`relative mt-auto inline-flex items-center gap-2 text-sm font-semibold ${purple ? "text-secondary" : "text-primary"}`}
                    >
                      Learn more
                      <span
                        aria-hidden
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:translate-x-1.5 ${
                          purple ? "bg-secondary" : "bg-primary"
                        }`}
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
