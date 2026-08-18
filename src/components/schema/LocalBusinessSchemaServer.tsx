import { getCachedGlobal } from '@/lib/get-global'
import { LocalBusinessSchema } from './LocalBusinessSchema'

export async function LocalBusinessSchemaServer() {
  const siteSettings = await getCachedGlobal('site-settings', 1)()

  if (!siteSettings) {
    return null
  }

  return <LocalBusinessSchema siteSettings={siteSettings} />
}
