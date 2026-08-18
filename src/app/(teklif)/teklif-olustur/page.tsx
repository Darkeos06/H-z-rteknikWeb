import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Teklifler | Hızır Teknik',
  description: 'Teklif yönetim ekranına yönlendiriliyor.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function LegacyProposalGeneratorPage() {
  redirect('/teklifler')
}
