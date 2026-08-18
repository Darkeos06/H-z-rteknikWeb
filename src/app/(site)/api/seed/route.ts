import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET() {
  console.log('🌱 Starting Next-driven database seeding...')
  const payload = await getPayload({ config })

  try {
    // Cleanup existing records to prevent duplicates
    console.log('Cleaning up existing database records...')
    try {
      await payload.delete({
        collection: 'pages',
        where: { id: { exists: true } },
      })
      await payload.delete({
        collection: 'services',
        where: { id: { exists: true } },
      })
      await payload.delete({
        collection: 'service-categories',
        where: { id: { exists: true } },
      })
    } catch (cleanupErr) {
      console.log('Cleanup warning (might be empty):', cleanupErr)
    }

    // 1. Create Service Categories
    console.log('Creating service categories...')
    const catIsitma = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Isıtma ve Soğutma Sistemleri',
        slug: 'isitma-ve-sogutma-sistemleri',
        description: 'Kombi, klima, merkezi kalorifer ve yerden ısıtma sistemleri kurulumu, arıza tamiri ve periyodik bakımı.',
        icon: 'isitma-ve-sogutma',
        _status: 'published',
      },
    })

    const catHavuz = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Havuz Sistemleri',
        slug: 'havuz-sistemleri',
        description: 'Havuz bakımı, temizliği, kimyasal tedariki, ısıtma ve aydınlatma tesisatı montaj ve yenileme hizmetleri.',
        icon: 'havuz-sistemleri',
        _status: 'published',
      },
    })

    const catTesisat = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Su ve Tesisat Sistemleri',
        slug: 'su-ve-tesisat-sistemleri',
        description: 'Noktasal su kaçağı tespiti, pis su gider açma, temiz su tesisat döşeme ve komple tesisat yenileme.',
        icon: 'sihhi-tesisat',
        _status: 'published',
      },
    })

    const catElektrik = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Elektrik Tesisatı',
        slug: 'elektrik-tesisati',
        description: 'Ev ve işyerleri için kablo kanalı döşeme, jeneratör bağlantısı, LED aydınlatma, sigorta kutusu ve kablo yenileme.',
        icon: 'elektrik-tesisat',
        _status: 'published',
      },
    })

    // 2. Create Services
    console.log('Creating services...')

    // Category: Isıtma ve Soğutma Sistemleri
    const s1 = await payload.create({
      collection: 'services',
      data: {
        title: 'Kombi Montaj, Tamir ve Bakımı',
        slug: 'kombi-montaj-tamir-ve-bakimi',
        description: 'Ankara genelinde profesyonel kombi montajı, yıllık periyodik bakım ve arıza onarım çözümleri.',
        icon: 'kombi-montaj-tamir-ve-bakimi',
        featured: true,
        related_category: catIsitma.id,
        _status: 'published',
      },
    })

    const s2 = await payload.create({
      collection: 'services',
      data: {
        title: 'Klima Montaj, Söküm ve Bakımı',
        slug: 'klima-montaj-sokum-ve-bakimi',
        description: 'Split ve salon tipi klimaların montajı, gaz şarjı, söküm ve periyodik filtre temizliği.',
        icon: 'klima-montaj-sokum-ve-bakimi',
        featured: true,
        related_category: catIsitma.id,
        _status: 'published',
      },
    })

    const s3 = await payload.create({
      collection: 'services',
      data: {
        title: 'Merkezi Kalorifer Sistemi Kurulumu ve Bakımı',
        slug: 'merkezi-kalorifer-sistemi-kurulumu-ve-bakimi',
        description: 'Apartmanlar ve ticari binalar için merkezi ısıtma kazan dairesi kurulumu, brülör ayarı ve bakım hizmeti.',
        icon: 'merkezi-kalorifer-sistemi-kurulumu-ve-bakimi',
        featured: true,
        related_category: catIsitma.id,
        _status: 'published',
      },
    })

    const s4 = await payload.create({
      collection: 'services',
      data: {
        title: 'Yerden Isıtma Sistem Kurulumu',
        slug: 'yerden-isitma-sistem-kurulumu',
        description: 'Enerji tasarruflu, konforlu ve homojen ısı dağılımı sağlayan modern yerden ısıtma borulama çözümleri.',
        icon: 'yerden-isitma-sistem-kurulumu',
        featured: false,
        related_category: catIsitma.id,
        _status: 'published',
      },
    })

    const s5 = await payload.create({
      collection: 'services',
      data: {
        title: 'VRF/VRV Sistem Kurulumu',
        slug: 'vrf-vrv-sistem-kurulumu',
        description: 'Çok katlı binalar, oteller ve iş merkezleri için merkezi VRF/VRV iklimlendirme sistemleri planlama ve montajı.',
        icon: 'vrf-vrv-sistem-kurulumu',
        featured: false,
        related_category: catIsitma.id,
        _status: 'published',
      },
    })

    const s6 = await payload.create({
      collection: 'services',
      data: {
        title: 'Isı Pompası Montaj ve Bakımı',
        slug: 'isi-pompasi-montaj-ve-bakimi',
        description: 'Çevre dostu ve yüksek verimli havadan suya, sudan suya ısı pompası kurulumu ve devreye alma işlemleri.',
        icon: 'isi-pompasi-montaj-ve-bakimi',
        featured: false,
        related_category: catIsitma.id,
        _status: 'published',
      },
    })

    // Category: Havuz Sistemleri
    const s7 = await payload.create({
      collection: 'services',
      data: {
        title: 'Havuz Bakımı ve Temizliği',
        slug: 'havuz-bakimi-ve-temizligi',
        description: 'Periyodik havuz suyu analizi, dip temizliği, filtre yıkama ve genel havuz hijyen kontrolleri.',
        icon: 'havuz-bakimi-ve-temizligi',
        featured: true,
        related_category: catHavuz.id,
        _status: 'published',
      },
    })

    const s8 = await payload.create({
      collection: 'services',
      data: {
        title: 'Havuz Isıtma Sistemi Kurulumu',
        slug: 'havuz-isitma-sistemi-kurulumu',
        description: 'Dört mevsim havuz keyfi için güneş enerjili veya ısı pompalı havuz suyu ısıtma sistemleri montajı.',
        icon: 'havuz-isitma-sistemi-kurulumu',
        featured: false,
        related_category: catHavuz.id,
        _status: 'published',
      },
    })

    const s9 = await payload.create({
      collection: 'services',
      data: {
        title: 'Havuz Kimyasalları Tedariki',
        slug: 'havuz-kimyasallari-tedariki',
        description: 'Sağlık Bakanlığı onaylı havuz kloru, pH düşürücü, yosun önleyici ve çöktürücü kimyasal temini.',
        icon: 'havuz-kimyasallari-tedariki',
        featured: false,
        related_category: catHavuz.id,
        _status: 'published',
      },
    })

    const s10 = await payload.create({
      collection: 'services',
      data: {
        title: 'Havuz Aydınlatma Sistemi Montajı',
        slug: 'havuz-aydinlatma-sistemi-montaji',
        description: 'Sualtı LED armatürler, RGB aydınlatma sistemleri montajı ve güvenli 12V trafo bağlantısı.',
        icon: 'havuz-aydinlatma-sistemi-montaji',
        featured: false,
        related_category: catHavuz.id,
        _status: 'published',
      },
    })

    // Category: Su ve Tesisat Sistemleri
    const s11 = await payload.create({
      collection: 'services',
      data: {
        title: 'Su Kaçağı Tespiti ve Tamiri',
        slug: 'su-kacagi-tespiti-ve-tamiri',
        description: 'Akustik dinleme cihazları ve termal kameralar yardımıyla kırmadan noktasal su kaçağı bulma ve lokal tamirat.',
        icon: 'su-kacagi-tespiti-ve-tamiri',
        featured: true,
        related_category: catTesisat.id,
        _status: 'published',
      },
    })

    const s12 = await payload.create({
      collection: 'services',
      data: {
        title: 'Pis Su Gider Açma',
        slug: 'pis-su-gider-acma',
        description: 'Kanal görüntüleme kameraları ve robotik spiral makineler kullanarak mutfak, banyo ve tuvalet tıkanıklığı açma.',
        icon: 'pis-su-gider-acma',
        featured: true,
        related_category: catTesisat.id,
        _status: 'published',
      },
    })

    const s13 = await payload.create({
      collection: 'services',
      data: {
        title: 'Tesisat Yenileme ve Tadilat',
        slug: 'tesisat-yenileme-ve-tadilat',
        description: 'Bina içi temiz ve pis su boru hatlarının, kollektörlerin ve vana gruplarının komple yenilenmesi.',
        icon: 'tesisat-yenileme-ve-tadilat',
        featured: false,
        related_category: catTesisat.id,
        _status: 'published',
      },
    })

    const s14 = await payload.create({
      collection: 'services',
      data: {
        title: 'Temiz Su Tesisatı Döşeme',
        slug: 'temiz-su-tesisati-doseme',
        description: 'PPRC borular ile sıfırdan daire içi temiz su hattı çekimi, musluk ve batarya montaj işleri.',
        icon: 'temiz-su-tesisati-doseme',
        featured: false,
        related_category: catTesisat.id,
        _status: 'published',
      },
    })

    const s15 = await payload.create({
      collection: 'services',
      data: {
        title: 'Hidrofor Tesisatı Kurulumu',
        slug: 'hidrofor-tesisati-kurulumu',
        description: 'Apartmanlar ve siteler için sessiz çalışan paslanmaz su hidroforları, genleşme tankları kurulumu ve bakımı.',
        icon: 'hidrofor-tesisati-kurulumu',
        featured: true,
        related_category: catTesisat.id,
        _status: 'published',
      },
    })

    // Category: Elektrik Tesisatı
    const s16 = await payload.create({
      collection: 'services',
      data: {
        title: 'Kablo Kanalı Döşeme',
        slug: 'kablo-kanali-doseme',
        description: 'Ev ve işyerlerinde açıkta duran kabloların estetik, düzenli ve güvenli şekilde kanal içerisine alınması.',
        icon: 'kablo-kanali-doseme',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s17 = await payload.create({
      collection: 'services',
      data: {
        title: 'Zayıf Akım Tesisatı',
        slug: 'zayif-akim-tesisati',
        description: 'İnternet, telefon, interkom, zil, yangın alarmı ve güvenlik kamerası altyapı kablolama ve kurulum hizmetleri.',
        icon: 'zayif-akim-tesisati',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s18 = await payload.create({
      collection: 'services',
      data: {
        title: 'Jeneratör Bağlantısı',
        slug: 'jenerator-baglantisi',
        description: 'Elektrik kesintilerine karşı otomatik veya manuel transfer panolu jeneratör şebeke bağlantısı kurulumu.',
        icon: 'jenerator-baglantisi',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s19 = await payload.create({
      collection: 'services',
      data: {
        title: 'Şalter Montaj ve Değişimi',
        slug: 'salter-montaj-ve-degisimi',
        description: 'Pano içi ana şalterler, otomatik sigortalar ve koruma rölelerinin montajı ve güvenli değişimi.',
        icon: 'salter-montaj-ve-degisimi',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s20 = await payload.create({
      collection: 'services',
      data: {
        title: 'Elektrik Sayacı Montajı',
        slug: 'elektrik-sayaci-montaji',
        description: 'TEDAŞ ve enerji dağıtım şirketi şartnamelerine uygun monofaze veya trifaze elektrik sayacı montajı.',
        icon: 'elektrik-sayaci-montaji',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s21 = await payload.create({
      collection: 'services',
      data: {
        title: 'LED Aydınlatma Sistemleri',
        slug: 'led-aydinlatma-sistemleri',
        description: 'Tavan gizli ışık şeritleri, mutfak tezgah altı LED ve dekoratif aydınlatma tasarımları montajı.',
        icon: 'led-aydinlatma-sistemleri',
        featured: true,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s22 = await payload.create({
      collection: 'services',
      data: {
        title: 'Spot Montajı',
        slug: 'spot-montaji',
        description: 'Alçıpan asma tavanlara halojen veya LED spot armatürlerin kesimi, montajı ve kablolama işlemleri.',
        icon: 'spot-montaji',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s23 = await payload.create({
      collection: 'services',
      data: {
        title: 'Dimmer Anahtar Montajı',
        slug: 'dimmer-anahtar-montaji',
        description: 'Işık şiddetini ayarlayabileceğiniz modern dimmer (ayarlı) anahtar montajı ve aydınlatma bağlantıları.',
        icon: 'dimmer-anahtar-montaji',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s24 = await payload.create({
      collection: 'services',
      data: {
        title: 'Elektrik Arıza Onarımı',
        slug: 'elektrik-ariza-onarimi',
        description: 'Sigorta atması, priz yanması, kablo kopukluğu gibi tüm ani elektrik arızalarına 7/24 hızlı mobil müdahale.',
        icon: 'elektrik-ariza-onarimi',
        featured: true,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s25 = await payload.create({
      collection: 'services',
      data: {
        title: 'Elektrik Arıza Tespiti',
        slug: 'elektrik-ariza-tespiti',
        description: 'Multimetre ve faz ölçüm cihazları ile hatlardaki kısa devre, kaçak ve gerilim düşümlerinin noktasal tespiti.',
        icon: 'elektrik-ariza-tespiti',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s26 = await payload.create({
      collection: 'services',
      data: {
        title: 'Kaçak Akım Rölesi Montajı',
        slug: 'kacak-akim-rolesi-montaji',
        description: 'Hayat kurtarma ve yangın koruma eşikli kaçak akım koruma rölelerinin montajı, testi ve pano revizyonu.',
        icon: 'kacak-akim-rolesi-montaji',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s27 = await payload.create({
      collection: 'services',
      data: {
        title: 'Aydınlatma Tesisatı',
        slug: 'aydinlatma-tesisati',
        description: 'Ev, bahçe, ofis ve bina ortak alan aydınlatma armatürlerinin kablolama, montaj ve yenileme işleri.',
        icon: 'aydinlatma-tesisati',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s28 = await payload.create({
      collection: 'services',
      data: {
        title: 'Sensör Montajı',
        slug: 'sensor-montaji',
        description: 'Bina koridorları ve kapı önleri için hareket veya ışık algılayıcılı sensör montajı ve ayarları.',
        icon: 'sensor-montaji',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s29 = await payload.create({
      collection: 'services',
      data: {
        title: 'Avize Montajı',
        slug: 'avize-montaji',
        description: 'Her ağırlıkta ve modelde kristal, sarkıt veya tavan tipi avizelerin güvenli tavana dübellenmesi ve elektrik bağlantısı.',
        icon: 'avize-montaji',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s30 = await payload.create({
      collection: 'services',
      data: {
        title: 'Priz ve Anahtar Değişimi',
        slug: 'priz-ve-anahtar-degisimi',
        description: 'Eski, yıpranmış veya rengi solmuş priz ve anahtarların modern, emniyet kapaklı modellerle değişimi.',
        icon: 'priz-ve-anahtar-degisimi',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s31 = await payload.create({
      collection: 'services',
      data: {
        title: 'Sigorta Kutusu Yenileme',
        slug: 'sigorta-kutusu-yenileme',
        description: 'Eski tip sigorta kutularının sökülerek yangın ve can emniyetli, modern sigorta kutularıyla komple yenilenmesi.',
        icon: 'sigorta-kutusu-yenileme',
        featured: false,
        related_category: catElektrik.id,
        _status: 'published',
      },
    })

    const s32 = await payload.create({
      collection: 'services',
      data: {
        title: 'Tesisat Kabloları Yenileme',
        slug: 'tesisat-kablolari-yenileme',
        description: 'Eski binalardaki ömrünü tamamlamış, yangın riski taşıyan alüminyum veya ince bakır kabloların halogen-free kablolarla değişimi.',
        icon: 'tesisat-kablolari-yenileme',
        featured: false,
        related_category: catElektrik.id,
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
            featuredServices: [s1.id, s2.id, s7.id, s11.id, s12.id, s24.id],
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
            services: [catIsitma.id, catHavuz.id, catTesisat.id, catElektrik.id],
          },
          {
            blockType: 'about-section-block',
            content: {
              subtitle: 'Biz Kimiz',
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
                icon: 'sertifikali-usta',
              },
              {
                title: '7/24 Hızlı Mobil Servis',
                description: 'Ankara genelinde 6 adet mobil acil servis ekibimizle en kısa sürede ulaşıyoruz.',
                icon: '7-24-hizmet',
              },
              {
                title: '1 Yıl İşçilik Garantisi',
                description: 'Gerçekleştirdiğimiz her türlü tamirat ve parça değişimi 1 yıl güvencemiz altındadır.',
                icon: 'iscilik-ve-malzeme-garantisi',
              },
              {
                title: 'TSE Standartlarında Malzeme',
                description: 'Projelerimizin tamamında onaylı, korozyona dayanıklı birinci sınıf malzemeler kullanırız.',
                icon: '25-yillik-tecrube',
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
          phone: '0540 775 12 50',
          secondaryPhone: '0540 775 12 50',
          whatsapp: '905407751250',
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

    console.log('✅ Next-driven database seeding completed successfully!')
    return NextResponse.json({ success: true, message: 'Database seeded successfully' })
  } catch (error: any) {
    console.error('❌ Next-driven database seeding failed:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
