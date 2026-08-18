import { getPayload } from 'payload'
import config from '../payload.config.ts'

export const runSetup = async () => {
  console.log('🌱 Starting automatic database setup...')
  const payload = await getPayload({ config })

  try {
    // 1. Create Service Categories
    console.log('Creating service categories...')
    const catKombi = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Kombi ve Isıtma',
        slug: 'kombi-ve-isitma',
        description: 'Merkezi ısıtma, kombi ve kaskad kazan dairesi revizyon hizmetleri.',
        icon: 'isitma-ve-sogutma',
        _status: 'published',
      },
    })

    const catKlima = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Klima ve Havalandırma',
        slug: 'klima-ve-havalandirma',
        description: 'VRF sistemleri, split klima bakım ve montaj çözümleri.',
        icon: 'isitma-ve-sogutma',
        _status: 'published',
      },
    })

    const catTesisat = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Sıhhi Tesisat',
        slug: 'sihhi-tesisat',
        description: 'Su kaçağı tespiti, kollektör değişimi ve temiz su boru hatları yenileme.',
        icon: 'sihhi-tesisat',
        _status: 'published',
      },
    })

    const catHidrofor = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Hidrofor ve Pompa',
        slug: 'hidrofor-ve-pompa',
        description: 'Sessiz apartman hidrofor pompaları montajı ve arıza onarımları.',
        icon: 'havuz-sistemleri',
        _status: 'published',
      },
    })

    // 2. Create Services
    console.log('Creating services...')
    const s1 = await payload.create({
      collection: 'services',
      data: {
        title: 'Kombi Yıllık Periyodik Bakımı',
        slug: 'kombi-bakimi',
        description: 'Gaz basıncı ve sirkülasyon pompası performans optimizasyonu.',
        featured: true,
        related_category: catKombi.id,
        _status: 'published',
      },
    })

    const s2 = await payload.create({
      collection: 'services',
      data: {
        title: 'Kaskad Kazan Dairesi Kurulumu',
        slug: 'kaskad-kazan-kurulumu',
        description: 'Çoklu yoğuşmalı kazan dairesi otomasyonu ve yüksek verimli kaskad kurulumu.',
        featured: true,
        related_category: catKombi.id,
        _status: 'published',
      },
    })

    const s3 = await payload.create({
      collection: 'services',
      data: {
        title: 'VRF Merkezi Klima Kurulumu',
        slug: 'vrf-klima-kurulumu',
        description: 'İş merkezleri ve oteller için akıllı VRF dış ünite yerleşimi ve iç ünite bakımı.',
        featured: true,
        related_category: catKlima.id,
        _status: 'published',
      },
    })

    const s4 = await payload.create({
      collection: 'services',
      data: {
        title: 'Kombi & Radyatör Tesisatı Temizliği',
        slug: 'radyator-temizligi',
        description: 'Özel kimyasal solüsyonlarla tıkanıklık giderme ve radyatör ısıtma verimi artışı.',
        featured: true,
        related_category: catKombi.id,
        _status: 'published',
      },
    })

    const s5 = await payload.create({
      collection: 'services',
      data: {
        title: 'Akıllı Su Kaçağı Tespiti ve Onarımı',
        slug: 'su-kacagi-tespiti',
        description: 'Termal kamera ve akustik dinleme cihazları ile kırmadan noktasal su kaçağı bulma.',
        featured: true,
        related_category: catTesisat.id,
        _status: 'published',
      },
    })

    const s6 = await payload.create({
      collection: 'services',
      data: {
        title: 'Sessiz Hidrofor Pompa Montajı',
        slug: 'hidrofor-montaji',
        description: 'Apartmanlar ve sanayi tesisleri için yeni nesil sessiz paslanmaz hidrofor montajı.',
        featured: true,
        related_category: catHidrofor.id,
        _status: 'published',
      },
    })

    // 3. Create Homepage
    console.log('Creating homepage (ana-sayfa)...')
    const homepage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Ana Sayfa',
        slug: 'ana-sayfa',
        description: 'Hızır Teknik Resmi Web Sitesi. Ankara geneli tamirat, tadilat ve bakım mühendisliği.',
        blocks: [
          {
            blockType: 'home-hero-section',
            headingRotation: [
              { text: 'Tadilat Tecrübe İşidir' },
              { text: '25 Yıllık Deneyim ve Güven' },
              { text: 'Ankara Geneli Hızlı Servis' },
            ],
            subHeading: 'Hızır Teknik Mühendislik ve Tamirat Hizmetleri',
            description: 'Kombi, klima, sıhhi tesisat ve elektrik işlerinde Ankara genelinde 25 yılı aşkın süredir profesyonel çözümler sunuyoruz.',
            featuredServices: [s1.id, s2.id, s3.id, s5.id],
            servicesLink: {
              text: 'Tüm Hizmetlerimiz',
              url: '/hizmetlerimiz',
            },
          },
          {
            blockType: 'services-carousel',
            heading: {
              subtitle: 'Uzmanlık Alanlarımız',
              title: 'Geniş Hizmet Yelpazemiz',
            },
            viewAllLink: {
              text: 'Hepsini Gör',
              url: '/hizmetlerimiz',
            },
            // @ts-expect-error categories are passed as services field
            services: [catKombi.id, catKlima.id, catTesisat.id, catHidrofor.id],
          },
          {
            blockType: 'about-section-block',
            content: {
              subtitle: 'KURUMSAL PROFİLİMİZ',
              title: '25 Yıllık Güven ve Mühendislik Tecrübesi',
              description: 'Hızır Teknik, Ankara genelinde 25 yılı aşkın süredir bireysel ve endüstriyel tesisat, iklimlendirme ve elektrik altyapı projeleri yönetmektedir. Alanında uzman sertifikalı mühendis ve teknik usta kadromuzla, binalarınızın ve endüstriyel tesislerinizin teknik operasyonlarını sıfır hata prensibi ile yürütüyoruz. Yapılan tüm onarım ve montaj işleri Hızır Teknik garantisi altındadır.',
              button: {
                text: 'Hakkımızda Detaylı Bilgi',
                url: '/hakkimizda',
              },
            },
          },
          {
            blockType: 'why-choose-us',
            content: {
              subtitle: 'NEDEN BİZİ SEÇMELİSİNİZ?',
              title: 'Sıfır Hata Güvencesi ve Uzman Kadro',
              description: 'Tüm teknik altyapı işlerinizde birinci sınıf onaylı malzemeler ve 1 yıl garantili profesyonel işçilik sunuyoruz.',
            },
            features: [
              {
                title: 'Sertifikalı Ustalık',
                description: 'Tüm ekiplerimiz mesleki yeterlilik belgelerine ve mühendislik eğitimine sahiptir.',
                icon: 'ayarlar',
              },
              {
                title: '7/24 Hızlı Mobil Servis',
                description: 'Ankara genelinde 6 adet mobil acil servis ekibimizle en kısa sürede ulaşıyoruz.',
                icon: 'ayarlar',
              },
              {
                title: '1 Yıl İşçilik Garantisi',
                description: 'Gerçekleştirdiğimiz her türlü tamirat ve parça değişimi 1 yıl güvencemiz altındadır.',
                icon: 'ayarlar',
              },
              {
                title: 'TSE Standartlarında Malzeme',
                description: 'Projelerimizin tamamında onaylı, korozyona dayanıklı birinci sınıf malzemeler kullanırız.',
                icon: 'ayarlar',
              },
            ],
          },
        ],
        _status: 'published',
      },
    })

    // 4. Update Site Settings
    console.log('Configuring global site settings...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        companyName: 'Hızır Teknik',
        company_description: 'Ankara genelinde 25 yıldır profesyonel tesisat, klima, kombi, hidrofor ve elektrik tamirat hizmetleri.',
        contact: {
          email: 'bilgi@hizirteknik.com',
          phone: '+90 532 123 45 67',
          secondaryPhone: '+90 312 987 65 43',
          whatsapp: '905321234567',
          address: 'Çankaya, Ankara, Türkiye',
        },
        social: {
          facebook: 'https://facebook.com/hizirteknik',
          instagram: 'https://instagram.com/hizirteknik',
        },
        mainNavigation: [homepage.id],
        copyright: '© 2026 Hızır Teknik. Tüm Hakları Saklıdır.',
      },
    })

    console.log('✅ Automatic database setup completed successfully!')
  } catch (error) {
    console.error('❌ Database setup failed:', error)
    throw error
  }
}

// Run setup directly if called
if (import.meta.url === `file://${process.argv[1]}`) {
  runSetup()
    .then(() => {
      console.log('✅ Setup script completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Setup script failed:', error)
      process.exit(1)
    })
}
