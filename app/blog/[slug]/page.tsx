import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SocialShare } from "@/components/social-share"
import { getPostBySlug, getAllSlugs } from "@/lib/blog-posts"
import { Clock, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qhsconsultant.com"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="mx-auto max-w-3xl px-4 pb-20 pt-8 lg:px-8">
          <Link
            href="/#insights"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
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
              <span>{post.publishedAt}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.trim().split("\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h2 key={i} className="mt-8 text-xl font-semibold text-foreground">
                    {para.replace(/\*\*/g, "")}
                  </h2>
                )
              }
              if (para === "---")
                return <hr key={i} className="my-8 border-border" />
              return (
                <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                  {para}
                </p>
              )
            })}
          </div>

          <div className="mt-10 rounded-xl border bg-muted/50 p-6">
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
                +1 (573) 264 7695 — Book with Dr Onakoya
              </a>
            </div>
          </div>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
            <SocialShare
              url={`${baseUrl}/blog/${post.slug}`}
              title={post.title}
              description={post.excerpt}
            />
            <Link
              href="/#insights"
              className="text-sm font-medium text-primary hover:underline"
            >
              More insights →
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  )
}
