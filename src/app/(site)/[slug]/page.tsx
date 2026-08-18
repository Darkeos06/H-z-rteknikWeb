import { getPayload } from 'payload'
import React from 'react'
import configPromise from '@payload-config'
import { Blocks } from '@/components/render-blocks'
import { notFound, redirect } from 'next/navigation'
import { LOCATIONS, isValidLocation } from '@/lib/locations'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    limit: 1000,
    select: {
      slug: true,
      _status: true,
    },
    depth: 1,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  // Combine location slugs with page slugs
  const locationSlugs = Object.keys(LOCATIONS).map((slug) => ({ slug }))
  const pageSlugs = result.docs.map((page) => ({ slug: page.slug }))

  return [...locationSlugs, ...pageSlugs]
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await paramsPromise

  // If it's a location page
  if (isValidLocation(slug)) {
    const location = LOCATIONS[slug]
    return {
      title: `${location.name} Teknik Servis | Hızır Teknik`,
      description: `${location.name} bölgesinde kombi, klima, beyaz eşya ve diğer teknik servis hizmetleri. Aynı gün servis ve uygun fiyat garantisi.`,
    }
  }

  // If it's a regular page
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
    depth: 1,
  })

  if (!result.docs.length) {
    return {
      title: 'Sayfa Bulunamadı | Hızır Teknik',
      description: 'Aradığınız sayfa bulunamadı.',
    }
  }

  const page = result.docs[0]

  return {
    title: `${page.meta?.title || page.title} | Hızır Teknik`,
    description: page.meta?.description || 'Hızır Teknik profesyonel teknik servis hizmetleri.',
  }
}

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await paramsPromise

  // Check if this is a location page
  if (isValidLocation(slug)) {
    return redirect(`/${slug}/teknik-servis`)
  }

  // Handle regular pages
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
    depth: 2,
  })

  if (!result.docs.length) {
    notFound()
  }

  const page = result.docs[0]

  return (
    <main className="flex min-h-screen flex-col">
      {page.blocks && page.blocks.length > 0 ? <Blocks blocks={page.blocks} /> : null}
    </main>
  )
}
