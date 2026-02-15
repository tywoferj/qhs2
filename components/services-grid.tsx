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

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Award,
    title: "Accreditation & Quality Management",
    description:
      "Expert guidance through JCI and SQH accreditation processes with proven methodologies.",
  },
  {
    icon: Building2,
    title: "Hospital Operations & Management",
    description:
      "Streamline operations and improve efficiency across your healthcare facility.",
  },
  {
    icon: Target,
    title: "Strategic Planning & Development",
    description:
      "Develop actionable strategies to drive growth and long-term sustainability.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Governance & Medical Staff",
    description:
      "Establish robust clinical governance frameworks and credentialing systems.",
  },
  {
    icon: Bone,
    title: "Orthopedic Service Line Consulting",
    description:
      "Specialized consulting for orthopedic departments and service lines.",
  },
  {
    icon: DollarSign,
    title: "Financial & Revenue Cycle",
    description:
      "Optimize revenue cycles and financial performance for sustainable growth.",
  },
  {
    icon: Users,
    title: "Human Resource Management",
    description:
      "Build high-performing healthcare teams with talent strategies that work.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Management",
    description:
      "Navigate regulatory requirements and minimize operational risks effectively.",
  },
  {
    icon: Monitor,
    title: "Technology & Information Systems",
    description:
      "Leverage health IT solutions to improve care delivery and data management.",
  },
  {
    icon: Briefcase,
    title: "Corporate Healthcare Advisory",
    description:
      "Strategic advisory services for corporate healthcare programs and benefits.",
  },
  {
    icon: TrendingUp,
    title: "Investment & Due Diligence",
    description:
      "Comprehensive due diligence services for healthcare investment decisions.",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description:
      "Upskill your workforce with tailored training and development programs.",
  },
  {
    icon: UserCheck,
    title: "Interim Management Services",
    description:
      "Experienced interim leaders to guide your facility through transitions.",
  },
]

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
          {services.map((service) => (
            <Link
              key={service.title}
              href="#"
              className="group rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:underline">
                {"Learn More \u2192"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
