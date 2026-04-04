import Link from "next/link"
import { Button } from "@/components/ui/button"
import { consultationHref } from "@/lib/consultation-routes"
import { cn } from "@/lib/utils"

const motionClasses = "shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"

const primaryClasses = cn("hover:bg-primary/90", motionClasses)

const outlineClasses = cn(
  "border-primary/25 bg-background hover:bg-primary/5 motion-safe:hover:-translate-y-0.5",
  "transition-all duration-200"
)

const onDarkPrimaryClasses = cn("hover:bg-primary/90", motionClasses)

const onDarkOutlineClasses =
  "border-background/35 bg-transparent text-background transition-all duration-200 hover:bg-background/10 motion-safe:hover:-translate-y-0.5"

type Tone = "default" | "onDark"

type Props = {
  serviceId: string
  children: React.ReactNode
  /** Primary = filled; outline = bordered. */
  variant?: "primary" | "outline"
  size?: "default" | "lg"
  className?: string
  /** Use on dark sections (e.g. bg-foreground). */
  tone?: Tone
}

/**
 * Standard consultation CTA for service flows. Contextual label, universal destination
 * `/consultation-request?service=<serviceId>`.
 */
export function ServiceConsultationCta({
  serviceId,
  children,
  variant = "primary",
  size = "lg",
  className,
  tone = "default",
}: Props) {
  const href = consultationHref(serviceId)
  const isOnDark = tone === "onDark"
  const variantClass =
    variant === "primary"
      ? isOnDark
        ? onDarkPrimaryClasses
        : primaryClasses
      : isOnDark
        ? onDarkOutlineClasses
        : outlineClasses

  return (
    <Button
      size={size}
      variant={variant === "primary" ? "default" : "outline"}
      className={cn(variantClass, className)}
      asChild
    >
      <Link href={href} prefetch={false}>
        {children}
      </Link>
    </Button>
  )
}

type GenericProps = {
  children: React.ReactNode
  variant?: "primary" | "outline"
  size?: "default" | "lg"
  className?: string
  tone?: Tone
}

/** Consultation entry without a pre-selected service (listing pages, hero). */
export function ConsultationCtaLink({
  children,
  variant = "primary",
  size = "lg",
  className,
  tone = "default",
}: GenericProps) {
  const href = consultationHref()
  const isOnDark = tone === "onDark"
  const variantClass =
    variant === "primary"
      ? isOnDark
        ? onDarkPrimaryClasses
        : primaryClasses
      : isOnDark
        ? onDarkOutlineClasses
        : outlineClasses

  return (
    <Button
      size={size}
      variant={variant === "primary" ? "default" : "outline"}
      className={cn(variantClass, className)}
      asChild
    >
      <Link href={href} prefetch={false}>
        {children}
      </Link>
    </Button>
  )
}
