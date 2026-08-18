const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://example.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: [
    '/blog-sitemap.xml',
    '/blog-categories-sitemap.xml',
    '/pages-sitemap.xml',
    '/services-sitemap.xml',
    '/service-categories-sitemap.xml',
    '/locations-sitemap.xml',
    '/*',
    '/posts/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/services-sitemap.xml`,
      `${SITE_URL}/service-categories-sitemap.xml`,
      `${SITE_URL}/blog-sitemap.xml`,
      `${SITE_URL}/blog-categories-sitemap.xml`,
      `${SITE_URL}/locations-sitemap.xml`,
    ],
  },
}
