import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, SlidersHorizontal, ShieldCheck, Phone, CheckCircle2, Building2 } from 'lucide-react'
import { BeforeAfterSlider } from '@/components/interactive/before-after-slider'

export const revalidate = 3600 // Cache for 1 hour

export default async function GalleryPage() {
  const showcaseProjects = [
    {
      title: 'Merkezi Kaskad Dönüşümü (Sıfır Borulama)',
      location: 'Eryaman EKK Konutları',
      metric: '%34 Gaz Tasarrufu',
      desc: 'Eski paslı ve çürümüş döküm kazan sökülerek 3x90 kW duvar tipi yoğuşmalı kaskad sistem ve paslanmaz 0 km borulama kuruldu.',
      image: '/images/cascade_heating_clean_v2.jpg',
      badge: 'Kaskad Isıtma Projesi',
    },
    {
      title: 'Ana Su Şaftı & Basınç Yenileme',
      location: 'Çankaya Safir Rezidans',
      metric: '-35 dB Sessizlik',
      desc: 'Paslı çelik borular PPRC sızdırmaz borularla ve frekans kontrollü akıllı hidroforla yenilendi.',
      image: '/images/hydrophore_clean_v2.jpg',
      badge: 'Sıhhi Tesisat & Hidrofor',
    },
    {
      title: 'VRF İklimlendirme Altyapısı',
      location: 'Bilkent BR İş Merkezi',
      metric: 'A+++ Verimlilik',
      desc: 'Tüm kat iklimlendirme altyapısı merkezi otomasyon kontrollü VRF sistemi ile güncellendi.',
      image: '/images/vrf_clean_v2.jpg',
      badge: 'VRF İklimlendirme',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Top Hero Banner */}
      <section className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-stone-900 to-slate-950 text-white py-16 md:py-20 border-b border-stone-800 relative overflow-hidden">
        {/* Glow Lights */}
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" />
            Canlı Mühendislik & Tesisat Dönüşümleri
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Önce & Sonra Uygulama Galerisi
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Eski, paslı ve verimsiz kazan/tesisat sistemlerinin Hızır Teknik dokunuşu ile yüksek verimli kurumsal mühendislik çözümlerine dönüşümünü sürükleyerek inceleyin.
          </p>
        </div>
      </section>

      {/* Main Interactive Gallery Content */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-16">
        {/* Featured Before/After Interactive Slider Container */}
        <div className="bg-stone-900/90 rounded-3xl p-6 md:p-10 border border-stone-800 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
                Interaktif Karşılaştırıcı
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Kaskad Kazan & Tesisat Dönüşüm Simülasyonu
              </h2>
            </div>
            <span className="text-xs text-stone-400 font-medium bg-stone-800 px-3 py-1.5 rounded-xl border border-stone-700 w-fit">
              Çizgiyi Sağ / Sol Yönünde Sürükleyin
            </span>
          </div>

          <BeforeAfterSlider />
        </div>

        {/* Transformation Showcase Cards with Photos */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full inline-block">
              Saha Fotoğraf Galerisi
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Saha Uygulama Örnekleri & Fotoğraflar
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Ankara genelinde tamamladığımız kaskad, vrf ve tesisat dönüşüm projelerinden saha fotoğrafları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseProjects.map((item, idx) => (
              <div
                key={idx}
                className="group bg-stone-900/90 border border-stone-800 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Cover */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="text-xs font-extrabold text-blue-300 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30">
                        {item.metric}
                      </span>
                      <span className="text-[11px] font-bold text-stone-300 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-700">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold border-t border-stone-800">
                    <ShieldCheck className="h-4 w-4" />
                    <span>1 Yıl İşçilik & Orijinal Parça Garantili</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Trust Footer Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-stone-900 via-stone-900 to-blue-950 rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
              Saha Keşif Talebi
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Binanızın Tesisat Dönüşüm Raporunu Alın
            </h3>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
              Mevcut kazan daireniz veya tesisatınız için yerinde inceleme yapıp Before/After dönüşüm raporunuzu hazırlayalım.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-4 rounded-xl shadow-xl transition-all shrink-0"
          >
            <Phone className="h-4 w-4" />
            <span>Keşif İste</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
