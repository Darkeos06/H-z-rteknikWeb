import type { Metadata } from 'next'

export interface SEOConfig {
  siteName: string
  siteUrl: string
  defaultTitle: string
  titleTemplate: string
  defaultDescription: string
  defaultImage: string
  twitterHandle?: string
  locale: string
  alternateLocales?: string[]
}

export interface PageSEOData {
  title: string
  description: string
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
  keywords?: string[]
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface SchemaOrgData {
  type:
    | 'Article'
    | 'BlogPosting'
    | 'FAQPage'
    | 'Service'
    | 'LocalBusiness'
    | 'BreadcrumbList'
    | 'WebPage'
    | 'Product'
    | 'HowTo'
    | 'Organization'
  data: Record<string, unknown>
}

export interface ProgrammaticPageData {
  templateType:
    | 'location-service'
    | 'location-category'
    | 'location-hub'
    | 'blog'
    | 'service'
    | 'category'
    | 'page'
  location?: {
    slug: string
    name: string
    title: string
    description: string
  }
  service?: {
    slug: string
    title: string
    description: string
    categorySlug?: string
    categoryTitle?: string
  }
  category?: {
    slug: string
    title: string
    description: string
  }
  content?: {
    title: string
    description: string
    body?: string
  }
  faqs?: FAQItem[]
  relatedPages?: {
    title: string
    url: string
    description?: string
  }[]
  breadcrumbs: BreadcrumbItem[]
}

export interface ContentTemplate {
  titleTemplate: string
  descriptionTemplate: string
  h1Template: string
  introTemplate: string
  faqTemplates?: {
    question: string
    answer: string
  }[]
}

export interface InternalLink {
  title: string
  url: string
  description?: string
  priority: 'high' | 'medium' | 'low'
  type: 'hub' | 'spoke' | 'related' | 'breadcrumb' | 'sibling'
}

export interface HubAndSpokeConfig {
  hubUrl: string
  hubTitle: string
  spokes: {
    url: string
    title: string
    description?: string
  }[]
}

export type MetadataGenerator = (data: ProgrammaticPageData) => Promise<Metadata>
export type SchemaGenerator = (data: ProgrammaticPageData) => SchemaOrgData[]
export type ContentGenerator = (data: ProgrammaticPageData) => ContentTemplate
