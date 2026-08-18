'use client'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="container my-auto min-h-full flex flex-col space-y-4 items-center gap-4">
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-700">
        Bir Hata Oluştu!
      </h2>
      <p className="text-lg lg:text-xl xl:text-2xl font-semibold">Aradığınız sayfa bulunamadı...</p>
      <Link href="/" className="text-brand-700 hover:underline">
        Ana Sayfaya Geri Dön
      </Link>
    </div>
  )
}
