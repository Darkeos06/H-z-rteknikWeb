'use client'

import { useState } from 'react'
import { Building2, ShieldCheck, CheckCircle2, ChevronRight, Award, Zap, HardHat } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface ReferenceCase {
  id: string
  companyName: string
  logoText: string
  category: 'kamu' | 'site' | 'saglik' | 'rezidans'
  categoryLabel: string
  scope: string
  specs: { label: string; value: string }[]
  technologies: string[]
  completionDate: string
  casePhoto: string
}

const CASE_STUDIES: ReferenceCase[] = [
  {
    id: 'abb',
    companyName: 'Ankara Büyükşehir Belediyesi',
    logoText: 'ABB',
    category: 'kamu',
    categoryLabel: 'Kamu Kurumu & İdari Kompleks',
    scope: 'Merkezi idari binaların sıhhi tesisat yenileme, otomasyonlu su sayaçları kollektör sistemleri ve yangın pompa revizyonu.',
    specs: [
      { label: 'Uygulama Alanı', value: '18.500 m²' },
      { label: 'Kollektör Kapasitesi', value: '48 Hat Bağımsız' },
      { label: 'Sözleşme Süresi', value: '45 İş Günü' },
    ],
    technologies: ['Sıhhi Tesisat', 'Otomasyonel Vana', 'PPRC Kompozit', 'Yangın Hidroforu'],
    completionDate: '2025 - Tamamlandı',
    casePhoto: '/hizir-teknik-tamirat-1.jpg',
  },
  {
    id: 'eryaman-site',
    companyName: 'Eryaman Konut Kooperatifi',
    logoText: 'EKK',
    category: 'site',
    categoryLabel: 'Toplu Konut & Site Yönetimi',
    scope: '12 blok ve 280 daireden oluşan toplu konut merkezinin yoğuşmalı kaskad kazan sistemleri kurulumu ve 1 yıl periyodik bakımı.',
    specs: [
      { label: 'Isıl Güç', value: '1.200 kW Kaskad' },
      { label: 'Faydalanan Daire', value: '280 Konut' },
      { label: 'Yakıt Tasarrufu', value: '%28 Doğalgaz Kazancı' },
    ],
    technologies: ['Kaskad Kazan', 'Modülasyon Panosu', 'Boyler Tesisatı', 'Gaz Analiz'],
    completionDate: '2025 - Tamamlandı',
    casePhoto: '/hizir-teknik-tamirat-2.jpg',
  },
  {
    id: 'cankaya-tip',
    companyName: 'Çankaya Tıp Merkezi',
    logoText: 'ÇTM',
    category: 'saglik',
    categoryLabel: 'Sağlık Sektörü & Poliklinik',
    scope: 'Ameliyathane ve medikal bölümler için UV sterilizasyon üniteli su arıtma, yumuşatma filtre montajı ve kesintisiz hidrofor hattı.',
    specs: [
      { label: 'Sterilizasyon Oranı', value: '%99.9 Hediye Hijyen' },
      { label: 'Su Debisi', value: '15 m³/saat Arıtma' },
      { label: 'Nöbetçi Hizmet', value: '7/24 Kesintisiz' },
    ],
    technologies: ['UV Sterilizasyon', 'Medikal Su Filtreleme', 'Çift Pompalı Hidrofor'],
    completionDate: '2024 - Tamamlandı',
    casePhoto: '/hizir-teknik-tamirat-1.jpg',
  },
  {
    id: 'bilkent-rezidans',
    companyName: 'Bilkent Rezidans Kompleksi',
    logoText: 'BR',
    category: 'rezidans',
    categoryLabel: 'Lüks Rezidans & Akıllı Bina',
    scope: 'Site geneli çift frekans invertörlü yangın hidroforu kurulumu ve bina otomasyon panosu entegrasyonu.',
    specs: [
      { label: 'Pompa Gücü', value: '2x 22 kW İnvertör' },
      { label: 'Çalışma Basıncı', value: '12 Bar Yüksek İrtifa' },
      { label: 'Gürültü Seviyesi', value: '< 42 dB Sessiz' },
    ],
    technologies: ['Frekans İnvertörü', 'Yangın Pompalari', 'Otomasyon Panosu'],
    completionDate: '2024 - Tamamlandı',
    casePhoto: '/hizir-teknik-tamirat-2.jpg',
  },
]

export function ReferenceMatrix() {
  const [filterCategory, setFilterCategory] = useState<'hepsi' | 'kamu' | 'site' | 'saglik' | 'rezidans'>('hepsi')

  const filtered = filterCategory === 'hepsi'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === filterCategory)

  return (
    <div className="space-y-8">
      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { key: 'hepsi', label: 'Tüm Referanslar (B2B / Kurumsal)' },
          { key: 'kamu', label: 'Kamu Kurumları' },
          { key: 'site', label: 'Toplu Konut & Siteler' },
          { key: 'saglik', label: 'Sağlık & Hastaneler' },
          { key: 'rezidans', label: 'Lüks Rezidanslar' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilterCategory(tab.key as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              filterCategory === tab.key
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <Card
            key={item.id}
            className="border border-stone-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 rounded-2xl group"
          >
            <div>
              {/* Card Header */}
              <div className="p-6 border-b border-stone-100 bg-gradient-to-r from-stone-50 to-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-stone-900 text-white font-black text-xl flex items-center justify-center shadow-md uppercase tracking-wider shrink-0">
                    {item.logoText}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-lg leading-snug">{item.companyName}</h3>
                    <p className="text-xs font-semibold text-brand-700 mt-0.5 flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5" />
                      {item.categoryLabel}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                  {item.completionDate}
                </span>
              </div>

              {/* Photo & Tech Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.casePhoto}
                  alt={item.companyName}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-stone-900/90 text-white backdrop-blur-md text-[10px] font-bold px-2.5 py-0.5 rounded shadow-sm border border-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scope & Specs */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-stone-600 font-medium leading-relaxed">{item.scope}</p>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-stone-100">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-center">
                      <span className="text-[10px] text-stone-400 font-medium block">{spec.label}</span>
                      <span className="text-xs font-extrabold text-stone-900 mt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-stone-100 bg-stone-50/50 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-500 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Tam Kapsam Mühendislik Garantisi
              </span>
              <a
                href={`https://wa.me/905320000000?text=${encodeURIComponent(
                  `Merhaba, ${item.companyName} projesine benzer kurumsal mühendislik hizmeti için detaylı bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1 transition-colors"
              >
                <span>Kurumsal Teklif İste</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
