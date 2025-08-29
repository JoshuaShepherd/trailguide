import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Book, 
  Video, 
  MessageCircle, 
  HelpCircle, 
  Mail,
  Phone,
  Clock,
  Star,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  FileText,
  Bot,
  Headphones
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support Center | TrailGuide',
  description: 'Get help with TrailGuide\'s AI-powered nonprofit platform. Access tutorials, troubleshooting guides, community forums, and expert support.',
}

const knowledgeBaseCategories = [
  {
    title: "Getting Started",
    icon: Lightbulb,
    articles: 12,
    popular: [
      "Taking your first TrailMap assessment",
      "Understanding your AI readiness score",
      "Navigating the TrailKit library"
    ]
  },
  {
    title: "TrailKits",
    icon: FileText,
    articles: 24,
    popular: [
      "Implementing Fundraising AI tools",
      "Grant writing with AI assistance", 
      "Board communications automation"
    ]
  },
  {
    title: "AI Interactions",
    icon: Bot,
    articles: 18,
    popular: [
      "Troubleshooting AI response issues",
      "Best practices for AI prompting",
      "Understanding AI limitations"
    ]
  },
  {
    title: "Account & Billing",
    icon: Users,
    articles: 15,
    popular: [
      "Managing team access permissions",
      "Upgrading to premium features",
      "Billing and payment questions"
    ]
  }
]

const videoTutorials = [
  {
    title: "Complete TrailMap Assessment Walkthrough",
    duration: "12 min",
    views: 2847,
    category: "Getting Started"
  },
  {
    title: "Fundraising Kit Implementation Guide", 
    duration: "18 min",
    views: 1923,
    category: "TrailKits"
  },
  {
    title: "Optimizing AI Responses for Your Organization",
    duration: "15 min", 
    views: 1654,
    category: "AI Interactions"
  },
  {
    title: "Setting Up Team Collaboration Features",
    duration: "9 min",
    views: 1432,
    category: "Account & Billing"
  }
]

const troubleshootingGuides = [
  {
    issue: "AI assessment results seem inaccurate",
    solution: "Review input data completeness and context",
    category: "AI Interactions",
    severity: "medium"
  },
  {
    issue: "Can't access premium TrailKit features", 
    solution: "Check subscription status and permissions",
    category: "Account & Billing",
    severity: "high"
  },
  {
    issue: "Email notifications not being received",
    solution: "Verify email settings and spam folder",
    category: "Account & Billing", 
    severity: "low"
  },
  {
    issue: "TrailKit templates not loading properly",
    solution: "Clear browser cache and check connection",
    category: "TrailKits",
    severity: "medium"
  }
]

const successStories = [
  {
    organization: "Pacific Education Foundation",
    challenge: "Needed to streamline grant application process",
    solution: "Implemented Grants TrailKit with AI writing assistance",
    result: "Increased successful grant applications by 40%",
    quote: "The AI-powered grant templates saved us dozens of hours while improving our success rate."
  },
  {
    organization: "Community Health Alliance",
    challenge: "Board communications were time-intensive",
    solution: "Deployed Board Communications TrailKit",
    result: "Reduced meeting prep time by 60%",
    quote: "Our board meetings are now more focused and productive than ever."
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-white border-b border-trailguide-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
              Support Center
            </h1>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Get the help you need to succeed with AI-powered nonprofit tools. 
              Find answers, learn best practices, and connect with our community.
            </p>
          </div>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-trailguide-slate" />
              <Input 
                placeholder="Search for help articles, tutorials, or ask a question..." 
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <Button variant="outline" className="flex items-center justify-center py-3">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline" className="flex items-center justify-center py-3">
              <Mail className="h-4 w-4 mr-2" />
              Submit Ticket
            </Button>
            <Button variant="outline" className="flex items-center justify-center py-3">
              <Video className="h-4 w-4 mr-2" />
              Watch Tutorials
            </Button>
            <Button variant="outline" className="flex items-center justify-center py-3">
              <Users className="h-4 w-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Knowledge Base */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-trailguide-neutral">Knowledge Base</h2>
            <Link href="/support/articles" className="text-trailguide-evergreen hover:text-trailguide-evergreen/80">
              View all articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeBaseCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="border-trailguide-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-trailguide-slate">{category.articles} articles</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.popular.map((article, index) => (
                        <Link 
                          key={index}
                          href={`/support/articles/${article.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-trailguide-slate hover:text-trailguide-evergreen transition-colors"
                        >
                          • {article}
                        </Link>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="w-full mt-4">
                      <Link href={`/support/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        View all <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-trailguide-neutral">Video Tutorials</h2>
            <Link href="/support/tutorials" className="text-trailguide-evergreen hover:text-trailguide-evergreen/80">
              View all tutorials →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoTutorials.map((tutorial, index) => (
              <Card key={index} className="border-trailguide-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-trailguide-evergreen/10 p-3 rounded-lg">
                      <PlayCircle className="h-8 w-8 text-trailguide-evergreen" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-trailguide-neutral mb-2">{tutorial.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-trailguide-slate mb-3">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {tutorial.views.toLocaleString()} views
                        </span>
                      </div>
                      <Badge variant="secondary" className="mb-3">{tutorial.category}</Badge>
                      <Button asChild className="w-full">
                        <Link href={`/support/tutorials/${index + 1}`}>
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Watch Tutorial
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">Common Issues & Solutions</h2>
          
          <div className="space-y-4">
            {troubleshootingGuides.map((guide, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <HelpCircle className="h-5 w-5 text-trailguide-slate" />
                        <h3 className="font-semibold text-trailguide-neutral">{guide.issue}</h3>
                        <Badge 
                          variant={guide.severity === 'high' ? 'destructive' : guide.severity === 'medium' ? 'secondary' : 'outline'}
                        >
                          {guide.severity} priority
                        </Badge>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <p className="text-trailguide-slate">{guide.solution}</p>
                      </div>
                      <p className="text-sm text-trailguide-slate mt-2">Category: {guide.category}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/support/troubleshooting/${index + 1}`}>
                        Learn more
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/support/troubleshooting">
                View all troubleshooting guides
              </Link>
            </Button>
          </div>
        </section>

        {/* Community Forums */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-trailguide-neutral">Community Forums</h2>
            <Button asChild>
              <Link href="/support/forums">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Discussion
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-trailguide-border">
              <CardHeader>
                <CardTitle className="text-lg">General Discussion</CardTitle>
                <p className="text-sm text-trailguide-slate">432 topics • 2.1k posts</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-trailguide-slate mb-4">
                  General questions and discussions about TrailGuide platform features and best practices.
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-trailguide-slate">Latest: "Best practices for team onboarding" • 2h ago</p>
                  <p className="text-xs text-trailguide-slate">Popular: "ROI measurement strategies" • 156 replies</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-trailguide-border">
              <CardHeader>
                <CardTitle className="text-lg">AI & Technology</CardTitle>
                <p className="text-sm text-trailguide-slate">284 topics • 1.7k posts</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-trailguide-slate mb-4">
                  Technical discussions about AI implementations, integrations, and troubleshooting.
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-trailguide-slate">Latest: "API integration questions" • 4h ago</p>
                  <p className="text-xs text-trailguide-slate">Popular: "AI prompt optimization" • 203 replies</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-trailguide-border">
              <CardHeader>
                <CardTitle className="text-lg">Success Stories</CardTitle>
                <p className="text-sm text-trailguide-slate">157 topics • 891 posts</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-trailguide-slate mb-4">
                  Share your wins, case studies, and lessons learned with the community.
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-trailguide-slate">Latest: "Grant success with AI tools" • 6h ago</p>
                  <p className="text-xs text-trailguide-slate">Popular: "Board efficiency improvements" • 89 replies</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Showcases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                  
                  <h3 className="font-semibold text-trailguide-neutral text-lg mb-3">
                    {story.organization}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-trailguide-neutral">Challenge: </span>
                      <span className="text-trailguide-slate">{story.challenge}</span>
                    </div>
                    <div>
                      <span className="font-medium text-trailguide-neutral">Solution: </span>
                      <span className="text-trailguide-slate">{story.solution}</span>
                    </div>
                    <div>
                      <span className="font-medium text-trailguide-neutral">Result: </span>
                      <span className="text-trailguide-evergreen font-medium">{story.result}</span>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-trailguide-evergreen pl-4 mt-6 italic text-trailguide-slate">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/case-studies">
                View all success stories
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact Support */}
        <section>
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
                Still Need Help?
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Our support team is here to help you succeed. Get personalized assistance 
                from nonprofit AI experts who understand your unique challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-trailguide-border">
                <CardContent className="p-6 text-center">
                  <Headphones className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Live Chat</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Get instant help from our support team during business hours.
                  </p>
                  <div className="flex items-center justify-center text-sm text-trailguide-slate mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    Mon-Fri, 9AM-6PM PST
                  </div>
                  <Button className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Support Ticket</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Submit detailed questions and get comprehensive responses.
                  </p>
                  <div className="flex items-center justify-center text-sm text-trailguide-slate mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    Response within 24 hours
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Create Ticket
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Priority Support</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Premium subscribers get phone support and dedicated assistance.
                  </p>
                  <div className="flex items-center justify-center text-sm text-trailguide-slate mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    Same-day response
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/advisory">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
