/**
 * Image URLs for healthcare consultancy site.
 * Services, About, and Contact use unique images. Sourced from Pexels and Unsplash
 * for diverse representation (African/Black healthcare, Nigerian hospitals, modern facilities).
 * Replace with /images/* when you have local Nigerian hospital photos.
 */
const UNSPLASH = "https://images.unsplash.com"
const PEXELS = "https://images.pexels.com/photos"

const u = (id: string, w = 800, q = 85) =>
  `${UNSPLASH}/photo-${id}?w=${w}&q=${q}`
const p = (id: number, w = 800) =>
  `${PEXELS}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

/** Hero slider: hero-slide-1.webp, hero-slide-2.webp, hero-slide-3.webp for faster load. Images in public/images/ */
const HERO_SLIDE_FALLBACK_TEAM = u("1519494026892-80bbd2d6fd0d")
const HERO_SLIDE_FALLBACK_CLINIC = u("1582750433449-648ed127bb54")
export const HERO_SLIDER_IMAGES = [
  "/images/hero-slide-1.webp",
  "/images/hero-slide-2.webp",
  "/images/hero-slide-3.webp",
] as const
export { HERO_SLIDE_FALLBACK_TEAM, HERO_SLIDE_FALLBACK_CLINIC }

export const IMAGES = {
  hero: u("1519494026892-80bbd2d6fd0d"),
  blogAccreditation: u("1519494026892-80bbd2d6fd0d", 600),
  blogManagement: u("1582750433449-648ed127bb54", 600),
  blogRevenue: u("1579684385127-1ef15d508118", 600),

  // About Us – healthcare team / facility
  aboutPage: u("1519494026892-80bbd2d6fd0d"),

  // Contact Us – welcoming healthcare
  contactPage: u("1582750433449-648ed127bb54"),

  // Services – local .webp in public/images/ for faster load (see public/images/README.md)
  serviceHealthcareStrategy: u("1579684385127-1ef15d508118"),
  serviceClinicalStrategy: "/images/medical-staff-discussing-diagnostic-results.webp",
  serviceMedicalTraining: "/images/medical-students-outdoor.webp",
  serviceHealthcareQuality: "/images/doctor-standing-corridor.webp",
  serviceAccreditation: "/images/medical-students-standing.webp",
  serviceClinicalRiskGovernance: "/images/clinical-risk-governance.webp",
  serviceMedicalEquipmentSourcing: "/images/sandro-outsourcing.webp",
} as const
