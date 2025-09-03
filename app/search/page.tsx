import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search,
  Filter,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  FileText,
  Users,
  Award,
  Clock,
  Tag,
  TrendingUp,
  MapPin,
  Globe,
  Mail,
  Phone
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Search Results | TrailGuide',
  description: 'Find exactly what you need across TrailGuide resources, blog posts, case studies, and tools.',
}

// This would typically come from URL params or search state
const searchQuery = "fundraising strategy"
const totalResults = 47
const searchFilters = {
  type: "all",
  date: "all",
  author: "all",
  tags: []
}

const searchResults = [
  {
    type: "blog",
    title: "5 Data-Driven Fundraising Strategies That Actually Work",
    excerpt: "Stop guessing what donors want and start using data to inform your fundraising decisions. These five evidence-based strategies have helped nonprofits increase revenue by 40% on average.",
    url: "/blog/data-driven-fundraising-strategies",
    author: "Sarah Chen",
    date: "2024-08-15",
    readTime: "8 min read",
    tags: ["fundraising", "data analytics", "donor strategy"],
    category: "Strategy"
  },
  {
    type: "case_study", 
    title: "Alan Hirsch: From Struggling Alone to Leading a Movement",
    excerpt: "How Alan transformed from an overwhelmed executive director to a strategic leader who built sustainable systems and secured $2.3M in new funding over 18 months.",
    url: "/case-studies/alan-hirsch",
    author: "TrailGuide Team",
    date: "2024-07-22",
    readTime: "12 min read",
    tags: ["case study", "fundraising", "leadership", "transformation"],
    category: "Success Story"
  },
  {
    type: "kit",
    title: "Fundraising TrailKit: Complete Strategy & Implementation Toolkit",
    excerpt: "Your comprehensive fundraising system with 47 templates, 12 guides, and 8 powerful tools for sustainable revenue growth.",
    url: "/kits/fundraising",
    author: "TrailGuide Experts",
    date: "2024-08-01",
    readTime: "Product",
    tags: ["fundraising", "templates", "strategy", "toolkit"],
    category: "TrailKit"
  },
  {
    type: "hike",
    title: "Fundraising Intensive: Build Your Complete Engine in 7 Days",
    excerpt: "Advanced 7-day intensive for experienced development professionals ready to transform their fundraising operations and achieve 200%+ growth.",
    url: "/hikes/fundraising-intensive",
    author: "Expert Facilitators",
    date: "2024-06-15",
    readTime: "Program",
    tags: ["fundraising", "intensive", "professional development"],
    category: "Learning Program"
  },
  {
    type: "blog",
    title: "Board Fundraising Engagement: From Check Writers to Champions",
    excerpt: "Transform your board from passive donors to active fundraising ambassadors with these proven engagement strategies and training approaches.",
    url: "/blog/board-fundraising-engagement", 
    author: "Marcus Rodriguez",
    date: "2024-08-10",
    readTime: "6 min read",
    tags: ["board development", "fundraising", "leadership"],
    category: "Governance"
  },
  {
    type: "blog",
    title: "AI-Powered Fundraising: Tools That Actually Move the Needle",
    excerpt: "Cut through the AI hype and discover practical tools that are helping nonprofits research donors, write appeals, and optimize campaigns more effectively.",
    url: "/blog/ai-powered-fundraising-tools",
    author: "Dr. Jennifer Walsh",
    date: "2024-07-28",
    readTime: "10 min read", 
    tags: ["ai tools", "fundraising", "technology", "efficiency"],
    category: "Technology"
  }
]

const popularSearches = [
  "grant writing templates",
  "board development",
  "donor stewardship",
  "major gifts strategy",
  "nonprofit leadership",
  "fundraising events",
  "volunteer management",
  "strategic planning"
]

const contentCategories = [
  { name: "All Results", count: 47, type: "all" },
  { name: "Blog Posts", count: 23, type: "blog" },
  { name: "Case Studies", count: 8, type: "case_study" },
  { name: "TrailKits", count: 6, type: "kit" },
  { name: "Hikes", count: 5, type: "hike" },
  { name: "Resources", count: 5, type: "resource" }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog':
      return FileText
    case 'case_study':
      return Award
    case 'kit':
      return BookOpen
    case 'hike':
      return Users
    case 'resource':
      return TrendingUp
    default:
      return FileText
  }
}

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'blog':
      return 'Blog Post'
    case 'case_study':
      return 'Case Study'
    case 'kit':
      return 'TrailKit'
    case 'hike':
      return 'Hike Program'
    case 'resource':
      return 'Resource'
    default:
      return 'Content'
  }
}

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'bg-blue-100 text-blue-800'
    case 'case_study':
      return 'bg-green-100 text-green-800'
    case 'kit':
      return 'bg-purple-100 text-purple-800'
    case 'hike':
      return 'bg-orange-100 text-orange-800'
    case 'resource':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Search Header */}
      <section className="bg-white border-b border-trailguide-border py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-trailguide-neutral mb-2">
                Search Results
              </h1>
              <p className="text-trailguide-slate">
                {totalResults} results found for <strong>"{searchQuery}"</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 min-w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-trailguide-slate" />
                <Input
                  placeholder="Refine your search..."
                  className="pl-10"
                  defaultValue={searchQuery}
                />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Content Type Filter */}
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Filter className="h-5 w-5 mr-2" />
                    Filter Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Content Type
                    </label>
                    <div className="space-y-2">
                      {contentCategories.map((category) => (
                        <button
                          key={category.type}
                          className="flex items-center justify-between w-full p-2 text-left hover:bg-trailguide-slate/10 rounded text-sm"
                        >
                          <span className={`${category.type === 'all' ? 'font-medium text-trailguide-evergreen' : 'text-trailguide-slate'}`}>
                            {category.name}
                          </span>
                          <span className="text-xs text-trailguide-slate bg-trailguide-slate/10 px-2 py-1 rounded">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Date Published
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any time</SelectItem>
                        <SelectItem value="week">Past week</SelectItem>
                        <SelectItem value="month">Past month</SelectItem>
                        <SelectItem value="quarter">Past 3 months</SelectItem>
                        <SelectItem value="year">Past year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Author
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All authors</SelectItem>
                        <SelectItem value="sarah-chen">Sarah Chen</SelectItem>
                        <SelectItem value="marcus-rodriguez">Marcus Rodriguez</SelectItem>
                        <SelectItem value="jennifer-walsh">Dr. Jennifer Walsh</SelectItem>
                        <SelectItem value="trailguide-team">TrailGuide Team</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button variant="outline" className="w-full" size="sm">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
              
              {/* Popular Searches */}
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Searches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-8"
                        asChild
                      >
                        <Link href={`/search?q=${encodeURIComponent(search)}`}>
                          {search}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Search Results */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Sort Options */}
              <div className="flex items-center justify-between">
                <p className="text-trailguide-slate">
                  Showing {searchResults.length} of {totalResults} results
                </p>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Results List */}
              <div className="space-y-6">
                {searchResults.map((result, index) => {
                  const TypeIcon = getTypeIcon(result.type)
                  return (
                    <Card key={index} className="border-trailguide-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeBadgeColor(result.type)}`}>
                              <TypeIcon className="h-6 w-6" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <Badge className={`text-xs ${getTypeBadgeColor(result.type)}`}>
                                  {getTypeLabel(result.type)}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {result.category}
                                </Badge>
                              </div>
                              <div className="flex items-center text-xs text-trailguide-slate space-x-2">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(result.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            
                            <Link href={result.url} className="group block">
                              <h3 className="text-xl font-bold text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors mb-2">
                                {result.title}
                              </h3>
                              <p className="text-trailguide-slate line-clamp-2 mb-3">
                                {result.excerpt}
                              </p>
                            </Link>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-trailguide-slate">
                                <div className="flex items-center space-x-1">
                                  <User className="h-3 w-3" />
                                  <span>{result.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{result.readTime}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-1">
                                {result.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                                    <Tag className="h-2 w-2 mr-1" />
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              
              {/* Pagination */}
              <div className="flex items-center justify-between py-8">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="bg-trailguide-evergreen text-white">
                    1
                  </Button>
                  <Button size="sm" variant="outline">
                    2
                  </Button>
                  <Button size="sm" variant="outline">
                    3
                  </Button>
                  <span className="text-trailguide-slate">...</span>
                  <Button size="sm" variant="outline">
                    8
                  </Button>
                </div>
                
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* No Results State (hidden in this case) */}
      <div className="hidden max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <Search className="h-16 w-16 text-trailguide-slate mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
            No results found for "{searchQuery}"
          </h2>
          <p className="text-trailguide-slate mb-8">
            We couldn't find any content matching your search. Try different keywords or browse our popular content.
          </p>
          
          <div className="space-y-4">
            <h3 className="font-medium text-trailguide-neutral">Suggestions:</h3>
            <ul className="text-sm text-trailguide-slate space-y-2">
              <li>• Check your spelling and try again</li>
              <li>• Use broader or different keywords</li>
              <li>• Browse our popular content categories</li>
              <li>• Contact us if you're looking for something specific</li>
            </ul>
          </div>
          
          <div className="mt-8 space-y-4">
            <Button asChild>
              <Link href="/blog">Browse All Blog Posts</Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline" asChild>
                <Link href="/kits">Explore TrailKits</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Help Section */}
      <section className="bg-trailguide-slate/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the right resources for your nonprofit's needs. 
            Reach out and we'll point you in the right direction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="mailto:hello@trailguide.org">
                <Mail className="h-4 w-4 mr-2" />
                Email Our Team
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Schedule a Call
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/assessment">
                Get Personalized Recommendations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
