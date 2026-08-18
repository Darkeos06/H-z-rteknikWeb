'use client'

import { useState } from 'react'
import { Calculator, Flame, ShieldCheck, ArrowRight, Zap, Building2, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CascadeCalculator() {
  const [flats, setFlats] = useState<number>(12)
  const [unitArea, setUnitArea] = useState<number>(120)
  const [insulation, setInsulation] = useState<'zayif' | 'orta' | 'iyi'>('orta')
  const [hotWater, setHotWater] = useState<boolean>(true)

  // Calculations
  const insulationCoeff = insulation === 'zayif' ? 0.08 : insulation === 'orta' ? 0.06 : 0.045
  const baseThermalLoad = Math.round(flats * unitArea * insulationCoeff) // kW
  const hotWaterBonus = hotWater ? Math.round(flats * 2.5) : 0 // kW
  const totalRequiredKW = baseThermalLoad + hotWaterBonus

  // Recommended setup
  let recommendedSetup = ''
  let moduleCount = 2
  let moduleCapacity = 50

  if (totalRequiredKW <= 70) {
    moduleCount = 2
    moduleCapacity = 45
    recommendedSetup = '2x 45 kW Yoğuşmalı Kaskad Modülü'
  } else if (totalRequiredKW <= 140) {
    moduleCount = 2
    moduleCapacity = 75
    recommendedSetup = '2x 75 kW Duvar Tipi Kaskad Sistem'
  } else if (totalRequiredKW <= 240) {
    moduleCount = 3
    moduleCapacity = 90
    recommendedSetup = '3x 90 kW Yüksek Verimli Kaskad Dizilimi'
  } else {
    moduleCount = Math.ceil(totalRequiredKW / 100)
    moduleCapacity = 115
    recommendedSetup = `${moduleCount}x 115 kW Endüstriyel Kazan/Kaskad Serisi`
  }

  const estimatedSavings = insulation === 'zayif' ? 32 : insulation === 'orta' ? 28 : 22
  const annualGasSavingTL = Math.round(flats * 4800 * (estimatedSavings / 100))

  return (
    <Card className="border border-stone-200 bg-white shadow-xl overflow-hidden rounded-2xl">
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-brand-950 p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700/80 text-white shadow-inner">
            <Flame className="h-6 w-6 text-amber-400" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              Viessmann & Buderus Mühendislik Standartları
            </span>
            <h3 className="text-xl font-extrabold text-white">Kaskad Isıtma Gücü & Kapasite Sihirbazı</h3>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
          <Zap className="h-3.5 w-3.5" /> %98.4 Isıl Verim Hesaplayıcı
        </span>
      </div>

      <CardContent className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Flats Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-bold text-stone-800 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-brand-700" /> Daire / Bağımsız Bölüm Sayısı:
              </label>
              <span className="font-extrabold text-brand-700 bg-brand-50 px-3 py-1 rounded-md text-base border border-brand-200">
                {flats} Daire
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={80}
              step={1}
              value={flats}
              onChange={(e) => setFlats(Number(e.target.value))}
              className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-700"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>4 Daire (Küçük Site)</span>
              <span>40 Daire</span>
              <span>80+ Daire (Rezidans)</span>
            </div>
          </div>

          {/* Unit Area Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-bold text-stone-800">Ortalama Ortalama Daire Alanı (m²):</label>
              <span className="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-md text-sm border border-stone-200">
                {unitArea} m²
              </span>
            </div>
            <input
              type="range"
              min={60}
              max={250}
              step={5}
              value={unitArea}
              onChange={(e) => setUnitArea(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-700"
            />
          </div>

          {/* Insulation Selection */}
          <div className="space-y-2">
            <label className="font-bold text-stone-800 text-sm block">Bina Yalıtım Durumu:</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'zayif', label: 'Eski / Yalıtımsız', sub: 'Yüksek Kayıp' },
                { id: 'orta', label: 'Standart Yalıtım', sub: 'Mantar Köpük' },
                { id: 'iyi', label: 'Yeni / Taşyünü', sub: 'A Sınıfı Verim' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setInsulation(item.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                    insulation === item.id
                      ? 'border-brand-700 bg-brand-50/70 text-brand-900 ring-2 ring-brand-700/20 font-bold'
                      : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hot Water Switch */}
          <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-200">
            <div>
              <span className="text-sm font-bold text-stone-800 block">Merkezi Sıcak Su (Boyler) Entegrasyonu</span>
              <span className="text-xs text-stone-500">Boyler eşanjörü için ek ısı yükü hesabı eklenir.</span>
            </div>
            <button
              type="button"
              onClick={() => setHotWater(!hotWater)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                hotWater ? 'bg-brand-700' : 'bg-stone-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  hotWater ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 flex flex-col justify-between border border-stone-800 shadow-inner">
          <div className="space-y-6">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Mühendislik Kapasite Analizi
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-black text-amber-400">{totalRequiredKW}</span>
                <span className="text-xl font-bold text-stone-300">kW Isıl Güç</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Toplam Isıtma Alanı: <strong className="text-white font-semibold">{(flats * unitArea).toLocaleString('tr-TR')} m²</strong>
              </p>
            </div>

            {/* Recommended Config */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block">
                Önerilen Sistem Mimarisi
              </span>
              <div className="p-4 bg-stone-800/90 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-base text-white">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  {recommendedSetup}
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Modülasyonlu sıra kontrol kartı ile kışın tüm modüller çalışırken, bahar aylarında sadece 1 modül devreye girer.
                </p>
              </div>
            </div>

            {/* Savings Box */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-stone-800/50 p-3 rounded-xl border border-stone-800">
                <span className="text-[11px] text-stone-400 block font-medium">Yakıt Tasarrufu</span>
                <span className="text-lg font-black text-emerald-400">%{estimatedSavings} Tasarruf</span>
              </div>
              <div className="bg-stone-800/50 p-3 rounded-xl border border-stone-800">
                <span className="text-[11px] text-stone-400 block font-medium">Tahmini Yıllık Kazanç</span>
                <span className="text-lg font-black text-amber-400">~{annualGasSavingTL.toLocaleString('tr-TR')} ₺/yıl</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 mt-6 space-y-3">
            <Button
              asChild
              className="w-full bg-brand-700 hover:bg-brand-600 text-white font-bold py-6 rounded-xl text-base shadow-lg shadow-brand-900/40"
            >
              <a
                href={`https://wa.me/905320000000?text=${encodeURIComponent(
                  `Merhaba, web sitenizdeki Kaskad Sihirbazından hesaplama yaptım. ${flats} Daire / ${unitArea}m² için ${totalRequiredKW} kW (${recommendedSetup}) teklifi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Bu Hesaplama İle Teklif Al
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-[11px] text-center text-stone-500">
              *Hesaplama Viessmann Vitodens ve Buderus Logamax mühendislik cetvellerine dayanmaktadır.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
