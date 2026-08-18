'use client'

import Link from 'next/link'
import { Service } from '@/payload-types'
import { usePathname } from 'next/navigation'
import { icons } from '../base/icons'
import { ArrowRight } from 'lucide-react'

interface RelatedServicesClientProps {
  services: Service[]
  title: string
}

export function RelatedServicesClient({ services, title }: RelatedServicesClientProps) {
  // Extract location slug from the pathname
  const pathname = usePathname()
  const pathParts = pathname.split('/')
  const locationSlug = pathParts.length > 1 ? pathParts[1] : 'ankara' // Default to ankara

  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="bg-white bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-fixed opacity-20"></div>
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-50 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-50 opacity-30 blur-3xl"></div>
      <div className="container px-4 relative z-10">
        <div className="mb-10 flex items-center justify-between">
          <div className="relative">
            <div className="absolute -left-3 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-brand-600"></div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
              <span className="relative ml-2 inline-flex h-2 w-2 rounded-full bg-brand-600">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600 opacity-75"></span>
              </span>
            </h2>
            <div className="mt-2 h-px w-24 bg-gradient-to-r from-brand-600 to-transparent"></div>
          </div>
          <Link
            href={`/${locationSlug}/hizmetlerimiz`}
            className="flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            Tüm Hizmetler
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon =
              service.icon && icons[service.icon as keyof typeof icons]
                ? icons[service.icon as keyof typeof icons]
                : icons.ayarlar // Using 'ayarlar' (settings) as fallback icon
            return (
              <Link
                href={`/${locationSlug}/${service.slug}`}
                key={service.id}
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
                    {service?.description ?? 'Detaylı bilgi için tıklayın'}
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
  )
}
