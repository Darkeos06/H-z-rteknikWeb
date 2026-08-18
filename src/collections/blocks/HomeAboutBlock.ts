import { Block } from 'payload'

export const HomeAboutSectionBlock: Block = {
  slug: 'about-section',
  labels: {
    singular: {
      en: 'About Section Block',
      tr: 'Ana Sayfa Hakkımızda Bölümü',
    },
    plural: {
      en: 'About Section Blocks',
      tr: 'Ana Sayfa Hakkımızda Bölümleri',
    },
  },
  imageURL: '/screens/home-about-us.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'about-section',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'certificateSource',
      type: 'select',
      label: {
        en: 'Certificate Source',
        tr: 'Sertifika Kaynağı',
      },
      defaultValue: 'inline',
      options: [
        {
          label: {
            en: 'Inline (Legacy)',
            tr: 'Satır İçi (Eski Yöntem)',
          },
          value: 'inline',
        },
        {
          label: {
            en: 'From Certifications Collection',
            tr: 'Sertifikalar Koleksiyonundan',
          },
          value: 'collection',
        },
      ],
      admin: {
        description: {
          en: 'Choose where to load certificates from. "Inline" for manual entry below, "Collection" to automatically fetch from Certifications.',
          tr: 'Sertifikaların nereden yükleneceğini seçin. "Satır İçi" manuel giriş için, "Koleksiyon" otomatik çekmek için.',
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'content',
          type: 'group',
          label: {
            en: 'Content',
            tr: 'İçerik',
          },
          admin: {
            width: '50%',
          },
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              label: {
                en: 'Subtitle',
                tr: 'Alt Başlık',
              },
            },
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Title',
                tr: 'Başlık',
              },
              admin: {
                placeholder: {
                  en: 'Enter main title...',
                  tr: 'Ana başlığı girin...',
                },
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: {
                en: 'Description',
                tr: 'Açıklama',
              },
              admin: {
                placeholder: {
                  en: 'Enter description...',
                  tr: 'Açıklama metnini girin...',
                },
              },
            },
            {
              name: 'button',
              type: 'group',
              label: {
                en: 'Button',
                tr: 'Bağlantı',
              },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  defaultValue: 'Devamını Oku...',
                  label: {
                    en: 'Button Text',
                    tr: 'Bağlantı Metni',
                  },
                },
                {
                  name: 'url',
                  type: 'text',
                  defaultValue: '/hakkimizda',
                  label: {
                    en: 'URL',
                    tr: 'Bağlantı Yolu',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'certificates',
          type: 'array',
          label: {
            en: 'Certificates (Inline)',
            tr: 'Sertifikalar (Satır İçi)',
          },
          labels: {
            singular: {
              en: 'Certificate',
              tr: 'Sertifika',
            },
            plural: {
              en: 'Certificates',
              tr: 'Sertifikalar',
            },
          },
          admin: {
            width: '50%',
            description: {
              en: 'Add certificates to display in the carousel (only shown when using "Inline" source)',
              tr: 'Listede gösterilecek sertifika görsellerini ekleyin (sadece "Satır İçi" kaynak seçildiğinde gösterilir)',
            },
            condition: (data, siblingData) => {
              return siblingData.certificateSource === 'inline'
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Certificate Title',
                tr: 'Sertifika Başlığı',
              },
              admin: {
                placeholder: {
                  en: 'Enter certificate title...',
                  tr: 'Sertifika başlığını girin...',
                },
              },
            },
            {
              name: 'image',
              type: 'upload',
              label: {
                en: 'Certificate Image',
                tr: 'Sertifika Görseli',
              },
              relationTo: 'media',
              admin: {
                description: {
                  en: 'Upload certificate image',
                  tr: 'Sertifika görselini yükleyin',
                },
              },
            },
          ],
        },
        {
          name: 'collectionOptions',
          type: 'group',
          label: {
            en: 'Collection Options',
            tr: 'Koleksiyon Ayarları',
          },
          admin: {
            width: '50%',
            description: {
              en: 'Options for loading certificates from collection',
              tr: 'Koleksiyondan sertifika yükleme seçenekleri',
            },
            condition: (data, siblingData) => {
              return siblingData.certificateSource === 'collection'
            },
          },
          fields: [
            {
              name: 'limit',
              type: 'number',
              label: {
                en: 'Maximum Certificates',
                tr: 'Maksimum Sertifika Sayısı',
              },
              defaultValue: 6,
              min: 1,
              max: 20,
              admin: {
                description: {
                  en: 'Maximum number of certificates to display',
                  tr: 'Gösterilecek maksimum sertifika sayısı',
                },
              },
            },
            {
              name: 'featuredOnly',
              type: 'checkbox',
              label: {
                en: 'Featured Only',
                tr: 'Sadece Öne Çıkanlar',
              },
              defaultValue: false,
              admin: {
                description: {
                  en: 'Show only featured certificates',
                  tr: 'Sadece öne çıkan sertifikaları göster',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
