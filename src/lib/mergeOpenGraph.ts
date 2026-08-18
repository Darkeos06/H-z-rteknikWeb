import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    "Ankara'da 25 yıllık tecrübe ile profesyonel tesisat, elektrik, iklimlendirme ve yapı hizmetleri. Uzman kadro, 7/24 acil servis ve garantili çözümler.",
  images: [
    {
      url: `${getServerSideURL()}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Hızır Teknik - Profesyonel Teknik Servis Hizmetleri',
    },
  ],
  siteName: 'Hızır Teknik',
  title: 'Hızır Teknik | Tamirat Tadilat Isıtma Soğutma Elektrik',
  locale: 'tr_TR',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
