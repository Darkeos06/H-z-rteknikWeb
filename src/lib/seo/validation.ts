import type { PageSEOData, ProgrammaticPageData, FAQItem } from './types'

export interface SEOValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export function validatePageSEO(data: PageSEOData): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!data.title || data.title.length === 0) {
    errors.push('Title is required')
  } else if (data.title.length > 60) {
    warnings.push(`Title is ${data.title.length} characters (recommended: 50-60)`)
  } else if (data.title.length < 30) {
    warnings.push(`Title is ${data.title.length} characters (recommended: 30-60)`)
  }

  if (!data.description || data.description.length === 0) {
    errors.push('Description is required')
  } else if (data.description.length > 160) {
    warnings.push(`Description is ${data.description.length} characters (recommended: 120-160)`)
  } else if (data.description.length < 70) {
    warnings.push(`Description is ${data.description.length} characters (recommended: 70-160)`)
  }

  if (data.keywords && data.keywords.length > 10) {
    warnings.push('Too many keywords (recommended: 5-10)')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

export function validateProgrammaticPage(data: ProgrammaticPageData): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!data.templateType) {
    errors.push('Template type is required')
  }

  if (!data.breadcrumbs || data.breadcrumbs.length === 0) {
    warnings.push('Breadcrumbs are recommended for SEO')
  }

  switch (data.templateType) {
    case 'location-service':
      if (!data.location) errors.push('Location is required for location-service template')
      if (!data.service) errors.push('Service is required for location-service template')
      break
    case 'location-category':
      if (!data.location) errors.push('Location is required for location-category template')
      if (!data.category) errors.push('Category is required for location-category template')
      break
    case 'location-hub':
      if (!data.location) errors.push('Location is required for location-hub template')
      break
    case 'blog':
      if (!data.content) errors.push('Content is required for blog template')
      break
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

export function validateFAQs(faqs: FAQItem[]): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (faqs.length === 0) {
    warnings.push('No FAQs provided - consider adding FAQs for better SEO')
  }

  if (faqs.length > 10) {
    warnings.push('Too many FAQs (recommended: 3-10 for optimal user experience)')
  }

  for (let i = 0; i < faqs.length; i++) {
    const faq = faqs[i]
    if (!faq.question || faq.question.length === 0) {
      errors.push(`FAQ ${i + 1}: Question is required`)
    }
    if (!faq.answer || faq.answer.length === 0) {
      errors.push(`FAQ ${i + 1}: Answer is required`)
    }
    if (faq.answer && faq.answer.length < 50) {
      warnings.push(`FAQ ${i + 1}: Answer is too short (recommended: 50+ characters)`)
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

export function checkForDuplicateContent(
  pages: { title: string; description: string; url: string }[],
): { duplicateTitles: string[][]; duplicateDescriptions: string[][] } {
  const titleMap = new Map<string, string[]>()
  const descriptionMap = new Map<string, string[]>()

  for (const page of pages) {
    const normalizedTitle = page.title.toLowerCase().trim()
    const normalizedDesc = page.description.toLowerCase().trim()

    if (!titleMap.has(normalizedTitle)) {
      titleMap.set(normalizedTitle, [])
    }
    titleMap.get(normalizedTitle)!.push(page.url)

    if (!descriptionMap.has(normalizedDesc)) {
      descriptionMap.set(normalizedDesc, [])
    }
    descriptionMap.get(normalizedDesc)!.push(page.url)
  }

  const duplicateTitles: string[][] = []
  const duplicateDescriptions: string[][] = []

  for (const urls of titleMap.values()) {
    if (urls.length > 1) {
      duplicateTitles.push(urls)
    }
  }

  for (const urls of descriptionMap.values()) {
    if (urls.length > 1) {
      duplicateDescriptions.push(urls)
    }
  }

  return { duplicateTitles, duplicateDescriptions }
}

export function checkForKeywordCannibalization(
  pages: { url: string; keywords: string[] }[],
): Map<string, string[]> {
  const keywordMap = new Map<string, string[]>()

  for (const page of pages) {
    for (const keyword of page.keywords) {
      const normalizedKeyword = keyword.toLowerCase().trim()
      if (!keywordMap.has(normalizedKeyword)) {
        keywordMap.set(normalizedKeyword, [])
      }
      keywordMap.get(normalizedKeyword)!.push(page.url)
    }
  }

  const cannibalizingKeywords = new Map<string, string[]>()
  for (const [keyword, urls] of keywordMap.entries()) {
    if (urls.length > 1) {
      cannibalizingKeywords.set(keyword, urls)
    }
  }

  return cannibalizingKeywords
}

export function validateInternalLinks(
  links: { from: string; to: string }[],
  allPages: string[],
): { brokenLinks: { from: string; to: string }[]; orphanPages: string[] } {
  const pageSet = new Set(allPages)
  const linkedPages = new Set<string>()
  const brokenLinks: { from: string; to: string }[] = []

  for (const link of links) {
    if (!pageSet.has(link.to)) {
      brokenLinks.push(link)
    } else {
      linkedPages.add(link.to)
    }
  }

  const orphanPages = allPages.filter((page) => !linkedPages.has(page) && page !== '/')

  return { brokenLinks, orphanPages }
}

export function estimateBuildTime(pageCount: number): {
  estimatedMinutes: number
  recommendation: string
} {
  const pagesPerMinute = 100
  const estimatedMinutes = Math.ceil(pageCount / pagesPerMinute)

  let recommendation: string
  if (pageCount < 1000) {
    recommendation = 'Standard build should complete quickly'
  } else if (pageCount < 10000) {
    recommendation = 'Consider using ISR for faster builds'
  } else if (pageCount < 50000) {
    recommendation = 'Use ISR with on-demand revalidation for optimal performance'
  } else {
    recommendation = 'Implement chunked sitemap generation and aggressive caching'
  }

  return { estimatedMinutes, recommendation }
}

export function generateContentHash(content: string): string {
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

export function ensureUniqueContent(
  baseContent: string,
  locationName: string,
  serviceName: string,
): string {
  const uniqueIdentifier = `${locationName}-${serviceName}`
  const hash = generateContentHash(uniqueIdentifier)

  return baseContent
    .replace(/\{\{location\}\}/g, locationName)
    .replace(/\{\{service\}\}/g, serviceName)
    .replace(/\{\{hash\}\}/g, hash)
}
