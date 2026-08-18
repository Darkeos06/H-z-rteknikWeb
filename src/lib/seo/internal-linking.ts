import type { InternalLink, HubAndSpokeConfig, ProgrammaticPageData, BreadcrumbItem } from './types'
import { LOCATIONS, type LocationKey } from '../locations'

export function generateBreadcrumbs(data: ProgrammaticPageData): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Ana Sayfa', url: '/' }]

  const { templateType, location, service, category } = data

  switch (templateType) {
    case 'location-hub':
      if (location) {
        breadcrumbs.push({
          name: location.name,
          url: `/${location.slug}/teknik-servis`,
        })
      }
      break

    case 'location-category':
      if (location) {
        breadcrumbs.push({
          name: location.name,
          url: `/${location.slug}/teknik-servis`,
        })
      }
      if (category) {
        breadcrumbs.push({
          name: category.title,
          url: `/${location?.slug}/${category.slug}`,
        })
      }
      break

    case 'location-service':
      if (location) {
        breadcrumbs.push({
          name: location.name,
          url: `/${location.slug}/teknik-servis`,
        })
      }
      if (service?.categorySlug && service?.categoryTitle) {
        breadcrumbs.push({
          name: service.categoryTitle,
          url: `/${location?.slug}/${service.categorySlug}`,
        })
      }
      if (service) {
        breadcrumbs.push({
          name: service.title,
          url: `/${location?.slug}/${service.slug}`,
        })
      }
      break

    case 'blog':
      breadcrumbs.push({ name: 'Blog', url: '/blog' })
      if (data.content) {
        breadcrumbs.push({
          name: data.content.title,
          url: `/blog/${slugify(data.content.title)}`,
        })
      }
      break

    case 'service':
      breadcrumbs.push({ name: 'Hizmetler', url: '/hizmetler' })
      if (service) {
        breadcrumbs.push({
          name: service.title,
          url: `/hizmetler/${service.slug}`,
        })
      }
      break

    case 'category':
      breadcrumbs.push({ name: 'Hizmetler', url: '/hizmetler' })
      if (category) {
        breadcrumbs.push({
          name: category.title,
          url: `/hizmetler/${category.slug}`,
        })
      }
      break
  }

  return breadcrumbs
}

export function generateHubAndSpokeLinks(
  locationSlug: string,
  services: { slug: string; title: string; description?: string }[],
  categories: { slug: string; title: string; description?: string }[],
): HubAndSpokeConfig {
  const location = LOCATIONS[locationSlug as LocationKey]

  if (!location) {
    throw new Error(`Invalid location: ${locationSlug}`)
  }

  const spokes: HubAndSpokeConfig['spokes'] = []

  for (const category of categories) {
    spokes.push({
      url: `/${locationSlug}/${category.slug}`,
      title: `${location.name} ${category.title}`,
      description: category.description,
    })
  }

  for (const service of services) {
    spokes.push({
      url: `/${locationSlug}/${service.slug}`,
      title: `${service.title} - ${location.name}`,
      description: service.description,
    })
  }

  return {
    hubUrl: `/${locationSlug}/teknik-servis`,
    hubTitle: `${location.name} Teknik Servis Hizmetleri`,
    spokes,
  }
}

export function generateRelatedLinks(
  data: ProgrammaticPageData,
  allServices: { slug: string; title: string; categorySlug?: string }[],
  allCategories: { slug: string; title: string }[],
  limit = 6,
): InternalLink[] {
  const links: InternalLink[] = []
  const { templateType, location, service, category } = data

  if (templateType === 'location-service' && location && service) {
    const sameCategory = allServices
      .filter((s) => s.categorySlug === service.categorySlug && s.slug !== service.slug)
      .slice(0, 3)

    for (const s of sameCategory) {
      links.push({
        title: `${s.title} - ${location.name}`,
        url: `/${location.slug}/${s.slug}`,
        priority: 'high',
        type: 'sibling',
      })
    }

    const otherServices = allServices
      .filter((s) => s.categorySlug !== service.categorySlug)
      .slice(0, limit - links.length)

    for (const s of otherServices) {
      links.push({
        title: `${s.title} - ${location.name}`,
        url: `/${location.slug}/${s.slug}`,
        priority: 'medium',
        type: 'related',
      })
    }
  }

  if (templateType === 'location-category' && location && category) {
    const servicesInCategory = allServices
      .filter((s) => s.categorySlug === category.slug)
      .slice(0, 4)

    for (const s of servicesInCategory) {
      links.push({
        title: `${s.title} - ${location.name}`,
        url: `/${location.slug}/${s.slug}`,
        priority: 'high',
        type: 'spoke',
      })
    }

    const otherCategories = allCategories
      .filter((c) => c.slug !== category.slug)
      .slice(0, limit - links.length)

    for (const c of otherCategories) {
      links.push({
        title: `${c.title} - ${location.name}`,
        url: `/${location.slug}/${c.slug}`,
        priority: 'medium',
        type: 'sibling',
      })
    }
  }

  if (templateType === 'location-hub' && location) {
    for (const c of allCategories.slice(0, limit)) {
      links.push({
        title: `${c.title} - ${location.name}`,
        url: `/${location.slug}/${c.slug}`,
        priority: 'high',
        type: 'spoke',
      })
    }
  }

  return links.slice(0, limit)
}

export function generateCrossLocationLinks(
  currentLocationSlug: string,
  serviceOrCategorySlug: string,
  type: 'service' | 'category',
  limit = 5,
): InternalLink[] {
  const links: InternalLink[] = []
  const locationKeys = Object.keys(LOCATIONS) as LocationKey[]

  for (const locSlug of locationKeys) {
    if (locSlug === currentLocationSlug) continue

    const location = LOCATIONS[locSlug]
    links.push({
      title: `${location.name}`,
      url: `/${locSlug}/${serviceOrCategorySlug}`,
      priority: 'low',
      type: 'related',
    })

    if (links.length >= limit) break
  }

  return links
}

export function generateSiblingLocationLinks(currentLocationSlug: string): InternalLink[] {
  const links: InternalLink[] = []
  const locationKeys = Object.keys(LOCATIONS) as LocationKey[]

  for (const locSlug of locationKeys) {
    if (locSlug === currentLocationSlug) continue

    const location = LOCATIONS[locSlug]
    links.push({
      title: `${location.name} Teknik Servis`,
      url: `/${locSlug}/teknik-servis`,
      priority: 'medium',
      type: 'sibling',
    })
  }

  return links
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
