import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Post } from '@/payload-types'
import { formatDate } from '@/lib/utils'

export function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Son Yazılar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={
                    (typeof post.featured_image === 'object' && post.featured_image?.url) ||
                    '/placeholder.svg'
                  }
                  alt={(typeof post.featured_image === 'object' && post.featured_image?.alt) || ''}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="line-clamp-2 font-medium text-stone-900 group-hover:text-brand-600">
                  {post.title}
                </h3>
                <time className="text-sm text-stone-600">{formatDate(post.createdAt)}</time>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
