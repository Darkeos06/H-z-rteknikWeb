# Faz 5: Teknik SEO Uygulaması

**Öncelik:** ORTA
**Tahmini Süre:** 2 hafta
**Başlangıç:** Faz 1-4 ile paralel veya sonrasında

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE VE CODEBASE ⚠️

- Kod değişiklikleri production'ı etkiler
- Her değişikliği test ortamında deneyin
- Schema markup hatası Google sıralamayı olumsuz etkiler
- Core Web Vitals optimizasyonu dikkatli yapılmalı
- Değişiklikler kademeli olarak deploy edilmeli
```

---

## Amaç

Sitenin teknik SEO altyapısını güçlendirerek arama motorlarında daha iyi görünürlük ve sıralama elde etmek. Schema.org markup'ları, Core Web Vitals optimizasyonu ve crawlability iyileştirmeleri yapılacak.

---

## Mevcut Teknik Durum Analizi

### Sitemap Yapısı

Mevcut multi-sitemap yapısı:

```
/sitemap.xml (index)
├── /pages-sitemap.xml
├── /services-sitemap.xml
├── /blog-sitemap.xml
├── /service-categories-sitemap.xml
├── /blog-categories-sitemap.xml
└── /locations-sitemap.xml
```

**Konum:** `app/(site)/(sitemap)/` dizini altında route handler'lar

### Robots.txt

```
/public/robots.txt veya Next.js app/robots.txt
```

### Mevcut SEO Özellikleri

- Payload CMS SEO plugin'i aktif
- Her içerik tipi için meta title/description
- OG image desteği
- Canonical URL'ler

---

## Schema.org Markup Planı

### 1. Organization Schema (Site Geneli)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hızır Teknik",
  "url": "https://hizirteknik.com",
  "logo": "https://hizirteknik.com/logo.png",
  "description": "Ankara'da profesyonel teknik servis ve tadilat hizmetleri",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ankara",
    "addressRegion": "Ankara",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-312-XXX-XX-XX",
    "contactType": "customer service",
    "availableLanguage": "Turkish",
    "areaServed": "TR"
  },
  "sameAs": [
    "https://facebook.com/hizirteknik",
    "https://instagram.com/hizirteknik",
    "https://twitter.com/hizirteknik"
  ]
}
```

**Uygulama Konumu:** `app/layout.tsx` veya `components/base/Header.tsx`

### 2. LocalBusiness Schema (Her Lokasyon İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Hızır Teknik - [Lokasyon]",
  "image": "https://hizirteknik.com/images/[lokasyon].jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Lokasyon]",
    "addressRegion": "Ankara",
    "postalCode": "[Posta Kodu]",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[Enlem]",
    "longitude": "[Boylam]"
  },
  "url": "https://hizirteknik.com/[lokasyon]",
  "telephone": "+90-312-XXX-XX-XX",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "₺₺",
  "paymentAccepted": ["Cash", "Credit Card"],
  "areaServed": {
    "@type": "City",
    "name": "[Lokasyon], Ankara"
  }
}
```

### 3. Service Schema (Her Hizmet Sayfası İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kombi Bakımı",
  "description": "Profesyonel kombi bakım hizmeti",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Hızır Teknik"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ankara"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kombi Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Yıllık Kombi Bakımı"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 500,
          "maxPrice": 800,
          "priceCurrency": "TRY"
        }
      }
    ]
  }
}
```

### 4. Article Schema (Blog Yazıları İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Blog Başlığı]",
  "description": "[Meta description]",
  "image": "[Featured image URL]",
  "author": {
    "@type": "Organization",
    "name": "Hızır Teknik"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Hızır Teknik",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hizirteknik.com/logo.png"
    }
  },
  "datePublished": "[Yayın Tarihi]",
  "dateModified": "[Güncelleme Tarihi]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Sayfa URL]"
  }
}
```

### 5. FAQPage Schema (SSS Sayfaları İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Soru metni]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Cevap metni]"
      }
    }
  ]
}
```

### 6. BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://hizirteknik.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Kategori]",
      "item": "https://hizirteknik.com/[kategori]"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Sayfa]",
      "item": "https://hizirteknik.com/[kategori]/[sayfa]"
    }
  ]
}
```

---

## Schema.org Uygulama Planı

### Yöntem 1: JSON-LD Script Tag (Önerilen)

```tsx
// components/seo/JsonLd.tsx

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
```

### Yöntem 2: Next.js Metadata API

```tsx
// app/layout.tsx veya sayfa seviyesinde

export const metadata = {
  other: {
    'script:ld+json': JSON.stringify(organizationSchema),
  },
};
```

### Uygulama Dosyaları

| Schema Tipi | Uygulama Dosyası |
|-------------|------------------|
| Organization | `app/layout.tsx` |
| LocalBusiness | `app/(site)/[location]/layout.tsx` |
| Service | `app/(site)/services/[slug]/page.tsx` |
| Article | `app/(site)/blog/[slug]/page.tsx` |
| FAQPage | `app/(site)/sss/[slug]/page.tsx` |
| BreadcrumbList | `components/ui/Breadcrumb.tsx` |

---

## Core Web Vitals Optimizasyonu

### Mevcut Metrikler (Ölçülmeli)

```
LCP (Largest Contentful Paint): < 2.5s hedef
FID (First Input Delay): < 100ms hedef
CLS (Cumulative Layout Shift): < 0.1 hedef
INP (Interaction to Next Paint): < 200ms hedef
```

### Optimizasyon Alanları

#### 1. Görsel Optimizasyonu

```tsx
// next/image kullanımı
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero Image"
  width={1200}
  height={600}
  priority // LCP görselleri için
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

**Kontrol Listesi:**
- [ ] Tüm görseller next/image ile yükleniyor
- [ ] LCP görselleri priority flag'i ile işaretli
- [ ] WebP formatı kullanılıyor
- [ ] Görsel boyutları optimize

#### 2. Font Optimizasyonu

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap', // FOUT önleme
  preload: true,
});
```

**Kontrol Listesi:**
- [ ] next/font kullanılıyor
- [ ] display: swap aktif
- [ ] Gerekli subset'ler seçili
- [ ] Font dosyaları optimize

#### 3. JavaScript Optimizasyonu

```tsx
// Dinamik import
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // Client-only bileşenler için
});
```

**Kontrol Listesi:**
- [ ] Büyük bileşenler dynamic import
- [ ] Kullanılmayan JS kaldırıldı
- [ ] Bundle size analizi yapıldı
- [ ] Tree shaking aktif

#### 4. CLS Önleme

```tsx
// Görsel için sabit alan
<div className="aspect-video relative">
  <Image
    src="/image.jpg"
    alt="Image"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

**Kontrol Listesi:**
- [ ] Görseller için width/height tanımlı
- [ ] Font yükleme sırasında alan rezerve
- [ ] Dinamik içerik için skeleton
- [ ] Reklam alanları için sabit boyut

---

## Crawlability İyileştirmeleri

### 1. Robots.txt Optimizasyonu

```txt
# /app/robots.ts veya /public/robots.txt

User-agent: *
Allow: /

# Admin paneli engelle
Disallow: /admin
Disallow: /admin/*

# API rotalarını engelle
Disallow: /api/
Disallow: /_next/

# Sitemap konumu
Sitemap: https://hizirteknik.com/sitemap.xml
```

### 2. Sitemap Optimizasyonu

Mevcut sitemap yapısı iyi, ancak şu kontroller yapılmalı:

- [ ] Tüm önemli sayfalar sitemap'te
- [ ] lastmod tarihleri doğru
- [ ] changefreq değerleri uygun
- [ ] priority değerleri mantıklı
- [ ] 404/410 sayfalar sitemap'te değil

### 3. Canonical URL'ler

```tsx
// Her sayfa için canonical URL
export const metadata = {
  alternates: {
    canonical: 'https://hizirteknik.com/[sayfa-url]',
  },
};
```

### 4. Hreflang (Gerekirse)

Site sadece Türkçe olduğu için şu an gerekli değil, ancak ileride çoklu dil için:

```tsx
alternates: {
  languages: {
    'tr': 'https://hizirteknik.com/tr/[sayfa]',
    'en': 'https://hizirteknik.com/en/[sayfa]',
  },
}
```

---

## Sayfa Hızı Optimizasyonu

### 1. Next.js Yapılandırması

```js
// next.config.mjs

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
};
```

### 2. HTTP Caching

```tsx
// app/(site)/[...slug]/page.tsx

export const revalidate = 3600; // 1 saat cache
```

### 3. Preload ve Prefetch

```tsx
// Kritik kaynakları preload
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

---

## Internal Linking Stratejisi

### Link Yapısı

```
Ana Sayfa
├── Hizmetler (kategori sayfaları)
│   ├── Hizmet Detay Sayfaları
│   └── Lokasyon + Hizmet Sayfaları
├── Blog
│   ├── Kategori Sayfaları
│   └── Blog Yazıları
├── SSS Sayfaları
├── Fiyat Rehberleri
└── Lokasyon Sayfaları
```

### Dahili Link Önerileri

Her blog yazısına eklenecek:
- İlgili hizmet sayfasına link
- İlgili SSS sayfasına link
- Lokasyon sayfalarına link

Her hizmet sayfasına eklenecek:
- İlgili blog yazılarına link
- Fiyat rehberine link
- SSS sayfasına link

---

## Technical SEO Checklist

### Sayfa Bazlı Kontroller

- [ ] Title tag benzersiz ve 60 karakter altında
- [ ] Meta description benzersiz ve 160 karakter altında
- [ ] H1 tag benzersiz ve her sayfada tek
- [ ] Canonical URL doğru ayarlanmış
- [ ] Schema markup doğru ve hatasız
- [ ] Görsellerde alt text var
- [ ] Internal linkler çalışıyor
- [ ] Mobil uyumluluk geçerli

### Site Geneli Kontroller

- [ ] Robots.txt doğru yapılandırılmış
- [ ] Sitemap.xml güncel ve erişilebilir
- [ ] SSL sertifikası geçerli
- [ ] www/non-www yönlendirmesi aktif
- [ ] 404 sayfası özelleştirilmiş
- [ ] Core Web Vitals hedeflere uygun

---

## Test ve Doğrulama Araçları

### Google Araçları

1. **Google Search Console**
   - URL inceleme
   - Mobil kullanılabilirlik
   - Core Web Vitals raporu
   - Sitemap durumu

2. **PageSpeed Insights**
   - LCP, FID, CLS metrikleri
   - Performans skoru
   - İyileştirme önerileri

3. **Rich Results Test**
   - Schema markup doğrulaması
   - Zengin sonuç önizlemesi

4. **Mobile-Friendly Test**
   - Mobil uyumluluk kontrolü

### Diğer Araçlar

- **Screaming Frog:** Site audit
- **Ahrefs/Semrush:** Backlink ve teknik analiz
- **Schema Markup Validator:** Schema doğrulama

---

## Uygulama Önceliği

| Öncelik | İş | Etki | Çaba |
|---------|-----|------|------|
| 1 | Organization Schema | Yüksek | Düşük |
| 2 | Article Schema (Blog) | Yüksek | Orta |
| 3 | FAQPage Schema | Yüksek | Düşük |
| 4 | Service Schema | Orta | Orta |
| 5 | LocalBusiness Schema | Orta | Orta |
| 6 | Core Web Vitals | Yüksek | Yüksek |
| 7 | Image Optimization | Orta | Orta |

---

## Zaman Çizelgesi

| Hafta | Görev |
|-------|-------|
| 1. Hafta Gün 1-2 | Schema.org markup'ları uygula |
| 1. Hafta Gün 3-5 | Core Web Vitals optimizasyonu |
| 2. Hafta Gün 1-3 | Sayfa hızı optimizasyonu |
| 2. Hafta Gün 4-5 | Test, doğrulama ve monitoring |

---

## Monitoring ve Raporlama

### Haftalık Kontroller

- [ ] Search Console hata kontrolü
- [ ] Core Web Vitals değişimleri
- [ ] Sitemap durumu
- [ ] Crawl istatistikleri

### Aylık Kontroller

- [ ] Ranking değişimleri
- [ ] Organik trafik analizi
- [ ] Schema markup performansı
- [ ] Sayfa hızı trendi

---

**Sonraki Adım:** Bu faz tamamlandığında `07-PHASE-6-VIDEO-CONTENT.md` dosyasına geçin.
