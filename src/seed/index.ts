import { getPayload } from 'payload'
import config from '@payload-config'
import type { Payload } from 'payload'

/**
 * Seed Utilities for Hızır Teknik CMS
 *
 * This module provides utility functions to easily create records for each collection.
 * Use these functions to build your own seed data as needed.
 *
 * Usage Example:
 * ```typescript
 * import { seed, createAuthor, createService } from './seed'
 *
 * const customSeed = async () => {
 *   const payload = await getPayloadInstance()
 *
 *   const author = await createAuthor(payload, {
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     title: 'Technical Expert'
 *   })
 * }
 * ```
 */

// ====================
// HELPER FUNCTIONS
// ====================

/**
 * Get Payload instance
 */
export const getPayloadInstance = async (): Promise<Payload> => {
  return await getPayload({ config })
}

/**
 * Create a simple rich text paragraph
 */
export const createRichTextParagraph = (text: string) => ({
  type: 'paragraph',
  children: [{ type: 'text', text }],
  version: 1,
})

/**
 * Create a rich text heading
 */
export const createRichTextHeading = (text: string, tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2') => ({
  type: 'heading',
  children: [{ type: 'text', text }],
  tag,
  version: 1,
})

/**
 * Create a rich text list
 */
export const createRichTextList = (items: string[], listType: 'bullet' | 'number' = 'bullet') => ({
  type: 'list',
  children: items.map(item => ({
    type: 'listitem',
    children: [{ type: 'text', text: item }],
    version: 1,
  })),
  listType,
  version: 1,
})

/**
 * Create a complete rich text structure
 */
export const createRichText = (children: any[]) => ({
  root: {
    type: 'root',
    children,
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

// ====================
// AUTHOR UTILITIES
// ====================

export interface AuthorData {
  name: string
  email: string
  title?: string
  bio?: string
  status?: 'active' | 'inactive'
  featured?: boolean
  social?: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

/**
 * Create an author
 */
export const createAuthor = async (payload: Payload, data: AuthorData) => {
  const bioContent = data.bio
    ? createRichText([createRichTextParagraph(data.bio)])
    : undefined

  return await payload.create({
    collection: 'authors',
    data: {
      name: data.name,
      email: data.email,
      title: data.title,
      bio: bioContent,
      status: data.status || 'active',
      featured: data.featured || false,
      social: data.social || {},
    },
  })
}

// ====================
// CATEGORY UTILITIES
// ====================

export interface PostCategoryData {
  title: string
  description: string
  featured_image?: number
}

/**
 * Create a post category
 */
export const createPostCategory = async (payload: Payload, data: PostCategoryData) => {
  return await payload.create({
    collection: 'post-categories',
    data: {
      title: data.title,
      description: data.description,
      featured_image: data.featured_image,
      _status: 'published',
    },
  })
}

export interface ServiceCategoryData {
  title: string
  description: string
  icon?: 'elektrik-tesisat' | 'isitma-ve-sogutma' | 'sihhi-tesisat' | 'yapi-insaati' | 'havuz-sistemleri' | 'elektronik-tesisat' | 'cati-ve-cephe'
  content?: string
  featured_image?: number
}

/**
 * Create a service category
 */
export const createServiceCategory = async (payload: Payload, data: ServiceCategoryData) => {
  const contentRichText = data.content
    ? createRichText([createRichTextParagraph(data.content)])
    : undefined

  return await payload.create({
    collection: 'service-categories',
    data: {
      title: data.title,
      description: data.description,
      icon: data.icon,
      content: contentRichText,
      featured_image: data.featured_image,
      _status: 'published',
    },
  })
}

// ====================
// SERVICE UTILITIES
// ====================

export interface ServiceDescriptionBlock {
  title: string
  description: string
  features: string[]
}

export interface ServiceData {
  title: string
  icon?: string
  description: string
  featured?: boolean
  related_category?: number
  featured_image?: number
  blocks?: ServiceDescriptionBlock[]
  meta?: {
    title?: string
    description?: string
  }
}

/**
 * Create a service description block
 */
export const createServiceDescriptionBlock = (data: ServiceDescriptionBlock) => ({
  blockType: 'service-description-block' as const,
  title: data.title,
  description: data.description,
  features: data.features.map(feature => ({ feature })),
})

/**
 * Create a service
 */
export const createService = async (payload: Payload, data: ServiceData) => {
  const blocks = data.blocks?.map(block => createServiceDescriptionBlock(block)) || []

  return await payload.create({
    collection: 'services',
    data: {
      title: data.title,
      icon: data.icon as any, // Cast to any to allow flexible icon values
      description: data.description,
      featured: data.featured || false,
      related_category: data.related_category,
      featured_image: data.featured_image,
      blocks,
      meta: data.meta,
      _status: 'published',
    },
  })
}

// ====================
// BLOG POST UTILITIES
// ====================

export interface PostData {
  title: string
  description: string
  content: any[] // Rich text children
  author?: number
  post_category?: number
  related_service_category?: number
  featured_image?: number
  meta?: {
    title?: string
    description?: string
  }
  _status?: 'draft' | 'published'
}

/**
 * Create a blog post
 * @param payload Payload instance
 * @param data Post data
 * @param asDraft If true, creates as draft (default: false = published)
 */
export const createPost = async (payload: Payload, data: PostData, asDraft: boolean = false) => {
  return await payload.create({
    collection: 'posts',
    data: {
      title: data.title,
      description: data.description,
      content: createRichText(data.content),
      author: data.author,
      post_category: data.post_category,
      related_service_category: data.related_service_category,
      featured_image: data.featured_image,
      meta: data.meta,
      _status: asDraft ? 'draft' : (data._status || 'published'),
    },
  })
}

// ====================
// PAGE UTILITIES
// ====================

export interface HomeHeroBlock {
  headingRotation: string[]
  subHeading?: string
  description?: string
  featuredServices?: number[]
}

export interface ServicesCarouselBlock {
  subtitle?: string
  title?: string
}

export interface PageHeroBlock {
  title: string
  description?: string
}

export interface RichTextBlock {
  content: any[] // Rich text children
}

/**
 * Create a home hero block
 */
export const createHomeHeroBlock = (data: HomeHeroBlock) => ({
  blockType: 'home-hero-section' as const,
  headingRotation: data.headingRotation.map(text => ({ text })),
  subHeading: data.subHeading,
  description: data.description,
  featuredServices: data.featuredServices,
})

/**
 * Create a services carousel block
 */
export const createServicesCarouselBlock = (data: ServicesCarouselBlock) => ({
  blockType: 'services-carousel' as const,
  heading: {
    subtitle: data.subtitle,
    title: data.title,
  },
})

/**
 * Create a page hero block
 */
export const createPageHeroBlock = (data: PageHeroBlock) => ({
  blockType: 'page-hero-block' as const,
  title: data.title,
  description: data.description,
})

/**
 * Create a rich text block
 */
export const createRichTextBlock = (data: RichTextBlock) => ({
  blockType: 'rich-text-block' as const,
  content: createRichText(data.content),
})

// ====================
// FAQ BLOCK UTILITIES
// ====================

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQBlockData {
  title?: string
  subtitle?: string
  variant?: 'subtle' | 'light' | 'dark' | 'primary'
  faqs: FAQItem[]
}

/**
 * Create a FAQ block for pages
 */
export const createFAQBlock = (data: FAQBlockData) => ({
  blockType: 'faq-block' as const,
  title: data.title || 'Sıkça Sorulan Sorular',
  subtitle: data.subtitle || 'Hizmetlerimiz hakkında merak edilenler.',
  variant: data.variant || 'light',
  faqs: data.faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer,
  })),
})

export interface PageData {
  title: string
  description?: string
  blocks: any[]
  meta?: {
    title?: string
    description?: string
  }
  _status?: 'draft' | 'published'
}

/**
 * Create a page
 * @param payload Payload instance
 * @param data Page data
 * @param asDraft If true, creates as draft (default: false = published)
 */
export const createPage = async (payload: Payload, data: PageData, asDraft: boolean = false) => {
  return await payload.create({
    collection: 'pages',
    data: {
      title: data.title,
      description: data.description,
      blocks: data.blocks,
      meta: data.meta,
      _status: asDraft ? 'draft' : (data._status || 'published'),
    },
  })
}

// ====================
// MAIN SEED FUNCTION
// ====================

/**
 * Main seed function - customize this with your own data
 *
 * Example usage:
 * ```typescript
 * export const seed = async () => {
 *   const payload = await getPayloadInstance()
 *
 *   // Create an author
 *   const author = await createAuthor(payload, {
 *     name: 'Jane Doe',
 *     email: 'jane@example.com',
 *     title: 'Content Writer'
 *   })
 *
 *   // Create a service category
 *   const category = await createServiceCategory(payload, {
 *     title: 'Web Development',
 *     description: 'Professional web development services'
 *   })
 *
 *   // Create a service
 *   const service = await createService(payload, {
 *     title: 'Custom Website Development',
 *     description: 'We build custom websites',
 *     related_category: category.id,
 *     blocks: [{
 *       title: 'Our Approach',
 *       description: 'We use modern technologies',
 *       features: ['React', 'Next.js', 'TypeScript']
 *     }]
 *   })
 * }
 * ```
 */
export const seed = async () => {
  const payload = await getPayloadInstance()

  try {
    payload.logger.info('🌱 Starting database seeding...')

    // =====================================================
    // ADD YOUR SEED DATA HERE
    // =====================================================

    // Example:
    // const author = await createAuthor(payload, {
    //   name: 'Your Name',
    //   email: 'your@email.com',
    //   title: 'Your Title'
    // })

    payload.logger.info('✅ Database seeding completed successfully!')
  } catch (error) {
    payload.logger.error('❌ Error seeding database:')
    payload.logger.error(error)
    throw error
  }
}

// Run seed if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seed()
    .then(() => {
      console.log('✅ Seeding completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error)
      process.exit(1)
    })
}
