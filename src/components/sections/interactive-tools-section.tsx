'use client'

import { useState } from 'react'
import { Flame, SlidersHorizontal, Sparkles } from 'lucide-react'
import { CascadeCalculator } from '@/components/interactive/cascade-calculator'
import { BeforeAfterSlider } from '@/components/interactive/before-after-slider'

export function InteractiveToolsSection() {
  const [activeTab, setActiveTab] = useState<'cascade' | 'beforeafter'>('cascade')

  return (
    <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Viessmann, Buderus & Geberit Standartlarında Mühendislik Suiti
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Akıllı Mühendislik & İklimlendirme Araçları
          </h2>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed">
            Kaskad ısıtma gücünü hesaplayın veya canlı Önce/Sonra dönüşümlerini inceleyin.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            {
              id: 'cascade',
              label: 'Kaskad Isıtma Gücü Sihirbazı',
              sub: 'Viessmann / Buderus İlhamlı',
              icon: Flame,
            },
            {
              id: 'beforeafter',
              label: 'Önce / Sonra Kaydırmalı Galerisi',
              sub: 'Geberit / Viega İlhamlı',
              icon: SlidersHorizontal,
            },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                  isActive
                    ? 'bg-blue-700 border-blue-500 text-white shadow-xl shadow-blue-900/50 scale-105 font-bold'
                    : 'bg-stone-800/80 border-stone-700/80 text-stone-300 hover:bg-stone-800 hover:border-stone-600'
                }`}
              >
                <div
                  className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-700 text-stone-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold leading-tight">{tab.label}</div>
                  <div className={`text-[10px] sm:text-[11px] mt-0.5 font-medium ${isActive ? 'text-blue-200' : 'text-stone-500'}`}>
                    {tab.sub}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Tool Renderer */}
        <div className="transition-all duration-300 pt-2">
          {activeTab === 'cascade' && <CascadeCalculator />}
          {activeTab === 'beforeafter' && (
            <div className="bg-stone-900/90 rounded-2xl p-6 md:p-8 text-white border border-stone-800 shadow-2xl">
              <BeforeAfterSlider />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
