import { IMAGES } from "./images"

export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  imageAlt: string
  bullets: string[]
  outcomes?: string[]
  cta: string
  ctaSubtext: string
  phoneLabel: string
  phoneAppointment?: boolean
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.id === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.id)
}

export const SERVICES: ServiceItem[] = [
  {
    id: "accreditation",
    title: "Accreditation",
    shortDescription: "Expert guidance through JCI and SQH accreditation and related standards.",
    longDescription:
      "We guide healthcare facilities through JCI (Joint Commission International) and SafeCare Quality of Healthcare (SQH) accreditation—delivering gap analysis, mock surveys, policy development, and staff training so your facility is survey-ready and sustains improvement long after certification.",
    image: IMAGES.serviceAccreditation,
    imageAlt: "JCI and SQH accreditation support – Q.H.S Consultants Ltd.",
    bullets: [
      "Gap analysis and readiness assessment",
      "Mock surveys and tracer methodology",
      "Policy and documentation development",
      "Staff training and culture transformation",
    ],
    cta: "Start Your Accreditation Journey",
    ctaSubtext: "Get a free readiness assessment. Call to discuss your timeline.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss accreditation",
    outcomes: [
      "Survey-ready facility with aligned policies and practices",
      "Sustained quality culture and continuous improvement",
      "Recognition as an internationally accredited facility",
    ],
  },
  {
    id: "clinical-risk-governance",
    title: "Clinical Risk and Governance",
    shortDescription: "Advisory on clinical risk, governance, compliance and incident management.",
    longDescription:
      "We help you implement clinical risk and governance frameworks—including incident reporting, root cause analysis, risk registers, and compliance with regulatory requirements—so your facility meets standards and responds effectively when issues arise.",
    image: IMAGES.serviceClinicalRiskGovernance,
    imageAlt: "Clinical risk and governance – Q.H.S Consultants Ltd.",
    bullets: [
      "Regulatory and standards mapping",
      "Incident reporting and root cause analysis",
      "Risk registers and mitigation",
      "Audit readiness and training",
    ],
    cta: "Strengthen Risk & Governance",
    ctaSubtext: "Get a governance health check. We will identify gaps and priorities.",
    phoneLabel: "Call +1 (252) 691 4076 for clinical risk and governance support",
    outcomes: [
      "Regulatory readiness and fewer audit findings",
      "Proactive risk identification and mitigation",
      "Consistent incident and RCA processes",
    ],
  },
  {
    id: "clinical-strategy",
    title: "Clinical Strategy",
    shortDescription: "Advisory on clinical service design, governance and performance.",
    longDescription:
      "We help you define and implement clinical strategy—including clinical governance frameworks, credentialing and privileging, morbidity and mortality review, and medical staff engagement—aligned with international standards and local regulations.",
    image: IMAGES.serviceClinicalStrategy,
    imageAlt: "Clinical strategy and governance – Q.H.S Consultants Ltd.",
    bullets: [
      "Credentialing and privileging",
      "M&M and quality review processes",
      "Medical staff bylaws and policies",
      "Engagement and leadership alignment",
    ],
    cta: "Strengthen Clinical Strategy",
    ctaSubtext: "Discuss your clinical governance gaps. We will propose a tailored framework.",
    phoneLabel: "Call +1 (252) 691 4076 for clinical strategy support",
    outcomes: [
      "Robust credentialing and privileging processes",
      "Consistent quality and safety through governance",
      "Engaged medical staff and aligned leadership",
    ],
  },
  {
    id: "healthcare-quality",
    title: "Healthcare Quality",
    shortDescription: "Advisory on quality improvement, patient safety and operational excellence.",
    longDescription:
      "We support healthcare institutions to embed quality and patient safety in daily practice through quality improvement frameworks, measurement, audit, and staff engagement—so your facility delivers consistently high standards of care.",
    image: IMAGES.serviceHealthcareQuality,
    imageAlt: "Healthcare quality and patient safety – Q.H.S Consultants Ltd.",
    bullets: [
      "Quality improvement and patient safety frameworks",
      "Measurement, audit and dashboards",
      "Policy and documentation development",
      "Staff training and culture transformation",
    ],
    cta: "Improve Your Quality",
    ctaSubtext: "Get a quality assessment. We will identify priorities and a roadmap.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss healthcare quality",
    outcomes: [
      "Sustained quality culture and continuous improvement",
      "Clear metrics and accountability",
      "Recognition for high standards of care",
    ],
  },
  {
    id: "healthcare-strategy",
    title: "Healthcare Strategy",
    shortDescription: "Consultancy and advisory on organisational and market strategy for healthcare institutions.",
    longDescription:
      "We support boards and executives with healthcare strategy development, market analysis, scenario planning, service line strategy, and implementation roadmaps so your institution can grow sustainably in Nigeria and the wider region.",
    image: IMAGES.serviceHealthcareStrategy,
    imageAlt: "Healthcare strategy and advisory – Quality Healthcare Services (Q.H.S) Consultants Ltd.",
    bullets: [
      "Market and competitive analysis",
      "Service line and growth strategy",
      "Scenario and financial planning",
      "Implementation and change management",
    ],
    cta: "Discuss Your Strategy",
    ctaSubtext: "Book a strategy session. We will align on priorities and next steps.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss healthcare strategy",
    outcomes: [
      "Clear strategic direction and leadership buy-in",
      "Service line and growth roadmap tailored to your context",
      "Implementation plan with milestones and ownership",
    ],
  },
  {
    id: "medical-equipment-sourcing",
    title: "Medical Equipment Sourcing",
    shortDescription: "Advisory and support on sourcing and procurement of medical equipment.",
    longDescription:
      "We advise on medical equipment sourcing, procurement strategy, vendor selection, and lifecycle management—so your facility acquires the right equipment, at the right cost, with appropriate support and maintenance.",
    image: IMAGES.serviceMedicalEquipmentSourcing,
    imageAlt: "Medical equipment sourcing – Q.H.S Consultants Ltd.",
    bullets: [
      "Procurement strategy and specification",
      "Vendor selection and evaluation",
      "Lifecycle and maintenance planning",
      "Cost and value optimisation",
    ],
    cta: "Discuss Equipment Needs",
    ctaSubtext: "Tell us your equipment plans. We will outline options and approach.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss medical equipment sourcing",
    outcomes: [
      "Right equipment aligned to clinical needs",
      "Value for money and sustainable support",
      "Clear procurement and maintenance processes",
    ],
  },
  {
    id: "medical-training",
    title: "Medical Training",
    shortDescription: "Design and delivery of medical and clinical training programmes.",
    longDescription:
      "We design and deliver medical and clinical training programmes in quality, patient safety, leadership, and operations—combining international best practices with Nigerian context so your team can perform at a higher level.",
    image: IMAGES.serviceMedicalTraining,
    imageAlt: "Medical training and capacity building – Q.H.S Consultants Ltd.",
    bullets: [
      "Quality and patient safety training",
      "Leadership and management development",
      "Clinical and technical skills",
      "Custom curriculum design",
    ],
    cta: "Invest in Your Team",
    ctaSubtext: "Tell us your capacity gaps. We will propose a training plan.",
    phoneLabel: "Call +1 (252) 691 4076 to discuss medical training",
    outcomes: [
      "Upskilled teams in quality, safety, and leadership",
      "Training that fits Nigerian healthcare context",
      "Sustained behaviour change and performance",
    ],
  },
]
