# Faz 2: SSS/FAQ Sayfaları Uygulaması

**Öncelik:** YÜKSEK
**Tahmini Süre:** 2 hafta
**Başlangıç:** Faz 0 tamamlandıktan sonra

---

## KRITIK UYARI

```
⚠️  PRODUCTION DATABASE KULLANILIYOR ⚠️

- Tüm değişiklikler CANLI sistemi etkiler
- Sayfa oluşturmadan önce mevcut yapıyı inceleyin
- Her sayfayı ayrı ayrı oluşturun, toplu işlem yapmayın
- Block yapısını bozmayın, mevcut şemayı takip edin
```

---

## Amaç

4 ana hizmet kategorisi için kapsamlı SSS (Sıkça Sorulan Sorular) sayfaları oluşturmak. Her sayfa SEO optimize edilmiş, Schema.org FAQPage markup'ı ile zenginleştirilmiş olacak.

---

## Mevcut Sistem Analizi

### PageFAQBlock Yapısı

Payload CMS'de mevcut `PageFAQBlock` block tipi kullanılacak:

```
Konum: src/collections/blocks/PageFAQBlock.ts
```

Block alanları:
- `title`: FAQ bölüm başlığı
- `faqs`: Array of FAQ items
  - `question`: Soru metni
  - `answer`: Cevap metni (rich text)

### Pages Koleksiyonu

SSS sayfaları `Pages` koleksiyonunda oluşturulacak:

```
Koleksiyon: Pages
URL Yapısı: /sss/[kategori-slug]
```

---

## Oluşturulacak SSS Sayfaları

| Sayfa | URL | Soru Sayısı | Öncelik |
|-------|-----|-------------|---------|
| İklimlendirme ve Isıtma | /sss/iklimlendirme-isitma | 8 | 1 |
| Elektrik Tesisatı | /sss/elektrik-tesisati | 8 | 2 |
| Su ve Tesisat | /sss/su-tesisat | 8 | 3 |
| Havuz Sistemleri | /sss/havuz-sistemleri | 8 | 4 |

---

## Sayfa 1: İklimlendirme ve Isıtma SSS

### Meta Bilgileri

```yaml
Başlık: İklimlendirme ve Isıtma Sıkça Sorulan Sorular | Hızır Teknik
Slug: sss/iklimlendirme-isitma
Meta Title: Kombi, Klima ve Isıtma SSS - 2026 Güncel Cevaplar | Hızır Teknik
Meta Description: Kombi bakımı, klima servisi, ısı pompası ve merkezi ısıtma hakkında en çok sorulan sorular. Ankara'da profesyonel iklimlendirme hizmeti için Hızır Teknik.
```

### SSS İçeriği

#### Soru 1: Kombi bakımı ne sıklıkla yapılmalıdır?

```markdown
**Kısa Cevap:** Yılda en az 1 kez, tercihen kış sezonu öncesinde (Eylül-Ekim).

**Detaylı Açıklama:**
Düzenli kombi bakımı hem güvenlik hem de verimlilik açısından kritiktir:

- **Güvenlik:** Gaz kaçağı ve karbon monoksit riskini önler
- **Verimlilik:** Düzenli bakım ile %15-20 enerji tasarrufu sağlanır
- **Garanti:** Çoğu üretici yıllık bakımı garanti şartı olarak belirler
- **Ömür:** Bakımsız kombiler 8-10 yıl, bakımlı kombiler 15-20 yıl dayanır

**Türkiye'de Durum:** TÜİK 2024 verilerine göre 26.6 milyon hanenin %81'i doğalgaz kullanmaktadır. Bu hanelerin büyük çoğunluğu kombi ile ısınmaktadır.

**Hızır Teknik Önerisi:** Kış sezonu yoğunluğundan kaçınmak için Eylül ayında randevu alın.
```

#### Soru 2: Klima ne zaman bakıma alınmalıdır?

```markdown
**Kısa Cevap:** Yılda 2 kez - yaz sezonu öncesi (Nisan-Mayıs) ve kış sezonu öncesi (Ekim-Kasım).

**Detaylı Açıklama:**
Klimanın hem soğutma hem de ısıtma fonksiyonu için bakım gereklidir:

**Sezon Öncesi Kontroller:**
- Filtre temizliği/değişimi
- Gaz basıncı kontrolü
- Drenaj hattı temizliği
- Elektrik bağlantıları kontrolü
- İç ve dış ünite temizliği

**Dikkat Edilmesi Gerekenler:**
- Bakımsız klima %30'a kadar daha fazla enerji tüketir
- Kirli filtreler sağlık sorunlarına yol açabilir
- Düşük gaz basıncı kompresör arızasına neden olur

**2026 Pazar Verisi:** Türkiye HVAC pazarı $2.52 milyar değerinde olup, %5.87 yıllık büyüme göstermektedir.
```

#### Soru 3: Isı pompası mı yoksa kombi mi tercih edilmeli?

```markdown
**Kısa Cevap:** Yeni binalarda ve yalıtımlı evlerde ısı pompası, mevcut doğalgaz altyapısı olanlarda kombi daha ekonomik olabilir.

**Karşılaştırma Tablosu:**

| Özellik | Isı Pompası | Kombi |
|---------|-------------|-------|
| Kurulum Maliyeti | Yüksek | Orta |
| İşletme Maliyeti | Düşük (%40-60 tasarruf) | Orta |
| Çevre Dostu | Evet | Hayır |
| Soğutma | Var | Yok |
| Ömür | 15-20 yıl | 12-15 yıl |
| Bakım Sıklığı | Yılda 1 | Yılda 1 |

**2026 Türkiye Pazarı:** Isı pompası pazarı $740 milyon değerinde olup, 2030'da $975 milyona ulaşması beklenmektedir (%5.68 yıllık büyüme).

**Hızır Teknik Önerisi:** Ücretsiz keşif ile evinize en uygun çözümü belirleyelim.
```

#### Soru 4: Kombim su ısıtmıyor, sorun ne olabilir?

```markdown
**Kısa Cevap:** En yaygın nedenler: 3 yollu vana arızası, genleşme tankı problemi veya NTC sensör hatası.

**Olası Nedenler ve Çözümler:**

1. **3 Yollu Vana Arızası**
   - Belirti: Kalorifer çalışıyor ama sıcak su gelmiyor
   - Çözüm: Vana değişimi gerekebilir

2. **Genleşme Tankı Problemi**
   - Belirti: Su basıncı sürekli düşüyor
   - Çözüm: Tank basıncı ayarı veya değişimi

3. **NTC Sensör Hatası**
   - Belirti: Yanlış sıcaklık ölçümü
   - Çözüm: Sensör değişimi

4. **Eşanjör Kireç Birikimi**
   - Belirti: Su geç ısınıyor veya hiç ısınmıyor
   - Çözüm: Kimyasal temizlik

**Acil Müdahale:** 0312 XXX XX XX numarasından 7/24 destek alabilirsiniz.
```

#### Soru 5: Merkezi ısıtma sisteminde enerji tasarrufu nasıl sağlanır?

```markdown
**Kısa Cevap:** Termostatik vana kullanımı, yalıtım ve düzenli bakım ile %30'a kadar tasarruf mümkündür.

**Enerji Tasarrufu Yöntemleri:**

1. **Termostatik Radyatör Vanası:** Her odayı ayrı kontrol edin (%10-15 tasarruf)
2. **Akıllı Termostat:** Programlanabilir ısıtma saatleri (%15-20 tasarruf)
3. **Yalıtım:** Dış duvar ve çatı yalıtımı (%25-40 tasarruf)
4. **Petek Arkası Yansıtıcı:** Isı kaybını azaltır (%5-10 tasarruf)
5. **Düzenli Bakım:** Verimlilik kaybını önler (%10-15 tasarruf)

**İstatistik:** Türkiye'de hanelerin %30.2'si ısınma sorunu yaşamaktadır (TÜİK 2024). Doğru önlemlerle bu sorunların çoğu çözülebilir.
```

#### Soru 6: Klima gaz dolumu ne zaman gereklidir?

```markdown
**Kısa Cevap:** Normal şartlarda gaz dolumu gerekmez. Gaz azalması varsa kaçak var demektir.

**Önemli Bilgiler:**

- Klima kapalı bir sistemdir, gaz kendiliğinden azalmaz
- Gaz azalması = Sistemde kaçak var demektir
- Önce kaçak tespit edilip onarılmalı, sonra gaz doldurulmalıdır
- Kaçak tamir edilmeden gaz dolumu para ve zaman kaybıdır

**Gaz Eksikliği Belirtileri:**
- Soğutma/ısıtma performansı düşük
- Dış ünitede buz oluşumu
- Anormal ses
- Kompresör sık sık duruyor

**Fiyatlandırma:** Gaz dolumu + kaçak tespiti hizmet bedeli için teklif alın.
```

#### Soru 7: Yerden ısıtma sistemi avantajları nelerdir?

```markdown
**Kısa Cevap:** Homojen ısı dağılımı, enerji verimliliği ve estetik görünüm başlıca avantajlarıdır.

**Yerden Isıtma Avantajları:**

1. **Konfor:** Ayak seviyesinden başlayan homojen ısı
2. **Verimlilik:** Düşük su sıcaklığı (35-45°C vs 70-80°C)
3. **Estetik:** Görünür radyatör yok
4. **Hijyen:** Toz sirkülasyonu az
5. **Uyumluluk:** Isı pompası ile mükemmel uyum

**Dezavantajlar:**
- Kurulum maliyeti yüksek
- Mevcut binalarda uygulama zor
- Arıza durumunda müdahale güç

**Ideal Kullanım:** Yeni inşaatlar, villa projeler, ısı pompası sistemleri
```

#### Soru 8: Kazan dairesi bakımı nasıl yapılır?

```markdown
**Kısa Cevap:** Yılda 1 kez profesyonel bakım + aylık görsel kontroller yapılmalıdır.

**Profesyonel Bakım Kapsamı:**

1. **Kazan Kontrolü:**
   - Yanma verimi ölçümü
   - Baca gazı analizi
   - Elektrot ve brülör temizliği

2. **Pompa ve Vana Kontrolü:**
   - Sirkülasyon pompası testi
   - Emniyet vanaları kontrolü
   - Kaçak kontrolü

3. **Genleşme Tankı:**
   - Basınç kontrolü
   - Membran durumu

4. **Elektrik Sistemi:**
   - Kablo ve bağlantı kontrolü
   - Sensör kalibrasyonu

**Yasal Zorunluluk:** Ticari binalarda yıllık kazan bakımı zorunludur. Bakım raporu muhafaza edilmelidir.
```

---

## Sayfa 2: Elektrik Tesisatı SSS

### Meta Bilgileri

```yaml
Başlık: Elektrik Tesisatı Sıkça Sorulan Sorular | Hızır Teknik
Slug: sss/elektrik-tesisati
Meta Title: Elektrik Tesisatı SSS - Güvenlik ve Bakım Rehberi 2026 | Hızır Teknik
Meta Description: Elektrik tesisatı güvenliği, sigorta seçimi, topraklama ve arıza çözümleri hakkında SSS. Ankara elektrik tesisatı hizmeti için Hızır Teknik.
```

### SSS İçeriği

#### Soru 1: Elektrik tesisatı ne zaman yenilenmeli?

```markdown
**Kısa Cevap:** 25-30 yaş üzeri tesisatlar, sık sigorta atması veya kablo ısınması durumlarında yenilenmelidir.

**Yenileme Gerektiren Durumlar:**

1. **Yaş Kriteri:** 25 yaşın üzerindeki tesisatlar
2. **Güvenlik Sorunları:**
   - Sık sigorta atması
   - Kablo veya priz ısınması
   - Yanık kokusu
   - Kıvılcım veya ark

3. **Kapasite Yetersizliği:**
   - Yeni cihazlar için güç yetersiz
   - Sürekli uzatma kablosu kullanımı

**Modern Standartlar:**
- Bakır kablo kullanımı (alüminyum değil)
- Topraklama sistemi
- Kaçak akım rölesi (30mA)
- Uygun kesitli kablolar

**İstatistik:** Türkiye'de hanelerin %96.4'ü internet, %99.6'sı akıllı telefona sahiptir. Artan elektronik kullanımı güçlü altyapı gerektirir.
```

#### Soru 2: Kaçak akım rölesi nedir ve neden önemlidir?

```markdown
**Kısa Cevap:** Kaçak akım rölesi (RCD), elektrik kaçağı durumunda hayat kurtaran bir güvenlik cihazıdır.

**Çalışma Prensibi:**
- Giren ve çıkan akım arasındaki farkı ölçer
- 30mA üzeri kaçak tespit edildiğinde elektriği keser
- Milisaniyeler içinde devreyi açar

**Kullanım Alanları:**
- Islak hacimler (banyo, mutfak)
- Bahçe ve dış mekan prizeleri
- Çocuk odaları
- Genel güvenlik

**Zorunluluk:**
- 2020 sonrası inşaatlarda zorunlu
- Eski binalara da monte edilebilir
- Maliyeti düşük, faydası yüksek

**Hızır Teknik:** Mevcut tesisatınıza kaçak akım rölesi montajı için teklif alın.
```

#### Soru 3: Elektrik sigortası neden atıyor?

```markdown
**Kısa Cevap:** Aşırı yük, kısa devre veya kaçak akım en yaygın nedenlerdir.

**Olası Nedenler:**

1. **Aşırı Yük:**
   - Çok fazla cihaz aynı anda çalışıyor
   - Sigorta kapasitesi yetersiz
   - Çözüm: Yük dağılımı veya sigorta güncelleme

2. **Kısa Devre:**
   - Kablo hasarı
   - Cihaz arızası
   - Çözüm: Hasarlı kablo/cihaz tespiti

3. **Kaçak Akım:**
   - Yalıtım bozukluğu
   - Islak ortam etkisi
   - Çözüm: Kaçak noktası tespiti

**Yapılması Gerekenler:**
1. Hangi devre olduğunu tespit edin
2. O devredeki cihazları çıkarın
3. Sigortayı kaldırın
4. Cihazları tek tek takarak arızalıyı bulun
5. Sorun devam ederse profesyonel çağırın
```

#### Soru 4: Topraklama neden önemlidir?

```markdown
**Kısa Cevap:** Topraklama, elektrik kaçağı durumunda akımı güvenli şekilde toprağa ileterek can güvenliği sağlar.

**Topraklamanın Faydaları:**

1. **Can Güvenliği:** Elektrik çarpması riskini azaltır
2. **Cihaz Koruması:** Aşırı gerilimden korur
3. **Parazit Önleme:** Elektronik cihazlarda gürültüyü azaltır
4. **Yasal Zorunluluk:** Yeni tesisatlarda zorunlu

**Topraklama Kontrolü:**
- Priz test cihazı ile kontrol edilebilir
- Periyodik ölçüm (2-5 yılda bir)
- Profesyonel ölçüm raporu

**Uyarı Belirtileri:**
- Cihazlara dokunurken karıncalanma
- Metal yüzeylerde statik elektrik
- Elektronik cihazlarda parazit

**Hızır Teknik:** Topraklama ölçümü ve iyileştirme hizmeti sunuyoruz.
```

#### Soru 5: Ev elektriğinde hangi kesit kablo kullanılmalı?

```markdown
**Kısa Cevap:** Aydınlatma için 1.5mm², prizler için 2.5mm², klimalar için 4mm² veya üzeri kullanılmalıdır.

**Kablo Kesit Rehberi:**

| Kullanım Alanı | Kesit | Sigorta |
|----------------|-------|---------|
| Aydınlatma | 1.5mm² | 10A |
| Genel prizler | 2.5mm² | 16A |
| Mutfak/banyo | 2.5mm² | 16A |
| Klima | 4mm² | 20A |
| Elektrikli ocak | 6mm² | 32A |
| Şofben/kombi | 4mm² | 20A |

**Dikkat Edilmesi Gerekenler:**
- Bakır kablo tercih edin
- NYM veya NHXMH tipi kablo kullanın
- Kablo uzunluğu arttıkça kesit artmalı
- Profesyonel hesaplama yaptırın

**Uyarı:** Yetersiz kesit kablo ısınma, yangın ve güç kaybına neden olur.
```

#### Soru 6: Elektrik arızalarında ilk ne yapılmalı?

```markdown
**Kısa Cevap:** Güvenliği sağlayın, ana sigortayı kapatın ve profesyonel yardım isteyin.

**Acil Durum Adımları:**

1. **Güvenlik Öncelikli:**
   - Islak elle müdahale etmeyin
   - Kıvılcım varsa yaklaşmayın
   - Yangın belirtisi varsa 110'u arayın

2. **Ana Sigortayı Kapatın:**
   - Tüm elektriği kesin
   - Sayaç panosundaki ana şalteri indirin

3. **Değerlendirme:**
   - Sadece sizin mi yoksa tüm bina mı etkilendi?
   - Görünür hasar var mı?
   - Koku veya duman var mı?

4. **Profesyonel Çağırın:**
   - Kendiniz tamir etmeye çalışmayın
   - Elektrik işleri yetki gerektirir
   - 7/24 acil servis: 0312 XXX XX XX

**Asla Yapmayın:**
- Açık kabloya dokunmak
- Sigortayı zorla kaldırmak
- Su ile söndürmeye çalışmak
```

#### Soru 7: Akıllı ev sistemleri mevcut tesisata entegre edilebilir mi?

```markdown
**Kısa Cevap:** Evet, çoğu akıllı ev sistemi mevcut tesisata entegre edilebilir, ancak altyapı değerlendirmesi gereklidir.

**Entegrasyon Seçenekleri:**

1. **Kablosuz Sistemler:**
   - Wi-Fi tabanlı akıllı prizler
   - Zigbee/Z-Wave cihazlar
   - Mevcut tesisatı değiştirmez
   - Kolay kurulum

2. **Kablolu Sistemler:**
   - KNX/EIB standartları
   - Daha güvenilir
   - Profesyonel kurulum gerektirir

**Mevcut Tesisat Gereksinimleri:**
- Güvenilir Wi-Fi bağlantısı
- Yeterli priz kapasitesi
- Güncel topraklama sistemi

**2026 Türkiye Pazarı:**
- Akıllı ev cihazı geliri $1.06 milyar
- Hane başına ortalama harcama $81
- Yıllık büyüme %13.8

**Hızır Teknik:** Akıllı ev dönüşümü için altyapı değerlendirmesi ve kurulum hizmeti sunuyoruz.
```

#### Soru 8: Elektrik faturası neden yüksek geliyor?

```markdown
**Kısa Cevap:** Eski cihazlar, gizli tüketimler, yanlış tarife veya kaçak kullanım nedeniyle yüksek gelebilir.

**Yüksek Fatura Nedenleri:**

1. **Eski/Verimsiz Cihazlar:**
   - A++ yerine A sınıfı buzdolabı %40 fazla tüketir
   - 10 yaş üzeri cihazları değerlendirin

2. **Bekleme Modu Tüketimi:**
   - TV, bilgisayar, şarj cihazları
   - Yıllık 100-200 TL gizli tüketim

3. **Yanlış Tarife:**
   - Tek zamanlı vs çok zamanlı tarife
   - Kullanım alışkanlıklarına göre seçin

4. **Kaçak veya Arıza:**
   - Sayaç arızası
   - Topraklama kaçağı
   - Komşu bağlantısı

**Kontrol Yöntemi:**
1. Tüm cihazları kapatın
2. Sayacın dönüp dönmediğini kontrol edin
3. Dönüyorsa kaçak var demektir

**Hızır Teknik:** Enerji verimliliği analizi ve optimizasyon hizmeti sunuyoruz.
```

---

## Sayfa 3: Su ve Tesisat SSS

### Meta Bilgileri

```yaml
Başlık: Su ve Tesisat Sıkça Sorulan Sorular | Hızır Teknik
Slug: sss/su-tesisat
Meta Title: Su Tesisatı SSS - Sızıntı, Tıkanıklık ve Bakım Çözümleri 2026 | Hızır Teknik
Meta Description: Su tesisatı sorunları, sızıntı tespiti, tıkanıklık açma ve bakım hakkında SSS. Ankara profesyonel tesisat hizmeti için Hızır Teknik.
```

### SSS İçeriği

#### Soru 1: Su sızıntısı nasıl tespit edilir?

```markdown
**Kısa Cevap:** Sayaç kontrolü, ses tespiti ve termal kamera ile sızıntı noktası bulunabilir.

**Sızıntı Tespit Yöntemleri:**

1. **Sayaç Testi:**
   - Tüm muslukları kapatın
   - Sayacın dönüp dönmediğini kontrol edin
   - Dönüyorsa gizli sızıntı var

2. **Görsel Kontrol:**
   - Duvar ve tavanda nem lekeleri
   - Şişen veya kabarık boyalar
   - Küf ve mantar oluşumu

3. **Ses Tespiti:**
   - Gece sessizliğinde su sesi
   - Akustik cihazlarla tespit

4. **Termal Kamera:**
   - Duvar içi sıcak/soğuk noktalar
   - Profesyonel ekipman gerektirir

**İstatistik:** TÜİK 2024 verilerine göre Türkiye'deki konutların %31.3'ü nem ve sızıntı sorunu yaşamaktadır.

**Hızır Teknik:** Kırmadan sızıntı tespiti hizmeti sunuyoruz.
```

#### Soru 2: Lavabo/tuvalet tıkanıklığı nasıl açılır?

```markdown
**Kısa Cevap:** Basit tıkanıklıklar pompa ile açılabilir, kalıcı tıkanıklıklar için profesyonel robot cihaz gerekir.

**Ev Yapımı Çözümler:**

1. **Pompa (Plastunger):**
   - Sıkı şekilde yerleştirin
   - Güçlü ve ritmik pompalayın
   - Su taşmasını engelleyin

2. **Kaynar Su + Bulaşık Deterjanı:**
   - Yağ tıkanıklıklarında etkili
   - 5-10 dakika bekletin

3. **Karbonat + Sirke:**
   - Yarım bardak karbonat dökün
   - Üzerine sirke ekleyin
   - 15 dakika bekleyip sıcak su dökün

**Profesyonel Müdahale Gereken Durumlar:**
- Birden fazla gider etkilendi
- Kötü koku geliyor
- Ev yapımı yöntemler işe yaramadı
- Düzenli olarak tekrarlıyor

**Hızır Teknik:** Robotlu tıkanıklık açma ve kamera ile görüntüleme hizmeti.
```

#### Soru 3: Su tesisatı boruları ne zaman değiştirilmeli?

```markdown
**Kısa Cevap:** Metal borular 25-40 yıl, plastik borular 50+ yıl dayanır. Korozyon, sızıntı veya düşük basınç durumunda değişim gerekir.

**Boru Ömürleri:**

| Boru Tipi | Ortalama Ömür | Sorunlar |
|-----------|---------------|----------|
| Galvaniz | 20-30 yıl | Korozyon, pas |
| Bakır | 40-50 yıl | Pinhole kaçaklar |
| PPR | 50+ yıl | Minimum sorun |
| PEX | 40-50 yıl | UV hassasiyeti |

**Değişim Belirtileri:**
- Paslı veya renkli su
- Düşük su basıncı
- Sürekli sızıntılar
- Metal tat

**Modern Seçenekler:**
- PPR boru: Ekonomik, dayanıklı
- Bakır: Premium, antibakteriyel
- PEX: Esnek, kolay montaj

**Hızır Teknik:** Ücretsiz keşif ile boru durumunu değerlendirelim.
```

#### Soru 4: Su basıncı düşükse ne yapılmalı?

```markdown
**Kısa Cevap:** Önce filtre kontrolü yapın, sorun devam ederse şebeke, pompa veya boru tıkanıklığı kontrol edilmelidir.

**Kontrol Sırası:**

1. **Filtre Kontrolü:**
   - Musluk ucu filtresini (aeratör) temizleyin
   - Ana su girişi filtresini kontrol edin

2. **Şebeke Kontrolü:**
   - Komşularda da sorun var mı?
   - ASKİ kesinti bilgisi
   - Sayaç vanası tam açık mı?

3. **Pompa Kontrolü (Bina):**
   - Hidrofor çalışıyor mu?
   - Pompa basınç ayarı uygun mu?

4. **Boru Sorunları:**
   - Kireç birikimi
   - Korozyon/tıkanma
   - Kaçak nedeniyle basınç düşüşü

**Çözümler:**
- Basınç arttırıcı pompa kurulumu
- Boru temizliği/değişimi
- Kireç çözücü işlem

**Hızır Teknik:** Su basıncı ölçümü ve optimizasyon hizmeti.
```

#### Soru 5: Sıcak su neden geç geliyor?

```markdown
**Kısa Cevap:** Uzun boru mesafesi, boyler/kombi ayarları veya sirkülasyon eksikliği nedeniyle geç gelebilir.

**Nedenler ve Çözümler:**

1. **Uzun Boru Mesafesi:**
   - Isıtıcıdan muslağa uzak mesafe
   - Çözüm: Sirkülasyon pompası

2. **Boyler/Kombi Ayarı:**
   - Düşük sıcaklık ayarı
   - Çözüm: Sıcaklığı 50-55°C'ye ayarlayın

3. **Yalıtım Eksikliği:**
   - Borular ısıyı kaybediyor
   - Çözüm: Boru yalıtımı

4. **Ani Su Isıtıcı:**
   - Kapasitesi yetersiz
   - Çözüm: Daha güçlü cihaz

**Enerji Tasarrufu İpucu:**
Sirkülasyon pompası + termostat ile sıcak su hazır tutulabilir. Ancak bu enerji tüketimini artırır. Kullanım alışkanlıklarınıza göre değerlendirin.

**Hızır Teknik:** Sıcak su sistemi optimizasyonu için ücretsiz keşif.
```

#### Soru 6: Banyo/mutfak tadilatında tesisat nelere dikkat edilmeli?

```markdown
**Kısa Cevap:** Su kesme vanalarını, boru güzergahlarını ve atık su eğimini önceden planlayın.

**Tadilat Öncesi Kontrol Listesi:**

1. **Mevcut Durum Tespiti:**
   - Boru güzergahlarını belirleyin
   - Vana konumlarını işaretleyin
   - Mevcut boru tipini tespit edin

2. **Yeni Yerleşim Planı:**
   - Lavabo, klozet, duş pozisyonları
   - Atık su eğimi (min. %2)
   - Havalandırma borusu

3. **Malzeme Seçimi:**
   - Temiz su: PPR veya bakır
   - Atık su: PVC veya PPRC
   - Kaliteli armatürler

4. **Profesyonel Destek:**
   - Proje çizimi
   - Su kesme planı
   - Belediye izinleri

**Yapılmaması Gerekenler:**
- Atık su borularını daraltmak
- Eğimsiz döşeme yapmak
- Kalitesiz malzeme kullanmak

**Hızır Teknik:** Tadilat projesi danışmanlığı ve uygulama hizmeti.
```

#### Soru 7: Kış aylarında borular nasıl korunur?

```markdown
**Kısa Cevap:** Yalıtım, damlatma ve ısıtma kablosu ile borular donmaya karşı korunabilir.

**Donma Önleme Yöntemleri:**

1. **Yalıtım:**
   - Dış mekandaki boruları yalıtın
   - Pencere altı borularına dikkat
   - Balkon ve teras boruları

2. **Damlatma Yöntemi:**
   - Şiddetli soğuklarda musluğu hafif açık bırakın
   - Hareket eden su donmaz

3. **Isıtma Kablosu:**
   - Kritik bölgelere ısıtıcı kablo
   - Termostat kontrollü çalışma
   - Elektrik tüketimini artırır

4. **İç Mekan Önlemleri:**
   - Banyo/mutfak dolap kapılarını açın
   - Merkezi ısıtmayı düşük de olsa açık tutun

**Donmuş Boru Durumunda:**
- Yavaşça ısıtın (saç kurutma makinesi)
- Açık alev kullanmayın
- Boru patlarsa ana vanayı kapatın

**Hızır Teknik:** Kışa hazırlık kontrolü ve yalıtım hizmeti.
```

#### Soru 8: Pis su kokusu nereden geliyor?

```markdown
**Kısa Cevap:** Kuru sifon, tıkanıklık veya havalandırma eksikliği en yaygın nedenlerdir.

**Koku Kaynakları:**

1. **Kuru Sifon:**
   - Az kullanılan lavabo/giderler
   - Sifondaki su buharlaşmış
   - Çözüm: Muslukları düzenli çalıştırın

2. **Tıkanıklık:**
   - Organik madde birikimi
   - Saç, yağ, sabun kalıntıları
   - Çözüm: Gider temizliği

3. **Havalandırma Eksikliği:**
   - Çatı borusu tıkalı
   - Negatif basınç oluşuyor
   - Çözüm: Havalandırma kontrolü

4. **Sifon Arızası:**
   - Sifon çatlamış/bozulmuş
   - Su tutmuyor
   - Çözüm: Sifon değişimi

**Önleme Yöntemleri:**
- Haftalık kaynar su dökün
- Gider süzgeci kullanın
- Aylık karbonat+sirke

**Hızır Teknik:** Koku tespiti ve giderilmesi için profesyonel hizmet.
```

---

## Sayfa 4: Havuz Sistemleri SSS

### Meta Bilgileri

```yaml
Başlık: Havuz Sistemleri Sıkça Sorulan Sorular | Hızır Teknik
Slug: sss/havuz-sistemleri
Meta Title: Havuz Bakımı ve Sistemleri SSS - 2026 Güncel Rehber | Hızır Teknik
Meta Description: Havuz bakımı, su kimyası, pompa sistemleri ve ısıtma hakkında SSS. Ankara havuz bakım ve kurulum hizmeti için Hızır Teknik.
```

### SSS İçeriği

#### Soru 1: Havuz suyu ne sıklıkla değiştirilmelidir?

```markdown
**Kısa Cevap:** Doğru bakımla havuz suyu yıllarca değiştirilmez, sadece eksilen su tamamlanır.

**Önemli Bilgiler:**

- Profesyonel bakımla su yıllarca kullanılabilir
- Yılda %30-50 su kaybı normaldir (buharlaşma + filtre temizliği)
- Eksilen su düzenli olarak tamamlanır

**Su Değişimi Gerektiren Durumlar:**
- TDS (toplam çözünmüş katı) çok yüksek
- Kimyasal denge sağlanamıyor
- Ciddi alg problemi
- Havuz yenileme/tadilat

**Su Koruma İpuçları:**
- Haftalık kimyasal kontrol
- Düzenli filtre temizliği
- Havuz örtüsü kullanımı
- Yüzey temizliği

**Hızır Teknik:** Havuz suyu analizi ve bakım hizmeti sunuyoruz.
```

#### Soru 2: Havuz kimyasalları nasıl dengelenir?

```markdown
**Kısa Cevap:** pH 7.2-7.6, klor 1-3 ppm, alkalinite 80-120 ppm aralığında tutulmalıdır.

**Kimyasal Dengeler:**

| Parametre | İdeal Aralık | Kontrol Sıklığı |
|-----------|--------------|-----------------|
| pH | 7.2 - 7.6 | 2-3 gün |
| Klor | 1 - 3 ppm | Günlük |
| Alkalinite | 80 - 120 ppm | Haftalık |
| Kalsiyum | 200 - 400 ppm | Aylık |
| Siyanürik Asit | 30 - 50 ppm | Aylık |

**pH Ayarlama:**
- Düşükse: pH yükseltici (soda)
- Yüksekse: pH düşürücü (asit)

**Klor Türleri:**
- Toz klor: Şok dozlama
- Tablet klor: Günlük dezenfeksiyon
- Tuz klor sistemi: Otomatik üretim

**Dikkat:** Kimyasalları asla karıştırmayın, ayrı ayrı ekleyin.
```

#### Soru 3: Havuz pompası ne kadar çalışmalıdır?

```markdown
**Kısa Cevap:** Yaz aylarında günde 8-12 saat, kış aylarında 4-6 saat çalışmalıdır.

**Çalışma Süresi Hesabı:**

Kural: Havuz suyu günde en az 1-2 kez tamamen filtreden geçmeli.

**Örnek Hesaplama:**
- Havuz hacmi: 50 m³
- Pompa debisi: 10 m³/saat
- Minimum süre: 50 ÷ 10 = 5 saat
- Önerilen: 8-10 saat

**Sezon Bazlı Öneriler:**

| Dönem | Günlük Çalışma | Saat Aralığı |
|-------|----------------|--------------|
| Yaz (aktif kullanım) | 10-12 saat | 08:00-20:00 |
| İlkbahar/Sonbahar | 6-8 saat | 10:00-18:00 |
| Kış (koruma) | 4-6 saat | 12:00-18:00 |

**Enerji Tasarrufu:**
- Değişken hızlı pompa kullanın
- Gece tarifeli elektrik saatlerinde çalıştırın
- Timer ile otomatik kontrol

**Hızır Teknik:** Pompa seçimi ve enerji optimizasyonu danışmanlığı.
```

#### Soru 4: Havuz yeşillenmesi nasıl önlenir?

```markdown
**Kısa Cevap:** Düzenli klor dozlaması, pH kontrolü ve filtrasyon ile alg üremesi önlenir.

**Yeşillenme Nedenleri:**
- Yetersiz klor
- pH dengesizliği
- Yetersiz filtrasyon
- Fosfat birikimi

**Önleme Yöntemleri:**

1. **Düzenli Klor Dozlaması:**
   - Her gün klor seviyesini kontrol edin
   - 1-3 ppm aralığında tutun

2. **pH Kontrolü:**
   - 7.2-7.6 aralığında tutun
   - Yüksek pH'da klor etkisiz kalır

3. **Haftalık Şok Dozlama:**
   - Klor seviyesini 10 ppm'e çıkarın
   - Gece yapın, sabah yüzün

4. **Algisit Kullanımı:**
   - Haftalık koruyucu doz
   - Alg oluşumunu önler

**Yeşillenmiş Havuz Kurtarma:**
1. pH'ı 7.2'ye ayarlayın
2. Şok klor dozlaması yapın
3. 24-48 saat pompa çalıştırın
4. Ölü algleri süpürün
5. Filtre temizliği yapın

**Hızır Teknik:** Havuz kurtarma ve bakım hizmeti.
```

#### Soru 5: Havuz ısıtma sistemleri karşılaştırması

```markdown
**Kısa Cevap:** Isı pompası en ekonomik, güneş enerjisi en çevreci, elektrikli ısıtıcı en hızlıdır.

**Sistem Karşılaştırması:**

| Sistem | Kurulum | İşletme | Süre |
|--------|---------|---------|------|
| Isı Pompası | Yüksek | Düşük | 24-48 saat |
| Güneş Kolektörü | Orta | Sıfır | 2-3 gün |
| Elektrikli Isıtıcı | Düşük | Yüksek | 6-12 saat |
| Doğalgaz | Orta | Orta | 4-8 saat |

**Isı Pompası Avantajları:**
- En düşük işletme maliyeti
- COP 4-6 (1 kW elektrik = 4-6 kW ısı)
- Uzun ömür (15-20 yıl)
- Sessiz çalışma

**Güneş Enerjisi Avantajları:**
- İşletme maliyeti yok
- Çevre dostu
- Devlet teşvikleri mevcut

**Önerilen Kombinasyon:**
Güneş kolektörü + ısı pompası: Güneşli günlerde güneş, bulutlu/soğuk günlerde ısı pompası.

**Hızır Teknik:** Havuz ısıtma sistemi kurulumu ve danışmanlığı.
```

#### Soru 6: Havuz kışlığa nasıl alınır?

```markdown
**Kısa Cevap:** Kimyasal şoklama, su seviyesi düşürme, ekipman koruma ve örtü kapatma adımları uygulanır.

**Kışa Hazırlık Adımları:**

1. **Su Temizliği:**
   - Son bir kez süpürün
   - Şok klor dozlaması yapın
   - pH ve alkaliniteyi dengeleyin

2. **Su Seviyesi:**
   - Skimmer altına düşürün
   - Boru donmasını önleyin

3. **Ekipman Koruması:**
   - Pompa ve filtre boşaltın
   - Isıtıcıyı devre dışı bırakın
   - Borulara antifriz ekleyin

4. **Kimyasal İlavesi:**
   - Kış kimyasalı ekleyin
   - Alg önleyici uzun etkili tip

5. **Örtü:**
   - Kış örtüsü kapatın
   - Sıkıca sabitleyin
   - Su birikimini önleyin

**Kış Boyunca Kontrol:**
- Ayda bir örtü kontrolü
- Su seviyesi kontrolü
- Kimyasal takviyesi (gerekirse)

**Hızır Teknik:** Havuz kışa hazırlık ve açılış hizmeti.
```

#### Soru 7: Tuz klor sistemi avantajları nelerdir?

```markdown
**Kısa Cevap:** Otomatik klor üretimi, düşük bakım ve yumuşak su hissi başlıca avantajlarıdır.

**Tuz Klor Sistemi Nedir?**
Tuzlu sudan elektroliz yöntemiyle klor üreten sistemdir.

**Avantajları:**

1. **Otomatik Dezenfeksiyon:**
   - 7/24 klor üretimi
   - Manuel dozlama gereksiz
   - Sabit klor seviyesi

2. **Ekonomik:**
   - Tuz ucuz ve kolay bulunur
   - Yılda 2-3 kez tuz takviyesi
   - Klor kimyasalı almaya gerek yok

3. **Konfor:**
   - Yumuşak su hissi
   - Göz ve cilt tahrişi az
   - Klor kokusu minimal

4. **Düşük Bakım:**
   - Hücre temizliği (yılda 1-2 kez)
   - Tuz takviyesi
   - pH kontrolü

**Dezavantajları:**
- Yüksek kurulum maliyeti
- Elektroliz hücresi ömrü (5-7 yıl)
- pH yükselme eğilimi

**Tuz Oranı:** 3000-4000 ppm (deniz suyu: 35.000 ppm)

**Hızır Teknik:** Tuz klor sistemi kurulumu ve dönüşüm hizmeti.
```

#### Soru 8: Havuz bakım maliyeti ne kadardır?

```markdown
**Kısa Cevap:** Aylık ortalama 1.500-4.000 TL arasında değişir (havuz büyüklüğü ve kullanıma göre).

**Maliyet Kalemleri (Aylık):**

| Kalem | Küçük Havuz (25m³) | Büyük Havuz (75m³) |
|-------|-------------------|-------------------|
| Kimyasallar | 500-800 TL | 1.200-1.800 TL |
| Elektrik | 400-600 TL | 800-1.500 TL |
| Su Takviyesi | 100-200 TL | 300-500 TL |
| Bakım/Servis | 0-500 TL | 0-800 TL |
| **Toplam** | **1.000-2.100 TL** | **2.300-4.600 TL** |

**Maliyet Düşürme İpuçları:**

1. **Havuz Örtüsü:** Buharlaşmayı %70 azaltır
2. **Değişken Hızlı Pompa:** Elektriği %50 azaltır
3. **Tuz Klor Sistemi:** Kimyasal masrafını %60 azaltır
4. **Güneş Isıtması:** Isıtma maliyetini sıfırlar

**Sezonluk Dağılım:**
- Yaz: Aylık 2.000-4.000 TL
- Kış: Aylık 500-1.000 TL

**Hızır Teknik:** Aylık veya sezonluk bakım sözleşmeleri ile uygun fiyatlar.
```

---

## Hızlı İçerik Oluşturma: Seed Script Kullanımı

### Seed Script ile Taslak Oluşturma

SSS sayfalarını hızlıca taslak olarak oluşturmak için hazır seed script kullanabilirsiniz:

```bash
# SSS sayfalarını taslak olarak oluştur
pnpm seed:faq-pages
```

**Script Konumu:** `src/seed/data/faq-pages.ts`

**Script Ne Yapar?**
- 4 adet SSS sayfasını taslak (`_status: "draft"`) olarak oluşturur:
  - İklimlendirme ve Isıtma SSS (8 soru)
  - Elektrik Tesisatı SSS (8 soru)
  - Su ve Tesisat SSS (8 soru)
  - Havuz Sistemleri SSS (8 soru)
- PageHeroBlock ve PageFAQBlock yapılandırılmış gelir
- SEO meta bilgileri doldurulur

**Seed Script Sonrası Yapılacaklar:**
1. Payload Admin Panel'e gidin
2. Pages > Draft sayfaları görün
3. İçeriği gözden geçirin ve düzenleyin
4. İletişim bilgilerini güncelleyin (telefon numaraları)
5. Yayınla (Publish) butonuna tıklayın

### Yeni FAQ Sayfası Ekleme (Seed Script'e)

Yeni SSS sayfası eklemek için `src/seed/data/faq-pages.ts` dosyasını düzenleyin:

```typescript
import { createPageHeroBlock, createFAQBlock } from '../index'

// faqPagesData dizisine yeni sayfa ekleyin
{
  title: 'Yeni Kategori SSS',
  description: 'Kategori açıklaması...',
  blocks: [
    createPageHeroBlock({
      title: 'Yeni Kategori Sıkça Sorulan Sorular',
      description: 'Açıklama metni...',
    }),
    createFAQBlock({
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Alt başlık...',
      variant: 'light',
      faqs: [
        { question: 'Soru 1?', answer: 'Cevap 1...' },
        { question: 'Soru 2?', answer: 'Cevap 2...' },
      ],
    }),
  ],
  meta: {
    title: 'SSS Başlığı | Hızır Teknik',
    description: 'Meta açıklama...',
  },
}
```

---

## Payload Admin Panel'de SSS Sayfası Oluşturma (Manuel)

### Adım 1: Pages Koleksiyonuna Git

```
1. http://localhost:3000/admin adresine git
2. Sol menüden "Pages" seçeneğine tıkla
3. "Create New" butonuna tıkla
```

### Adım 2: Sayfa Temel Bilgilerini Doldur

```
Title: [Sayfa başlığı - örn: "İklimlendirme ve Isıtma SSS"]
Slug: [URL slug - örn: "sss/iklimlendirme-isitma"]
Published: Başlangıçta "Draft" olarak kaydet
```

### Adım 3: PageFAQBlock Ekle

```
1. "Add Block" butonuna tıkla
2. Block listesinden "Page FAQ Block" seç
3. Block başlığını gir: "Sıkça Sorulan Sorular"
4. "Add FAQ" ile soruları tek tek ekle:
   - Question: Soru metnini gir
   - Answer: Cevap metnini gir (rich text formatında)
5. Tüm 8 soruyu ekle
```

### Adım 4: SEO Bilgilerini Doldur

```
1. Sayfanın altındaki "SEO" bölümüne git
2. Meta Title: [60 karakter limiti]
3. Meta Description: [160 karakter limiti]
4. OG Image: İsteğe bağlı sosyal medya görseli
```

### Adım 5: Kaydet ve Yayınla

```
1. "Save Draft" ile taslak kaydet
2. İçeriği kontrol et
3. "Publish" ile yayınla
```

---

## Schema.org FAQPage Markup

SSS sayfaları için Schema.org FAQPage yapısal veri markup'ı otomatik olarak eklenmelidir.

### Yapı Örneği

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kombi bakımı ne sıklıkla yapılmalıdır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yılda en az 1 kez, tercihen kış sezonu öncesinde (Eylül-Ekim) yapılmalıdır..."
      }
    }
  ]
}
```

### Uygulama Notu

Bu markup'ın frontend'de otomatik render edilip edilmediğini kontrol edin. Eğer yoksa, SSS sayfaları için özel bir layout/component geliştirmek gerekebilir.

---

## Kalite Kontrol Checklist

### Her SSS Sayfası İçin

- [ ] Sayfa başlığı açık ve anlaşılır
- [ ] Slug doğru formatta (sss/kategori-adi)
- [ ] 8 soru eklenmiş
- [ ] Her cevap detaylı ve bilgilendirici
- [ ] Meta title 60 karakter altında
- [ ] Meta description 160 karakter altında
- [ ] Internal linkler çalışıyor
- [ ] Fiyat/iletişim bilgileri güncel
- [ ] İstatistikler kaynaklı (TÜİK, pazar verileri)

### Genel Kontrol

- [ ] Tüm 4 SSS sayfası oluşturuldu
- [ ] Schema.org markup çalışıyor
- [ ] Mobil görünüm kontrol edildi
- [ ] Sayfa hızı ölçüldü
- [ ] Google Search Console'a gönderildi

---

## Zaman Çizelgesi

| Hafta | Görev |
|-------|-------|
| 1. Hafta 1-2 | İklimlendirme SSS oluştur ve yayınla |
| 1. Hafta 3-5 | Elektrik Tesisatı SSS |
| 2. Hafta 1-3 | Su ve Tesisat SSS |
| 2. Hafta 4-5 | Havuz Sistemleri SSS |

---

## Olası Sorunlar ve Çözümler

### Sorun 1: PageFAQBlock Bulunamıyor

```
Çözüm:
1. src/collections/blocks/PageFAQBlock.ts dosyasını kontrol edin
2. payload.config.ts'de block'un register edildiğini doğrulayın
3. pnpm generate:types ile tipleri yeniden oluşturun
```

### Sorun 2: Rich Text Formatı Bozuk

```
Çözüm:
1. Lexical editörde düz metin olarak yapıştırın
2. Formatlamayı editör içinde yapın
3. HTML yapıştırmaktan kaçının
```

### Sorun 3: Slug Çakışması

```
Çözüm:
1. Mevcut slug'ları kontrol edin
2. Benzersiz slug kullanın
3. /sss/ prefix'ini unutmayın
```

---

**Sonraki Adım:** Bu faz tamamlandığında `04-PHASE-3-PRICE-GUIDES.md` dosyasına geçin.
