import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Lightbulb,
  BarChart3,
  Star,
  Clock,
  Shield,
  MessageCircle,
  DollarSign,
  Calendar,
  Award,
  TrendingUp,
  BookOpen
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advisory Services: Strategic AI Partnership | TrailGuide',
  description: 'Expert AI consulting for nonprofit leaders. Get strategic planning, implementation support, and board education from our experienced team of nonprofit and AI specialists.',
}

const serviceTiers = [
  {
    name: 'Strategic Planning',
    price: 'Starting at $2,500',
    duration: '4-6 weeks',
    description: 'Comprehensive AI strategy development tailored to your mission',
    features: [
      'Organizational AI readiness assessment',
      'Custom AI implementation roadmap',
      'Risk assessment and mitigation planning',
      'Board presentation materials',
      'Staff training curriculum design',
      'Success metrics and KPI framework',
      'Quarterly progress reviews (6 months)'
    ],
    ideal: 'Perfect for organizations ready to develop a comprehensive AI strategy',
    cta: 'Start Planning',
    highlight: false
  },
  {
    name: 'Implementation Support',
    price: 'Starting at $5,000',
    duration: '3-6 months',
    description: 'Hands-on guidance through your AI transformation journey',
    features: [
      'Everything in Strategic Planning',
      'Weekly implementation check-ins',
      'Direct vendor and tool selection support',
      'Staff training and change management',
      'Custom workflow design and optimization',
      'Integration with existing systems',
      'Ongoing troubleshooting and support',
      'Success measurement and reporting'
    ],
    ideal: 'Best for organizations actively implementing AI solutions',
    cta: 'Get Support',
    highlight: true
  },
  {
    name: 'Board Education',
    price: 'Starting at $1,200',
    duration: '1-2 sessions',
    description: 'Executive education to align leadership on AI opportunities',
    features: [
      'AI fundamentals for nonprofit leaders',
      'Industry-specific use case demonstrations',
      'Ethical considerations and governance',
      'Investment and ROI frameworks',
      'Risk management strategies',
      'Competitive landscape overview',
      'Q&A and strategic discussion facilitation'
    ],
    ideal: 'Ideal for boards and executive teams new to AI',
    cta: 'Book Session',
    highlight: false
  }
]

const expertTeam = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Lead AI Strategist',
    background: 'Former CTO at United Way, 15+ years nonprofit tech leadership',
    specialties: ['Strategic Planning', 'Change Management', 'Board Relations'],
    credentials: ['PhD Computer Science', 'Certified Nonprofit Executive', 'AI Ethics Certificate'],
    image: '/team/sarah-chen.jpg' // Note: This would need to be created
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Implementation Specialist',
    background: 'Ex-Salesforce.org, led AI adoption for 50+ nonprofits',
    specialties: ['System Integration', 'Staff Training', 'Process Optimization'],
    credentials: ['MS Information Systems', 'Salesforce AI Specialist', 'Google AI Certified'],
    image: '/team/marcus-rodriguez.jpg' // Note: This would need to be created
  },
  {
    name: 'Dr. Amelia Foster',
    role: 'Ethics & Governance Advisor',
    background: 'Former White House AI Policy, nonprofit board experience',
    specialties: ['AI Ethics', 'Governance Frameworks', 'Policy Development'],
    credentials: ['JD/PhD', 'AI Policy Institute Fellow', 'Nonprofit Board Certified'],
    image: '/team/amelia-foster.jpg' // Note: This would need to be created
  }
]

const caseStudies = [
  {
    organization: 'Community Health Alliance',
    challenge: 'Manual grant tracking consuming 60% of program staff time',
    solution: 'AI-powered grant management and reporting system',
    results: [
      '75% reduction in administrative time',
      '$300K additional funding secured',
      '40% improvement in grant success rate'
    ],
    timeline: '4 months',
    investment: '$8,500'
  },
  {
    organization: 'Education Forward Initiative',
    challenge: 'Board skeptical of AI investment, unclear on opportunities',
    solution: 'Board education series and pilot program design',
    results: [
      'Unanimous board approval for AI initiative',
      'Clear 2-year implementation roadmap',
      'Staff buy-in increased from 30% to 95%'
    ],
    timeline: '6 weeks',
    investment: '$3,200'
  },
  {
    organization: 'Global Health Network',
    challenge: 'Multiple failed AI tool implementations, low adoption',
    solution: 'Change management strategy and staff training program',
    results: [
      '90% staff adoption of new AI tools',
      '50% improvement in program efficiency',
      'Successful integration with existing systems'
    ],
    timeline: '5 months',
    investment: '$12,000'
  }
]

const trustIndicators = [
  {
    icon: Award,
    title: '95% Client Satisfaction',
    description: 'Average rating across all advisory engagements'
  },
  {
    icon: TrendingUp,
    title: '$2.3M Additional Funding',
    description: 'Generated by clients within 12 months post-engagement'
  },
  {
    icon: Users,
    title: '150+ Organizations',
    description: 'Nonprofits successfully guided through AI transformation'
  },
  {
    icon: BookOpen,
    title: 'Certified Specialists',
    description: 'All advisors hold relevant AI and nonprofit certifications'
  }
]

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic AI Partnership for Nonprofit Leaders
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              Expert guidance from seasoned nonprofit and AI professionals. 
              Navigate your transformation with confidence and achieve measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-trailguide-evergreen hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact" className="flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <div className="flex items-center text-emerald-200">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Free 30-minute discovery call</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div key={indicator.title} className="text-center">
                  <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-trailguide-evergreen" />
                  </div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">
                    {indicator.title}
                  </h3>
                  <p className="text-trailguide-slate">
                    {indicator.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Advisory Service Tiers
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Choose the level of support that matches your organization's needs and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`border-2 ${tier.highlight ? 'border-trailguide-evergreen shadow-lg scale-105' : 'border-trailguide-border'}`}
              >
                <CardHeader className="text-center pb-6">
                  {tier.highlight && (
                    <Badge className="bg-trailguide-evergreen text-white mb-4">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl font-bold text-trailguide-neutral mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-trailguide-evergreen mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm text-trailguide-slate mb-4">
                    {tier.duration}
                  </p>
                  <p className="text-trailguide-slate">
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-trailguide-evergreen mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-trailguide-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-trailguide-slate">
                      <strong>Ideal for:</strong> {tier.ideal}
                    </p>
                  </div>

                  <Button 
                    asChild
                    className={`w-full ${tier.highlight 
                      ? 'bg-trailguide-evergreen hover:bg-trailguide-evergreen/90' 
                      : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Transparency */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-trailguide-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">
                  Transparent, Nonprofit-Friendly Pricing
                </h3>
                <div className="space-y-2 text-trailguide-slate">
                  <p>• <strong>Sliding scale available</strong> based on annual budget</p>
                  <p>• <strong>Payment plans offered</strong> for multi-month engagements</p>
                  <p>• <strong>No hidden fees</strong> - all costs discussed upfront</p>
                  <p>• <strong>Results guarantee</strong> - satisfaction or money back</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Your Expert Advisory Team
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Seasoned professionals with deep nonprofit experience and cutting-edge AI expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertTeam.map((expert, index) => (
              <Card key={expert.name} className="border-trailguide-border">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-trailguide-evergreen to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-trailguide-evergreen font-medium mb-3">
                    {expert.role}
                  </p>
                  <p className="text-sm text-trailguide-slate mb-6">
                    {expert.background}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-trailguide-neutral mb-2">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {expert.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-trailguide-neutral mb-2">
                      Credentials
                    </h4>
                    <div className="space-y-1">
                      {expert.credentials.map((credential, credIndex) => (
                        <p key={credIndex} className="text-xs text-trailguide-slate">
                          {credential}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Transformation Results
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Real outcomes from nonprofits who partnered with TrailGuide for their AI journey
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={study.organization} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-trailguide-neutral mb-3">
                        {study.organization}
                      </h3>
                      <p className="text-trailguide-slate mb-4">
                        <strong>Challenge:</strong> {study.challenge}
                      </p>
                      <p className="text-trailguide-slate">
                        <strong>Solution:</strong> {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-trailguide-slate">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-trailguide-evergreen/10 rounded-lg p-6">
                        <div className="mb-3">
                          <Clock className="h-6 w-6 text-trailguide-evergreen mx-auto mb-2" />
                          <p className="text-sm text-trailguide-slate">Timeline</p>
                          <p className="font-semibold text-trailguide-neutral">{study.timeline}</p>
                        </div>
                        <div>
                          <DollarSign className="h-6 w-6 text-trailguide-evergreen mx-auto mb-2" />
                          <p className="text-sm text-trailguide-slate">Investment</p>
                          <p className="font-semibold text-trailguide-neutral">{study.investment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your needs and explore how our advisory services 
            can accelerate your AI transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-trailguide-evergreen hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact" className="flex items-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <div className="flex items-center text-emerald-200">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span>30 minutes • No obligation • Expert advice</span>
            </div>
          </div>
          
          <p className="text-emerald-200 text-sm mt-6">
            Join 150+ nonprofits who've successfully transformed with TrailGuide
          </p>
        </div>
      </section>
    </div>
  )
}
