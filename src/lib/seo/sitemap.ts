import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { LOCATIONS } from '../locations'
import { seoConfig } from './config'

export interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const SITE_URL = seoConfig.siteUrl

export const getLocationServiceSitemap = unstable_cache(
  async (): Promise<SitemapEntry[]> => {
    const payload = await getPayload({ config: configPromise })

    const [servicesResult, categoriesResult] = await Promise.all([
      payload.find({
        collection: 'services',
        limit: 10000,
        depth: 0,
        where: { _status: { equals: 'published' } },
        select: { slug: true, updatedAt: true },
      }),
      payload.find({
        collection: 'service-categories',
        limit: 1000,
        depth: 0,
        where: { _status: { equals: 'published' } },
        select: { slug: true, updatedAt: true },
      }),
    ])

    const entries: SitemapEntry[] = []
    const locationSlugs = Object.keys(LOCATIONS)
    const dateFallback = new Date().toISOString()

    for (const locationSlug of locationSlugs) {
      entries.push({
        loc: `${SITE_URL}/${locationSlug}/teknik-servis`,
        lastmod: dateFallback,
        changefreq: 'weekly',
        priority: 0.9,
      })

      for (const service of servicesResult.docs) {
        if (service.slug) {
          entries.push({
            loc: `${SITE_URL}/${locationSlug}/${service.slug}`,
            lastmod: service.updatedAt || dateFallback,
            changefreq: 'weekly',
            priority: 0.8,
          })
        }
      }

      for (const category of categoriesResult.docs) {
        if (category.slug) {
          entries.push({
            loc: `${SITE_URL}/${locationSlug}/${category.slug}`,
            lastmod: category.updatedAt || dateFallback,
            changefreq: 'weekly',
            priority: 0.85,
          })
        }
      }
    }

    return entries
  },
  ['location-service-sitemap'],
  { tags: ['services', 'service-categories', 'locations-sitemap'], revalidate: 3600 },
)

export const getBlogSitemap = unstable_cache(
  async (): Promise<SitemapEntry[]> => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'posts',
      limit: 10000,
      depth: 0,
      where: { _status: { equals: 'published' } },
      select: { slug: true, updatedAt: true },
    })

    const dateFallback = new Date().toISOString()

    return result.docs
      .filter((post) => Boolean(post?.slug))
      .map((post) => ({
        loc: `${SITE_URL}/blog/${post.slug}`,
        lastmod: post.updatedAt || dateFallback,
        changefreq: 'monthly' as const,
        priority: 0.7,
      }))
  },
  ['blog-sitemap'],
  { tags: ['posts', 'posts-sitemap'], revalidate: 3600 },
)

export const getPagesSitemap = unstable_cache(
  async (): Promise<SitemapEntry[]> => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      limit: 1000,
      depth: 0,
      where: { _status: { equals: 'published' } },
      select: { slug: true, updatedAt: true },
    })

    const dateFallback = new Date().toISOString()

    return result.docs
      .filter((page) => Boolean(page?.slug) && page.slug !== 'ana-sayfa')
      .map((page) => ({
        loc: `${SITE_URL}/${page.slug}`,
        lastmod: page.updatedAt || dateFallback,
        changefreq: 'monthly' as const,
        priority: 0.6,
      }))
  },
  ['pages-sitemap'],
  { tags: ['pages', 'pages-sitemap'], revalidate: 3600 },
)

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const urlEntries = entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.loc}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ''}
  </url>`,
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

export function generateSitemapIndexXml(sitemaps: { loc: string; lastmod?: string }[]): string {
  const sitemapEntries = sitemaps
    .map(
      (sitemap) => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    ${sitemap.lastmod ? `<lastmod>${sitemap.lastmod}</lastmod>` : ''}
  </sitemap>`,
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`
}

export async function getSitemapStats(): Promise<{
  totalUrls: number
  locationServiceUrls: number
  blogUrls: number
  pageUrls: number
}> {
  const [locationService, blog, pages] = await Promise.all([
    getLocationServiceSitemap(),
    getBlogSitemap(),
    getPagesSitemap(),
  ])

  return {
    totalUrls: locationService.length + blog.length + pages.length,
    locationServiceUrls: locationService.length,
    blogUrls: blog.length,
    pageUrls: pages.length,
  }
}
