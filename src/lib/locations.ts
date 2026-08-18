export interface Location {
  name: string
  title: string
  description: string
}

export const LOCATIONS: { [key: string]: Location } = {
  ankara: {
    name: 'Ankara',
    title: 'Ankara Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Ankara'da profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
  },
  eryaman: {
    name: 'Eryaman',
    title: 'Eryaman Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Eryaman'da profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
  },
  etimesgut: {
    name: 'Etimesgut',
    title: 'Etimesgut Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Etimesgut'ta profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
  },
  cayyolu: {
    name: 'Çayyolu',
    title: 'Çayyolu Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Çayyolu'nda profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
  },
  sincan: {
    name: 'Sincan',
    title: 'Sincan Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Sincan'da profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
  },
  batikent: {
    name: 'Batıkent',
    title: 'Batıkent Tamirat, Tadilat ve Teknik Hizmetler',
    description:
      "Batıkent'te profesyonel tamirat, tadilat ve teknik servis hizmetleri. Ev ve işyeriniz için kaliteli ve güvenilir çözümler.",
  },
}

export type LocationKey = keyof typeof LOCATIONS

export function isValidLocation(location: string | number | symbol): location is LocationKey {
  return typeof location === 'string' && location in LOCATIONS
}

export function getLocationData(location: string): Location | null {
  if (isValidLocation(location)) {
    return LOCATIONS[location]
  }
  return null
}
