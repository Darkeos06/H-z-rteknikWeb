'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import type { BreadcrumbItem } from '@/lib/seo/types'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isFirst = index === 0

          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />}
              {isLast ? (
                <span
                  className="text-gray-600 font-medium truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-gray-500 hover:text-brand-600 transition-colors flex items-center gap-1"
                >
                  {isFirst && <Home className="h-3.5 w-3.5" />}
                  <span className="truncate max-w-[150px]">{isFirst ? '' : item.name}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
