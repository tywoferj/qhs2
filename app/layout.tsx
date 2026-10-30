import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { SeoJsonLd } from '@/components/seo-jsonld'
import { CookieConsentBanner } from '@/components/cookie-consent-banner'
import { MobileActionBar } from '@/components/mobile-action-bar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL("https://qhsconsultant.com"),
  alternates: { canonical: "./" },
  applicationName: "QHS Consultants Ltd",
  authors: [{ name: "QHS Consultants Ltd" }],
  creator: "QHS Consultants Ltd",
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  title: {
    default: "Quality Healthcare Services (QHS) Consultants Ltd | Healthcare Consultancy Nigeria",
    template: "%s | QHS Consultants Ltd",
  },
  description:
    "QHS Consultants Ltd delivers consultancy and advisory in healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, and medical equipment sourcing. Call +1 (252) 691 4076 or +1 (573) 264 7695.",
  keywords: [
    "healthcare consultancy Nigeria",
    "JCI accreditation Nigeria",
    "Society for Quality in Healthcare in Nigeria (SQHN) accreditation",
    "hospital operations Nigeria",
    "healthcare consulting West Africa",
    "accreditation support Nigeria",
  ],
  openGraph: {
    locale: "en_NG",
    type: "website",
    siteName: "QHS Consultants Ltd",
    images: [{ url: "/images/hero-slide-2.webp", width: 1200, height: 900, alt: "QHS Consultants Ltd healthcare consultancy" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero-slide-2.webp"],
  },
  icons: {
    icon: "/images/favicon/favicon-32x32.png",
    shortcut: "/images/favicon/favicon-16x16.png",
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: '#1B8E4A',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SeoJsonLd />
        {children}
        <MobileActionBar />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
