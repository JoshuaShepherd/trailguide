import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tag, Hash } from 'lucide-react'

export const metadata = {
  title: 'Topics & Tags - TrailGuide Blog',
  description: 'Browse blog posts by topic and category.',
}

export default function BlogTagsPage() {
  const sampleTags = [
    { name: 'AI', count: 5, slug: 'ai' },
    { name: 'Nonprofit', count: 8, slug: 'nonprofit' },
    { name: 'Ethics', count: 3, slug: 'ethics' },
    { name: 'Thought Leadership', count: 4, slug: 'thought-leadership' },
    { name: 'Publishing', count: 2, slug: 'publishing' },
    { name: 'Getting Started', count: 6, slug: 'getting-started' },
    { name: 'TrailKits', count: 3, slug: 'trailkits' },
    { name: 'Case Studies', count: 4, slug: 'case-studies' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
            Browse by Topic
          </h1>
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Explore our insights organized by topic and category.
          </p>
        </div>

        {/* Tags Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleTags.map((tag) => (
            <Card key={tag.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-trailguide-evergreen/20 transition-colors">
                  <Tag className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-lg font-bold text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors">
                  <Link href={`/blog/tags/${tag.slug}`}>
                    {tag.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="flex items-center justify-center text-sm text-trailguide-slate">
                  <Hash className="h-4 w-4 mr-1" />
                  {tag.count} {tag.count === 1 ? 'post' : 'posts'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-trailguide-evergreen hover:text-trailguide-evergreen/80 transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
