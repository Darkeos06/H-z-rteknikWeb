'use client'

import { ShieldCheck, Award, Sparkles } from 'lucide-react'

export default function AboutSectionBlock({ content, blockType }: any) {
  const stats = [
    { value: '+25 Yıl', label: 'Yıllık Deneyim', color: 'text-blue-400' },
    { value: '%100', label: 'Garantili & Faturalı Hizmet', color: 'text-emerald-400' },
    { value: '+500', label: 'Mutlu Müşteri & Referans', color: 'text-sky-400' },
    { value: '7/24', label: 'Nöbetçi Mobil Servis Ekibi', color: 'text-amber-400' },
  ]

  const featureList = [
    { title: 'Sertifikalı Ustalık', description: 'Tüm kadromuz mesleki yeterlilik ve yetkili mühendislik belgelerine sahiptir.' },
    { title: 'Geniş Mobil Ağ', description: 'Ankara genelinde 6 farklı merkezden 30 dk içinde adrese servis ulaşımı.' },
    { title: 'Garantili Onarım', description: 'Onarılan her arıza ve değişen orijinal yedek parçada 1 yıl yazılı garanti.' },
    { title: 'Hızlı Keşif Raporu', description: 'Karmaşık kaskad, vrf ve tadilat projelerinde ücretsiz yerinde teknik keşif.' },
  ]

  return (
    <section className="w-full bg-slate-950 text-white py-16 md:py-24 border-b border-stone-800 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Çeyrek Asırlık Mühendislik Gücü
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Kalite ve Garanti Standartlarımız
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            Ankara genelinde 25 yılı aşkın süredir bireysel ve endüstriyel tesisat, iklimlendirme ve elektrik altyapı projelerini sıfır hata prensibi ile yürütüyoruz.
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

        {/* 4 Feature Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-900/70 border border-stone-800 rounded-2xl space-y-3 hover:border-blue-500/50 hover:bg-stone-900 transition-all duration-300 shadow-lg group"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-extrabold text-white">{item.title}</h3>
              <p className="text-xs text-stone-400 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
