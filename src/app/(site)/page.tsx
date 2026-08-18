// app/(site)/page.tsx
import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'
import { Blocks } from '@/components/render-blocks'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

const getPage = cache(async function getPage(): Promise<Page | null> {
  const payload = await getPayload({ config: configPromise })
  try {
    const data = await payload.find({
      collection: 'pages',
      depth: 2,
      where: {
        slug: {
          equals: 'ana-sayfa',
        },
      },
    })

    if (!data || data.docs.length === 0) {
      return null
    }

    const page = data.docs[0]

    if (!page) {
      return null
    }

    return page
  } catch (error) {
    console.error('Error fetching home page:', error)
    return null
  }
})

export const metadata = {
  title: 'Hızır Teknik | Kurumsal Mühendislik, İklimlendirme & Tesisat Çözümleri',
  description:
    "Ankara'da 25+ yıllık tecrübe ile Kaskad ısıtma, VRF klima, hidrofor ve tesisat mühendisliği. 7/24 acil nöbetçi mobil teknik ekip.",
}

export default async function HomePage() {
  const page = await getPage()

  if (!page) {
    notFound()
  }

  return (
    <>
      {page.blocks && <Blocks blocks={page.blocks} />}
    </>
  )
}
