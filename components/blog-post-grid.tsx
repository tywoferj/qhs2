"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Reveal } from "@/components/reveal"

export type BlogCardItem = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  imageAlt: string
  /** Shown on the card (publish or update date). */
  dateLabel: string
}

export function BlogPostGrid({ posts }: { posts: BlogCardItem[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, idx) => (
        <Reveal key={post.slug} delayMs={idx * 70}>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-card shadow-xl shadow-secondary/10 ring-1 ring-border/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:shadow-secondary/25 motion-safe:hover:-translate-y-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-110"
                quality={75}
                loading="lazy"
                decoding="async"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="absolute bottom-3 left-3 rounded-full bg-gradient-to-r from-primary to-[hsl(165_55%_30%)] px-3 py-1 text-xs font-semibold text-white shadow-md">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-secondary">
                {post.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center text-sm font-semibold text-secondary transition-all duration-300 group-hover:gap-1 group-hover:text-primary">
                  Read more →
                </span>
                <div className="flex flex-wrap items-center justify-end gap-2 text-xs text-muted-foreground">
                  <span>{post.dateLabel}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
