'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '../base/project-card'
import { Project } from '@/payload-types'

interface PortfolioSectionProps {
  header: {
    subtitle?: string | null
    title: string
  }
  description: string
  featuredProjects: Project[]
}

export default function PortfolioSection({
  header,
  description,
  featuredProjects,
}: PortfolioSectionProps) {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? featuredProjects : featuredProjects.slice(0, 2)

  return (
    <section className="w-full bg-white bg-gradient-to-t from-white to-brand-700/5 py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="max-w-3xl space-y-4">
          {header.subtitle && (
            <span className="text-sm font-medium text-brand-600">{header.subtitle}</span>
          )}
          <h2 className="text-3xl mb-8 tracking-tight text-stone-900 md:text-5xl">
            {header.title}
          </h2>
          <p className="md:text-lg text-stone-500">{description}</p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {featuredProjects.length > 2 && (
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-brand-700 hover:bg-brand-700"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
