import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, Star } from 'lucide-react'
import { BlogPost } from '@/lib/blog'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const maxTags = 2
  const displayedTags = post.tags.slice(0, maxTags)
  const remainingTags = post.tags.length - maxTags

  return (
    <article className={cn(
      'group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100',
      'hover:scale-[1.02] hover:-translate-y-1',
      featured && 'ring-2 ring-trailguide-bronze/20'
    )}>
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-trailguide-bronze text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-trailguide-evergreen text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {post.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <Link href={`/blog/${post.slug}`} className="group">
            <h3 className={cn(
              'font-bold text-gray-900 group-hover:text-trailguide-evergreen transition-colors mb-2',
              featured ? 'text-xl' : 'text-lg'
            )}>
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Metadata */}
        <div className="space-y-3">
          {/* Author and Date */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              ) : (
                <User className="h-4 w-4" />
              )}
              <Link
                href={`/authors/${post.author.handle}`}
                className="hover:text-trailguide-evergreen font-medium"
              >
                {post.author.name}
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              {post.readingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-gray-400" />
              {displayedTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-trailguide-evergreen hover:text-white transition-colors"
                >
                  {tag}
                </Link>
              ))}
              {remainingTags > 0 && (
                <span className="text-xs text-gray-500 font-medium">
                  +{remainingTags} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Series indicator */}
        {post.series && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="text-xs text-trailguide-bronze font-medium">
              Part {post.series.part}{post.series.total && ` of ${post.series.total}`} in &ldquo;{post.series.name}&rdquo;
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
