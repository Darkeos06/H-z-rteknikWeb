import { getCachedGlobal } from '@/lib/get-global'
import React, { Suspense } from 'react'
import Footer from './footer'

const FooterServer = async () => {
  const siteSettings = await getCachedGlobal('site-settings', 1)()

  return (
    <Suspense fallback={<FooterFallback />}>
      <Footer siteSettings={siteSettings} />
    </Suspense>
  )
}

// Simple fallback component while footer is loading
const FooterFallback = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container px-4 py-12 md:py-16 md:pt-24">
        <div className="animate-pulse h-40 bg-stone-800 rounded-lg"></div>
      </div>
    </footer>
  )
}

export default FooterServer
