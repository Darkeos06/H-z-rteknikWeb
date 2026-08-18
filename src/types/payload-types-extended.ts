import { Config } from '@/payload-types'

// Extract collection names from the Config interface
export type CollectionSlug = keyof Config['collections']
