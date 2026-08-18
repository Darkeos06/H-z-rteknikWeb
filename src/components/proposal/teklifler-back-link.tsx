'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'

export const TekliflerBackLink = () => {
  const pathname = usePathname()

  if (pathname === '/teklifler') {
    return null
  }

  return (
    <Link
      href="/teklifler"
      className={`${buttonVariants({
        variant: 'cta',
      })} hover:!text-white`}
      prefetch={false}
    >
      ← Tüm Tekliflere Geri Dön
    </Link>
  )
}
