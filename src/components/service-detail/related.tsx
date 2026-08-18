import { Service } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CollectionSlug } from '@/types/payload-types-extended'
import { RelatedServicesClient } from './related-client'

export interface RelatedServicesProps {
  collection: CollectionSlug
  currentId: string | number
  title?: string
}

export async function RelatedServices({
  collection = 'services' as CollectionSlug,
  currentId,
  title = 'Benzer Hizmetler',
}: RelatedServicesProps) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection,
    limit: 3,
    where: {
      id: {
        not_equals: currentId,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  if (!result.docs || result.docs.length === 0) {
    return null
  }

  // Pass the services to the client component
  return <RelatedServicesClient services={result.docs as Service[]} title={title} />
}
