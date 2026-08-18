/**
 * FAQ Pages Seed Data - 2026 Content Strategy Phase 2
 *
 * Bu dosya CONTENT_STRATEGY_2026.md'de tanımlanan SSS/FAQ sayfalarını içerir.
 * Tüm sayfalar DRAFT olarak oluşturulur.
 *
 * Kullanım:
 *   pnpm seed:faq-pages
 *
 * NOT: Production veritabanı kullanılmaktadır!
 */

import {
  getPayloadInstance,
  createPage,
  createPageHeroBlock,
  createFAQBlock,
  FAQItem,
} from '../index'

// ====================
// FAQ PAGE DATA
// ====================

interface FAQPageData {
  title: string
  description: string
  slug: string
  heroTitle: string
  heroDescription: string
  faqTitle: string
  faqSubtitle: string
  faqs: FAQItem[]
  meta: {
    title: string
    description: string
  }
}

/**
 * 4 Ana SSS Sayfası - Phase 2
 */
export const faqPages: FAQPageData[] = [
  // ============================================
  // SSS 1: İklimlendirme ve Isıtma
  // ============================================
  {
    title: 'İklimlendirme ve Isıtma SSS',
    slug: 'sss/iklimlendirme-isitma',
    description: 'Kombi, klima ve ısıtma sistemleri hakkında sıkça sorulan sorular ve cevapları.',
    heroTitle: 'İklimlendirme ve Isıtma SSS',
    heroDescription: 'Kombi bakımı, klima servisi ve ısıtma sistemleri hakkında merak ettiğiniz her şey.',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSubtitle: 'Isıtma ve soğutma sistemleri hakkında en çok sorulan sorular ve profesyonel cevapları.',
    meta: {
      title: 'İklimlendirme ve Isıtma SSS - 2026 Güncel | Hızır Teknik',
      description: 'Kombi bakımı, klima servisi, ısı pompası ve merkezi ısıtma hakkında en çok sorulan sorular. Ankara\'da profesyonel iklimlendirme hizmeti için Hızır Teknik.',
    },
    faqs: [
      {
        question: 'Kombi bakımı ne sıklıkla yapılmalıdır?',
        answer: `Kombi bakımı yılda en az 1 kez, tercihen kış sezonu öncesinde (Eylül-Ekim) yapılmalıdır.

Düzenli bakımın faydaları:
• Güvenlik: Gaz kaçağı ve karbon monoksit riskini önler
• Verimlilik: Düzenli bakım ile %15-20 enerji tasarrufu sağlanır
• Garanti: Çoğu üretici yıllık bakımı garanti şartı olarak belirler
• Ömür: Bakımsız kombiler 8-10 yıl, bakımlı kombiler 15-20 yıl dayanır

Türkiye'de 26.6 milyon hanenin %81'i doğalgaz kullanmaktadır (TÜİK 2024). Kış yoğunluğundan kaçınmak için Eylül ayında randevu almanızı öneririz.`,
      },
      {
        question: 'Klima ne zaman bakıma alınmalıdır?',
        answer: `Klima bakımı yılda 2 kez yapılmalıdır:
• Yaz sezonu öncesi (Nisan-Mayıs)
• Kış sezonu öncesi (Ekim-Kasım) - ısıtma modeli için

Bakım kapsamı:
• Filtre temizliği/değişimi
• Gaz basıncı kontrolü
• Drenaj hattı temizliği
• Elektrik bağlantıları kontrolü
• İç ve dış ünite temizliği

Dikkat: Bakımsız klima %30'a kadar daha fazla enerji tüketir. Kirli filtreler sağlık sorunlarına yol açabilir.

2026 Türkiye HVAC pazarı $2.52 milyar değerinde olup, %5.87 yıllık büyüme göstermektedir.`,
      },
      {
        question: 'Isı pompası mı yoksa kombi mi tercih edilmeli?',
        answer: `Tercih, konut durumunuza ve bütçenize göre değişir:

Isı Pompası Avantajları:
• %40-60 enerji tasarrufu
• Hem ısıtma hem soğutma
• Çevre dostu
• 15-20 yıl ömür

Kombi Avantajları:
• Daha düşük kurulum maliyeti
• Mevcut tesisat uyumu
• Hızlı ısınma
• Yaygın servis ağı

2026 Türkiye Isı Pompası Pazarı: $740 milyon değerinde, 2030'da $975 milyona ulaşması bekleniyor.

Önerimiz: Yeni binalarda ve iyi yalıtımlı evlerde ısı pompası, mevcut doğalgaz altyapısı olanlarda kombi daha ekonomik olabilir. Ücretsiz keşif ile evinize en uygun çözümü belirleyelim.`,
      },
      {
        question: 'Kombim su ısıtmıyor, sorun ne olabilir?',
        answer: `En yaygın nedenler:

1. 3 Yollu Vana Arızası
   - Belirti: Kalorifer çalışıyor ama sıcak su gelmiyor
   - Çözüm: Vana değişimi gerekebilir

2. Genleşme Tankı Problemi
   - Belirti: Su basıncı sürekli düşüyor
   - Çözüm: Tank basıncı ayarı veya değişimi

3. NTC Sensör Hatası
   - Belirti: Yanlış sıcaklık ölçümü
   - Çözüm: Sensör değişimi

4. Eşanjör Kireç Birikimi
   - Belirti: Su geç ısınıyor veya hiç ısınmıyor
   - Çözüm: Kimyasal temizlik

Profesyonel yardım için bizi arayın. Arıza tespit ücreti onarım yapılırsa işçiliğe dahildir.`,
      },
      {
        question: 'Merkezi ısıtma sisteminde enerji tasarrufu nasıl sağlanır?',
        answer: `Termostatik vana kullanımı, yalıtım ve düzenli bakım ile %30'a kadar tasarruf mümkündür:

1. Termostatik Radyatör Vanası: Her odayı ayrı kontrol edin (%10-15 tasarruf)
2. Akıllı Termostat: Programlanabilir ısıtma saatleri (%15-20 tasarruf)
3. Yalıtım: Dış duvar ve çatı yalıtımı (%25-40 tasarruf)
4. Petek Arkası Yansıtıcı: Isı kaybını azaltır (%5-10 tasarruf)
5. Düzenli Bakım: Verimlilik kaybını önler (%10-15 tasarruf)

İstatistik: Türkiye'de hanelerin %30.2'si ısınma sorunu yaşamaktadır (TÜİK 2024).`,
      },
      {
        question: 'Klima gaz dolumu ne zaman gereklidir?',
        answer: `ÖNEMLİ: Normal şartlarda gaz dolumu gerekmez!

Klima kapalı bir sistemdir, gaz kendiliğinden azalmaz. Gaz azalması varsa mutlaka sistemde kaçak var demektir.

Doğru yaklaşım:
1. Önce kaçak tespit edilir
2. Kaçak noktası onarılır
3. Sistem vakumlanır
4. Gaz doldurulur

Gaz Eksikliği Belirtileri:
• Soğutma/ısıtma performansı düşük
• Dış ünitede buz oluşumu
• Anormal ses
• Kompresör sık sık duruyor

Kaçak tamir edilmeden gaz dolumu para ve zaman kaybıdır!`,
      },
      {
        question: 'Yerden ısıtma sistemi avantajları nelerdir?',
        answer: `Yerden Isıtma Avantajları:

1. Konfor: Ayak seviyesinden başlayan homojen ısı
2. Verimlilik: Düşük su sıcaklığı (35-45°C vs radyatörlerde 70-80°C)
3. Estetik: Görünür radyatör yok, mobilya yerleşimi özgür
4. Hijyen: Toz sirkülasyonu az
5. Uyumluluk: Isı pompası ile mükemmel uyum

Dezavantajlar:
• Kurulum maliyeti yüksek
• Mevcut binalarda uygulama zor
• Arıza durumunda müdahale güç
• Isınma süresi daha uzun

İdeal Kullanım: Yeni inşaatlar, villa projeleri, ısı pompası sistemleri.`,
      },
      {
        question: 'Kazan dairesi bakımı nasıl yapılır?',
        answer: `Yılda 1 kez profesyonel bakım + aylık görsel kontroller yapılmalıdır.

Profesyonel Bakım Kapsamı:

1. Kazan Kontrolü:
   • Yanma verimi ölçümü
   • Baca gazı analizi
   • Elektrot ve brülör temizliği

2. Pompa ve Vana Kontrolü:
   • Sirkülasyon pompası testi
   • Emniyet vanaları kontrolü
   • Kaçak kontrolü

3. Genleşme Tankı:
   • Basınç kontrolü
   • Membran durumu

4. Elektrik Sistemi:
   • Kablo ve bağlantı kontrolü
   • Sensör kalibrasyonu

Yasal Zorunluluk: Ticari binalarda yıllık kazan bakımı zorunludur. Bakım raporu muhafaza edilmelidir.`,
      },
    ],
  },

  // ============================================
  // SSS 2: Elektrik Tesisatı
  // ============================================
  {
    title: 'Elektrik Tesisatı SSS',
    slug: 'sss/elektrik-tesisati',
    description: 'Elektrik tesisatı güvenliği, arıza çözümleri ve bakım hakkında sıkça sorulan sorular.',
    heroTitle: 'Elektrik Tesisatı SSS',
    heroDescription: 'Elektrik güvenliği, sigorta seçimi ve tesisat sorunları hakkında merak ettiğiniz her şey.',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSubtitle: 'Elektrik tesisatı ve güvenliği hakkında en çok sorulan sorular.',
    meta: {
      title: 'Elektrik Tesisatı SSS - Güvenlik Rehberi 2026 | Hızır Teknik',
      description: 'Elektrik tesisatı güvenliği, sigorta seçimi, topraklama ve arıza çözümleri hakkında SSS. Ankara elektrik tesisatı hizmeti.',
    },
    faqs: [
      {
        question: 'Elektrik tesisatı ne zaman yenilenmeli?',
        answer: `Yenileme gerektiren durumlar:

1. Yaş Kriteri: 25 yaşın üzerindeki tesisatlar güvenlik riski oluşturur

2. Güvenlik Sorunları:
   • Sık sigorta atması
   • Kablo veya priz ısınması
   • Yanık kokusu
   • Kıvılcım veya ark

3. Kapasite Yetersizliği:
   • Yeni cihazlar için güç yetersiz
   • Sürekli uzatma kablosu kullanımı

Modern Standartlar:
• Bakır kablo kullanımı (alüminyum değil)
• Topraklama sistemi
• Kaçak akım rölesi (30mA)
• Uygun kesitli kablolar

İstatistik: Türkiye'de hanelerin %96.4'ü internet, %99.6'sı akıllı telefona sahiptir. Artan elektronik kullanımı güçlü altyapı gerektirir.`,
      },
      {
        question: 'Kaçak akım rölesi nedir ve neden önemlidir?',
        answer: `Kaçak akım rölesi (RCD), elektrik kaçağı durumunda hayat kurtaran bir güvenlik cihazıdır.

Çalışma Prensibi:
• Giren ve çıkan akım arasındaki farkı ölçer
• 30mA üzeri kaçak tespit edildiğinde elektriği keser
• Milisaniyeler içinde devreyi açar

Kullanım Alanları:
• Islak hacimler (banyo, mutfak)
• Bahçe ve dış mekan prizeleri
• Çocuk odaları
• Genel güvenlik

Zorunluluk:
• 2020 sonrası inşaatlarda zorunlu
• Eski binalara da monte edilebilir
• Maliyeti düşük, faydası yüksek (hayat kurtarır!)

Test: Ayda bir test düğmesine basarak çalıştığını kontrol edin.`,
      },
      {
        question: 'Elektrik sigortası neden atıyor?',
        answer: `En yaygın nedenler:

1. Aşırı Yük:
   • Çok fazla cihaz aynı anda çalışıyor
   • Sigorta kapasitesi yetersiz
   • Çözüm: Yük dağılımı veya sigorta güncelleme

2. Kısa Devre:
   • Kablo hasarı
   • Cihaz arızası
   • Çözüm: Hasarlı kablo/cihaz tespiti

3. Kaçak Akım:
   • Yalıtım bozukluğu
   • Islak ortam etkisi
   • Çözüm: Kaçak noktası tespiti

Yapılması Gerekenler:
1. Hangi devre olduğunu tespit edin
2. O devredeki cihazları çıkarın
3. Sigortayı kaldırın
4. Cihazları tek tek takarak arızalıyı bulun
5. Sorun devam ederse profesyonel çağırın`,
      },
      {
        question: 'Topraklama neden önemlidir?',
        answer: `Topraklama, elektrik kaçağı durumunda akımı güvenli şekilde toprağa ileterek can güvenliği sağlar.

Topraklamanın Faydaları:
1. Can Güvenliği: Elektrik çarpması riskini azaltır
2. Cihaz Koruması: Aşırı gerilimden korur
3. Parazit Önleme: Elektronik cihazlarda gürültüyü azaltır
4. Yasal Zorunluluk: Yeni tesisatlarda zorunlu

Topraklama Kontrolü:
• Priz test cihazı ile kontrol edilebilir
• Periyodik ölçüm (2-5 yılda bir)
• Profesyonel ölçüm raporu

Uyarı Belirtileri:
• Cihazlara dokunurken karıncalanma
• Metal yüzeylerde statik elektrik
• Elektronik cihazlarda parazit`,
      },
      {
        question: 'Ev elektriğinde hangi kesit kablo kullanılmalı?',
        answer: `Kablo Kesit Rehberi:

| Kullanım Alanı | Kesit | Sigorta |
|----------------|-------|---------|
| Aydınlatma | 1.5mm² | 10A |
| Genel prizler | 2.5mm² | 16A |
| Mutfak/banyo | 2.5mm² | 16A |
| Klima | 4mm² | 20A |
| Elektrikli ocak | 6mm² | 32A |
| Şofben/kombi | 4mm² | 20A |

Dikkat Edilmesi Gerekenler:
• Bakır kablo tercih edin
• NYM veya NHXMH tipi kablo kullanın
• Kablo uzunluğu arttıkça kesit artmalı
• Profesyonel hesaplama yaptırın

UYARI: Yetersiz kesit kablo ısınma, yangın ve güç kaybına neden olur!`,
      },
      {
        question: 'Elektrik arızalarında ilk ne yapılmalı?',
        answer: `Acil Durum Adımları:

1. Güvenlik Öncelikli:
   • Islak elle müdahale etmeyin
   • Kıvılcım varsa yaklaşmayın
   • Yangın belirtisi varsa 110'u arayın

2. Ana Sigortayı Kapatın:
   • Tüm elektriği kesin
   • Sayaç panosundaki ana şalteri indirin

3. Değerlendirme:
   • Sadece sizin mi yoksa tüm bina mı etkilendi?
   • Görünür hasar var mı?
   • Koku veya duman var mı?

4. Profesyonel Çağırın:
   • Kendiniz tamir etmeye çalışmayın
   • Elektrik işleri yetki gerektirir

ASLA YAPMAYIN:
• Açık kabloya dokunmak
• Sigortayı zorla kaldırmak
• Su ile söndürmeye çalışmak`,
      },
      {
        question: 'Akıllı ev sistemleri mevcut tesisata entegre edilebilir mi?',
        answer: `Evet, çoğu akıllı ev sistemi mevcut tesisata entegre edilebilir.

Entegrasyon Seçenekleri:

1. Kablosuz Sistemler:
   • Wi-Fi tabanlı akıllı prizler
   • Zigbee/Z-Wave cihazlar
   • Mevcut tesisatı değiştirmez
   • Kolay kurulum

2. Kablolu Sistemler:
   • KNX/EIB standartları
   • Daha güvenilir
   • Profesyonel kurulum gerektirir

Mevcut Tesisat Gereksinimleri:
• Güvenilir Wi-Fi bağlantısı
• Yeterli priz kapasitesi
• Güncel topraklama sistemi

2026 Türkiye Akıllı Ev Pazarı:
• Cihaz geliri: $1.06 milyar
• Hane başına harcama: $81
• Yıllık büyüme: %13.8`,
      },
      {
        question: 'Elektrik faturası neden yüksek geliyor?',
        answer: `Yüksek Fatura Nedenleri:

1. Eski/Verimsiz Cihazlar:
   • A++ yerine A sınıfı buzdolabı %40 fazla tüketir
   • 10 yaş üzeri cihazları değerlendirin

2. Bekleme Modu Tüketimi:
   • TV, bilgisayar, şarj cihazları
   • Yıllık 100-200 TL gizli tüketim

3. Yanlış Tarife:
   • Tek zamanlı vs çok zamanlı tarife
   • Kullanım alışkanlıklarına göre seçin

4. Kaçak veya Arıza:
   • Sayaç arızası
   • Topraklama kaçağı
   • Komşu bağlantısı

Kontrol Yöntemi:
1. Tüm cihazları kapatın
2. Sayacın dönüp dönmediğini kontrol edin
3. Dönüyorsa kaçak var demektir

Enerji verimliliği analizi için bizi arayın.`,
      },
    ],
  },

  // ============================================
  // SSS 3: Su ve Tesisat
  // ============================================
  {
    title: 'Su ve Tesisat SSS',
    slug: 'sss/su-tesisat',
    description: 'Su tesisatı sorunları, sızıntı tespiti ve tıkanıklık çözümleri hakkında sıkça sorulan sorular.',
    heroTitle: 'Su ve Tesisat SSS',
    heroDescription: 'Tesisat sorunları, su kaçağı ve tıkanıklık hakkında merak ettiğiniz her şey.',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSubtitle: 'Su tesisatı sorunları ve çözümleri hakkında en çok sorulan sorular.',
    meta: {
      title: 'Su ve Tesisat SSS - Sızıntı ve Tıkanıklık Çözümleri 2026 | Hızır Teknik',
      description: 'Su tesisatı sorunları, sızıntı tespiti, tıkanıklık açma ve bakım hakkında SSS. Ankara profesyonel tesisat hizmeti.',
    },
    faqs: [
      {
        question: 'Su sızıntısı nasıl tespit edilir?',
        answer: `Sızıntı Tespit Yöntemleri:

1. Sayaç Testi:
   • Tüm muslukları kapatın
   • Sayacın dönüp dönmediğini kontrol edin
   • Dönüyorsa gizli sızıntı var

2. Görsel Kontrol:
   • Duvar ve tavanda nem lekeleri
   • Şişen veya kabarık boyalar
   • Küf ve mantar oluşumu

3. Ses Tespiti:
   • Gece sessizliğinde su sesi
   • Akustik cihazlarla tespit

4. Termal Kamera:
   • Duvar içi sıcak/soğuk noktalar
   • Profesyonel ekipman gerektirir

İstatistik: TÜİK verilerine göre Türkiye'deki konutların %31.3'ü nem ve sızıntı sorunu yaşamaktadır.

Kırmadan sızıntı tespiti hizmeti için bizi arayın.`,
      },
      {
        question: 'Lavabo/tuvalet tıkanıklığı nasıl açılır?',
        answer: `Evde Çözüm Yöntemleri:

1. Pompa (Plastunger):
   • Sıkı şekilde yerleştirin
   • Güçlü ve ritmik pompalayın
   • Su taşmasını engelleyin

2. Kaynar Su + Deterjan:
   • Yağ tıkanıklıklarında etkili
   • 5-10 dakika bekletin

3. Karbonat + Sirke:
   • Yarım bardak karbonat dökün
   • Üzerine sirke ekleyin
   • 15 dakika bekleyip sıcak su dökün

Profesyonel Müdahale Gerektiren Durumlar:
• Birden fazla gider etkilendi
• Kötü koku geliyor
• Ev yapımı yöntemler işe yaramadı
• Düzenli olarak tekrarlıyor

Robotlu tıkanıklık açma ve kamera ile görüntüleme hizmeti sunuyoruz.`,
      },
      {
        question: 'Su tesisatı boruları ne zaman değiştirilmeli?',
        answer: `Boru Ömürleri:

| Boru Tipi | Ortalama Ömür | Sorunlar |
|-----------|---------------|----------|
| Galvaniz | 20-30 yıl | Korozyon, pas |
| Bakır | 40-50 yıl | Pinhole kaçaklar |
| PPR | 50+ yıl | Minimum sorun |
| PEX | 40-50 yıl | UV hassasiyeti |

Değişim Belirtileri:
• Paslı veya renkli su
• Düşük su basıncı
• Sürekli sızıntılar
• Metal tat

Modern Seçenekler:
• PPR boru: Ekonomik, dayanıklı
• Bakır: Premium, antibakteriyel
• PEX: Esnek, kolay montaj

Ücretsiz keşif ile boru durumunu değerlendirelim.`,
      },
      {
        question: 'Su basıncı düşükse ne yapılmalı?',
        answer: `Kontrol Sırası:

1. Filtre Kontrolü:
   • Musluk ucu filtresini (aeratör) temizleyin
   • Ana su girişi filtresini kontrol edin

2. Şebeke Kontrolü:
   • Komşularda da sorun var mı?
   • ASKİ kesinti bilgisi
   • Sayaç vanası tam açık mı?

3. Pompa Kontrolü (Bina):
   • Hidrofor çalışıyor mu?
   • Pompa basınç ayarı uygun mu?

4. Boru Sorunları:
   • Kireç birikimi
   • Korozyon/tıkanma
   • Kaçak nedeniyle basınç düşüşü

Çözümler:
• Basınç arttırıcı pompa kurulumu
• Boru temizliği/değişimi
• Kireç çözücü işlem`,
      },
      {
        question: 'Sıcak su neden geç geliyor?',
        answer: `Nedenler ve Çözümler:

1. Uzun Boru Mesafesi:
   • Isıtıcıdan muslağa uzak mesafe
   • Çözüm: Sirkülasyon pompası

2. Boyler/Kombi Ayarı:
   • Düşük sıcaklık ayarı
   • Çözüm: Sıcaklığı 50-55°C'ye ayarlayın

3. Yalıtım Eksikliği:
   • Borular ısıyı kaybediyor
   • Çözüm: Boru yalıtımı

4. Ani Su Isıtıcı:
   • Kapasitesi yetersiz
   • Çözüm: Daha güçlü cihaz

Enerji Tasarrufu İpucu: Sirkülasyon pompası + termostat ile sıcak su hazır tutulabilir, ancak enerji tüketimini artırır. Kullanım alışkanlıklarınıza göre değerlendirin.`,
      },
      {
        question: 'Banyo/mutfak tadilatında tesisat nelere dikkat edilmeli?',
        answer: `Tadilat Öncesi Kontrol Listesi:

1. Mevcut Durum Tespiti:
   • Boru güzergahlarını belirleyin
   • Vana konumlarını işaretleyin
   • Mevcut boru tipini tespit edin

2. Yeni Yerleşim Planı:
   • Lavabo, klozet, duş pozisyonları
   • Atık su eğimi (min. %2)
   • Havalandırma borusu

3. Malzeme Seçimi:
   • Temiz su: PPR veya bakır
   • Atık su: PVC veya PPRC
   • Kaliteli armatürler

4. Profesyonel Destek:
   • Proje çizimi
   • Su kesme planı
   • Belediye izinleri

YAPILMAMASI GEREKENLER:
• Atık su borularını daraltmak
• Eğimsiz döşeme yapmak
• Kalitesiz malzeme kullanmak`,
      },
      {
        question: 'Kış aylarında borular nasıl korunur?',
        answer: `Donma Önleme Yöntemleri:

1. Yalıtım:
   • Dış mekandaki boruları yalıtın
   • Pencere altı borularına dikkat
   • Balkon ve teras boruları

2. Damlatma Yöntemi:
   • Şiddetli soğuklarda musluğu hafif açık bırakın
   • Hareket eden su donmaz

3. Isıtma Kablosu:
   • Kritik bölgelere ısıtıcı kablo
   • Termostat kontrollü çalışma

4. İç Mekan Önlemleri:
   • Banyo/mutfak dolap kapılarını açın
   • Merkezi ısıtmayı düşük de olsa açık tutun

Donmuş Boru Durumunda:
• Yavaşça ısıtın (saç kurutma makinesi)
• Açık alev kullanmayın
• Boru patlarsa ana vanayı kapatın`,
      },
      {
        question: 'Pis su kokusu nereden geliyor?',
        answer: `Koku Kaynakları:

1. Kuru Sifon:
   • Az kullanılan lavabo/giderler
   • Sifondaki su buharlaşmış
   • Çözüm: Muslukları düzenli çalıştırın

2. Tıkanıklık:
   • Organik madde birikimi
   • Saç, yağ, sabun kalıntıları
   • Çözüm: Gider temizliği

3. Havalandırma Eksikliği:
   • Çatı borusu tıkalı
   • Negatif basınç oluşuyor
   • Çözüm: Havalandırma kontrolü

4. Sifon Arızası:
   • Sifon çatlamış/bozulmuş
   • Su tutmuyor
   • Çözüm: Sifon değişimi

Önleme Yöntemleri:
• Haftalık kaynar su dökün
• Gider süzgeci kullanın
• Aylık karbonat+sirke`,
      },
    ],
  },

  // ============================================
  // SSS 4: Havuz Sistemleri
  // ============================================
  {
    title: 'Havuz Sistemleri SSS',
    slug: 'sss/havuz-sistemleri',
    description: 'Havuz bakımı, su kimyası ve havuz sistemleri hakkında sıkça sorulan sorular.',
    heroTitle: 'Havuz Sistemleri SSS',
    heroDescription: 'Havuz bakımı, su kalitesi ve havuz ekipmanları hakkında merak ettiğiniz her şey.',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSubtitle: 'Havuz bakımı ve sistemleri hakkında en çok sorulan sorular.',
    meta: {
      title: 'Havuz Sistemleri SSS - Bakım ve Su Kimyası 2026 | Hızır Teknik',
      description: 'Havuz bakımı, su kimyası, pompa sistemleri ve ısıtma hakkında SSS. Ankara havuz bakım ve kurulum hizmeti.',
    },
    faqs: [
      {
        question: 'Havuz suyu ne sıklıkla değiştirilmelidir?',
        answer: `Doğru bakımla havuz suyu yıllarca değiştirilmez!

Önemli Bilgiler:
• Profesyonel bakımla su yıllarca kullanılabilir
• Yılda %30-50 su kaybı normaldir (buharlaşma + filtre temizliği)
• Eksilen su düzenli olarak tamamlanır

Su Değişimi Gerektiren Durumlar:
• TDS (toplam çözünmüş katı) çok yüksek
• Kimyasal denge sağlanamıyor
• Ciddi alg problemi
• Havuz yenileme/tadilat

Su Koruma İpuçları:
• Haftalık kimyasal kontrol
• Düzenli filtre temizliği
• Havuz örtüsü kullanımı
• Yüzey temizliği

Havuz suyu analizi ve bakım hizmeti sunuyoruz.`,
      },
      {
        question: 'Havuz kimyasalları nasıl dengelenir?',
        answer: `Kimyasal Dengeler:

| Parametre | İdeal Aralık | Kontrol Sıklığı |
|-----------|--------------|-----------------|
| pH | 7.2 - 7.6 | 2-3 gün |
| Klor | 1 - 3 ppm | Günlük |
| Alkalinite | 80 - 120 ppm | Haftalık |
| Kalsiyum | 200 - 400 ppm | Aylık |
| Siyanürik Asit | 30 - 50 ppm | Aylık |

pH Ayarlama:
• Düşükse: pH yükseltici (soda)
• Yüksekse: pH düşürücü (asit)

Klor Türleri:
• Toz klor: Şok dozlama
• Tablet klor: Günlük dezenfeksiyon
• Tuz klor sistemi: Otomatik üretim

DİKKAT: Kimyasalları asla karıştırmayın, ayrı ayrı ekleyin!`,
      },
      {
        question: 'Havuz pompası ne kadar çalışmalıdır?',
        answer: `Çalışma Süresi Rehberi:

Kural: Havuz suyu günde en az 1-2 kez tamamen filtreden geçmeli.

Örnek Hesaplama:
• Havuz hacmi: 50 m³
• Pompa debisi: 10 m³/saat
• Minimum süre: 50 ÷ 10 = 5 saat
• Önerilen: 8-10 saat

Sezon Bazlı Öneriler:
| Dönem | Günlük | Saat Aralığı |
|-------|--------|--------------|
| Yaz | 10-12 saat | 08:00-20:00 |
| İlkbahar/Sonbahar | 6-8 saat | 10:00-18:00 |
| Kış (koruma) | 4-6 saat | 12:00-18:00 |

Enerji Tasarrufu:
• Değişken hızlı pompa kullanın
• Gece tarifeli elektrik saatlerinde çalıştırın
• Timer ile otomatik kontrol`,
      },
      {
        question: 'Havuz yeşillenmesi nasıl önlenir?',
        answer: `Yeşillenme Nedenleri:
• Yetersiz klor
• pH dengesizliği
• Yetersiz filtrasyon
• Fosfat birikimi

Önleme Yöntemleri:

1. Düzenli Klor Dozlaması:
   • Her gün klor seviyesini kontrol edin
   • 1-3 ppm aralığında tutun

2. pH Kontrolü:
   • 7.2-7.6 aralığında tutun
   • Yüksek pH'da klor etkisiz kalır

3. Haftalık Şok Dozlama:
   • Klor seviyesini 10 ppm'e çıkarın
   • Gece yapın, sabah yüzün

4. Algisit Kullanımı:
   • Haftalık koruyucu doz

Yeşillenmiş Havuz Kurtarma:
1. pH'ı 7.2'ye ayarlayın
2. Şok klor dozlaması yapın
3. 24-48 saat pompa çalıştırın
4. Ölü algleri süpürün
5. Filtre temizliği yapın`,
      },
      {
        question: 'Havuz ısıtma sistemleri karşılaştırması',
        answer: `Sistem Karşılaştırması:

| Sistem | Kurulum | İşletme | Isıtma Süresi |
|--------|---------|---------|---------------|
| Isı Pompası | Yüksek | Düşük | 24-48 saat |
| Güneş Kolektörü | Orta | Sıfır | 2-3 gün |
| Elektrikli Isıtıcı | Düşük | Yüksek | 6-12 saat |
| Doğalgaz | Orta | Orta | 4-8 saat |

Isı Pompası Avantajları:
• En düşük işletme maliyeti
• COP 4-6 (1 kW elektrik = 4-6 kW ısı)
• Uzun ömür (15-20 yıl)
• Sessiz çalışma

Güneş Enerjisi Avantajları:
• İşletme maliyeti yok
• Çevre dostu

Önerilen Kombinasyon:
Güneş kolektörü + ısı pompası: Güneşli günlerde güneş, bulutlu günlerde ısı pompası.`,
      },
      {
        question: 'Havuz kışlığa nasıl alınır?',
        answer: `Kışa Hazırlık Adımları:

1. Su Temizliği:
   • Son bir kez süpürün
   • Şok klor dozlaması yapın
   • pH ve alkaliniteyi dengeleyin

2. Su Seviyesi:
   • Skimmer altına düşürün
   • Boru donmasını önleyin

3. Ekipman Koruması:
   • Pompa ve filtre boşaltın
   • Isıtıcıyı devre dışı bırakın
   • Borulara antifriz ekleyin

4. Kimyasal İlavesi:
   • Kış kimyasalı ekleyin
   • Alg önleyici uzun etkili tip

5. Örtü:
   • Kış örtüsü kapatın
   • Sıkıca sabitleyin
   • Su birikimini önleyin

Kış Boyunca Kontrol:
• Ayda bir örtü kontrolü
• Su seviyesi kontrolü`,
      },
      {
        question: 'Tuz klor sistemi avantajları nelerdir?',
        answer: `Tuz Klor Sistemi Nedir?
Tuzlu sudan elektroliz yöntemiyle klor üreten sistemdir.

Avantajları:

1. Otomatik Dezenfeksiyon:
   • 7/24 klor üretimi
   • Manuel dozlama gereksiz
   • Sabit klor seviyesi

2. Ekonomik:
   • Tuz ucuz ve kolay bulunur
   • Yılda 2-3 kez tuz takviyesi
   • Klor kimyasalı almaya gerek yok

3. Konfor:
   • Yumuşak su hissi
   • Göz ve cilt tahrişi az
   • Klor kokusu minimal

Dezavantajlar:
• Yüksek kurulum maliyeti
• Elektroliz hücresi ömrü (5-7 yıl)
• pH yükselme eğilimi

Tuz Oranı: 3000-4000 ppm (deniz suyu: 35.000 ppm - yani tuzlu değil!)`,
      },
      {
        question: 'Havuz bakım maliyeti ne kadardır?',
        answer: `Maliyet Kalemleri (Aylık - 2026 Tahmini):

| Kalem | Küçük (25m³) | Büyük (75m³) |
|-------|--------------|--------------|
| Kimyasallar | 500-800 TL | 1.200-1.800 TL |
| Elektrik | 400-600 TL | 800-1.500 TL |
| Su Takviyesi | 100-200 TL | 300-500 TL |
| Bakım/Servis | 0-500 TL | 0-800 TL |
| Toplam | 1.000-2.100 TL | 2.300-4.600 TL |

Maliyet Düşürme İpuçları:

1. Havuz Örtüsü: Buharlaşmayı %70 azaltır
2. Değişken Hızlı Pompa: Elektriği %50 azaltır
3. Tuz Klor Sistemi: Kimyasal masrafını %60 azaltır
4. Güneş Isıtması: Isıtma maliyetini sıfırlar

Aylık veya sezonluk bakım sözleşmeleri ile uygun fiyatlar sunuyoruz.`,
      },
    ],
  },
]

// ====================
// SEED RUNNER
// ====================

/**
 * Seed FAQ pages as drafts
 *
 * Kullanım: pnpm seed:faq-pages
 */
export const seedFAQPages = async () => {
  const payload = await getPayloadInstance()

  try {
    payload.logger.info('📋 SSS sayfaları seed başlatılıyor...')
    payload.logger.info('⚠️  Tüm sayfalar DRAFT olarak oluşturulacak!')

    let createdCount = 0
    let skippedCount = 0

    for (const page of faqPages) {
      // Check if page already exists
      const existing = await payload.find({
        collection: 'pages',
        where: {
          title: { equals: page.title },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        payload.logger.info(`⏭️  Atlanıyor (zaten var): ${page.title}`)
        skippedCount++
        continue
      }

      // Create page with FAQ block
      await createPage(
        payload,
        {
          title: page.title,
          description: page.description,
          blocks: [
            createPageHeroBlock({
              title: page.heroTitle,
              description: page.heroDescription,
            }),
            createFAQBlock({
              title: page.faqTitle,
              subtitle: page.faqSubtitle,
              variant: 'light',
              faqs: page.faqs,
            }),
          ],
          meta: page.meta,
        },
        true // asDraft = true
      )

      payload.logger.info(`✅ Oluşturuldu (draft): ${page.title}`)
      createdCount++
    }

    payload.logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    payload.logger.info(`📊 Sonuç: ${createdCount} oluşturuldu, ${skippedCount} atlandı`)
    payload.logger.info('📌 Sonraki adım: Admin panel\'den slug\'ları düzenleyin ve yayınlayın')
    payload.logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  } catch (error) {
    payload.logger.error('❌ FAQ pages seed hatası:')
    payload.logger.error(error)
    throw error
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedFAQPages()
    .then(() => {
      console.log('✅ FAQ pages seeding completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ FAQ pages seeding failed:', error)
      process.exit(1)
    })
}
