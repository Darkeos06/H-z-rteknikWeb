import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import type { ProgrammaticPageData } from './types'
import { LOCATIONS, isValidLocation, type LocationKey } from '../locations'
import { generateBreadcrumbs } from './internal-linking'

export const getServices = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'services',
      limit: 1000,
      depth: 1,
      where: {
        _status: { equals: 'published' },
      },
      select: {
        slug: true,
        title: true,
        description: true,
        icon: true,
        featured: true,
        featured_image: true,
        related_category: true,
      },
    })
    return result.docs
  },
  ['all-services'],
  { tags: ['services'], revalidate: 3600 },
)

export const getServiceCategories = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'service-categories',
      limit: 100,
      depth: 0,
      where: {
        _status: { equals: 'published' },
      },
      select: {
        slug: true,
        title: true,
        description: true,
        icon: true,
        featured_image: true,
      },
    })
    return result.docs
  },
  ['all-service-categories'],
  { tags: ['service-categories'], revalidate: 3600 },
)

export const getServiceBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'services',
      limit: 1,
      depth: 2,
      where: {
        slug: { equals: slug },
        _status: { equals: 'published' },
      },
    })
    return result.docs[0] || null
  },
  ['service-by-slug'],
  { tags: ['services'], revalidate: 3600 },
)

export const getCategoryBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'service-categories',
      limit: 1,
      depth: 1,
      where: {
        slug: { equals: slug },
        _status: { equals: 'published' },
      },
    })
    return result.docs[0] || null
  },
  ['category-by-slug'],
  { tags: ['service-categories'], revalidate: 3600 },
)

export const getServicesByCategory = unstable_cache(
  async (categoryId: number | string) => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'services',
      limit: 100,
      depth: 1,
      where: {
        related_category: { equals: categoryId },
        _status: { equals: 'published' },
      },
    })
    return result.docs
  },
  ['services-by-category'],
  { tags: ['services'], revalidate: 3600 },
)

export async function buildProgrammaticPageData(
  templateType: ProgrammaticPageData['templateType'],
  params: {
    locationSlug?: string
    serviceSlug?: string
    categorySlug?: string
    contentSlug?: string
  },
): Promise<ProgrammaticPageData | null> {
  const { locationSlug, serviceSlug, categorySlug } = params

  let location: ProgrammaticPageData['location']
  let service: ProgrammaticPageData['service']
  let category: ProgrammaticPageData['category']

  if (locationSlug && isValidLocation(locationSlug)) {
    const loc = LOCATIONS[locationSlug as LocationKey]
    location = {
      slug: locationSlug,
      name: loc.name,
      title: loc.title,
      description: loc.description,
    }
  }

  if (serviceSlug) {
    const serviceData = await getServiceBySlug(serviceSlug)
    if (serviceData) {
      const relatedCategory =
        typeof serviceData.related_category === 'object' ? serviceData.related_category : null

      service = {
        slug: serviceData.slug || '',
        title: serviceData.title || '',
        description: serviceData.description || '',
        categorySlug: relatedCategory?.slug,
        categoryTitle: relatedCategory?.title,
      }
    }
  }

  if (categorySlug) {
    const categoryData = await getCategoryBySlug(categorySlug)
    if (categoryData) {
      category = {
        slug: categoryData.slug || '',
        title: categoryData.title || '',
        description: categoryData.description || '',
      }
    }
  }

  const data: ProgrammaticPageData = {
    templateType,
    location,
    service,
    category,
    breadcrumbs: [],
  }

  data.breadcrumbs = generateBreadcrumbs(data)

  return data
}

export async function generateAllStaticParams(): Promise<
  {
    slug: string
    content?: string
  }[]
> {
  const [services, categories] = await Promise.all([getServices(), getServiceCategories()])

  const params: { slug: string; content?: string }[] = []
  const locationSlugs = Object.keys(LOCATIONS)

  for (const locationSlug of locationSlugs) {
    params.push({ slug: locationSlug })

    for (const service of services) {
      if (service.slug) {
        params.push({
          slug: locationSlug,
          content: service.slug,
        })
      }
    }

    for (const category of categories) {
      if (category.slug) {
        params.push({
          slug: locationSlug,
          content: category.slug,
        })
      }
    }
  }

  return params
}

export async function getPageCount(): Promise<{
  locations: number
  services: number
  categories: number
  totalProgrammaticPages: number
}> {
  const [services, categories] = await Promise.all([getServices(), getServiceCategories()])

  const locationCount = Object.keys(LOCATIONS).length
  const serviceCount = services.length
  const categoryCount = categories.length

  const totalProgrammaticPages =
    locationCount + // hub pages
    locationCount * serviceCount + // location-service pages
    locationCount * categoryCount // location-category pages

  return {
    locations: locationCount,
    services: serviceCount,
    categories: categoryCount,
    totalProgrammaticPages,
  }
}
