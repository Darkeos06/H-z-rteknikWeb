'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { Location } from '@/lib/locations'

interface ServicesSearchProps {
  location: Location
  slug: string
  initialQuery?: string
}

export function ServicesSearch({ location, slug, initialQuery = '' }: ServicesSearchProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/${slug}/teknik-servis?arama=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push(`/${slug}/teknik-servis`)
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    router.push(`/${slug}/teknik-servis`)
  }

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`${location.name} bölgesinde hizmet ara...`}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pl-10 pr-10 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 z-10 right-14 flex items-center px-3 text-gray-500 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="absolute right-0 top-0 rounded-r-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 h-full flex items-center justify-center"
        >
          Ara
        </button>
      </form>
    </div>
  )
}
