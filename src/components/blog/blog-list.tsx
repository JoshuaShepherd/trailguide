import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, Star } from 'lucide-react'
import { BlogPost } from '@/lib/blog'

interface BlogListProps {
  post: BlogPost
}

export default function BlogList({ post }: BlogListProps) {
  const maxTags = 3
  const displayedTags = post.tags.slice(0, maxTags)
  const remainingTags = post.tags.length - maxTags

  return (
    <article className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="flex gap-4 p-6">
        {/* Thumbnail */}
        {post.coverImage && (
          <div className="relative w-32 h-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            {/* Title and Meta */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-trailguide-evergreen text-white px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide">
                  {post.category}
                </span>
                {post.featured && (
                  <div className="bg-trailguide-bronze text-white px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </div>
                )}
                {post.series && (
                  <span className="text-xs text-trailguide-bronze font-medium">
                    Part {post.series.part} in &ldquo;{post.series.name}&rdquo;
                  </span>
                )}
              </div>
              
              <Link href={`/blog/${post.slug}`} className="group">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-trailguide-evergreen transition-colors mb-3 line-clamp-2 leading-relaxed">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-700 line-clamp-2 mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Tag className="h-3 w-3 text-gray-400" />
                  {displayedTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
                      className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium hover:bg-trailguide-evergreen hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                  {remainingTags > 0 && (
                    <span className="text-xs text-gray-500 font-medium">
                      +{remainingTags}
                    </span>
                  )}
                </div>
              )}

              {/* Author and Date */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="h-3 w-3" />
                  )}
                  <Link
                    href={`/authors/${post.author.handle}`}
                    className="hover:text-trailguide-evergreen font-medium"
                  >
                    {post.author.name}
                  </Link>
                </div>
                
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
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
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
