'use server'
import { getCachedGlobal } from '@/lib/get-global'
import React, { Suspense } from 'react'
import Header from './header'

export const HeaderServer = async () => {
  const siteSettings = await getCachedGlobal('site-settings', 1)()

  return (
    <Suspense fallback={null}>
      <Header siteSettings={siteSettings} />
    </Suspense>
  )
}

export default HeaderServer
