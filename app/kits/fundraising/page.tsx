import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Download,
  FileText,
  Users,
  Target,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  DollarSign,
  Calendar,
  Clock,
  Lightbulb,
  TrendingUp,
  Heart,
  Mail,
  Phone,
  PiggyBank,
  CreditCard,
  UserCheck,
  Handshake,
  Gift,
  Zap,
  BookOpen,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fundraising TrailKit | Complete Fundraising Strategy Toolkit',
  description: 'Transform your fundraising with our comprehensive toolkit: templates, guides, strategies, and AI-powered tools for sustainable revenue growth.',
}

const kitOverview = {
  title: "Fundraising TrailKit",
  subtitle: "Your Complete Fundraising Strategy & Implementation Toolkit",
  version: "2024 Edition",
  lastUpdated: "August 2025",
  price: {
    standard: 297,
    bundle: 197, // when purchased with other kits
  },
  included: {
    templates: 47,
    guides: 12,
    tools: 8,
    workflows: 15
  }
}

const kitComponents = [
  {
    category: "Strategic Foundation",
    icon: Target,
    description: "Build your fundraising strategy from the ground up",
    items: [
      "Comprehensive Fundraising Assessment & Audit Tool",
      "Annual Fundraising Calendar Template",
      "Donor Persona Development Worksheets", 
      "Case for Support Writing Framework",
      "Fundraising Goal Setting & Tracking System",
      "Board Fundraising Engagement Playbook"
    ]
  },
  {
    category: "Donor Research & Prospecting",
    icon: UserCheck,
    description: "Identify and qualify your best donor prospects",
    items: [
      "AI-Powered Prospect Research Guide",
      "Wealth Screening Checklist & Process",
      "Donor Database Setup & Management Templates",
      "Prospect Rating & Qualification System",
      "Foundation Research Toolkit",
      "Corporate Partnership Identification Guide"
    ]
  },
  {
    category: "Campaign Development",
    icon: Zap,
    description: "Design and execute compelling fundraising campaigns",
    items: [
      "Annual Campaign Planning Template",
      "Major Gift Campaign Strategy Guide",
      "Digital Fundraising Campaign Templates",
      "Direct Mail Campaign Toolkit",
      "Email Fundraising Sequence Templates",
      "Peer-to-Peer Campaign Framework"
    ]
  },
  {
    category: "Donor Engagement & Stewardship",
    icon: Heart,
    description: "Build lasting relationships that increase giving",
    items: [
      "Donor Journey Mapping Templates",
      "Stewardship Program Design Guide",
      "Donor Communication Calendar",
      "Thank You & Recognition Templates",
      "Donor Meeting Preparation Worksheets",
      "Volunteer Fundraiser Training Materials"
    ]
  },
  {
    category: "Grant Writing & Institutional Funding",
    icon: FileText,
    description: "Secure grants and institutional support",
    items: [
      "Grant Proposal Template Library",
      "Foundation Research & Tracking System",
      "Budget Development Templates",
      "Logic Model & Evaluation Framework",
      "Grant Application Checklists",
      "Funder Relationship Management Tools"
    ]
  },
  {
    category: "Analytics & Optimization",
    icon: BarChart3,
    description: "Track performance and optimize results",
    items: [
      "Fundraising Dashboard Templates",
      "ROI Calculation Worksheets",
      "Donor Retention Analysis Tools",
      "Campaign Performance Tracking",
      "A/B Testing Framework for Appeals",
      "Annual Fundraising Report Template"
    ]
  }
]

const bonusResources = [
  {
    title: "AI Fundraising Tools Access",
    description: "6-month access to AI-powered prospect research, grant writing assistance, and donor communication tools",
    value: "$297"
  },
  {
    title: "Monthly Strategy Sessions",
    description: "Live monthly group coaching sessions with fundraising experts for kit users",
    value: "$197"
  },
  {
    title: "Private Community Access",
    description: "Join our exclusive fundraising professionals community for peer support and networking",
    value: "$97"
  },
  {
    title: "Implementation Roadmap",
    description: "Step-by-step 90-day implementation plan to put every toolkit component into action",
    value: "$197"
  }
]

const successStories = [
  {
    organization: "Central Valley Education Foundation",
    leader: "Maria Rodriguez, Development Director",
    result: "Increased annual fundraising from $850K to $1.4M in 18 months",
    quote: "The donor prospect research tools alone saved us 20 hours per week and helped us identify major gift prospects we never knew we had.",
    toolkit_usage: "Used prospect research tools, major gift templates, and donor stewardship workflows"
  },
  {
    organization: "Community Health Collective",
    leader: "Dr. James Park, Executive Director", 
    result: "Launched successful $2.1M capital campaign",
    quote: "As a first-time ED with no fundraising background, this toolkit gave me everything I needed to lead a major campaign with confidence.",
    toolkit_usage: "Leveraged campaign planning templates, board engagement playbook, and case for support framework"
  },
  {
    organization: "Youth Arts Alliance",
    leader: "Sophie Chen, Fundraising Manager",
    result: "Built monthly giving program generating $12K/month",
    quote: "The digital fundraising templates and donor journey mapping completely transformed how we think about sustainable revenue.",
    toolkit_usage: "Implemented digital campaign templates, donor journey maps, and retention tracking tools"
  }
]

const implementation = {
  phases: [
    {
      phase: "Foundation Phase (Days 1-30)",
      focus: "Assessment and Strategic Planning",
      deliverables: [
        "Complete organizational fundraising assessment",
        "Develop annual fundraising strategy and calendar",
        "Create donor personas and prospect lists",
        "Build case for support and messaging framework"
      ]
    },
    {
      phase: "Systems Phase (Days 31-60)", 
      focus: "Infrastructure and Process Setup",
      deliverables: [
        "Set up donor database and tracking systems",
        "Create stewardship workflows and communication calendars",
        "Implement prospect research and qualification processes",
        "Design campaign templates and materials"
      ]
    },
    {
      phase: "Execution Phase (Days 61-90)",
      focus: "Campaign Launch and Optimization",
      deliverables: [
        "Launch first major fundraising campaign",
        "Begin donor cultivation and stewardship programs",
        "Implement analytics and performance tracking",
        "Optimize based on initial results and feedback"
      ]
    }
  ]
}

const whatYouGet = [
  "47+ proven templates and worksheets ready for immediate use",
  "12 comprehensive implementation guides with step-by-step instructions", 
  "8 powerful tools including calculators, trackers, and assessment frameworks",
  "15 workflow templates for streamlined fundraising operations",
  "6 months of AI-powered fundraising tools access",
  "Monthly live strategy sessions with expert facilitators",
  "Private online community with 500+ fundraising professionals",
  "90-day implementation roadmap with milestone tracking",
  "Email support for questions during first 90 days",
  "Lifetime updates to all toolkit materials and templates"
]

export default function FundraisingTrailKitPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                TrailKit • Complete Toolkit • {kitOverview.version}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{kitOverview.title}</h1>
              <p className="text-xl mb-6 text-green-100">{kitOverview.subtitle}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>{kitOverview.included.templates} Templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{kitOverview.included.guides} Guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>{kitOverview.included.tools} Tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>{kitOverview.included.workflows} Workflows</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                  Get Complete Kit - ${kitOverview.price.standard}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Preview Kit Contents
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold">${kitOverview.price.standard}</div>
                    <div className="text-green-100">Complete Toolkit</div>
                    <div className="text-sm">Save $591 vs individual purchase</div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Total Value</span>
                      <span className="font-medium">$888</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Your Investment</span>
                      <span className="font-medium">${kitOverview.price.standard}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/20 pt-2">
                      <span>You Save</span>
                      <span className="font-medium text-green-200">$591 (67%)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Badge className="bg-yellow-500 text-yellow-900">
                      🎉 Launch Special - 67% Off
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Everything You Need for Fundraising Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitComponents.map((component, index) => {
              const Icon = component.icon
              return (
                <Card key={index} className="border-trailguide-border h-full">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">{component.category}</CardTitle>
                    <p className="text-sm text-trailguide-slate">{component.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {component.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-trailguide-slate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Bonus Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Exclusive Bonus Resources (Limited Time)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonusResources.map((bonus, index) => (
              <Card key={index} className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-trailguide-neutral text-lg mb-2">{bonus.title}</h3>
                      <p className="text-trailguide-slate text-sm">{bonus.description}</p>
                    </div>
                    <Badge className="bg-green-600 text-white ml-4">{bonus.value}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-trailguide-slate">
              <strong>Total Bonus Value: $788</strong> • Included free with your TrailKit purchase
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Real Results from TrailKit Users
          </h2>
          
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-trailguide-slate">• Verified TrailKit User</span>
                      </div>
                      
                      <blockquote className="text-trailguide-neutral text-lg mb-4 italic">
                        "{story.quote}"
                      </blockquote>
                      
                      <div className="mb-3">
                        <div className="font-semibold text-trailguide-neutral">{story.leader}</div>
                        <div className="text-sm text-trailguide-slate">{story.organization}</div>
                      </div>
                      
                      <div className="text-sm text-trailguide-slate">
                        <strong>Toolkit Components Used:</strong> {story.toolkit_usage}
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-green-800 mb-2">Success Metric</div>
                        <div className="text-sm text-green-600">{story.result}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Your 90-Day Implementation Roadmap
          </h2>
          
          <div className="space-y-6">
            {implementation.phases.map((phase, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    {phase.phase}
                  </CardTitle>
                  <p className="text-trailguide-slate">{phase.focus}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-trailguide-slate">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Complete Kit Contents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Complete Kit Contents & Benefits
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing & Guarantee */}
        <section className="mb-16">
          <div className="bg-green-600/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
                Complete Fundraising TrailKit
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto mb-6">
                Everything you need to transform your fundraising operations and achieve sustainable revenue growth.
                67% off launch price for limited time.
              </p>
              
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-green-600">${kitOverview.price.standard}</div>
                <div className="text-xl text-trailguide-slate line-through">$888</div>
                <Badge className="bg-green-600 text-white">Save $591</Badge>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-600/90 mb-4">
                      <Download className="h-4 w-4 mr-2" />
                      Get Complete TrailKit - ${kitOverview.price.standard}
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-trailguide-slate mb-4">
                      <span>✓ Instant Download</span>
                      <span>✓ All Formats Included</span>
                      <span>✓ Lifetime Updates</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-trailguide-border pt-6">
                    <h3 className="font-bold text-trailguide-neutral mb-3 text-center">
                      💯 100% Money-Back Guarantee
                    </h3>
                    <p className="text-sm text-trailguide-slate text-center">
                      Try the complete TrailKit risk-free for 60 days. If you don't see measurable 
                      improvement in your fundraising operations, we'll refund every penny. No questions asked.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  What's the difference between this and hiring a consultant?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  A consultant typically costs $5,000-15,000 and provides custom solutions for your specific situation. 
                  This TrailKit gives you proven frameworks and templates at a fraction of the cost, plus ongoing support through our community and monthly sessions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  Is this suitable for small organizations?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  Absolutely! The toolkit is designed to scale with organizations from $50K to $10M+ budgets. 
                  Templates include guidance for adapting strategies based on organizational size and capacity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  How long does implementation take?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  The included 90-day roadmap guides you through systematic implementation. Most organizations 
                  see initial results within 30 days and significant improvements within 90 days of full implementation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  What format are the materials provided in?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  All materials are provided in multiple formats: Microsoft Word/Excel, Google Docs/Sheets, 
                  and PDF. Templates are fully customizable and include detailed instructions for implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact & Support */}
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Questions About the Fundraising TrailKit?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Our team is here to help you determine if this toolkit is the right fit for your fundraising goals and organizational needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:kits@trailguide.org">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Our Team
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="tel:+1-555-123-4567">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kits">
                  View All TrailKits
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
