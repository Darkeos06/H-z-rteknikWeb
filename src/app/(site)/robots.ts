import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/(payload)/', '/admin/', '/(preview)/', '/*.json$', '/next/'],
    },
    sitemap: 'https://hizirteknik.com/sitemap.xml',
    host: 'https://hizirteknik.com',
  }
}
