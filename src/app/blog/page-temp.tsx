import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

export const metadata = {
  title: 'Insights & Field Notes - TrailGuide',
  description: 'Practical, ethical, quietly premium thinking at the intersection of AI and the nonprofit world.',
}

// Temporary simple blog page to fix build issues
export default function BlogPage() {
  const samplePosts = [
    {
      id: '1',
      title: 'Getting Started with AI for Nonprofits',
      excerpt: 'A practical guide to implementing AI tools responsibly in your nonprofit organization.',
      date: '2024-12-15',
      author: 'TrailGuide Team',
      tags: ['AI', 'Nonprofit', 'Getting Started'],
      slug: 'getting-started-ai-nonprofits'
    },
    {
      id: '2', 
      title: 'The Ethics of AI in Mission-Driven Work',
      excerpt: 'How to evaluate AI tools through the lens of human flourishing and organizational values.',
      date: '2024-12-10',
      author: 'TrailGuide Team',
      tags: ['Ethics', 'AI', 'Values'],
      slug: 'ethics-ai-mission-work'
    },
    {
      id: '3',
      title: 'Thought Leaders: Reclaim Your Platform',
      excerpt: 'Why the publishing industry is broken and how to build your own digital presence.',
      date: '2024-12-05',
      author: 'TrailGuide Team',
      tags: ['Publishing', 'Thought Leadership', 'Platform'],
      slug: 'thought-leaders-reclaim-platform'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
            Insights & Field Notes
          </h1>
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Practical, ethical, quietly premium thinking at the intersection of AI and the nonprofit world.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {samplePosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center text-sm text-trailguide-slate mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <CardTitle className="text-xl font-bold text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-trailguide-slate leading-relaxed">
                  {post.excerpt}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-trailguide-slate">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-trailguide-evergreen/10 text-trailguide-evergreen px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm" className="group-hover:bg-trailguide-evergreen group-hover:text-white transition-all">
                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center">
          <div className="bg-trailguide-background rounded-2xl p-8 border border-trailguide-evergreen/10">
            <h3 className="text-2xl font-bold text-trailguide-neutral mb-4">
              More Content Coming Soon
            </h3>
            <p className="text-trailguide-slate mb-6">
              We're building a comprehensive library of insights, case studies, and practical guides. 
              Subscribe to be notified when new content is published.
            </p>
            <Button asChild className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              <Link href="/newsletter">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
