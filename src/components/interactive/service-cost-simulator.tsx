'use client'

import { useState } from 'react'
import { Calculator, ShieldCheck, FileText, Check, HelpCircle, ArrowRight, Percent } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceOption {
  id: string
  name: string
  baseMatrah: number
  description: string
  typicalMaterials: string
}

const SERVICES: ServiceOption[] = [
  {
    id: 'kaskad-bakim',
    name: 'Kaskad / Merkezi Kazan Sezon Bakımı',
    baseMatrah: 4500,
    description: 'Brülör temizliği, eşanjör yıkanması, genleşme tankı gaz kontrolü ve gaz analiz testi.',
    typicalMaterials: 'Conta setleri, iyonizasyon elektrodu, filtre elemanları',
  },
  {
    id: 'su-kacagi',
    name: 'Termal Kamera ile Noktasal Su Kaçağı Tespiti',
    baseMatrah: 2200,
    description: 'Akustik dinleme ve termal kızılötesi tarama ile kırmadan noktasal arıza tespiti.',
    typicalMaterials: 'Test tapaları, sızdırmazlık bileşikleri',
  },
  {
    id: 'hidrofor-montaj',
    name: 'Hidrofor & Pompa Tesisat Montajı / Revizyonu',
    baseMatrah: 6500,
    description: 'Pik/Paslanmaz hidrofor montajı, çekvalf, vana ve genleşme tankı bağlantıları.',
    typicalMaterials: 'PPRC/Kolektör boruları, pirinç vana, elektrik panosu röleleri',
  },
  {
    id: 'vrf-klima',
    name: 'VRF / Split Klima İklimlendirme Bakımı',
    baseMatrah: 3200,
    description: 'Evaporatör dezenfeksiyonu, gaz basınç ölçümü ve drenaj hattı bakımı.',
    typicalMaterials: 'Antibakteriyel solüsyon, R410A/R32 soğutucu gaz',
  },
]

export function ServiceCostSimulator() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('kaskad-bakim')
  const [tier, setTier] = useState<'standart' | 'acil' | 'kurumsal'>('standart')
  const [includeMaterials, setIncludeMaterials] = useState<boolean>(true)

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0]

  // Multiplier calculation
  const tierMultiplier = tier === 'standart' ? 1.0 : tier === 'acil' ? 1.35 : 1.2
  const materialCost = includeMaterials ? Math.round(activeService.baseMatrah * 0.4) : 0

  const netLaborMatrah = Math.round(activeService.baseMatrah * tierMultiplier)
  const totalNetMatrah = netLaborMatrah + materialCost
  const kdvAmount = Math.round(totalNetMatrah * 0.20) // %20 KDV
  const grandTotal = totalNetMatrah + kdvAmount

  return (
    <Card className="border border-stone-200 bg-white shadow-xl overflow-hidden rounded-2xl">
      <div className="bg-stone-900 p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
            E.C.A. & Geberit Şeffaf Fiyatlandırma Standardı
          </span>
          <h3 className="text-xl font-extrabold text-white mt-1">
            Canlı Mühendislik ve Servis Hesaplama Aracı
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-stone-800 px-3.5 py-1.5 rounded-full border border-stone-700 text-xs text-stone-300 font-medium shrink-0">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Faturasız / Sürpriz Maliyetsiz Garanti</span>
        </div>
      </div>

      <CardContent className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <label className="font-bold text-stone-800 text-sm block">1. Hizmet / Müdahale Türünü Seçin:</label>
            <div className="space-y-2.5">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedServiceId(s.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                    selectedServiceId === s.id
                      ? 'border-brand-700 bg-brand-50/80 text-brand-950 ring-2 ring-brand-700/20 font-semibold'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="pr-4">
                    <div className="font-bold text-sm text-stone-900">{s.name}</div>
                    <div className="text-xs text-stone-500 mt-0.5 line-clamp-1">{s.description}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-stone-400 block font-normal">Başlangıç Matrahı</span>
                    <span className="text-sm font-extrabold text-brand-700">{s.baseMatrah.toLocaleString('tr-TR')} ₺</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tier Selection */}
          <div className="space-y-2">
            <label className="font-bold text-stone-800 text-sm block">2. Servis Zamanlaması & Öncelik Seviyesi:</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'standart', title: 'Mesai İçi Standart', desc: 'Aynı Gün Randevu' },
                { id: 'acil', title: '7/24 Acil Nöbetçi', desc: '60 Dk Mobil Ekip' },
                { id: 'kurumsal', title: 'Sözleşmeli Kurumsal', desc: 'Periyodik / Faturaya Tabi' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                    tier === t.id
                      ? 'border-brand-700 bg-brand-50 text-brand-900 font-bold ring-2 ring-brand-700/20'
                      : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <div className="text-xs font-bold">{t.title}</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Material Include Checkbox */}
          <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-200">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="materials-check"
                checked={includeMaterials}
                onChange={(e) => setIncludeMaterials(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-stone-300 text-brand-700 focus:ring-brand-700"
              />
              <label htmlFor="materials-check" className="cursor-pointer">
                <span className="text-sm font-bold text-stone-800 block">Yedek Parça ve Sarf Malzeme Tahmini Dahil Et</span>
                <span className="text-xs text-stone-500 block">Tipik malzemeler: {activeService.typicalMaterials}</span>
              </label>
            </div>
          </div>
        </div>

        {/* Calculation Invoice Simulation Column */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <FileText className="h-4 w-4 text-brand-700" />
                <span>Tahmini Matrah Dökümü</span>
              </div>
              <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-mono uppercase">
                Ankara Servis Tarifesi
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-stone-600">
                <span>Teknik İşçilik Matrahı:</span>
                <span className="font-semibold text-stone-900">{netLaborMatrah.toLocaleString('tr-TR')} ₺</span>
              </div>

              {includeMaterials && (
                <div className="flex justify-between items-center text-stone-600">
                  <span>Yedek Parça & Sarf (Tahmini):</span>
                  <span className="font-semibold text-stone-900">{materialCost.toLocaleString('tr-TR')} ₺</span>
                </div>
              )}

              <div className="flex justify-between items-center text-stone-600 pt-2 border-t border-stone-100 font-medium">
                <span>Net Matrah Toplamı:</span>
                <span className="font-bold text-stone-900">{totalNetMatrah.toLocaleString('tr-TR')} ₺</span>
              </div>

              <div className="flex justify-between items-center text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                <span className="flex items-center gap-1 text-xs">
                  <Percent className="h-3.5 w-3.5 text-stone-400" /> KDV Tutarı (%20):
                </span>
                <span className="font-bold text-stone-800 text-xs">+{kdvAmount.toLocaleString('tr-TR')} ₺</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="bg-brand-950 text-white rounded-xl p-5 border border-brand-900 space-y-1">
              <span className="text-[11px] text-brand-300 uppercase tracking-widest font-semibold block">
                Yasal KDV Dahil Tahmini Toplam
              </span>
              <div className="text-3xl font-black text-white">{grandTotal.toLocaleString('tr-TR')} ₺</div>
              <p className="text-[11px] text-stone-400 pt-1 border-t border-brand-900/60 mt-2">
                * Keşif sonrasında kesin yazılı teklif sunulur. Fiyat onaylanmadan işlem başlatılmaz.
              </p>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <Button
              asChild
              className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-6 rounded-xl text-base shadow-md"
            >
              <a
                href={`https://wa.me/905320000000?text=${encodeURIComponent(
                  `Merhaba, Hızır Teknik servis simülatöründen "${activeService.name}" teklifi aldım. Tahmini maliyet: ${grandTotal} TL (KDV Dahil). İşlem randevusu oluşturmak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span>Bu Fiyatla İşlem / Keşif Randevusu Al</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
