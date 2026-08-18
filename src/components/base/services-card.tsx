import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { IconCircleCheck } from '@tabler/icons-react'
import { icons } from './icons'
import Link from 'next/link'
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Flame, Droplets, Zap, Sprout, Waves } from 'lucide-react'
import { Button } from '../ui/button'
import { Media } from '@/payload-types'

interface ServiceCardProps {
  title: string
  icon: keyof typeof icons
  services: { title: string; slug: string }[]
  url?: string
  image?: Media
}

// Category design themes for serene, trustworthy, and joyful aesthetics
const getCategoryTheme = (title: string) => {
  const lower = title.toLowerCase()
  if (lower.includes('ısıtma') || lower.includes('klima') || lower.includes('kombi')) {
    return {
      gradient: 'from-amber-600/90 via-blue-900/90 to-slate-950',
      badge: '25 Yıl Mühendislik Garantisi',
      iconBg: 'bg-gradient-to-br from-amber-500 to-brand-600 text-white',
      accentColor: 'text-amber-600',
    }
  }
  if (lower.includes('su') || lower.includes('tesisat')) {
    return {
      gradient: 'from-blue-700/90 via-emerald-900/90 to-slate-950',
      badge: '%100 Sızdırmazlık Güvencesi',
      iconBg: 'bg-gradient-to-br from-blue-600 to-emerald-600 text-white',
      accentColor: 'text-emerald-600',
    }
  }
  if (lower.includes('havuz')) {
    return {
      gradient: 'from-cyan-600/90 via-blue-950/90 to-slate-950',
      badge: 'A+ Hijyenik Arıtma & Bakım',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-700 text-white',
      accentColor: 'text-cyan-600',
    }
  }
  if (lower.includes('elektrik')) {
    return {
      gradient: 'from-amber-500/90 via-stone-900/90 to-slate-950',
      badge: 'Akım Korumalı Güvenli Pano',
      iconBg: 'bg-gradient-to-br from-amber-400 to-brand-700 text-white',
      accentColor: 'text-amber-500',
    }
  }
  if (lower.includes('sulama')) {
    return {
      gradient: 'from-emerald-600/90 via-teal-950/90 to-slate-950',
      badge: 'Otomatik Akıllı Bahçe Sulama',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white',
      accentColor: 'text-emerald-600',
    }
  }

  return {
    gradient: 'from-blue-800/90 via-slate-900/90 to-slate-950',
    badge: 'Uzman Teknik Servis Çözümü',
    iconBg: 'bg-brand-600 text-white',
    accentColor: 'text-brand-600',
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

export function ServiceCard({ title, icon, services, image, url }: ServiceCardProps) {
  const Icon = icons[icon as keyof typeof icons] || icons.ayarlar
  const theme = getCategoryTheme(title)
  const categoryImgSrc = image?.url || getCategoryFallbackImage(title)

  return (
    <Card className="group h-full shadow-sm hover:shadow-2xl border border-stone-200/90 rounded-3xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between bg-white">
      <div>
        {/* Serene Category Header Banner */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-950">
          <Image
            src={categoryImgSrc}
            alt={image?.alt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-90 transition-opacity duration-300`} />

          {/* Top Badge */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[11px] font-extrabold shadow-md border border-white/40">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
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
                {title}
              </h3>
              <span className="text-[11px] text-stone-300 font-medium block mt-0.5">
                {services?.length || 0} İhtisası kapsar
              </span>
            </div>
          </div>
        </div>

        {/* Services Checklist */}
        <CardContent className="space-y-3.5 p-6">
          {services?.length > 0 && (
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2.5 group/item">
                  <IconCircleCheck className={`mt-0.5 h-4 w-4 flex-shrink-0 ${theme.accentColor} group-hover/item:scale-110 transition-transform`} />
                  <Link
                    href={`/ankara/${service.slug}`}
                    className="text-xs font-semibold text-stone-700 hover:text-brand-700 hover:underline transition-colors leading-relaxed"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 space-y-3">
        <Button
          asChild
          className="w-full bg-stone-900 hover:bg-brand-700 text-white font-extrabold text-xs py-5 rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg"
        >
          <Link href={url || '/'} className="flex items-center justify-center gap-2">
            <span>Tüm Hizmet Detaylarını İncele</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 font-medium">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>7/24 Ankara Genel Keşif & Servis Garantisi</span>
        </div>
      </div>
    </Card>
  )
}
