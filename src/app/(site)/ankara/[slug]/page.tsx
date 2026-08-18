import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, ShieldCheck, Phone, CheckCircle2, ChevronRight, ArrowLeft, MessageSquare } from 'lucide-react'
import { Media } from '@/payload-types'
import { FormBlock as Form } from '@/components/blocks/Form/Component'

export const revalidate = 3600 // Cache for 1 hour

const getCategoryFallbackImage = (title: string, slug: string) => {
  const lower = (title + ' ' + slug).toLowerCase()
  if (lower.includes('havuz')) return '/images/pool_system_clean_v2.jpg'
  if (lower.includes('sulama')) return '/images/sprinkler_irrigation_clean_v2.jpg'
  if (lower.includes('elektrik') || lower.includes('pano') || lower.includes('akım') || lower.includes('kablo') || lower.includes('sigorta')) return '/images/electrical_panel_clean_v2.jpg'
  if (lower.includes('hidrofor') || lower.includes('arıtma') || lower.includes('depo') || lower.includes('basınç')) return '/images/hydrophore_clean_v2.jpg'
  if (lower.includes('ısı pompası') || lower.includes('pompası')) return '/images/heat_pump_clean_v2.jpg'
  if (lower.includes('klima') || lower.includes('vrf') || lower.includes('vrv')) return '/images/vrf_clean_v2.jpg'
  if (lower.includes('kaskad') || lower.includes('ısıtma') || lower.includes('kazan') || lower.includes('kalorifer') || lower.includes('kombi') || lower.includes('yerden')) return '/images/cascade_heating_clean_v2.jpg'
  if (lower.includes('su') || lower.includes('tesisat') || lower.includes('kaçak') || lower.includes('gider') || lower.includes('tamir')) return '/images/thermal_camera_only_v2.jpg'
  return '/images/hero_hvac_clean_v2.jpg'
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const payload = await getPayload({ config: configPromise })

  const [categoriesResult, servicesResult, formResult] = await Promise.all([
    payload.find({
      collection: 'service-categories',
      where: { slug: { equals: slug } },
      limit: 1,
    }),
    payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    }),
    payload.find({
      collection: 'forms',
      limit: 1,
    }),
  ])

  const category = categoriesResult.docs[0]
  const service = servicesResult.docs[0]
  const ctaForm = formResult.docs[0]

  if (!category && !service) {
    notFound()
  }

  const title = category?.title || service?.title || ''
  const description = category?.description || service?.meta?.description || 'Hızır Teknik yetkili mühendislik ve tamirat çözümleri.'
  const image = (category?.featured_image || service?.featured_image) as Media | null | undefined
  const detailImgSrc = image?.url || getCategoryFallbackImage(title, slug)

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Detail Page Hero Banner */}
      <section className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-stone-900 to-slate-950 text-white py-16 md:py-20 border-b border-stone-800 relative overflow-hidden">
        {/* Glow Lights */}
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 space-y-4 relative z-10">
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full w-fit"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Tüm Hizmetlerimize Dön</span>
          </Link>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Ankara {title}
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Detail Content Grid */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900">
              <Image
                src={detailImgSrc}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-extrabold shadow-lg">
                  TSE Yetkili Mühendislik Hizmeti
                </span>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="p-6 sm:p-8 bg-stone-900/80 border border-stone-800 rounded-3xl space-y-4 backdrop-blur-xl shadow-xl">
              <h2 className="text-xl font-extrabold text-white">
                {title} Hizmet Standartlarımız
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-300 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>1 Yıl Koşulsuz Yazılı İşçilik & Orijinal Parça Garantisi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Ankara Genelinde 30 Dakika İçinde Acil Mobil Nöbetçi Ekip Ulaşımı</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                  <span>%20 KDV Dâhil Şeffaf Faturasyon ve Matrah Garantisi</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Quoting Form Card with WhatsApp Button */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-stone-900/90 backdrop-blur-xl border border-stone-800 rounded-3xl p-6 shadow-2xl space-y-5">
              <div className="space-y-1 text-center">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400">
                  Hızlı Keşif & Teklif Talebi
                </span>
                <h3 className="text-xl font-black text-white">Anında Servis Çağır</h3>
                <p className="text-xs text-stone-400">
                  Formu doldurun veya WhatsApp&apos;tan 7/24 direkt yazın.
                </p>
              </div>

              {/* WhatsApp Direct Redirection Button */}
              <a
                href={`https://wa.me/905407751250?text=Merhaba%2C%20${encodeURIComponent(title)}%20hizmeti%20i%C3%A7in%20servis%20ve%20ke%C5%9Fif%20talebinde%20bulunmak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl shadow-lg transition-all border border-emerald-400/30 group"
              >
                <MessageSquare className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp ile Hızlı Servis / Teklif Al (7/24)</span>
              </a>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-stone-800" />
                <span className="flex-shrink mx-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">veya Formu Doldurun</span>
                <div className="flex-grow border-t border-stone-800" />
              </div>

              {/* @ts-expect-error @ts-ignore */}
              <Form form={ctaForm} isInHomePage={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
