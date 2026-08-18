'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Post } from '@/payload-types'
import { formatDate } from '@/lib/utils'

interface BlogCategoryGridProps {
  category: string
  posts: Post[]
}

export function BlogCategoryGrid({ category, posts }: BlogCategoryGridProps) {
  const [sortBy, setSortBy] = useState('latest')
  const [visiblePosts, setVisiblePosts] = useState(6)

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  })

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-slate-900">
          {category} ({posts.length})
        </h2>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sıralama" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">En Yeni</SelectItem>
            <SelectItem value="oldest">En Eski</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {sortedPosts.slice(0, visiblePosts).map((post) => (
          <Card
            key={post.slug}
            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={typeof post.featured_image === 'object' && post.featured_image?.url}
                alt={
                  (typeof post.featured_image === 'object' && post.featured_image?.alt) ||
                  post.title + ' görseli'
                }
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4">
                <Badge className="bg-brand-600 hover:bg-brand-700">
                  {typeof post.post_category === 'object' && post.post_category?.title}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <time className="text-sm text-slate-600">{formatDate(post.createdAt)}</time>
              <h3 className="mb-2 mt-1 text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mb-4 text-slate-600">{post.description}</p>
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
          <Button onClick={loadMore} size="lg" className="bg-brand-600 hover:bg-brand-700">
            Daha Fazla Göster
          </Button>
        </div>
      )}
    </div>
  )
}
