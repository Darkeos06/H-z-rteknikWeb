# Faz 4: Lokasyon İçerik Zenginleştirme

**Öncelik:** ORTA
**Tahmini Süre:** 4 hafta
**Başlangıç:** Faz 2-3 ile paralel veya sonrasında

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE KULLANILIYOR ⚠️

- Mevcut 552 servis sayfası (6 lokasyon × 92 hizmet) üretimde aktif
- Bu sayfalarda büyük değişiklik yapmaktan kaçının
- Lokasyon içeriklerini zenginleştirin, silmeyin
- Her değişikliği tek tek test edin
```

---

## Amaç

Mevcut 6 lokasyon için içerik zenginleştirmesi yaparak yerel SEO performansını artırmak. Her lokasyon sayfasında bölgeye özgü bilgiler, referanslar ve yerel anahtar kelimeler kullanılacak.

---

## Mevcut Lokasyon Yapısı

### Tanımlı Lokasyonlar (src/lib/locations.ts)

| # | Lokasyon | URL Yapısı |
|---|----------|------------|
| 1 | Ankara | /ankara/[hizmet-slug] |
| 2 | Eryaman | /eryaman/[hizmet-slug] |
| 3 | Etimesgut | /etimesgut/[hizmet-slug] |
| 4 | Çayyolu | /cayyolu/[hizmet-slug] |
| 5 | Sincan | /sincan/[hizmet-slug] |
| 6 | Batıkent | /batikent/[hizmet-slug] |

### Mevcut Sayfa Sayısı

```
6 Lokasyon × 92 Hizmet = 552 Lokasyon Sayfası
```

Her lokasyonda 92 hizmet sayfası bulunmaktadır (kombi bakımı, klima servisi, elektrik tesisatı, vb.)

---

## İçerik Zenginleştirme Stratejisi

### Hedef

Her lokasyon için:
1. **Ana lokasyon sayfası** zenginleştirmesi
2. **Hizmet sayfalarına** lokasyona özgü içerik eklenmesi
3. **Yerel referanslar** ve başarı hikayeleri
4. **Bölge demografik bilgileri** eklenmesi

---

## Lokasyon Bazlı İçerik Planı

### Lokasyon 1: Ankara Merkez

#### Ana Sayfa Zenginleştirmesi

```markdown
# Ankara Teknik Servis ve Tadilat Hizmetleri

**Hızır Teknik** olarak Ankara'nın tüm merkez ilçelerinde (Çankaya, Keçiören,
Mamak, Altındağ, Yenimahalle) 7/24 teknik servis hizmeti sunuyoruz.

## Ankara'da Hizmet Verdiğimiz Alanlar

### Konut Hizmetleri
- Kombi bakım ve onarım
- Klima montaj ve servis
- Elektrik tesisatı
- Su tesisatı

### Ticari Hizmetler
- İşyeri klimatizasyonu
- Merkezi ısıtma sistemleri
- Endüstriyel tesisat

## Neden Ankara'da Hızır Teknik?

- **10+ Yıl Deneyim:** Ankara'da binlerce haneye hizmet
- **Hızlı Ulaşım:** Merkez ilçelere 30 dakika içinde
- **7/24 Acil Servis:** Gece gündüz yanınızdayız
- **Garantili İşçilik:** 1 yıl iş garantisi

## Ankara İstatistikleri

- Nüfus: 5.7 milyon (TÜİK 2024)
- Konut sayısı: 2.1 milyon+
- Doğalgaz kullanım oranı: %90+
- Klima penetrasyonu: %65+

## Referanslarımız

Ankara'da yüzlerce site, iş merkezi ve konut projesinde hizmet verdik:
- [Site/Proje isimleri eklenecek]
```

#### Hizmet Sayfaları İçin Lokasyon Modülü

Her Ankara hizmet sayfasına eklenecek:

```markdown
## Ankara'da [Hizmet Adı]

Ankara merkez ve tüm ilçelerinde [hizmet adı] hizmeti sunuyoruz.

**Hizmet Bölgelerimiz:**
Çankaya, Keçiören, Mamak, Altındağ, Yenimahalle, Etlik, Bahçelievler,
Beşevler, Anıttepe, Kızılay, Tunalı, Oran, İncek

**Ortalama Varış Süresi:** 30-45 dakika

**Günlük Hizmet Kapasitesi:** 15-20 müşteri
```

---

### Lokasyon 2: Eryaman

#### Bölge Profili

```markdown
# Eryaman Teknik Servis Hizmetleri

Eryaman, Ankara'nın en hızlı büyüyen modern yerleşim bölgelerinden biridir.
Planlı kentleşme ve yeni konut projeleri ile dikkat çeken Eryaman'da
binlerce haneye hizmet veriyoruz.

## Eryaman Bölge Özellikleri

- **Konut Tipi:** Ağırlıklı toplu konut ve site
- **Yapı Yaşı:** Genellikle 10-25 yıl arası
- **Isıtma Sistemi:** %95+ kombi kullanımı
- **Nüfus:** 350.000+ (tahmini)

## Eryaman'da En Çok Talep Edilen Hizmetler

1. Kombi bakımı (site genelinde toplu bakımlar)
2. Klima montajı
3. Su tesisatı onarımı
4. Elektrik arıza

## Eryaman Mahallelerimiz

- Eryaman 1. Etap
- Eryaman 2. Etap
- Eryaman 3. Etap
- Eryaman 4. Etap
- Eryaman 5. Etap
- Şehit Cevdet Özdemir Mahallesi
- Gayret Mahallesi

## Referans Sitelerimiz

- [Eryaman'daki hizmet verilen siteler eklenecek]
```

#### Eryaman Hizmet Sayfası Modülü

```markdown
## Eryaman'da [Hizmet Adı]

Eryaman'ın tüm etaplarında [hizmet adı] hizmeti sunuyoruz.

**Avantajlarımız:**
- Site yönetimleri ile anlaşmalı fiyatlar
- Toplu bakım indirimleri
- Eryaman'da sabit ekip

**Ortalama Varış Süresi:** 20-30 dakika

**Not:** Eryaman site yönetimleri için özel teklif alın.
```

---

### Lokasyon 3: Etimesgut

#### Bölge Profili

```markdown
# Etimesgut Teknik Servis Hizmetleri

Etimesgut, hem eski yerleşim hem de yeni projelerle karma bir yapıya sahiptir.
Özellikle sanayi bölgesi yakınlığı ile ticari müşterilerimize de hizmet sunuyoruz.

## Etimesgut Bölge Özellikleri

- **Konut Tipi:** Karma (müstakil, apartman, site)
- **Yapı Yaşı:** 5-40 yıl arası çeşitlilik
- **Sanayi Bölgesi:** Aktif ticari alan
- **Nüfus:** 600.000+ (ilçe geneli)

## Etimesgut'ta En Çok Talep Edilen Hizmetler

1. Elektrik tesisatı (eski binalarda yenileme)
2. Kombi tamir
3. Klima bakımı (ticari)
4. Su tesisatı

## Etimesgut Mahallelerimiz

- Eryaman (bir kısmı Etimesgut'a bağlı)
- Elvankent
- Yapracık
- Bağlıca
- Güzelkent
- Aşağı Yurtçu
- Yukarı Yurtçu

## Ticari Müşterilerimiz

Etimesgut OSB ve sanayi bölgelerinde fabrika ve işyerlerine hizmet veriyoruz.
```

---

### Lokasyon 4: Çayyolu

#### Bölge Profili

```markdown
# Çayyolu Teknik Servis Hizmetleri

Çayyolu, Ankara'nın en prestijli ve modern yerleşim alanlarından biridir.
Yüksek yaşam standartları ve kaliteli konut projelerinde hizmet sunuyoruz.

## Çayyolu Bölge Özellikleri

- **Konut Tipi:** Lüks site, villa, modern apartman
- **Yapı Yaşı:** Genellikle 5-20 yıl
- **Gelir Düzeyi:** Üst-orta ve üst segment
- **Nüfus:** 200.000+ (tahmini)

## Çayyolu'nda En Çok Talep Edilen Hizmetler

1. Klima sistemleri (multi-split, VRF)
2. Akıllı ev sistemleri
3. Isı pompası kurulumu
4. Havuz bakımı (villalar)

## Çayyolu Mahallelerimiz

- Çayyolu Mahallesi
- Yaşamkent
- Konutkent
- Ümitköy
- Çukurambar
- Koru Mahallesi
- Beytepe

## Premium Hizmet Anlayışı

Çayyolu'nda premium müşteri profiline uygun:
- Randevulu hizmet
- Beyaz eldiven servisi
- Markalar arası uzmanlık
- Garanti uzatmalı işçilik
```

---

### Lokasyon 5: Sincan

#### Bölge Profili

```markdown
# Sincan Teknik Servis Hizmetleri

Sincan, geniş nüfusu ve karma yapısıyla Ankara'nın önemli ilçelerinden biridir.
Hem konut hem de sanayi alanlarında aktif hizmet sunuyoruz.

## Sincan Bölge Özellikleri

- **Konut Tipi:** Apartman, TOKİ, eski yapılar
- **Yapı Yaşı:** 10-50 yıl arası
- **Sanayi Bölgesi:** Sincan OSB
- **Nüfus:** 500.000+ (ilçe geneli)

## Sincan'da En Çok Talep Edilen Hizmetler

1. Kombi bakım ve tamir
2. Elektrik tesisatı yenileme
3. Su tesisatı
4. Tıkanıklık açma

## Sincan Mahallelerimiz

- Fatih Mahallesi
- Tandoğan Mahallesi
- Atatürk Mahallesi
- Plevne Mahallesi
- Yenikent
- TOKİ Konutları

## Ekonomik Çözümler

Sincan'da uygun fiyatlı ve kaliteli hizmet:
- Rekabetçi fiyatlandırma
- Taksit seçenekleri
- Toplu iş indirimleri
```

---

### Lokasyon 6: Batıkent

#### Bölge Profili

```markdown
# Batıkent Teknik Servis Hizmetleri

Batıkent, planlı kentleşmenin örnek projelerinden biri olarak kurulmuş,
yoğun nüfuslu modern bir yerleşim alanıdır.

## Batıkent Bölge Özellikleri

- **Konut Tipi:** Çok katlı apartman, site
- **Yapı Yaşı:** 20-35 yıl
- **Planlı Yapı:** Düzenli sokak dokusu
- **Nüfus:** 400.000+ (tahmini)

## Batıkent'te En Çok Talep Edilen Hizmetler

1. Kombi değişimi (eski kombiler)
2. Elektrik tesisatı güncelleme
3. Klima montajı
4. Petek temizliği

## Batıkent Mahallelerimiz

- Batıkent 1. Etap
- Batıkent 2. Etap
- Batıkent 3. Etap
- Batıkent 4. Etap
- Batıkent 5. Etap
- Kardelen Mahallesi
- Mesa bölgeleri

## Eski Bina Uzmanlığı

Batıkent'te 25+ yıllık binalara özel:
- Tesisat yenileme paketleri
- Elektrik güncelleme
- Kombi değişimi kampanyaları
```

---

## Uygulama Adımları

### Adım 1: Mevcut Yapıyı İncele

```
1. src/lib/locations.ts dosyasını kontrol et
2. Services koleksiyonundaki lokasyon alanlarını incele
3. Mevcut lokasyon sayfalarının URL yapısını doğrula
```

### Adım 2: İçerik Modülleri Hazırla

Her lokasyon için:
- Ana sayfa içerik bloğu
- Hizmet sayfası lokasyon modülü
- Bölge istatistikleri
- Referans listesi

### Adım 3: Payload Admin'de Güncelle

```
1. Pages koleksiyonunda lokasyon ana sayfalarını bul
2. Her sayfaya lokasyon içerik bloğu ekle
3. SEO meta bilgilerini güncelle
```

### Adım 4: Hizmet Sayfalarını Güncelle

```
NOT: 552 hizmet sayfasını tek tek güncellemek yerine,
şablon/template bazlı bir yaklaşım değerlendirilmeli.

Seçenek A: Manuel güncelleme (yoğun iş)
Seçenek B: Dinamik içerik bileşeni (geliştirme gerektirir)
```

---

## Schema.org LocalBusiness Markup

Her lokasyon sayfası için yerel işletme markup'ı:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hızır Teknik - Eryaman",
  "description": "Eryaman'da kombi, klima, elektrik ve tesisat hizmetleri",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Eryaman",
    "addressRegion": "Ankara",
    "addressCountry": "TR"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.9334,
      "longitude": 32.8597
    },
    "geoRadius": "10km"
  },
  "telephone": "+90-312-XXX-XX-XX",
  "openingHours": "Mo-Su 00:00-24:00",
  "priceRange": "₺₺"
}
```

---

## Google Business Profile Entegrasyonu

Her lokasyon için Google Business Profile (GBP) oluşturulması önerilir:

### GBP Bilgileri

| Lokasyon | GBP Adı | Kategori |
|----------|---------|----------|
| Ankara | Hızır Teknik Ankara | HVAC Contractor |
| Eryaman | Hızır Teknik Eryaman | Plumber |
| Etimesgut | Hızır Teknik Etimesgut | Electrician |
| Çayyolu | Hızır Teknik Çayyolu | HVAC Contractor |
| Sincan | Hızır Teknik Sincan | Home Improvement |
| Batıkent | Hızır Teknik Batıkent | Plumber |

### GBP Optimizasyonu

1. **Fotoğraflar:** Her lokasyon için gerçek iş fotoğrafları
2. **İncelemeler:** Müşterilerden Google yorumu isteyin
3. **Posts:** Haftalık güncellemeler paylaşın
4. **Q&A:** Sık sorulan soruları yanıtlayın
5. **Services:** Hizmet listesini ekleyin

---

## Yerel Anahtar Kelime Stratejisi

### Ana Anahtar Kelimeler (Her Lokasyon İçin)

```
[lokasyon] kombi servisi
[lokasyon] klima montajı
[lokasyon] elektrikçi
[lokasyon] tesisatçı
[lokasyon] teknik servis
```

### Uzun Kuyruk Anahtar Kelimeler

```
[lokasyon] 7/24 acil tesisatçı
[lokasyon] ucuz kombi bakımı
[lokasyon] en iyi klima servisi
[lokasyon] güvenilir elektrikçi
[lokasyon] yakınında teknik servis
```

### Sayfa Başlığı Formatı

```
[Hizmet Adı] [Lokasyon] | Hızır Teknik

Örnekler:
- Kombi Bakımı Eryaman | Hızır Teknik
- Klima Montajı Çayyolu | Hızır Teknik
- Elektrik Arıza Servisi Sincan | Hızır Teknik
```

---

## Kalite Kontrol Checklist

### Her Lokasyon İçin

- [ ] Ana sayfa içeriği zenginleştirildi
- [ ] Bölge profili eklendi
- [ ] Mahalle listesi güncel
- [ ] Referanslar eklendi
- [ ] Schema markup uygulandı
- [ ] Meta bilgileri optimize edildi
- [ ] Dahili linkler çalışıyor
- [ ] Mobil görünüm kontrol edildi

### Genel Kontrol

- [ ] 6 lokasyon sayfası güncellendi
- [ ] Google Search Console'da hatalar kontrol edildi
- [ ] Sayfa hızları ölçüldü
- [ ] GBP profilleri oluşturuldu

---

## Zaman Çizelgesi

| Hafta | Görev |
|-------|-------|
| 1. Hafta | Ankara ve Eryaman içerikleri |
| 2. Hafta | Etimesgut ve Çayyolu içerikleri |
| 3. Hafta | Sincan ve Batıkent içerikleri |
| 4. Hafta | Test, optimizasyon ve GBP kurulumu |

---

## Gelecek Genişleme Planı

Yeni lokasyonlar eklenebilir:

| Öncelik | Lokasyon | Gerekçe |
|---------|----------|---------|
| 1 | Keçiören | Yüksek nüfus |
| 2 | Mamak | Yoğun talep bölgesi |
| 3 | Çankaya (alt bölgeler) | Premium segment |
| 4 | Gölbaşı | Gelişen bölge |
| 5 | Pursaklar | Yeni yerleşim |

**Not:** Yeni lokasyon eklemek için `src/lib/locations.ts` dosyası güncellenmeli ve ilgili sayfalar oluşturulmalıdır.

---

**Sonraki Adım:** Bu faz tamamlandığında `06-PHASE-5-TECHNICAL-SEO.md` dosyasına geçin.
