import { getCachedGlobal } from '@/lib/get-global'
import React from 'react'
import { WhatsAppButton } from './whatsapp-button'

const WhatsAppButtonServer = async () => {
  const siteSettings = await getCachedGlobal('site-settings', 1)()

  // Only render if WhatsApp number exists
  if (!siteSettings?.contact?.whatsapp) {
    return null
  }

  return <WhatsAppButton phoneNumber={siteSettings.contact.whatsapp} />
}

export default WhatsAppButtonServer
