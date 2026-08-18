'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Post } from '@/payload-types'
import { formatDate } from '@/lib/utils'

export function BlogGrid({ posts }: { posts: Post[] }) {
  const [visiblePosts, setVisiblePosts] = useState(6)

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.slice(0, visiblePosts).map((post) => (
          <Card
            key={post.slug}
            className="group overflow-hidden transition-all duration-300 hover:-transtone-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={typeof post.featured_image === 'object' && post.featured_image.url}
                alt={
                  (typeof post.featured_image === 'object' && post.featured_image.alt) ||
                  post.title + ' görseli'
                }
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4">
                <Badge className="bg-brand-600 hover:bg-brand-700">
                  {typeof post.post_category === 'object' && post.post_category.title}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <time className="text-sm text-stone-600">{formatDate(post.createdAt)}</time>
              <h3 className="mb-2 mt-1 text-xl font-semibold text-stone-900">{post.title}</h3>
              <p className="mb-4 text-stone-600">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-brand-600 transition-colors hover:text-brand-700"
              >
                Devamını Oku
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {visiblePosts < posts.length && (
        <div className="flex justify-center">
          <Button onClick={loadMore} className="bg-brand-600 hover:bg-brand-700">
            Daha Fazla Göster
          </Button>
        </div>
      )}
    </div>
  )
}
