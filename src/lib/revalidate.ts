import { revalidatePath, revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload'
import { LOCATIONS } from './locations'

export const revalidateCollection: CollectionAfterChangeHook = async ({
  doc,
  req: { payload },
  collection,
}) => {
  if (doc._status === 'published') {
    const pathsToRevalidate: string[] = []

    switch (collection.slug) {
      case 'pages':
        if (doc.slug) {
          const path = doc.slug === 'ana-sayfa' ? '/' : `/${doc.slug}`
          pathsToRevalidate.push(path)
        }
        break

      case 'posts':
        if (doc.slug) {
          pathsToRevalidate.push(`/blog/${doc.slug}`)
          // also revalidate the blog listing page
          pathsToRevalidate.push('/blog')
        }
        break

      case 'projects':
        if (doc.slug) {
          pathsToRevalidate.push(`/portfolio/${doc.slug}`)
          // also revalidate the portfolio listing page
          pathsToRevalidate.push('/portfolio')
        }
        break

      case 'services':
        if (doc.slug) {
          const locationSlugs = Object.keys(LOCATIONS)
          for (const locationSlug of locationSlugs) {
            pathsToRevalidate.push(`/${locationSlug}/${doc.slug}`)
            pathsToRevalidate.push(`/${locationSlug}`)
          }
        }
        break

      default:
        break
    }

    for (const path of pathsToRevalidate) {
      try {
        revalidatePath(path, 'layout')
        payload.logger.info(`Revalidated path: ${path}`)
      } catch (err: unknown) {
        payload.logger.error(`Error revalidating path ${path}: ${err}`)
      }
    }
  }

  return doc
}

export const revalidateGlobal: GlobalAfterChangeHook = async ({ req: { payload }, global }) => {
  if (global.slug === 'site-settings') {
    try {
      // Revalidate the cache tag used by getCachedGlobal
      revalidateTag(`global_${global.slug}`)
      // Also revalidate the root path
      revalidatePath('/', 'layout')
      payload.logger.info(`Revalidated entire site due to site-settings change.`)
    } catch (err: unknown) {
      payload.logger.error(`Error revalidating site: ${err}`)
    }
  }
}
