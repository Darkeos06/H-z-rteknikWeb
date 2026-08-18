import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'
import { BlogCategoryGrid } from '@/components/blog/blog-category-grid'
import { Suspense } from 'react'
import { CategorySidebar } from '@/components/blog/blog-category-sidebar'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  try {
    const posts = await payload.find({
      collection: 'service-categories',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      select: {
        slug: true,
        _status: true,
      },
    })

    const params = posts.docs
      .filter(({ _status }) => _status !== 'draft')
      .map(({ slug }) => {
        return { slug }
      })

    return params
  } catch (error) {
    console.error(error)
  }
}

export default async function BlogCategoryPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await paramsPromise
  const postCategory = await getServiceCategory(slug)
  const posts = await getPostsByCategory(slug)

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        {postCategory.featured_image ? (
          <Image
            src={typeof postCategory.featured_image === 'object' && postCategory.featured_image.url}
            alt={
              (typeof postCategory.featured_image === 'object' &&
                postCategory.featured_image.alt) ||
              'Görsel'
            }
            fill
            className="object-cover brightness-50"
            priority
          />
        ) : (
          <div className="bg-stone-900 absolute inset-0"></div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white md:px-0">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {postCategory.title} Yazıları
              </h1>
              <p className="text-lg text-slate-200 md:text-xl">{`${postCategory.title} kategorisinde bulunan yazıları inceleyin.`}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-24">
        <div className="container px-4 md:px-0">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <Suspense fallback={null}>
              <BlogCategoryGrid posts={posts} category={postCategory.title} />
            </Suspense>
            <aside className="space-y-8">
              <CategorySidebar currentCategory={postCategory.slug} />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

const getServiceCategory = async (slug: string) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'service-categories',
    limit: 1,
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  return result.docs[0]
}

const getPostsByCategory = async (slug: string) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    limit: 100,
    where: {
      'related_service_category.slug': {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  return result.docs
}
