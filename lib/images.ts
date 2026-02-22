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

/** Hero slider: 1 = surgeon in theater (restored), 2 = operating room interior, 3 = modern clinic. Images in public/images/ */
const HERO_SLIDE_FALLBACK_TEAM = u("1519494026892-80bbd2d6fd0d")
const HERO_SLIDE_FALLBACK_CLINIC = u("1582750433449-648ed127bb54")
const HERO_SLIDE_3_MODERN_CLINIC = u("1579684385127-1ef15d508118")
export const HERO_SLIDER_IMAGES = [
  "/images/happy-african-american-surgeon-theater.jpg",  // Slide 1: surgeon in theater (restored)
  "/images/interior-view-operating-room.jpg",            // Slide 2: operating room interior
  HERO_SLIDE_3_MODERN_CLINIC,                            // Slide 3: modern clinic
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

  // Services – local files in public/images/ (must exist; see public/images/README.md)
  serviceHealthcareStrategy: u("1579684385127-1ef15d508118"),
  serviceClinicalStrategy: "/images/medical-staff-discussing-diagnostic-results.jpg",
  serviceMedicalTraining: u("1559757148-5c350d0d3c56"),
  serviceHealthcareQuality: "/images/doctor-standing-corridor.jpg",
  serviceAccreditation: "/images/medical-students-standing.jpg",
  serviceClinicalRiskGovernance: u("1450101499163-c8848c66ca85"),
  serviceMedicalEquipmentSourcing: "/images/sandro-outsourcing.jpg",
} as const
