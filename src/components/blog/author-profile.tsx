import Link from 'next/link'
import Image from 'next/image'
import { User, ExternalLink, ArrowLeft } from 'lucide-react'
import { Author, BlogPost } from '@/lib/blog'
import BlogCard from './blog-card'

interface AuthorProfileProps {
  author: Author
  posts: BlogPost[]
}

export default function AuthorProfile({ author, posts }: AuthorProfileProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/blog"
                className="flex items-center text-trailguide-evergreen hover:text-trailguide-evergreen/80 text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </nav>

            {/* Author Info */}
            <div className="flex gap-8 items-start">
              {author.avatar ? (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={120}
                  height={120}
                  className="rounded-full shrink-0"
                />
              ) : (
                <div className="w-30 h-30 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                  <User className="h-12 w-12 text-gray-600" />
                </div>
              )}

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {author.name}
                </h1>
                
                {author.role && (
                  <p className="text-xl text-trailguide-evergreen font-medium mb-4">
                    {author.role}
                  </p>
                )}

                {author.bio && (
                  <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
                    {author.bio}
                  </p>
                )}

                {/* Social Links */}
                {author.social && (
                  <div className="flex gap-4">
                    {author.social.website && (
                      <a
                        href={author.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Website
                      </a>
                    )}
                    {author.social.linkedin && (
                      <a
                        href={author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                    {author.social.twitter && (
                      <a
                        href={author.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Twitter
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Posts Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Articles by {author.name}
            </h2>
            <p className="text-gray-600">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No articles yet
                </h3>
                <p className="text-gray-600">
                  {author.name} hasn&apos;t published any articles yet. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
