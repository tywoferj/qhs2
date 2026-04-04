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
            className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                quality={75}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center text-sm font-medium text-primary">
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
