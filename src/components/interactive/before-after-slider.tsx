'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { SlidersHorizontal, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'

interface BeforeAfterItem {
  id: string
  title: string
  category: string
  description: string
  beforeImg: string
  afterImg: string
  metrics: { label: string; value: string }[]
}

const COMPARISONS: BeforeAfterItem[] = [
  {
    id: 'kaskad',
    title: 'Merkezi Kaskad Kazan & Kolektör Revizyonu',
    category: 'Kombi / Kaskad',
    description: 'Eski paslı, çürümüş ve su damlatan tesisatın sökülerek paslanmaz 0 km borulama ve yoğuşmalı kaskad dizilimine dönüştürülmesi.',
    beforeImg: '/images/cascade_before_leaking_v3.jpg',
    afterImg: '/images/cascade_heating_clean_v2.jpg',
    metrics: [
      { label: 'Yakıt Tasarrufu', value: '%32 Gaz Kazancı' },
      { label: 'Ses Düzeyi', value: '-35 dB Sessizlik' },
      { label: 'İşletme Ömrü', value: '+15 Yıl Garantili' },
    ],
  },
]

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const activeItem = COMPARISONS[0]
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      let percentage = (x / rect.width) * 100
      if (percentage < 0) percentage = 0
      if (percentage > 100) percentage = 100
      setSliderPosition(percentage)
    },
    []
  )

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  return (
    <div className="space-y-6">
      {/* Main Before/After Interactive Canvas */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 md:p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700 block">
              Geberit & Viega Dönüşüm Galerisi
            </span>
            <h3 className="text-xl font-black text-stone-900">{activeItem.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200 w-fit">
            <SlidersHorizontal className="h-4 w-4 text-brand-700" />
            <span>Çizgiyi Sağ/Sola Kaydırarak Karşılaştırın</span>
          </div>
        </div>

        {/* Interactive Comparison Box */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[320px] sm:h-[420px] w-full overflow-hidden rounded-xl cursor-ew-resize select-none border border-stone-200 shadow-inner group"
        >
          {/* AFTER IMAGE (Background - Full Width) */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={activeItem.afterImg}
              alt={`${activeItem.title} Sonrası`}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              priority
            />
            <span className="absolute top-4 right-4 bg-emerald-600/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-md shadow-md uppercase tracking-wider backdrop-blur-sm">
              Hızır Teknik Yenilenmiş (Sonra)
            </span>
          </div>

          {/* BEFORE IMAGE (Clipped Foreground) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden h-full"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative h-full w-[900px] max-w-[100vw]">
              <Image
                src={activeItem.beforeImg}
                alt={`${activeItem.title} Öncesi`}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover grayscale brightness-75"
                priority
              />
              <span className="absolute top-4 left-4 bg-red-600/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-md shadow-md uppercase tracking-wider backdrop-blur-sm">
                Eski / Deforme Tesisat (Önce)
              </span>
            </div>
          </div>

          {/* SLIDER DIVIDER HANDLE */}
          <div
            className="absolute inset-y-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="h-10 w-10 rounded-full bg-white border-2 border-brand-700 text-brand-700 shadow-xl flex items-center justify-center shrink-0 -ml-0.5">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {activeItem.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 bg-gradient-to-br from-stone-50 to-stone-100/80 rounded-xl border border-stone-200/80 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-700/10 text-brand-700 flex items-center justify-center shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-500 block uppercase">{m.label}</span>
                <span className="text-sm font-black text-stone-900">{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
