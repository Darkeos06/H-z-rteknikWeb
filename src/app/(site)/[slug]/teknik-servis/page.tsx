import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { isValidLocation, LOCATIONS } from '@/lib/locations'
import { PageHero } from '@/components/blocks/hero'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'
import { ServicesFilter } from '@/components/service/services-filter'
import { ServicesSearch } from '@/components/service/services-search'
import { Metadata } from 'next'
import { buildProgrammaticPageData } from '@/lib/seo/data-fetching'
import { generateLocationServiceMetadata } from '@/lib/seo/metadata'
import { generateSchemasForPage } from '@/lib/seo/schema'
import { generateLocationHubContent } from '@/lib/seo/content-templates'
import { SchemaScripts, Breadcrumbs, FAQSection, LocationLinks } from '@/components/seo'

export async function generateMetadata({
  params: paramsPromise,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ kategori?: string; goster?: string; arama?: string }>
}): Promise<Metadata> {
  const { slug } = await paramsPromise
  const { kategori: category, arama: searchQuery } = await searchParams

  if (!isValidLocation(slug)) {
    return {
      title: 'Sayfa Bulunamadı | Hızır Teknik',
      description: 'Aradığınız sayfa bulunamadı.',
    }
  }

  const location = LOCATIONS[slug]

  let categoryName = ''
  if (category) {
    const payload = await getPayload({ config: configPromise })
    const categoryResult = await payload.find({
      collection: 'service-categories',
      where: { slug: { equals: category } },
    })

    if (categoryResult.docs.length > 0) {
      categoryName = categoryResult.docs[0].title
    }
  }

  let title = `${location.name} Teknik Servis Hizmetleri | Hızır Teknik`
  let description = `${location.name} bölgesinde kombi, klima, tesisat, elektrik ve tadilat hizmetleri. Hızır Teknik ile aynı gün servis ve uygun fiyat garantisi. ✓ 7/24 Acil Servis`

  if (categoryName) {
    title = `${location.name} ${categoryName} Hizmetleri | Hızır Teknik`
    description = `${
      location.name
    } bölgesinde profesyonel ${categoryName.toLowerCase()} hizmetlerimiz. Kaliteli ve uygun fiyatlı çözümler için Hızır Teknik.`
  }

  if (searchQuery) {
    title = `"${searchQuery}" Arama Sonuçları - ${location.name} | Hızır Teknik`
    description = `${location.name} bölgesinde "${searchQuery}" aramanız için sonuçlar. Hızır Teknik ile aradığınız teknik servis hizmetini bulun.`
  }

  return {
    title,
    description,
    alternates: {
      canonical: `/${slug}/teknik-servis`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'tr_TR',
    },
  }
}

export async function generateStaticParams() {
  // Return all valid location slugs
  return Object.keys(LOCATIONS).map((slug) => ({ slug }))
}

export default async function LocationServicesPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ kategori?: string; goster?: string; arama?: string }>
}) {
  const { slug } = await paramsPromise
  const { kategori: category, goster: showAll, arama: searchQuery } = await searchParamsPromise

  // If it's not a valid location, return 404
  if (!isValidLocation(slug)) {
    notFound()
  }

  const location = LOCATIONS[slug]

  // Fetch all services
  const payload = await getPayload({ config: configPromise })

  // Build the query based on whether a category filter is applied
  const whereQuery: any = {
    _status: {
      equals: 'published',
    },
  }

  // If category filter is applied, add it to the query
  if (category) {
    const categoryResult = await payload.find({
      collection: 'service-categories',
      where: {
        slug: {
          equals: category,
        },
      },
    })

    if (categoryResult.docs.length > 0) {
      whereQuery.related_category = {
        equals: categoryResult.docs[0].id,
      }
    }
  }

  // If search query is provided, add it to the query
  if (searchQuery) {
    whereQuery.title = {
      like: searchQuery,
    }
  }

  const servicesResult = await payload.find({
    collection: 'services',
    limit: 100,
    where: whereQuery,
    depth: 1, // Include related category data
  })

  // Fetch all categories
  const categoriesResult = await payload.find({
    collection: 'service-categories',
    limit: 100,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const services = servicesResult.docs
  // Limit services to 9 on initial load when no category is selected and no search is performed
  const limitedServices = category || showAll || searchQuery ? services : services.slice(0, 9)
  const categories = categoriesResult.docs

  // Find the current category object if category filter is applied
  const currentCategory = category ? categories.find((cat) => cat.slug === category) : null

  return (
    <main className="flex min-h-screen flex-col">
      {/* <PageHero
        impact="HIGH"
        title={`${location.name} Teknik Servis Hizmetleri`}
        description={`${location.name} bölgesinde sunduğumuz tüm teknik servis hizmetleri. Hızır Teknik olarak ${location.name} bölgesinde kaliteli ve güvenilir teknik servis hizmetleri sunuyoruz.`}
        image={{
          id: 0,
          url: '/hizir-teknik-tamirat-1.jpg',
          alt: `${location.name} Teknik Servis Hizmetleri`,
          createdAt: '',
          updatedAt: '',
        }}
      /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-600 to-brand-700 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-10"></div>
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-500 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-800 opacity-30 blur-3xl"></div>

        <div className="container px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white/90 font-medium">Profesyonel Teknik Servis</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {location.name} Teknik Servis Hizmetleri
            </h1>
            <p className="mb-8 text-xl text-white/80">
              {`${location.name} bölgesinde sunduğumuz tüm teknik servis hizmetleri. Hızır Teknik olarak ${location.name} bölgesinde kaliteli ve güvenilir teknik servis hizmetleri sunuyoruz.`}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-20"></div>
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-50 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-50 opacity-30 blur-3xl"></div>

        <div className="container px-4 relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-50 text-brand-600 font-medium text-sm">
              Teknik Servis
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {searchQuery
                ? `"${searchQuery}" Arama Sonuçları`
                : currentCategory
                ? `${location.name} ${currentCategory.title} Hizmetleri`
                : `${location.name} Bölgesi Hizmetlerimiz`}
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-brand-600 to-transparent"
            ></div>
            <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
              {searchQuery
                ? `${location.name} bölgesinde "${searchQuery}" aramanız için ${services.length} sonuç bulundu.`
                : currentCategory
                ? `${
                    location.name
                  } bölgesinde sunduğumuz profesyonel ${currentCategory.title.toLowerCase()} hizmetlerimiz.`
                : `${location.name} bölgesinde sunduğumuz profesyonel tamirat ve tadilat hizmetleri. Aşağıdaki kategorilerden filtreleyebilir veya tüm hizmetlerimizi görüntüleyebilirsiniz.`}
            </p>
          </div>

          {/* Category Filter Section */}
          <ServicesFilter
            location={location}
            slug={slug}
            categories={categories.map((cat) => ({
              id: cat.id,
              title: cat.title,
              slug: cat.slug,
              icon: cat.icon,
            }))}
          />

          {/* Search Bar */}
          <ServicesSearch location={location} slug={slug} initialQuery={searchQuery || ''} />

          {/* Services Grid */}
          <div className="flex flex-wrap justify-center gap-8 lg:[&>*]:w-[calc(100%/3-32px)] mt-12">
            {limitedServices.length > 0 ? (
              limitedServices.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/${slug}/${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-brand-200 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                    <div className="absolute right-0 top-0 h-8 w-8 origin-bottom-left rotate-45 transform bg-brand-600"></div>
                  </div>

                  <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gray-100">
                    {service.featured_image &&
                    typeof service.featured_image === 'object' &&
                    service.featured_image.url ? (
                      <img
                        src={service.featured_image.url}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-brand-50">
                        <span className="text-brand-600">Hızır Teknik</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-brand-600">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">
                      {service.description ? service.description : 'Detaylı bilgi için tıklayın'}
                    </p>

                    {service.related_category && typeof service.related_category === 'object' && (
                      <div className="mb-4 mt-auto">
                        <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                          {service.related_category.title}
                        </span>
                      </div>
                    )}

                    <div className="mt-auto">
                      <div className="mb-3 h-px w-12 bg-brand-100"></div>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-all group-hover:gap-3">
                        Detaylı Bilgi
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="w-full py-12 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-brand-50 text-brand-600 mb-6">
                  <Filter size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {searchQuery ? 'Arama sonucu bulunamadı' : 'Bu kategoride hizmet bulunamadı'}
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {searchQuery
                    ? `"${searchQuery}" aramanız için sonuç bulunamadı. Lütfen farklı anahtar kelimeler ile tekrar deneyin veya tüm hizmetleri görüntüleyin.`
                    : 'Seçtiğiniz kategoride hizmet bulunmamaktadır. Lütfen başka bir kategori seçin veya tüm hizmetleri görüntüleyin.'}
                </p>
                <Link
                  href={`/${slug}/teknik-servis?goster=hepsi`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-brand-700"
                >
                  Hepsini Göster
                  <ArrowRight size={20} />
                </Link>
              </div>
            )}
          </div>

          {/* Show More button - only visible when no category is selected and no search is performed and there are more services to show */}
          {!category && !searchQuery && !showAll && services.length > 9 && (
            <div className="mt-12 text-center">
              <Link
                href={`/${slug}/teknik-servis?goster=hepsi`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-600 bg-white px-6 py-3 text-lg font-medium text-brand-600 transition-all hover:bg-brand-50"
              >
                Tüm Hizmetleri Göster
                <ArrowRight size={20} />
              </Link>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-10"></div>

        <div className="container px-4 relative z-10">
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-10"></div>
            <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-500 opacity-20 blur-3xl"></div>
            <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-800 opacity-20 blur-3xl"></div>

            <div className="mx-auto max-w-3xl text-center relative z-10">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90 font-medium">7/24 Teknik Destek</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {location.name} Bölgesi Teknik Servis İletişim
              </h2>
              <p className="mb-8 text-lg text-white/80">
                {location.name} bölgesinde aynı gün servis için hemen arayın veya online randevu
                alın.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:05327751250"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-lg font-medium text-brand-600 transition-all hover:bg-brand-50 hover:shadow-lg hover:shadow-brand-900/20"
                >
                  Hemen Ara
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-lg font-medium text-white transition-all hover:bg-white/20"
                >
                  Online Randevu
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-gray-100">
        <div className="container px-4">
          <LocationLinks currentLocation={slug} title="Diğer Bölgelerdeki Hizmetlerimiz" />
        </div>
      </section>
    </main>
  )
}
