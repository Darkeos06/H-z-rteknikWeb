import type { Metadata } from 'next'
import type { PageSEOData, ProgrammaticPageData } from './types'
import { seoConfig, getFullUrl, formatTitle } from './config'

export function generateMetadata(data: PageSEOData, path: string): Metadata {
  const title = formatTitle(data.title)
  const description = data.description || seoConfig.defaultDescription
  const canonical = data.canonical || getFullUrl(path)
  const imageUrl = data.image?.url || getFullUrl(seoConfig.defaultImage)

  const metadata: Metadata = {
    title,
    description,
    keywords: data.keywords?.join(', '),
    authors: data.author ? [{ name: data.author }] : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      url: canonical,
      siteName: seoConfig.siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: data.image?.width || 1200,
          height: data.image?.height || 630,
          alt: data.image?.alt || title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: !data.noIndex,
      follow: !data.noFollow,
      googleBot: {
        index: !data.noIndex,
        follow: !data.noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

export function generateArticleMetadata(
  data: PageSEOData & {
    publishedTime?: string
    modifiedTime?: string
    section?: string
    tags?: string[]
  },
  path: string,
): Metadata {
  const baseMetadata = generateMetadata(data, path)
  const canonical = data.canonical || getFullUrl(path)

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article',
      publishedTime: data.publishedTime,
      modifiedTime: data.modifiedTime,
      section: data.section,
      tags: data.tags,
      url: canonical,
    },
  }
}

export function generateLocationServiceMetadata(data: ProgrammaticPageData): Metadata {
  const { location, service, category } = data

  if (!location) {
    throw new Error('Location data is required for location-service metadata')
  }

  let title: string
  let description: string
  let keywords: string[] = []

  if (service) {
    title = `${service.title} - ${location.name}`
    description = `${
      location.name
    } bölgesinde profesyonel ${service.title.toLowerCase()} hizmeti. Hızır Teknik kalitesiyle hızlı, güvenilir ve uygun fiyatlı çözümler. ✓ Aynı gün servis ✓ Garantili işçilik`
    keywords = [
      `${location.name.toLowerCase()} ${service.title.toLowerCase()}`,
      `${service.title.toLowerCase()} ${location.name.toLowerCase()}`,
      `${location.name.toLowerCase()} teknik servis`,
      service.title.toLowerCase(),
      location.name.toLowerCase(),
    ]
  } else if (category) {
    title = `${category.title} - ${location.name}`
    description = `${
      location.name
    } bölgesinde ${category.title.toLowerCase()} hizmetlerimiz. Profesyonel ekip, kaliteli malzeme ve uygun fiyatlarla hizmetinizdeyiz.`
    keywords = [
      `${location.name.toLowerCase()} ${category.title.toLowerCase()}`,
      `${category.title.toLowerCase()} ${location.name.toLowerCase()}`,
      category.title.toLowerCase(),
      location.name.toLowerCase(),
    ]
  } else {
    title = `${location.name} Teknik Servis Hizmetleri`
    description = `${location.name} bölgesinde kombi, klima, tesisat, elektrik ve tadilat hizmetleri. Hızır Teknik ile aynı gün servis ve uygun fiyat garantisi.`
    keywords = [
      `${location.name.toLowerCase()} teknik servis`,
      `${location.name.toLowerCase()} tamirat`,
      `${location.name.toLowerCase()} tadilat`,
      location.name.toLowerCase(),
    ]
  }

  const path = buildPath(data)

  return generateMetadata(
    {
      title,
      description,
      keywords,
    },
    path,
  )
}

export function buildPath(data: ProgrammaticPageData): string {
  const { templateType, location, service, category, content } = data

  switch (templateType) {
    case 'location-service':
      return `/${location?.slug}/${service?.slug}`
    case 'location-category':
      return `/${location?.slug}/${category?.slug}`
    case 'location-hub':
      return `/${location?.slug}/teknik-servis`
    case 'blog':
      return `/blog/${content?.title ? slugify(content.title) : ''}`
    case 'service':
      return `/hizmetler/${service?.slug}`
    case 'category':
      return `/hizmetler/${category?.slug}`
    case 'page':
      return `/${content?.title ? slugify(content.title) : ''}`
    default:
      return '/'
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
