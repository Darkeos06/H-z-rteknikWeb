'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IconQuoteFilled } from '@tabler/icons-react'
import { Testimonial, Media } from '@/payload-types'

interface TestimonialBlockProps {
  title?: string
  description?: string
  testimonials: Testimonial[]
}

// Helper function to get image details
const getImageDetails = (image: number | Media | null | undefined) => {
  if (typeof image === 'object' && image) {
    return {
      url: image.url || '',
      alt: image.alt,
    }
  }
  return null
}

export function TestimonialBlock({
  title = 'Müşterilerimiz Ne Diyor?',
  description = 'Memnun müşterilerimizin yorumları bizim için en büyük motivasyon.',
  testimonials,
}: TestimonialBlockProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24">
      {/* Decorative Quote Mark */}
      <div
        className="absolute right-0 -top-[15%] pointer-events-none font-serif text-brand-700/5"
        aria-hidden="true"
      >
        <IconQuoteFilled className="h-72 w-72" />
      </div>

      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
          <p className="text-lg text-stone-600">{description}</p>
        </div>

        <div className="mt-12 md:mt-16">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 p-4 pb-8">
              {testimonials.map((testimonial) => {
                const photo = getImageDetails(testimonial.photo)

                return (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2">
                    <Card className="h-full shadow-brand-500/10">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <p className="mb-6 text-stone-600">{testimonial.content}</p>
                        <div className="flex items-center gap-4">
                          {photo?.url ? (
                            <Image
                              src={photo.url}
                              alt={photo.alt}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                              <span className="text-brand-700 font-semibold">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <div className="font-semibold text-stone-900">{testimonial.name}</div>
                            {testimonial.profession && (
                              <div className="text-sm text-stone-600">{testimonial.profession}</div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPagination />
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
