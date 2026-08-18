import Link from 'next/link'
import { Sparkles, Building2, ShieldCheck, CheckCircle2, Award, ChevronRight, Phone } from 'lucide-react'
import { ReferenceMatrix } from '@/components/interactive/reference-matrix'

export const revalidate = 3600 // Cache for 1 hour

export default async function ReferencesPage() {
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
            500+ Büyük Ölçekli Kurumsal & B2B Referans Portföyü
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Kurumsal Referanslarımız & Proje Matrisi
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Ankara&apos;nın önde gelen toplu konut siteleri, hastaneleri, rezidansları ve kamu kurumlarında hayata geçirdiğimiz mühendislik ve iklimlendirme projeleri.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-16">
        {/* Interactive Reference Matrix Container */}
        <div className="bg-stone-900/90 rounded-3xl p-6 md:p-8 border border-stone-800 shadow-2xl backdrop-blur-xl">
          <ReferenceMatrix />
        </div>

        {/* Corporate Trust Footer Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-stone-900 via-stone-900 to-blue-950 rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
              Kurumsal Mühendislik Çözümleri
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Projeniz İçin Keşif & Şartname Raporu
            </h3>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
              Siteleriniz, binalarınız veya endüstriyel tesisleriniz için kaskad, vrf ve altyapı ihtiyaçlarınızı yerinde inceleyerek detaylı keşif raporu hazırlıyoruz.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-4 rounded-xl shadow-xl transition-all shrink-0"
          >
            <Phone className="h-4 w-4" />
            <span>Kurumsal İletişime Geçin</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
