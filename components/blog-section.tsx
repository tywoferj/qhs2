import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BLOG_POSTS } from "@/lib/blog-posts"

export function BlogSection() {
  return (
    <section id="insights" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Insights
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Healthcare Insights & Industry Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay informed with the latest trends, strategies, and best practices
            in healthcare management and quality improvement.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, idx) => (
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
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    {"Read more \u2192"}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
