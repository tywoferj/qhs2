import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Q.H.S Consultants Ltd. – Healthcare Consultancy Nigeria",
  description:
    "Privacy policy for Quality Healthcare Services (Q.H.S) Consultants Ltd.: NDPA 2023, GDPR, data rights, retention, international transfers, and how we protect personal data.",
}

const COMPANY = "Quality Healthcare Services (Q.H.S) Consultants Ltd."
const EMAIL_PRIVACY = "contact@qhsconsultant.com"
const PHONE = "+1 (252) 691 4076"
const ADDRESS = {
  street: "57B, Hibiscus Street, M.K.O Abiola Gardens, C.B.D",
  city: "Ikeja",
  country: "Nigeria",
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
            Last updated: 4 April 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This Privacy Policy describes how {COMPANY} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            processes personal data in connection with our website, marketing, and consultancy and advisory
            services. It is designed to align with the{" "}
            <strong className="text-foreground">Nigeria Data Protection Act 2023 (NDPA)</strong>, regulations
            and guidance issued by the{" "}
            <strong className="text-foreground">Nigeria Data Protection Commission (NDPC)</strong>, and, where
            applicable, the <strong className="text-foreground">EU General Data Protection Regulation (GDPR)</strong>{" "}
            and the <strong className="text-foreground">UK GDPR</strong> (as retained in United Kingdom law).
          </p>

          <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Who we are (data controller)</h2>
              <p className="text-muted-foreground">
                {COMPANY} is the data controller for personal data we determine the purposes and means of
                processing, unless we notify you otherwise (for example, where we act solely as a processor on
                written instructions of a client under a services agreement).
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Registered / business address:</strong>{" "}
                  {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.country}
                </li>
                <li>
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a href="https://qhsconsultant.com" className="text-primary hover:underline">
                    qhsconsultant.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Privacy contact:</strong>{" "}
                  <a href={`mailto:${EMAIL_PRIVACY}`} className="text-primary hover:underline">
                    {EMAIL_PRIVACY}
                  </a>{" "}
                  (subject line: &quot;Privacy Request&quot;)
                </li>
                <li>
                  <strong className="text-foreground">Telephone:</strong> {PHONE}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Scope</h2>
              <p className="text-muted-foreground">
                This policy applies to personal data we collect through our website, email, telephone, video
                conferencing, in-person meetings, proposals, contracts, and other legitimate business channels. It
                does not govern how third-party platforms (for example, social networks or payment providers)
                process data; those providers have their own policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Categories of personal data</h2>
              <p className="text-muted-foreground">
                Depending on your relationship with us, we may process some or all of the following:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Identity and contact data:</strong> name, title, employer,
                  work email, work phone, postal address, country, and similar identifiers.
                </li>
                <li>
                  <strong className="text-foreground">Professional data:</strong> role, department, credentials,
                  areas of interest, and information you provide about your organisation or projects.
                </li>
                <li>
                  <strong className="text-foreground">Communication data:</strong> messages, call logs, meeting
                  notes where permitted, and correspondence metadata.
                </li>
                <li>
                  <strong className="text-foreground">Technical and usage data:</strong> IP address, device and
                  browser type, approximate location derived from IP, referring URLs, pages viewed, and timestamps
                  (where our hosting or analytics tools collect such data).
                </li>
                <li>
                  <strong className="text-foreground">Sensitive / special category data:</strong> in the course
                  of consultancy (for example, accreditation, quality, clinical governance, or operational
                  advisory), you or your organisation may voluntarily share health-related or similarly sensitive
                  information about patients, staff, or operations. We process such data only where necessary for the
                  agreed services, with appropriate safeguards, and in line with NDPA and (where applicable)
                  GDPR Article 9 grounds (such as explicit consent, or processing necessary for the provision of
                  health or social care subject to professional secrecy and appropriate safeguards).
                </li>
                <li>
                  <strong className="text-foreground">Marketing preferences:</strong> subscription status,
                  event attendance, and similar preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. How and why we use personal data (legal bases)</h2>
              <p className="text-muted-foreground">
                We process personal data only where we have a valid legal basis under NDPA 2023 and, for individuals
                in the EEA, UK, or Switzerland, under GDPR / UK GDPR. These typically include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Contract and pre-contract steps:</strong> responding to
                  enquiries, preparing proposals, delivering services, invoicing, and managing the client
                  relationship.
                </li>
                <li>
                  <strong className="text-foreground">Consent:</strong> where required for certain marketing
                  communications, non-essential cookies or similar technologies, or where we rely on explicit
                  consent for sensitive processing as described in your engagement. You may withdraw consent at any
                  time without affecting the lawfulness of processing based on consent before its withdrawal.
                </li>
                <li>
                  <strong className="text-foreground">Legal obligation:</strong> compliance with applicable law,
                  court orders, regulatory requests, tax, accounting, and corporate record-keeping.
                </li>
                <li>
                  <strong className="text-foreground">Legitimate interests:</strong> operating and securing our
                  website, fraud prevention, business analytics that do not override your rights, internal
                  reporting, and improving our services, where balanced against your interests and fundamental
                  rights.
                </li>
                <li>
                  <strong className="text-foreground">Vital interests:</strong> rarely, if processing is
                  necessary to protect someone&apos;s life.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. NDPA 2023 (Nigeria)</h2>
              <p className="text-muted-foreground">
                We are committed to complying with the NDPA 2023 and applicable NDPC regulations and guidance. This
                includes applying data protection principles (lawfulness, fairness, transparency, purpose
                limitation, data minimisation, accuracy, storage limitation, integrity and confidentiality, and
                accountability), honouring data subject rights, implementing appropriate technical and organisational
                security measures, and ensuring lawful cross-border transfers where personal data leaves Nigeria.
              </p>
              <p className="mt-3 text-muted-foreground">
                Nigerian data subjects may lodge complaints with the{" "}
                <strong className="text-foreground">Nigeria Data Protection Commission (NDPC)</strong> in
                addition to contacting us first. We will cooperate in good faith with the NDPC as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. GDPR and UK GDPR (EEA, UK, Switzerland)</h2>
              <p className="text-muted-foreground">
                If you are located in the European Economic Area, the United Kingdom, or Switzerland, you benefit
                from rights described in Section 10. Depending on your location, you may lodge a complaint with
                your local supervisory authority. We do not intend to establish an establishment in the EU/UK solely
                through this website; where we offer services to EEA/UK organisations, we will address transfer and
                processing mechanisms (such as Standard Contractual Clauses or UK Addendum, where applicable) in
                the relevant contract or supplementary terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Cookies and similar technologies</h2>
              <p className="text-muted-foreground">
                Our website may use cookies or similar technologies that are strictly necessary for operation and
                security. Where we introduce analytics or marketing technologies that are not strictly necessary,
                we will obtain consent where required by law (including NDPA and ePrivacy-style expectations) and
                provide granular choices where feasible. For details and to manage optional cookies on this site,
                see our{" "}
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>
                . You can control cookies through your browser settings; disabling some cookies may affect site
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Recipients and processors</h2>
              <p className="text-muted-foreground">
                We may share personal data with:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Service providers (processors):</strong> for example,
                  hosting, email, productivity suites, customer relationship tools, and professional advisers, under
                  written agreements that require confidentiality and appropriate security.
                </li>
                <li>
                  <strong className="text-foreground">Professional advisers:</strong> lawyers, accountants, and
                  insurers, where necessary and subject to professional obligations.
                </li>
                <li>
                  <strong className="text-foreground">Authorities:</strong> where required by applicable law or to
                  protect rights, safety, or the security of our business and clients.
                </li>
                <li>
                  <strong className="text-foreground">Business transfers:</strong> in connection with a merger,
                  acquisition, or asset sale, subject to confidentiality and continued protection of personal data
                  as required by law.
                </li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                We do <strong className="text-foreground">not</strong> sell your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">9. International transfers</h2>
              <p className="text-muted-foreground">
                We are based in Nigeria and may use service providers or infrastructure in other countries,
                including countries that may not be deemed to provide an adequate level of protection. Where
                required by NDPA 2023, GDPR, or UK GDPR, we implement appropriate safeguards (such as approved
                transfer mechanisms, contractual clauses, or other lawful grounds) and conduct assessments where
                appropriate before transferring personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">10. Your rights</h2>
              <p className="text-muted-foreground">
                Subject to applicable law, you may have the right to:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Access the personal data we hold about you;</li>
                <li>Request rectification of inaccurate or incomplete data;</li>
                <li>Request erasure where applicable (&quot;right to be forgotten&quot;);</li>
                <li>Restrict processing in certain circumstances;</li>
                <li>Object to processing based on legitimate interests or for direct marketing;</li>
                <li>Data portability, where processing is automated and based on consent or contract;</li>
                <li>Withdraw consent where processing is based on consent;</li>
                <li>Not be subject to solely automated decisions with legal or similarly significant effects (we do
                not use such processing as a default);</li>
                <li>Lodge a complaint with the NDPC or, where applicable, another supervisory authority.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                To exercise rights, email{" "}
                <a href={`mailto:${EMAIL_PRIVACY}`} className="text-primary hover:underline">
                  {EMAIL_PRIVACY}
                </a>{" "}
                with &quot;Privacy Request&quot; in the subject line. We may need to verify your identity. We will
                respond within timelines required by NDPA, GDPR, or UK GDPR, or explain any extension permitted by
                law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">11. Retention</h2>
              <p className="text-muted-foreground">
                We retain personal data only as long as necessary for the purposes collected, including satisfying
                legal, regulatory, tax, accounting, or reporting requirements, and resolving disputes or enforcing
                agreements. Retention periods vary by data category; client files may be retained for the duration
                of the engagement plus a statutory or professionally appropriate period unless a longer period is
                required by law or agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">12. Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organisational measures designed to protect personal data
                against unauthorised access, alteration, disclosure, or destruction, commensurate with the risk
                and nature of the data. No system is completely secure; we encourage you to use secure channels
                when sharing sensitive information and to avoid sending unnecessary special-category data by
                unsecured email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">13. Data breach notification</h2>
              <p className="text-muted-foreground">
                In the event of a personal data breach likely to result in risk to data subjects, we will assess
                the incident and, where required by NDPA 2023, GDPR, UK GDPR, or other applicable law, notify the
                relevant supervisory authority and affected individuals without undue delay, in line with statutory
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">14. Children</h2>
              <p className="text-muted-foreground">
                Our website and services are directed at organisations and professionals in healthcare and related
                sectors. We do not knowingly collect personal data from children under the age of 16 (or higher age
                where local law requires) without appropriate parental or guardian authority. If you believe we
                have collected such data, contact us and we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">15. Processor engagements (client data)</h2>
              <p className="text-muted-foreground">
                When we process personal data on behalf of a healthcare client under a written agreement, we act as
                a processor (or sub-processor) and process such data only on documented instructions, unless
                required otherwise by law. The client remains responsible for the lawfulness of the processing and
                for providing any required notices to its own data subjects.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">16. Changes to this policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy to reflect legal, technical, or business changes. The &quot;Last
                updated&quot; date will be revised, and where changes are material we will provide additional notice
                as appropriate (for example, a notice on our website or email where we have your contact details).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">17. Contact</h2>
              <p className="text-muted-foreground">
                For privacy questions or requests:{" "}
                <a href={`mailto:${EMAIL_PRIVACY}`} className="text-primary hover:underline">
                  {EMAIL_PRIVACY}
                </a>
                , or {PHONE}. You may also review our{" "}
                <Link href="/terms-of-service" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </section>
          </div>

          <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
            By using our website or engaging with us, you acknowledge that you have read this Privacy Policy. For
            legal advice specific to your organisation, consult qualified counsel; this policy is not a substitute
            for professional legal advice.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
