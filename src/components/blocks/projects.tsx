'use client'

import { ProjectCard } from '@/components/base/project-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export interface Project {
  title: string
  beforeImage: string
  afterImage: string
}

export interface ProjectsProps {
  /** Title for the section */
  title?: string
  /** Description text below the title */
  description?: string
  /** Array of case studies to display */
  items: Project[]
}

export function Projects({
  title = 'Örnek Projelerimiz',
  description = 'Başarıyla tamamladığımız projelerden örnekler.',
  items,
}: ProjectsProps) {
  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container px-4 md:px-0">
        {(title || description) && (
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="text-lg text-stone-600">{description}</p>}
          </div>
        )}

        <div className="mt-12 md:mt-16">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  {/* @ts-expect-error Server Component */}
                  <ProjectCard project={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
