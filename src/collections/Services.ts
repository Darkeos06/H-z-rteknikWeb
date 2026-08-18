import { CollectionConfig } from 'payload'
import { formatSlugHook } from './fields/slug/formatSlug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { generatePreviewPath } from './hooks/generatePreviewPath'
import { getServerSideURL } from '@/lib/getURL'
import { PageRichTextBlock } from './blocks/PageRichTextBlok'
import { PageCTABlock } from './blocks/PageCTABlock'
import { PageGridSectionBlock } from './blocks/PageGridSectionBlock'
import { PageFAQBlock } from './blocks/PageFAQBlock'
import { PageTestimonialsBlock } from './blocks/PageTestimonialsBlock'
import { ServiceDescriptionBlock } from './blocks/ServiceDescriptionBlock'
import { revalidateCollection } from '@/lib/revalidate'

export const Services: CollectionConfig = {
  hooks: {
    afterChange: [revalidateCollection],
  },
  slug: 'services',
  access: {
    read: () => true, // Allow public read access
  },
  labels: {
    singular: {
      en: 'Service',
      tr: 'Hizmet',
    },
    plural: {
      en: 'Services',
      tr: 'Hizmetler',
    },
  },
  admin: {
    defaultColumns: ['title', 'related_category', 'description', '_status'],
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'services',
        })

        return `${getServerSideURL()}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'services',
      })

      return `${getServerSideURL()}${path}`
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Url Bağlantısı',
      admin: {
        readOnly: true,
        hidden: true,
      },
      hooks: {
        beforeValidate: [formatSlugHook('title')],
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: {
        en: 'Featured Service',
        tr: 'Öne Çıkan Hizmet',
      },
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: {
          en: 'Show this service on location pages',
          tr: 'Bu hizmeti konum sayfalarında göster',
        },
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Content',
            tr: 'İçerik',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Başlık',
                },
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Simge',
                  options: [
                    { label: 'Asma Tavan Sistemleri', value: 'asma-tavan-sistemleri' },
                    { label: 'Alçı Duvar Uygulamaları', value: 'alci-duvar-uygulamalari' },
                    { label: 'YTONG Tuğla Duvar', value: 'ytong-tugla-duvar' },
                    { label: 'Alçı İşleri', value: 'alci-isleri' },
                    { label: 'İç Mekan Boyama', value: 'ic-mekan-boyama' },
                    { label: 'Elektrik Arıza Onarımı', value: 'elektrik-ariza-onarimi' },
                    { label: 'Dimmer Anahtar Montajı', value: 'dimmer-anahtar-montaji' },
                    { label: 'Spot Montajı', value: 'spot-montaji' },
                    { label: 'LED Aydınlatma Sistemleri', value: 'led-aydinlatma-sistemleri' },
                    { label: 'Elektrik Sayacı Montajı', value: 'elektrik-sayaci-montaji' },
                    { label: 'Şalter Montaj ve Değişimi', value: 'salter-montaj-ve-degisimi' },
                    { label: 'Jeneratör Bağlantısı', value: 'jenerator-baglantisi' },
                    { label: 'Zayıf Akım Tesisatı', value: 'zayif-akim-tesisati' },
                    { label: 'Kablo Kanalı Döşeme', value: 'kablo-kanali-doseme' },
                    { label: 'Topraklama Hattı Çekimi', value: 'topraklama-hatti-cekimi' },
                    { label: 'Elektrik Tesisatı Yenileme', value: 'elektrik-tesisati-yenileme' },
                    { label: 'Kaçak Akım Rölesi Montajı', value: 'kacak-akim-rolesi-montaji' },
                    { label: 'Aydınlatma Tesisatı', value: 'aydinlatma-tesisati' },
                    { label: 'Sensör Montajı', value: 'sensor-montaji' },
                    { label: 'Avize Montajı', value: 'avize-montaji' },
                    { label: 'Priz ve Anahtar Değişimi', value: 'priz-ve-anahtar-degisimi' },
                    { label: 'Sigorta Kutusu Yenileme', value: 'sigorta-kutusu-yenileme' },
                    { label: 'Tesisat Kabloları Yenileme', value: 'tesisat-kablolari-yenileme' },
                    { label: 'Elektrik Panosu Yenileme', value: 'elektrik-panosu-yenileme' },
                    { label: 'Elektrik Arıza Tespiti', value: 'elektrik-ariza-tespiti' },
                    { label: 'Tesisat İzolasyonu', value: 'tesisat-izolasyonu' },
                    { label: 'Sıcak Su Sistemi Kurulumu', value: 'sicak-su-sistemi-kurulumu' },
                    { label: 'Otomasyon Sistemi Kurulumu', value: 'otomasyon-sistemi-kurulumu' },
                    {
                      label: 'Gaz Kaçağı Tespiti ve Onarımı',
                      value: 'gaz-kacagi-tespiti-ve-onarimi',
                    },
                    {
                      label: 'Isı İstasyonu Kurulum ve Bakımı',
                      value: 'isi-istasyonu-kurulum-ve-bakimi',
                    },
                    { label: 'Kalorifer Tesisatı Yenileme', value: 'kalorifer-tesisati-yenileme' },
                    {
                      label: 'Isı Pompası Montaj ve Bakımı',
                      value: 'isi-pompasi-montaj-ve-bakimi',
                    },
                    { label: 'Brülör Bakım ve Tamiri', value: 'brulor-bakim-ve-tamiri' },
                    {
                      label: 'Havalandırma Sistemi Kurulumu',
                      value: 'havalandirma-sistemi-kurulumu',
                    },
                    {
                      label: 'Fancoil Sistem Montaj ve Bakımı',
                      value: 'fancoil-sistem-montaj-ve-bakimi',
                    },
                    { label: 'VRF/VRV Sistem Kurulumu', value: 'vrf-vrv-sistem-kurulumu' },
                    { label: 'Termostatik Vana Montajı', value: 'termostatik-vana-montaji' },
                    { label: 'Radyatör Montaj ve Değişimi', value: 'radyator-montaj-ve-degisimi' },
                    {
                      label: 'Doğalgaz Tesisat Döşeme ve Bakımı',
                      value: 'dogalgaz-tesisat-doseme-ve-bakimi',
                    },
                    {
                      label: 'Kazan Dairesi Bakım ve Onarımı',
                      value: 'kazan-dairesi-bakim-ve-onarimi',
                    },
                    {
                      label: 'Yerden Isıtma Sistem Kurulumu',
                      value: 'yerden-isitma-sistem-kurulumu',
                    },
                    {
                      label: 'Çift Yönlü İlaçlı Petek Temizliği',
                      value: 'cift-yonlu-ilacli-petek-temizligi',
                    },
                    {
                      label: 'Klima Montaj, Söküm ve Bakımı',
                      value: 'klima-montaj-sokum-ve-bakimi',
                    },
                    {
                      label: 'Kombi Montaj, Tamir ve Bakımı',
                      value: 'kombi-montaj-tamir-ve-bakimi',
                    },
                    {
                      label: 'Merkezi Kalorifer Sistemi Kurulumu ve Bakımı',
                      value: 'merkezi-kalorifer-sistemi-kurulumu-ve-bakimi',
                    },
                    { label: 'Basınç Testi ve Kontrol', value: 'basinc-testi-ve-kontrol' },
                    {
                      label: 'Termal Kamera ile Kaçak Tespiti',
                      value: 'termal-kamera-ile-kacak-tespiti',
                    },
                    { label: 'Rögar ve Kanal Temizliği', value: 'rogar-ve-kanal-temizligi' },
                    { label: 'Yağmur Suyu Drenajı', value: 'yagmur-suyu-drenaji' },
                    { label: 'Duşakabin Kurulumu', value: 'dusakabin-kurulumu' },
                    { label: 'Lavabo ve Klozet Montajı', value: 'lavabo-ve-klozet-montaji' },
                    { label: 'Musluk ve Batarya Montajı', value: 'musluk-ve-batarya-montaji' },
                    { label: 'Pis Su Tesisatı Döşeme', value: 'pis-su-tesisati-doseme' },
                    { label: 'Pompa Sistemleri Kurulumu', value: 'pompa-sistemleri-kurulumu' },
                    {
                      label: 'Su Deposu Bakım ve Temizliği',
                      value: 'su-deposu-bakim-ve-temizligi',
                    },
                    { label: 'PPRC Boru Tesisatı', value: 'pprc-boru-tesisati' },
                    { label: 'Temiz Su Tesisatı Döşeme', value: 'temiz-su-tesisati-doseme' },
                    { label: 'Tesisat Yenileme ve Tadilat', value: 'tesisat-yenileme-ve-tadilat' },
                    { label: 'Tıkanıklık Açma Hizmeti', value: 'tikaniklik-acma-hizmeti' },
                    { label: 'Pis Su Gider Açma', value: 'pis-su-gider-acma' },
                    { label: 'Su Kaçağı Tespiti ve Tamiri', value: 'su-kacagi-tespiti-ve-tamiri' },
                    {
                      label: 'Drenaj Hattı ve Kuyusu Yapımı',
                      value: 'drenaj-hatti-ve-kuyusu-yapimi',
                    },
                    {
                      label: 'Su Arıtma ve Yumuşatma Sistemleri',
                      value: 'su-aritma-ve-yumusatma-sistemleri',
                    },
                    {
                      label: 'Su Sayaçları Kollektör Tesisatı',
                      value: 'su-sayaclari-kollektor-tesisati',
                    },
                    { label: 'Hidrofor Tesisatı Kurulumu', value: 'hidrofor-tesisati-kurulumu' },
                    {
                      label: 'Jet Sistemi Montaj ve Tamiri',
                      value: 'jet-sistemi-montaj-ve-tamiri',
                    },
                    { label: 'Su Seviye Kontrolü ve Ayarı', value: 'su-seviye-kontrolu-ve-ayari' },
                    { label: 'Havuz Kimyasalları Tedariki', value: 'havuz-kimyasallari-tedariki' },
                    {
                      label: 'Havuz Fırça ve Süpürge Sistemleri',
                      value: 'havuz-firca-ve-supurge-sistemleri',
                    },
                    { label: 'Kış Bakımı ve Koruma', value: 'kis-bakimi-ve-koruma' },
                    { label: 'Havuz Tesisat Yenileme', value: 'havuz-tesisat-yenileme' },
                    {
                      label: 'Havuz Motoru Bakım ve Tamiri',
                      value: 'havuz-motoru-bakim-ve-tamiri',
                    },
                    {
                      label: 'pH Dengeleme Sistemi Kurulumu',
                      value: 'ph-dengeleme-sistemi-kurulumu',
                    },
                    { label: 'Klor Jeneratörü Montajı', value: 'klor-jeneratoru-montaji' },
                    { label: 'Skimmer ve Süzgeç Değişimi', value: 'skimmer-ve-suzgec-degisimi' },
                    { label: 'Havuz Kaplama ve İzolasyonu', value: 'havuz-kaplama-ve-izolasyonu' },
                    {
                      label: 'UV Sterilizasyon Sistemi Montajı',
                      value: 'uv-sterilizasyon-sistemi-montaji',
                    },
                    { label: 'Havuz Robotu Tamiri', value: 'havuz-robotu-tamiri' },
                    {
                      label: 'Havuz Isıtma Sistemi Kurulumu',
                      value: 'havuz-isitma-sistemi-kurulumu',
                    },
                    {
                      label: 'Havuz Aydınlatma Sistemi Montajı',
                      value: 'havuz-aydinlatma-sistemi-montaji',
                    },
                    {
                      label: 'Otomatik Dozajlama Sistemi Kurulumu',
                      value: 'otomatik-dozajlama-sistemi-kurulumu',
                    },
                    { label: 'Havuz Filtre Sistemi Bakımı', value: 'havuz-filtre-sistemi-bakimi' },
                    {
                      label: 'Havuz Pompası Montaj ve Tamiri',
                      value: 'havuz-pompasi-montaj-ve-tamiri',
                    },
                    {
                      label: 'Havuz Suyu Analizi ve İlaçlama',
                      value: 'havuz-suyu-analizi-ve-ilaclama',
                    },
                    { label: 'Havuz Bakımı ve Temizliği', value: 'havuz-bakimi-ve-temizligi' },
                  ],
                },
              ],
            },

            {
              name: 'description',
              type: 'textarea',
              label: 'Açıklama',
            },
            {
              name: 'blocks',
              label: 'İçerik Bölümleri',
              labels: {
                singular: 'İçerik Bölümü',
                plural: 'İçerik Bölümleri',
              },
              type: 'blocks',
              minRows: 1,
              maxRows: 20,
              blocks: [
                PageRichTextBlock,
                PageCTABlock,
                PageGridSectionBlock,
                PageFAQBlock,
                PageTestimonialsBlock,
                ServiceDescriptionBlock,
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    {
      name: 'featured_image',
      type: 'upload',
      label: {
        en: 'Featured Image',
        tr: 'Öne Çıkan Görsel',
      },
      relationTo: 'media',
      admin: {
        description: {
          en: 'Recommended: 404x660px',
          tr: 'Önerilen: 404x660px',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'related_category',
      type: 'relationship',
      label: {
        en: 'Related Category',
        tr: 'İlgili Kategori',
      },
      relationTo: 'service-categories',
      filterOptions: () => {
        return {
          _status: {
            equals: 'published',
          },
        }
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'related_projects',
      type: 'relationship',
      label: {
        en: 'Related Projects',
        tr: 'Örnek İşler',
      },
      relationTo: 'projects',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'related_testimonials',
      type: 'relationship',
      label: {
        en: 'Related Testimonials',
        tr: 'Örnek Referanslar',
      },
      relationTo: 'testimonials',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 10000, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 10,
  },
}
