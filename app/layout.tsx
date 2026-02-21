import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { SeoJsonLd } from '@/components/seo-jsonld'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: "Quality Healthcare Services (Q.H.S) Consultants Ltd. | Healthcare Consultancy Nigeria",
    template: "%s | Q.H.S Consultants Ltd.",
  },
  description:
    "Q.H.S Consultants Ltd. delivers consultancy and advisory in healthcare strategy, clinical strategy, medical training, healthcare quality, accreditation, clinical risk and governance, and medical equipment sourcing. Call +1 (252) 691 4076 or +1 (573) 264 7695.",
  keywords: [
    "healthcare consultancy Nigeria",
    "JCI accreditation Nigeria",
    "SQH accreditation",
    "hospital operations Nigeria",
    "healthcare consulting West Africa",
    "accreditation support Nigeria",
  ],
  openGraph: {
    locale: "en_NG",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: '#2E75B6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SeoJsonLd />
        {children}
      </body>
    </html>
  )
}
