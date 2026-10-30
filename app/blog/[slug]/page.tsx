import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SocialShare } from "@/components/social-share"
import { getPostBySlug, getAllSlugs, getBlogPostsSortedNewestFirst } from "@/lib/blog-posts"
import { Clock, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

const SITE_ORIGIN = "https://qhsconsultant.com"

/** Renders **bold** and [label](/internal-link) inside a line of post copy. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <Link key={i} href={link[2]} className="font-medium text-primary underline underline-offset-4 hover:no-underline">
          {link[1]}
        </Link>
      )
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/)
    if (bold) return <strong key={i} className="font-semibold text-foreground">{bold[1]}</strong>
    return part
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  const ogImage =
    post.image.startsWith("/") ? `${SITE_ORIGIN}${post.image}` : post.image
  const canonical = `${SITE_ORIGIN}/blog/${slug}`
  const publishedTime = `${post.publishedAt}T12:00:00.000Z`
  const modifiedTime = post.updatedAt ? `${post.updatedAt}T12:00:00.000Z` : publishedTime

  return {
    title: { absolute: post.seoTitle.replace(/\s*\|\s*QHS Consultants Ltd\s*$/, "") },
    description: post.seoDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.seoTitle,
      description: post.seoDescription,
      publishedTime,
      modifiedTime,
      images: [{ url: ogImage, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [ogImage],
    },
  }
}

function renderBody(content: string) {
  const lines = content.trim().split("\n").map((l) => l.trim()).filter(Boolean)
  const out: React.ReactNode[] = []
  let bullets: string[] = []
  const flush = (key: number) => {
    if (!bullets.length) return
    out.push(
      <ul key={`ul-${key}`} className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        {bullets.map((b, j) => (
          <li key={j} className="leading-relaxed">{renderInline(b)}</li>
        ))}
      </ul>
    )
    bullets = []
  }
  lines.forEach((para, i) => {
    if (para.startsWith("- ")) {
      bullets.push(para.slice(2))
      return
    }
    flush(i)
    if (para.startsWith("**") && para.endsWith("**") && !para.slice(2, -2).includes("**")) {
      out.push(
        <h2 key={i} className="mt-8 border-l-4 border-primary pl-3 text-xl font-semibold text-foreground md:text-2xl">
          {para.replace(/\*\*/g, "")}
        </h2>
      )
    } else if (para === "---") {
      out.push(<hr key={i} className="my-8 border-border" />)
    } else {
      out.push(
        <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
          {renderInline(para)}
        </p>
      )
    }
  })
  flush(lines.length)
  return out
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const baseUrl = SITE_ORIGIN
  const related = getBlogPostsSortedNewestFirst().filter((p) => p.slug !== post.slug).slice(0, 3)
  const url = `${baseUrl}/blog/${post.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.seoDescription,
        image: post.image.startsWith("/") ? `${baseUrl}${post.image}` : post.image,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        articleSection: post.category,
        inLanguage: "en-NG",
        author: { "@type": "Organization", name: post.author },
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" className="min-h-screen bg-background">
        <article className="mx-auto max-w-3xl px-4 pb-20 pt-8 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <header className="mb-8">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {renderBody(post.content)}
          </div>

          <div className="mt-8 rounded-xl border bg-muted/50 p-6">
            <p className="mb-4 text-sm font-medium text-foreground">{post.cta}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+12526914076"
                className="text-sm font-semibold text-primary underline underline-offset-4 hover:no-underline"
              >
                +1 (252) 691 4076
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="tel:+15732647695"
                className="text-sm font-semibold text-primary underline underline-offset-4 hover:no-underline"
              >
                +1 (573) 264 7695 — Book specialist / Advisory Appointment
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <section aria-labelledby="related-heading" className="mt-9">
              <h2 id="related-heading" className="mb-4 text-lg font-semibold text-foreground">Keep reading</h2>
              <ul className="grid gap-3 sm:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="flex h-full flex-col rounded-xl border border-t-4 border-t-primary/60 bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="text-xs font-semibold text-primary">{r.category}</span>
                      <span className="mt-1 text-sm font-medium leading-snug text-foreground">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
            <SocialShare
              url={`${baseUrl}/blog/${post.slug}`}
              title={post.title}
              description={post.excerpt}
            />
            <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
              More articles →
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  )
}
