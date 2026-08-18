import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Media } from '@/payload-types'
import { icons } from '@/components/base/icons'
import { Card, CardContent } from '@/components/ui/card'
import { IconCircleCheck } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

export const revalidate = 3600 // Cache for 1 hour

const getCategoryTheme = (title: string) => {
  const lower = title.toLowerCase()
  if (lower.includes('ısıtma') || lower.includes('klima') || lower.includes('kombi')) {
    return {
      gradient: 'from-amber-600/90 via-blue-900/90 to-slate-950',
      badge: '25 Yıl Isıl Verim & Garanti',
      iconBg: 'bg-gradient-to-br from-amber-500 to-blue-700 text-white',
      accentColor: 'text-amber-400',
    }
  }
  if (lower.includes('su') || lower.includes('tesisat')) {
    return {
      gradient: 'from-blue-700/90 via-emerald-900/90 to-slate-950',
      badge: '%100 Sızdırmazlık Güvencesi',
      iconBg: 'bg-gradient-to-br from-blue-600 to-emerald-600 text-white',
      accentColor: 'text-emerald-400',
    }
  }
  if (lower.includes('havuz')) {
    return {
      gradient: 'from-cyan-600/90 via-blue-950/90 to-slate-950',
      badge: 'A+ Hijyenik Arıtma & Bakım',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-700 text-white',
      accentColor: 'text-cyan-400',
    }
  }
  if (lower.includes('elektrik')) {
    return {
      gradient: 'from-amber-500/90 via-stone-900/90 to-slate-950',
      badge: 'Akım Korumalı Güvenli Pano',
      iconBg: 'bg-gradient-to-br from-amber-400 to-blue-800 text-white',
      accentColor: 'text-amber-400',
    }
  }
  if (lower.includes('sulama')) {
    return {
      gradient: 'from-emerald-600/90 via-teal-950/90 to-slate-950',
      badge: 'Otomatik Akıllı Bahçe Sulama',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white',
      accentColor: 'text-emerald-400',
    }
  }

  return {
    gradient: 'from-blue-800/90 via-slate-900/90 to-slate-950',
    badge: 'Uzman Teknik Servis Çözümü',
    iconBg: 'bg-blue-600 text-white',
    accentColor: 'text-blue-400',
  }
}

const getCategoryFallbackImage = (title: string) => {
  const lower = title.toLowerCase()
  if (lower.includes('havuz')) return '/images/pool_system_clean_v2.jpg'
  if (lower.includes('sulama')) return '/images/sprinkler_irrigation_clean_v2.jpg'
  if (lower.includes('elektrik') || lower.includes('pano') || lower.includes('akım')) return '/images/electrical_panel_clean_v2.jpg'
  if (lower.includes('hidrofor') || lower.includes('arıtma') || lower.includes('depo')) return '/images/hydrophore_clean_v2.jpg'
  if (lower.includes('ısı pompası') || lower.includes('pompası')) return '/images/heat_pump_clean_v2.jpg'
  if (lower.includes('klima') || lower.includes('vrf') || lower.includes('vrv')) return '/images/vrf_clean_v2.jpg'
  if (lower.includes('kaskad') || lower.includes('ısıtma') || lower.includes('kazan') || lower.includes('kalorifer')) return '/images/cascade_heating_clean_v2.jpg'
  if (lower.includes('su') || lower.includes('tesisat') || lower.includes('kaçak') || lower.includes('gider')) return '/images/thermal_camera_only_v2.jpg'
  return '/images/hero_hvac_clean_v2.jpg'
}

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })

  const [categoriesResult, servicesResult] = await Promise.all([
    payload.find({
      collection: 'service-categories',
      limit: 100,
      where: { _status: { equals: 'published' } },
    }),
    payload.find({
      collection: 'services',
      limit: 1000,
      where: { _status: { equals: 'published' } },
    }),
  ])

  const categories = categoriesResult.docs
  const services = servicesResult.docs

  const categoriesWithServices = categories.map((category) => {
    const servicesInCategory = services.filter(
      (service) =>
        typeof service.related_category === 'object' &&
        service.related_category?.id === category.id,
    )
    return {
      ...category,
      servicesList: servicesInCategory,
    }
  })

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
            25+ Yıllık Yetkili Mühendislik & İklimlendirme Standartları
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Geniş Hizmet & Mühendislik Yelpazemiz
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Kaskad ısıtma, VRF klima, sıhhi tesisat, hidrofor ve bahçe sulama sistemlerinde Ankara genelinde garantili, huzur veren ve şeffaf çözümler.
          </p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithServices.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons] || icons.ayarlar
            const categoryImage = category.featured_image as Media | null | undefined
            const theme = getCategoryTheme(category.title)

            return (
              <Card
                key={category.id}
                className="group h-full shadow-xl border border-stone-800 rounded-3xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between bg-stone-900/90 backdrop-blur-xl"
              >
                <div>
                  {/* Category Image Cover */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={categoryImage?.url || getCategoryFallbackImage(category.title)}
                      alt={categoryImage?.alt || category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-90 transition-opacity duration-300`} />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-white text-[11px] font-extrabold shadow-md border border-stone-700">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                        {theme.badge}
                      </span>
                    </div>

                    {/* Category Title & Icon */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5 z-10">
                      <div className={`h-12 w-12 rounded-2xl ${theme.iconBg} flex items-center justify-center shadow-xl shrink-0 border border-white/20 group-hover:rotate-3 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white tracking-tight leading-snug drop-shadow-md">
                          {category.title}
                        </h3>
                        <span className="text-[11px] text-stone-300 font-medium block mt-0.5">
                          {category.servicesList?.length || 0} İhtisası kapsar
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Services List Grid */}
                  <CardContent className="p-6 space-y-4">
                    <p className="text-xs text-stone-400 font-medium leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    {category.servicesList?.length > 0 ? (
                      <ul className="space-y-2.5 pt-2">
                        {category.servicesList.map((service) => (
                          <li key={service.id} className="flex items-start gap-2.5 group/item">
                            <IconCircleCheck className={`mt-0.5 h-4 w-4 flex-shrink-0 ${theme.accentColor} group-hover/item:scale-110 transition-transform`} />
                            <Link
                              href={`/ankara/${service.slug}`}
                              className="text-xs font-semibold text-stone-200 hover:text-blue-400 hover:underline transition-colors leading-relaxed"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-stone-500">Bu kategoride henüz hizmet bulunmuyor.</p>
                    )}
                  </CardContent>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-5 rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg"
                  >
                    <Link href={`/ankara/${category.slug}`} className="flex items-center justify-center gap-2">
                      <span>Kategori Detaylarını İncele</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>7/24 Ankara Genel Keşif & Servis Garantisi</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
