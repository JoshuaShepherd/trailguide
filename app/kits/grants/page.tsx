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
  Search,
  Edit,
  BookOpen,
  Award,
  Database,
  FileCheck,
  PieChart,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Grant Writing TrailKit | Complete Grant Strategy Toolkit',
  description: 'Master grant writing with our comprehensive toolkit: research strategies, proposal templates, tracking systems, and AI-powered tools.',
}

const kitOverview = {
  title: "Grant Writing TrailKit",
  subtitle: "Your Complete Grant Research, Writing & Management System",
  version: "2024 Edition", 
  lastUpdated: "August 2025",
  price: {
    standard: 247,
    bundle: 167, // when purchased with other kits
  },
  included: {
    templates: 35,
    guides: 8,
    tools: 12,
    workflows: 10
  }
}

const kitComponents = [
  {
    category: "Grant Research & Prospecting",
    icon: Search,
    description: "Find and qualify the perfect grant opportunities",
    items: [
      "AI-Powered Grant Opportunity Research Guide",
      "Foundation Database & Tracking System",
      "Government Grant Identification Toolkit", 
      "Corporate Grant Program Directory",
      "Grant Eligibility Assessment Framework",
      "Funder Relationship Mapping Templates"
    ]
  },
  {
    category: "Proposal Writing & Development",
    icon: Edit,
    description: "Write compelling proposals that win funding",
    items: [
      "Complete Grant Proposal Template Library",
      "Needs Assessment & Problem Statement Guide",
      "Program Description & Methodology Framework",
      "Budget Development Templates & Calculators",
      "Evaluation Plan & Logic Model Builder",
      "Sustainability Planning Worksheets"
    ]
  },
  {
    category: "Application Management",
    icon: FileCheck,
    description: "Organize and track all grant applications",
    items: [
      "Grant Application Tracking System",
      "Submission Calendar & Deadline Tracker",
      "Document Management Templates",
      "Application Review Checklist",
      "Follow-up & Communication Log",
      "Grant Award Management System"
    ]
  },
  {
    category: "Compliance & Reporting",
    icon: BarChart3,
    description: "Meet all grant requirements and reporting needs",
    items: [
      "Grant Reporting Templates & Schedules",
      "Financial Tracking & Budget Management",
      "Impact Measurement & Data Collection",
      "Compliance Checklist & Audit Preparation",
      "Progress Report Writing Framework",
      "Grant Renewal Strategy Guide"
    ]
  },
  {
    category: "Relationship Building",
    icon: Users,
    description: "Build lasting relationships with funders",
    items: [
      "Funder Communication Strategy Templates",
      "Grant Officer Meeting Preparation Guide",
      "Stewardship & Recognition Programs",
      "Site Visit Planning & Execution",
      "Thank You & Update Communication",
      "Long-term Relationship Management"
    ]
  },
  {
    category: "Analytics & Optimization", 
    icon: PieChart,
    description: "Track performance and improve success rates",
    items: [
      "Grant Success Rate Analysis Tools",
      "ROI Calculation & Performance Metrics",
      "Win/Loss Analysis Framework",
      "Grant Portfolio Diversification Planning",
      "Success Story Documentation System",
      "Continuous Improvement Worksheets"
    ]
  }
]

const bonusResources = [
  {
    title: "AI Grant Writing Assistant",
    description: "6-month access to AI tools for grant research, proposal writing, and application optimization",
    value: "$197"
  },
  {
    title: "Grant Writer's Resource Library",
    description: "500+ sample grant proposals, successful applications, and reference materials",
    value: "$297"
  },
  {
    title: "Monthly Grant Strategy Sessions",
    description: "Live monthly group coaching with grant writing experts and successful practitioners",
    value: "$147"
  },
  {
    title: "Private Grant Writers Community",
    description: "Access to exclusive community of 300+ grant professionals for networking and support",
    value: "$97"
  }
]

const successStories = [
  {
    organization: "Rural Education Collaborative",
    leader: "Dr. Patricia Williams, Program Director",
    result: "Secured $1.8M in grants with 73% success rate in first year",
    quote: "The research tools helped us identify opportunities we never would have found, and the proposal templates saved hundreds of hours while improving our success rate dramatically.",
    toolkit_usage: "Used foundation research system, proposal templates, and tracking workflows"
  },
  {
    organization: "Community Health Initiative",
    leader: "Marcus Thompson, Development Manager",
    result: "Increased grant funding from $200K to $850K annually",
    quote: "As someone new to grant writing, this toolkit gave me everything I needed to compete with experienced grant writers. The step-by-step guides were invaluable.",
    toolkit_usage: "Implemented proposal framework, budget templates, and compliance tracking"
  },
  {
    organization: "Environmental Justice Alliance",
    leader: "Sarah Martinez, Executive Director",
    result: "Successfully managed 15 concurrent grants totaling $3.2M",
    quote: "The management and tracking systems transformed our grant operations from chaotic to systematic. We can now handle 3x more applications efficiently.",
    toolkit_usage: "Leveraged tracking systems, compliance templates, and reporting frameworks"
  }
]

const implementation = {
  phases: [
    {
      phase: "Research & Planning (Days 1-21)",
      focus: "Grant Opportunity Identification and Strategic Planning",
      deliverables: [
        "Complete grant landscape analysis for your focus areas",
        "Build qualified prospect list of 25+ potential funders",
        "Develop annual grant application calendar and strategy",
        "Create standardized grant research and qualification process"
      ]
    },
    {
      phase: "Infrastructure Setup (Days 22-42)",
      focus: "Systems and Template Implementation", 
      deliverables: [
        "Set up grant tracking and management systems",
        "Customize proposal templates for your organization",
        "Create document libraries and application workflows",
        "Establish compliance and reporting procedures"
      ]
    },
    {
      phase: "Application Development (Days 43-63)",
      focus: "First Grant Applications and Submissions",
      deliverables: [
        "Complete and submit 3-5 high-priority grant applications",
        "Implement funder relationship building strategies",
        "Begin systematic application tracking and follow-up",
        "Create organizational case studies and success stories"
      ]
    }
  ]
}

const whatYouGet = [
  "35+ professional grant writing templates ready for immediate use",
  "8 comprehensive implementation guides with step-by-step instructions",
  "12 powerful research and tracking tools including calculators and databases",
  "10 workflow templates for streamlined grant operations",
  "6 months of AI-powered grant writing tools and research assistance",
  "Monthly live strategy sessions with grant writing experts",
  "Private community access with 300+ grant writing professionals",
  "Library of 500+ successful grant proposals and applications",
  "Email support for questions during first 90 days",
  "Lifetime updates to all toolkit materials and templates"
]

const grantTypes = [
  {
    type: "Foundation Grants",
    description: "Private foundations, family foundations, community foundations",
    templates_included: 12
  },
  {
    type: "Federal Grants",
    description: "Federal agencies, competitive and formula grants",
    templates_included: 8
  },
  {
    type: "State & Local Grants", 
    description: "State agencies, municipal grants, regional collaboratives",
    templates_included: 6
  },
  {
    type: "Corporate Grants",
    description: "Corporate foundations, CSR programs, partnership grants",
    templates_included: 9
  }
]

export default function GrantsTrailKitPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                TrailKit • Grant Writing System • {kitOverview.version}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{kitOverview.title}</h1>
              <p className="text-xl mb-6 text-blue-100">{kitOverview.subtitle}</p>
              
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
                  <Database className="h-5 w-5" />
                  <span>{kitOverview.included.tools} Tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>{kitOverview.included.workflows} Workflows</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Get Complete Kit - ${kitOverview.price.standard}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  See Sample Templates
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold">${kitOverview.price.standard}</div>
                    <div className="text-blue-100">Complete Grant System</div>
                    <div className="text-sm">Save $491 vs individual purchase</div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Total Value</span>
                      <span className="font-medium">$738</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Your Investment</span>
                      <span className="font-medium">${kitOverview.price.standard}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/20 pt-2">
                      <span>You Save</span>
                      <span className="font-medium text-blue-200">$491 (67%)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Badge className="bg-yellow-500 text-yellow-900">
                      🎯 Grant Success Special - 67% Off
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Grant Types Covered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Master All Types of Grant Writing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grantTypes.map((grantType, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-trailguide-neutral text-lg">{grantType.type}</h3>
                      <p className="text-trailguide-slate text-sm">{grantType.description}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {grantType.templates_included} Templates
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Complete Grant Writing System Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitComponents.map((component, index) => {
              const Icon = component.icon
              return (
                <Card key={index} className="border-trailguide-border h-full">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{component.category}</CardTitle>
                    <p className="text-sm text-trailguide-slate">{component.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {component.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
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
              <Card key={index} className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-trailguide-neutral text-lg mb-2">{bonus.title}</h3>
                      <p className="text-trailguide-slate text-sm">{bonus.description}</p>
                    </div>
                    <Badge className="bg-blue-600 text-white ml-4">{bonus.value}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-trailguide-slate">
              <strong>Total Bonus Value: $738</strong> • Included free with your TrailKit purchase
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Grant Writing Success Stories
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
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-blue-800 mb-2">Grant Success</div>
                        <div className="text-sm text-blue-600">{story.result}</div>
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
            Your 60-Day Grant Success Roadmap
          </h2>
          
          <div className="space-y-6">
            {implementation.phases.map((phase, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
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
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing & Guarantee */}
        <section className="mb-16">
          <div className="bg-blue-600/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
                Complete Grant Writing TrailKit
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto mb-6">
                Everything you need to research, write, and manage successful grants. 
                Transform your grant success rate starting today.
              </p>
              
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-blue-600">${kitOverview.price.standard}</div>
                <div className="text-xl text-trailguide-slate line-through">$738</div>
                <Badge className="bg-blue-600 text-white">Save $491</Badge>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-600/90 mb-4">
                      <Download className="h-4 w-4 mr-2" />
                      Get Complete Grant Kit - ${kitOverview.price.standard}
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-trailguide-slate mb-4">
                      <span>✓ Instant Download</span>
                      <span>✓ All Formats Included</span>
                      <span>✓ Lifetime Updates</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-trailguide-border pt-6">
                    <h3 className="font-bold text-trailguide-neutral mb-3 text-center">
                      🎯 Grant Success Guarantee
                    </h3>
                    <p className="text-sm text-trailguide-slate text-center">
                      Use this toolkit for 90 days. If you don't submit at least 3 well-crafted grant 
                      applications and feel confident in your grant writing abilities, we'll refund every penny.
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
            Grant Writing Questions & Answers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  I'm new to grant writing. Is this too advanced?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  Not at all! The kit includes beginner-friendly guides that walk you through every step. 
                  Many successful users started with zero grant writing experience and secured their first grants within 90 days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  What's the typical success rate improvement?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  Users report 2-3x improvement in success rates on average. The national average is 20-25%, while 
                  our toolkit users average 45-65% success rates after implementing the system.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  Do templates work for different grant types?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  Yes! The kit includes specific templates for foundation, federal, state, and corporate grants. 
                  Each template includes customization guidelines for different funder requirements and preferences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-trailguide-neutral mb-2">
                  How much time does implementation require?
                </h3>
                <p className="text-trailguide-slate text-sm">
                  Initial setup takes 10-15 hours spread over 2-3 weeks. After that, the systems save significant time - 
                  most users report 50-70% time savings on grant research and application preparation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact & Support */}
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Questions About the Grant Writing TrailKit?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Our team includes experienced grant writers who understand the challenges you're facing. 
              We're here to help you succeed with grants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:kits@trailguide.org">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Grant Experts
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
