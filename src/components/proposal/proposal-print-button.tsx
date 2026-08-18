'use client'

import { Button } from '@/components/ui/button'

export const ProposalPrintButton = () => {
  return (
    <Button variant="cta" onClick={() => window.print()}>
      PDF / Yazdır
    </Button>
  )
}
