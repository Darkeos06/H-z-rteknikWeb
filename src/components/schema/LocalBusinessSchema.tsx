import { SiteSetting } from '@/payload-types'

interface LocalBusinessSchemaProps {
  siteSettings: SiteSetting
}

export function LocalBusinessSchema({ siteSettings }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteSettings.companyName,
    description: siteSettings.company_description,
    telephone: siteSettings.contact?.phone,
    email: siteSettings.contact?.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteSettings.contact?.address,
      addressLocality: 'Ankara',
      addressRegion: 'Ankara',
      postalCode: '06824',
      addressCountry: 'TR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Eryaman, Etimesgut, Ankara',
    },
    priceRange: '$$',
    openingHours: 'Mo-Sa 08:00-18:00',
    url: 'https://hizirteknik.com',
    image: 'https://hizirteknik.com/og-image.jpg',
    sameAs: Object.values(siteSettings.social || {}).filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
