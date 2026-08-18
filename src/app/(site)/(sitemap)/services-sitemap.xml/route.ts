import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import { LOCATIONS } from '@/lib/locations'

const getServicesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'services',
      overrideAccess: false,
      draft: false,
      depth: 0,
      sort: 'id',
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()
    const locationSlugs = Object.keys(LOCATIONS)

    // Create sitemap entries for each location and service combination
    const sitemap = results.docs
      ? results.docs
          .filter((service) => Boolean(service?.slug))
          .flatMap((service) =>
            locationSlugs.map((locationSlug) => ({
              loc: `${SITE_URL}/${locationSlug}/${service?.slug}`,
              lastmod: service.updatedAt || dateFallback,
            })),
          )
      : []

    return sitemap
  },
  ['services-sitemap'],
  {
    tags: ['services-sitemap'],
  },
)

export async function GET() {
  return getServerSideSitemap(await getServicesSitemap())
}
