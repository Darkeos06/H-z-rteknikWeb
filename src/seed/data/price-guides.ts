/**
 * Price Guides Seed Data - 2026 Content Strategy Phase 3
 *
 * Bu dosya CONTENT_STRATEGY_2026.md'de tanımlanan fiyat rehberi sayfalarını içerir.
 * Tüm sayfalar DRAFT olarak oluşturulur.
 *
 * Kullanım:
 *   pnpm seed:price-guides
 *
 * NOT: Production veritabanı kullanılmaktadır!
 * NOT: Fiyatlar tahminidir, yayın öncesi güncellenmelidir!
 */

import {
  getPayloadInstance,
  createPage,
  createPageHeroBlock,
  createRichTextBlock,
  createRichTextHeading,
  createRichTextParagraph,
  createRichTextList,
} from '../index'

// ====================
// PRICE GUIDE DATA
// ====================

interface PriceGuideData {
  title: string
  description: string
  slug: string
  heroTitle: string
  heroDescription: string
  content: any[] // Rich text content
  meta: {
    title: string
    description: string
  }
}

/**
 * 4 Fiyat Rehberi Sayfası - Phase 3
 */
export const priceGuides: PriceGuideData[] = [
  // ============================================
  // Fiyat Rehberi 1: Kombi Fiyatları
  // ============================================
  {
    title: 'Kombi Fiyatları 2026',
    slug: 'fiyatlar/kombi',
    description: 'Ankara\'da 2026 yılı güncel kombi bakım, montaj ve tamir fiyatları.',
    heroTitle: 'Kombi Fiyatları 2026',
    heroDescription: 'Ankara\'da kombi bakımı, montajı ve tamiri için güncel 2026 fiyat rehberi.',
    meta: {
      title: 'Kombi Fiyatları 2026 | Bakım, Montaj, Tamir Ücretleri - Ankara | Hızır Teknik',
      description: '2026 güncel kombi fiyatları. Bakım 500-800 TL, montaj 1.500-3.000 TL. Ankara\'da ücretsiz keşif için Hızır Teknik\'i arayın.',
    },
    content: [
      createRichTextParagraph(
        'Ankara\'da kombi bakımı, montajı ve tamiri için güncel 2026 fiyatlarını bu rehberde bulabilirsiniz.'
      ),
      createRichTextParagraph(
        '⚠️ Önemli Not: Fiyatlar kombi markası, modeli, arıza türü ve işin kapsamına göre değişiklik gösterebilir. Kesin fiyat için ücretsiz keşif hizmetimizden yararlanın.'
      ),

      createRichTextHeading('Hızır Teknik Avantajları', 'h2'),
      createRichTextList([
        'Ücretsiz keşif ve fiyat teklifi',
        'Garanti kapsamında işçilik',
        'Orijinal yedek parça',
        '7/24 acil servis',
      ], 'bullet'),

      createRichTextHeading('Kombi Bakım Fiyatları 2026', 'h2'),

      createRichTextHeading('Standart Yıllık Bakım', 'h3'),
      createRichTextList([
        'Standart Bakım (Tek Kombi): 500 - 800 TL',
        'Detaylı Bakım (Kombi + Kalorifer): 800 - 1.200 TL',
        'Acil/Hafta Sonu Bakım: 700 - 1.000 TL',
      ], 'bullet'),

      createRichTextHeading('Standart Bakım İçeriği', 'h3'),
      createRichTextList([
        'Gaz basıncı kontrolü',
        'Genleşme tankı kontrolü',
        'Brülör ve elektrot temizliği',
        'Eşanjör kontrolü',
        'Genel sistem testi',
      ], 'bullet'),

      createRichTextParagraph(
        'Fiyat Aralığı Nedenleri: Kombi markası ve modeli, son bakım tarihi, sistemin genel durumu, hizmet günü ve saati.'
      ),

      createRichTextHeading('Kombi Montaj Fiyatları 2026', 'h2'),

      createRichTextHeading('Yeni Kombi Montajı', 'h3'),
      createRichTextList([
        'Standart Montaj (Kombi Dahil Değil): 1.500 - 2.500 TL',
        'Baca Bağlantılı Montaj: 2.000 - 3.000 TL',
        'Eski Kombi Sökümü + Yeni Montaj: 2.500 - 4.000 TL',
        'Yerden Isıtma Sistemine Bağlantı: 3.000 - 5.000 TL',
      ], 'bullet'),

      createRichTextHeading('Montaj Fiyatını Etkileyen Faktörler', 'h3'),
      createRichTextList([
        'Baca tipi (hermetik/bacalı)',
        'Mevcut tesisat durumu',
        'Konum ve erişilebilirlik',
        'Ek tesisat gereksinimleri',
      ], 'bullet'),

      createRichTextHeading('Kombi Tamir ve Parça Değişim Fiyatları', 'h2'),

      createRichTextHeading('Yaygın Arıza Onarımları', 'h3'),
      createRichTextList([
        '3 Yollu Vana Değişimi: 800 - 1.500 TL',
        'Pompa Değişimi: 1.000 - 2.000 TL',
        'Eşanjör Temizliği: 400 - 700 TL',
        'Eşanjör Değişimi: 1.500 - 3.500 TL',
        'Kart (Elektronik) Tamiri: 500 - 1.200 TL',
        'Kart Değişimi: 1.500 - 4.000 TL',
        'NTC Sensör Değişimi: 200 - 400 TL',
        'Genleşme Tankı: 300 - 600 TL',
        'Brülör Değişimi: 600 - 1.200 TL',
        'Gaz Valfi Değişimi: 1.000 - 2.500 TL',
      ], 'bullet'),

      createRichTextParagraph(
        'Arıza Tespit Ücreti: 150 - 250 TL (Onarım yapılırsa genellikle işçiliğe dahil edilir)'
      ),

      createRichTextParagraph(
        '✅ Garantili Onarım: Tüm onarımlarımız 6 ay işçilik garantisi kapsamındadır.'
      ),

      createRichTextHeading('Tasarruf İpuçları', 'h2'),
      createRichTextList([
        'Düzenli bakım yaptırın - bakımsız kombiler %20 daha fazla yakıt tüketir',
        'Enerji verimliliği yüksek kombi seçin',
        'Akıllı termostat kullanın - %10-15 tasarruf',
        'Kış öncesi kontrol yaptırın',
      ], 'bullet'),

      createRichTextHeading('Ücretsiz Keşif İçin Bizi Arayın', 'h2'),
      createRichTextParagraph(
        'Fiyat teklifimiz ücretsizdir. Evinize gelerek durumu değerlendirir, net fiyat sunarız. 0312 XXX XX XX'
      ),
    ],
  },

  // ============================================
  // Fiyat Rehberi 2: Klima Fiyatları
  // ============================================
  {
    title: 'Klima Fiyatları 2026',
    slug: 'fiyatlar/klima',
    description: 'Ankara\'da 2026 yılı güncel klima montaj, bakım ve gaz dolumu fiyatları.',
    heroTitle: 'Klima Fiyatları 2026',
    heroDescription: 'Ankara\'da klima montajı, bakımı ve gaz dolumu için güncel 2026 fiyat rehberi.',
    meta: {
      title: 'Klima Fiyatları 2026 | Montaj, Bakım, Gaz Dolumu - Ankara | Hızır Teknik',
      description: '2026 güncel klima fiyatları. Montaj 1.000-2.500 TL, bakım 300-500 TL. Ankara klima servisi için Hızır Teknik.',
    },
    content: [
      createRichTextParagraph(
        'Ankara\'da klima montajı, bakımı ve gaz dolumu için güncel 2026 fiyatlarını bu rehberde bulabilirsiniz.'
      ),
      createRichTextParagraph(
        '⚠️ Önemli Not: Fiyatlar klima kapasitesi, montaj zorluğu ve ek malzeme ihtiyacına göre değişiklik gösterebilir.'
      ),

      createRichTextHeading('Klima Montaj Fiyatları 2026', 'h2'),

      createRichTextHeading('Split Klima Montajı', 'h3'),
      createRichTextList([
        '9.000 - 12.000 BTU Montaj: 1.000 - 1.500 TL',
        '18.000 - 24.000 BTU Montaj: 1.500 - 2.500 TL',
        'Multi Split Montaj (İç Ünite Başına): 1.200 - 2.000 TL',
        'Eski Klima Sökümü: 300 - 500 TL',
        'Klima Taşıma (Söküm + Montaj): 1.500 - 2.500 TL',
      ], 'bullet'),

      createRichTextHeading('Montaja Dahil Olanlar', 'h3'),
      createRichTextList([
        '3 metre bakır boru',
        'Bağlantı elemanları',
        'Dış ünite montaj ayağı',
        'Elektrik bağlantısı',
        'Test ve devreye alma',
      ], 'bullet'),

      createRichTextHeading('Ek Malzeme Ücretleri', 'h3'),
      createRichTextList([
        'Bakır Boru (metre): 150 - 250 TL',
        'Kablo Kanalı: 50 - 100 TL/m',
        'İç Ünite Dekoratif Kanal: 100 - 200 TL',
        'Dış Ünite Koruma Kafesi: 300 - 600 TL',
      ], 'bullet'),

      createRichTextHeading('Klima Bakım Fiyatları 2026', 'h2'),

      createRichTextHeading('Periyodik Bakım', 'h3'),
      createRichTextList([
        'Tekli Klima Bakımı: 300 - 500 TL',
        'Çoklu Klima Bakımı (2-3 adet): 500 - 900 TL',
        'VRF/Multi Sistem Bakımı: 800 - 1.500 TL',
        'Detaylı Bakım + Dezenfektan: 400 - 600 TL',
      ], 'bullet'),

      createRichTextHeading('Bakım İçeriği', 'h3'),
      createRichTextList([
        'Filtre temizliği/değişimi',
        'Evaporatör temizliği',
        'Kondenser (dış ünite) temizliği',
        'Drenaj hattı kontrolü',
        'Gaz basıncı kontrolü',
        'Elektrik bağlantı kontrolü',
      ], 'bullet'),

      createRichTextHeading('Klima Gaz Dolumu Fiyatları 2026', 'h2'),

      createRichTextHeading('Gaz Türlerine Göre Fiyatlar', 'h3'),
      createRichTextList([
        'R22 (Eski Tip): Yasaklı - Değişim Önerilir',
        'R410A: 500 - 900 TL',
        'R32: 600 - 1.000 TL',
        'R407C: 500 - 800 TL',
      ], 'bullet'),

      createRichTextParagraph(
        '⚠️ Önemli Uyarı: Klima gazı kendiliğinden azalmaz. Gaz eksikliği varsa mutlaka kaçak vardır! Önce kaçak tespit edilip onarılmalıdır.'
      ),

      createRichTextList([
        'Kaçak Tespiti: 200 - 400 TL',
        'Kaçak Onarımı: Yerine göre 300 - 1.000 TL',
      ], 'bullet'),

      createRichTextHeading('Klima Arıza Onarım Fiyatları', 'h2'),
      createRichTextList([
        'Kompresör Değişimi: 2.500 - 5.000 TL',
        'Fan Motoru Değişimi: 600 - 1.200 TL',
        'Kart Tamiri: 400 - 800 TL',
        'Kart Değişimi: 1.000 - 2.500 TL',
        'Termostat Değişimi: 200 - 500 TL',
        'Kondenser Temizliği: 300 - 500 TL',
      ], 'bullet'),

      createRichTextParagraph(
        'Ekonomik Değerlendirme: 10 yaş üzeri klimalar veya kompresör değişimi cihaz değerinin %50\'sini geçiyorsa yeni klima düşünün.'
      ),

      createRichTextHeading('Ücretsiz Keşif', 'h2'),
      createRichTextParagraph(
        'Montaj ve bakım için ücretsiz keşif hizmeti sunuyoruz. 0312 XXX XX XX'
      ),
    ],
  },

  // ============================================
  // Fiyat Rehberi 3: Tesisat Fiyatları
  // ============================================
  {
    title: 'Tesisat Fiyatları 2026',
    slug: 'fiyatlar/tesisat',
    description: 'Ankara\'da 2026 yılı güncel su tesisatı, tıkanıklık açma ve sızıntı tespit fiyatları.',
    heroTitle: 'Tesisat Fiyatları 2026',
    heroDescription: 'Ankara\'da su tesisatı, tıkanıklık açma ve sızıntı tespiti için güncel 2026 fiyat rehberi.',
    meta: {
      title: 'Tesisat Fiyatları 2026 | Su Tesisatı, Tıkanıklık Açma - Ankara | Hızır Teknik',
      description: '2026 güncel tesisat fiyatları. Tıkanıklık açma 300-800 TL, sızıntı tespiti 400-800 TL. Ankara tesisatçı hizmeti.',
    },
    content: [
      createRichTextParagraph(
        'Ankara\'da su tesisatı, tıkanıklık açma ve sızıntı tespiti için güncel 2026 fiyatlarını bu rehberde bulabilirsiniz.'
      ),
      createRichTextParagraph(
        '⚠️ Önemli Not: Fiyatlar işin kapsamı ve zorluğuna göre değişiklik gösterebilir. Kesin fiyat için ücretsiz keşif talep edin.'
      ),

      createRichTextHeading('Tıkanıklık Açma Fiyatları 2026', 'h2'),

      createRichTextHeading('Ev İçi Tıkanıklıklar', 'h3'),
      createRichTextList([
        'Lavabo Tıkanıklığı: 200 - 400 TL',
        'Tuvalet Tıkanıklığı: 300 - 500 TL',
        'Küvet/Duş Tıkanıklığı: 250 - 450 TL',
        'Mutfak Gideri Tıkanıklığı: 300 - 500 TL',
      ], 'bullet'),

      createRichTextHeading('Ana Hat Tıkanıklıkları', 'h3'),
      createRichTextList([
        'Ana Gider Hattı (Manuel): 400 - 700 TL',
        'Ana Gider Hattı (Robotlu): 600 - 1.200 TL',
        'Kamera ile Görüntüleme: 400 - 800 TL',
        'Yüksek Basınçlı Yıkama: 800 - 1.500 TL',
      ], 'bullet'),

      createRichTextParagraph(
        'Acil Servis Farkı: Hafta sonu/resmi tatil +%30-50, Gece (22:00-08:00) +%50-75'
      ),

      createRichTextHeading('Sızıntı Tespit ve Onarım Fiyatları', 'h2'),

      createRichTextHeading('Sızıntı Tespiti', 'h3'),
      createRichTextList([
        'Akustik Sızıntı Tespiti: 400 - 700 TL',
        'Termal Kamera ile Tespit: 500 - 900 TL',
        'Gaz Test (Azot) ile Tespit: 600 - 1.000 TL',
        'Kapsamlı Bina Kontrolü: 1.000 - 2.000 TL',
      ], 'bullet'),

      createRichTextHeading('Sızıntı Onarımı', 'h3'),
      createRichTextList([
        'Basit Boru Onarımı: 200 - 500 TL',
        'Duvar İçi Boru Onarımı: 500 - 1.200 TL',
        'Döşeme Altı Boru Onarımı: 800 - 2.000 TL',
        'Boru Hattı Yenileme (metre): 150 - 300 TL',
      ], 'bullet'),

      createRichTextParagraph(
        'İstatistik: TÜİK verilerine göre Türkiye\'deki konutların %31.3\'ü nem ve sızıntı sorunu yaşamaktadır.'
      ),

      createRichTextHeading('Su Tesisatı Yenileme Fiyatları', 'h2'),

      createRichTextHeading('Komple Tesisat Yenileme', 'h3'),
      createRichTextList([
        '1+1 Daire: 5.000 - 10.000 TL',
        '2+1 Daire: 8.000 - 15.000 TL',
        '3+1 Daire: 12.000 - 22.000 TL',
        'Villa (250m²): 25.000 - 45.000 TL',
      ], 'bullet'),

      createRichTextHeading('Fiyata Dahil Olanlar', 'h3'),
      createRichTextList([
        'PPR veya bakır boru malzeme',
        'Tüm işçilik',
        'Vana ve bağlantı elemanları',
        'Duvar kapama dahil değil',
      ], 'bullet'),

      createRichTextHeading('Kısmi Yenileme', 'h3'),
      createRichTextList([
        'Banyo Tesisatı: 2.000 - 5.000 TL',
        'Mutfak Tesisatı: 1.500 - 4.000 TL',
        'Balkon/WC: 1.000 - 2.500 TL',
      ], 'bullet'),

      createRichTextHeading('Ücretsiz Keşif', 'h2'),
      createRichTextParagraph(
        'Tesisat sorunlarınız için ücretsiz keşif hizmeti sunuyoruz. Kırmadan tespit teknolojisi ile hızlı çözüm. 0312 XXX XX XX'
      ),
    ],
  },

  // ============================================
  // Fiyat Rehberi 4: Elektrik Fiyatları
  // ============================================
  {
    title: 'Elektrik Tesisatı Fiyatları 2026',
    slug: 'fiyatlar/elektrik',
    description: 'Ankara\'da 2026 yılı güncel elektrik arıza, tesisat yenileme ve pano fiyatları.',
    heroTitle: 'Elektrik Tesisatı Fiyatları 2026',
    heroDescription: 'Ankara\'da elektrik arıza onarımı, tesisat yenileme ve pano işlemleri için güncel 2026 fiyat rehberi.',
    meta: {
      title: 'Elektrik Tesisatı Fiyatları 2026 | Arıza, Yenileme, Pano - Ankara | Hızır Teknik',
      description: '2026 güncel elektrik fiyatları. Arıza onarımı 200-600 TL, priz montajı 100-200 TL. Ankara elektrikçi hizmeti.',
    },
    content: [
      createRichTextParagraph(
        'Ankara\'da elektrik arıza onarımı, tesisat yenileme ve pano işlemleri için güncel 2026 fiyatlarını bu rehberde bulabilirsiniz.'
      ),
      createRichTextParagraph(
        '⚠️ Önemli Not: Elektrik işleri yetki gerektirir. Tüm işlemlerimiz yönetmeliklere uygun yapılmaktadır.'
      ),

      createRichTextHeading('Elektrik Arıza Onarım Fiyatları 2026', 'h2'),

      createRichTextHeading('Yaygın Arızalar', 'h3'),
      createRichTextList([
        'Sigorta Atma Sorunu Tespiti: 150 - 300 TL',
        'Priz/Anahtar Değişimi: 100 - 200 TL',
        'Kablo Arızası Onarımı: 200 - 500 TL',
        'Topraklama Sorunu Giderme: 300 - 600 TL',
        'Kısa Devre Tespiti ve Onarımı: 250 - 600 TL',
        'Kaçak Akım Tespiti: 200 - 400 TL',
      ], 'bullet'),

      createRichTextHeading('Elektrik Panosu İşlemleri', 'h3'),
      createRichTextList([
        'Sigorta Değişimi (adet): 50 - 150 TL',
        'Kaçak Akım Rölesi Montajı: 200 - 400 TL',
        'Pano Düzenleme: 300 - 700 TL',
        'Yeni Pano Montajı (Daire): 800 - 1.500 TL',
        'Yeni Pano Montajı (Villa): 1.500 - 3.500 TL',
      ], 'bullet'),

      createRichTextParagraph(
        '7/24 Acil Elektrik Servisi: Acil durumlarda +%50-100 fark uygulanabilir.'
      ),

      createRichTextHeading('Elektrik Tesisatı Yenileme Fiyatları 2026', 'h2'),

      createRichTextHeading('Komple Tesisat Yenileme', 'h3'),
      createRichTextList([
        '1+1 Daire: 8.000 - 15.000 TL',
        '2+1 Daire: 12.000 - 22.000 TL',
        '3+1 Daire: 18.000 - 35.000 TL',
        'Villa (250m²): 35.000 - 65.000 TL',
      ], 'bullet'),

      createRichTextHeading('Fiyata Dahil Olanlar', 'h3'),
      createRichTextList([
        'NYM tipi bakır kablo',
        'Priz ve anahtarlar',
        'Yeni elektrik panosu',
        'Tüm işçilik',
      ], 'bullet'),

      createRichTextHeading('Fiyata Dahil Olmayanlar', 'h3'),
      createRichTextList([
        'Sıva ve boya işleri',
        'Özel aydınlatma armatürleri',
        'Akıllı ev sistemleri',
      ], 'bullet'),

      createRichTextHeading('Kısmi Yenileme', 'h3'),
      createRichTextList([
        'Oda Tesisatı (tek oda): 1.500 - 3.500 TL',
        'Banyo/Mutfak Hattı: 2.000 - 4.500 TL',
        'Klima Hattı Çekme: 500 - 1.200 TL',
        'Ek Priz Noktası: 300 - 600 TL',
      ], 'bullet'),

      createRichTextHeading('Aydınlatma ve Montaj Fiyatları', 'h2'),

      createRichTextHeading('Aydınlatma Montajları', 'h3'),
      createRichTextList([
        'Avize Montajı (Basit): 100 - 200 TL',
        'Avize Montajı (Karmaşık): 200 - 400 TL',
        'Spot Aydınlatma (adet): 80 - 150 TL',
        'LED Panel Montajı: 100 - 250 TL',
        'Bahçe Aydınlatması: 200 - 500 TL',
      ], 'bullet'),

      createRichTextHeading('Özel Montajlar', 'h3'),
      createRichTextList([
        'Şofben Elektrik Bağlantısı: 200 - 400 TL',
        'Elektrikli Fırın Bağlantısı: 250 - 500 TL',
        'Jakuzi Elektrik Hattı: 400 - 800 TL',
        'Elektrikli Araç Şarj Ünitesi: 1.500 - 4.000 TL',
      ], 'bullet'),

      createRichTextHeading('Güvenlik Standartları', 'h2'),
      createRichTextParagraph(
        'Tüm elektrik işlerimiz güncel yönetmeliklere uygun yapılmaktadır. Kaçak akım rölesi ve uygun topraklama sistemi standartlarımızdandır.'
      ),

      createRichTextHeading('Ücretsiz Keşif', 'h2'),
      createRichTextParagraph(
        'Elektrik tesisatı değerlendirmesi için ücretsiz keşif hizmeti sunuyoruz. 0312 XXX XX XX'
      ),
    ],
  },
]

// ====================
// SEED RUNNER
// ====================

/**
 * Seed price guide pages as drafts
 *
 * Kullanım: pnpm seed:price-guides
 */
export const seedPriceGuides = async () => {
  const payload = await getPayloadInstance()

  try {
    payload.logger.info('💰 Fiyat rehberleri seed başlatılıyor...')
    payload.logger.info('⚠️  Tüm sayfalar DRAFT olarak oluşturulacak!')
    payload.logger.info('⚠️  Fiyatlar tahminidir - yayın öncesi güncelleyin!')

    let createdCount = 0
    let skippedCount = 0

    for (const guide of priceGuides) {
      // Check if page already exists
      const existing = await payload.find({
        collection: 'pages',
        where: {
          title: { equals: guide.title },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        payload.logger.info(`⏭️  Atlanıyor (zaten var): ${guide.title}`)
        skippedCount++
        continue
      }

      // Create page with rich text content
      await createPage(
        payload,
        {
          title: guide.title,
          description: guide.description,
          blocks: [
            createPageHeroBlock({
              title: guide.heroTitle,
              description: guide.heroDescription,
            }),
            createRichTextBlock({
              content: guide.content,
            }),
          ],
          meta: guide.meta,
        },
        true // asDraft = true
      )

      payload.logger.info(`✅ Oluşturuldu (draft): ${guide.title}`)
      createdCount++
    }

    payload.logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    payload.logger.info(`📊 Sonuç: ${createdCount} oluşturuldu, ${skippedCount} atlandı`)
    payload.logger.info('📌 Sonraki adımlar:')
    payload.logger.info('   1. Admin panel\'den slug\'ları düzenleyin')
    payload.logger.info('   2. Fiyatları güncelleyin')
    payload.logger.info('   3. Telefon numarasını gerçek numara ile değiştirin')
    payload.logger.info('   4. Yayınlayın')
    payload.logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  } catch (error) {
    payload.logger.error('❌ Price guides seed hatası:')
    payload.logger.error(error)
    throw error
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedPriceGuides()
    .then(() => {
      console.log('✅ Price guides seeding completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Price guides seeding failed:', error)
      process.exit(1)
    })
}
