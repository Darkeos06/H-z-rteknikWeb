import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Location } from '@/lib/locations'

interface CategoriesListingProps {
  location: Location
  locationSlug: string
  categories: any[]
}

export function CategoriesListing({ location, locationSlug, categories }: CategoriesListingProps) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              {location.name} Hizmet Kategorileri
            </h1>
            <p className="mb-8 text-xl text-stone-600">
              {location.name} bölgesinde sunduğumuz teknik servis kategorileri
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={`/${locationSlug}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-lg font-medium text-stone-900 transition-colors hover:bg-stone-50"
              >
                {location.name} Ana Sayfa
              </Link>
              <Link
                href={`/${locationSlug}/teknik-servis`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-lg font-medium text-stone-900 transition-colors hover:bg-stone-50"
              >
                Tüm Hizmetler
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${locationSlug}/${category.slug}`}
                className="group flex flex-col rounded-lg border p-6 transition-all hover:border-brand-500 hover:shadow-md"
              >
                <div className="aspect-video relative mb-4 overflow-hidden rounded-md bg-stone-100">
                  {category.featured_image &&
                  typeof category.featured_image === 'object' &&
                  category.featured_image.url ? (
                    <img
                      src={category.featured_image.url}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-stone-200">
                      <span className="text-stone-400">Görsel Yok</span>
                    </div>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-stone-900 group-hover:text-brand-600">
                  {category.title}
                </h3>
                <p className="mb-4 text-stone-600">{category.description}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-brand-600 transition-colors group-hover:text-brand-700">
                  Kategoriyi Görüntüle
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stone-50">
        <div className="container">
          <div className="rounded-lg bg-brand-50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                {location.name} Bölgesi Teknik Servis İletişim
              </h2>
              <p className="mb-8 text-lg text-stone-600">
                {location.name} bölgesinde aynı gün servis için hemen arayın veya online randevu
                alın.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:+905555555555"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-brand-700"
                >
                  Hemen Ara
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-lg font-medium text-stone-900 transition-colors hover:bg-stone-50"
                >
                  Online Randevu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
