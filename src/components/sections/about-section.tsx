'use client'

import { ShieldCheck, Award, Sparkles } from 'lucide-react'

export default function AboutSectionBlock({ content }: any) {
  const stats = [
    { value: '+25 Yıl', label: 'Yıllık Deneyim', color: 'text-blue-400' },
    { value: '%100', label: 'Garantili & Faturalı Hizmet', color: 'text-emerald-400' },
    { value: '+500', label: 'Mutlu Müşteri & Referans', color: 'text-sky-400' },
    { value: '7/24', label: 'Nöbetçi Mobil Servis Ekibi', color: 'text-amber-400' },
  ]

  return (
    <section className="w-full bg-slate-950 text-white py-16 md:py-24 border-b border-stone-800 relative overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Çeyrek Asırlık Mühendislik Gücü
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Kalite & Garanti Standartlarımız
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            Ankara genelinde 25 yılı aşkın süredir bireysel ve endüstriyel tesisat, iklimlendirme ve yapı projelerini yüksek kalite standartları ile yönetiyoruz.
          </p>
        </div>

        {/* 4 Stats Grid (from Image 1) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-stone-900/90 rounded-3xl border border-stone-800 shadow-2xl backdrop-blur-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5 text-center sm:text-left border-r last:border-r-0 border-stone-800/80 pr-4 last:pr-0">
              <div className={`text-3xl sm:text-4xl font-black ${stat.color} tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-300 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
