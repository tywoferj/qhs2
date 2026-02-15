import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'QHSConsultant | Healthcare Excellence - JCI & SQH Accreditation Experts',
  description:
    'QHSConsultant delivers 30+ years of proven healthcare leadership across Nigeria. Specializing in JCI & SQH accreditation, hospital operations, and strategic healthcare consulting.',
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
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
