/**
 * Structured data for healthcare consultancy SEO (Nigeria).
 * Renders on layout so all pages can inherit organization context.
 */
export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QHSConsultant",
    description:
      "Healthcare consultancy in Nigeria. JCI & SQH accreditation, hospital operations, strategic planning, and healthcare consulting across Nigeria and West Africa.",
    url: "https://qhsconsultant.com",
    telephone: "+1-252-691-4076",
    areaServed: { "@type": "Country", name: "Nigeria" },
    serviceArea: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Place", name: "West Africa" },
    ],
    knowsAbout: [
      "JCI accreditation",
      "SQH accreditation",
      "Hospital operations",
      "Healthcare management Nigeria",
      "Healthcare consultancy",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
