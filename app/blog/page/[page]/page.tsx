import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllPosts, paginatePosts } from '@/lib/blog'
import BlogCard from '@/components/blog/blog-card'
import Pagination, { PaginationInfo } from '@/components/ui/pagination'

interface BlogPageProps {
  params: {
    page: string
  }
}

const POSTS_PER_PAGE = 9

export async function generateStaticParams() {
  const allPosts = await getAllPosts()
  const { pagination } = paginatePosts(allPosts, 1, POSTS_PER_PAGE)
  const pages = Array.from({ length: pagination.total }, (_, i) => ({
    page: (i + 1).toString()
  }))
  
  return pages.slice(1) // Remove page 1 since it's handled by the main blog page
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const pageNumber = parseInt(params.page)
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    return { title: 'Page Not Found' }
  }

  return {
    title: `Blog - Page ${pageNumber} | TrailGuide`,
    description: `Browse our latest nonprofit leadership insights and strategies - Page ${pageNumber}`,
    robots: pageNumber > 1 ? 'noindex' : 'index,follow',
  }
}

export default async function BlogPagePaginated({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page)
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const { posts, pagination } = paginatePosts(allPosts, pageNumber, POSTS_PER_PAGE)
  
  if (posts.length === 0 && pageNumber > 1) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nonprofit Leadership Blog
          </h1>
          <p className="text-xl text-indigo-100">
            Insights, strategies, and real-world advice for nonprofit leaders
          </p>
          {pageNumber > 1 && (
            <div className="mt-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Page {pageNumber} of {pagination.total}
              </span>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Pagination Info */}
        <div className="mb-8">
          <PaginationInfo
            currentPage={pagination.current}
            totalPages={pagination.total}
            totalItems={posts.length * pagination.total} // Approximate
            itemsPerPage={POSTS_PER_PAGE}
            itemName="articles"
            className="text-center"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16">
          <Pagination
            currentPage={pagination.current}
            totalPages={pagination.total}
            basePath="/blog"
          />
        </div>
      </div>
    </div>
  )
}
