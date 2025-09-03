import { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags, getTagsWithCounts } from '@/lib/blog'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tag, Search, TrendingUp, BookOpen, ArrowRight, Filter, Hash } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Tags | TrailGuide - Browse Topics',
  description: 'Browse all blog topics and tags. Find articles on fundraising, grant writing, board development, leadership, and more nonprofit topics.',
}

export default async function TagsIndexPage() {
  const tagsWithCounts = await getTagsWithCounts()
  
  // Organize tags by frequency
  const popularTags = tagsWithCounts.slice(0, 8)
  const allTags = tagsWithCounts

  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Tag className="h-8 w-8" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Browse Blog Topics
          </h1>
          
          <p className="text-xl text-indigo-100 mb-8">
            Explore articles by topic and find exactly what you need for your nonprofit
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-300" />
              <Input
                placeholder="Search tags..."
                className="pl-10 bg-white/10 border-white/30 text-white placeholder-indigo-200"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Stats */}
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Tag Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-trailguide-slate">Total Tags</span>
                      <span className="font-semibold text-trailguide-neutral">{allTags.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-trailguide-slate">Most Popular</span>
                      <Badge variant="outline" className="text-xs">
                        {popularTags[0]?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-trailguide-slate">Articles</span>
                      <span className="font-semibold text-trailguide-neutral">
                        {allTags.reduce((sum, tag) => sum + tag.count, 0)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="border-trailguide-border bg-indigo-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-trailguide-neutral mb-4">Quick Navigation</h3>
                  <div className="space-y-3">
                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                      <Link href="/blog">
                        <BookOpen className="h-4 w-4 mr-2" />
                        All Articles
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                      <Link href="/blog/categories">
                        <Filter className="h-4 w-4 mr-2" />
                        Browse Categories
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                      <Link href="/authors">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Browse Authors
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Popular Tags Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
                Most Popular Topics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {popularTags.map((tag, index) => (
                  <Card key={tag.name} className="border-trailguide-border hover:shadow-md transition-shadow group">
                    <CardContent className="p-6">
                      <Link
                        href={`/blog/tags/${tag.slug}`}
                        className="block"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-indigo-100 p-2 rounded-lg group-hover:bg-indigo-200 transition-colors">
                              <Hash className="h-4 w-4 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-trailguide-neutral group-hover:text-indigo-600 transition-colors">
                                {tag.name}
                              </h3>
                              <p className="text-sm text-trailguide-slate">
                                {tag.count} {tag.count === 1 ? 'article' : 'articles'}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-trailguide-slate group-hover:text-indigo-600 transition-colors" />
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            {/* All Tags Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-trailguide-neutral">
                  All Topics ({allTags.length})
                </h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Most Popular
                  </Button>
                </div>
              </div>
              
              {/* Tag Cloud */}
              <div className="bg-white rounded-lg border border-trailguide-border p-8 mb-8">
                <div className="flex flex-wrap gap-3">
                  {allTags.map((tag) => {
                    const size = Math.min(Math.max(tag.count / 2, 1), 3)
                    const sizeClasses = {
                      1: 'text-sm',
                      2: 'text-base',
                      3: 'text-lg font-medium'
                    }[Math.floor(size)] || 'text-sm'
                    
                    return (
                      <Link
                        key={tag.name}
                        href={`/blog/tags/${tag.slug}`}
                        className={`hover:text-indigo-600 transition-colors ${sizeClasses}`}
                      >
                        <Badge 
                          variant="outline" 
                          className="hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer"
                        >
                          {tag.name} ({tag.count})
                        </Badge>
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              {/* Tag List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allTags.map((tag, index) => (
                  <Link
                    key={tag.name}
                    href={`/blog/tags/${tag.slug}`}
                    className="block group"
                  >
                    <Card className="border-trailguide-border hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Tag className="h-4 w-4 text-indigo-600" />
                            <div>
                              <h3 className="font-medium text-trailguide-neutral group-hover:text-indigo-600 transition-colors">
                                {tag.name}
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {tag.count}
                            </Badge>
                            <ArrowRight className="h-3 w-3 text-trailguide-slate group-hover:text-indigo-600 transition-colors" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-trailguide-slate/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
            Stay Updated on Your Favorite Topics
          </h2>
          <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
            Get weekly insights delivered to your inbox. Our newsletter covers all the topics 
            that matter most to nonprofit leaders.
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
