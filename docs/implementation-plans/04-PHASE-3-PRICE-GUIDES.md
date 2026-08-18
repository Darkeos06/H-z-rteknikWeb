# Faz 3: Fiyat Rehberleri Uygulaması

**Öncelik:** ORTA
**Tahmini Süre:** 3 hafta
**Başlangıç:** Faz 2 ile paralel veya sonrasında

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE KULLANILIYOR ⚠️

- Fiyat bilgileri hassas içeriklerdir
- Yanlış fiyat bilgisi müşteri memnuniyetsizliğine yol açar
- Tüm fiyatları onay aldıktan sonra yayınlayın
- Fiyat aralıkları kullanın, kesin fiyat vermeyin
- "Fiyatlar değişkenlik gösterebilir" uyarısı ekleyin
```

---

## Amaç

4 ana hizmet kategorisi için kapsamlı fiyat rehberleri oluşturmak. Her rehber SEO optimize edilmiş, şeffaf fiyatlandırma prensipleriyle hazırlanacak ve "fiyat" anahtar kelimeli aramaları hedefleyecek.

---

## Fiyat Rehberi Stratejisi

### Neden Fiyat Rehberleri?

1. **Yüksek Arama Hacmi:** "kombi bakım fiyatı 2026", "klima montaj fiyatı" gibi aramalar yoğun
2. **Güven Oluşturma:** Şeffaf fiyatlandırma güven artırır
3. **Lead Kalitesi:** Fiyat araştırması yapanlar satın almaya yakın müşteriler
4. **Rekabet Avantajı:** Çoğu rakip fiyat bilgisi paylaşmıyor

### Fiyat Gösterim Prensipleri

```
✅ DOĞRU YAKLAŞIM:
- Fiyat aralıkları: "500-800 TL arası"
- "Başlangıç fiyatı: X TL'den"
- Faktörlere göre değişkenlik açıklaması
- "Ücretsiz keşif" çağrısı

❌ YANLIŞ YAKLAŞIM:
- Kesin sabit fiyatlar
- Güncellenmemiş eski fiyatlar
- Rakip karşılaştırma fiyatları
```

---

## Oluşturulacak Fiyat Rehberleri

| Rehber | URL | Öncelik | İçerik |
|--------|-----|---------|--------|
| Kombi Fiyatları 2026 | /fiyatlar/kombi | 1 | Bakım, montaj, tamir |
| Klima Fiyatları 2026 | /fiyatlar/klima | 2 | Bakım, montaj, gaz dolumu |
| Tesisat Fiyatları 2026 | /fiyatlar/tesisat | 3 | Su, pis su, tıkanıklık |
| Elektrik Fiyatları 2026 | /fiyatlar/elektrik | 4 | Arıza, tesisat, pano |

---

## Rehber 1: Kombi Fiyatları 2026

### Meta Bilgileri

```yaml
Başlık: Kombi Fiyatları 2026 - Bakım, Montaj ve Tamir Ücretleri | Hızır Teknik
Slug: fiyatlar/kombi
Meta Title: Kombi Fiyatları 2026 | Bakım, Montaj, Tamir Ücretleri - Ankara
Meta Description: 2026 güncel kombi fiyatları. Bakım 500-800 TL, montaj 1.500-3.000 TL. Ankara'da ücretsiz keşif için Hızır Teknik'i arayın.
```

### İçerik Yapısı

#### Giriş Bölümü

```markdown
# Kombi Fiyatları 2026 - Ankara Güncel Fiyat Rehberi

Ankara'da kombi bakımı, montajı ve tamiri için güncel 2026 fiyatlarını bu rehberde bulabilirsiniz.

**Önemli Not:** Fiyatlar kombi markası, modeli, arıza türü ve işin kapsamına göre değişiklik gösterebilir. Kesin fiyat için ücretsiz keşif hizmetimizden yararlanın.

**Hızır Teknik Avantajları:**
- Ücretsiz keşif ve fiyat teklifi
- Garanti kapsamında işçilik
- Orijinal yedek parça
- 7/24 acil servis
```

#### Kombi Bakım Fiyatları

```markdown
## Kombi Bakım Fiyatları 2026

### Standart Yıllık Bakım

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| Standart Bakım (Tek Kombi) | 500 - 800 TL |
| Detaylı Bakım (Kombi + Kalorifer) | 800 - 1.200 TL |
| Acil/Hafta Sonu Bakım | 700 - 1.000 TL |

**Standart Bakım İçeriği:**
- Gaz basıncı kontrolü
- Genleşme tankı kontrolü
- Brülör ve elektrot temizliği
- Eşanjör kontrolü
- Genel sistem testi

**Neden Bu Fiyat Aralığı?**
- Kombi markası ve modeli
- Son bakım tarihi
- Sistemin genel durumu
- Hizmet günü ve saati
```

#### Kombi Montaj Fiyatları

```markdown
## Kombi Montaj Fiyatları 2026

### Yeni Kombi Montajı

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| Standart Montaj (Kombi Dahil Değil) | 1.500 - 2.500 TL |
| Baca Bağlantılı Montaj | 2.000 - 3.000 TL |
| Eski Kombi Sökümü + Yeni Montaj | 2.500 - 4.000 TL |
| Yerden Isıtma Sistemine Bağlantı | 3.000 - 5.000 TL |

**Montaj Fiyatını Etkileyen Faktörler:**
- Baca tipi (hermetik/bacalı)
- Mevcut tesisat durumu
- Konum ve erişilebilirlik
- Ek tesisat gereksinimleri

### Kombi Marka Fiyatları (Tahmini Cihaz Bedeli)

| Segment | Fiyat Aralığı | Örnek Markalar |
|---------|---------------|----------------|
| Ekonomik | 15.000 - 25.000 TL | Demirdöküm, ECA |
| Orta Segment | 25.000 - 40.000 TL | Vaillant, Baymak |
| Premium | 40.000 - 60.000 TL | Viessmann, Bosch |

*Fiyatlar tahminidir, güncel fiyat için bayi ile iletişime geçin.*
```

#### Kombi Tamir Fiyatları

```markdown
## Kombi Tamir ve Parça Değişim Fiyatları 2026

### Yaygın Arıza Onarımları

| Arıza Türü | İşçilik + Parça Tahmini |
|------------|-------------------------|
| 3 Yollu Vana Değişimi | 800 - 1.500 TL |
| Pompa Değişimi | 1.000 - 2.000 TL |
| Eşanjör Temizliği | 400 - 700 TL |
| Eşanjör Değişimi | 1.500 - 3.500 TL |
| Kart (Elektronik) Tamiri | 500 - 1.200 TL |
| Kart Değişimi | 1.500 - 4.000 TL |
| NTC Sensör Değişimi | 200 - 400 TL |
| Genleşme Tankı | 300 - 600 TL |
| Brülör Değişimi | 600 - 1.200 TL |
| Gaz Valfi Değişimi | 1.000 - 2.500 TL |

**Arıza Tespit Ücreti:**
- Standart: 150 - 250 TL
- Onarım yapılırsa: Genellikle işçiliğe dahil

**Garantili Onarım:**
Tüm onarımlarımız 6 ay işçilik garantisi kapsamındadır.
```

#### Tasarruf İpuçları

```markdown
## Kombi Masraflarından Tasarruf İpuçları

### 1. Düzenli Bakım Yaptırın
- Bakımsız kombiler %20'ye kadar daha fazla yakıt tüketir
- Yıllık 500-800 TL bakım, binlerce TL onarım masrafını önler

### 2. Enerji Verimliliği Yüksek Kombi Seçin
- Yoğuşmalı kombiler %15-30 daha verimli
- Ön yatırım yüksek, uzun vadede kazanç

### 3. Akıllı Termostat Kullanın
- Programlanabilir ısıtma
- Uzaktan kontrol
- %10-15 enerji tasarrufu

### 4. Kış Öncesi Kontrol Yaptırın
- Eylül-Ekim aylarında randevu alın
- Kış yoğunluğundan kaçının
- Erken tespit ile büyük arızaları önleyin

**Türkiye'de Enerji Tasarrufu:**
TÜİK 2024 verilerine göre 26.6 milyon hanenin %81'i doğalgaz kullanmaktadır. Düzenli bakım ile %15-20 enerji tasarrufu sağlanabilir.
```

---

## Rehber 2: Klima Fiyatları 2026

### Meta Bilgileri

```yaml
Başlık: Klima Fiyatları 2026 - Montaj, Bakım ve Gaz Dolumu | Hızır Teknik
Slug: fiyatlar/klima
Meta Title: Klima Fiyatları 2026 | Montaj, Bakım, Gaz Dolumu - Ankara
Meta Description: 2026 güncel klima fiyatları. Montaj 1.000-2.500 TL, bakım 300-500 TL. Ankara klima servisi için Hızır Teknik.
```

### İçerik Yapısı

#### Klima Montaj Fiyatları

```markdown
## Klima Montaj Fiyatları 2026

### Split Klima Montajı

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| 9.000 - 12.000 BTU Montaj | 1.000 - 1.500 TL |
| 18.000 - 24.000 BTU Montaj | 1.500 - 2.500 TL |
| Multi Split Montaj (İç Ünite Başına) | 1.200 - 2.000 TL |
| Eski Klima Sökümü | 300 - 500 TL |
| Klima Taşıma (Söküm + Montaj) | 1.500 - 2.500 TL |

**Montaj Dahil Olanlar:**
- 3 metre bakır boru
- Bağlantı elemanları
- Dış ünite montaj ayağı
- Elektrik bağlantısı
- Test ve devreye alma

**Ek Malzeme Ücretleri:**

| Malzeme | Birim Fiyat |
|---------|-------------|
| Bakır Boru (metre) | 150 - 250 TL |
| Kablo Kanalı | 50 - 100 TL/m |
| İç Ünite Dekoratif Kanal | 100 - 200 TL |
| Dış Ünite Koruma Kafesi | 300 - 600 TL |
```

#### Klima Bakım Fiyatları

```markdown
## Klima Bakım Fiyatları 2026

### Periyodik Bakım

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| Tekli Klima Bakımı | 300 - 500 TL |
| Çoklu Klima Bakımı (2-3 adet) | 500 - 900 TL |
| VRF/Multi Sistem Bakımı | 800 - 1.500 TL |
| Detaylı Bakım + Dezenfektan | 400 - 600 TL |

**Bakım İçeriği:**
- Filtre temizliği/değişimi
- Evaporatör temizliği
- Kondenser (dış ünite) temizliği
- Drenaj hattı kontrolü
- Gaz basıncı kontrolü
- Elektrik bağlantı kontrolü

**Ne Sıklıkla Bakım?**
- Ev kullanımı: Yılda 1-2 kez
- Ofis/işyeri: Yılda 2-3 kez
- 7/24 çalışan sistemler: Yılda 4 kez
```

#### Klima Gaz Dolumu

```markdown
## Klima Gaz Dolumu Fiyatları 2026

### Gaz Türlerine Göre Fiyatlar

| Gaz Türü | Fiyat Aralığı |
|----------|---------------|
| R22 (Eski Tip) | Yasaklı - Değişim Önerilir |
| R410A | 500 - 900 TL |
| R32 | 600 - 1.000 TL |
| R407C | 500 - 800 TL |

**Önemli Uyarı:**
Klima gazı kendiliğinden azalmaz. Gaz eksikliği varsa mutlaka kaçak vardır!

**Doğru Yaklaşım:**
1. Kaçak tespiti yapılır
2. Kaçak noktası onarılır
3. Sistem vakumlanır
4. Gaz doldurulur

**Kaçak Tespiti:** 200 - 400 TL
**Kaçak Onarımı:** Yerine göre 300 - 1.000 TL
```

#### Klima Arıza ve Tamir Fiyatları

```markdown
## Klima Arıza Onarım Fiyatları 2026

| Arıza Türü | İşçilik + Parça Tahmini |
|------------|-------------------------|
| Kompresör Değişimi | 2.500 - 5.000 TL |
| Fan Motoru Değişimi | 600 - 1.200 TL |
| Kart Tamiri | 400 - 800 TL |
| Kart Değişimi | 1.000 - 2.500 TL |
| Termostat Değişimi | 200 - 500 TL |
| Kondenser Temizliği | 300 - 500 TL |

**Ekonomik Değerlendirme:**
- 10 yaş üzeri klimalar için: Yeni klima düşünün
- Kompresör değişimi cihaz değerinin %50'sini geçiyorsa: Yeni alın
```

---

## Rehber 3: Tesisat Fiyatları 2026

### Meta Bilgileri

```yaml
Başlık: Tesisat Fiyatları 2026 - Su, Pis Su ve Tıkanıklık | Hızır Teknik
Slug: fiyatlar/tesisat
Meta Title: Tesisat Fiyatları 2026 | Su Tesisatı, Tıkanıklık Açma - Ankara
Meta Description: 2026 güncel tesisat fiyatları. Tıkanıklık açma 300-800 TL, sızıntı tespiti 400-800 TL. Ankara tesisatçı hizmeti.
```

### İçerik Yapısı

#### Tıkanıklık Açma Fiyatları

```markdown
## Tıkanıklık Açma Fiyatları 2026

### Ev İçi Tıkanıklıklar

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| Lavabo Tıkanıklığı | 200 - 400 TL |
| Tuvalet Tıkanıklığı | 300 - 500 TL |
| Küvet/Duş Tıkanıklığı | 250 - 450 TL |
| Mutfak Gideri Tıkanıklığı | 300 - 500 TL |

### Ana Hat Tıkanıklıkları

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| Ana Gider Hattı (Manuel) | 400 - 700 TL |
| Ana Gider Hattı (Robotlu) | 600 - 1.200 TL |
| Kamera ile Görüntüleme | 400 - 800 TL |
| Yüksek Basınçlı Yıkama | 800 - 1.500 TL |

**Acil Servis Farkı:**
- Hafta içi mesai: Normal fiyat
- Hafta sonu/resmi tatil: +%30-50
- Gece (22:00-08:00): +%50-75

**Profesyonel Müdahale Avantajları:**
- Robotlu cihaz ile köklü çözüm
- Kamera ile tıkanıklık sebebi tespiti
- Boru hasarı olmadan temizlik
```

#### Sızıntı Tespit ve Onarım

```markdown
## Sızıntı Tespit ve Onarım Fiyatları 2026

### Sızıntı Tespiti

| Hizmet | Fiyat Aralığı |
|--------|---------------|
| Akustik Sızıntı Tespiti | 400 - 700 TL |
| Termal Kamera ile Tespit | 500 - 900 TL |
| Gaz Test (Azot) ile Tespit | 600 - 1.000 TL |
| Kapsamlı Bina Kontrolü | 1.000 - 2.000 TL |

### Sızıntı Onarımı

| Onarım Türü | Fiyat Aralığı |
|-------------|---------------|
| Basit Boru Onarımı | 200 - 500 TL |
| Duvar İçi Boru Onarımı | 500 - 1.200 TL |
| Döşeme Altı Boru Onarımı | 800 - 2.000 TL |
| Boru Hattı Yenileme (metre) | 150 - 300 TL |

**İstatistik:** TÜİK verilerine göre Türkiye'deki konutların %31.3'ü nem ve sızıntı sorunu yaşamaktadır.

**Kırmadan Onarım:**
Modern teknoloji ile duvar/döşeme kırmadan onarım mümkündür (epoksi kaplama, relining).
Fiyat aralığı: 1.500 - 4.000 TL
```

#### Su Tesisatı Yenileme

```markdown
## Su Tesisatı Yenileme Fiyatları 2026

### Komple Tesisat Yenileme

| Konut Tipi | Fiyat Aralığı |
|------------|---------------|
| 1+1 Daire | 5.000 - 10.000 TL |
| 2+1 Daire | 8.000 - 15.000 TL |
| 3+1 Daire | 12.000 - 22.000 TL |
| Villa (250m²) | 25.000 - 45.000 TL |

**Fiyata Dahil:**
- PPR veya bakır boru malzeme
- Tüm işçilik
- Vana ve bağlantı elemanları
- Duvar kapama dahil değil

### Kısmi Yenileme

| Bölge | Fiyat Aralığı |
|-------|---------------|
| Banyo Tesisatı | 2.000 - 5.000 TL |
| Mutfak Tesisatı | 1.500 - 4.000 TL |
| Balkon/WC | 1.000 - 2.500 TL |
```

---

## Rehber 4: Elektrik Fiyatları 2026

### Meta Bilgileri

```yaml
Başlık: Elektrik Tesisatı Fiyatları 2026 - Arıza, Tesisat, Pano | Hızır Teknik
Slug: fiyatlar/elektrik
Meta Title: Elektrik Tesisatı Fiyatları 2026 | Arıza, Yenileme, Pano - Ankara
Meta Description: 2026 güncel elektrik fiyatları. Arıza onarımı 200-600 TL, priz montajı 100-200 TL. Ankara elektrikçi hizmeti.
```

### İçerik Yapısı

#### Elektrik Arıza Fiyatları

```markdown
## Elektrik Arıza Onarım Fiyatları 2026

### Yaygın Arızalar

| Arıza Türü | Fiyat Aralığı |
|------------|---------------|
| Sigorta Atma Sorunu Tespiti | 150 - 300 TL |
| Priz/Anahtar Değişimi | 100 - 200 TL |
| Kablo Arızası Onarımı | 200 - 500 TL |
| Topraklama Sorunu Giderme | 300 - 600 TL |
| Kısa Devre Tespiti ve Onarımı | 250 - 600 TL |
| Kaçak Akım Tespiti | 200 - 400 TL |

### Elektrik Panosu İşlemleri

| İşlem | Fiyat Aralığı |
|-------|---------------|
| Sigorta Değişimi (adet) | 50 - 150 TL |
| Kaçak Akım Rölesi Montajı | 200 - 400 TL |
| Pano Düzenleme | 300 - 700 TL |
| Yeni Pano Montajı (Daire) | 800 - 1.500 TL |
| Yeni Pano Montajı (Villa) | 1.500 - 3.500 TL |

**Acil Elektrik Servisi:**
7/24 acil servis hizmeti için +%50-100 fark uygulanabilir.
```

#### Elektrik Tesisatı Yenileme

```markdown
## Elektrik Tesisatı Yenileme Fiyatları 2026

### Komple Tesisat Yenileme

| Konut Tipi | Fiyat Aralığı |
|------------|---------------|
| 1+1 Daire | 8.000 - 15.000 TL |
| 2+1 Daire | 12.000 - 22.000 TL |
| 3+1 Daire | 18.000 - 35.000 TL |
| Villa (250m²) | 35.000 - 65.000 TL |

**Fiyata Dahil:**
- NYM tipi bakır kablo
- Priz ve anahtarlar
- Yeni elektrik panosu
- Tüm işçilik

**Fiyata Dahil Değil:**
- Sıva ve boya işleri
- Özel aydınlatma armatürleri
- Akıllı ev sistemleri

### Kısmi Yenileme

| Bölge/İşlem | Fiyat Aralığı |
|-------------|---------------|
| Oda Tesisatı (tek oda) | 1.500 - 3.500 TL |
| Banyo/Mutfak Hattı | 2.000 - 4.500 TL |
| Klima Hattı Çekme | 500 - 1.200 TL |
| Ek Priz Noktası | 300 - 600 TL |
```

#### Aydınlatma ve Montaj

```markdown
## Aydınlatma ve Montaj Fiyatları 2026

### Aydınlatma Montajları

| İşlem | Fiyat Aralığı |
|-------|---------------|
| Avize Montajı (Basit) | 100 - 200 TL |
| Avize Montajı (Karmaşık) | 200 - 400 TL |
| Spot Aydınlatma (adet) | 80 - 150 TL |
| LED Panel Montajı | 100 - 250 TL |
| Bahçe Aydınlatması | 200 - 500 TL |

### Özel Montajlar

| İşlem | Fiyat Aralığı |
|-------|---------------|
| Şofben Elektrik Bağlantısı | 200 - 400 TL |
| Elektrikli Fırın Bağlantısı | 250 - 500 TL |
| Jakuzi Elektrik Hattı | 400 - 800 TL |
| Elektrikli Araç Şarj Ünitesi | 1.500 - 4.000 TL |
```

---

## Hızlı İçerik Oluşturma: Seed Script Kullanımı

### Seed Script ile Taslak Oluşturma

Fiyat rehberlerini hızlıca taslak olarak oluşturmak için hazır seed script kullanabilirsiniz:

```bash
# Fiyat rehberlerini taslak olarak oluştur
pnpm seed:price-guides
```

**Script Konumu:** `src/seed/data/price-guides.ts`

**Script Ne Yapar?**
- 4 adet fiyat rehberi sayfasını taslak (`_status: "draft"`) olarak oluşturur:
  - Kombi Fiyatları 2026
  - Klima Fiyatları 2026
  - Tesisat Fiyatları 2026
  - Elektrik Fiyatları 2026
- PageHeroBlock ve PageRichTextBlock ile yapılandırılmış içerik
- Detaylı fiyat tabloları (markdown formatında)
- SEO meta bilgileri doldurulur

**Seed Script Sonrası Yapılacaklar:**
1. Payload Admin Panel'e gidin
2. Pages > Draft sayfaları görün
3. Fiyatları güncel verilerle kontrol edin
4. İletişim bilgilerini güncelleyin
5. "Fiyatlar değişebilir" uyarılarını doğrulayın
6. Yayınla (Publish) butonuna tıklayın

### Fiyat Güncelleme İş Akışı

```
1. pnpm seed:price-guides ile taslak oluştur
2. Admin Panel'de fiyatları güncel verilerle karşılaştır
3. Gerekli düzenlemeleri yap
4. İçeriği onaya sun
5. Onay sonrası yayınla
```

### Yeni Fiyat Rehberi Ekleme (Seed Script'e)

Yeni fiyat rehberi eklemek için `src/seed/data/price-guides.ts` dosyasını düzenleyin:

```typescript
import { createPageHeroBlock, createRichTextBlock, createRichTextHeading, createRichTextParagraph } from '../index'

// priceGuidesData dizisine yeni sayfa ekleyin
{
  title: 'Yeni Hizmet Fiyatları 2026',
  description: 'Açıklama...',
  blocks: [
    createPageHeroBlock({
      title: 'Yeni Hizmet Fiyatları 2026',
      description: 'Güncel fiyat rehberi...',
    }),
    createRichTextBlock({
      content: [
        createRichTextHeading('Fiyat Tablosu', 'h2'),
        createRichTextParagraph('| Hizmet | Fiyat Aralığı |\\n|--------|---------------|\\n| Hizmet 1 | 500-800 TL |'),
      ],
    }),
  ],
  meta: {
    title: 'Fiyat Başlığı | Hızır Teknik',
    description: 'Meta açıklama...',
  },
}
```

---

## Payload Admin Panel'de Fiyat Rehberi Oluşturma (Manuel)

### Adım 1: Sayfa Oluştur

```
1. Admin Panel > Pages > Create New
2. Title: "Kombi Fiyatları 2026"
3. Slug: "fiyatlar/kombi"
4. SEO bilgilerini doldur
```

### Adım 2: Block Yapısı

Fiyat rehberleri için önerilen block sıralaması:

```
1. PageHeroBlock (sayfa başlığı)
2. PageContentBlock (giriş metni)
3. PageTableBlock (fiyat tabloları) - varsa
4. PageContentBlock (detaylı açıklamalar)
5. PageCTABlock (iletişim çağrısı)
```

**Not:** Eğer `PageTableBlock` mevcut değilse, içerik block'unda markdown tablo kullanılabilir veya yeni bir block tipi geliştirilebilir.

### Adım 3: İçerik Girişi

```
1. Her bölümü ayrı block olarak ekleyin
2. Fiyat tablolarını düzenli formatta girin
3. Uyarı ve notları vurgulayın
4. Dahili linkleri ekleyin
```

### Adım 4: SEO Optimizasyonu

```
Meta Title: [60 karakter] - anahtar kelime önde
Meta Description: [160 karakter] - fiyat bilgisi + CTA
Canonical URL: Doğru URL yapısı
```

---

## Schema.org PriceSpecification Markup

Fiyat sayfaları için yapısal veri önerileri:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kombi Bakımı",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Hızır Teknik",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ankara"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 500,
      "maxPrice": 800,
      "priceCurrency": "TRY"
    }
  }
}
```

---

## Fiyat Güncelleme Prosedürü

### Güncelleme Sıklığı

```
- Rutin kontrol: 3 ayda bir
- Enflasyon dönemlerinde: Aylık
- Malzeme fiyat değişimlerinde: Anında
- Yeni yıl başında: Mutlaka
```

### Güncelleme Checklist

- [ ] Tüm fiyat aralıkları kontrol edildi
- [ ] Yeni hizmetler eklendi
- [ ] Kaldırılan hizmetler çıkarıldı
- [ ] Tarih referansları güncellendi (2026)
- [ ] Meta bilgileri güncellendi
- [ ] Cache temizlendi

---

## Kalite Kontrol Checklist

### Her Fiyat Rehberi İçin

- [ ] Tüm fiyatlar aralık olarak verilmiş
- [ ] "Fiyatlar değişebilir" uyarısı var
- [ ] Ücretsiz keşif CTA'sı var
- [ ] İletişim bilgileri güncel
- [ ] Tablolar okunabilir
- [ ] Mobilde tablo görünümü iyi
- [ ] Meta bilgileri dolu ve optimize

### Genel Kontrol

- [ ] 4 fiyat rehberi oluşturuldu
- [ ] Dahili linkler çalışıyor
- [ ] Schema markup uygulandı
- [ ] Google Search Console'a gönderildi

---

## Zaman Çizelgesi

| Hafta | Görev |
|-------|-------|
| 1. Hafta | Kombi Fiyat Rehberi oluştur ve yayınla |
| 2. Hafta | Klima Fiyat Rehberi |
| 3. Hafta | Tesisat ve Elektrik Fiyat Rehberleri |

---

**Sonraki Adım:** Bu faz tamamlandığında `05-PHASE-4-LOCATION-CONTENT.md` dosyasına geçin.
