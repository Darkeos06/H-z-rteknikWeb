import type { ContentTemplate, FAQItem, ProgrammaticPageData } from './types'
import { ANKARA_DISTRICTS } from './locations-extended'

export function generateLocationServiceContent(
  locationSlug: string,
  locationName: string,
  serviceTitle: string,
  serviceDescription?: string,
): ContentTemplate {
  const extLoc = ANKARA_DISTRICTS[locationSlug]
  const neighborhoodsText = extLoc?.neighborhoods && extLoc.neighborhoods.length > 0
    ? `özellikle ${extLoc.neighborhoods.slice(0, 4).join(', ')} mahallelerinde`
    : 'bölgenin genelinde'

  return {
    titleTemplate: `${serviceTitle} - ${locationName}`,
    descriptionTemplate: `${locationName} bölgesinde profesyonel ${serviceTitle.toLowerCase()} hizmeti. Hızır Teknik kalitesiyle hızlı, güvenilir ve uygun fiyatlı çözümler.`,
    h1Template: `${locationName} ${serviceTitle}`,
    introTemplate: `Hızır Teknik olarak ${locationName} bölgesinde (${neighborhoodsText}) profesyonel ${serviceTitle.toLowerCase()} hizmetimizi en kaliteli şekilde sunmaktayız. ${
      serviceDescription ||
      `Bölgeye özel mobil ekiplerimiz ve hızlı servis ağımız ile acil arıza ve bakım ihtiyaçlarınıza anında çözüm üretiyoruz.`
    }`,
    faqTemplates: generateServiceFAQs(locationName, serviceTitle),
  }
}

export function generateLocationCategoryContent(
  locationSlug: string,
  locationName: string,
  categoryTitle: string,
  categoryDescription?: string,
): ContentTemplate {
  const extLoc = ANKARA_DISTRICTS[locationSlug]
  const neighborhoodsText = extLoc?.neighborhoods && extLoc.neighborhoods.length > 0
    ? `özellikle ${extLoc.neighborhoods.slice(0, 4).join(', ')} mahallelerinde`
    : 'bölgenin genelinde'

  return {
    titleTemplate: `${categoryTitle} - ${locationName}`,
    descriptionTemplate: `${locationName} bölgesinde ${categoryTitle.toLowerCase()} hizmetlerimiz. Profesyonel ekip, kaliteli malzeme ve uygun fiyatlarla hizmetinizdeyiz.`,
    h1Template: `${locationName} ${categoryTitle} Hizmetleri`,
    introTemplate: `${locationName} bölgesinde (${neighborhoodsText}) sunduğumuz profesyonel ${categoryTitle.toLowerCase()} hizmetlerimiz ile yanınızdayız. ${
      categoryDescription ||
      'Deneyimli ekibimiz ve kaliteli malzemelerimizle en iyi teknik servis deneyimini sunuyoruz.'
    }`,
    faqTemplates: generateCategoryFAQs(locationName, categoryTitle),
  }
}

export function generateLocationHubContent(
  locationSlug: string,
  locationName: string,
  locationDescription?: string,
): ContentTemplate {
  const extLoc = ANKARA_DISTRICTS[locationSlug]
  const neighborhoodsText = extLoc?.neighborhoods && extLoc.neighborhoods.length > 0
    ? `özellikle ${extLoc.neighborhoods.slice(0, 5).join(', ')} semtleri ve çevreleri`
    : 'bölge geneli'

  return {
    titleTemplate: `${locationName} Teknik Servis Hizmetleri`,
    descriptionTemplate: `${locationName} bölgesinde kombi, klima, tesisat, elektrik ve tadilat hizmetleri. Hızır Teknik ile aynı gün servis ve uygun fiyat garantisi.`,
    h1Template: `${locationName} Teknik Servis Hizmetleri`,
    introTemplate:
      locationDescription ||
      `${locationName} bölgesinde (${neighborhoodsText}) sunduğumuz tüm teknik servis hizmetleri. Hızır Teknik olarak ${locationName} genelinde kaliteli, hızlı ve güvenilir teknik servis çözümleri sunuyoruz.`,
    faqTemplates: generateHubFAQs(locationName),
  }
}

function generateServiceFAQs(locationName: string, serviceTitle: string): FAQItem[] {
  const serviceLower = serviceTitle.toLowerCase()

  return [
    {
      question: `${locationName} bölgesinde ${serviceLower} hizmeti veriyor musunuz?`,
      answer: `Evet, Hızır Teknik olarak ${locationName} ve çevresinde profesyonel ${serviceLower} hizmeti vermekteyiz. Deneyimli ekibimiz ile aynı gün servis imkanı sunuyoruz.`,
    },
    {
      question: `${locationName}'da ${serviceLower} fiyatları ne kadar?`,
      answer: `${serviceTitle} fiyatlarımız işin kapsamına göre değişmektedir. Ücretsiz keşif hizmetimizle size en uygun fiyat teklifini sunuyoruz. Detaylı bilgi için bizi arayabilirsiniz.`,
    },
    {
      question: `${serviceTitle} için ne kadar sürede gelirsiniz?`,
      answer: `${locationName} bölgesinde genellikle aynı gün içinde servis sağlıyoruz. Acil durumlar için 7/24 hizmet vermekteyiz.`,
    },
    {
      question: `${serviceTitle} hizmetinizde garanti var mı?`,
      answer: `Evet, tüm ${serviceLower} hizmetlerimizde işçilik garantisi sunuyoruz. Kullandığımız malzemeler de garantili ve kalitelidir.`,
    },
  ]
}

function generateCategoryFAQs(locationName: string, categoryTitle: string): FAQItem[] {
  const categoryLower = categoryTitle.toLowerCase()

  return [
    {
      question: `${locationName}'da hangi ${categoryLower} hizmetlerini sunuyorsunuz?`,
      answer: `${locationName} bölgesinde kapsamlı ${categoryLower} hizmetleri sunmaktayız. Montaj, bakım, onarım ve yenileme işlemlerinin tamamında profesyonel hizmet veriyoruz.`,
    },
    {
      question: `${categoryTitle} hizmetleri için randevu nasıl alabilirim?`,
      answer: `Telefon, WhatsApp veya web sitemiz üzerinden kolayca randevu alabilirsiniz. Size en uygun zamanda hizmet vermek için hazırız.`,
    },
    {
      question: `${locationName}'da acil ${categoryLower} hizmeti var mı?`,
      answer: `Evet, ${locationName} ve çevresinde 7/24 acil servis hizmeti sunuyoruz. Acil durumlarınızda bizi arayabilirsiniz.`,
    },
  ]
}

function generateHubFAQs(locationName: string): FAQItem[] {
  return [
    {
      question: `${locationName}'da hangi teknik servis hizmetlerini sunuyorsunuz?`,
      answer: `${locationName} bölgesinde kombi, klima, tesisat, elektrik, tadilat ve daha birçok teknik servis hizmeti sunmaktayız. Tüm hizmetlerimizi sayfamızda inceleyebilirsiniz.`,
    },
    {
      question: `${locationName}'da aynı gün servis mümkün mü?`,
      answer: `Evet, ${locationName} bölgesinde genellikle aynı gün servis imkanı sunuyoruz. Yoğunluğa bağlı olarak en kısa sürede yanınızda oluyoruz.`,
    },
    {
      question: `Hızır Teknik'in ${locationName}'daki hizmet bölgeleri nereler?`,
      answer: `${locationName} merkez ve tüm mahallelerinde hizmet vermekteyiz. Çevre ilçelere de servis sağlıyoruz.`,
    },
    {
      question: `${locationName}'da ücretsiz keşif yapıyor musunuz?`,
      answer: `Evet, ${locationName} bölgesinde ücretsiz keşif hizmeti sunuyoruz. Keşif sonrası size detaylı fiyat teklifi veriyoruz.`,
    },
  ]
}

export function interpolateTemplate(template: string, variables: Record<string, string>): string {
  let result = template
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(new RegExp(`{{${key}}}`, 'g'), value)
  }
  return result
}

export function generateUniqueContent(data: ProgrammaticPageData): ContentTemplate {
  const { templateType, location, service, category } = data

  switch (templateType) {
    case 'location-service':
      if (location && service) {
        return generateLocationServiceContent(location.slug, location.name, service.title, service.description)
      }
      break
    case 'location-category':
      if (location && category) {
        return generateLocationCategoryContent(location.slug, location.name, category.title, category.description)
      }
      break
    case 'location-hub':
      if (location) {
        return generateLocationHubContent(location.slug, location.name, location.description)
      }
      break
  }

  return {
    titleTemplate: 'Hızır Teknik',
    descriptionTemplate: 'Profesyonel teknik servis hizmetleri',
    h1Template: 'Hızır Teknik',
    introTemplate: 'Profesyonel teknik servis hizmetleri sunuyoruz.',
  }
}

