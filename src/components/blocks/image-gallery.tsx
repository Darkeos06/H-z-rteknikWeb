'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface GalleryImage {
  src: {
    url: string
    alt: string
  }
  category: {
    title: string
  }
  title: string
  description?: string
}

export interface ImageGalleryProps {
  images: GalleryImage[]
  categories?: string[]
  initialCategory?: string
  className?: string
  showCategories?: boolean
  isLoading?: boolean
  title?: string
  description?: string
  showTitle?: boolean
}

export function ImageGallery({
  images,
  categories = ['Tümü'],
  initialCategory = 'Tümü',
  className,
  showCategories = true,
  isLoading = false,
  title = 'Proje Galerimiz',
  description = 'Hızır Teknik olarak tamamladığımız projelerden bazı örnekler',
  showTitle = true,
}: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === 'Tümü'
      ? images
      : images.filter((img) => img.category.title === selectedCategory)

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null))
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'Escape') setSelectedImage(null)
  }

  images?.forEach((image) => {
    if (!categories.includes(image.category.title)) {
      categories.push(image.category.title)
    }
  })

  if (isLoading) {
    return (
      <section className={cn('w-full bg-white py-12 md:py-24', className)}>
        <div className="container px-4 md:px-0">
          {showTitle && (
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
              <p className="mt-4 text-lg text-gray-600">{description}</p>
            </div>
          )}
          {showCategories && (
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-24 animate-pulse rounded-md bg-gray-200" />
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-lg bg-gray-200 aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('w-full bg-white py-12 md:py-24', className)}>
      <div className="container px-4 md:px-0">
        {showTitle && (
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{description}</p>
          </div>
        )}
        {showCategories && categories.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category ? 'bg-brand-600 hover:bg-brand-700' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src.url}
                alt={image.src.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="mt-2 text-sm">{image.category?.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent
            className="max-w-4xl border-none bg-transparent p-0 shadow-none"
            onKeyDown={handleKeyDown}
          >
            <DialogTitle className="sr-only">Galeri</DialogTitle>
            {selectedImage !== null && (
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
                  <Image
                    src={images[selectedImage].src.url}
                    alt={images[selectedImage].src.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-4">
                  <div className="rounded-lg bg-black/80 p-4 text-white">
                    <h3 className="text-lg font-semibold">{images[selectedImage].title}</h3>
                    {images[selectedImage].description && (
                      <p className="mt-1 text-sm text-stone-300">
                        {images[selectedImage].description}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="z-10 rounded-full bg-black/80 text-white hover:bg-brand-600/90"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-black/80 text-white hover:bg-brand-600/90"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-black/80 text-white hover:bg-brand-600/90"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
