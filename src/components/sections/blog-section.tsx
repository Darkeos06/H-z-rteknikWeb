'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { BlogCard } from '../base/blog-card'
import { Post } from '@/payload-types'

interface BlogSectionProps {
  header: {
    subtitle?: string | null
    title: string
  }
  featuredPosts: Post[]
}

export default function BlogSection({ header, featuredPosts }: BlogSectionProps) {
  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          {header.subtitle && (
            <span className="text-sm font-medium text-brand-600">{header.subtitle}</span>
          )}
          <h2 className="text-3xl mb-8 tracking-tight text-stone-900 md:text-5xl">
            {header.title}
          </h2>
        </div>

        {featuredPosts.length > 0 && (
          <div className="mt-12 md:mt-16">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredPosts.map((post) => (
                  <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <BlogCard post={post} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
              <CarouselPagination className="mt-8" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}
