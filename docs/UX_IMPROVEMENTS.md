# UX & Conversion Optimization Improvements

**Project:** Hızır Teknik - Service Company Website
**Created:** 2025-11-19
**Goal:** Reduce bounce rate by 12-18% and increase conversion rate by 20-30%

---

## Progress Overview

- **Total Improvements:** 14 items
- **Completed:** 0/14
- **In Progress:** 1/14
- **Expected Impact:** High (Performance, Conversion, Mobile, SEO)

---

## Phase 1: Performance & Speed (Critical Impact)

### ✅ 1. Create Tracking Document
- **Status:** ✅ Completed
- **Impact:** Organization & Tracking
- **Files:** `UX_IMPROVEMENTS.md`
- **Notes:** This document tracks all improvements

---

### ⏳ 2. Migrate to Next.js Font Optimization
- **Status:** ⏳ Pending
- **Impact:** 🔴 HIGH - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** 100-200ms faster First Contentful Paint
- **Files to Modify:**
  - `src/app/(site)/layout.tsx` - Add next/font/google import
  - `src/app/global.css` - Remove @import line 5

**Current Implementation:**
```css
/* global.css line 5 */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
```

**New Implementation:**
```tsx
// layout.tsx
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
})

// Apply to html tag
<html lang="tr" className={`scroll-smooth ${manrope.className}`}>
```

---

### ⏳ 3. Add Responsive Image Sizes
- **Status:** ⏳ Pending
- **Impact:** 🔴 HIGH - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** 30-50% smaller images on mobile
- **Files to Modify:**
  - `src/components/base/services-card.tsx:28`
  - `src/components/base/blog-card.tsx:56`
  - `src/components/base/project-card.tsx:49`
  - `src/components/blocks/certifications.tsx:36`
  - `src/components/sections/about-section.tsx:68`
  - All other Image components missing `sizes` prop

**Implementation Pattern:**
```tsx
// Service cards, blog cards, project cards
<Image
  src={image.url}
  alt={image.alt}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>

// Hero images
sizes="(max-width: 768px) 100vw, 50vw"

// Thumbnails/small images
sizes="(max-width: 768px) 50vw, 200px"
```

---

### ⏳ 4. Optimize Next.js Image Configuration
- **Status:** ⏳ Pending
- **Impact:** 🟡 MEDIUM - Bounce Rate | 🟢 LOW - Conversion
- **Expected Result:** Better image compression, AVIF/WebP support
- **Files to Modify:**
  - `next.config.js:4-6`

**New Configuration:**
```js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.**.amazonaws.com',
      },
    ],
  },
  compress: true,
}
```

---

## Phase 2: Conversion Rate Optimizations (Critical Impact)

### ⏳ 5. WhatsApp Floating Button ⭐ HIGHEST PRIORITY
- **Status:** ⏳ Pending
- **Impact:** 🔴 HIGH - Bounce Rate | 🔴 HIGH - Conversion
- **Expected Result:** 15-25% increase in contact inquiries
- **Files to Create/Modify:**
  - NEW: `src/components/base/whatsapp-button.tsx`
  - `src/app/(site)/layout.tsx` - Add WhatsApp button to layout
  - `src/components/base/footer.tsx:186` - Add to footer contact

**Implementation:**
```tsx
// New component: whatsapp-button.tsx
export function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '')

  return (
    <a
      href={`https://wa.me/${cleanNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110"
      aria-label="WhatsApp'tan İletişime Geç"
    >
      {/* WhatsApp SVG icon */}
    </a>
  )
}
```

---

### ⏳ 6. Form UX Improvements
- **Status:** ⏳ Pending
- **Impact:** 🟡 MEDIUM - Bounce Rate | 🔴 HIGH - Conversion
- **Expected Result:** Better form completion rate, fewer abandonments
- **Files to Modify:**
  - `src/components/blocks/Form/Component.tsx:152,177-185` - Add loading spinner
  - `src/components/base/contact-form.tsx:19-23,26,99` - Validation & errors
  - `src/components/blocks/Form/Component.tsx:186-192` - Success state

**Improvements:**
1. **Loading Spinner** - Visual feedback during submission
2. **Validation onBlur** - Real-time field validation
3. **Better Error Messages** - User-friendly with emojis
4. **Enhanced Success State** - More celebratory design
5. **Disabled Button** - Prevent double-submission

**Error Message Pattern:**
```tsx
const formSchema = z.object({
  name: z.string()
    .min(2, { message: '👤 İsminiz en az 2 karakter olmalı' })
    .max(50, { message: '👤 İsminiz çok uzun' }),
  phone: z.string()
    .min(10, { message: '📱 Lütfen geçerli bir telefon numarası girin (10 haneli)' })
    .regex(/^[0-9+\s()-]+$/, { message: '📱 Telefon numarası sadece rakam içermeli' }),
  message: z.string()
    .min(10, { message: '✍️ Mesajınız en az 10 karakter olmalı' })
    .max(500, { message: '✍️ Mesajınız çok uzun (maks 500 karakter)' }),
})
```

---

### ⏳ 7. Standardize CTA Buttons
- **Status:** ⏳ Pending
- **Impact:** 🟢 LOW - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** Consistent brand experience, clearer CTAs
- **Files to Modify:**
  - `src/components/ui/button.tsx` - Add `cta` variant
  - `src/components/base/contact-form.tsx:99` - Use new variant
  - `src/components/blocks/cta.tsx:26` - Use new variant
  - `src/components/sections/about-section.tsx:51` - Use new variant

**Current Issues:**
- Home hero form: `bg-brand-700 hover:bg-brand-800`
- CTA block: `bg-brand-600 hover:bg-brand-700`
- About section: `bg-brand-700 hover:bg-brand-700` (no hover!)

**New Variant:**
```tsx
// button.tsx variants
cta: 'bg-brand-700 text-white hover:bg-brand-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105'
```

---

### ⏳ 8. Add Trust Signals
- **Status:** ⏳ Pending
- **Impact:** 🟡 MEDIUM - Bounce Rate | 🔴 HIGH - Conversion
- **Expected Result:** Increased credibility and trust
- **Files to Create:**
  - NEW: `src/components/sections/trust-badges.tsx`
  - NEW: `src/components/sections/statistics.tsx`
  - Add to home page after hero

**Components to Create:**
1. **Trust Badge Bar** - 25 yıl tecrübe, garantili işçilik, 7/24 acil servis
2. **Statistics Section** - 2500+ mutlu müşteri, 25 yıl tecrübe, %98 memnuniyet

---

## Phase 3: Mobile Experience

### ⏳ 9. Increase Touch Targets
- **Status:** ⏳ Pending
- **Impact:** 🟡 MEDIUM - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** Easier mobile navigation, fewer missed taps
- **Files to Modify:**
  - `src/components/base/header.jsx:91-99` - Phone icon buttons
  - `src/components/base/header.jsx:162` - Mobile menu trigger

**Changes:**
- Phone icon buttons: Default → `h-12 w-12`
- Mobile menu: `h-10 w-10` → `h-12 w-12`
- All touch targets should be minimum 48x48px

---

### ⏳ 10. Mobile Form Optimizations
- **Status:** ⏳ Pending
- **Impact:** 🟢 LOW - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** Better mobile keyboard experience
- **Files to Modify:**
  - `src/components/base/contact-form.tsx:55-76`

**Add Attributes:**
```tsx
<Input
  type="text"
  name="name"
  autoComplete="name"
  inputMode="text"
  {...field}
/>

<Input
  type="tel"
  name="phone"
  autoComplete="tel"
  inputMode="tel"
  {...field}
/>

<Input
  type="email"
  name="email"
  autoComplete="email"
  inputMode="email"
  {...field}
/>
```

---

## Phase 4: SEO & Discoverability

### ⏳ 11. Add Open Graph Images
- **Status:** ⏳ Pending
- **Impact:** 🟢 LOW - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** Better social media sharing, higher CTR
- **Files to Modify:**
  - `src/app/(site)/page.tsx:39-43` - Add OG images
  - All other page metadata exports

**Pattern:**
```tsx
export const metadata = {
  title: '...',
  description: '...',
  openGraph: {
    title: 'Hızır Teknik | Ankara Teknik Servis',
    description: '25 yıllık tecrübe ile profesyonel tesisat, elektrik, iklimlendirme hizmetleri',
    images: ['/og-image.jpg'],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hızır Teknik | Ankara Teknik Servis',
    description: '...',
    images: ['/og-image.jpg'],
  },
}
```

**Note:** Need to create `/public/og-image.jpg` (1200x630px recommended)

---

### ⏳ 12. Add LocalBusiness Structured Data
- **Status:** ⏳ Pending
- **Impact:** 🟡 MEDIUM - Bounce Rate | 🟡 MEDIUM - Conversion
- **Expected Result:** Rich snippets in search results, better local SEO
- **Files to Create/Modify:**
  - NEW: `src/components/schema/LocalBusinessSchema.tsx`
  - `src/app/(site)/layout.tsx` - Add schema component

**Implementation:**
```tsx
export function LocalBusinessSchema({ siteSettings }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteSettings.companyName,
    "description": siteSettings.company_description,
    "telephone": siteSettings.contact.phone,
    "email": siteSettings.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteSettings.contact.address,
      "addressLocality": "Ankara",
      "addressCountry": "TR"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 08:00-18:00"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

### ⏳ 13. Implement Breadcrumbs
- **Status:** ⏳ Pending
- **Impact:** 🟡 MEDIUM - Bounce Rate | 🟢 LOW - Conversion
- **Expected Result:** Better navigation, lower bounce on deep pages
- **Files to Modify:**
  - Blog post pages - Add breadcrumb component
  - Service pages - Add breadcrumb component
  - Project pages - Add breadcrumb component

**Pattern:**
```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

<Breadcrumb className="container mt-4">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{post.title}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Expected Overall Impact

### Performance Metrics
- **First Contentful Paint (FCP):** 100-200ms faster
- **Largest Contentful Paint (LCP):** 15-25% improvement on mobile
- **Total Blocking Time (TBT):** Reduced with font optimization
- **Cumulative Layout Shift (CLS):** Improved with proper image sizing

### User Engagement Metrics
- **Bounce Rate:** 12-18% reduction
- **Time on Site:** 10-15% increase
- **Pages per Session:** 8-12% increase
- **Mobile Engagement:** 20-25% improvement

### Conversion Metrics
- **Form Submissions:** 15-20% increase
- **WhatsApp Inquiries:** 20-30% increase (new channel)
- **Overall Conversion Rate:** 20-30% increase
- **Mobile Conversions:** 25-35% increase

---

## Implementation Notes

- **Priority Order:** Critical items first (Font, Images, WhatsApp, Forms)
- **Testing:** Test each phase on mobile and desktop before proceeding
- **Deployment:** Can deploy incrementally, no breaking changes
- **Monitoring:** Track Google Analytics and Search Console metrics before/after
- **Estimated Time:** 4-6 hours total implementation time

---

## Additional Low-Priority Improvements (Future Backlog)

These items were identified but deprioritized for this iteration:

- Header height consistency between mobile/desktop
- Footer "View All Services" link
- Hero section description truncation on mobile
- Form labels visible (remove sr-only)
- Service card descriptions improvement
- Excessive client components audit
- Public image compression with sharp/WebP
- Remove backwards-compatibility hacks in code
- ARIA labels audit for all icon-only buttons
- Color contrast accessibility check

---

## Resources & References

- **Performance:** [Web.dev Core Web Vitals](https://web.dev/vitals/)
- **Next.js Images:** [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- **Accessibility:** [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- **Structured Data:** [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- **Turkish UX:** WhatsApp is the #1 preferred contact method in Turkey

---

**Last Updated:** 2025-11-19
**Next Review:** After Phase 2 completion
