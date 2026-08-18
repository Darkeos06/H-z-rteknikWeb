import { formatDate } from '@/lib/utils'
import { Media } from '@/payload-types'
import Image from 'next/image'

interface BlogHeroProps {
  title: string
  date: string
  image: Media
}

export function BlogHero({ title, date, image }: BlogHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image src={image.url} alt={image.alt} fill className="object-cover brightness-50" priority />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-center text-white md:px-0">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
            <time className="block text-lg text-stone-200">{formatDate(date)}</time>
          </div>
        </div>
      </div>
    </section>
  )
}
