import type { FieldHook } from 'payload'

export const formatSlug = (val: string): string =>
  val
    .toLowerCase()
    .trim()
    .replace(/\ğ/g, 'g')
    .replace(/\ü/g, 'u')
    .replace(/\ş/g, 's')
    .replace(/\ı/g, 'i')
    .replace(/\ö/g, 'o')
    .replace(/\ç/g, 'c')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    if (operation === 'update' && originalDoc?.title) {
      return formatSlug(originalDoc?.[fallback])
    }

    return value
  }
