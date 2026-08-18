# Faz 0: Mevcut İçerik Acil Güncellemesi

**Öncelik:** ACİL
**Tahmini Süre:** 1 iş günü
**Başlangıç:** Hemen

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE KULLANILIYOR ⚠️

- Tüm değişiklikler CANLI sistemi etkiler
- Değişiklik yapmadan önce içeriği not alın
- Her değişikliği tek tek yapın, toplu güncelleme yapmayın
- Hata durumunda geri alabilmek için orijinal metni saklayın
```

---

## Amaç

Mevcut 4 blog yazısındaki "2025" referanslarını "2026" olarak güncellemek ve içerikleri yeni yıla uygun hale getirmek.

---

## Güncellenecek Blog Yazıları

### 1. Kombi Bakımı Nasıl Yapılır - 2025 Detaylı Kış Bakım Rehberi

**Mevcut Başlık:**
```
Kombi Bakımı Nasıl Yapılır - 2025 Detaylı Kış Bakım Rehberi
```

**Yeni Başlık:**
```
Kombi Bakımı Nasıl Yapılır - 2026 Detaylı Kış Bakım Rehberi
```

**Güncelleme Kontrol Listesi:**
- [ ] Başlığı güncelle (title field)
- [ ] Meta title'ı güncelle (SEO bölümü)
- [ ] Meta description'ı güncelle (SEO bölümü)
- [ ] İçerikteki "2025" referanslarını "2026" yap
- [ ] Slug'ı kontrol et (değiştirme - redirect gerektirir)
- [ ] Fiyat bilgisi varsa güncelle
- [ ] Yayın tarihini güncelle (opsiyonel)

**Eklenecek Pazar Verileri:**
```
Türkiye'de 26.6 milyon hanenin %30.2'si ısınma sorunu yaşamaktadır (TÜİK 2024).
Doğalgaz kullanım oranı %81'dir. Düzenli kombi bakımı ile enerji verimliliği
%15-20 oranında artırılabilir.
```

---

### 2. Kalorifer Peteği Isıtmıyorsa - 5 Yaygın Sorun ve Çözümleri

**Mevcut Başlık:**
```
Kalorifer Peteği Isıtmıyorsa - 5 Yaygın Sorun ve Çözümleri
```

**Yeni Başlık:** (Değişiklik gerekmeyebilir - yıl referansı yoksa)
```
Kalorifer Peteği Isıtmıyorsa - 5 Yaygın Sorun ve Çözümleri (2026 Güncel)
```

**Güncelleme Kontrol Listesi:**
- [ ] İçerikteki tarih referanslarını kontrol et
- [ ] "Bu kış" gibi ifadeleri güncelle
- [ ] Meta bilgilerini 2026'ya güncelle
- [ ] İstatistik varsa güncelle

**Eklenecek Pazar Verileri:**
```
TÜİK verilerine göre Türkiye'deki konutların %31.3'ü nem ve sızıntı sorunu
yaşamaktadır. Kalorifer sistemlerinin düzenli bakımı bu sorunların önlenmesinde
kritik rol oynar.
```

---

### 3. Kış Aylarında Elektrik Tesisatı Güvenliği - 2025 Güvenlik Rehberi

**Mevcut Başlık:**
```
Kış Aylarında Elektrik Tesisatı Güvenliği - 2025 Güvenlik Rehberi
```

**Yeni Başlık:**
```
Kış Aylarında Elektrik Tesisatı Güvenliği - 2026 Güvenlik Rehberi
```

**Güncelleme Kontrol Listesi:**
- [ ] Başlığı güncelle
- [ ] Meta title ve description güncelle
- [ ] İçerikteki "2025" → "2026"
- [ ] Güncel güvenlik standartlarını kontrol et
- [ ] İstatistikleri güncelle

**Eklenecek Veri:**
```
Türkiye'de hanelerin %96.4'ü internet erişimine, %99.6'sı akıllı telefona sahiptir.
Artan elektronik cihaz kullanımı elektrik tesisatı güvenliğini daha da önemli
kılmaktadır.
```

---

### 4. Kış Aylarında Enerji Tasarrufu - 2025 Kapsamlı Tasarruf Rehberi

**Mevcut Başlık:**
```
Kış Aylarında Enerji Tasarrufu - 2025 Kapsamlı Tasarruf Rehberi
```

**Yeni Başlık:**
```
Kış Aylarında Enerji Tasarrufu - 2026 Kapsamlı Tasarruf Rehberi
```

**Güncelleme Kontrol Listesi:**
- [ ] Başlığı güncelle
- [ ] Meta bilgileri güncelle
- [ ] Tüm "2025" referanslarını "2026" yap
- [ ] Enerji fiyatları referanslarını güncelle
- [ ] Yeni teknoloji önerilerini ekle

**Eklenecek Pazar Verileri:**
```
2026 Isı Pompası Pazarı: Türkiye'de ısı pompası pazarı $740 milyon değerinde
olup, %5.68 yıllık büyüme ile 2030'da $975 milyona ulaşması beklenmektedir.
Isı pompaları geleneksel sistemlere göre %40-60 enerji tasarrufu sağlayabilir.
```

---

## Adım Adım Uygulama

### Adım 1: Payload Admin Panel'e Giriş

```
1. Tarayıcıda http://localhost:3000/admin adresine git
2. Admin kimlik bilgileriyle giriş yap
3. Sol menüden "Posts" (Blog Yazıları) seçeneğine tıkla
```

### Adım 2: İlk Blog Yazısını Güncelle

```
1. "Kombi Bakımı Nasıl Yapılır - 2025..." yazısına tıkla
2. Düzenleme moduna gir

3. BAŞLIK GÜNCELLEME:
   - "Title" alanında "2025" → "2026" değiştir

4. İÇERİK GÜNCELLEME:
   - Rich text editöründe Ctrl+F ile "2025" ara
   - Her birini "2026" olarak değiştir
   - Pazar verilerini ekle (yukarıdaki öneriler)

5. SEO GÜNCELLEME:
   - Aşağı kaydır, "SEO" bölümünü aç
   - "Meta Title" alanında "2025" → "2026"
   - "Meta Description" alanında "2025" → "2026"

6. KAYDET:
   - Sağ üstten "Save" butonuna tıkla
   - Değişikliklerin kaydedildiğini doğrula
```

### Adım 3: Doğrulama

```
1. Yazının canlı sayfasını aç (View butonuyla)
2. Başlığın doğru göründüğünü kontrol et
3. İçerikteki tarih referanslarını kontrol et
4. Meta bilgilerini tarayıcı geliştirici araçlarıyla kontrol et
   - Sağ tık > Sayfa Kaynağını Görüntüle
   - <title> ve <meta name="description"> taglarını bul
```

### Adım 4: Diğer Yazıları Güncelle

```
- Adım 2-3'ü her blog yazısı için tekrarla
- Her yazı için yukarıdaki kontrol listelerini kullan
```

---

## Güncellenmiş SEO Meta Bilgileri

### Blog 1: Kombi Bakımı

```
Meta Title: Kombi Bakımı Nasıl Yapılır? 2026 Detaylı Kış Bakım Rehberi | Hızır Teknik
Meta Description: 2026 kış sezonu için kombi bakımı rehberi. Adım adım bakım talimatları,
profesyonel ipuçları ve enerji tasarrufu önerileri. Ankara kombi bakım hizmeti.
```

### Blog 2: Kalorifer Peteği

```
Meta Title: Kalorifer Peteği Isıtmıyor mu? 5 Yaygın Sorun ve Çözümleri (2026)
Meta Description: Kalorifer peteğiniz ısıtmıyorsa bu 5 sorunu kontrol edin. Hava alma,
tıkanıklık, vana arızası çözümleri. Profesyonel petek bakım hizmeti Ankara.
```

### Blog 3: Elektrik Güvenliği

```
Meta Title: Kış Aylarında Elektrik Tesisatı Güvenliği - 2026 Rehberi | Hızır Teknik
Meta Description: 2026 kış sezonu için elektrik tesisatı güvenlik rehberi. Sigorta kontrolü,
topraklama, aşırı yüklenme önleme. Ankara elektrik tesisatı hizmeti.
```

### Blog 4: Enerji Tasarrufu

```
Meta Title: Kış Aylarında Enerji Tasarrufu - 2026 Kapsamlı Rehber | Hızır Teknik
Meta Description: 2026 kış sezonu enerji tasarrufu rehberi. Isı pompası, yalıtım, akıllı
termostat önerileri. %40'a varan tasarruf için ipuçları. Ankara teknik servis.
```

---

## Kalite Kontrol Checklist

### Her Yazı İçin

- [ ] Başlık 2026 içeriyor
- [ ] Meta title 2026 içeriyor
- [ ] Meta description 2026 içeriyor
- [ ] İçerikte eski tarih referansı kalmadı
- [ ] Fiyat bilgileri güncel
- [ ] Pazar verileri eklendi
- [ ] Görsel başlıkları/alt textleri kontrol edildi
- [ ] Internal linkler çalışıyor
- [ ] Sayfa hatasız yükleniyor

### Genel Kontrol

- [ ] Tüm 4 yazı güncellendi
- [ ] Blog listesi sayfası doğru görünüyor
- [ ] Sitemap güncellendi (otomatik olmalı)
- [ ] Google Search Console'da hata yok

---

## Zaman Çizelgesi

| Saat | Görev |
|------|-------|
| 09:00 - 09:30 | Blog 1 güncellemesi |
| 09:30 - 10:00 | Blog 2 güncellemesi |
| 10:00 - 10:30 | Blog 3 güncellemesi |
| 10:30 - 11:00 | Blog 4 güncellemesi |
| 11:00 - 11:30 | Kalite kontrol ve test |
| 11:30 - 12:00 | Dokümantasyon ve rapor |

**Toplam Süre:** ~3 saat

---

## Olası Sorunlar ve Çözümler

### Sorun 1: Slug Değişikliği Gerekirse

```
YAPMA: Slug'ı değiştirme - SEO kaybına neden olur

DOĞRU YAKLAŞIM:
- Mevcut slug'ı koru
- Sadece başlık ve içeriği güncelle
- Slug değişikliği gerekliyse, eski URL'den yeni URL'ye 301 redirect ayarla
```

### Sorun 2: Kaydetme Hatası

```
1. Tarayıcı konsolunda hatayı kontrol et
2. Tüm zorunlu alanların dolu olduğunu doğrula
3. Görsel boyutlarını kontrol et
4. Sayfayı yenile ve tekrar dene
```

### Sorun 3: Değişiklikler Görünmüyor

```
1. Tarayıcı önbelleğini temizle (Ctrl+Shift+R)
2. Next.js cache'i temizle (gerekirse)
3. CDN cache'i kontrol et (varsa)
```

---

## Tamamlanma Raporu Şablonu

```markdown
## Faz 0 Tamamlanma Raporu

**Tarih:** [GG.AA.YYYY]
**Uygulayan:** [İsim]

### Güncellenen Yazılar

1. [x] Kombi Bakımı - 2026 güncellendi
2. [x] Kalorifer Peteği - 2026 güncellendi
3. [x] Elektrik Güvenliği - 2026 güncellendi
4. [x] Enerji Tasarrufu - 2026 güncellendi

### Eklenen Pazar Verileri

- TÜİK 2024 hane istatistikleri
- Isı pompası pazar verileri
- Enerji verimliliği istatistikleri

### Kalite Kontrol

- [x] Tüm linkler çalışıyor
- [x] Meta bilgileri doğru
- [x] Sayfalar hatasız yükleniyor

### Notlar

[Varsa özel durumlar veya sorunlar]
```

---

**Sonraki Adım:** Bu faz tamamlandığında `02-PHASE-1-BLOG-CONTENT.md` dosyasına geçin.
