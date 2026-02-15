import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | QHSConsultant – Healthcare Consultancy Nigeria",
  description:
    "Privacy policy for QHSConsultant. How we collect, use, and protect your information when you use our healthcare consultancy services in Nigeria.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground">
              QHSConsultant (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our healthcare consultancy services in Nigeria, or contact us by phone, email, or other means. Please read this policy carefully.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect information that you provide directly, including name, job title, organization name, email address, phone number, and any details you share when requesting a consultation, accreditation support, or other services. We may also collect information automatically when you use our website, such as IP address, browser type, and pages visited, to improve our site and services.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use your information to respond to inquiries, provide consultancy and accreditation services, send relevant updates (with your consent), improve our website and services, and comply with applicable laws. We do not sell your personal information to third parties.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">4. Sharing and Disclosure</h2>
            <p className="text-muted-foreground">
              We may share your information with trusted service providers who assist our operations (e.g., hosting, email) under strict confidentiality. We may also disclose information when required by law or to protect our rights and safety.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or loss. No method of transmission over the internet is 100% secure; we strive to use best practices appropriate to the sensitivity of the data.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground">
              You may request access to, correction of, or deletion of your personal data where applicable by law. You may also opt out of marketing communications at any time. To exercise these rights or ask questions about this policy, contact us using the details below.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">7. Contact Us</h2>
            <p className="text-muted-foreground">
              For privacy-related questions or requests, contact us by email at{" "}
              <a href="mailto:contact@qhsconsultant.com" className="text-primary hover:underline">
                contact@qhsconsultant.com
              </a>
              , or call +1 (252) 691 4076 to discuss our services.
            </p>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
