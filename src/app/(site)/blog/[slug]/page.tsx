import { BlogHero } from '@/components/blog-detail/hero'
import { AuthorInfo } from '@/components/blog-detail/author'
import { RelatedPosts } from '@/components/blog-detail/related'
import { CTA } from '@/components/blocks/cta'
import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import RichText from '@/components/blocks/RichText'
import { Metadata } from 'next'
import { generateArticleMetadata } from '@/lib/seo/metadata'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'
import { SchemaScripts, Breadcrumbs } from '@/components/seo'
import type { BreadcrumbItem } from '@/lib/seo/types'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  try {
    const posts = await payload.find({
      collection: 'posts',
      draft: false,
      limit: 10000,
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
    return []
  }
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await paramsPromise
  const post = await queryPostBySlug(slug)

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Hızır Teknik',
      description: 'Aradığınız blog yazısı bulunamadı.',
    }
  }

  const authorName = typeof post.author === 'object' ? post.author?.name : undefined
  const categoryName =
    typeof post.post_category === 'object' ? post.post_category?.title : undefined
  const imageUrl = typeof post.featured_image === 'object' ? post.featured_image?.url : undefined

  return generateArticleMetadata(
    {
      title: post.meta?.title || post.title || '',
      description: post.meta?.description || post.description || '',
      author: authorName,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      section: categoryName,
      image: imageUrl ? { url: imageUrl } : undefined,
    },
    `/blog/${slug}`,
  )
}

export default async function BlogDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await paramsPromise

  const post = await queryPostBySlug(slug)

  if (!post || post === null) {
    notFound()
  }

  const authorName = typeof post.author === 'object' ? post.author?.name : undefined
  const imageUrl = typeof post.featured_image === 'object' ? post.featured_image?.url : undefined

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title || '', url: `/blog/${slug}` },
  ]

  const schemas = [
    generateBreadcrumbSchema(breadcrumbs),
    generateArticleSchema({
      title: post.title || '',
      description: post.description || '',
      url: `/blog/${slug}`,
      image: imageUrl,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      author: authorName,
    }),
  ]

  return (
    <>
      <head>
        <SchemaScripts schemas={schemas} />
      </head>
      <BlogHero
        title={post.title}
        date={post.createdAt}
        image={typeof post.featured_image === 'object' && post.featured_image}
      />
      <div className="container px-4 md:px-0 my-12 max-w-4xl space-y-12">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />
        <RichText content={post.content as any} />
        {typeof post.author === 'object' ? <AuthorInfo {...post.author} /> : null}
      </div>
      <RelatedPosts slug={post.slug} />
      <CTA
        heading="Daha Fazla İçerik Keşfedin"
        description="Teknik bilgiler, bakım ipuçları ve sektör haberleri için blog sayfamızı ziyaret edin."
        buttonText="Tüm Yazılar"
        buttonLink="/blog"
      />
    </>
  )
}

const queryPostBySlug = cache(async (slug: string) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
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

  return result.docs?.[0] || null
})
