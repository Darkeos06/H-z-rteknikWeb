import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Certifications } from '@/components/blocks/certifications'
import { Media } from '@/payload-types'

interface Certificate {
  title: string
  date: string
  image: {
    url: string
    alt: string
  }
  description: string
  pdfUrl?: string
}

interface CertificationsBlockProps {
  title?: string
  description?: string
  certificateSource?: 'inline' | 'collection'
  certificates?: any[]
  collectionOptions?: {
    limit?: number
    featuredOnly?: boolean
  }
}

export default async function CertificationsBlock({
  title,
  description,
  certificateSource = 'inline',
  certificates,
  collectionOptions,
}: CertificationsBlockProps) {
  let certificatesData: Certificate[] = []

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
      limit: collectionOptions?.limit || 10,
      where: whereClause,
      sort: '-date',
    })

    // Map collection data to the format expected by Certifications component
    certificatesData = data.docs.map((cert) => {
      const imageData = cert.image as Media
      const pdfData = cert.pdf as Media | null | undefined

      return {
        title: cert.title,
        date: cert.date || '',
        image: {
          url: imageData?.url || '/placeholder.svg',
          alt: imageData?.alt || cert.title,
        },
        description: cert.description || '',
        pdfUrl: pdfData?.url || undefined,
      }
    })
  } else {
    // Use inline certificates
    if (certificates && certificates.length > 0) {
      certificatesData = certificates.map((cert) => {
        const imageData = cert.image as Media
        return {
          title: cert.title || '',
          date: cert.date || '',
          image: {
            url: imageData?.url || '/placeholder.svg',
            alt: imageData?.alt || cert.title || 'Certificate',
          },
          description: cert.description || '',
          pdfUrl: cert.pdfUrl || undefined,
        }
      })
    }
  }

  // Only render if we have certificates
  if (certificatesData.length === 0) {
    return null
  }

  return <Certifications title={title} description={description} certificates={certificatesData} />
}
