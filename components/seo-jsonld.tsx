/**
 * Structured data for healthcare consultancy SEO (Nigeria).
 * Renders on layout so all pages can inherit organization context.
 */
export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quality Healthcare Services (Q.H.S) Consultants Ltd.",
    description:
      "Consultancy and advisory in healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, and medical equipment sourcing in Nigeria and West Africa.",
    url: "https://qhsconsultant.com",
    telephone: "+1-252-691-4076",
    address: {
      "@type": "PostalAddress",
      streetAddress: "57B, Hibiscus Street, M.K.O Abiola Gardens, C.B.D",
      addressLocality: "Ikeja",
      addressCountry: "NG",
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
    serviceArea: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Place", name: "West Africa" },
    ],
    knowsAbout: [
      "Healthcare strategy",
      "Clinical strategy",
      "Medical training",
      "Healthcare quality",
      "Accreditation",
      "Clinical risk and governance",
      "Medical equipment sourcing",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
