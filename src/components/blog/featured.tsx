import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Post } from '@/payload-types'
import { formatDate } from '@/lib/utils'

export function FeaturedPost({ post }: { post?: Post }) {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-stone-500 bg-stone-50 rounded-xl border border-stone-200 my-8">
        Henüz öne çıkan bir blog yazısı bulunmuyor.
      </div>
    )
  }

  const { title, description, createdAt, post_category, featured_image, slug } = post

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="container px-4 md:px-0">
        <div className="relative flex items-center aspect-[0.8] md:aspect-[2.8] w-full overflow-hidden rounded-xl bg-stone-900">
          <div className="absolute inset-0">
            <Image
              src={typeof featured_image === 'object' && featured_image.url}
              alt={(typeof featured_image === 'object' && featured_image.alt) || title + ' görseli'}
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-4">
            <Badge className="w-fit bg-brand-600 hover:bg-brand-700">
              {typeof post_category === 'object' && post_category.title}
            </Badge>
            <div>
              <time className="text-sm text-stone-300">{formatDate(createdAt)}</time>
              <h2 className="mt-1 text-3xl font-bold text-white md:text-4xl">{title}</h2>
            </div>
            <p className="text-stone-300">{description}</p>
            <Button asChild size="lg" className="w-fit bg-brand-600 hover:bg-brand-700">
              <Link href={`/blog/${slug}`}>
                Devamını Oku
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
