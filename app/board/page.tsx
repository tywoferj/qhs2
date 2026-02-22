import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Board of Directors | Q.H.S Consultants Ltd.",
  description:
    "Meet the Board of Directors of Quality Healthcare Services (Q.H.S) Consultants Ltd. Experienced leaders in healthcare, engineering, and business.",
  openGraph: {
    title: "Board of Directors | Q.H.S Consultants Ltd.",
    description:
      "Leadership team of Q.H.S Consultants Ltd. – healthcare strategy, clinical governance, and consultancy excellence.",
  },
}

const directors = [
  {
    name: "Engr. Olu Onakoya",
    role: "Chairman",
    summary:
      "Engr. Olu Onakoya is a Chemical Engineer trained at the University of Leeds, United Kingdom. He brings close to 45 years of experience in the oil and gas sector at managerial, executive, chief executive, and advisory levels. He served as Chairman and Managing Director of Exxon Mobil Nigeria Plc., and was the first Nigerian to hold that position. He is currently a consultant in the oil and gas sector and provides training to corporations and executives on strategy and leadership. Engr. Onakoya serves on the boards of various organisations.",
    email: "olu.onakoya@yahoo.com",
  },
  {
    name: "Dr. Olakunle Onakoya",
    role: "Chief Executive Officer",
    summary:
      "Dr. Olakunle Onakoya qualified as a Medical Doctor from the College of Medicine, University of Lagos, and trained as an Orthopaedic and Trauma Surgeon both in Nigeria and in the United Kingdom. He has more than 30 years of experience as a Consultant Surgeon and has held various leadership positions in healthcare management, quality improvement, and clinical governance. He served as Chief Medical Director of the Lagoon Hospitals and as Chief Executive Officer of Cedarcrest Hospital, Lagos. He is currently the Board Chairman of the Redeemer's Health Village, a 300-bed hospital promoted by the Redeemed Christian Church of God (RCCG). Dr. Onakoya is among the few doctors in Nigeria with direct experience in healthcare quality accreditation and has led hospitals through the Joint Commission International (JCI) accreditation process. He serves on the boards of various organisations.",
    email: "kunle.onakoya@qhsconsultant.com",
  },
  {
    name: "Professor Adeola Onakoya",
    role: "Director",
    summary:
      "Professor Adeola Onakoya qualified as a Medical Doctor from the College of Medicine, University of Lagos, and trained as an Ophthalmologist in Nigeria and in the United Kingdom. She has extensive experience as an Ophthalmic Surgeon and as a Glaucoma specialist. She is a Professor and past Head of the Department of Ophthalmology at the College of Medicine, University of Lagos. She has been involved in medical education at the highest levels and in both specialty and sub-specialty training in Ophthalmology. She is a past President of the Faculty of Ophthalmology of the National Postgraduate Medical College of Nigeria.",
    email: "adeola_onakoya@outlook.com",
  },
  {
    name: "Dr. Folasade Smith",
    role: "Director",
    summary:
      "Dr. Folasade Smith qualified as a Medical Doctor from Imperial College, United Kingdom. She has practised both in Nigeria and in the United Kingdom. She is currently a Senior Registrar in Emergency Medicine with the National Health Service (NHS) in the United Kingdom.",
    email: "onaxxy@hotmail.com",
  },
  {
    name: "Engr. Aramide Onakoya",
    role: "Director",
    summary:
      "Engr. Aramide Onakoya is a Mechanical Engineer who qualified from the University of Portsmouth, United Kingdom, and holds postgraduate qualifications from King's College London. She has experience in financial advisory, manufacturing, corporate strategy, and consulting services.",
    email: "ara_onakoya@hotmail.com",
  },
  {
    name: "Mr. Olumide B. Onakoya",
    role: "Director",
    summary:
      "Mr. Olumide B. Onakoya qualified from the University of Sheffield, United Kingdom, with a degree in Business Management and Economics, and completed postgraduate training in business management at the University of Sussex, Brighton, United Kingdom. He has experience in business strategy and in providing technology support for start-ups.",
    email: "lumsyonakoya@hotmail.com",
  },
]

export default function BoardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-muted px-4 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Governance
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Board of Directors
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              The Board of Quality Healthcare Services (Q.H.S) Consultants Ltd. brings together senior experience in healthcare, engineering, and business to guide our consultancy and advisory services.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ul className="space-y-12">
              {directors.map((director) => (
                <li
                  key={director.email}
                  className="flex gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:gap-8 md:p-8"
                >
                  <div
                    className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-muted shadow-inner ring-1 ring-border/50 shadow-sm md:h-24 md:w-24"
                    aria-hidden
                  >
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
                      <User className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.25} />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-foreground md:text-2xl">
                          {director.name}
                        </h2>
                        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
                          {director.role}
                        </p>
                      </div>
                      <a
                        href={`mailto:${director.email}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        {director.email}
                      </a>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {director.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
