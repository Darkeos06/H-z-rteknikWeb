import type { Location } from '../locations'

export interface ExtendedLocation extends Location {
  slug: string
  parentLocation?: string
  population?: number
  coordinates?: { lat: number; lng: number }
  serviceAreas?: string[]
  priority: number
  neighborhoods?: string[]
}

export const ANKARA_DISTRICTS: Record<string, ExtendedLocation> = {
  ankara: {
    slug: 'ankara',
    name: 'Ankara',
    title: 'Ankara Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Ankara'da profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
    priority: 1,
    population: 5700000,
    neighborhoods: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Altındağ', 'Etimesgut', 'Sincan'],
  },
  eryaman: {
    slug: 'eryaman',
    name: 'Eryaman',
    title: 'Eryaman Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Eryaman'da profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
    parentLocation: 'etimesgut',
    priority: 2,
    neighborhoods: ['Güzelkent', 'Göksu', 'Altay', 'Şeyh Şamil', 'Tunahan', 'Şeker'],
  },
  etimesgut: {
    slug: 'etimesgut',
    name: 'Etimesgut',
    title: 'Etimesgut Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Etimesgut'ta profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
    parentLocation: 'ankara',
    priority: 2,
    neighborhoods: ['Elvankent', 'Bağlıca', 'Eryaman', 'Piyade', 'Alsancak', 'Ayyıldız', 'Şeker'],
  },
  cayyolu: {
    slug: 'cayyolu',
    name: 'Çayyolu',
    title: 'Çayyolu Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Çayyolu'nda profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
    parentLocation: 'cankaya',
    priority: 2,
    neighborhoods: ['Ümitköy', 'Konutkent', 'Koru', 'Yaşamkent', 'Alacaatlı', 'Dodurga'],
  },
  sincan: {
    slug: 'sincan',
    name: 'Sincan',
    title: 'Sincan Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Sincan'da profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
    parentLocation: 'ankara',
    priority: 2,
    neighborhoods: ['Fatih', 'Yenikent', 'Plevne', 'İstasyon', 'Tandoğan', 'Selçuklu'],
  },
  batikent: {
    slug: 'batikent',
    name: 'Batıkent',
    title: 'Batıkent Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Batıkent'te profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
    parentLocation: 'yenimahalle',
    priority: 2,
    neighborhoods: ['Kentkoop', 'Kardelen', 'Uğur Mumcu', 'Turgut Özal', 'İlkyerleşim', 'Ergazi'],
  },
}

export function generateLocationContentVariables(
  location: ExtendedLocation,
): Record<string, string> {
  const neighborhoodsStr = location.neighborhoods && location.neighborhoods.length > 0
    ? location.neighborhoods.join(', ')
    : 'merkez ve çevre mahalleleri'

  return {
    locationName: location.name,
    locationTitle: location.title,
    locationDescription: location.description,
    locationSlug: location.slug,
    parentLocation: location.parentLocation || 'Ankara',
    neighborhoods: neighborhoodsStr,
  }
}

export function getLocationsByPriority(): ExtendedLocation[] {
  return Object.values(ANKARA_DISTRICTS).sort((a, b) => a.priority - b.priority)
}

export function getChildLocations(parentSlug: string): ExtendedLocation[] {
  return Object.values(ANKARA_DISTRICTS).filter((loc) => loc.parentLocation === parentSlug)
}

export function calculateTotalProgrammaticPages(
  locationCount: number,
  serviceCount: number,
  categoryCount: number,
): number {
  const hubPages = locationCount
  const locationServicePages = locationCount * serviceCount
  const locationCategoryPages = locationCount * categoryCount

  return hubPages + locationServicePages + locationCategoryPages
}

export function estimateScaleMetrics(
  currentLocations: number,
  currentServices: number,
  currentCategories: number,
): {
  currentPages: number
  with50Locations: number
  with100Locations: number
  with500Locations: number
  recommendedStrategy: string
} {
  const current = calculateTotalProgrammaticPages(
    currentLocations,
    currentServices,
    currentCategories,
  )
  const with50 = calculateTotalProgrammaticPages(50, currentServices, currentCategories)
  const with100 = calculateTotalProgrammaticPages(100, currentServices, currentCategories)
  const with500 = calculateTotalProgrammaticPages(500, currentServices, currentCategories)

  let recommendedStrategy: string
  if (current < 1000) {
    recommendedStrategy = 'Static generation is optimal for current scale'
  } else if (current < 10000) {
    recommendedStrategy = 'Use ISR with 1-hour revalidation for optimal balance'
  } else if (current < 50000) {
    recommendedStrategy = 'Use ISR with on-demand revalidation and chunked sitemaps'
  } else {
    recommendedStrategy = 'Implement edge caching, chunked builds, and database-driven content'
  }

  return {
    currentPages: current,
    with50Locations: with50,
    with100Locations: with100,
    with500Locations: with500,
    recommendedStrategy,
  }
}
