import { getServerSideSitemap } from 'next-sitemap'
import { unstable_cache } from 'next/cache'
import { LOCATIONS } from '@/lib/locations'

const getLocationsSitemap = unstable_cache(
  async () => {
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const dateFallback = new Date().toISOString()
    const locationSlugs = Object.keys(LOCATIONS)

    // Create sitemap entries for each location
    const sitemap = locationSlugs.map((locationSlug) => ({
      loc: `${SITE_URL}/${locationSlug}/teknik-servis`,
      lastmod: dateFallback,
      priority: locationSlug === 'ankara' ? 0.9 : 0.8, // Prioritize main location
    }))

    return sitemap
  },
  ['locations-sitemap'],
  {
    tags: ['locations-sitemap'],
  },
)

export async function GET() {
  return getServerSideSitemap(await getLocationsSitemap())
}
