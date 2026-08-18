import type { BreadcrumbItem, FAQItem, ProgrammaticPageData, SchemaOrgData } from './types'
import { seoConfig, getFullUrl } from './config'

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]): SchemaOrgData {
  return {
    type: 'BreadcrumbList',
    data: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: getFullUrl(item.url),
      })),
    },
  }
}

export function generateFAQSchema(faqs: FAQItem[]): SchemaOrgData {
  return {
    type: 'FAQPage',
    data: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  }
}

export function generateArticleSchema(data: {
  title: string
  description: string
  url: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
}): SchemaOrgData {
  return {
    type: 'Article',
    data: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      url: getFullUrl(data.url),
      image: data.image ? getFullUrl(data.image) : undefined,
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime || data.publishedTime,
      author: data.author
        ? {
            '@type': 'Person',
            name: data.author,
          }
        : {
            '@type': 'Organization',
            name: seoConfig.siteName,
          },
      publisher: {
        '@type': 'Organization',
        name: seoConfig.siteName,
        logo: {
          '@type': 'ImageObject',
          url: getFullUrl('/logo.png'),
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': getFullUrl(data.url),
      },
    },
  }
}

export function generateServiceSchema(data: {
  name: string
  description: string
  url: string
  image?: string
  provider?: string
  areaServed?: string
  priceRange?: string
}): SchemaOrgData {
  return {
    type: 'Service',
    data: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      url: getFullUrl(data.url),
      image: data.image ? getFullUrl(data.image) : undefined,
      provider: {
        '@type': 'LocalBusiness',
        name: data.provider || seoConfig.siteName,
        url: seoConfig.siteUrl,
      },
      areaServed: data.areaServed
        ? {
            '@type': 'City',
            name: data.areaServed,
          }
        : undefined,
      priceRange: data.priceRange || '$$',
    },
  }
}

export function generateLocalBusinessSchema(data: {
  name: string
  description: string
  telephone?: string
  email?: string
  address?: {
    street?: string
    city?: string
    region?: string
    postalCode?: string
    country?: string
  }
  areaServed?: string[]
  openingHours?: string
  priceRange?: string
  image?: string
  sameAs?: string[]
}): SchemaOrgData {
  return {
    type: 'LocalBusiness',
    data: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${seoConfig.siteUrl}/#organization`,
      name: data.name,
      description: data.description,
      url: seoConfig.siteUrl,
      telephone: data.telephone,
      email: data.email,
      address: data.address
        ? {
            '@type': 'PostalAddress',
            streetAddress: data.address.street,
            addressLocality: data.address.city,
            addressRegion: data.address.region,
            postalCode: data.address.postalCode,
            addressCountry: data.address.country || 'TR',
          }
        : undefined,
      areaServed: data.areaServed?.map((area) => ({
        '@type': 'City',
        name: area,
      })),
      priceRange: data.priceRange || '$$',
      openingHours: data.openingHours,
      image: data.image ? getFullUrl(data.image) : undefined,
      sameAs: data.sameAs,
    },
  }
}

export function generateHowToSchema(data: {
  name: string
  description: string
  steps: { name: string; text: string; image?: string }[]
  totalTime?: string
  estimatedCost?: { currency: string; value: string }
}): SchemaOrgData {
  return {
    type: 'HowTo',
    data: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: data.name,
      description: data.description,
      totalTime: data.totalTime,
      estimatedCost: data.estimatedCost
        ? {
            '@type': 'MonetaryAmount',
            currency: data.estimatedCost.currency,
            value: data.estimatedCost.value,
          }
        : undefined,
      step: data.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        image: step.image ? getFullUrl(step.image) : undefined,
      })),
    },
  }
}

export function generateWebPageSchema(data: {
  name: string
  description: string
  url: string
  breadcrumbs?: BreadcrumbItem[]
}): SchemaOrgData {
  return {
    type: 'WebPage',
    data: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.name,
      description: data.description,
      url: getFullUrl(data.url),
      isPartOf: {
        '@type': 'WebSite',
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
      },
      breadcrumb: data.breadcrumbs
        ? {
            '@type': 'BreadcrumbList',
            itemListElement: data.breadcrumbs.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: getFullUrl(item.url),
            })),
          }
        : undefined,
    },
  }
}

export function generateSchemasForPage(data: ProgrammaticPageData): SchemaOrgData[] {
  const schemas: SchemaOrgData[] = []

  if (data.breadcrumbs && data.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(data.breadcrumbs))
  }

  if (data.faqs && data.faqs.length > 0) {
    schemas.push(generateFAQSchema(data.faqs))
  }

  switch (data.templateType) {
    case 'location-service':
      if (data.service && data.location) {
        schemas.push(
          generateServiceSchema({
            name: `${data.service.title} - ${data.location.name}`,
            description: data.service.description,
            url: `/${data.location.slug}/${data.service.slug}`,
            areaServed: data.location.name,
          }),
        )
      }
      break

    case 'location-category':
      if (data.category && data.location) {
        schemas.push(
          generateWebPageSchema({
            name: `${data.category.title} - ${data.location.name}`,
            description: data.category.description,
            url: `/${data.location.slug}/${data.category.slug}`,
            breadcrumbs: data.breadcrumbs,
          }),
        )
      }
      break

    case 'location-hub':
      if (data.location) {
        schemas.push(
          generateWebPageSchema({
            name: `${data.location.name} Teknik Servis Hizmetleri`,
            description: data.location.description,
            url: `/${data.location.slug}/teknik-servis`,
            breadcrumbs: data.breadcrumbs,
          }),
        )
      }
      break

    case 'blog':
      if (data.content) {
        schemas.push(
          generateArticleSchema({
            title: data.content.title,
            description: data.content.description,
            url: `/blog/${data.content.title}`,
          }),
        )
      }
      break
  }

  return schemas
}

export function renderSchemaScripts(schemas: SchemaOrgData[]): string {
  return schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema.data)}</script>`)
    .join('\n')
}
