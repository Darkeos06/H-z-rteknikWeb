import '@/app/global.css'
import config from '@payload-config'
import { Manrope } from 'next/font/google'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import type { Viewport } from 'next'
import { TekliflerBackLink } from '@/components/proposal/teklifler-back-link'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
  variable: '--font-manrope',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function TeklifLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  if (!user) {
    redirect('/admin/login?redirect=%2Fteklifler')
  }

  return (
    <html lang="tr" className={`scroll-smooth ${manrope.variable}`}>
      <body className={`bg-gray-50 ${manrope.className}`}>
        <div className="print:hidden">
          <div className="container px-4 pt-6 md:pt-8">
            <TekliflerBackLink />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
