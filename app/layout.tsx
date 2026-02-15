import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { SeoJsonLd } from '@/components/seo-jsonld'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: "QHSConsultant | Healthcare Consultancy Nigeria – JCI & SQH Accreditation Experts",
    template: "%s | QHSConsultant",
  },
  description:
    "QHSConsultant delivers healthcare consultancy in Nigeria: JCI & SQH accreditation, hospital operations, strategic planning & revenue cycle. Call +1 (252) 691 4076 or +1 (573) 264 7695 for Dr Onakoya.",
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
