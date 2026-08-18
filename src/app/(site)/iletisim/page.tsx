import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Building2,
  Navigation,
  AlertCircle,
} from 'lucide-react'

export const metadata = {
  title: 'İletişim & Konum Bilgileri | Hızır Teknik Ankara',
  description:
    "Eryaman Etimesgut Şehit Osman Avcı Mah. Vera City merkezli Hızır Teknik. Telefon: 0540 775 12 50, dükkan adresi, 7/24 WhatsApp hattı ve canlı Google Haritalar.",
}

export default function IletisimPage() {
  const shopAddress = 'Şehit Osman Avcı Mahallesi 1404. Cadde Vera City 2/AG, Eryaman / Etimesgut / Ankara'
  const shopTitle = 'Hızır Teknik - Servis & Mağaza Deposu'
  
  // Direct Google Maps Search & Pin URL with business title "Hızır Teknik"
  const mapsQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Hızır Teknik Şehit Osman Avcı Mahallesi 1404. Cadde Vera City 2/AG Eryaman Etimesgut Ankara'
  )}`

  // High Accuracy Google Maps Embed URL with pinpoint marker for Hızır Teknik
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Hızır Teknik, Şehit Osman Avcı Mahallesi 1404. Cadde Vera City 2/AG, Eryaman Etimesgut Ankara'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  const contactInfo = [
    {
      icon: Phone,
      title: '7/24 Müşteri Destek & Servis Hattı',
      value: '0540 775 12 50',
      subtext: 'Acil tamirat ve keşif talepleriniz için 7/24 açık.',
      actionText: 'Hemen Ara',
      actionUrl: 'tel:05407751250',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Arıza & Keşif Hattı',
      value: '0540 775 12 50',
      subtext: 'Fotoğraf veya konum göndererek anında servis çağırın.',
      actionText: 'WhatsApp ile Yazın',
      actionUrl:
        'https://wa.me/905407751250?text=Merhaba%2C%207%2F24%20teknik%20servis%20ve%20ke%C5%9Fif%20talebi%20i%C3%A7in%20ileti%C5%9Fime%20ge%C3%A7iyorum.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: MapPin,
      title: 'Dükkan & Mağaza Adresi',
      value: shopAddress,
      subtext: 'Eryaman / Etimesgut / Ankara',
      actionText: 'Google Haritalarda Aç',
      actionUrl: mapsQueryUrl,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
    },
    {
      icon: Mail,
      title: 'Kurumsal E-Posta Adresi',
      value: 'bilgi@hizirteknik.com',
      subtext: 'Kurumsal teklifler ve şartname talepleri için.',
      actionText: 'E-Posta Gönder',
      actionUrl: 'mailto:bilgi@hizirteknik.com',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Top Hero Banner */}
      <section className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-stone-900 to-slate-950 text-white py-16 md:py-20 border-b border-stone-800 relative overflow-hidden">
        {/* Glow Lights */}
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" />
            Hızır Teknik İletişim & Konum Rehberi
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            İletişim & Dükkan Konum Bilgileri
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Eryaman Vera City dükkan adresimiz, telefon numaralarımız ve çalışma saatlerimiz ile bize istediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-16">
        {/* 4 Key Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 space-y-4 hover:border-blue-500/50 shadow-xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div
                    className={`h-12 w-12 rounded-2xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center ${item.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-400">{item.title}</h3>
                  <p className="text-base font-black text-white leading-snug">{item.value}</p>
                  {item.subtext && (
                    <p className="text-xs text-stone-300 font-medium leading-relaxed">{item.subtext}</p>
                  )}
                </div>

                {item.actionUrl && (
                  <div className="pt-2 border-t border-stone-800/80">
                    <a
                      href={item.actionUrl}
                      target={item.actionUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>{item.actionText}</span>
                      <Navigation className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Detailed Working Hours Section Banner */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-stone-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Çalışma & Nöbetçi Ekip Saatleri
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Dükkan Mağaza Mesaisi & 7/24 Acil Teknik Servis
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              Pazartesi - Cumartesi Açık
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-stone-950/80 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-xs font-bold text-stone-400 block">Dükkan & Mağaza Mesaisi</span>
              <p className="text-lg font-black text-white">Pazartesi - Cumartesi</p>
              <p className="text-xs text-blue-400 font-extrabold">09:00 - 18:00 Saatleri Arasında</p>
            </div>

            <div className="p-5 bg-stone-950/80 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-xs font-bold text-stone-400 block">Pazar Günü Nöbet Durumu</span>
              <p className="text-lg font-black text-rose-400">Pazar Günü Kapalı</p>
              <p className="text-xs text-stone-400 font-medium">Mağazamız pazar günleri kapalıdır.</p>
            </div>

            <div className="p-5 bg-stone-950/80 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 block flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5" />
                Akşam 18:00 Sonrası Acil Servis
              </span>
              <p className="text-base font-black text-white">Pazartesi - Cumartesi Saat 18:00&apos;den Sonra</p>
              <p className="text-xs text-emerald-400 font-bold">7/24 Acil Nöbetçi Mobil Teknik Ekibimiz Hizmet Vermektedir.</p>
            </div>
          </div>
        </div>

        {/* Google Maps & Direct Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Embedded Google Maps (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900/90 rounded-3xl p-6 md:p-8 border border-stone-800 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
                  Canlı Dükkan Konumu
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Hızır Teknik Vera City Dükkan Konumu
                </h2>
              </div>
              <a
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-lg transition-all border border-blue-400/30 w-fit shrink-0"
              >
                <Navigation className="h-4 w-4" />
                <span>Google Haritalarda Aç</span>
              </a>
            </div>

            {/* Address Line Badge */}
            <div className="p-4 bg-stone-950/90 rounded-2xl border border-stone-800 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-stone-400 block uppercase tracking-wider">Tam Açık Adres</span>
                <p className="text-sm font-black text-white leading-relaxed">{shopAddress}</p>
              </div>
            </div>

            {/* Responsive Map Container */}
            <div className="relative w-full h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-inner group">
              <iframe
                title="Hızır Teknik Vera City Eryaman Ankara Dükkan Konumu"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              />
              
              {/* Direct Clickable Overlay Banner */}
              <a
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-stone-700 hover:border-blue-400 px-3.5 py-2 rounded-xl text-xs font-extrabold text-white flex items-center gap-2 shadow-2xl transition-all"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Hızır Teknik • Haritalarda Aç</span>
                <Navigation className="h-3.5 w-3.5 text-blue-400" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-stone-400 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>TSE Belgeli Kurumsal Servis & Malzeme Deposu</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-400" />
                <span>Hızır Teknik Vera City 2/AG</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Contact & Form (5 cols) */}
          <div className="lg:col-span-5 bg-stone-900/90 rounded-3xl p-6 md:p-8 border border-stone-800 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="space-y-2 border-b border-stone-800 pb-4 text-center sm:text-left">
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
                Anında Ulaşın
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Hızlı Servis & Arıza Bildirimi
              </h2>
              <p className="text-xs text-stone-300">
                Aşağıdaki butonlardan tek tıkla bize telefon edin veya WhatsApp&apos;tan arızanızı iletin.
              </p>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <a
              href="https://wa.me/905407751250?text=Merhaba%2C%207%2F24%20teknik%20servis%20ve%20ke%C5%9Fif%20talebi%20i%C3%A7in%20ileti%C5%9Fime%20ge%C3%A7iyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm py-4 px-4 rounded-xl shadow-xl transition-all border border-emerald-400/30 group"
            >
              <MessageSquare className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span>WhatsApp ile Hızlı Yazın (0540 775 12 50)</span>
            </a>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-stone-800" />
              <span className="flex-shrink mx-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                veya Direkt Telefon Edin
              </span>
              <div className="flex-grow border-t border-stone-800" />
            </div>

            <a
              href="tel:05407751250"
              className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm py-4 px-4 rounded-xl shadow-xl transition-all border border-blue-400/30 group"
            >
              <Phone className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Hemen Arayın (0540 775 12 50)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
