const SITE = "https://qhsconsultant.com"

/**
 * Site-wide structured data: Organization / ProfessionalService + WebSite.
 * Rendered once in the root layout so every page inherits entity context.
 */
export function SeoJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE}/#organization`,
        name: "Quality Healthcare Services (QHS) Consultants Ltd",
        alternateName: "QHS Consultants Ltd",
        description:
          "Consultancy and advisory in healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, and medical equipment sourcing in Nigeria and West Africa.",
        url: SITE,
        logo: `${SITE}/images/favicon/android-chrome-512x512.png`,
        image: `${SITE}/images/hero-slide-2.webp`,
        email: "contact@qhsconsultant.com",
        telephone: "+1-252-691-4076",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1-252-691-4076",
            contactType: "customer service",
            areaServed: ["NG", "GH", "SL", "LR", "GM"],
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+1-573-264-7695",
            contactType: "appointments",
            availableLanguage: ["English"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "57B, Hibiscus Street, M.K.O Abiola Gardens, C.B.D",
          addressLocality: "Ikeja",
          addressRegion: "Lagos",
          addressCountry: "NG",
        },
        areaServed: [
          { "@type": "Country", name: "Nigeria" },
          { "@type": "Place", name: "West Africa" },
        ],
        knowsAbout: [
          "Healthcare strategy",
          "Clinical strategy",
          "Medical training",
          "Quality improvement and patient safety",
          "Hospital accreditation support",
          "Clinical risk and governance",
          "Medical equipment sourcing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "QHS Consultants Ltd",
        inLanguage: "en-NG",
        publisher: { "@id": `${SITE}/#organization` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
