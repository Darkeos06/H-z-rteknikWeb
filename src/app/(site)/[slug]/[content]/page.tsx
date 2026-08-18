import { ServiceHero } from '@/components/service-detail/hero'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Blocks } from '@/components/render-blocks'
import { PageHero } from '@/components/blocks/hero'
import Link from 'next/link'
import { icons } from '@/components/base/icons'
import { ArrowRight } from 'lucide-react'
import { LOCATIONS, isValidLocation } from '@/lib/locations'
import {
  buildProgrammaticPageData,
  getServices,
  getServiceCategories,
  getServicesByCategory,
} from '@/lib/seo/data-fetching'
import {
  generateLocationServiceMetadata,
  generateMetadata as generateSEOMetadata,
} from '@/lib/seo/metadata'
import { generateSchemasForPage, generateFAQSchema } from '@/lib/seo/schema'
import { generateUniqueContent } from '@/lib/seo/content-templates'
import { generateRelatedLinks, generateCrossLocationLinks } from '@/lib/seo/internal-linking'
import {
  SchemaScripts,
  Breadcrumbs,
  RelatedLinks,
  FAQSection,
  LocationLinks,
} from '@/components/seo'

// Generate static params for all location, service, and category combinations
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  // Get all services
  const servicesResult = await payload.find({
    collection: 'services',
    limit: 1000,
    select: {
      slug: true,
      _status: true,
    },
    depth: 1,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  // Get all categories
  const categoriesResult = await payload.find({
    collection: 'service-categories',
    limit: 1000,
    select: {
      slug: true,
      _status: true,
    },
    depth: 1,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const params = []

  // Generate all combinations of locations and services
  for (const location of Object.keys(LOCATIONS)) {
    // Add services
    for (const service of servicesResult.docs) {
      params.push({
        slug: location,
        content: service.slug,
      })
    }

    // Add categories
    for (const category of categoriesResult.docs) {
      params.push({
        slug: location,
        content: category.slug,
      })
    }
  }

  return params
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string; content: string }>
}): Promise<Metadata> {
  const { slug, content } = await paramsPromise

  if (!isValidLocation(slug)) {
    return {
      title: 'Sayfa Bulunamadı | Hızır Teknik',
      description: 'Aradığınız sayfa bulunamadı.',
    }
  }

  const locationInfo = LOCATIONS[slug]
  const payload = await getPayload({ config: configPromise })

  const serviceResult = await payload.find({
    collection: 'services',
    limit: 1,
    where: { slug: { equals: content }, _status: { equals: 'published' } },
  })

  if (serviceResult.docs.length > 0) {
    const serviceData = serviceResult.docs[0]
    const relatedCategory =
      typeof serviceData.related_category === 'object' ? serviceData.related_category : null

    const pageData = await buildProgrammaticPageData('location-service', {
      locationSlug: slug,
      serviceSlug: content,
    })

    if (pageData) {
      return generateLocationServiceMetadata(pageData)
    }
  }

  const categoryResult = await payload.find({
    collection: 'service-categories',
    limit: 1,
    where: { slug: { equals: content }, _status: { equals: 'published' } },
  })

  if (categoryResult.docs.length > 0) {
    const pageData = await buildProgrammaticPageData('location-category', {
      locationSlug: slug,
      categorySlug: content,
    })

    if (pageData) {
      return generateLocationServiceMetadata(pageData)
    }
  }

  return {
    title: `${locationInfo.name} | Hızır Teknik`,
    description: `${locationInfo.name} bölgesinde teknik servis hizmetleri. Hızır Teknik kalitesiyle hızlı ve güvenilir çözümler.`,
  }
}

export default async function LocationContentPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string; content: string }>
}) {
  const { slug, content } = await paramsPromise

  if (!isValidLocation(slug)) {
    notFound()
  }

  const locationInfo = LOCATIONS[slug]
  const payload = await getPayload({ config: configPromise })

  // Try to find as service first
  const serviceResult = await payload.find({
    collection: 'services',
    limit: 1,
    depth: 2,
    where: {
      slug: {
        equals: content,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  // If found as service, render service page
  if (serviceResult.docs.length > 0) {
    const serviceData = serviceResult.docs[0]
    const relatedCategory =
      typeof serviceData.related_category === 'object' ? serviceData.related_category : null

    const pageData = await buildProgrammaticPageData('location-service', {
      locationSlug: slug,
      serviceSlug: content,
    })

    const contentTemplate = pageData
      ? generateUniqueContent(pageData)
      : { introTemplate: '', faqTemplates: [] }

    const schemas = pageData ? generateSchemasForPage(pageData) : []

    const [allServices, allCategories] = await Promise.all([getServices(), getServiceCategories()])

    const relatedLinks = pageData
      ? generateRelatedLinks(
          pageData,
          allServices.map((s) => ({
            slug: s.slug || '',
            title: s.title || '',
            categorySlug:
              typeof s.related_category === 'object' ? s.related_category?.slug : undefined,
          })),
          allCategories.map((c) => ({ slug: c.slug || '', title: c.title || '' })),
          6,
        )
      : []

    const crossLocationLinks = generateCrossLocationLinks(slug, content, 'service', 5)

    return (
      <main className="flex min-h-screen flex-col">
        <SchemaScripts schemas={schemas} />
        <ServiceHero
          title={`${serviceData.title} - ${locationInfo.name}`}
          tagline={`${
            locationInfo.name
          } bölgesinde profesyonel ${serviceData.title.toLowerCase()} hizmeti`}
          image={
            (typeof serviceData.featured_image === 'object' && serviceData.featured_image?.url) ||
            '/hizir-teknik-tamirat-1.jpg'
          }
        />
        <div className="container mx-auto py-8 px-4">
          {pageData && <Breadcrumbs items={pageData.breadcrumbs} className="mb-6" />}
          <div className="bg-brand-50 p-4 rounded-lg mb-8 text-brand-800">
            <h2 className="text-xl font-bold mb-2">{locationInfo.name} Bölgesi Hizmet Bilgisi</h2>
            <p>{contentTemplate.introTemplate}</p>
          </div>
        </div>
        {/* Work Description (Z-Pattern) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 space-y-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block bg-brand-50 text-brand-700 px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase">
                  MÜHENDİSLİK ÇÖZÜMLERİ
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                  {serviceData.title} Detaylı İş Tanımı ve Standartları
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {serviceData.description || `${serviceData.title} hizmetimiz, Ankara genelinde TSE ve ISO sertifikalı birinci sınıf malzemelerle, uzman mühendislerimizin denetiminde gerçekleştirilir. Arıza tespitinde akustik dinleme ve termal kameralar kullanılarak gereksiz kırma ve dökme işlemlerinin önüne geçilir.`}
                </p>
                <div className="pt-2">
                  <a href="#teklif" className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md">
                    Hemen Teklif Al
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-stone-50 border border-stone-200 rounded-xl p-8 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-stone-900 border-b pb-4">Hizmet Kalite Standartlarımız</h3>
                <ul className="space-y-4">
                  {[
                    { title: "TSE Onaylı Malzemeler", desc: "Tüm tamir ve değişim işlerinde onaylı yedek parçalar kullanılır." },
                    { title: "1 Yıl İşçilik Garantisi", desc: "Gerçekleştirdiğimiz tüm işlemler firmamız garantisi altındadır." },
                    { title: "24/7 Acil Mobil Servis", desc: "Ankara'nın her bölgesine hızlı ulaşım sağlayan mobil ekipler." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">✓</span>
                      <div>
                        <h4 className="font-semibold text-stone-800">{item.title}</h4>
                        <p className="text-sm text-stone-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Completed Projects Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-brand-700 font-semibold tracking-wider uppercase text-sm">PROJELERİMİZ</span>
              <h2 className="text-3xl font-bold text-stone-900">Tamamlanan {serviceData.title} Projeleri</h2>
              <p className="text-stone-500">Ankara genelinde gerçekleştirdiğimiz örnek işçilik ve montaj uygulamalarımız.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Yoğuşmalı Kombi Montajı", loc: "Çankaya, Ankara", desc: "TSE standartlarında gaz bağlantısı ve kalorifer tesisatı entegrasyonu.", img: "/hizir-teknik-tamirat-1.jpg" },
                { title: "Merkezi Isıtma & Kaskad Revizyonu", loc: "Eryaman, Ankara", desc: "Yüksek verimli yoğuşmalı kazan dairesi otomasyon panel montajı.", img: "/hizir-teknik-tamirat-1.jpg" },
                { title: "Sessiz Hidrofor Pompa Değişimi", loc: "Batıkent, Ankara", desc: "Korozyona dayanıklı paslanmaz çelik hidrofor montajı ve devreye alma.", img: "/hizir-teknik-tamirat-1.jpg" }
              ].map((proj, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                    <img src={proj.img} alt={proj.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-3 left-3 bg-brand-700 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">{proj.loc}</span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-bold text-lg text-stone-950">{proj.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {serviceData.blocks && <Blocks blocks={serviceData.blocks} />}

        {contentTemplate.faqTemplates && contentTemplate.faqTemplates.length > 0 && (
          <FAQSection faqs={contentTemplate.faqTemplates} />
        )}

        {relatedLinks.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container px-4">
              <RelatedLinks links={relatedLinks} title="İlgili Hizmetler" variant="grid" />
            </div>
          </section>
        )}

        <section className="py-8 border-t border-gray-100">
          <div className="container px-4">
            <LocationLinks
              currentLocation={slug}
              serviceSlug={content}
              title="Bu Hizmeti Diğer Bölgelerde İnceleyin"
            />
          </div>
        </section>
      </main>
    )
  }

  // Try to find as category
  const categoryResult = await payload.find({
    collection: 'service-categories',
    limit: 1,
    depth: 2,
    where: {
      slug: {
        equals: content,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  // If found as category, render category page
  if (categoryResult.docs.length > 0) {
    const categoryData = categoryResult.docs[0]

    const pageData = await buildProgrammaticPageData('location-category', {
      locationSlug: slug,
      categorySlug: content,
    })

    const contentTemplate = pageData
      ? generateUniqueContent(pageData)
      : { introTemplate: '', faqTemplates: [] }

    const schemas = pageData ? generateSchemasForPage(pageData) : []

    // Get services in this category
    const servicesResult = await payload.find({
      collection: 'services',
      limit: 100,
      where: {
        related_category: {
          equals: categoryData.id,
        },
        _status: {
          equals: 'published',
        },
      },
    })

    const services = servicesResult.docs

    // Get other categories
    const categoriesResult = await payload.find({
      collection: 'service-categories',
      limit: 3,
      where: {
        id: {
          not_equals: categoryData.id,
        },
        _status: {
          equals: 'published',
        },
      },
    })

    const otherCategories = categoriesResult.docs

    return (
      <main className="flex min-h-screen flex-col">
        <SchemaScripts schemas={schemas} />
        <PageHero
          title={`${locationInfo.name} ${categoryData.title}`}
          description={contentTemplate.introTemplate || categoryData.description}
          image={
            (typeof categoryData.featured_image === 'object' && categoryData.featured_image) || {
              id: 0,
              url: '/hizir-teknik-tamirat-1.jpg',
              alt: categoryData.title,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          }
          breadcrumbs={[
            { title: 'Ana Sayfa', href: '/' },
            { title: locationInfo.name, href: `/${slug}/teknik-servis` },
            { title: categoryData.title, href: `/${slug}/${content}` },
          ]}
        />

        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-20"></div>
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-50 opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-50 opacity-30 blur-3xl"></div>

          <div className="container px-4 relative z-10">
            <div className="mb-10">
              <div className="relative">
                <div className="absolute -left-3 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-brand-600"></div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {locationInfo.name} {categoryData.title} Hizmetlerimiz
                  <span className="relative ml-2 inline-flex h-2 w-2 rounded-full bg-brand-600">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600 opacity-75"></span>
                  </span>
                </h2>
                <div className="mt-2 h-px w-24 bg-gradient-to-r from-brand-600 to-transparent"></div>
              </div>
              <p className="mt-4 max-w-3xl text-gray-600">
                {categoryData.description ||
                  `${
                    locationInfo.name
                  } bölgesinde profesyonel ${categoryData.title.toLowerCase()} hizmetlerimiz ile yanınızdayız.`}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:[&>*]:w-[calc(100%/3-32px)]">
              {services.map((service, index) => {
                const Icon = service.icon
                  ? icons[service.icon as keyof typeof icons] || icons.ayarlar
                  : icons.ayarlar
                return (
                  <Link
                    key={service.id}
                    href={`/${slug}/${service.slug}`}
                    className="group relative block overflow-hidden rounded-lg bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-md hover:shadow-brand-100/20 animate-fade-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                      <div className="absolute right-0 top-0 h-8 w-8 origin-bottom-left rotate-45 transform bg-brand-600"></div>
                    </div>

                    <div className="p-6 flex flex-col h-full min-h-[280px]">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-100 group-hover:shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-brand-600">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                        {service.description || 'Detaylı bilgi için tıklayın'}
                      </p>

                      <div className="mt-auto">
                        <div className="mb-3 h-px w-12 bg-brand-100"></div>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-all group-hover:gap-3">
                          Daha Fazla Bilgi
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Only show other categories section if there are categories to display */}
        {otherCategories.length > 0 && (
          <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-20"></div>
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-50 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-50 opacity-30 blur-3xl"></div>

            <div className="container px-4 relative z-10">
              <div className="mb-10 flex items-center justify-between">
                <div className="relative">
                  <div className="absolute -left-3 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-brand-600"></div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Diğer Hizmet Kategorilerimiz
                    <span className="relative ml-2 inline-flex h-2 w-2 rounded-full bg-brand-600">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600 opacity-75"></span>
                    </span>
                  </h2>
                  <div className="mt-2 h-px w-24 bg-gradient-to-r from-brand-600 to-transparent"></div>
                </div>
                <Link
                  href={`/${slug}`}
                  className="flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
                >
                  Tüm Kategoriler
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 lg:[&>*]:w-[calc(100%/3-32px)]">
                {otherCategories.map((category, index) => {
                  const Icon = category.icon
                    ? icons[category.icon as keyof typeof icons] || icons.ayarlar
                    : icons.ayarlar
                  return (
                    <Link
                      key={category.id}
                      href={`/${slug}/${category.slug}`}
                      className="group relative block overflow-hidden rounded-lg bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-md hover:shadow-brand-100/20 animate-fade-in"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                        <div className="absolute right-0 top-0 h-8 w-8 origin-bottom-left rotate-45 transform bg-brand-600"></div>
                      </div>

                      <div className="p-6 flex flex-col h-full min-h-[280px]">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-100 group-hover:shadow-sm">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-brand-600">
                          {category.title}
                        </h3>

                        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                          {category.description ||
                            `${
                              locationInfo.name
                            } bölgesinde profesyonel ${category.title.toLowerCase()} hizmetlerimiz.`}
                        </p>

                        <div className="mt-auto">
                          <div className="mb-3 h-px w-12 bg-brand-100"></div>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-all group-hover:gap-3">
                            Hizmetleri Görüntüle
                            <ArrowRight
                              size={16}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {contentTemplate.faqTemplates && contentTemplate.faqTemplates.length > 0 && (
          <FAQSection faqs={contentTemplate.faqTemplates} />
        )}

        <section className="py-8 border-t border-gray-100">
          <div className="container px-4">
            <LocationLinks
              currentLocation={slug}
              categorySlug={content}
              title="Bu Kategoriyi Diğer Bölgelerde İnceleyin"
            />
          </div>
        </section>
      </main>
    )
  }

  // If not found as either, return 404
  notFound()
}
