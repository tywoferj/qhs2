import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { IndustriesSection } from "@/components/industries-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturedServices } from "@/components/featured-services"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <IndustriesSection />
        <StatsSection />
        <FeaturedServices />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
