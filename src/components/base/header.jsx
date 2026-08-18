'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, Mail, MapPin, Facebook, Instagram, Menu, MessageSquare } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { icons } from './icons'

export default function Header({ siteSettings }) {
  const { contact, companyName, social } = siteSettings || {}
  const mainNavigation = [
    { title: 'Ana Sayfa', slug: 'ana-sayfa' },
    { title: 'Hakkımızda', slug: 'hakkimizda' },
    { title: 'Hizmetlerimiz', slug: 'hizmetlerimiz' },
    { title: 'Referanslarımız', slug: 'referanslarimiz' },
    { title: 'Galeri', slug: 'galeri' },
    { title: 'İletişim', slug: 'iletisim' },
  ]

  const Logo = icons.logo

  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const phoneNum = contact?.phone || '0540 775 12 50'

  return (
    <>
      {/* Main Navigation - Deep Obsidian Dark Theme Header */}
      <header className="sticky left-0 top-0 z-50 border-b border-stone-800 bg-slate-950/90 backdrop-blur-xl shadow-2xl">
        <div className="w-full flex py-2.5 items-center justify-between px-4 md:px-8 max-w-screen-2xl mx-auto">
          {/* Mobile Popover Phone Button */}
          <div className="block md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-400 hover:text-white hover:bg-stone-800 h-10 w-10 rounded-xl"
                  aria-label="Telefon Numaraları"
                >
                  <Phone className="!size-5 shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 bg-stone-900 border-stone-800 text-white shadow-2xl rounded-2xl">
                <div className="grid gap-3">
                  <Link
                    href={`tel:${phoneNum}`}
                    className="flex items-center space-x-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>{phoneNum}</span>
                  </Link>
                  <a
                    href="https://wa.me/905407751250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 shrink-0" />
                    <span>WhatsApp 7/24</span>
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-white md:h-10" aria-label={companyName || 'Hızır Teknik'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {mainNavigation?.map((item) => {
                  const isActive =
                    pathname === '/' + item.slug ||
                    (item.slug === 'ana-sayfa' && pathname === '/') ||
                    pathname.includes(item.slug.slice(0, 6))

                  if (item.slug === 'iletisim') {
                    return (
                      <NavigationMenuItem key={item.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/iletisim"
                            className={`group flex items-center justify-center px-5 py-2 text-xs font-black rounded-xl transition-all shadow-lg ${
                              isActive
                                ? 'bg-blue-600 text-white ring-2 ring-blue-400/50'
                                : 'bg-blue-600 hover:bg-blue-500 text-white'
                            }`}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  }

                  return (
                    <NavigationMenuItem key={item.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.slug === 'ana-sayfa' ? '/' : '/' + item.slug}
                          className={`group flex items-center justify-center px-4 py-2 text-xs font-extrabold transition-all rounded-xl ${
                            isActive
                              ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                              : 'text-stone-300 hover:text-white hover:bg-stone-900/80'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-stone-300 hover:bg-stone-800 hover:text-white focus:outline-none">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menüyü Aç</span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-full flex-col gap-4 overflow-y-auto bg-slate-950 text-white border-l border-stone-800 sm:w-[380px]"
              >
                <SheetHeader className="space-y-2 pb-4 border-b border-stone-800">
                  <SheetTitle className="space-y-1 flex items-center justify-center text-center flex-col">
                    <Logo className="h-12 w-auto text-white" aria-label={companyName} />
                    <p className="text-xs text-blue-400 font-semibold mt-1">
                      Hızır Teknik • Profesyonel Mühendislik Hizmetleri
                    </p>
                  </SheetTitle>
                </SheetHeader>

                {/* Company Cover Image */}
                <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-stone-800">
                  <Image
                    style={{ objectPosition: '50% 35%' }}
                    src="/hizir-teknik-tamirat-1.jpg"
                    alt="Hızır Teknik"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2 py-2">
                  {mainNavigation?.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug === 'ana-sayfa' ? '/' : '/' + item.slug}
                      className={`flex items-center space-x-2 rounded-xl px-4 py-3 text-sm font-extrabold transition-all ${
                        pathname === '/' + item.slug ||
                        (item.slug === 'ana-sayfa' && pathname === '/')
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>

                {/* Contact Information */}
                <div className="mt-auto space-y-4 border-t border-stone-800 pt-4">
                  <div className="space-y-3">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-stone-400">
                      7/24 Müşteri Destek & Servis
                    </h3>
                    <div className="space-y-2">
                      <a
                        href={`tel:${phoneNum}`}
                        className="flex items-center space-x-2.5 text-white font-extrabold text-sm hover:text-blue-400 transition-colors"
                      >
                        <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                        <span>{phoneNum}</span>
                      </a>
                      <a
                        href="https://wa.me/905407751250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2.5 text-emerald-400 font-extrabold text-sm hover:text-emerald-300 transition-colors"
                      >
                        <MessageSquare className="h-4 w-4 shrink-0" />
                        <span>WhatsApp: 0540 775 12 50</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
