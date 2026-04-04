import { cn } from "@/lib/utils"

type Props = {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function ConsultationFormSection({ title, description, children, className }: Props) {
  return (
    <section
      className={cn(
        "space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6",
        className
      )}
    >
      <header className="border-b border-border/60 pb-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </header>
      <div className="space-y-4 pt-1">{children}</div>
    </section>
  )
}
