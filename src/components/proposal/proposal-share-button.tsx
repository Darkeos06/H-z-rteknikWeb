'use client'

import { useState } from 'react'
import { Share2, Link2, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getClientSideURL } from '@/lib/getURL'

interface ProposalShareButtonProps {
  proposalId: number
  proposalNumber: string
  size?: 'sm' | 'default'
}

export const ProposalShareButton = ({
  proposalId,
  proposalNumber,
  size = 'default',
}: ProposalShareButtonProps) => {
  const [state, setState] = useState<'idle' | 'loading' | 'copied' | 'shared' | 'error'>('idle')

  const handleShare = async () => {
    setState('loading')

    try {
      const res = await fetch(`/api/proposals/${proposalId}/share-token`, { method: 'POST' })
      if (!res.ok) throw new Error()
      const { token } = await res.json()

      const url = `${getClientSideURL()}/teklif/${token}`
      const title = `Teklif ${proposalNumber}`

      if (navigator.share) {
        await navigator.share({ title, url })
        setState('shared')
      } else {
        await navigator.clipboard.writeText(url)
        setState('copied')
      }

      setTimeout(() => setState('idle'), 3000)
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 3000)
    }
  }

  return (
    <Button
      variant="outline"
      size={size}
      className="gap-1.5"
      onClick={handleShare}
      disabled={state === 'loading'}
    >
      {state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
      {(state === 'copied' || state === 'shared') && (
        <CheckCircle2 className="h-4 w-4 text-green-600" />
      )}
      {(state === 'idle' || state === 'error') && (
        state === 'error' ? <Link2 className="h-4 w-4 text-red-500" /> : <Share2 className="h-4 w-4" />
      )}
      {state === 'loading'
        ? 'Hazırlanıyor…'
        : state === 'copied'
        ? 'Link Kopyalandı!'
        : state === 'shared'
        ? 'Paylaşıldı!'
        : state === 'error'
        ? 'Hata oluştu'
        : 'Paylaş'}
    </Button>
  )
}
