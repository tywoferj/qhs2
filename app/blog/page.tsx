import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { getBlogPostsSortedNewestFirst } from "@/lib/blog-posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Insights and Blog | QHS Consultants Ltd",
  description:
    "Articles on JCI and SQH accreditation, hospital quality, patient safety, revenue cycle, and healthcare management in Nigeria and West Africa.",
  keywords: [
    "healthcare blog Nigeria",
    "JCI accreditation Nigeria",
    "hospital quality improvement",
    "patient safety Nigeria",
    "healthcare management West Africa",
  ],
  openGraph: {
    title: "Healthcare Insights and Blog | QHS Consultants Ltd",
    description:
      "Expert articles on accreditation, quality, safety, and operations for hospitals in Nigeria and West Africa.",
  },
}

function dateLabelForCard(post: { publishedAt: string; updatedAt?: string }): string {
  if (post.updatedAt && post.updatedAt !== post.publishedAt) {
    return `Updated ${post.updatedAt}`
  }
  return post.publishedAt
}

export default function BlogIndexPage() {
  const sorted = getBlogPostsSortedNewestFirst()
  const cards = sorted.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    readTime: post.readTime,
    image: post.image,
    imageAlt: post.imageAlt,
    dateLabel: dateLabelForCard(post),
  }))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Insights</p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Healthcare Insights and Industry Expertise
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Latest articles first. New posts and updates appear at the top.
            </p>
          </div>
          <BlogPostGrid posts={cards} />
        </div>
      </main>
      <Footer />
    </>
  )
}
