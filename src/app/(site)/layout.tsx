import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '../global.css'
import Header from '@/components/base/header'
import Footer from '@/components/base/footer'
import { EmergencyFloatingBar } from '@/components/interactive/emergency-floating-bar'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hızır Teknik | Ankara Yetkili İklimlendirme & Tesisat Hizmetleri',
  description: 'Ankara genelinde 25 yıldır kaskad, vrf klima, kombi, sıhhi tesisat, hidrofor ve elektrik tamirat hizmetleri.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const payload = await getPayload({ config: configPromise })
  const siteSettingsData = await payload.findGlobal({
    slug: 'site-settings',
  })

  return (
    <html lang="tr" className={`scroll-smooth ${manrope.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        <Header siteSettings={siteSettingsData} />
        <div className="flex-grow bg-slate-950">{children}</div>
        <Footer siteSettings={siteSettingsData} />
        <EmergencyFloatingBar />
      </body>
    </html>
  )
}
