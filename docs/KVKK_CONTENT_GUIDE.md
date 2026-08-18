# KVKK Content Implementation Guide

## What Has Been Created

I've created a comprehensive **KVKK Aydınlatma Metni** (KVKK Information Text) based on your existing privacy policy and terms of use from hizirteknik.com.

The document is saved in: `KVKK_AYDINLATMA_METNI.md`

---

## Content Overview

The KVKK document includes **15 comprehensive sections**:

### Core Sections:
1. **Veri Sorumlusunun Kimliği** - Data controller identification
2. **Kişisel Verilerin İşlenme Amacı** - Processing purposes
3. **İşlenen Kişisel Verilerin Kategorileri** - Data categories
4. **Toplama Yöntemi ve Hukuki Sebep** - Collection methods and legal basis
5. **Veri Aktarımları** - Data sharing and transfers
6. **Saklama Süresi** - Retention periods with detailed table
7. **Veri Sahibi Hakları** - Data subject rights (7 key rights)
8. **Hakları Kullanma Yöntemi** - How to exercise rights
9. **Veri Güvenliği** - Security measures
10. **Çerez Politikası** - Cookie policy
11. **Üçüncü Taraf Hizmetler** - Third-party services disclosure
12. **Çocukların Gizliliği** - Children's privacy
13. **Güncelleme Bildirimi** - Update notifications
14. **İletişim Bilgileri** - Contact information
15. **KVKK Hakkında Bilgi** - About KVKK law

---

## What's Included Based on Your Website

The content has been tailored specifically for Hızır Teknik with:

✅ **Your actual services:** Heating/cooling, repair, renovation, maintenance
✅ **Your contact information:** Phone (0532 775 12 50), Email (bilgi@hizirteknik.com), Address (Eryaman)
✅ **Your data collection points:** Website forms, phone, WhatsApp, email
✅ **Your warranty terms:** 2-year workmanship guarantee
✅ **Your third-party services:** Vercel Analytics, AWS S3, Resend
✅ **Your business model:** Site inspection, quotations, appointments
✅ **Legal compliance:** Turkish KVKK Law (6698), retention periods, customer rights

---

## How to Add This to Your Website

### Step 1: Create the KVKK Page in Payload Admin

1. Go to **Payload Admin**: `http://localhost:3000/admin`
2. Navigate to **Content → Pages**
3. Click **"Create New"**
4. Fill in the form:
   - **Title:** `KVKK Aydınlatma Metni`
   - **Slug:** `kvkk` (should auto-generate)
   - **Status:** Published

### Step 2: Add Content Blocks

5. In the **Blocks** section, add:

   **Block 1: Page Hero Block**
   - **Heading:** `KVKK Aydınlatma Metni`
   - **Description:** `Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme`

   **Block 2-16: Rich Text Blocks** (one for each section)
   - Copy each section from `KVKK_AYDINLATMA_METNI.md`
   - Paste into separate Rich Text blocks
   - This makes the content easier to manage and update

6. **Save** the page

### Step 3: Link in Site Settings

7. Go to **Settings → Site Settings**
8. Navigate to **Legal** tab
9. In **"Legal Pages"** field:
   - Select the KVKK page you just created
   - Also select Privacy Policy and Terms of Use (if not already)
10. **Save Changes**

### Step 4: Verify

11. Visit: `http://localhost:3000/kvkk`
12. Confirm the page displays correctly
13. Check the footer - KVKK link should appear

---

## Alternative: Single Rich Text Block

If you prefer a simpler approach:

1. Create the page with **one large Rich Text block**
2. Copy the **entire content** from `KVKK_AYDINLATMA_METNI.md`
3. Paste into the Rich Text block
4. Format headings using the editor:
   - Main sections: Heading 2 (##)
   - Subsections: Heading 3 (###)
   - Tables and lists: Use editor tools

---

## Formatting Tips for Payload Rich Text Editor

### Headings
- Use **Heading 2** for main sections (1., 2., 3., etc.)
- Use **Heading 3** for subsections

### Tables
The retention period table can be formatted as:
- A **list** with bold labels
- Or use the **table feature** if available in your editor

### Lists
- Use **bullet points** for unordered lists
- Use **numbered lists** for sequential items

### Emphasis
- **Bold** for important terms
- *Italic* for notes and clarifications
- Use **blockquotes** for important notices

---

## Customization Needed

Before publishing, you may want to customize:

### 1. Business Details
- ✅ Already included: Company name, address, phone, email
- ⚠️ **Check:** If you have a KEP (Kayıtlı Elektronik Posta) address, add it in Section 8

### 2. Data Retention Periods
- ✅ Standard legal periods included (10 years for financial, 2 years for warranty)
- ⚠️ **Review:** Section 6 table - adjust if your internal policies differ

### 3. Third-Party Services
- ✅ Included: Vercel Analytics, AWS S3, Resend
- ⚠️ **Add:** Any other services you use (payment processors, CRM systems, etc.)

### 4. Cookie Categories
- ✅ Basic categories included
- ⚠️ **Update:** Section 10 if you add marketing/advertising cookies in the future

### 5. Contact Hours
- ✅ Monday-Saturday 08:00-18:00, Sunday closed
- ⚠️ **Verify:** These hours match your actual availability

---

## Legal Compliance Checklist

After adding the KVKK page, ensure:

- [ ] Page is published and accessible at `/kvkk`
- [ ] Link appears in website footer
- [ ] Contact form has KVKK consent checkbox (✅ already implemented)
- [ ] Cookie consent banner is active (✅ already implemented)
- [ ] Payload forms can use KVKK checkbox field (✅ already implemented)
- [ ] Content is reviewed by legal advisor (recommended)
- [ ] Last updated date is current (19 Ocak 2025)

---

## Maintenance & Updates

### When to Update This Document

Update the KVKK page when:
- Your contact information changes
- You start using new third-party services
- Data retention policies change
- You add new data collection points
- Legal requirements change
- You receive feedback from KVKK authority

### How to Update

1. Go to Payload Admin → Pages → KVKK page
2. Click **Edit**
3. Update relevant section(s)
4. **Change the "Last Updated" date** at the top
5. **Save** and publish

### Annual Review

- Schedule an **annual review** of this document
- Check for compliance with latest KVKK regulations
- Update based on business practice changes

---

## Professional Review Recommended

⚠️ **Important Notice:**

While this KVKK document is comprehensive and based on current Turkish law (KVKK Law 6698), it's recommended to:

1. **Have it reviewed by a lawyer** specializing in data protection
2. **Consult with a KVKK expert** to ensure full compliance
3. **Customize** based on any specific data processing activities unique to your business
4. **Keep updated** with KVKK Kurulu decisions and guidance

---

## Quick Reference: Key Information

**Document Type:** KVKK Aydınlatma Metni (Information Text)
**Legal Basis:** KVKK Law 6698, Article 10
**Purpose:** Inform data subjects about personal data processing
**Audience:** Website visitors, customers, potential customers
**Language:** Turkish (legally required)
**Format:** Web page accessible via `/kvkk` URL
**Update Frequency:** As needed, minimum annual review
**Mandatory:** Yes, for KVKK compliance

---

## Support & Resources

### If You Need Help:

1. **Legal Questions:** Consult with a KVKK lawyer
2. **Technical Implementation:** Use the `KVKK_IMPLEMENTATION_GUIDE.md`
3. **KVKK Authority:** Visit www.kvkk.gov.tr
4. **Payload CMS:** Check Payload documentation for rich text editing

### Useful Links:

- KVKK Official Website: https://www.kvkk.gov.tr
- KVKK Law 6698 (Full Text): https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698.pdf
- KVKK Guidance Documents: https://www.kvkk.gov.tr/yayinlar/rehberler

---

**Ready to implement?** Follow the steps above to add the KVKK content to your Payload CMS and make your website fully KVKK compliant! 🎉
