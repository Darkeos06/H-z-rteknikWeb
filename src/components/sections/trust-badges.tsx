import { BadgeCheck, Shield, Clock } from 'lucide-react'

export function TrustBadges() {
  return (
    <div className="bg-stone-50 border-y py-4">
      <div className="container flex flex-wrap justify-center gap-6 md:gap-8 items-center px-4 md:px-0">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
          <span className="font-medium text-stone-700">25 Yıl Tecrübe</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <span className="font-medium text-stone-700">Garantili İşçilik</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Clock className="h-5 w-5 text-brand-600 flex-shrink-0" />
          <span className="font-medium text-stone-700">7/24 Acil Servis</span>
        </div>
      </div>
    </div>
  )
}
