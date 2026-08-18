import { GlobalConfig } from 'payload'
import { revalidateGlobal } from '@/lib/revalidate'

export const SiteSettings: GlobalConfig = {
  hooks: {
    afterChange: [revalidateGlobal],
  },
  slug: 'site-settings',
  label: {
    en: 'Site Settings',
    tr: 'Site Ayarları',
  },
  admin: {
    group: {
      en: 'Settings',
      tr: 'Ayarlar',
    },
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Company Info',
            tr: 'Firma Bilgileri',
          },
          fields: [
            {
              name: 'companyName',
              type: 'text',
              // required: true,
              label: {
                en: 'Company Name',
                tr: 'Firma Adı',
              },
            },
            {
              name: 'company_description',
              type: 'textarea',
              label: {
                en: 'Company Description',
                tr: 'Şirket Açıklaması / Sloganı',
              },
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              // required: true,
              label: {
                en: 'Logo',
                tr: 'Logo',
              },
            },
            {
              name: 'contact',
              type: 'group',
              label: {
                en: 'Contact Information',
                tr: 'İletişim Bilgileri',
              },
              fields: [
                {
                  name: 'email',
                  type: 'text',
                  // required: true,
                  label: {
                    en: 'Email',
                    tr: 'E-posta',
                  },
                },
                {
                  name: 'phone',
                  type: 'text',
                  // required: true,
                  label: {
                    en: 'Phone',
                    tr: 'Telefon',
                  },
                },
                {
                  name: 'secondaryPhone',
                  type: 'text',
                  // required: true,
                  label: {
                    en: 'Secondary Phone',
                    tr: 'İkinci Telefon',
                  },
                },
                {
                  name: 'whatsapp',
                  type: 'text',
                  // required: true,
                  label: {
                    en: 'WhatsApp',
                    tr: 'WhatsApp',
                  },
                },
                {
                  name: 'address',
                  type: 'text',
                  // required: true,
                  label: {
                    en: 'Address',
                    tr: 'Adres',
                  },
                },
                {
                  name: 'googleMapsUrl',
                  type: 'text',
                  label: {
                    en: 'Google Maps URL',
                    tr: 'Google Harita URL',
                  },
                },
              ],
            },
            {
              name: 'social',
              type: 'group',
              label: {
                en: 'Social Media',
                tr: 'Sosyal Medya Adresleri',
              },
              fields: [
                {
                  name: 'facebook',
                  type: 'text',
                  label: {
                    en: 'Facebook URL',
                    tr: 'Facebook URL',
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
          label: {
            en: 'Navigation',
            tr: 'Menü Bağlantıları',
          },
          fields: [
            {
              name: 'mainNavigation',
              type: 'relationship',
              hasMany: true,
              // required: true,
              relationTo: 'pages',
              label: {
                en: 'Main Navigation',
                tr: 'Ana Menü',
              },
              admin: {
                description: {
                  en: 'Select pages to show in main navigation',
                  tr: 'Ana menüde gösterilecek sayfaları seçin',
                },
              },
            },
            {
              name: 'footerServices',
              type: 'relationship',
              hasMany: true,
              // required: true,
              relationTo: ['services', 'service-categories'],
              label: {
                en: 'Footer Services',
                tr: 'Alt Menü Hizmetler',
              },
              admin: {
                description: {
                  en: 'Select services to show in footer',
                  tr: 'Alt menüde gösterilecek hizmet veya kategorileri seçin',
                },
              },
            },
            {
              name: 'footerLinks',
              type: 'relationship',
              hasMany: true,
              relationTo: 'pages',
              label: {
                en: 'Footer Links',
                tr: 'Alt Menü Sayfalar',
              },
              admin: {
                description: {
                  en: 'Select pages to show in footer',
                  tr: 'Alt menüde gösterilecek sayfaları seçin',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Legal',
            tr: 'Alt Menü Diğer',
          },
          fields: [
            {
              name: 'copyright',
              type: 'text',
              // required: true,
              label: {
                en: 'Copyright Text',
                tr: 'Telif Hakkı Metni',
              },
            },
            {
              name: 'legalPages',
              type: 'relationship',
              hasMany: true,
              relationTo: 'pages',
              // required: true,
              label: {
                en: 'Legal Pages',
                tr: 'Yasal Sayfalar',
              },
              admin: {
                description: {
                  en: 'Select legal pages (privacy policy, terms of use, etc.)',
                  tr: 'Yasal sayfaları seçin (gizlilik politikası, kullanım şartları, vb.)',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Proposal Defaults',
            tr: 'Teklif Ayarları',
          },
          fields: [
            {
              name: 'proposalDefaults',
              type: 'group',
              label: {
                en: 'Default Values for Proposals',
                tr: 'Teklifler İçin Varsayılan Değerler',
              },
              admin: {
                description: {
                  en: 'These values are pre-filled when creating new proposals.',
                  tr: 'Bu değerler yeni teklif oluştururken otomatik olarak doldurulur.',
                },
              },
              fields: [
                {
                  name: 'companyName',
                  type: 'text',
                  label: { en: 'Company Name (for proposals)', tr: 'Firma Adı (teklifler için)' },
                },
                {
                  name: 'companySubtitle',
                  type: 'text',
                  label: { en: 'Company Subtitle', tr: 'Alt Başlık / Hizmet Tanımı' },
                  admin: {
                    placeholder: {
                      en: 'e.g. Electrical - Electronics - Automation',
                      tr: 'örn. Elektrik - Elektronik - Otomasyon',
                    },
                  },
                },
                {
                  name: 'companyAddress',
                  type: 'text',
                  label: { en: 'Company Address', tr: 'Firma Adresi' },
                },
                {
                  name: 'companyPhone',
                  type: 'text',
                  label: { en: 'Phone', tr: 'Telefon' },
                },
                {
                  name: 'companyEmail',
                  type: 'text',
                  label: { en: 'Email', tr: 'E-posta' },
                },
                {
                  name: 'companyTaxOffice',
                  type: 'text',
                  label: { en: 'Tax Office', tr: 'Vergi Dairesi' },
                },
                {
                  name: 'companyTaxNumber',
                  type: 'text',
                  label: { en: 'Tax Number', tr: 'Vergi No' },
                },
                {
                  name: 'validity',
                  type: 'text',
                  label: { en: 'Default Validity Period', tr: 'Varsayılan Teklif Süresi' },
                  defaultValue: '10 GÜN',
                },
                {
                  name: 'payment',
                  type: 'text',
                  label: { en: 'Payment', tr: 'Ödeme' },
                  defaultValue: 'Nakit / EFT / Havale',
                },
                {
                  name: 'paymentMethod',
                  type: 'text',
                  label: { en: 'Payment Method', tr: 'Ödeme Şekli' },
                  defaultValue: 'Peşin / EFT / Havale',
                },
                {
                  name: 'bankName',
                  type: 'text',
                  label: { en: 'Bank Name', tr: 'Banka Adı' },
                },
                {
                  name: 'bankAccount',
                  type: 'text',
                  label: { en: 'IBAN', tr: 'IBAN' },
                },
                {
                  name: 'generalTerms',
                  type: 'textarea',
                  label: { en: 'General Terms', tr: 'Genel Açıklamalar' },
                },
                {
                  name: 'warrantyTerms',
                  type: 'textarea',
                  label: { en: 'Warranty Terms', tr: 'Garanti Koşulları' },
                },
                {
                  name: 'contractorName',
                  type: 'text',
                  label: { en: 'Contractor Name', tr: 'Teklif Veren / Yüklenici Adı' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
