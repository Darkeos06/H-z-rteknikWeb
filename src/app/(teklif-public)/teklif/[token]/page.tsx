import config from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { ProposalDocument } from '@/components/proposal/proposal-document'
import { ProposalPrintButton } from '@/components/proposal/proposal-print-button'
import { normalizeProposalDocumentData } from '@/components/proposal/proposal-data'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

interface PageProps {
  params: Promise<{ token: string }>
}

export default async function PublicProposalPage({ params }: PageProps) {
  const { token } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'proposals',
    where: { shareToken: { equals: token } },
    overrideAccess: true,
    limit: 1,
  })

  const proposal = result.docs[0]

  if (!proposal) notFound()

  if (!proposal.shareTokenExpiry || new Date(proposal.shareTokenExpiry) < new Date()) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Bu bağlantının süresi dolmuştur.</h1>
          <p className="mt-2 text-gray-500">Lütfen yeni bir paylaşım bağlantısı isteyin.</p>
        </div>
      </div>
    )
  }

  const data = normalizeProposalDocumentData(proposal)

  return (
    <div className="min-h-screen bg-gray-50 py-6 print:bg-white print:py-0">
      <div className="mx-auto max-w-[860px] px-4 print:max-w-none print:px-0">
        <div className="mb-4 flex items-center justify-between print:hidden">
          <p className="text-sm text-gray-500">
            Bu bağlantı{' '}
            <span className="font-medium text-gray-700">
              {new Date(proposal.shareTokenExpiry!).toLocaleDateString('tr-TR')}
            </span>{' '}
            tarihine kadar geçerlidir.
          </p>
          <ProposalPrintButton />
        </div>
        <ProposalDocument defaults={data.defaults} proposal={data.proposal} items={data.items} />
      </div>
    </div>
  )
}
