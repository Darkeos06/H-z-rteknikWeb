import type { SEOConfig } from './types'

export const seoConfig: SEOConfig = {
  siteName: 'Hızır Teknik',
  siteUrl: process.env.NEXT_PUBLIC_SERVER_URL || 'https://hizirteknik.com',
  defaultTitle: 'Hızır Teknik | Tamirat Tadilat Isıtma Soğutma Elektrik',
  titleTemplate: '%s | Hızır Teknik',
  defaultDescription:
    "Ankara'da 25 yıllık tecrübe ile profesyonel tesisat, elektrik, iklimlendirme ve yapı hizmetleri. Uzman kadro, 7/24 acil servis ve garantili çözümler.",
  defaultImage: '/og-image.jpg',
  twitterHandle: '@hizirteknik',
  locale: 'tr_TR',
  alternateLocales: [],
}

export const getFullUrl = (path: string): string => {
  const baseUrl = seoConfig.siteUrl.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

export const formatTitle = (title: string, useTemplate = true): string => {
  if (!useTemplate) return title
  if (title.includes('Hızır Teknik')) return title
  return seoConfig.titleTemplate.replace('%s', title)
}
