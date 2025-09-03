import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Edit3, 
  Layout, 
  Share2, 
  Search, 
  Calendar,
  Users,
  BarChart3,
  ArrowRight,
  Check,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content System | TrailGuide',
  description: 'Comprehensive content management and publishing system for nonprofit thought leadership and marketing.',
}

const contentFeatures = [
  {
    icon: FileText,
    title: "Content Planning",
    description: "Strategic content calendars aligned with fundraising cycles and program milestones",
    features: ["Editorial calendar", "Content templates", "Approval workflows"]
  },
  {
    icon: Edit3,
    title: "Content Creation",
    description: "AI-assisted writing tools for blogs, newsletters, grants, and social media",
    features: ["Writing assistance", "Brand voice consistency", "Multi-format publishing"]
  },
  {
    icon: Layout,
    title: "Design System",
    description: "Consistent visual identity across all communications and marketing materials",
    features: ["Brand guidelines", "Template library", "Asset management"]
  },
  {
    icon: Share2,
    title: "Distribution",
    description: "Multi-channel publishing to maximize reach and engagement",
    features: ["Social media automation", "Email integration", "Website publishing"]
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track content performance and optimize for better engagement",
    features: ["Engagement metrics", "ROI tracking", "A/B testing"]
  },
  {
    icon: Search,
    title: "Content Library",
    description: "Searchable repository of all your content assets and resources",
    features: ["Asset search", "Version control", "Usage rights tracking"]
  }
]

const contentTypes = [
  { type: "Blog Posts", description: "Thought leadership articles and expert insights" },
  { type: "Newsletters", description: "Regular donor and stakeholder communications" },
  { type: "Social Media", description: "Engaging content for all social platforms" },
  { type: "Grant Applications", description: "Compelling proposals and reports" },
  { type: "Annual Reports", description: "Impact stories and financial summaries" },
  { type: "Case Studies", description: "Success stories and program outcomes" },
  { type: "Press Releases", description: "News and announcement distribution" },
  { type: "Email Campaigns", description: "Targeted donor and volunteer outreach" }
]

export default function ContentSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Content Management System
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
              Content That Converts
              <span className="text-trailguide-evergreen block">Supporters to Champions</span>
            </h1>
            <p className="text-lg text-trailguide-slate mb-8 max-w-3xl mx-auto">
              Transform your nonprofit&apos;s storytelling with our integrated content system. 
              From strategic planning to performance analytics, create compelling content 
              that drives donations, engagement, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                Start Content Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content System Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Complete Content Ecosystem"
            subtitle="Everything you need to create, manage, and distribute compelling nonprofit content"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <CardTitle className="text-xl text-trailguide-neutral">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-trailguide-slate">
                        <Check className="h-4 w-4 text-trailguide-evergreen mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Content for Every Purpose
            </h2>
            <p className="text-lg text-trailguide-slate">
              Our system supports all the content types your nonprofit needs to succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {contentTypes.map((content, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-trailguide-neutral mb-2">{content.type}</h3>
                      <p className="text-sm text-trailguide-slate">{content.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Seamless Integration
            </h2>
            <p className="text-lg text-trailguide-slate mb-12">
              Connect with your existing tools and workflows for maximum efficiency
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <Users className="h-8 w-8 text-trailguide-evergreen mx-auto mb-2" />
                <span className="text-sm font-medium text-trailguide-neutral">CRM Systems</span>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-trailguide-evergreen mx-auto mb-2" />
                <span className="text-sm font-medium text-trailguide-neutral">Email Platforms</span>
              </div>
              <div className="text-center">
                <Share2 className="h-8 w-8 text-trailguide-evergreen mx-auto mb-2" />
                <span className="text-sm font-medium text-trailguide-neutral">Social Media</span>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-trailguide-evergreen mx-auto mb-2" />
                <span className="text-sm font-medium text-trailguide-neutral">Analytics</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}