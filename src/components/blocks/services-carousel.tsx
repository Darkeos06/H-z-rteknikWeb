'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselPagination,
} from '../ui/carousel'
import { ServiceCard } from '../base/services-card'
import { Media } from '@/payload-types'
import { icons } from '../base/icons'

const ServicesCarousel: React.FC<{
  servicesData: {
    title: string
    icon: typeof icons
    image: Media
    services: string[]
    url: string
  }[]
}> = ({ servicesData }) => {
  return (
    <Carousel autoplay={true} className="w-full items-stretch">
      <CarouselContent className="-ml-2 md:-ml-4">
        {servicesData.map((serviceCategory, index) => (
          <CarouselItem
            key={serviceCategory.title}
            className="min-h-max pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <ServiceCard
              key={index}
              title={serviceCategory.title}
              // @ts-expect-error @ts-ignore
              icon={serviceCategory.icon}
              image={serviceCategory.image}
              services={serviceCategory.services}
              url={serviceCategory.url}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
      <CarouselPagination className="mt-2 md:mt-8" />
    </Carousel>
  )
}

export default ServicesCarousel
