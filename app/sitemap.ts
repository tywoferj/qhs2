import { MetadataRoute } from "next"
import { getAllServiceSlugs } from "@/lib/services-data"
import { BLOG_POSTS, getPostSortTime } from "@/lib/blog-posts"

const BASE_URL = "https://qhsconsultant.com"

/** Use for site pages that do not have a content-derived modified date. */
const SITE_REFRESH = new Date("2026-04-24T00:00:00.000Z")

/**
 * Dynamic sitemap at /sitemap.xml — submit this URL in Google Search Console.
 * @see https://qhsconsultant.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_REFRESH, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: SITE_REFRESH, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/board`, lastModified: SITE_REFRESH, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: SITE_REFRESH, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: SITE_REFRESH, changeFrequency: "weekly", priority: 0.85 },
    {
      url: `${BASE_URL}/accreditation-checklist`,
      lastModified: SITE_REFRESH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${BASE_URL}/brochures`, lastModified: SITE_REFRESH, changeFrequency: "monthly", priority: 0.75 },
    {
      url: `${BASE_URL}/consultation-request`,
      lastModified: SITE_REFRESH,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/consultation-request/thank-you`,
      lastModified: SITE_REFRESH,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    { url: `${BASE_URL}/services`, lastModified: SITE_REFRESH, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: SITE_REFRESH, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookies`, lastModified: SITE_REFRESH, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: SITE_REFRESH, changeFrequency: "yearly", priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: SITE_REFRESH,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(getPostSortTime(post)),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
