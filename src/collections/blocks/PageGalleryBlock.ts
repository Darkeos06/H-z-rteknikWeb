import { Block } from 'payload'

export const PageImageGalleryBlock: Block = {
  slug: 'image-gallery-block',
  imageURL: '/screens/block-image-gallery.png',
  labels: {
    singular: {
      en: 'Image Gallery Block',
      tr: 'Sayfa Görsel Galeri Bloğu',
    },
    plural: {
      en: 'Image Gallery Blocks',
      tr: 'Sayfa Görsel Galeri Blokları',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Gallery Title',
        tr: 'Galeri Başlığı',
      },
      defaultValue: 'Proje Galerimiz',
      admin: {
        placeholder: {
          en: 'Enter gallery title...',
          tr: 'Galeri başlığını giriniz...',
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Gallery Description',
        tr: 'Galeri Açıklaması',
      },
      defaultValue: 'Hızır Teknik olarak tamamladığımız projelerden bazı örnekler',
      admin: {
        placeholder: {
          en: 'Enter gallery description...',
          tr: 'Galeri açıklamasını giriniz...',
        },
      },
    },
    {
      name: 'showTitle',
      type: 'checkbox',
      label: {
        en: 'Show Title and Description',
        tr: 'Başlık ve Açıklamayı Göster',
      },
      defaultValue: true,
    },
    {
      name: 'showCategories',
      type: 'checkbox',
      label: {
        en: 'Show Categories',
        tr: 'Kategorileri Göster',
      },
      defaultValue: true,
    },
    {
      name: 'images',
      type: 'array',
      label: {
        en: 'Images',
        tr: 'Görseller',
      },
      labels: {
        singular: 'Galeri Resmi',
        plural: 'Galeri Resimleri',
      },
      fields: [
        {
          name: 'src',
          type: 'upload',
          relationTo: 'media',
          label: {
            en: 'Image Source',
            tr: 'Görsel Kaynağı',
          },
        },
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'service-categories',
          filterOptions: () => {
            return {
              _status: {
                equals: 'published',
              },
            }
          },
          label: {
            en: 'Category',
            tr: 'Kategori',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Image Title',
            tr: 'Görsel Başlığı',
          },
          admin: {
            placeholder: {
              en: 'Enter title...',
              tr: 'Başlık giriniz...',
            },
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: {
            en: 'Image Description',
            tr: 'Görsel Açıklaması',
          },
          admin: {
            placeholder: {
              en: 'Enter description...',
              tr: 'Açıklama giriniz...',
            },
          },
        },
      ],
    },
  ],
}
