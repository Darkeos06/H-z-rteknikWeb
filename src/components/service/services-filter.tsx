'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowRight, Filter, X } from 'lucide-react'
import { Location } from '@/lib/locations'

interface Category {
  id: number | string
  title: string
  slug: string
  icon?: string
}

interface ServicesFilterProps {
  location: Location
  slug: string
  categories: Category[]
}

export function ServicesFilter({ location, slug, categories }: ServicesFilterProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  const currentCategory = searchParams.get('kategori')
  const searchQuery = searchParams.get('arama')

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center">
          <button
            onClick={toggleFilter}
            className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-100"
          >
            <Filter size={16} />
            Filtrele
          </button>

          {currentCategory && (
            <div className="ml-4 flex items-center gap-2">
              <span className="text-sm text-gray-500">Aktif filtre:</span>
              <div className="inline-flex items-center rounded-full bg-brand-50 pl-3 pr-2 py-1 text-sm font-medium text-brand-700">
                {categories.find((c) => c.slug === currentCategory)?.title || currentCategory}
                <Link
                  href={
                    searchQuery
                      ? `/${slug}/teknik-servis?arama=${searchQuery}&goster=hepsi`
                      : `/${slug}/teknik-servis?goster=hepsi`
                  }
                  className="ml-1 rounded-full p-1 text-brand-700 hover:bg-brand-100 hover:text-brand-800"
                >
                  <X size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-8 animate-fade-in">
          <Link
            href={
              searchQuery
                ? `/${slug}/teknik-servis?arama=${searchQuery}&goster=hepsi`
                : `/${slug}/teknik-servis?goster=hepsi`
            }
            className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
              !currentCategory
                ? 'border-brand-600 bg-brand-50 text-brand-700 hover:bg-brand-100'
                : 'border-gray-200 bg-white text-gray-700 hover:border-brand-200 hover:bg-brand-50'
            }`}
          >
            Tümünü Göster
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={
                searchQuery
                  ? `/${slug}/teknik-servis?kategori=${category.slug}&arama=${searchQuery}&goster=hepsi`
                  : `/${slug}/teknik-servis?kategori=${category.slug}&goster=hepsi`
              }
              className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                currentCategory === category.slug
                  ? 'border-brand-600 bg-brand-50 text-brand-700 hover:bg-brand-100'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-brand-200 hover:bg-brand-50'
              }`}
            >
              {category.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
