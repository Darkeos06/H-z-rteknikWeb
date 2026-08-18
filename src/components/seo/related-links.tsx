'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { InternalLink } from '@/lib/seo/types'

interface RelatedLinksProps {
  links: InternalLink[]
  title?: string
  className?: string
  variant?: 'grid' | 'list' | 'compact'
}

export function RelatedLinks({
  links,
  title = 'İlgili Hizmetler',
  className = '',
  variant = 'grid',
}: RelatedLinksProps) {
  if (!links || links.length === 0) return null

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        {title && <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>}
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="text-sm text-gray-600 hover:text-brand-600 transition-colors flex items-center gap-1"
              >
                <ArrowRight className="h-3 w-3" />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <div className={`${className}`}>
        {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="group flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all"
              >
                <ArrowRight className="h-5 w-5 text-brand-600 mt-0.5 transition-transform group-hover:translate-x-1" />
                <div>
                  <span className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                    {link.title}
                  </span>
                  {link.description && (
                    <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{link.description}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {title && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-transparent" />
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="group relative flex flex-col p-4 rounded-lg border border-gray-100 bg-white hover:border-brand-200 hover:shadow-md transition-all"
          >
            <span className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
              {link.title}
            </span>
            {link.description && (
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{link.description}</p>
            )}
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-brand-600">
              <span>Detaylı Bilgi</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
