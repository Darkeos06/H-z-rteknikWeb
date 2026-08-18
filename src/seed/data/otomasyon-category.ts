/**
 * Otomasyon Kategori ve Hizmetleri Seed Scripti
 *
 * Bu dosya "Otomasyon" kategorisini ve altındaki 20 hizmeti oluşturur.
 *
 * Kullanım:
 *   pnpm seed:otomasyon
 *
 * NOT: Production veritabanı kullanılmaktadır!
 */

import {
  getPayloadInstance,
  createServiceCategory,
  createService,
} from '../index'

// ====================
// ANA SEED FONKSİYONU
// ====================

const seedOtomasyonCategory = async () => {
  const payload = await getPayloadInstance()

  try {
    payload.logger.info('🤖 Otomasyon kategorisi ve hizmetleri oluşturuluyor...')

    // 1. Kategori oluştur (draft)
    const category = await payload.create({
      collection: 'service-categories',
      data: {
        title: 'Otomasyon',
        description:
          'PLC, SCADA, BMS, güvenlik kamera, erişim kontrol ve akıllı bina otomasyon sistemlerinin kurulum, programlama ve bakım hizmetleri.',
        icon: 'elektronik-tesisat' as any,
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Endüstriyel ve ticari tesisler için PLC tabanlı kontrol sistemleri, SCADA yazılımları, bina yönetim sistemleri (BMS), güvenlik kamera ve erişim kontrol sistemlerinin komple kurulum, devreye alma ve bakım hizmetlerini sunuyoruz. Siemens, Schneider, Delta ve diğer önde gelen markalar üzerinde uzman kadromuzla çözüm üretiyoruz.',
                  },
                ],
                version: 1,
              },
            ],
            direction: 'ltr' as const,
            format: '' as const,
            indent: 0,
            version: 1,
          },
        },
        _status: 'draft',
      },
    })

    payload.logger.info(`✅ Kategori oluşturuldu: ${category.title} (ID: ${category.id})`)

    // 2. Hizmetler
    const services = [
      {
        title: 'Güvenlik Kamera Sistemi Kurulumu',
        description:
          'Ev, işyeri ve sanayi tesisleri için analog, HD ve IP tabanlı güvenlik kamera sistemlerinin kurulumu.',
        blocks: [
          {
            title: 'Güvenlik Kamera Sistemi Kurulumu Hakkında',
            description:
              'Konutlardan büyük sanayi tesislerine kadar her ölçekte güvenlik kamera sistemi tasarlıyor ve kuruyoruz. Analog, HD-TVI/CVI/AHD ve tam IP tabanlı sistemleri eksiksiz biçimde devreye alıyoruz.',
            features: [
              'Analog, HD ve IP kamera sistemleri',
              'DVR ve NVR kayıt cihazı kurulumu',
              'Uzaktan izleme ve mobil erişim',
              'Gece görüş ve hareket algılama',
              'Yüksek çözünürlüklü görüntü kaydı',
              'Kablo altyapısı ve montaj',
            ],
          },
        ],
        meta: {
          title: 'Güvenlik Kamera Sistemi Kurulumu | Hızır Teknik',
          description:
            'Ev, işyeri ve sanayi için analog, HD ve IP tabanlı güvenlik kamera sistemi kurulumu. Profesyonel montaj ve devreye alma.',
        },
      },
      {
        title: 'Kamera Kontrol Sistemi Bakım ve Servisi',
        description:
          'Mevcut kamera sistemlerinin periyodik bakımı, arıza giderimi ve güncellenmesi.',
        blocks: [
          {
            title: 'Kamera Kontrol Sistemi Bakım ve Servisi',
            description:
              'Kurulu güvenlik kamera ve kayıt sistemlerinin düzenli bakımını, arıza tespitini ve yazılım güncellemelerini gerçekleştiriyoruz. Kesintisiz güvenlik için periyodik servis önemlidir.',
            features: [
              'Periyodik bakım ve temizlik',
              'Arıza tespiti ve giderimi',
              'Yazılım ve firmware güncellemeleri',
              'Kamera lens ve görüntü kalibrasyonu',
              'Kayıt cihazı disk kontrolü',
              'Servis sözleşmesi imkânı',
            ],
          },
        ],
        meta: {
          title: 'Kamera Kontrol Sistemi Bakım ve Servisi | Hızır Teknik',
          description:
            'Güvenlik kamera sistemlerinin periyodik bakımı, arıza giderimi ve güncellenmesi. Uzman teknik ekip.',
        },
      },
      {
        title: 'IP Kamera ve NVR Kurulumu',
        description:
          'Ağ tabanlı IP kamera ve kayıt cihazı (NVR/DVR) kurulum ve konfigürasyonu.',
        blocks: [
          {
            title: 'IP Kamera ve NVR Kurulumu',
            description:
              'Yüksek çözünürlüklü IP kamera sistemleri ve NVR kayıt cihazlarının ağ altyapısıyla entegre kurulumunu yapıyoruz. PoE switch, kablo döşemesi ve yazılım konfigürasyonu dahildir.',
            features: [
              'IP kamera seçimi ve konumlandırma',
              'NVR/DVR kurulum ve konfigürasyonu',
              'PoE switch ve ağ altyapısı',
              'ONVIF uyumlu cihaz entegrasyonu',
              'Uzaktan erişim ve mobil uygulama kurulumu',
              '4K ve yüksek çözünürlük desteği',
            ],
          },
        ],
        meta: {
          title: 'IP Kamera ve NVR Kurulumu | Hızır Teknik',
          description:
            'Ağ tabanlı IP kamera ve NVR kayıt cihazı kurulum ve konfigürasyonu. Yüksek çözünürlüklü güvenlik sistemleri.',
        },
      },
      {
        title: 'Frekans Kontrol Panosu Montajı',
        description:
          'Pompa, fan ve motor sistemleri için frekans invertörlü kontrol panosu tasarım ve montajı.',
        blocks: [
          {
            title: 'Frekans Kontrol Panosu Montajı',
            description:
              'Motor, pompa ve fan sistemlerinde enerji tasarrufu ve verimlilik için frekans dönüştürücü (inverter) içeren kontrol panolarını tasarlayıp üretiyoruz. Komple montaj ve devreye alma hizmeti sunuyoruz.',
            features: [
              'Frekans invertör seçimi ve entegrasyonu',
              'Pano tasarım ve imalatı',
              'Motor yumuşak start/stop konfigürasyonu',
              'Enerji tasarrufu optimizasyonu',
              'PID kontrol parametresi ayarı',
              'Sahaya montaj ve devreye alma',
            ],
          },
        ],
        meta: {
          title: 'Frekans Kontrol Panosu Montajı | Hızır Teknik',
          description:
            'Pompa, fan ve motor sistemleri için frekans invertörlü kontrol panosu tasarım ve montajı. Enerji tasarrufu sağlayan çözümler.',
        },
      },
      {
        title: 'Motor Sürücü (İnverter) Kurulum ve Bakımı',
        description:
          'AC/DC motor sürücülerinin devreye alınması, parametrelendirilmesi ve periyodik bakımı.',
        blocks: [
          {
            title: 'Motor Sürücü (İnverter) Kurulum ve Bakımı',
            description:
              'Endüstriyel tesislerde kullanılan AC ve DC motor sürücülerinin (inverter/VFD) kurulum, parametre ayarı, devreye alma ve periyodik bakım hizmetlerini sunuyoruz. Siemens, ABB, Danfoss, Schneider ve diğer markalar desteklenmektedir.',
            features: [
              'AC ve DC inverter kurulumu',
              'Parametre ve hız profili ayarı',
              'Devreye alma ve test',
              'Arıza teşhis ve onarım',
              'Periyodik bakım ve kontrol',
              'Marka bağımsız servis desteği',
            ],
          },
        ],
        meta: {
          title: 'Motor Sürücü (İnverter) Kurulum ve Bakımı | Hızır Teknik',
          description:
            'AC/DC motor sürücülerinin devreye alınması, parametrelendirilmesi ve periyodik bakımı. Uzman inverter servisi.',
        },
      },
      {
        title: 'Elektronik Kontrol Panosu Montajı',
        description:
          'Endüstriyel ve ticari tesisler için elektronik kontrol panosu montaj ve devreye alma.',
        blocks: [
          {
            title: 'Elektronik Kontrol Panosu Montajı',
            description:
              'Fabrika, atölye ve ticari binalarda ihtiyaç duyulan elektronik kontrol panolarının tasarım, üretim, montaj ve devreye alma süreçlerini eksiksiz yönetiyoruz.',
            features: [
              'Pano tasarım ve imalatı',
              'Röle, sigorta ve kontaktör montajı',
              'Kablaj ve bağlantı işlemleri',
              'Elektrik testleri ve kabulü',
              'Sahaya nakliye ve montaj',
              'Devreye alma ve eğitim',
            ],
          },
        ],
        meta: {
          title: 'Elektronik Kontrol Panosu Montajı | Hızır Teknik',
          description:
            'Endüstriyel ve ticari tesisler için elektronik kontrol panosu montaj ve devreye alma hizmetleri.',
        },
      },
      {
        title: 'Otomasyon Panosu İmalatı ve Montajı',
        description:
          'PLC, röle, kontaktör ve sürücü içeren otomasyon panolarının imalatı ve sahaya montajı.',
        blocks: [
          {
            title: 'Otomasyon Panosu İmalatı ve Montajı',
            description:
              'PLC, HMI, inverter, röle ve kontaktörden oluşan komple otomasyon panolarını proje gereksinimlerinize göre imal ediyor ve sahaya monte ediyoruz.',
            features: [
              'Proje bazlı pano tasarımı',
              'PLC ve HMI entegrasyonu',
              'Güç ve kontrol devreleri',
              'Kablaj ve etiketleme',
              'FAT (Fabrika Kabul Testi)',
              'Sahaya montaj ve devreye alma',
            ],
          },
        ],
        meta: {
          title: 'Otomasyon Panosu İmalatı ve Montajı | Hızır Teknik',
          description:
            'PLC, röle, kontaktör ve sürücü içeren otomasyon panolarının imalatı ve sahaya montajı hizmetleri.',
        },
      },
      {
        title: 'PLC Kontrol Sistemi Kurulumu',
        description:
          'Siemens, Schneider, Delta ve diğer markalarda PLC tabanlı kontrol sistemi kurulumu ve programlama.',
        blocks: [
          {
            title: 'PLC Kontrol Sistemi Kurulumu',
            description:
              'Üretim süreçlerinizi otomatize etmek için Siemens S7, Schneider Modicon, Delta DVP ve diğer marka PLC sistemlerini kuruyoruz; ihtiyacınıza özel yazılım geliştiriyor ve devreye alıyoruz.',
            features: [
              'Siemens, Schneider, Delta PLC kurulumu',
              'PLC program geliştirme (Ladder, FBD, SCL)',
              'I/O konfigürasyonu ve kablajı',
              'Saha sensörü ve aktüatör entegrasyonu',
              'Test, devreye alma ve optimizasyon',
              'Uzaktan erişim ve bakım desteği',
            ],
          },
        ],
        meta: {
          title: 'PLC Kontrol Sistemi Kurulumu | Hızır Teknik',
          description:
            'Siemens, Schneider, Delta ve diğer markalarda PLC tabanlı kontrol sistemi kurulumu ve programlama hizmetleri.',
        },
      },
      {
        title: 'SCADA Sistemi Kurulumu ve Devreye Alma',
        description:
          'Uzaktan izleme ve kontrol için SCADA yazılım ve donanım kurulumu.',
        blocks: [
          {
            title: 'SCADA Sistemi Kurulumu ve Devreye Alma',
            description:
              'Tesisinizin tamamını merkezi olarak izlemek ve yönetmek için SCADA (Supervisory Control and Data Acquisition) sistemlerini tasarlıyor, kuruyoruz. WinCC, Ignition, InTouch ve benzeri platformlarda uzmanız.',
            features: [
              'SCADA yazılımı kurulum ve konfigürasyonu',
              'OPC UA/DA iletişim entegrasyonu',
              'Alarm ve olay yönetimi',
              'Trend ve raporlama modülleri',
              'PLC/RTU haberleşme entegrasyonu',
              'Operatör eğitimi ve dokümantasyon',
            ],
          },
        ],
        meta: {
          title: 'SCADA Sistemi Kurulumu ve Devreye Alma | Hızır Teknik',
          description:
            'Uzaktan izleme ve kontrol için SCADA yazılım ve donanım kurulumu. Merkezi tesis yönetim çözümleri.',
        },
      },
      {
        title: 'Bina Yönetim Sistemi (BMS) Kurulumu',
        description:
          'Büyük ölçekli binalarda ısıtma, soğutma, aydınlatma ve güvenliği tek merkezden yöneten BMS kurulumu.',
        blocks: [
          {
            title: 'Bina Yönetim Sistemi (BMS) Kurulumu',
            description:
              'Otel, alışveriş merkezi, hastane ve ofis binalarında tüm mekanik ve elektriksel sistemleri merkezi bir platform üzerinden izlemeye ve kontrol etmeye olanak sağlayan BMS çözümlerini kuruyoruz.',
            features: [
              'HVAC, aydınlatma ve güvenlik entegrasyonu',
              'BACnet, Modbus, KNX protokol desteği',
              'Enerji tüketimi izleme ve raporlama',
              'Merkezi operatör arayüzü (dashboard)',
              'Alarm yönetimi ve bildirim sistemi',
              'Bakım ve servis desteği',
            ],
          },
        ],
        meta: {
          title: 'Bina Yönetim Sistemi (BMS) Kurulumu | Hızır Teknik',
          description:
            'Büyük ölçekli binalarda ısıtma, soğutma, aydınlatma ve güvenliği tek merkezden yöneten BMS kurulum hizmetleri.',
        },
      },
      {
        title: 'Erişim Kontrol Sistemi Kurulumu',
        description:
          'Kart okuyucu, biyometrik ve şifreli erişim kontrol sistemlerinin kurulumu.',
        blocks: [
          {
            title: 'Erişim Kontrol Sistemi Kurulumu',
            description:
              'İşyeri, site ve tesislerinizde yetkisiz girişleri önlemek için RFID kart, biyometrik parmak izi/yüz tanıma ve şifre tabanlı erişim kontrol sistemleri kuruyoruz. Turnike ve elektrikli kilit entegrasyonu da sağlanmaktadır.',
            features: [
              'RFID kart okuyucu sistemleri',
              'Biyometrik parmak izi ve yüz tanıma',
              'Elektrikli kilit ve turnike entegrasyonu',
              'Merkezi yönetim yazılımı',
              'Kapı kontrolörü ve kablaj',
              'Raporlama ve log kaydı',
            ],
          },
        ],
        meta: {
          title: 'Erişim Kontrol Sistemi Kurulumu | Hızır Teknik',
          description:
            'Kart okuyucu, biyometrik ve şifreli erişim kontrol sistemlerinin kurulumu. Güvenli tesis yönetimi.',
        },
      },
      {
        title: 'Alarm ve Güvenlik Sistemi Kurulumu',
        description:
          'Hırsız alarm, hareket algılama ve merkeze bağlantılı güvenlik sistemi kurulumu.',
        blocks: [
          {
            title: 'Alarm ve Güvenlik Sistemi Kurulumu',
            description:
              'Konut, işyeri ve endüstriyel tesisler için hareket sensörü, manyetik kontak, cam kırılma dedektörü ve merkeze bağlantılı alarm sistemlerini tasarlayıp kuruyoruz.',
            features: [
              'Hırsız alarm paneli ve sensörler',
              'Hareket dedektörü ve cam kırılma sensörü',
              'Alarm izleme merkezi bağlantısı',
              'GSM ve IP iletişim modülleri',
              'Siren ve uyarı sistemleri',
              'Periyodik test ve bakım',
            ],
          },
        ],
        meta: {
          title: 'Alarm ve Güvenlik Sistemi Kurulumu | Hızır Teknik',
          description:
            'Hırsız alarm, hareket algılama ve merkeze bağlantılı güvenlik sistemi kurulumu hizmetleri.',
        },
      },
      {
        title: 'Video İnterkom Sistemi Montajı',
        description:
          'Görüntülü kapı zili ve interkom sistemlerinin montajı ve konfigürasyonu.',
        blocks: [
          {
            title: 'Video İnterkom Sistemi Montajı',
            description:
              'Rezidans, villa, site ve ticari binalar için görüntülü interkom ve kapı zili sistemlerinin kurulumunu ve konfigürasyonunu yapıyoruz. IP tabanlı ve analog sistemler için tam destek sağlanmaktadır.',
            features: [
              'Görüntülü kapı paneli montajı',
              'İç mekan monitörü kurulumu',
              'IP ve analog sistem desteği',
              'Elektrikli kilit ve kapı açma entegrasyonu',
              'Mobil uygulama entegrasyonu',
              'Kablo altyapısı ve montaj',
            ],
          },
        ],
        meta: {
          title: 'Video İnterkom Sistemi Montajı | Hızır Teknik',
          description:
            'Görüntülü kapı zili ve interkom sistemlerinin montajı ve konfigürasyonu. Profesyonel kurulum hizmeti.',
        },
      },
      {
        title: 'Akıllı Bina Otomasyon Sistemi Kurulumu',
        description:
          'Enerji yönetimi, konfor ve güvenliği entegre eden akıllı bina otomasyon çözümleri.',
        blocks: [
          {
            title: 'Akıllı Bina Otomasyon Sistemi Kurulumu',
            description:
              'KNX, DALI, LON ve diğer protokollerle aydınlatma, HVAC, jaluziler, güvenlik ve enerji yönetimini tek platform üzerinde birleştiren akıllı bina çözümleri kuruyoruz.',
            features: [
              'KNX, DALI, LON protokol desteği',
              'Aydınlatma ve HVAC otomasyonu',
              'Jaluzi ve perde kontrolü',
              'Enerji yönetimi ve tasarrufu',
              'Merkezi kontrol paneli',
              'Mobil uygulama ile uzaktan yönetim',
            ],
          },
        ],
        meta: {
          title: 'Akıllı Bina Otomasyon Sistemi Kurulumu | Hızır Teknik',
          description:
            'Enerji yönetimi, konfor ve güvenliği entegre eden akıllı bina otomasyon sistemi kurulumu.',
        },
      },
      {
        title: 'Enerji İzleme ve Yönetim Sistemi Kurulumu',
        description:
          'Tüketim takibi, raporlama ve enerji optimizasyonu için izleme sistemi kurulumu.',
        blocks: [
          {
            title: 'Enerji İzleme ve Yönetim Sistemi Kurulumu',
            description:
              'Tesisinizin elektrik, doğalgaz ve su tüketimini gerçek zamanlı izlemek, analiz etmek ve optimize etmek için enerji yönetim sistemi (EMS) çözümleri kuruyoruz.',
            features: [
              'Elektrik sayacı ve analizör entegrasyonu',
              'Gerçek zamanlı tüketim izleme',
              'Raporlama ve trend analizi',
              'Talep yönetimi ve yük dengeleme',
              'ISO 50001 uyumlu sistemler',
              'Web ve mobil erişim',
            ],
          },
        ],
        meta: {
          title: 'Enerji İzleme ve Yönetim Sistemi Kurulumu | Hızır Teknik',
          description:
            'Tüketim takibi, raporlama ve enerji optimizasyonu için enerji izleme sistemi kurulum hizmetleri.',
        },
      },
      {
        title: 'Yangın Algılama Sistemi Kurulumu',
        description:
          'Duman dedektörü, ısı sensörü ve alarm panelinden oluşan yangın algılama sistemi kurulumu.',
        blocks: [
          {
            title: 'Yangın Algılama Sistemi Kurulumu',
            description:
              'TSE ve EN standardına uygun duman dedektörü, ısı sensörü, el butonları ve yangın alarm panelinden oluşan komple yangın algılama sistemlerini tasarlayıp kuruyoruz. Adresli ve konvansiyonel sistem çözümleri sunuyoruz.',
            features: [
              'Adresli ve konvansiyonel yangın alarm paneli',
              'Duman ve ısı dedektörleri',
              'El butonları ve uyarı sirenleri',
              'İtfaiye ve acil servis bağlantısı',
              'TSE ve EN standartlarına uyumluluk',
              'Yıllık bakım ve test hizmeti',
            ],
          },
        ],
        meta: {
          title: 'Yangın Algılama Sistemi Kurulumu | Hızır Teknik',
          description:
            'Duman dedektörü, ısı sensörü ve alarm panelinden oluşan yangın algılama sistemi kurulum hizmetleri.',
        },
      },
      {
        title: 'Kompanzasyon Panosu Montajı ve Bakımı',
        description:
          'Reaktif güç kompanzasyonu için pano tasarım, montaj ve periyodik bakım.',
        blocks: [
          {
            title: 'Kompanzasyon Panosu Montajı ve Bakımı',
            description:
              'Reaktif güç tüketimini azaltmak, enerji faturasını düşürmek ve güç kalitesini artırmak için kondansatör bazlı kompanzasyon panolarını tasarlıyor, monte ediyor ve bakımını yapıyoruz.',
            features: [
              'Güç faktörü analizi ve hesaplama',
              'Otomatik ve sabit kompanzasyon panoları',
              'Kondansatör ve reaktör montajı',
              'Harmonik filtre entegrasyonu',
              'Periyodik bakım ve kondansatör değişimi',
              'Enerji tasarrufu raporu',
            ],
          },
        ],
        meta: {
          title: 'Kompanzasyon Panosu Montajı ve Bakımı | Hızır Teknik',
          description:
            'Reaktif güç kompanzasyonu için pano tasarım, montaj ve periyodik bakım. Enerji faturasını düşürün.',
        },
      },
      {
        title: 'HMI Panel Kurulumu ve Programlama',
        description:
          'Dokunmatik operatör paneli (HMI) kurulumu, yazılım yapılandırması ve devreye alma.',
        blocks: [
          {
            title: 'HMI Panel Kurulumu ve Programlama',
            description:
              'Endüstriyel makineler ve otomasyon sistemleri için Siemens, Weintek, Schneider ve diğer marka dokunmatik HMI panellerini kuruyor, yazılım geliştiriyor ve devreye alıyoruz.',
            features: [
              'HMI donanım seçimi ve montajı',
              'Ekran tasarımı ve tag konfigürasyonu',
              'PLC haberleşme entegrasyonu',
              'Alarm ve olay yönetimi ekranları',
              'Reçete ve parametre yönetimi',
              'Operatör eğitimi ve dokümantasyon',
            ],
          },
        ],
        meta: {
          title: 'HMI Panel Kurulumu ve Programlama | Hızır Teknik',
          description:
            'Dokunmatik operatör paneli (HMI) kurulumu, yazılım yapılandırması ve devreye alma hizmetleri.',
        },
      },
      {
        title: 'Otomasyon Sistemi Arıza Tespiti ve Onarımı',
        description:
          'PLC, HMI, sürücü ve otomasyon panolarındaki arızaların tespiti ve giderilmesi.',
        blocks: [
          {
            title: 'Otomasyon Sistemi Arıza Tespiti ve Onarımı',
            description:
              'Duraksayan üretim hatlarında ve arızalı otomasyon sistemlerinde hızlı arıza tespiti yapıyor, PLC, HMI, inverter ve kontrol panolarını onarıyoruz. Acil müdahale hizmeti mevcuttur.',
            features: [
              'PLC arıza teşhis ve onarımı',
              'HMI ekran ve yazılım sorunları giderimi',
              'İnverter ve sürücü servisi',
              'Kontrol panosu elektrik arızaları',
              'Acil müdahale hizmeti',
              'Yedek parça temini ve değişimi',
            ],
          },
        ],
        meta: {
          title: 'Otomasyon Sistemi Arıza Tespiti ve Onarımı | Hızır Teknik',
          description:
            'PLC, HMI, sürücü ve otomasyon panolarındaki arızaların tespiti ve giderilmesi. Hızlı müdahale.',
        },
      },
      {
        title: 'Akıllı Ev Sistemi Kurulumu',
        description:
          'Aydınlatma, perde, ısıtma ve güvenlik sistemlerinin entegre akıllı ev otomasyonu ile kontrolü.',
        blocks: [
          {
            title: 'Akıllı Ev Sistemi Kurulumu',
            description:
              'Evinizin aydınlatma, perde, klima, ısıtma, güvenlik ve eğlence sistemlerini tek bir uygulama veya sesli asistan üzerinden kontrol edin. KNX, Z-Wave, Zigbee ve Wi-Fi tabanlı çözümler sunuyoruz.',
            features: [
              'Aydınlatma senaryosu ve kontrolü',
              'Motorlu perde ve jaluzi sistemi',
              'Isıtma ve soğutma otomasyonu',
              'Güvenlik kamera ve alarm entegrasyonu',
              'Sesli asistan (Google, Amazon, Apple) desteği',
              'Mobil uygulama ile uzaktan kontrol',
            ],
          },
        ],
        meta: {
          title: 'Akıllı Ev Sistemi Kurulumu | Hızır Teknik',
          description:
            'Aydınlatma, perde, ısıtma ve güvenlik sistemlerinin entegre akıllı ev otomasyonu ile kontrolü. Konforlu ve güvenli yaşam.',
        },
      },
    ]

    let createdCount = 0
    for (const serviceData of services) {
      const service = await payload.create({
        collection: 'services',
        data: {
          title: serviceData.title,
          description: serviceData.description,
          featured: false,
          related_category: category.id,
          blocks: serviceData.blocks.map(block => ({
            blockType: 'service-description-block' as const,
            title: block.title,
            description: block.description,
            features: block.features.map(feature => ({ feature })),
          })),
          meta: serviceData.meta,
          _status: 'draft',
        },
      })
      payload.logger.info(`  ✅ Hizmet oluşturuldu: ${service.title} (ID: ${service.id})`)
      createdCount++
    }

    payload.logger.info(
      `\n🎉 Tamamlandı! Toplam ${createdCount} hizmet "${category.title}" kategorisi altında oluşturuldu.`,
    )
  } catch (error) {
    payload.logger.error('❌ Hata oluştu:')
    payload.logger.error(error)
    throw error
  }
}

// Doğrudan çalıştırıldığında seed fonksiyonunu başlat
if (import.meta.url === `file://${process.argv[1]}`) {
  seedOtomasyonCategory()
    .then(() => {
      console.log('✅ Otomasyon kategori seed işlemi tamamlandı.')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Seed işlemi başarısız:', error)
      process.exit(1)
    })
}
