'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { LOCATIONS, type LocationKey } from '@/lib/locations'

interface LocationLinksProps {
  currentLocation?: string
  serviceSlug?: string
  categorySlug?: string
  title?: string
  className?: string
}

export function LocationLinks({
  currentLocation,
  serviceSlug,
  categorySlug,
  title = 'Diğer Bölgeler',
  className = '',
}: LocationLinksProps) {
  const locationKeys = Object.keys(LOCATIONS) as LocationKey[]
  const otherLocations = locationKeys.filter((loc) => loc !== currentLocation)

  if (otherLocations.length === 0) return null

  const buildUrl = (locationSlug: LocationKey) => {
    if (serviceSlug) return `/${String(locationSlug)}/${String(serviceSlug)}`
    if (categorySlug) return `/${String(locationSlug)}/${String(categorySlug)}`
    return `/${String(locationSlug)}/teknik-servis`
  }

  return (
    <div className={`${className}`}>
      {title && <h3 className="text-sm font-semibold text-gray-900 mb-3">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {otherLocations.map((locSlug) => {
          const location = LOCATIONS[locSlug]
          return (
            <Link
              key={String(locSlug)}
              href={buildUrl(locSlug)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full border border-gray-200 bg-white text-gray-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all"
            >
              <MapPin className="h-3.5 w-3.5" />
              {location.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
