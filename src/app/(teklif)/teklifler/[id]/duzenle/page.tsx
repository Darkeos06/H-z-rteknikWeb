import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { ProposalEditor } from '@/components/proposal/proposal-editor'
import { normalizeProposalDocumentData } from '@/components/proposal/proposal-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teklif Düzenle | Hızır Teknik',
  description: 'Kaydedilmiş teklifi düzenleyin.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProposalEditPage({ params }: PageProps) {
  const { id } = await params
  const payload = await getPayload({ config })

  try {
    const proposal = await payload.findByID({ collection: 'proposals', id: Number(id), overrideAccess: true })

    return (
      <ProposalEditor
        initialData={normalizeProposalDocumentData(proposal)}
        proposalId={proposal.id}
        initialStatus={proposal.status || 'draft'}
      />
    )
  } catch {
    notFound()
  }
}
