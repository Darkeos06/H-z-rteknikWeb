import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: {
      en: 'Settings',
      tr: 'Ayarlar',
    },
  },
  labels: {
    singular: 'Kullanıcı',
    plural: 'Kullanıcılar',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
