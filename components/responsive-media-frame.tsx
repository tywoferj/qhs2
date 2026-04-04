import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
  /** Default 4:3; use for service heroes and listings. */
  aspect?: "video" | "4/3" | "16/10"
}

const aspectClass = {
  video: "aspect-video",
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
} as const

/**
 * Clips Next/Image fill layouts to a fixed aspect ratio, prevents grid overflow on small screens,
 * and keeps `object-cover` children from distorting.
 */
export function ResponsiveMediaFrame({ children, className, aspect = "4/3" }: Props) {
  return (
    <div
      className={cn(
        "relative w-full min-w-0 overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border/30",
        aspectClass[aspect],
        className
      )}
    >
      {children}
    </div>
  )
}
