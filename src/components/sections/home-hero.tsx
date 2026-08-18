'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Wrench, ShieldCheck, Zap, Award, CheckCircle2 } from 'lucide-react'
import { TextLoop } from '../ui/text-loop'
import { FormBlock, Media, Service } from '@/payload-types'
import { FormBlock as Form } from '../blocks/Form/Component'
import { icons } from '../base/icons'

interface HomeHeroProps {
  headingRotation?:
    | {
        text: string
        id?: string | null
      }[]
    | null
  subHeading: string
  description?: string | null
  featuredServices: (number | Service)[]
  servicesLink?: {
    text?: string | null
    url?: string | null
  }
  images: {
    mainImage: number | Media
    secondaryImage: number | Media
  }
  ctaForm?: FormBlock
}

export default function HomeHero({
  headingRotation,
  subHeading,
  description,
  ctaForm,
}: HomeHeroProps) {
  return (
    <section className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-stone-900 to-stone-950 text-white py-16 md:py-24 border-b border-stone-800 relative overflow-hidden">
      {/* Glow lights */}
      <div className="absolute top-0 left-1/4 -mt-24 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -mb-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-0 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Column - Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 text-stone-300 text-xs font-bold w-fit shadow-inner">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-stone-200">Ankara&apos;nın 25+ Yıllık Kurumsal Mühendislik Ekibi</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {headingRotation && headingRotation.length > 0 ? (
                <TextLoop interval={3}>
                  {headingRotation.map((heading) => (
                    <span key={heading.id} className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-300 to-emerald-400">
                      {heading.text}
                    </span>
                  ))}
                </TextLoop>
              ) : null}
              <span className="block text-2xl sm:text-3xl font-extrabold text-stone-200 mt-3 font-sans">
                {subHeading}
              </span>
            </h1>
            {description && (
              <p className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed font-normal">
                {description}
              </p>
            )}
          </div>

          {/* Key Trust Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-800/80">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-brand-400">+25 Yıl</div>
              <div className="text-xs text-stone-400 font-medium">Yıllık Deneyim</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">%100</div>
              <div className="text-xs text-stone-400 font-medium">Garantili & Faturalı Hizmet</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">+500</div>
              <div className="text-xs text-stone-400 font-medium">Mutlu Müşteri & Referans</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">7/24</div>
              <div className="text-xs text-stone-400 font-medium">Nöbetçi Mobil Servis Ekibi</div>
            </div>
          </div>
        </div>

        {/* Right Column - Glassmorphic Form Card */}
        <div className="w-full lg:w-5/12 flex items-center justify-center relative z-10">
          <div className="w-full max-w-md bg-stone-900/90 backdrop-blur-xl border border-stone-800 rounded-2xl shadow-2xl p-2 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 via-transparent to-emerald-500/10 pointer-events-none" />
            {/* @ts-expect-error @ts-ignore */}
            <Form form={ctaForm} isInHomePage={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
