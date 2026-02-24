"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Mail, User } from "lucide-react"

export interface Director {
  name: string
  role: string
  summary: string
  email: string
  image: string | null
}

interface BoardClientProps {
  directors: Director[]
}

export function BoardClient({ directors }: BoardClientProps) {
  const [selectedDirectorEmail, setSelectedDirectorEmail] = useState<string | null>(null)

  const selectedDirector = directors.find((d) => d.email === selectedDirectorEmail) ?? null

  return (
    <div className="mx-auto max-w-6xl">
      {selectedDirector == null ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directors.map((director) => (
            <li key={director.email} className="list-none">
              <button
                type="button"
                onClick={() => setSelectedDirectorEmail(director.email)}
                className="flex w-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-md md:p-6"
              >
                <div
                  className="relative h-20 w-20 overflow-hidden rounded-xl bg-muted shadow-inner ring-1 ring-border/50 shadow-sm md:h-24 md:w-24"
                  aria-hidden
                >
                  {director.image ? (
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
                      <User className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.25} />
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground md:text-lg">
                    {director.name}
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {director.role}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="animate-in fade-in duration-200 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <button
            type="button"
            onClick={() => setSelectedDirectorEmail(null)}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all directors
          </button>
          <div className="min-w-0">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  {selectedDirector.name}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
                  {selectedDirector.role}
                </p>
              </div>
              <a
                href={`mailto:${selectedDirector.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {selectedDirector.email}
              </a>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {selectedDirector.summary}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

