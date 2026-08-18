import { Block } from 'payload'

export const PageCertificationsBlock: Block = {
  slug: 'certifications-block',
  imageURL: '/screens/block-certificates.png',
  labels: {
    singular: {
      en: 'Certifications Block',
      tr: 'Sayfa Sertifikalar Bloğu',
    },
    plural: {
      en: 'Certifications Blocks',
      tr: 'Sayfa Sertifikalar Blokları',
    },
  },
  fields: [
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
      name: 'title',
      type: 'text',
      label: {
        en: 'Section Title',
        tr: 'Bölüm Başlığı',
      },
      defaultValue: 'Sertifikalarımız',
      admin: {
        placeholder: {
          en: 'Enter section title...',
          tr: 'Bölüm başlığını giriniz...',
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Section Description',
        tr: 'Bölüm Açıklaması',
      },
      defaultValue: 'Kalite standartlarımızı belgeleyen sertifikalarımız.',
      admin: {
        placeholder: {
          en: 'Enter section description...',
          tr: 'Bölüm açıklamasını giriniz...',
        },
      },
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
      minRows: 1,
      admin: {
        condition: (data, siblingData) => {
          return siblingData.certificateSource === 'inline'
        },
        description: {
          en: 'Add certificates manually (only shown when using "Inline" source)',
          tr: 'Sertifikaları manuel olarak ekleyin (sadece "Satır İçi" kaynak seçildiğinde gösterilir)',
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
              tr: 'Sertifika başlığını giriniz...',
            },
          },
        },
        {
          name: 'date',
          type: 'text',
          label: {
            en: 'Certificate Date',
            tr: 'Sertifika Tarihi',
          },
          admin: {
            placeholder: {
              en: 'Enter certificate date...',
              tr: 'Sertifika tarihini giriniz...',
            },
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: {
            en: 'Certificate Image',
            tr: 'Sertifika Görseli',
          },
          admin: {
            description: {
              en: 'Upload an image for the certificate.',
              tr: 'Sertifika için bir görsel yükleyin.',
            },
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: {
            en: 'Certificate Description',
            tr: 'Sertifika Açıklaması',
          },
          admin: {
            placeholder: {
              en: 'Enter certificate description...',
              tr: 'Sertifika açıklamasını giriniz...',
            },
          },
        },
        {
          name: 'pdfUrl',
          type: 'text',
          label: {
            en: 'PDF URL',
            tr: 'PDF Bağlantısı',
          },
          admin: {
            placeholder: {
              en: 'Enter PDF URL...',
              tr: 'PDF bağlantısını giriniz...',
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
          defaultValue: 10,
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
}
