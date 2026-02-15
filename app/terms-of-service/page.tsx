import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | QHSConsultant – Healthcare Consultancy Nigeria",
  description:
    "Terms of service for QHSConsultant healthcare consultancy. Conditions for using our accreditation, operations, and consulting services in Nigeria.",
}

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
            <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the QHSConsultant website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or engage our healthcare consultancy, accreditation, or advisory services.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">2. Services</h2>
            <p className="text-muted-foreground">
              QHSConsultant provides healthcare consultancy services in Nigeria and the West African region, including but not limited to JCI and SQH accreditation support, hospital operations and management, strategic planning, clinical governance, financial and revenue cycle consulting, training, and interim management. Specific scope, deliverables, and fees are set out in separate agreements or statements of work.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">3. Use of Website and Information</h2>
            <p className="text-muted-foreground">
              You may use our website for lawful purposes only. Content on the site is for general information and does not constitute medical, legal, or professional advice. You are responsible for how you use any information obtained from our site or services. You may not copy, scrape, or misuse our content or intellectual property without prior written consent.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">4. Consultancy Engagements</h2>
            <p className="text-muted-foreground">
              Engagement terms, confidentiality, and deliverables will be agreed in writing. Our advice is based on information you provide and prevailing standards; outcomes depend on implementation by your organization. We do not guarantee specific accreditation or operational results.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, QHSConsultant and its consultants shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability for any claim shall not exceed the fees paid by you for the relevant engagement.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">6. Contact and Appointments</h2>
            <p className="text-muted-foreground">
              For general enquiries and to discuss our services, you may call +1 (252) 691 4076. To book an appointment with Dr Onakoya, call +1 (573) 264 7695. Contact details may be updated on our website from time to time.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">7. Changes and Governing Law</h2>
            <p className="text-muted-foreground">
              We may update these Terms of Service; the revised version will be posted on this page with an updated “Last updated” date. Continued use of our website or services after changes constitutes acceptance. These terms are governed by the laws of Nigeria, and any disputes shall be subject to the exclusive jurisdiction of the Nigerian courts.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">8. Contact</h2>
            <p className="text-muted-foreground">
              Questions about these Terms of Service may be sent to{" "}
              <a href="mailto:contact@qhsconsultant.com" className="text-primary hover:underline">
                contact@qhsconsultant.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
