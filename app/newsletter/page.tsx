import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Mail,
  Calendar,
  Clock,
  Users,
  Target,
  ArrowRight,
  Download,
  Share2,
  Eye,
  Star,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Award,
  Globe,
  Phone,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrailGuide Newsletter Archive | Nonprofit Leadership Insights',
  description: 'Access our complete archive of weekly nonprofit leadership insights, strategies, and actionable advice delivered to thousands of leaders.',
}

const newsletterStats = {
  subscribers: 12847,
  totalIssues: 156,
  averageOpenRate: 42.3,
  averageClickRate: 8.7
}

const newsletterIssues = [
  {
    issue: 156,
    title: "AI Tools That Actually Help (Not Just Hype)",
    date: "2024-08-29",
    excerpt: "This week: 5 AI tools we're actually using in our work with nonprofits, plus the honest truth about what's working and what's not.",
    topics: ["AI Tools", "Productivity", "Real-World Testing"],
    readTime: "4 min",
    featured: true,
    openRate: 44.2,
    clickRate: 9.1
  },
  {
    issue: 155,
    title: "The Board Meeting That Changed Everything",
    date: "2024-08-22",
    excerpt: "A behind-the-scenes look at how one nonprofit transformed their board from passive observers to active champions in just three meetings.",
    topics: ["Board Development", "Leadership", "Case Study"],
    readTime: "5 min",
    featured: false,
    openRate: 41.8,
    clickRate: 8.4
  },
  {
    issue: 154,
    title: "Grant Writing: Stop Playing the Numbers Game",
    date: "2024-08-15",
    excerpt: "Why applying to 50 grants hoping 3 will hit is backwards thinking, and the strategic approach that's getting our clients 60%+ success rates.",
    topics: ["Grant Writing", "Strategy", "Success Rates"],
    readTime: "6 min",
    featured: false,
    openRate: 43.7,
    clickRate: 10.2
  },
  {
    issue: 153,
    title: "The Fundraising Mistake 90% of EDs Make",
    date: "2024-08-08",
    excerpt: "It's not what you think. This common mistake is costing nonprofits thousands in potential revenue, and it's completely fixable.",
    topics: ["Fundraising", "Executive Leadership", "Common Mistakes"],
    readTime: "4 min",
    featured: false,
    openRate: 46.1,
    clickRate: 11.3
  },
  {
    issue: 152,
    title: "Building Your Nonprofit's 'Why' That Actually Inspires",
    date: "2024-08-01",
    excerpt: "Moving beyond generic mission statements to create compelling organizational narratives that motivate staff, board, and donors.",
    topics: ["Mission & Vision", "Storytelling", "Organizational Culture"],
    readTime: "5 min",
    featured: false,
    openRate: 40.9,
    clickRate: 7.8
  },
  {
    issue: 151,
    title: "Summer Fundraising: The Opportunities Everyone Misses",
    date: "2024-07-25",
    excerpt: "While everyone else slows down for summer, smart nonprofits are using these 3 strategies to actually increase their fundraising during the 'slow' season.",
    topics: ["Summer Fundraising", "Seasonal Strategy", "Hidden Opportunities"],
    readTime: "4 min",
    featured: false,
    openRate: 38.5,
    clickRate: 8.9
  },
  {
    issue: 150,
    title: "150 Issues: What We've Learned About Nonprofit Success",
    date: "2024-07-18",
    excerpt: "Celebrating our 150th issue with the biggest insights from 3 years of working with hundreds of nonprofits. The patterns are clear.",
    topics: ["Milestone", "Success Patterns", "Data Insights"],
    readTime: "7 min",
    featured: false,
    openRate: 48.2,
    clickRate: 12.1
  },
  {
    issue: 149,
    title: "The Volunteer Paradox (And How to Solve It)",
    date: "2024-07-11",
    excerpt: "Why having more volunteers can actually make your organization less effective, and the counterintuitive approach that fixes it.",
    topics: ["Volunteer Management", "Organizational Efficiency", "Leadership"],
    readTime: "5 min",
    featured: false,
    openRate: 42.7,
    clickRate: 9.6
  }
]

const featuredTopics = [
  { name: "Fundraising Strategy", count: 28 },
  { name: "Board Development", count: 22 },
  { name: "Grant Writing", count: 18 },
  { name: "Leadership", count: 34 },
  { name: "AI & Technology", count: 12 },
  { name: "Volunteer Management", count: 16 },
  { name: "Strategic Planning", count: 19 },
  { name: "Communications", count: 14 }
]

const testimonials = [
  {
    quote: "This newsletter is the one email I actually look forward to each week. Josh and team consistently deliver insights I can use immediately.",
    author: "Maria Rodriguez",
    title: "Executive Director, Community Arts Coalition",
    organization: "Portland, OR"
  },
  {
    quote: "I've been in nonprofit leadership for 15 years, and this newsletter still teaches me something new every single week. It's required reading for our entire leadership team.",
    author: "Dr. James Park",
    title: "CEO, Youth Development Alliance", 
    organization: "Chicago, IL"
  },
  {
    quote: "The practical advice and real case studies are exactly what small nonprofits like ours need. No fluff, just actionable strategies.",
    author: "Sarah Thompson",
    title: "Development Director, Rural Health Initiative",
    organization: "Appalachian Region"
  }
]

const popularIssues = [
  { issue: 143, title: "The 3-Hour Board Meeting That Raised $150K", views: 8947 },
  { issue: 127, title: "Grant Writing Templates That Actually Work", views: 7832 },
  { issue: 134, title: "Firing Volunteers: When and How to Do It Right", views: 6721 },
  { issue: 118, title: "The Fundraising Email That Broke All Our Records", views: 6234 },
  { issue: 129, title: "Board Recruitment: Stop Asking Friends and Family", views: 5987 }
]

export default function NewsletterArchivePage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                Weekly Newsletter • Every Thursday
              </Badge>
              <h1 className="text-4xl font-bold mb-4">TrailGuide Newsletter Archive</h1>
              <p className="text-xl mb-6 text-indigo-100">
                3 years of actionable nonprofit leadership insights, strategies, and real-world case studies 
                delivered to thousands of executive directors and development professionals.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold">{newsletterStats.subscribers.toLocaleString()}</div>
                  <div className="text-indigo-200 text-sm">Active Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{newsletterStats.totalIssues}</div>
                  <div className="text-indigo-200 text-sm">Issues Published</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{newsletterStats.averageOpenRate}%</div>
                  <div className="text-indigo-200 text-sm">Average Open Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{newsletterStats.averageClickRate}%</div>
                  <div className="text-indigo-200 text-sm">Average Click Rate</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Latest Issue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Mail className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
                    <h3 className="text-xl font-bold mb-2">Never Miss an Issue</h3>
                    <p className="text-indigo-100 text-sm">
                      Join thousands of nonprofit leaders getting practical insights every Thursday
                    </p>
                  </div>
                  
                  <form className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/10 border-white/30 text-white placeholder-indigo-200"
                    />
                    <Button className="w-full bg-white text-indigo-600 hover:bg-white/90">
                      Subscribe Now
                    </Button>
                  </form>
                  
                  <p className="text-xs text-indigo-200 text-center mt-4">
                    No spam. Unsubscribe anytime. We respect your inbox.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Popular Topics */}
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {featuredTopics.map((topic, index) => (
                      <button
                        key={index}
                        className="flex items-center justify-between w-full p-2 text-left hover:bg-trailguide-slate/10 rounded text-sm"
                      >
                        <span className="text-trailguide-slate">{topic.name}</span>
                        <span className="text-xs text-trailguide-slate bg-trailguide-slate/10 px-2 py-1 rounded">
                          {topic.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Most Popular Issues */}
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Most Popular Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularIssues.map((popular, index) => (
                      <Link
                        key={index}
                        href={`/newsletter/${popular.issue}`}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors mb-1">
                          Issue #{popular.issue}
                        </div>
                        <div className="text-xs text-trailguide-slate mb-2 line-clamp-2">
                          {popular.title}
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-trailguide-slate">
                          <Eye className="h-3 w-3" />
                          <span>{popular.views.toLocaleString()} views</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter Info */}
              <Card className="border-trailguide-border bg-indigo-50">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-bold text-trailguide-neutral mb-2">Free Weekly Newsletter</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Join {newsletterStats.subscribers.toLocaleString()}+ nonprofit leaders getting actionable insights every Thursday.
                  </p>
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-600/90">
                    Subscribe Free
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Filter/Sort Options */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-2xl font-bold text-trailguide-neutral">
                  All Newsletter Issues
                </h2>
                <div className="flex gap-2">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Newsletter Issues */}
              <div className="space-y-6">
                {newsletterIssues.map((issue, index) => (
                  <Card 
                    key={issue.issue} 
                    className={`border-trailguide-border hover:shadow-md transition-shadow ${issue.featured ? 'ring-2 ring-indigo-200 bg-indigo-50/30' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-indigo-100 text-indigo-800">
                            Issue #{issue.issue}
                          </Badge>
                          {issue.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              <Star className="h-3 w-3 mr-1" />
                              Latest
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-trailguide-slate">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(issue.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{issue.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link href={`/newsletter/${issue.issue}`} className="group block">
                        <h3 className="text-xl font-bold text-trailguide-neutral group-hover:text-indigo-600 transition-colors mb-3">
                          {issue.title}
                        </h3>
                        <p className="text-trailguide-slate mb-4">
                          {issue.excerpt}
                        </p>
                      </Link>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {issue.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-xs text-trailguide-slate">
                            {issue.openRate}% open • {issue.clickRate}% click
                          </div>
                          <Link
                            href={`/newsletter/${issue.issue}`}
                            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            Read Issue
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center py-8">
                <Button variant="outline" size="lg">
                  Load More Issues
                </Button>
                <p className="text-sm text-trailguide-slate mt-2">
                  Showing 8 of {newsletterStats.totalIssues} issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <section className="bg-trailguide-slate/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-trailguide-neutral text-center mb-12">
            What Nonprofit Leaders Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-trailguide-neutral italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-trailguide-neutral">{testimonial.author}</div>
                    <div className="text-trailguide-slate">{testimonial.title}</div>
                    <div className="text-trailguide-slate">{testimonial.organization}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
            Stay Ahead with Weekly Nonprofit Insights
          </h2>
          <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
            Join thousands of nonprofit leaders who start their week with actionable strategies, 
            real case studies, and practical advice they can implement immediately.
          </p>
          
          <Card className="max-w-md mx-auto border-trailguide-border">
            <CardContent className="p-8">
              <form className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full"
                />
                <Button className="w-full bg-indigo-600 hover:bg-indigo-600/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe Free
                </Button>
              </form>
              
              <div className="mt-6 space-y-2 text-xs text-trailguide-slate">
                <div className="flex items-center justify-center space-x-1">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Free forever • No spam • Unsubscribe anytime</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Users className="h-3 w-3 text-indigo-600" />
                  <span>Join {newsletterStats.subscribers.toLocaleString()}+ subscribers</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/newsletter/preview">
                <Eye className="h-4 w-4 mr-2" />
                Preview Latest Issue
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:newsletter@trailguide.org">
                <Mail className="h-4 w-4 mr-2" />
                Questions?
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
