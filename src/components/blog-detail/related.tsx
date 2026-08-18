import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { formatDate } from '@/lib/utils'

export async function RelatedPosts({ slug }: { slug: string }) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    limit: 3,
    where: {
      slug: {
        not_equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  const relatedPosts = result.docs

  return (
    <section className="w-full bg-stone-50 py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            İlginizi Çekebilecek Yazılar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {relatedPosts.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden transition-all duration-300 hover:-transtone-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9]">
                {typeof post.featured_image === 'object' && post.featured_image ? (
                  <Image
                    src={post.featured_image.url}
                    alt={post.featured_image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : null}
              </div>
              <CardContent className="p-6">
                <time className="text-sm text-stone-600">{formatDate(post.createdAt)}</time>
                <h3 className="mb-2 mt-1 text-xl font-semibold text-stone-900">{post.title}</h3>
                <p className="mb-4 text-stone-600">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-600 transition-colors hover:text-brand-700"
                >
                  Devamını Oku
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
