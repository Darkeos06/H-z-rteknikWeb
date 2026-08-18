import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, BookOpen, Clock, ChevronRight, ShieldCheck, Phone } from 'lucide-react'

export const revalidate = 3600 // Cache for 1 hour

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })

  const postsData = await payload.find({
    collection: 'posts',
    limit: 100,
    where: { _status: { equals: 'published' } },
  })

  const posts = postsData.docs

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
            Teknik Rehber & Mühendislik Bilgi Bankası
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Mühendislik & İklimlendirme Blogu
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Kaskad sistem seçimleri, VRF iklimlendirme tasarrufu, su tesisatı sızdırmazlık standartları ve enerji verimliliği üzerine rehber yazılar.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const coverImage = post.meta?.image as any

            return (
              <article
                key={post.id}
                className="group h-full shadow-md hover:shadow-2xl border border-stone-800 rounded-3xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between bg-stone-900/80 backdrop-blur-xl"
              >
                <div>
                  {/* Article Image Cover */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={coverImage?.url || '/hizir-teknik-tamirat-1.jpg'}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-extrabold shadow-md backdrop-blur-md">
                        Mühendislik Rehberi
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 space-y-3">
                    <h2 className="text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-stone-400 font-medium leading-relaxed line-clamp-3">
                      {post.meta?.description || 'Teknik rehber ve mühendislik ipuçları.'}
                    </p>
                  </div>
                </div>

                {/* Article Footer Link */}
                <div className="p-6 pt-0 border-t border-stone-800/80 pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-medium flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-blue-400" />
                    5 Dk Okuma
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Devamını Oku</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Corporate Trust Footer Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-stone-900 via-stone-900 to-blue-950 rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
              Teknik Danışmanlık
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Sorularınız İçin Mühendislik Ekibimizle Görüşün
            </h3>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
              Kaskad, VRF, hidrofor veya tesisat projeniz hakkında teknik ekibimizden doğrudan bilgi alabilirsiniz.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-4 rounded-xl shadow-xl transition-all shrink-0"
          >
            <Phone className="h-4 w-4" />
            <span>Mühendisle Görüş</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
