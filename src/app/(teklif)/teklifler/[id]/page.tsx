import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { ProposalDetailActions } from '@/components/proposal/proposal-detail-actions'
import { ProposalDocument } from '@/components/proposal/proposal-document'
import { normalizeProposalDocumentData } from '@/components/proposal/proposal-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teklif Detayı | Hızır Teknik',
  description: 'Kaydedilmiş teklif detayı.',
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

export default async function ProposalDetailPage({ params }: PageProps) {
  const { id } = await params
  const payload = await getPayload({ config })

  try {
    const proposal = await payload.findByID({
      collection: 'proposals',
      id: Number(id),
      overrideAccess: true,
    })
    const data = normalizeProposalDocumentData(proposal)

    return (
      <section className="py-8 md:py-10 print:py-0">
        <div className="container px-4 print:max-w-none print:px-0">
          <ProposalDetailActions proposalId={proposal.id} proposalNumber={proposal.proposalNumber} />
          <ProposalDocument defaults={data.defaults} proposal={data.proposal} items={data.items} />
        </div>
      </section>
    )
  } catch {
    notFound()
  }
}
