import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags, getPostsByTag, paginatePosts } from '@/lib/blog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/blog/blog-card'
import Pagination, { PaginationInfo } from '@/components/ui/pagination'
import { ArrowLeft, Tag, TrendingUp, Filter } from 'lucide-react'

interface TagPageProps {
  params: {
    tag: string
  }
  searchParams: {
    page?: string
  }
}

const POSTS_PER_PAGE = 12

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-')
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tagName = decodeURIComponent(params.tag).replace(/-/g, ' ')
  const formattedTag = tagName.charAt(0).toUpperCase() + tagName.slice(1)
  
  return {
    title: `${formattedTag} Articles | TrailGuide Blog`,
    description: `Explore all articles tagged with "${formattedTag}" - insights and strategies for nonprofit leaders.`,
    openGraph: {
      title: `${formattedTag} Articles | TrailGuide`,
      description: `Explore all articles tagged with "${formattedTag}" - insights and strategies for nonprofit leaders.`,
    },
  }
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const tagSlug = decodeURIComponent(params.tag)
  const tagName = tagSlug.replace(/-/g, ' ')
  const page = parseInt(searchParams.page || '1')
  
  // Find the actual tag from our posts (case insensitive)
  const allTags = await getAllTags()
  const matchingTag = allTags.find(tag => 
    tag.toLowerCase().replace(/\s+/g, '-') === tagSlug.toLowerCase()
  )
  
  if (!matchingTag) {
    notFound()
  }
  
  const tagPosts = await getPostsByTag(matchingTag)
  
  if (tagPosts.length === 0) {
    notFound()
  }
  
  const { posts, pagination } = paginatePosts(tagPosts, page, POSTS_PER_PAGE)
  
  if (posts.length === 0 && page > 1) {
    notFound()
  }
  
  const formattedTag = matchingTag.charAt(0).toUpperCase() + matchingTag.slice(1)

  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-indigo-200">
              <Link
                href="/blog"
                className="hover:text-white transition-colors flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Blog
              </Link>
              <span>/</span>
              <span>Tags</span>
              <span>/</span>
              <span className="text-white font-medium">{formattedTag}</span>
            </div>
          </nav>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Tag className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              {formattedTag}
            </h1>
            
            <p className="text-xl text-indigo-100 mb-6">
              {tagPosts.length} {tagPosts.length === 1 ? 'article' : 'articles'} tagged with "{formattedTag}"
            </p>
            
            <Badge className="bg-white/20 text-white text-base px-4 py-2">
              <Tag className="h-4 w-4 mr-2" />
              {formattedTag}
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Tag Info */}
              <div className="bg-white rounded-lg border border-trailguide-border p-6">
                <h3 className="text-lg font-bold text-trailguide-neutral mb-4">About This Tag</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-trailguide-slate">Total Articles</span>
                    <span className="font-semibold text-trailguide-neutral">{tagPosts.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-trailguide-slate">Current Page</span>
                    <span className="font-semibold text-trailguide-neutral">{page} of {pagination.total}</span>
                  </div>
                </div>
              </div>
              
              {/* Related Tags */}
              <div className="bg-white rounded-lg border border-trailguide-border p-6">
                <h3 className="text-lg font-bold text-trailguide-neutral mb-4">Related Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 8).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Badge 
                        variant={tag === matchingTag ? "default" : "outline"}
                        className="hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6">
                <h3 className="text-lg font-bold text-trailguide-neutral mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link href="/blog">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Blog
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link href="/blog/tags">
                      <Filter className="h-4 w-4 mr-2" />
                      Browse All Tags
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link href="/newsletter">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Get Weekly Updates
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Pagination Info */}
            <div className="mb-8">
              <PaginationInfo
                currentPage={pagination.current}
                totalPages={pagination.total}
                totalItems={tagPosts.length}
                itemsPerPage={POSTS_PER_PAGE}
                itemName="articles"
              />
            </div>
            
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            
            {/* Pagination */}
            {pagination.total > 1 && (
              <Pagination
                currentPage={pagination.current}
                totalPages={pagination.total}
                basePath={`/blog/tags/${tagSlug}`}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-trailguide-slate/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
            Stay Updated on {formattedTag}
          </h2>
          <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
            Get the latest insights and strategies delivered to your inbox. 
            Join thousands of nonprofit leaders who start their week with our newsletter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-600/90">
              <Link href="/newsletter">
                Subscribe to Newsletter
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                Browse All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
