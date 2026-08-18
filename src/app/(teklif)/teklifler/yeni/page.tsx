import { ProposalGenerator } from '@/components/proposal/proposal-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yeni Teklif | Hızır Teknik',
  description: 'Proforma teklif oluşturun ve PDF çıktısı alın.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function NewProposalPage() {
  return <ProposalGenerator />
}
