import { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  labels: {
    singular: {
      en: 'Author',
      tr: 'Yazar',
    },
    plural: {
      en: 'Authors',
      tr: 'Yazarlar',
    },
  },
  admin: {
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    // hidden: true,
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: {
            en: 'Full Name',
            tr: 'Ad Soyad',
          },
        },
        {
          name: 'email',
          type: 'email',
          unique: true,
          label: {
            en: 'Email',
            tr: 'E-posta',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'bio',
          type: 'richText',
          label: {
            en: 'Biography',
            tr: 'Biyografi',
          },
        },
        {
          name: 'photo',
          type: 'upload',
          label: {
            en: 'Profile Photo',
            tr: 'Profil Fotoğrafı',
          },
          relationTo: 'media',
          admin: {
            description: {
              en: 'Recommended: 404x660px',
              tr: 'Önerilen: 404x660px',
            },
            width: '25%',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Job Title',
            tr: 'Ünvan',
          },
          admin: {
            width: '25%',
          },
        },
      ],
    },

    {
      name: 'social',
      type: 'group',
      label: {
        en: 'Social Media',
        tr: 'Sosyal Medya',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'linkedin',
              type: 'text',
              label: {
                en: 'LinkedIn URL',
                tr: 'LinkedIn URL',
              },
            },
            {
              name: 'twitter',
              type: 'text',
              label: {
                en: 'Twitter URL',
                tr: 'Twitter URL',
              },
            },
            {
              name: 'instagram',
              type: 'text',
              label: {
                en: 'Instagram URL',
                tr: 'Instagram URL',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'status',
          type: 'select',
          defaultValue: 'active',
          label: {
            en: 'Status',
            tr: 'Durum',
          },
          options: [
            {
              label: {
                en: 'Active',
                tr: 'Aktif',
              },
              value: 'active',
            },
            {
              label: {
                en: 'Inactive',
                tr: 'Pasif',
              },
              value: 'inactive',
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: {
            en: 'Featured Author',
            tr: 'Öne Çıkan Yazar',
          },
          defaultValue: false,
          admin: {
            style: {
              margin: 'auto',
              marginBottom: '6px',
            },
          },
        },
      ],
    },
  ],
  timestamps: true,
}
