'use client'

import { Button } from '@/components/ui/button'
import { TestimonialCard } from '../base/testimonial-card'
import { IconQuote } from '@tabler/icons-react'
import { Testimonial } from '@/payload-types'
import Link from 'next/link'

interface TestimonialsSectionProps {
  header: {
    subtitle?: string | null
    title: string
    description: string
  }
  viewAllButton?: {
    text?: string | null
    url?: string | null
  }
  featuredTestimonials: Testimonial[]
}

export default function TestimonialsSection({
  header,
  viewAllButton,
  featuredTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden bg-gradient-to-t from-brand-700/10 to-white py-12 md:py-24">
      {/* Decorative Quote Mark */}
      <div
        className="absolute right-0 -top-16 md:-top-24 -z-10 font-serif text-brand-50"
        aria-hidden="true"
      >
        <IconQuote className="h-48 w-48 md:h-96 md:w-96 fill-current" />
      </div>

      <div className="container max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row md:items-end py-8 justify-between">
          <div className="max-w-2xl">
            {header.subtitle && (
              <span className="text-sm block mb-4 font-medium text-brand-600">
                {header.subtitle}
              </span>
            )}
            <h2 className="text-3xl mb-8 md:mb-12 tracking-tight text-stone-900 md:text-5xl">
              {header.title}
            </h2>
            <p className="md:text-lg text-stone-500">{header.description}</p>
          </div>
          {viewAllButton?.url && (
            <Button
              className="bg-brand-700 mr-auto md:mr-0 mt-8 md:mt-0 hover:bg-brand-700"
              size="lg"
              asChild
            >
              <Link href={viewAllButton.url}>{viewAllButton.text || 'View All'}</Link>
            </Button>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-2">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
