import { Block } from 'payload'

export const ServiceDescriptionBlock: Block = {
  slug: 'service-description-block',
  labels: {
    singular: 'Hizmet Açıklama Bloğu',
    plural: 'Hizmet Açıklama Blokları',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Bölüm Başlığı',
      admin: {
        placeholder: 'Bölüm başlığını giriniz...',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Açıklama',
      admin: {
        placeholder: 'Bölüm açıklamasını giriniz...',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Özellikler',
      labels: {
        singular: 'Özellik',
        plural: 'Özellikler',
      },
      minRows: 1,
      fields: [
        {
          name: 'feature',
          type: 'text',
          label: 'Özellik',

          admin: {
            placeholder: 'Özellik giriniz...',
          },
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Detay Görselleri',
      labels: {
        singular: 'Detay Görseli',
        plural: 'Detay Görselleri',
      },
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Detay Görseli',

          admin: {
            description: 'Detay görseli yükleyin.',
          },
        },
      ],
    },
  ],
}
