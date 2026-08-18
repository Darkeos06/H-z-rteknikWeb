'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Media } from '@/payload-types'

interface PageHeroProps {
  impact?: 'HIGH' | 'MEDIUM' | 'LOW' | null
  title: string
  description: string
  image?: number | Media
  breadcrumbs?: Array<{ title: string; href: string }>
}

// Helper function to get image details
const getImageDetails = (image: number | Media) => {
  if (typeof image === 'object') {
    return {
      url: image.url || '/hizir-teknik-tamirat-1.jpg',
      alt: image.alt,
      width: image.width,
      height: image.height,
    }
  }
  return null
}

export function PageHero({
  impact = 'HIGH',
  title,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  const imageDetails = getImageDetails(image)

  if (impact === 'MEDIUM') {
    return (
      <section className="relative w-full bg-stone-900">
        <div className="container grid min-h-[500px] grid-cols-1 md:grid-cols-2">
          <div className="flex items-center px-4 py-12 md:px-6">
            <div className="text-white">
              {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="mb-4 flex items-center justify-center gap-2 text-sm text-white">
                  {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center">
                      {index > 0 && <span className="mx-2">/</span>}
                      <a href={crumb.href} className="hover:text-brand-600">
                        {crumb.title}
                      </a>
                    </div>
                  ))}
                </nav>
              )}
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-lg text-stone-200 md:text-xl">{description}</p>
            </div>
          </div>
          <div className="relative min-h-[400px] md:min-h-full">
            {imageDetails?.url && (
              <Image
                src={imageDetails.url}
                alt={imageDetails.alt}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className={cn(
        'relative w-full',
        impact === 'HIGH' && 'h-[60vh] min-h-[400px]',
        impact === 'LOW' && 'min-h-[200px] bg-stone-800 py-12',
      )}
    >
      {impact !== 'LOW' && imageDetails?.url && (
        <Image
          src={imageDetails.url}
          alt={imageDetails.alt}
          fill
          className={cn('object-cover', impact === 'HIGH' && 'brightness-50')}
          priority
        />
      )}
      <div
        className={cn(
          'absolute inset-0 flex items-center',
          impact === 'LOW' ? 'relative' : 'justify-center',
        )}
      >
        <div className={cn('container px-4 text-white md:px-6', impact !== 'LOW' && 'text-center')}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-4 flex items-center justify-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <a href={crumb.href} className="hover:text-brand-600">
                    {crumb.title}
                  </a>
                </div>
              ))}
            </nav>
          )}
          <h1
            className={cn(
              'mb-4 font-bold tracking-tight',
              impact === 'HIGH' && 'text-5xl md:text-6xl lg:text-7xl',
              impact === 'LOW' && 'text-3xl md:text-4xl lg:text-5xl',
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              'text-stone-200',
              impact === 'HIGH' && 'mx-auto max-w-3xl text-xl md:text-2xl',
              impact === 'LOW' && 'max-w-xl text-base md:text-lg',
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
