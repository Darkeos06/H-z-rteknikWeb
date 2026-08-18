'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, Printer, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProposalShareButton } from '@/components/proposal/proposal-share-button'

interface ProposalDetailActionsProps {
  proposalId: number
  proposalNumber: string
}

export const ProposalDetailActions = ({ proposalId, proposalNumber }: ProposalDetailActionsProps) => {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    document.body.classList.add('proposal-page')

    return () => {
      document.body.classList.remove('proposal-page')
    }
  }, [])

  const handleDelete = async () => {
    const shouldDelete = window.confirm('Bu teklifi silmek istediğinize emin misiniz?')

    if (!shouldDelete) {
      return
    }

    setIsDeleting(true)

    try {
      const response = await fetch(`/api/proposals/${proposalId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        setIsDeleting(false)
        return
      }

      router.push('/teklifler')
      router.refresh()
    } catch {
      setIsDeleting(false)
    }
  }

  return (
    <div className="mb-4 flex flex-wrap gap-2 print:hidden">
      <Button asChild variant="outline">
        <Link href="/teklifler">Geri dön</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href={`/teklifler/${proposalId}/duzenle`}>Düzenle</Link>
      </Button>
      <Button variant="cta" onClick={() => window.print()}>
        <Printer className="h-4 w-4" />
        PDF / Yazdır
      </Button>
      <ProposalShareButton proposalId={proposalId} proposalNumber={proposalNumber} />
      <Button
        variant="destructive"
        onClick={handleDelete}
        disabled={isDeleting}
        className="shadow-md"
      >
        {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
        Sil
      </Button>
    </div>
  )
}
