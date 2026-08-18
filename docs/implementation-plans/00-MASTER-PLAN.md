# Hızır Teknik - 2026 İçerik Stratejisi Uygulama Ana Planı

**Oluşturulma Tarihi:** 27 Aralık 2025
**Referans Doküman:** `/CONTENT_STRATEGY_2026.md`

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE KULLANILIYOR ⚠️

- Development ortamında PRODUCTION veritabanı kullanılmaktadır
- ASLA seed script çalıştırmayın
- ASLA kırıcı/bozucu veritabanı değişiklikleri yapmayın
- Tüm değişiklikler Payload Admin Panel üzerinden yapılmalıdır
- Migration gerekiyorsa, önce backup alın ve test ortamında deneyin
```

---

## Uygulama Fazları Özeti

| Faz | Başlık | Öncelik | Süre | Dosya |
|-----|--------|---------|------|-------|
| 0 | Mevcut İçerik Güncellemesi | ACİL | 1 gün | `01-PHASE-0-IMMEDIATE-UPDATES.md` |
| 1 | Blog İçerik Üretim Sistemi | YÜKSEK | Sürekli | `02-PHASE-1-BLOG-CONTENT.md` |
| 2 | SSS/FAQ Sayfaları | YÜKSEK | 2 hafta | `03-PHASE-2-FAQ-PAGES.md` |
| 3 | Fiyat Rehberleri | ORTA | 3 hafta | `04-PHASE-3-PRICE-GUIDES.md` |
| 4 | Lokasyon İçerik Zenginleştirme | ORTA | 4 hafta | `05-PHASE-4-LOCATION-CONTENT.md` |
| 5 | Teknik SEO Uygulaması | ORTA | 2 hafta | `06-PHASE-5-TECHNICAL-SEO.md` |
| 6 | Video İçerik Stratejisi | DÜŞÜK | Sürekli | `07-PHASE-6-VIDEO-CONTENT.md` |

---

## Mevcut Sistem Yapısı

### Payload CMS Koleksiyonları

```
/src/collections/
├── Posts.ts              # Blog yazıları
├── PostCategories.ts     # Blog kategorileri (7 adet)
├── BlogComments.ts       # Yorum sistemi
├── Pages.ts              # Sayfa yönetimi (block-based)
├── Services.ts           # Hizmetler (92 adet)
├── ServiceCategories.ts  # Hizmet kategorileri (6 adet)
├── Projects.ts           # Projeler/Portföy
├── Testimonials.ts       # Müşteri yorumları
├── Authors.ts            # Yazarlar
├── Certifications.ts     # Sertifikalar
├── Media.ts              # Medya dosyaları (S3)
├── SiteSettings.ts       # Site ayarları (global)
└── blocks/               # 18 adet block tipi
    ├── PageFAQBlock.ts   # FAQ block (mevcut)
    └── ...
```

### Mevcut İçerik Durumu

| İçerik Türü | Mevcut | Hedef (6 Ay) | Hedef (12 Ay) |
|-------------|--------|--------------|---------------|
| Blog Yazıları | 4 | 52 | 100 |
| SSS Sayfaları | 0 | 4 | 4 |
| Fiyat Rehberleri | 0 | 4 | 6 |
| Lokasyon İçerikleri | 6 (temel) | 18 | 24 |

### Lokasyonlar (src/lib/locations.ts)

1. Ankara (Merkez)
2. Eryaman
3. Etimesgut
4. Çayyolu
5. Sincan
6. Batıkent

### Blog Kategorileri (PostCategories)

1. Teknik Bilgiler
2. Faydalı Bilgiler
3. Güvenlik ve Önlemler
4. Tüketici Rehberi
5. Periyodik Bakım
6. Sektörel İçerikler
7. Müşteri Bilgilendirme

---

## Uygulama Takvimi

### Ocak 2026 - Hafta 1-2 (Acil Başlangıç)

- [ ] Faz 0: Mevcut 4 blog yazısını 2026'ya güncelle
- [ ] Faz 1: İlk 4 blog yazısını yayınla
- [ ] Faz 2: İlk SSS sayfası şablonunu oluştur

### Ocak 2026 - Hafta 3-4

- [ ] Faz 1: 4 blog yazısı daha (toplam 8)
- [ ] Faz 2: "İklimlendirme ve Isıtma" SSS sayfası canlı

### Şubat 2026

- [ ] Faz 1: 8 blog yazısı (toplam 16)
- [ ] Faz 2: "Elektrik Tesisatı" SSS sayfası
- [ ] Faz 3: Kombi Fiyatları Rehberi başlangıç

### Mart 2026

- [ ] Faz 1: 8 blog yazısı (toplam 24)
- [ ] Faz 2: "Su ve Tesisat" SSS sayfası
- [ ] Faz 3: Klima Fiyatları Rehberi
- [ ] Faz 4: Lokasyon içerik zenginleştirme başlangıç

### Nisan 2026

- [ ] Faz 1: 8 blog yazısı (toplam 32)
- [ ] Faz 2: "Havuz Sistemleri" SSS sayfası
- [ ] Faz 5: Teknik SEO uygulaması başlangıç

### Mayıs 2026

- [ ] Faz 1: 8 blog yazısı (toplam 40)
- [ ] Faz 3: Tesisat ve Elektrik Fiyat Rehberleri
- [ ] Faz 6: Video içerik planlaması

### Haziran 2026

- [ ] Faz 1: 8 blog yazısı (toplam 48)
- [ ] Faz 3: Havuz ve Isı Pompası Fiyat Rehberleri
- [ ] Faz 4: Tüm lokasyon içerikleri tamamla

---

## Teknik Gereksinimler

### Payload Admin Panel Erişimi

```
URL: http://localhost:3000/admin
```

### İçerik Oluşturma Akışı

1. Payload Admin Panel'e giriş yap
2. İlgili koleksiyona git (Posts, Pages, vb.)
3. "Create New" ile yeni içerik oluştur
4. Tüm alanları doldur (SEO dahil)
5. "Save as Draft" ile taslak kaydet
6. İnceleme sonrası "Publish" ile yayınla

### Görsel Standartları

| Görsel Tipi | Boyut | Format |
|-------------|-------|--------|
| Blog Featured | 404x660px | WebP/JPG |
| Author Photo | 200x200px | WebP/JPG |
| Gallery Images | 1200x800px | WebP/JPG |
| Category Image | 600x400px | WebP/JPG |

---

## Dosya Yapısı

```
/docs/implementation-plans/
├── 00-MASTER-PLAN.md                    # Bu dosya
├── 01-PHASE-0-IMMEDIATE-UPDATES.md      # Acil güncellemeler
├── 02-PHASE-1-BLOG-CONTENT.md           # Blog içerik üretimi
├── 03-PHASE-2-FAQ-PAGES.md              # SSS sayfaları
├── 04-PHASE-3-PRICE-GUIDES.md           # Fiyat rehberleri
├── 05-PHASE-4-LOCATION-CONTENT.md       # Lokasyon içerikleri
├── 06-PHASE-5-TECHNICAL-SEO.md          # Teknik SEO
└── 07-PHASE-6-VIDEO-CONTENT.md          # Video içerik
```

---

## KPI Takip Tablosu

| Metrik | Başlangıç | Ay 1 | Ay 3 | Ay 6 |
|--------|-----------|------|------|------|
| Blog Yazısı | 4 | 12 | 28 | 52 |
| SSS Sayfası | 0 | 1 | 3 | 4 |
| Fiyat Rehberi | 0 | 1 | 2 | 4 |
| Lokasyon İçerik | 6 | 8 | 14 | 18 |

---

## İletişim ve Sorumluluklar

### İçerik Üretimi
- Blog yazıları: İçerik ekibi
- Teknik doğrulama: Teknik ekip
- SEO kontrolü: Dijital pazarlama

### Teknik Uygulama
- Payload CMS: Geliştirici
- Schema markup: Geliştirici
- Performance: Geliştirici

---

**Sonraki Adım:** `01-PHASE-0-IMMEDIATE-UPDATES.md` dosyasını inceleyin ve acil güncellemelere başlayın.
