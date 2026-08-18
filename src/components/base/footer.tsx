import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'
import { icons } from './icons'

export default function Footer({ siteSettings }: { siteSettings: any }) {
  const { contact, companyName } = siteSettings || {}
  const Logo = icons.logo

  const phoneDisplay = contact?.phone || '0540 775 12 50'
  const whatsappDisplay = contact?.whatsapp || '0540 775 12 50'
  const emailDisplay = contact?.email || 'bilgi@hizirteknik.com'
  const addressDisplay = contact?.address || 'Şehit Osman Avcı Mah. 1404. Cadde Vera City 2/AG, Eryaman / Etimesgut / Ankara'

  // Default rich links so footer is 100% full on every page
  const servicesLinks = [
    { title: 'Kaskad Isıtma Sistemleri', href: '/ankara/kaskad-isitma-sistemleri' },
    { title: 'Isı Pompası Montaj & Bakım', href: '/ankara/isi-pompasi-montaj-ve-bakimi' },
    { title: 'VRF / VRV İklimlendirme', href: '/ankara/vrfvrv-sistem-kurulumu' },
    { title: 'Sıhhi Tesisat & Su Kaçağı', href: '/ankara/su-kacagi-tespiti-ve-tamiri' },
    { title: 'Hidrofor & Arıtma Kurulumu', href: '/ankara/hidrofor-tesisati-kurulumu' },
    { title: 'Havuz Sistemleri & Bakım', href: '/ankara/havuz-bakimi-ve-temizligi' },
    { title: 'Elektrik Panosu & Kaçak Akım', href: '/ankara/kacak-akim-role-montaji' },
    { title: 'Otomatik Sulama Sistemleri', href: '/ankara/sulama-sistemi-kurulumu' },
  ]

  const quickLinks = [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Kurumsal Hakkımızda', href: '/hakkimizda' },
    { title: 'Tüm Hizmetlerimiz', href: '/hizmetlerimiz' },
    { title: 'Kurumsal Referanslarımız', href: '/referanslarimiz' },
    { title: 'Uygulama Galerisi', href: '/galeri' },
    { title: '7/24 İletişim Hattı', href: '/iletisim' },
  ]

  return (
    <footer className="w-full bg-stone-950 text-white border-t border-stone-800 pt-16 pb-24 relative overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo className="h-9 w-auto text-white" aria-label={companyName || 'Hızır Teknik'} />
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed font-normal">
              Ankara genelinde 25 yıldır kurumsal mühendislik disiplini ile iklimlendirme, kaskad, vrf, sıhhi tesisat, havuz ve elektrik tamirat hizmetleri sunuyoruz.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {contact?.socialLinks?.facebook && (
                <Link
                  href={contact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <IconBrandFacebook className="h-4 w-4" />
                </Link>
              )}
              {contact?.socialLinks?.instagram && (
                <Link
                  href={contact.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <IconBrandInstagram className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Column 2: Hizmetlerimiz */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white tracking-wider uppercase border-b border-stone-800 pb-2">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs text-stone-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="h-3 w-3 text-stone-600 group-hover:text-blue-400 transition-colors shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Önemli Bağlantılar */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white tracking-wider uppercase border-b border-stone-800 pb-2">
              Önemli Bağlantılar
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs text-stone-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="h-3 w-3 text-stone-600 group-hover:text-blue-400 transition-colors shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white tracking-wider uppercase border-b border-stone-800 pb-2">
              İletişim Bilgileri
            </h3>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{emailDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5 font-extrabold text-white text-sm">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="tel:05407751250" className="hover:text-blue-400 transition-colors">
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-emerald-400 font-bold">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <a
                  href="https://wa.me/905407751250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: {whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-stone-400">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{addressDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Hızır Teknik. Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-1 text-[11px] text-stone-400 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-500 inline" />
            <span>TSE Yetkili & Garantili Teknik Servis Altyapısı</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
