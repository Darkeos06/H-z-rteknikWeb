'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'
import { Media, Project } from '@/payload-types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showAfter, setShowAfter] = useState(true)

  // Helper function to get image URL and alt text
  const getImageDetails = (image: number | Media | null | undefined) => {
    if (typeof image === 'object' && image) {
      return {
        url: image.url || '',
        alt: image.alt || '',
      }
    }
    return null
  }

  const beforeImage = getImageDetails(project.before_image)
  const afterImage = getImageDetails(project.after_image)

  // If neither image is available, don't render the card
  if (!beforeImage?.url && !afterImage?.url) {
    return null
  }

  // Use after image if available, otherwise use before image
  const currentImage = showAfter
    ? afterImage?.url || beforeImage?.url
    : beforeImage?.url || afterImage?.url

  const currentAlt = showAfter
    ? afterImage?.alt || project.title
    : beforeImage?.alt || project.title

  return (
    <Card className="rounded-none shadow-none border-none overflow-hidden">
      <div className="relative group aspect-square overflow-clip">
        {currentImage && (
          <Image
            src={currentImage}
            alt={`${currentAlt} ${showAfter ? 'after' : 'before'}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-125"
          />
        )}
        <div className="absolute group-hover:opacity-0 inset-0">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
            <Badge variant={'outline'} className="text-white py-1 text-sm bg-black/50">
              {project.title}
            </Badge>
            {project.description && <span className="sr-only">{project.description}</span>}
          </div>
        </div>
      </div>
      <CardContent className="p-4 mt-4">
        <div className="flex justify-center max-w-[240px] mx-auto gap-2">
          <Button
            variant={'outline'}
            size="sm"
            className={`shadow-none flex-1 focus:bg-brand-100 focus:text-brand-600 ${
              !showAfter
                ? 'border-brand-600 bg-brand-100 text-brand-600 font-bold'
                : 'opacity-50 border-none'
            }`}
            onClick={() => setShowAfter(false)}
            disabled={!beforeImage?.url}
          >
            Öncesi
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`shadow-none flex-1 focus:bg-brand-100 focus:text-brand-600 ${
              showAfter
                ? 'border-brand-600 bg-brand-100 text-brand-600 font-bold'
                : 'opacity-50 border-none'
            }`}
            onClick={() => setShowAfter(true)}
            disabled={!afterImage?.url}
          >
            Sonrası
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
