'use client'

import { useState } from 'react'
import { PhoneCall, MessageSquare, Wrench, ChevronDown, ChevronUp, Clock, AlertTriangle, ShieldCheck } from 'lucide-react'

export function EmergencyFloatingBar() {
  const [isMinimized, setIsMinimized] = useState<boolean>(false)

  const phoneNumber = '05407751250'
  const formattedPhone = '0540 775 12 50'

  return (
    <aside
      aria-label="Acil Müdahale ve Servis Çağrısı"
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 pb-safe pointer-events-auto"
    >
      {/* Minimized Toggle Pill */}
      {isMinimized ? (
        <div className="container max-w-screen-xl mx-auto px-4 pb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-2 bg-stone-900 text-white text-xs font-extrabold px-4 py-2.5 rounded-full shadow-2xl border border-stone-700 hover:bg-brand-700 transition-all cursor-pointer min-h-[48px]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>7/24 Acil Müdahale Çağır</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      ) : (
        /* Full High-Conversion Floating Bar */
        <div className="bg-stone-950/95 backdrop-blur-xl border-t border-stone-800 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
          <div className="container max-w-screen-xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Status Info */}
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <AlertTriangle className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                      7/24 Acil Servis & Nöbetçi Ekip Aktif (Ankara)
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 font-medium hidden md:block mt-0.5">
                    Kaskad arızası, su kaçağı, hidrofor durması ve patlayan tesisatlar için 60 dk mobil ulaşım.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-stretch sm:justify-end">
                {/* Call Button */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-lg transition-all min-h-[48px] border border-blue-400/30"
                >
                  <PhoneCall className="h-4 w-4 shrink-0" />
                  <span>Hemen Ara: {formattedPhone}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/905407751250?text=${encodeURIComponent(
                    'Merhaba, 7/24 Acil Müdahale Ekibinden adresime teknik servis talep ediyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-lg transition-all min-h-[48px] border border-emerald-400/30"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Arıza Bildir</span>
                </a>

                {/* Minimize button */}
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  aria-label="Kapat"
                  className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors hidden sm:flex items-center justify-center min-h-[48px] min-w-[48px]"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
