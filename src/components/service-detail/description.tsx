import Image from 'next/image'
import { Check } from 'lucide-react'
import { Media } from '@/payload-types'

export function ServiceDescription({
  title,
  description,
  features,
  images,
}: {
  title: string
  description: string
  features: {
    id: string
    feature: string
  }[]
  images: { image: Media }[]
}) {
  return (
    <section className="w-full bg-stone-50 py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">{title}</h2>
            <p className="text-lg text-stone-600">{description}</p>
            <ul className="grid gap-3">
              {features?.map(({ id, feature }) => (
                <li key={id} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-stone-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={typeof images[0].image === 'object' && images[0].image?.url}
                alt={
                  (typeof images[0].image === 'object' && images[0].image?.alt) || 'Birinci görsel'
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={typeof images[1].image === 'object' && images[1].image?.url}
                  alt={
                    (typeof images[1].image === 'object' && images[1].image?.alt) || 'İkinci görsel'
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={typeof images[2].image === 'object' && images[2].image?.url}
                  alt={
                    (typeof images[2].image === 'object' && images[2].image?.alt) || 'Üçüncü görsel'
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
