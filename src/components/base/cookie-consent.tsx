'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay to prevent banner flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    closeBanner()
    // Trigger analytics consent event if needed
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    closeBanner()
    // Trigger analytics rejection event if needed
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  const closeWithoutChoice = () => {
    // Temporary close - will show again on next visit
    closeBanner()
  }

  const closeBanner = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowBanner(false)
      setIsClosing(false)
    }, 300)
  }

  if (!showBanner) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isClosing ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-stone-900 border-t border-stone-700 shadow-2xl">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 pr-4">
              <h3 className="text-base text-white font-semibold md:text-lg mb-2">
                Çerez Kullanımı
              </h3>
              <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                Web sitemizde deneyiminizi geliştirmek ve site performansını analiz etmek için
                çerezler kullanıyoruz. Çerezleri kabul ederek, site kullanımınızı analiz etmemize
                izin vermiş olursunuz. Daha fazla bilgi için{' '}
                <Link
                  href="/gizlilik-politikasi"
                  className="text-brand-400 hover:text-brand-300 underline font-medium"
                >
                  Gizlilik Politikası
                </Link>
                &apos;mızı inceleyebilirsiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={handleReject}
                variant="outline"
                className="bg-transparent border-stone-600 text-white hover:bg-stone-800 hover:text-white order-2 sm:order-1"
                size="sm"
              >
                Reddet
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-brand-700 hover:bg-brand-800 text-white order-1 sm:order-2"
                size="sm"
              >
                Kabul Et
              </Button>
            </div>

            <button
              onClick={closeWithoutChoice}
              className="absolute top-2 right-2 md:relative md:top-0 md:right-0 text-stone-400 hover:text-white transition-colors p-2"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getCookieConsent(): 'accepted' | 'rejected' | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('cookie-consent') as 'accepted' | 'rejected' | null
}

export function hasCookieConsent(): boolean {
  return getCookieConsent() === 'accepted'
}
