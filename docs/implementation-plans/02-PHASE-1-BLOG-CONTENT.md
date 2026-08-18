# Faz 1: Blog İçerik Üretim Sistemi

**Öncelik:** YÜKSEK
**Tahmini Süre:** Sürekli (6 ay boyunca haftada 2 yazı)
**Hedef:** 4 mevcut yazıdan 52 yazıya ulaşmak

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE KULLANILIYOR ⚠️

- Her blog yazısı CANLI olarak yayınlanır
- Draft modunu kullanarak önce taslak kaydedin
- Yayınlamadan önce mutlaka önizleme yapın
- Görsel yüklemelerinde dosya boyutuna dikkat edin
```

---

## Hedefler

| Dönem | Mevcut | Hedef | Haftalık Yazı |
|-------|--------|-------|---------------|
| Ocak 2026 | 4 | 12 | 2 |
| Şubat 2026 | 12 | 20 | 2 |
| Mart 2026 | 20 | 28 | 2 |
| Nisan 2026 | 28 | 36 | 2 |
| Mayıs 2026 | 36 | 44 | 2 |
| Haziran 2026 | 44 | 52 | 2 |

---

## Blog Yazısı Yapısı (Posts Collection)

### Zorunlu Alanlar

```typescript
interface BlogPost {
  title: string;                    // Başlık (max 60 karakter SEO için ideal)
  description: string;              // Kısa açıklama (meta description olarak kullanılır)
  featuredImage: Media;             // Öne çıkan görsel (404x660px önerilen)
  content: RichText;                // Ana içerik (Lexical editor)
  post_category: PostCategory;      // Kategori ilişkisi
  author: Author;                   // Yazar ilişkisi

  // SEO (otomatik veya manuel)
  meta: {
    title: string;                  // Meta başlık (max 60)
    description: string;            // Meta açıklama (max 160)
    image: Media;                   // OG image
  }
}
```

### Opsiyonel Alanlar

```typescript
interface BlogPostOptional {
  relatedServiceCategory?: ServiceCategory;  // İlgili hizmet kategorisi
  slug?: string;                             // Otomatik oluşturulur
}
```

---

## İçerik Takvimi: Ocak 2026

### Hafta 1 (1-5 Ocak)

#### Yazı 1: Doğalgaz Tesisatı Güvenlik Kontrol Listesi 2026

```yaml
Başlık: "Doğalgaz Tesisatı Güvenlik Kontrol Listesi 2026"
Kategori: Güvenlik ve Önlemler
Anahtar Kelimeler: doğalgaz güvenliği, gaz kaçağı kontrolü, doğalgaz tesisatı
Hedef Kelime Sayısı: 1500-2000
Pazar Verisi: Türkiye'de doğalgaz %81 hane kullanımı

İçerik Yapısı:
1. Giriş - Doğalgaz güvenliğinin önemi (150 kelime)
2. Yıllık Kontrol Listesi (500 kelime)
   - Boru bağlantıları kontrolü
   - Cihaz kontrolleri
   - Havalandırma kontrolü
3. Tehlike İşaretleri (300 kelime)
4. Acil Durum Prosedürleri (300 kelime)
5. Profesyonel Bakım Gerekliliği (200 kelime)
6. Hızır Teknik Hizmetleri (150 kelime + CTA)

SEO Meta:
  Title: "Doğalgaz Tesisatı Güvenlik Kontrol Listesi 2026 | Hızır Teknik"
  Description: "2026 için kapsamlı doğalgaz güvenlik kontrol listesi. Gaz kaçağı
               tespiti, cihaz kontrolü ve acil durum prosedürleri. Ankara doğalgaz
               tesisatı hizmeti."

Internal Links:
  - /hizmetler/dogalgaz-tesisati
  - /ankara/dogalgaz-tesisati
  - /blog/kis-aylarinda-enerji-tasarrufu
```

#### Yazı 2: Merkezi Isıtma Sistemlerinde Enerji Verimliliği

```yaml
Başlık: "Merkezi Isıtma Sistemlerinde Enerji Verimliliği: 2026 Rehberi"
Kategori: Teknik Bilgiler
Anahtar Kelimeler: merkezi ısıtma, enerji verimliliği, kalorifer sistemi
Hedef Kelime Sayısı: 1800-2200
Pazar Verisi: Konutların %30.2'si ısınma sorunu yaşıyor (TÜİK 2024)

İçerik Yapısı:
1. Merkezi Isıtma Sistemine Genel Bakış (200 kelime)
2. Enerji Verimliliği Neden Önemli? (250 kelime)
   - Maliyet tasarrufu
   - Çevresel etki
   - Konfor artışı
3. Verimlilik Artırma Yöntemleri (600 kelime)
   - Kazan bakımı ve ayarı
   - Yalıtım iyileştirmeleri
   - Termostatik vana kullanımı
   - Bölgesel kontrol sistemleri
4. Modern Teknolojiler (400 kelime)
   - Yoğuşmalı kazanlar
   - Akıllı otomasyon
   - Isı pompası entegrasyonu
5. Maliyet-Fayda Analizi (200 kelime)
6. Profesyonel Destek (150 kelime + CTA)

SEO Meta:
  Title: "Merkezi Isıtma Sistemlerinde Enerji Verimliliği 2026 | Hızır Teknik"
  Description: "Merkezi ısıtma sistemlerinde enerji verimliliği nasıl artırılır?
               2026 güncel rehber. Kazan bakımı, yalıtım, termostatik vana önerileri."

Internal Links:
  - /hizmetler/kazan-bakimi
  - /hizmetler/merkezi-isitma
  - /blog/kombi-bakimi-nasil-yapilir
```

### Hafta 2 (6-12 Ocak)

#### Yazı 3: Radyatör Hava Alma Nasıl Yapılır?

```yaml
Başlık: "Radyatör Hava Alma Nasıl Yapılır? Adım Adım Rehber"
Kategori: Faydalı Bilgiler
Anahtar Kelimeler: radyatör hava alma, petek hava alma, kalorifer havası
Hedef Kelime Sayısı: 1200-1500
Format: How-to guide (yapılış rehberi)

İçerik Yapısı:
1. Radyatör Havasının Belirtileri (200 kelime)
   - Eşit ısınmama
   - Gurultu
   - Düşük verimlilik
2. Gerekli Malzemeler (100 kelime)
3. Adım Adım Uygulama (500 kelime)
   - Adım 1: Sistemi kapatın
   - Adım 2: Hava tahliye vanasını bulun
   - Adım 3: Havayı boşaltın
   - Adım 4: Sistemi yeniden çalıştırın
4. Sık Yapılan Hatalar (200 kelime)
5. Ne Zaman Profesyonel Çağırmalı? (150 kelime)
6. Video Rehber Önerisi (eğer varsa)

SEO Meta:
  Title: "Radyatör Hava Alma Nasıl Yapılır? Adım Adım Rehber 2026"
  Description: "Radyatör hava alma işlemi adım adım anlatım. Gerekli malzemeler,
               uygulama aşamaları ve dikkat edilmesi gerekenler. Kolay DIY rehberi."

Featured Image Alt Text: "Radyatör hava alma işlemi - hava tahliye vanası kullanımı"

Internal Links:
  - /hizmetler/petek-temizligi
  - /hizmetler/kalorifer-bakimi
  - /blog/kalorifer-petegi-isitmiyor
```

#### Yazı 4: Kombi Arıza Kodları ve Anlamları

```yaml
Başlık: "Kombi Arıza Kodları ve Anlamları: Tüm Markalar İçin Rehber"
Kategori: Teknik Bilgiler
Anahtar Kelimeler: kombi arıza kodu, kombi hata kodu, kombi arızası
Hedef Kelime Sayısı: 2500-3000 (kapsamlı rehber)
Format: Referans kılavuzu

İçerik Yapısı:
1. Kombi Arıza Kodlarını Anlama (200 kelime)
2. Marka Bazlı Arıza Kodları
   - Baymak (400 kelime)
   - Buderus (400 kelime)
   - ECA (400 kelime)
   - Vaillant (400 kelime)
   - Viessmann (400 kelime)
3. En Sık Karşılaşılan Kodlar Tablosu (200 kelime)
4. Evde Yapılabilecek Müdahaleler (200 kelime)
5. Profesyonel Servis Gerektiren Durumlar (200 kelime)
6. Acil Servis İletişim (100 kelime + CTA)

Tablo Formatı:
| Marka | Kod | Anlam | Çözüm |
|-------|-----|-------|-------|
| Baymak | E01 | Ateşleme hatası | Servis çağırın |
| ... | ... | ... | ... |

SEO Meta:
  Title: "Kombi Arıza Kodları ve Anlamları 2026 - Tüm Markalar | Hızır Teknik"
  Description: "Baymak, Buderus, ECA, Vaillant, Viessmann kombi arıza kodları ve
               anlamları. Hangi hata ne anlama geliyor? Çözüm önerileri."

Internal Links:
  - /hizmetler/kombi-bakimi
  - /hizmetler/kombi-tamiri
  - /blog/kombi-bakimi-nasil-yapilir
```

---

### Hafta 3 (13-19 Ocak)

#### Yazı 5: Kış Aylarında Boru Donmasını Önleme

```yaml
Başlık: "Kış Aylarında Boru Donmasını Önleme: 2026 Pratik Rehber"
Kategori: Güvenlik ve Önlemler
Anahtar Kelimeler: boru donması, tesisat donması, kış tesisat koruma
Hedef Kelime Sayısı: 1500-1800

İçerik Yapısı:
1. Boru Donmasının Nedenleri (200 kelime)
2. Risk Altındaki Alanlar (250 kelime)
   - Dış duvar tesisatı
   - Çatı arası
   - Garaj ve bodrum
3. Önleme Yöntemleri (500 kelime)
   - Yalıtım teknikleri
   - Isıtma kabloları
   - Damlama yöntemi
4. Donmuş Boru Nasıl Açılır? (300 kelime)
5. Hasar Durumunda Yapılacaklar (200 kelime)
6. Profesyonel Koruma Hizmeti (150 kelime + CTA)

Pazar Verisi Eklentisi:
"Doğu Anadolu bölgesinde ısı pompası pazarı %7.1 CAGR ile en hızlı büyüyen
segment olup, bu durum bölgenin zorlu kış koşullarından kaynaklanmaktadır."
```

#### Yazı 6: Termostatik Vana Nedir?

```yaml
Başlık: "Termostatik Vana Nedir? Enerji Tasarrufu Sağlar mı?"
Kategori: Tüketici Rehberi
Anahtar Kelimeler: termostatik vana, radyatör vanası, enerji tasarrufu
Hedef Kelime Sayısı: 1300-1600

İçerik Yapısı:
1. Termostatik Vana Tanımı (150 kelime)
2. Nasıl Çalışır? (250 kelime)
3. Avantajları (300 kelime)
   - Oda bazlı kontrol
   - Enerji tasarrufu (%15-25)
   - Konfor artışı
4. Türleri ve Seçim Kriterleri (300 kelime)
5. Montaj Süreci (200 kelime)
6. Maliyet ve Geri Ödeme Süresi (200 kelime)
7. Hızır Teknik Montaj Hizmeti (100 kelime + CTA)
```

### Hafta 4 (20-26 Ocak)

#### Yazı 7: Yoğuşmalı vs Konvansiyonel Kombi

```yaml
Başlık: "Yoğuşmalı vs Konvansiyonel Kombi: Hangisi Daha Avantajlı?"
Kategori: Tüketici Rehberi
Anahtar Kelimeler: yoğuşmalı kombi, kombi karşılaştırma, kombi seçimi
Hedef Kelime Sayısı: 2000-2500
Format: Karşılaştırma makalesi

İçerik Yapısı:
1. Kombi Teknolojilerine Genel Bakış (200 kelime)
2. Konvansiyonel Kombi (400 kelime)
   - Çalışma prensibi
   - Avantajları
   - Dezavantajları
   - Fiyat aralığı
3. Yoğuşmalı Kombi (400 kelime)
   - Çalışma prensibi
   - Avantajları (verimlilik %98+)
   - Dezavantajları
   - Fiyat aralığı
4. Karşılaştırma Tablosu (300 kelime)
5. Hangi Durumda Hangisi? (300 kelime)
6. 2026 Fiyat Beklentileri (200 kelime)
7. Danışmanlık Hizmeti (100 kelime + CTA)

Karşılaştırma Tablosu:
| Özellik | Konvansiyonel | Yoğuşmalı |
|---------|---------------|-----------|
| Verimlilik | %85-90 | %95-98 |
| Başlangıç Maliyeti | Düşük | Yüksek |
| İşletme Maliyeti | Yüksek | Düşük |
| Ömür | 10-15 yıl | 15-20 yıl |
| Çevresel Etki | Yüksek | Düşük |
```

#### Yazı 8: Apartmanda Kalorifer Bakımı Sorumluluğu

```yaml
Başlık: "Apartmanda Kalorifer Sistemi Bakımı: Kim Sorumlu?"
Kategori: Müşteri Bilgilendirme
Anahtar Kelimeler: apartman kalorifer, yönetim sorumluluğu, ortak alan bakımı
Hedef Kelime Sayısı: 1500-1800

İçerik Yapısı:
1. Yasal Çerçeve (300 kelime)
   - Kat Mülkiyeti Kanunu
   - Yönetim planı hükümleri
2. Ortak Alan vs Bireysel Sorumluluklar (400 kelime)
   - Kazan dairesi
   - Ana tesisatlar
   - Daire içi radyatörler
3. Bakım Sözleşmeleri (300 kelime)
4. Maliyet Paylaşımı (250 kelime)
5. Anlaşmazlık Durumunda Ne Yapılır? (200 kelime)
6. Hızır Teknik Apartman Hizmetleri (150 kelime + CTA)

Pazar Verisi:
"Türkiye'de 26.6 milyon hanenin %63.5'i çekirdek aile yapısındadır. Apartman
daireleri toplu yaşamın vazgeçilmez parçasıdır."
```

---

## Hızlı İçerik Oluşturma: Seed Script Kullanımı

### Seed Script ile Taslak Oluşturma

Blog içeriklerini hızlıca taslak olarak oluşturmak için hazır seed script kullanabilirsiniz:

```bash
# Blog yazılarını taslak olarak oluştur
pnpm seed:blog-posts
```

**Script Konumu:** `src/seed/data/blog-posts-2026.ts`

**Script Ne Yapar?**
- 8 adet blog yazısını taslak (`_status: "draft"`) olarak oluşturur
- Tüm rich text içeriği (başlıklar, paragraflar, listeler) hazır gelir
- Kategori ve yazar ilişkileri yapılandırılabilir
- SEO meta bilgileri doldurulur

**Seed Script Sonrası Yapılacaklar:**
1. Payload Admin Panel'e gidin
2. Posts > Draft yazıları görün
3. Her yazı için featured image ekleyin
4. İçeriği gözden geçirin ve düzenleyin
5. Yayınla (Publish) butonuna tıklayın

### Yeni İçerik Ekleme (Seed Script'e)

Yeni blog yazısı eklemek için `src/seed/data/blog-posts-2026.ts` dosyasını düzenleyin:

```typescript
import { createRichTextHeading, createRichTextParagraph, createRichTextList } from '../index'

// blogPostsData dizisine yeni yazı ekleyin
{
  title: 'Yeni Yazı Başlığı',
  description: 'Kısa açıklama metni...',
  content: [
    createRichTextHeading('Giriş', 'h2'),
    createRichTextParagraph('İçerik metni...'),
    createRichTextList(['Madde 1', 'Madde 2', 'Madde 3'], 'bullet'),
  ],
  meta: {
    title: 'SEO Başlığı | Hızır Teknik',
    description: 'Meta açıklama 150-160 karakter...',
  },
}
```

---

## Blog Yazısı Oluşturma Adımları (Manuel)

### Adım 1: İçerik Hazırlığı

```
1. Yukarıdaki şablonu kullanarak içerik taslağı hazırlayın
2. Anahtar kelimeleri doğal şekilde dağıtın
3. Pazar verilerini içeriğe entegre edin
4. Internal link fırsatlarını belirleyin
5. Görsel ihtiyaçlarını listeleyin
```

### Adım 2: Payload Admin'de Oluşturma

```
1. http://localhost:3000/admin adresine gidin
2. Sol menüden "Posts" seçin
3. "Create New Post" butonuna tıklayın

4. TEMEL BİLGİLER:
   - Title: Başlığı girin (max 60 karakter ideal)
   - Description: Kısa açıklama (meta desc olarak kullanılır)
   - Featured Image: 404x660px görsel yükleyin

5. İÇERİK:
   - Lexical editöründe içeriği yazın
   - Heading'leri doğru kullanın (H2, H3)
   - Listeleri ve tabloları formatlayın
   - Internal linkleri ekleyin

6. KATEGORİ VE YAZAR:
   - Post Category: Uygun kategoriyi seçin
   - Author: Yazarı seçin
   - Related Service Category: Varsa ilişkilendirin

7. SEO:
   - Meta Title: Optimize edilmiş başlık
   - Meta Description: 150-160 karakter
   - Meta Image: OG image (opsiyonel, featured image kullanılır)

8. KAYDET:
   - "Save as Draft" ile taslak kaydedin
   - Önizleme yapın
   - "Publish" ile yayınlayın
```

### Adım 3: Yayın Sonrası Kontroller

```
1. Canlı sayfayı kontrol edin
2. Tüm linklerin çalıştığını doğrulayın
3. Görsellerin yüklendiğini kontrol edin
4. Mobile görünümü test edin
5. Page speed kontrolü yapın
```

---

## Görsel Standartları

### Featured Image

```
Boyut: 404 x 660 px
Format: WebP veya JPG
Dosya Boyutu: Max 200KB
Naming: blog-baslik-slug.webp

Örnek: blog-kombi-ariza-kodlari.webp
```

### İçerik Görselleri

```
Boyut: 1200 x 800 px (veya 16:9 oran)
Format: WebP veya JPG
Dosya Boyutu: Max 300KB
Alt Text: Her görsele açıklayıcı alt text

Örnek Alt Text: "Yoğuşmalı ve konvansiyonel kombi karşılaştırma şeması"
```

### Infografik

```
Boyut: 800 x 2000 px (veya gerektiği kadar)
Format: PNG veya WebP
Dosya Boyutu: Max 500KB
```

---

## SEO Kontrol Listesi

Her blog yazısı için:

- [ ] Başlık 60 karakterin altında
- [ ] Meta description 150-160 karakter
- [ ] Ana anahtar kelime başlıkta var
- [ ] Ana anahtar kelime ilk 100 kelimede var
- [ ] H2/H3 yapısı doğru kullanılmış
- [ ] En az 3 internal link var
- [ ] Görsel alt textleri yazılmış
- [ ] URL slug optimize edilmiş
- [ ] Kelime sayısı minimum 1200

---

## Kategori Dağılımı (48 Yazı)

| Kategori | Yazı Sayısı | Yüzde |
|----------|-------------|-------|
| Teknik Bilgiler | 12 | 25% |
| Faydalı Bilgiler | 10 | 21% |
| Tüketici Rehberi | 10 | 21% |
| Güvenlik ve Önlemler | 6 | 12.5% |
| Periyodik Bakım | 6 | 12.5% |
| Sektörel İçerikler | 2 | 4% |
| Müşteri Bilgilendirme | 2 | 4% |

---

## Yazar Profili Oluşturma

Eğer mevcut yazar yoksa, önce yazar oluşturun:

```
1. Admin > Authors > Create New

2. Zorunlu Alanlar:
   - Name: Yazar adı
   - Email: İletişim e-postası
   - Photo: Profil fotoğrafı (200x200px)

3. Opsiyonel:
   - Biography: Kısa biyografi
   - Job Title: Unvan (örn: "Teknik Uzman")
   - Social Media: LinkedIn, Twitter vb.
```

---

## Şubat-Haziran 2026 İçerik Takvimi Özeti

Detaylı içerik planları için `CONTENT_STRATEGY_2026.md` dosyasına bakın.

| Ay | Tema | Yazı Sayısı |
|----|------|-------------|
| Şubat | Geçiş Dönemi | 8 |
| Mart | Bahar Hazırlığı + Isı Pompası | 8 |
| Nisan | Havuz Sezonu | 8 |
| Mayıs | Yaz Hazırlığı + Klima | 8 |
| Haziran | Yaz Sezonu | 8 |

---

## Kalite Metrikleri

### Yazı Başına Hedefler

| Metrik | Hedef |
|--------|-------|
| Kelime Sayısı | Min 1200 |
| Internal Link | Min 3 |
| External Link | 0-2 (güvenilir kaynak) |
| Görsel | Min 1, ideal 3-5 |
| Heading (H2/H3) | Min 4 |
| Okunabilirlik | Flesch-Kincaid 60+ |

### Aylık Takip

| Metrik | Hedef |
|--------|-------|
| Yayınlanan Yazı | 8 |
| Organik Trafik Artışı | +10% |
| Anahtar Kelime Sıralaması | 5 yeni top 10 |

---

**Sonraki Adım:** Bu faz başladığında, her hafta 2 yazı yayınlayarak ilerlemeye devam edin. SSS sayfaları için `03-PHASE-2-FAQ-PAGES.md` dosyasına bakın.
