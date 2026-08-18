'use client'

import { useState } from 'react'
import { Check, ShieldCheck, Star, Award, Zap, ArrowRight, HelpCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceTier {
  id: 'eko' | 'standart' | 'premium'
  badge: string
  title: string
  subtitle: string
  warranty: string
  responseSpeed: string
  spareParts: string
  popular?: boolean
  features: string[]
}

const TIERS: ServiceTier[] = [
  {
    id: 'eko',
    badge: 'Ekonomik Çözüm',
    title: 'Eko Paket',
    subtitle: 'Bütçe dostu, temel bakım ve arıza giderme',
    warranty: '6 Ay Yazılı İşçilik Garantisi',
    responseSpeed: '24-48 Saat İçi Ulaşım',
    spareParts: 'TSE Standart Muadil Parça',
    features: [
      'Temel arıza tespiti ve müdahale',
      'Yazılı servis teslim fişi',
      'TSE belgeli yedek parça kullanımı',
      'Mesai saatleri içi servis hizmeti',
    ],
  },
  {
    id: 'standart',
    badge: 'En Çok Tercih Edilen',
    title: 'Standart Paket',
    subtitle: 'Konut ve işyerleri için eksiksiz mühendislik',
    warranty: '2 Yıl Tam Garanti',
    responseSpeed: 'Aynı Gün (Max 6 Saat)',
    spareParts: 'OEM Orijinal Üretici Parçası',
    popular: true,
    features: [
      'Gelişmiş termal ve akustik arıza tespiti',
      '2 Yıl koşulsuz işçilik & parça garantisi',
      'OEM Orijinal (Viessmann/E.C.A./Geberit) parçalar',
      'Aynı gün mobil servis önceliği',
      'Sezon ortası ücretsiz kontrol hakkı',
    ],
  },
  {
    id: 'premium',
    badge: 'Kurumsal & Ağır Hizmet',
    title: 'Premium Paket',
    subtitle: 'Siteler, hastaneler ve sanayi tesisleri için',
    warranty: '5 Yıl Birebir Değişim Garantisi',
    responseSpeed: '60 Dakika Acil Nöbetçi Ekip',
    spareParts: 'A+ Ağır Hizmet Sertifikalı Parça',
    features: [
      '7/24 Kesintisiz acil nöbetçi mühendis servisi',
      '5 Yıl uzatılmış birebir değişim garantisi',
      'A+ Sertifikalı ağır hizmet parçaları',
      'Kaskad ve otomasyon panosu periyodik testi',
      'Özel müşteri temsilcisi ve direkt hat',
      'Ücretsiz yedek hidrofor / yedekleme desteği',
    ],
  },
]

export function ServiceTierMatrix() {
  const [selectedTier, setSelectedTier] = useState<'eko' | 'standart' | 'premium'>('standart')

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-block">
          E.C.A. Esnek Hizmet Mimarisi
        </span>
        <h3 className="text-2xl font-black text-stone-900">Bütçenize & İhtiyacınıza Uygun Hizmet Seviyeleri</h3>
        <p className="text-sm text-stone-500">
          Tüm paketlerimizde %100 şeffaflık ve faturalı mühendislik garantisi standarttır.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {TIERS.map((tier) => {
          const isSelected = selectedTier === tier.id

          return (
            <Card
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`relative cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between ${
                tier.popular
                  ? 'border-2 border-brand-700 shadow-xl bg-white scale-[1.02]'
                  : isSelected
                  ? 'border-2 border-stone-800 shadow-lg bg-white'
                  : 'border border-stone-200 shadow-sm bg-stone-50/50 hover:bg-white'
              }`}
            >
              {/* Popular Badge Header */}
              {tier.popular && (
                <div className="bg-brand-700 text-white text-center text-xs font-black py-1.5 uppercase tracking-widest flex items-center justify-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  {tier.badge}
                </div>
              )}

              <CardContent className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {!tier.popular && (
                    <span className="inline-block text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200">
                      {tier.badge}
                    </span>
                  )}

                  <div>
                    <h4 className="text-2xl font-black text-stone-900">{tier.title}</h4>
                    <p className="text-xs text-stone-500 mt-1 font-medium leading-relaxed">{tier.subtitle}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 bg-stone-50 p-3.5 rounded-xl border border-stone-200/80 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500 font-medium">Garanti Süresi:</span>
                      <span className="font-extrabold text-stone-900">{tier.warranty}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-stone-200/60 pt-1.5">
                      <span className="text-stone-500 font-medium">Servis Hızı:</span>
                      <span className="font-bold text-brand-700">{tier.responseSpeed}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-stone-200/60 pt-1.5">
                      <span className="text-stone-500 font-medium">Parça Kalitesi:</span>
                      <span className="font-semibold text-stone-800">{tier.spareParts}</span>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold text-stone-700 block uppercase tracking-wider">
                      Paket Kapsamı:
                    </span>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-600 font-medium">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <Button
                    asChild
                    variant={tier.popular ? 'default' : 'outline'}
                    className={`w-full font-bold py-5 rounded-xl text-sm ${
                      tier.popular
                        ? 'bg-brand-700 hover:bg-brand-800 text-white shadow-md'
                        : 'border-stone-300 text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <a
                      href={`https://wa.me/905320000000?text=${encodeURIComponent(
                        `Merhaba, Hızır Teknik "${tier.title}" paket detayları ve hizmet teklifi hakkında bilgi almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5"
                    >
                      <span>{tier.title} İle Teklif Al</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
