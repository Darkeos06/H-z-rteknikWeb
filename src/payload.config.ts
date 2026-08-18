import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, Field, RichTextField, SelectField } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { PostCategories } from './collections/PostCategories'
import { Projects } from './collections/Projects'
import { ServiceCategories } from './collections/ServiceCategories'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { Authors } from './collections/Authors'
import { Certifications } from './collections/Certifications'
import { tr } from '@payloadcms/translations/languages/tr'
import { BlogComments } from './collections/BlogComments'
import { Proposals } from './collections/Proposals'
import { BlocksFeature } from '@payloadcms/richtext-lexical'
import { SiteSettings } from './collections/SiteSettings'
import { getServerSideURL } from './lib/getURL'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Page, Post, Service } from './payload-types'
import { GenerateTitle, GenerateDescription, GenerateURL } from '@payloadcms/plugin-seo/types'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { fields } from '@payloadcms/plugin-form-builder'
import { resendAdapter } from '@payloadcms/email-resend'
import { importExportPlugin } from '@payloadcms/plugin-import-export'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.slug === 'ana-sayfa'
    ? 'Hızır Teknik | Tamirat, Tadilat, Isıtma-Soğutma Hizmetleri'
    : doc?.title
    ? `${doc.title} | Hızır Teknik`
    : 'Hızır Teknik'
}

const generateDescription: GenerateDescription<Page> = ({ doc }) => {
  return doc?.description ? `${doc.description}` : 'Hızır Teknik'
}

const generateURL: GenerateURL<Page | Post | Service> = ({ doc }) => {
  const url = getServerSideURL()
  // console.log(typeof doc)
  return doc?.slug === 'ana-sayfa' ? url : doc?.slug ? `${url}/${doc.slug}` : url
}

export default buildConfig({
  i18n: {
    supportedLanguages: { tr },
  },
  admin: {
    meta: {
      title: 'Hızır Teknik | Yönetici Paneli',
      description: 'Hızır Teknik Yönetici Paneli Giriş Sayfası',
    },
    components: {
      graphics: {
        Logo: './components/payload/AdminLogo',
        Icon: './components/payload/AdminIcon',
      },
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [
    Pages,
    Services,
    ServiceCategories,
    Projects,
    Testimonials,
    Certifications,
    Posts,
    PostCategories,
    Authors,
    BlogComments,
    Proposals,
    Users,
    Media,
  ],
  globals: [SiteSettings],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [],
      }),
    ],
  }),
  email: resendAdapter({
    defaultFromAddress: 'bilgi@mail.hizirteknik.com',
    defaultFromName: 'Hızır Teknik',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
      max: 10,
    },
    push: true,
  }),
  sharp,
  cors: [getServerSideURL()].filter(Boolean),
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      generateTitle,
      generateDescription,
      generateURL,
    }),
    formBuilderPlugin({
      fields: {
        text: {
          ...fields.text,
          labels: {
            singular: {
              en: 'Text',
              tr: 'Metin',
            },
            plural: {
              en: 'Texts',
              tr: 'Metinler',
            },
          },
        },
        checkbox: {
          ...fields.checkbox,
          labels: {
            singular: {
              en: 'Checkbox',
              tr: 'Onay Kutusu',
            },
            plural: {
              en: 'Checkboxes',
              tr: 'Onay Kutuları',
            },
          },
        },
        email: {
          ...fields.email,
          labels: {
            singular: {
              en: 'Email',
              tr: 'E-posta',
            },
            plural: {
              en: 'Emails',
              tr: 'E-postalar',
            },
          },
        },
        textarea: {
          ...fields.textarea,
          labels: {
            singular: {
              en: 'Textarea',
              tr: 'Metin Alanı',
            },
            plural: {
              en: 'Textareas',
              tr: 'Metin Alanları',
            },
          },
        },
        select: {
          ...fields.select,
          labels: {
            singular: {
              en: 'Select',
              tr: 'Seçenek',
            },
            plural: {
              en: 'Selects',
              tr: 'Seçenekler',
            },
          },
        },
        number: {
          ...fields.number,
          labels: {
            singular: {
              en: 'Number',
              tr: 'Sayı',
            },
            plural: {
              en: 'Numbers',
              tr: 'Sayılar',
            },
          },
        },
        message: {
          ...fields.message,
          labels: {
            singular: {
              en: 'Message',
              tr: 'Mesaj',
            },
            plural: {
              en: 'Messages',
              tr: 'Mesajlar',
            },
          },
        },
        payment: false,
        country: false,
        state: false,
      },
      formOverrides: {
        admin: {
          group: 'Form',
        },
        labels: {
          singular: {
            en: 'Form',
            tr: 'Form',
          },
          plural: {
            en: 'Forms',
            tr: 'Formlar',
          },
        },
        fields: ({ defaultFields }) => {
          return defaultFields.map((field): Field => {
            if ('name' in field) {
              switch (field.name) {
                case 'confirmationMessage':
                  return {
                    ...(field as RichTextField), // Cast to RichTextField
                    label: {
                      en: 'Confirmation Message',
                      tr: 'Onay Mesajı',
                    },
                    editor: lexicalEditor({
                      features: ({ rootFeatures }) => [
                        ...rootFeatures,
                        FixedToolbarFeature(),
                        HeadingFeature({
                          enabledHeadingSizes: ['h2', 'h3', 'h4'],
                        }),
                      ],
                    }),
                  }
                case 'title':
                  return {
                    ...field,
                    label: {
                      en: 'Title',
                      tr: 'Başlık',
                    },
                  }
                case 'fields':
                  return {
                    ...field,
                    label: {
                      en: 'Fields',
                      tr: 'Alanlar',
                    },
                    admin: {
                      ...field.admin,
                      description: {
                        en: 'Form fields',
                        tr: 'Form alanları',
                      },
                    },
                    labels: {
                      singular: {
                        en: 'Field',
                        tr: 'Alan',
                      },
                      plural: {
                        en: 'Fields',
                        tr: 'Alanlar',
                      },
                    },
                  } as Field // Cast to Field to avoid type issues
                case 'submitButtonLabel':
                  return {
                    ...field,
                    label: {
                      en: 'Submit Button Label',
                      tr: 'Gönder Butonu Etiketi',
                    },
                  }
                case 'confirmationType':
                  return {
                    ...(field as SelectField),
                    label: {
                      en: 'Confirmation Type',
                      tr: 'Onay Türü',
                    },
                    options: [
                      {
                        label: { en: 'Message', tr: 'Mesaj' },
                        value: 'message',
                      },
                      {
                        label: { en: 'Redirect', tr: 'Yönlendirme' },
                        value: 'redirect',
                      },
                    ],
                  }
                case 'redirect':
                  return {
                    ...field,
                    label: {
                      en: 'Redirect',
                      tr: 'Yönlendirme',
                    },
                  }
                case 'emails':
                  return {
                    ...field,
                    label: {
                      en: 'Emails',
                      tr: 'Email Gönderimi',
                    },
                    admin: {
                      description: {
                        en: `Send custom emails when the form submits. Use comma separated lists to send the same email to multiple recipients. To reference a value from this form, wrap that field's name with double curly brackets, i.e. {{firstName}}. You can use a wildcard {{*}} to output all data and {{*:table}} to format it as an HTML table in the email.`,
                        tr: `Form gönderildiğinde özel email gönderin. Birden fazla alıcıya aynı email göndermek için virgül ile ayrılmış listeler kullanın. Bu formdan bir değeri referans almak için alanın adını çift küçük parantezler ile kapatın, örn. {{firstName}}. Tüm veriyi çıktı olarak almak için {{*}} ve emaildeki veriyi HTML tablosu olarak çıktı almak için {{*:table}} kullanabilirsiniz.`,
                      },
                      components: {}, // Add an empty components object to satisfy the UIField type
                    },
                  } as Field // Cast to Field to avoid type issues
              }
            }
            return field
          })
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Form',
        },
        labels: {
          singular: {
            tr: 'Form Gönderimi',
            en: 'Form Submission',
          },
          plural: {
            tr: 'Form Gönderimleri',
            en: 'Form Submissions',
          },
        },
        // fields: ({ defaultFields }) => {
        //   return defaultFields.map((field): Field => {
        //     if ('submissionData' in field) {
        //      return {
        //         ...field,
        //         label: {
        //           en: 'Submission Data',
        //           tr: 'Gönderim Verisi',
        //         },
        //       }
        //     }
        //     return field
        //   })
        // },
      },
    }),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
    importExportPlugin({
      collections: [
        { slug: 'pages', export: { format: 'json' }, import: { disableJobsQueue: true } },
        { slug: 'posts', export: { format: 'json' }, import: { disableJobsQueue: true } },
        { slug: 'services', export: { format: 'json' }, import: { disableJobsQueue: true } },
        {
          slug: 'service-categories',
          export: { format: 'json' },
          import: { disableJobsQueue: true },
        },
        { slug: 'proposals', export: { format: 'csv' }, import: { disableJobsQueue: true } },
      ],
    }),
  ],
})
