import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Award, Users, Wrench, Clock, CheckCircle2, Sparkles, Building2, ChevronRight, Phone } from 'lucide-react'

export const revalidate = 3600 // Cache for 1 hour

export default async function AboutUsPage() {
  const statsList = [
    {
      value: '+25 Yıl',
      title: '+25 Yıllık Deneyim & İklimlendirme Uzmanlığı',
      description:
        'Ankara genelinde 25 yılı aşkın süredir bireysel konutlardan dev endüstriyel tesislere kadar binlerce başarılı iklimlendirme, kaskad, vrf ve tesisat projesini sıfır hata prensibi ile tamamladık.',
      badge: 'Çeyrek Asırlık Tecrübe',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/10',
    },
    {
      value: '%100',
      title: 'Garantili & Faturalı Hizmet Standartları',
      description:
        'Gerçekleştirilen tüm tamirat, bakım, montaj ve yenileme işlemlerinde TSE belgeli 1. sınıf materyaller ve orijinal yedek parçalar kullanılır. Yapılan her işçilik 1 yıl yazılı garantimiz altındadır.',
      badge: 'Şeffaf & Belgeli İşçilik',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-500/10',
    },
    {
      value: '+500',
      title: 'Mutlu Müşteri & Zengin Kurumsal Referans Ağı',
      description:
        'Kamu kurumları, toplu konut siteleri, hastaneler, rezidanslar ve oteller da dahil olmak üzere 500’den fazla büyük ölçekli kurumsal referans ile Ankara’da güvenin ve kalitenin adresi olduk.',
      badge: 'Geniş Referans Portföyü',
      color: 'text-sky-400',
      borderColor: 'border-sky-500/30',
      bgColor: 'bg-sky-500/10',
    },
    {
      value: '7/24',
      title: 'Nöbetçi Mobil Servis Ekibi & Hızlı Keşif',
      description:
        'Ankara’nın 6 farklı stratejik merkezinde hazır bekleyen nöbetçi teknik araçlarımız ile acil su kaçağı, kaskad kazan arızası veya radyatör sorunlarına 30 dakika içinde yerinde müdahale ediyoruz.',
      badge: '7/24 Kesintisiz Müdahale',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      bgColor: 'bg-amber-500/10',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Page Hero Header */}
      <section className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-stone-900 to-slate-950 text-white py-16 md:py-20 border-b border-stone-800 relative overflow-hidden">
        {/* Glow Lights */}
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" />
            Ankara&apos;nın 25+ Yıllık Mühendislik & Teknik Servis Devı
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Çeyrek Asırlık Mühendislik Gücü
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Hızır Teknik; kurumsal disiplin ile usta işçiliği birleştirerek binalarınızın ve endüstriyel tesislerinizin teknik operasyonlarını sıfır hata prensibi ile yürütmektedir.
          </p>

          {/* Clean V2 Hero Image Showcase */}
          <div className="pt-6 max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
              <Image
                src="/images/hero_hvac_clean_v2.jpg"
                alt="Hızır Teknik Kurumsal Mühendislik ve İklimlendirme Santrali"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-stone-300">
                <span className="font-extrabold text-white bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-700">
                  TSE Belgeli Kurumsal İklimlendirme Santralimiz
                </span>
                <span className="hidden sm:inline-block font-semibold text-emerald-400">
                  ✓ %100 Garantili ve Belgeli İşçilik
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Stacked Stats & Detailed Features Section */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full inline-block">
            Kurumsal Standartlarımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Kalite ve Garanti Standartlarımız
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            Yapılan her mühendislik işlemi Hızır Teknik güvencesi altında 1 yıl işçilik garantilidir.
          </p>
        </div>

        {/* Stacked Vertical Items */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {statsList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-stone-900/80 border border-stone-800 rounded-3xl backdrop-blur-xl shadow-xl hover:border-stone-700 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group"
            >
              {/* Left Stat Box */}
              <div className="shrink-0 flex flex-col items-center justify-center p-4 min-w-[140px] rounded-2xl bg-stone-950 border border-stone-800 text-center">
                <span className={`text-4xl sm:text-5xl font-black ${item.color} tracking-tight`}>
                  {item.value}
                </span>
                <span className={`text-[10px] font-extrabold uppercase tracking-widest mt-1 px-2 py-0.5 rounded-full ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                  {item.badge}
                </span>
              </div>

              {/* Right Content */}
              <div className="space-y-2 flex-1">
                <h3 className="text-lg md:text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Commitment Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-stone-900 via-stone-900 to-blue-950 rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl max-w-4xl mx-auto">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
              Garantili Hizmet Sözü
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              7/24 Kesintisiz Keşif & Servis Desteği
            </h3>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
              Tüm projelerimizde TSE standartlarına uygun, 1. sınıf belgeli materyaller ve orijinal yedek parçalar kullanıyoruz. Güvenlik ve enerji verimliliği öncelikli kriterimizdir.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-4 rounded-xl shadow-xl transition-all shrink-0"
          >
            <Phone className="h-4 w-4" />
            <span>Hemen İletişime Geçin</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
