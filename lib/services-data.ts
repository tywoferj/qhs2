import { IMAGES } from "./images"

export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  imageAlt: string
  bullets: string[]
  cta: string
  ctaSubtext: string
  phoneLabel: string
  /** Use Dr Onakoya appointment line; otherwise services line */
  phoneAppointment?: boolean
}

export const SERVICES: ServiceItem[] = [
  {
    id: "accreditation",
    title: "Accreditation & Quality Management",
    shortDescription: "Expert guidance through JCI and SQH accreditation with proven methodologies.",
    longDescription:
      "Navigate JCI and SafeCare Quality of Healthcare (SQH) accreditation with a partner that has supported 10+ Nigerian hospitals. We deliver gap analysis, mock surveys, policy development, and staff training so your facility is survey-ready and sustains improvement long after certification.",
    image: IMAGES.serviceAccreditation,
    imageAlt: "JCI and SQH accreditation support for healthcare facilities in Nigeria",
    bullets: [
      "Gap analysis and readiness assessment",
      "Mock surveys and tracer methodology",
      "Policy and documentation development",
      "Staff training and culture transformation",
    ],
    cta: "Start Your Accreditation Journey",
    ctaSubtext: "Get a free readiness assessment. Call to discuss your timeline.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss JCI & SQH accreditation",
  },
  {
    id: "operations",
    title: "Hospital Operations & Management",
    shortDescription: "Streamline operations and improve efficiency across your facility.",
    longDescription:
      "Turn underperforming departments into efficient, patient-centered operations. We apply lean principles, workflow redesign, and performance dashboards tailored to Nigerian healthcare—helping 10+ hospitals achieve measurable gains in throughput, cost, and patient experience.",
    image: IMAGES.serviceOperations,
    imageAlt: "Hospital operations and management consulting in Nigeria",
    bullets: [
      "Workflow optimization and lean management",
      "Revenue cycle and billing improvement",
      "Patient experience and flow",
      "KPIs and performance dashboards",
    ],
    cta: "Optimize Your Operations",
    ctaSubtext: "Request an operations review. We’ll identify quick wins and long-term gains.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss operations support",
  },
  {
    id: "strategic",
    title: "Strategic Planning & Development",
    shortDescription: "Actionable strategies for growth and long-term sustainability.",
    longDescription:
      "Define and execute a clear strategic direction. We support boards and executives with market analysis, scenario planning, service line strategy, and implementation roadmaps so your hospital can grow sustainably in Nigeria’s evolving healthcare landscape.",
    image: IMAGES.serviceStrategic,
    imageAlt: "Strategic planning for healthcare organizations in Nigeria",
    bullets: [
      "Market and competitive analysis",
      "Service line and growth strategy",
      "Scenario and financial planning",
      "Implementation and change management",
    ],
    cta: "Shape Your Strategy",
    ctaSubtext: "Book a strategy session. We’ll align on priorities and next steps.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss strategic planning",
  },
  {
    id: "clinical",
    title: "Clinical Governance & Medical Staff",
    shortDescription: "Robust clinical governance and credentialing systems.",
    longDescription:
      "Build strong clinical governance so quality and safety are embedded in daily practice. We help you establish credentialing, privileging, morbidity and mortality review, and medical staff engagement frameworks that meet international standards and local regulations.",
    image: IMAGES.serviceClinical,
    imageAlt: "Clinical governance and medical staff consulting Nigeria",
    bullets: [
      "Credentialing and privileging",
      "M&M and quality review processes",
      "Medical staff bylaws and policies",
      "Engagement and leadership alignment",
    ],
    cta: "Strengthen Clinical Governance",
    ctaSubtext: "Discuss your governance gaps. We’ll propose a tailored framework.",
    phoneLabel: "Call +1 (252) 691 4076 for clinical governance support",
  },
  {
    id: "orthopedic",
    title: "Orthopedic Service Line Consulting",
    shortDescription: "Specialized consulting for orthopedic departments.",
    longDescription:
      "Grow and optimize your orthopedic service line with expertise in program design, theatre efficiency, implant management, and referral pathways. We help Nigerian hospitals build sustainable, high-quality orthopedic services that attract patients and talent.",
    image: IMAGES.serviceOrthopedic,
    imageAlt: "Orthopedic service line consulting for Nigerian hospitals",
    bullets: [
      "Program and service line design",
      "Theatre and list optimization",
      "Implant and supply chain",
      "Referral and marketing strategy",
    ],
    cta: "Elevate Your Orthopedic Program",
    ctaSubtext: "Get a focused assessment of your orthopedic service line.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss orthopedic consulting",
  },
  {
    id: "financial",
    title: "Financial & Revenue Cycle",
    shortDescription: "Optimize revenue cycles and financial performance.",
    longDescription:
      "Improve cash flow, reduce denials, and strengthen financial sustainability. We work with your finance and clinical teams on coding, billing, collections, and cost management—so your hospital can invest in quality and growth with confidence.",
    image: IMAGES.serviceFinancial,
    imageAlt: "Hospital revenue cycle and financial consulting Nigeria",
    bullets: [
      "Revenue cycle assessment and redesign",
      "Coding and documentation improvement",
      "Denial management and follow-up",
      "Cost and margin analysis",
    ],
    cta: "Improve Your Revenue Cycle",
    ctaSubtext: "Request a revenue cycle review. We’ll pinpoint the biggest opportunities.",
    phoneLabel: "Call +1 (252) 691 4076 for revenue cycle support",
  },
  {
    id: "hr",
    title: "Human Resource Management",
    shortDescription: "Build high-performing healthcare teams.",
    longDescription:
      "Attract, develop, and retain the right talent. We support HR and leadership with workforce planning, recruitment strategies, performance systems, and retention initiatives designed for the demands of healthcare in Nigeria and West Africa.",
    image: IMAGES.serviceHR,
    imageAlt: "Healthcare HR and talent management consulting Nigeria",
    bullets: [
      "Workforce and succession planning",
      "Recruitment and employer branding",
      "Performance and appraisal systems",
      "Retention and engagement programs",
    ],
    cta: "Build Your Healthcare Team",
    ctaSubtext: "Discuss your talent challenges. We’ll outline a practical roadmap.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss HR support",
  },
  {
    id: "compliance",
    title: "Compliance & Risk Management",
    shortDescription: "Navigate regulation and minimize operational risk.",
    longDescription:
      "Stay ahead of regulatory requirements and reduce risk. We help you implement compliance frameworks, incident reporting, root cause analysis, and risk registers so your facility meets standards and responds effectively when issues arise.",
    image: IMAGES.serviceCompliance,
    imageAlt: "Healthcare compliance and risk management Nigeria",
    bullets: [
      "Regulatory and standards mapping",
      "Incident reporting and RCA",
      "Risk registers and mitigation",
      "Audit readiness and training",
    ],
    cta: "Strengthen Compliance & Risk",
    ctaSubtext: "Get a compliance health check. We’ll identify gaps and priorities.",
    phoneLabel: "Call +1 (252) 691 4076 for compliance support",
  },
  {
    id: "technology",
    title: "Technology & Information Systems",
    shortDescription: "Health IT to improve care and data management.",
    longDescription:
      "Leverage technology without overwhelming your team. We advise on EMR selection and optimization, data governance, and digital workflows so your hospital uses information to improve patient care and operations—with solutions that fit your context.",
    image: IMAGES.serviceTechnology,
    imageAlt: "Health IT and information systems consulting Nigeria",
    bullets: [
      "EMR selection and optimization",
      "Data governance and reporting",
      "Workflow and process digitization",
      "Vendor selection and implementation",
    ],
    cta: "Modernize Your Health IT",
    ctaSubtext: "Discuss your IT roadmap. We’ll help you choose and implement wisely.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss technology advisory",
  },
  {
    id: "corporate",
    title: "Corporate Healthcare Advisory",
    shortDescription: "Strategic advisory for corporate health programs.",
    longDescription:
      "Design and manage corporate healthcare programs that balance cost, quality, and employee satisfaction. We support employers and their partners with benefit design, provider network strategy, and wellness initiatives tailored to the Nigerian market.",
    image: IMAGES.serviceCorporate,
    imageAlt: "Corporate healthcare advisory Nigeria",
    bullets: [
      "Corporate health program design",
      "Provider network and partnerships",
      "Wellness and prevention programs",
      "Cost and quality analytics",
    ],
    cta: "Design Your Corporate Health Program",
    ctaSubtext: "Explore how we can support your employee health strategy.",
    phoneLabel: "Call +1 (252) 691 4076 for corporate health advisory",
  },
  {
    id: "investment",
    title: "Investment & Due Diligence",
    shortDescription: "Due diligence for healthcare investments.",
    longDescription:
      "Make informed investment decisions in healthcare. We provide operational, clinical, and financial due diligence for acquisitions, partnerships, and new builds—so investors and operators understand risks, opportunities, and value drivers before they commit.",
    image: IMAGES.serviceInvestment,
    imageAlt: "Healthcare investment due diligence Nigeria",
    bullets: [
      "Operational and clinical due diligence",
      "Financial and revenue analysis",
      "Market and competitive assessment",
      "Integration and value-creation planning",
    ],
    cta: "Get Investment-Ready Insights",
    ctaSubtext: "Discuss your deal. We’ll scope a due diligence approach.",
    phoneLabel: "Call +1 (252) 691 4076 for due diligence support",
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    shortDescription: "Upskill your workforce with tailored programs.",
    longDescription:
      "Invest in people through training that sticks. We design and deliver programs in quality, patient safety, leadership, and operations—combining international best practices with Nigerian context so your team can perform at a higher level.",
    image: IMAGES.serviceTraining,
    imageAlt: "Healthcare training and capacity building Nigeria",
    bullets: [
      "Quality and patient safety training",
      "Leadership and management development",
      "Clinical and technical skills",
      "Custom curriculum design",
    ],
    cta: "Invest in Your Team",
    ctaSubtext: "Tell us your capacity gaps. We’ll propose a training plan.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss training programs",
  },
  {
    id: "interim",
    title: "Interim Management Services",
    shortDescription: "Experienced interim leaders for transitions.",
    longDescription:
      "Bridge critical gaps with experienced interim leaders. We place qualified executives in COO, CNO, or quality leadership roles while you recruit or restructure—so your facility keeps momentum during accreditation, turnaround, or expansion.",
    image: IMAGES.serviceInterim,
    imageAlt: "Interim healthcare management Nigeria",
    bullets: [
      "Interim COO, CNO, or quality leadership",
      "Accreditation and turnaround support",
      "Knowledge transfer and handover",
      "Flexible engagement terms",
    ],
    cta: "Secure Interim Leadership",
    ctaSubtext: "Discuss your gap. We’ll match you with an experienced interim leader.",
    phoneLabel: "Call +1 (573) 264 7695 to book a conversation with Dr Onakoya",
    phoneAppointment: true,
  },
]
