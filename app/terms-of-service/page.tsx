import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | QHS Consultants Ltd – Healthcare Consultancy Nigeria",
  description:
    "Terms of service for Quality Healthcare Services (QHS) Consultants Ltd (Lagos State, Nigeria): website use, consultancy engagements, liability, governing law and courts of Lagos State, and dispute resolution.",
}

const COMPANY = "Quality Healthcare Services (QHS) Consultants Ltd"
const EMAIL_LEGAL = "contact@qhsconsultant.com"
const PHONE_SERVICES = "+1 (252) 691 4076"
const PHONE_APPOINTMENT = "+1 (573) 264 7695"

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
            Last updated: 4 April 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website operated by{" "}
            {COMPANY} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) and set out the general framework for
            our consultancy and advisory relationship. Specific engagements are also governed by separate written
            agreements (including statements of work, proposals accepted in writing, and engagement letters),
            which prevail over these Terms to the extent of any conflict. {COMPANY} is registered and principally
            located in <strong className="text-foreground">Lagos State, Nigeria</strong>.
          </p>

          <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance and eligibility</h2>
              <p className="text-muted-foreground">
                By accessing our website, contacting us, or engaging our services, you agree to these Terms. If
                you do not agree, you must not use our website or services. You represent that you have authority
                to bind the organisation you represent (if applicable). Our services are intended for businesses
                and professional users in healthcare and related sectors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Definitions</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <strong className="text-foreground">&quot;Services&quot;</strong> means consultancy and advisory
                  services we provide, including without limitation healthcare strategy, clinical strategy, medical
                  training, quality improvement and patient safety, hospital accreditation support, clinical risk
                  and governance, and medical equipment sourcing.
                </li>
                <li>
                  <strong className="text-foreground">&quot;Deliverables&quot;</strong> means agreed outputs
                  specified in a written engagement document.
                </li>
                <li>
                  <strong className="text-foreground">&quot;Client&quot;</strong> means the person or entity that
                  contracts with us for Services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Description of services</h2>
              <p className="text-muted-foreground">
                We provide professional consultancy and advisory Services in Nigeria, West Africa, and
                internationally where agreed. Website content is summary in nature; scope, fees, timelines,
                deliverables, responsibilities, and performance standards are defined only in a written engagement
                (including email acceptance of a proposal where expressly stated).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. No professional, medical, or legal advice on the website</h2>
              <p className="text-muted-foreground">
                Information on our website is for general informational purposes only. It does not constitute
                medical advice, legal advice, regulatory approval, or a substitute for your own professional
                judgement, clinical decisions, or legal counsel. You are solely responsible for decisions made in
                your organisation and for compliance with applicable laws, regulations, accreditation standards,
                and clinical requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Licence to use the website</h2>
              <p className="text-muted-foreground">
                We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use our
                website for lawful business purposes. You must not: (a) copy, scrape, mirror, or frame the site
                without consent; (b) interfere with security or functionality; (c) introduce malware; (d) use the
                site to compete unfairly or to solicit our personnel or clients in breach of law or contract; (e)
                impersonate any person or entity; or (f) use automated means to access the site in a manner that
                burdens our systems without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Intellectual property</h2>
              <p className="text-muted-foreground">
                All content on the website (including text, graphics, logos, layout, and compilation) and our
                methodologies, templates, tools, and pre-existing materials are owned by us or our licensors and
                are protected by intellectual property laws. Unless a written engagement expressly grants a
                licence, you receive no rights beyond limited browsing. Client-specific Deliverables are licensed
                as set out in the applicable agreement (typically a non-exclusive licence for internal Client use
                unless otherwise stated).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Client responsibilities</h2>
              <p className="text-muted-foreground">
                You agree to: (a) provide accurate, timely, and complete information reasonably required for the
                Services; (b) designate appropriate points of contact and decision-makers; (c) obtain all internal
                approvals and third-party consents necessary for us to perform (including data protection
                authorisations where we process personal data on your behalf); (d) implement recommendations at your
                sole discretion and risk; and (e) comply with all applicable laws, including NDPA 2023, laws
                applicable in <strong className="text-foreground">Lagos State and Nigeria</strong>, GDPR/UK GDPR
                where relevant, and healthcare regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Consultancy engagements</h2>
              <p className="text-muted-foreground">
                Engagements are formed through mutual agreement in writing (including signed contracts or written
                acceptance of proposals). Unless otherwise agreed: fees, expenses, invoicing, and taxes are as
                stated in the engagement; payment terms are net as agreed; late payment may incur interest or
                suspension of Services as permitted by law; either party may terminate in accordance with the
                engagement or, if silent, upon reasonable written notice, subject to payment for work performed and
                non-cancellable commitments. We may decline or terminate work where there is non-payment, legal or
                ethical conflict, or material breach.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">9. No guarantee of outcomes</h2>
              <p className="text-muted-foreground">
                We provide professional services using reasonable skill and care. Accreditation, regulatory,
                clinical, financial, or operational outcomes depend on many factors outside our control, including
                Client implementation, surveyor decisions, and market conditions. We do not guarantee any specific
                accreditation outcome, certification, revenue result, or operational metric.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">10. Confidentiality</h2>
              <p className="text-muted-foreground">
                Each party will protect the other&apos;s confidential information using at least reasonable care
                and use it only for the purpose of the engagement. Exceptions include information that is public
                through no fault of the recipient, independently developed, rightfully received from a third party,
                or required to be disclosed by law of Nigeria, Lagos State, or another competent jurisdiction (with
                notice where legally permitted). Additional confidentiality
                terms may apply under a separate non-disclosure agreement or engagement letter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">11. Data protection</h2>
              <p className="text-muted-foreground">
                Processing of personal data in connection with our website and Services is described in our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . Where we process personal data as a processor for a Client, the data processing terms in the
                applicable agreement (or our standard data processing addendum, if provided) apply. You warrant that
                you have lawful grounds to share any personal data with us. Personal data security incidents,
                including suspected breaches, are handled in line with that Privacy Policy and with{" "}
                <strong className="text-foreground">Nigerian law and the laws of Lagos State</strong> applicable to
                our operations, in addition to any contractual data processing terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">12. Indemnity</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by applicable law, you will indemnify, defend, and hold harmless{" "}
                {COMPANY}, its directors, officers, employees, and subcontractors from and against any claims,
                damages, losses, costs, and expenses (including reasonable legal fees) arising out of: (a) your breach
                of these Terms or an engagement agreement; (b) your misuse of Deliverables or website content; (c)
                your violation of law or third-party rights; or (d) negligence or wilful misconduct by you or your
                personnel, except to the extent finally judicially determined to have been caused by our gross
                negligence or wilful misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">13. Disclaimer of warranties</h2>
              <p className="text-muted-foreground">
                Except as expressly stated in a written engagement, the website and any preliminary information
                are provided &quot;as is&quot; and &quot;as available.&quot; To the fullest extent permitted by law,
                we disclaim all implied warranties, including merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">14. Limitation of liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by applicable law: (a) neither party shall be liable for any
                indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of
                profits, revenue, goodwill, data, or business opportunity, even if advised of the possibility; (b)
                our aggregate liability arising out of or related to these Terms or the Services in any twelve (12)
                month period shall not exceed the total fees paid by you to us for the Services giving rise to the
                claim in that period, or, if no fees were paid for those Services, the sum of one thousand U.S.
                dollars (USD 1,000); (c) nothing in these Terms excludes or limits liability that cannot be
                excluded or limited under applicable law (including death or personal injury caused by negligence,
                fraud, or fraudulent misrepresentation, where applicable).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">15. Third-party links and services</h2>
              <p className="text-muted-foreground">
                Our website may reference or link to third-party sites or tools. We are not responsible for their
                content, policies, or availability. Use of third-party services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">16. Force majeure</h2>
              <p className="text-muted-foreground">
                Neither party is liable for failure or delay caused by events beyond its reasonable control,
                including natural disasters, pandemics, war, terrorism, labour disputes, utility failures, or
                government actions, provided it uses commercially reasonable efforts to mitigate and notify the
                other party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">17. Compliance and ethics</h2>
              <p className="text-muted-foreground">
                You agree not to offer or accept bribes or improper advantages in connection with our Services. We
                may refuse or terminate engagements that we reasonably believe could violate anti-corruption,
                anti-money laundering, sanctions, or similar laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">18. Independent contractors</h2>
              <p className="text-muted-foreground">
                We perform as an independent contractor. Nothing in these Terms creates a partnership, joint
                venture, agency, or employment relationship. Neither party may bind the other without written
                authority.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">19. Assignment</h2>
              <p className="text-muted-foreground">
                You may not assign or transfer these Terms or an engagement without our prior written consent. We
                may assign our rights and obligations in connection with a merger, acquisition, or sale of assets,
                or to an affiliate, with notice where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">20. Severability and waiver</h2>
              <p className="text-muted-foreground">
                If any provision is held invalid or unenforceable, the remainder remains in effect. Failure to
                enforce a provision is not a waiver of future enforcement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">21. Entire agreement (website level)</h2>
              <p className="text-muted-foreground">
                For website use, these Terms together with our Privacy Policy constitute the entire agreement
                regarding the subject matter they cover, superseding prior oral or written understandings on the
                same topic. Consultancy engagements are additionally governed by their specific written agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">22. Governing law and jurisdiction</h2>
              <p className="text-muted-foreground">
                These Terms and any dispute or claim arising out of or in connection with them or the website
                (including non-contractual disputes) shall be governed by the laws of the{" "}
                <strong className="text-foreground">Federal Republic of Nigeria</strong>, as applied in{" "}
                <strong className="text-foreground">Lagos State</strong>, where {COMPANY} is registered and principally
                located, without regard to conflict-of-law rules that would apply another jurisdiction&apos;s law.
                Subject to mandatory provisions of law elsewhere that cannot be waived, you agree that the courts of{" "}
                <strong className="text-foreground">Lagos State, Nigeria</strong> shall have exclusive jurisdiction,
                and you submit to that jurisdiction. We may seek injunctive or equitable relief in any court of
                competent jurisdiction to protect intellectual property or confidential information.
              </p>
              <p className="mt-3 text-muted-foreground">
                Nothing in this section limits a data subject&apos;s right to lodge a complaint with the NDPC or,
                where applicable, an EEA/UK supervisory authority under data protection law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">23. Survival</h2>
              <p className="text-muted-foreground">
                Provisions that by their nature should survive (including intellectual property, confidentiality,
                indemnity, limitation of liability where enforceable, governing law, and dispute resolution) shall
                survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">24. Changes to these Terms</h2>
              <p className="text-muted-foreground">
                We may modify these Terms by posting an updated version on this page and revising the &quot;Last
                updated&quot; date. Material changes may be communicated through reasonable means where
                appropriate. Continued use of the website after changes constitutes acceptance of the revised Terms.
                Ongoing engagements remain subject to the terms in effect at the time of contracting unless
                otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">25. Contact</h2>
              <p className="text-muted-foreground">
                General services: {PHONE_SERVICES}. Book with Dr Onakoya: {PHONE_APPOINTMENT}. Email:{" "}
                <a href={`mailto:${EMAIL_LEGAL}`} className="text-primary hover:underline">
                  {EMAIL_LEGAL}
                </a>
                .
              </p>
            </section>
          </div>

          <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
            These Terms are not a substitute for legal advice. For organisation-specific questions, consult
            qualified counsel in your jurisdiction.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
