import Link from 'next/link'
import { ArrowLeft, Tag } from 'lucide-react'
import { BlogPost } from '@/lib/blog'
import BlogCard from './blog-card'

interface TagArchiveProps {
  tag: string
  posts: BlogPost[]
  allTags: string[]
}

export default function TagArchive({ tag, posts, allTags }: TagArchiveProps) {
  const relatedTags = allTags.filter(t => 
    t.toLowerCase() !== tag.toLowerCase()
  ).slice(0, 8)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link
                  href="/blog"
                  className="hover:text-trailguide-evergreen"
                >
                  Blog
                </Link>
                <span>/</span>
                <Link
                  href="/blog"
                  className="hover:text-trailguide-evergreen"
                >
                  Tags
                </Link>
                <span>/</span>
                <span className="text-gray-900 capitalize">{tag}</span>
              </div>
            </nav>

            {/* Tag Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-trailguide-evergreen text-white p-3 rounded-lg">
                <Tag className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 capitalize">
                  {tag}
                </h1>
                <p className="text-gray-600 mt-1">
                  {posts.length} {posts.length === 1 ? 'article' : 'articles'} tagged with &ldquo;{tag}&rdquo;
                </p>
              </div>
            </div>

            {/* Tag Description */}
            <div className="max-w-3xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {getTagDescription(tag)}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Posts Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Related Tags */}
          {relatedTags.length > 0 && (
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Explore Other Topics
              </h3>
              <div className="flex flex-wrap gap-3">
                {relatedTags.map((relatedTag) => (
                  <Link
                    key={relatedTag}
                    href={`/blog/tags/${encodeURIComponent(relatedTag.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-trailguide-evergreen hover:text-white transition-colors"
                  >
                    {relatedTag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              View All Articles
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function getTagDescription(tag: string): string {
  const descriptions: Record<string, string> = {
    'trailmap': 'Strategic frameworks and assessments for AI readiness in nonprofit organizations.',
    'strategy': 'High-level approaches to AI adoption, organizational change, and strategic planning.',
    'getting-started': 'Essential guidance for nonprofits beginning their AI journey.',
    'grants': 'Tools, processes, and insights for AI-enhanced grant writing and funding strategies.',
    'process': 'Systematic approaches to implementing AI solutions in nonprofit operations.',
    'efficiency': 'Ways AI can streamline operations and reduce administrative burden.',
    'case-study': 'Real-world examples of successful AI implementations in nonprofit organizations.',
    'operations': 'Practical applications of AI in day-to-day nonprofit management.',
    'board': 'Resources for nonprofit boards navigating AI adoption and governance.',
    'reporting': 'AI-enhanced approaches to impact measurement and stakeholder communication.',
    'leadership': 'Strategic guidance for nonprofit executives leading AI transformation.',
    'templates': 'Ready-to-use resources and frameworks for AI implementation.',
  }

  return descriptions[tag.toLowerCase()] || 
    `Insights and resources focused on ${tag} for nonprofit organizations implementing AI solutions.`
}
