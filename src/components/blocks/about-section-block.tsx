import { getPayload } from 'payload'
import configPromise from '@payload-config'
import AboutSection from '@/components/sections/about-section'
import { Media } from '@/payload-types'

interface AboutSectionBlockProps {
  content: {
    subtitle?: string | null
    title: string
    description: string
    button?: {
      text?: string | null
      url?: string | null
    }
  }
  certificateSource?: 'inline' | 'collection'
  certificates?:
    | {
        title: string
        image: Media
        id?: string | null
      }[]
    | null
  collectionOptions?: {
    limit?: number
    featuredOnly?: boolean
  }
}

export default async function AboutSectionBlock({
  content,
  certificateSource = 'inline',
  certificates,
  collectionOptions,
}: AboutSectionBlockProps) {
  let certificatesData = certificates

  // If using collection source, fetch from Certifications collection
  if (certificateSource === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const whereClause: any = {
      _status: {
        equals: 'published',
      },
    }

    if (collectionOptions?.featuredOnly) {
      whereClause.featured = {
        equals: true,
      }
    }

    const data = await payload.find({
      collection: 'certifications',
      limit: collectionOptions?.limit || 6,
      where: whereClause,
      sort: '-date',
    })

    // Map collection data to the format expected by AboutSection
    certificatesData = data.docs.map((cert) => ({
      title: cert.title,
      image: cert.image as Media,
      pdf: cert.pdf as Media,
      id: String(cert.id),
    }))
  }

  return <AboutSection content={content} certificates={certificatesData} />
}
