import Link from 'next/link'
import { ArrowRight, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react'

import { Service } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ServiceCard } from '../base/services-card'

interface ServicesSectionProps {
  heading: {
    subtitle?: string | null
    title: string
  }
  viewAllLink?: {
    text?: string | null
    url?: string | null
  }
  services: Service[]
}

async function ServicesSection({
  heading,
  viewAllLink,
  services: serviceCategories,
}: ServicesSectionProps) {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'services',
    limit: 100,
    select: {
      title: true,
      featured_image: true,
      related_category: true,
      slug: true,
    },
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const servicesData = data.docs

  const formattedServices = serviceCategories.map((category) => {
    const servicesInCategory = servicesData.filter(
      // @ts-expect-error @ts-ignore
      (service) => service.related_category?.id === category.id,
    )
    return {
      title: category.title,
      icon: category.icon,
      url: '/ankara/' + category.slug,
      image: category.featured_image,
      services: servicesInCategory.map((service) => ({
        title: service.title,
        slug: service.slug || '',
      })).slice(0, 10),
    }
  })

  return (
    <section className="w-full relative bg-slate-50/80 py-16 md:py-24 border-b border-stone-200/80 overflow-hidden">
      {/* Background Soft Glow Circles */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        {/* Serene & Trustworthy Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold w-fit">
              <HeartHandshake className="h-4 w-4 text-brand-600" />
              <span>Garantili, Huzur Veren ve Güvenilir Mühendislik Hizmetleri</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              {heading.title || 'Mühendislik & Teknik Servis Çözümlerimiz'}
            </h2>

            <p className="text-sm md:text-base text-stone-600 font-medium leading-relaxed">
              25 yıllık tecrübemizle konutlar, siteler ve işletmeler için iklimlendirme, tesisat, havuz ve arıtma sistemlerinde kesintisiz konfor sunuyoruz.
            </p>
          </div>

          {viewAllLink?.url && (
            <Link
              href={viewAllLink.url}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-brand-700 text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md transition-all duration-300 w-fit shrink-0"
            >
              <span>{viewAllLink.text || 'Tüm Hizmetlerimizi İnceleyin'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formattedServices.map((serviceCategory, index) => (
            <ServiceCard
              key={index}
              title={serviceCategory.title}
              // @ts-expect-error @ts-ignore
              icon={serviceCategory.icon}
              image={serviceCategory.image}
              services={serviceCategory.services}
              url={serviceCategory.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
