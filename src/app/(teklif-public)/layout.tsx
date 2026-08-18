import '@/app/global.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

export default function TeklifPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className={`min-h-screen bg-gray-50 ${manrope.className}`}>{children}</body>
    </html>
  )
}
