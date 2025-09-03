import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Zap, 
  Users, 
  BarChart3, 
  Shield, 
  Lightbulb,
  ArrowRight,
  Check,
  Star,
  Award,
  Target,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'What You Get | TrailGuide',
  description: 'Complete overview of TrailGuide platform features, benefits, and services for nonprofit transformation.',
}

const platformIncludes = [
  {
    icon: Target,
    title: "TrailMap Assessment",
    description: "Comprehensive 5-stage readiness evaluation with personalized recommendations",
    features: ["AI readiness scoring", "Custom recommendations", "Progress tracking", "Board-ready reports"]
  },
  {
    icon: Zap,
    title: "15 Specialized TrailKits",
    description: "Complete dashboards for every nonprofit functional area",
    features: ["Fundraising & development", "Program management", "Operations & compliance", "Strategic planning"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Real-time performance monitoring and impact measurement",
    features: ["KPI dashboards", "Trend analysis", "Custom reports", "ROI tracking"]
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Workflows",
    description: "Intelligent automation for routine tasks and decision support",
    features: ["Smart recommendations", "Process automation", "Content generation", "Risk assessment"]
  },
  {
    icon: Users,
    title: "Learning & Training",
    description: "Comprehensive education through TrailHikes and resources",
    features: ["Guided learning paths", "Expert-led sessions", "Best practice templates", "Peer networking"]
  },
  {
    icon: Shield,
    title: "Ethics & Compliance",
    description: "Built-in guardrails for responsible AI implementation",
    features: ["Ethical guidelines", "Bias detection", "Privacy protection", "Transparency tools"]
  }
]

const serviceIncludes = [
  {
    title: "Strategic Assessment",
    description: "Complete organizational readiness evaluation",
    deliverables: ["Current state analysis", "Gap identification", "Priority roadmap", "Resource requirements"]
  },
  {
    title: "Implementation Planning",
    description: "Detailed project planning and change management",
    deliverables: ["Project timeline", "Team training plan", "Success metrics", "Risk mitigation"]
  },
  {
    title: "Training & Support",
    description: "Comprehensive team education and ongoing assistance",
    deliverables: ["Staff training sessions", "Leadership workshops", "Documentation", "Ongoing support"]
  },
  {
    title: "Performance Monitoring",
    description: "Continuous optimization and impact measurement",
    deliverables: ["Performance dashboards", "Regular check-ins", "Optimization recommendations", "Success reporting"]
  }
]

const outcomes = [
  {
    icon: Clock,
    metric: "40% Time Savings",
    description: "On routine administrative tasks through intelligent automation"
  },
  {
    icon: BarChart3,
    metric: "60% Better Decisions",
    description: "With data-driven insights and predictive analytics"
  },
  {
    icon: Users,
    metric: "25% More Impact",
    description: "Through optimized programs and resource allocation"
  },
  {
    icon: Award,
    metric: "90% Team Satisfaction",
    description: "With reduced busywork and focus on mission-critical activities"
  }
]

export default function WhatYouGetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Star className="mr-2 h-4 w-4" />
              Complete Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
              Everything You Need for
              <span className="text-trailguide-evergreen block">AI Transformation</span>
            </h1>
            <p className="text-lg text-trailguide-slate mb-8 max-w-3xl mx-auto">
              TrailGuide isn&apos;t just software—it&apos;s a complete transformation system. 
              Get the platform, expertise, and ongoing support to successfully implement 
              AI across your entire nonprofit operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Complete Platform Features"
            subtitle="Everything you need for successful nonprofit AI transformation"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformIncludes.map((feature, index) => (
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

      {/* Service Delivery */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Expert Implementation Services
            </h2>
            <p className="text-lg text-trailguide-slate">
              We don&apos;t just give you the tools—we ensure your success every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceIncludes.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-trailguide-neutral flex items-center">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mr-3" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-trailguide-neutral text-sm">What You Get:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-trailguide-slate">
                          <Check className="h-3 w-3 text-trailguide-evergreen mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Measurable Results
            </h2>
            <p className="text-lg text-trailguide-slate">
              Our clients see significant improvements across key performance areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <outcome.icon className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">{outcome.metric}</h3>
                  <p className="text-sm text-trailguide-slate">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <Badge variant="outline" className="mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  Complete Transformation Package
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
                  Your Investment in Success
                </h2>
                <p className="text-lg text-trailguide-slate mb-8 max-w-2xl mx-auto">
                  Get the complete TrailGuide platform, expert implementation services, 
                  and ongoing support—everything you need for successful AI transformation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-trailguide-evergreen mb-2">Platform Access</div>
                    <p className="text-sm text-trailguide-slate">All TrailKits, analytics, and AI features</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-trailguide-evergreen mb-2">Expert Services</div>
                    <p className="text-sm text-trailguide-slate">Assessment, planning, and implementation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-trailguide-evergreen mb-2">Ongoing Support</div>
                    <p className="text-sm text-trailguide-slate">Training, optimization, and assistance</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                    Get Custom Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Ready to Transform Your Nonprofit?
            </h2>
            <p className="text-lg text-trailguide-slate mb-8">
              Join leading nonprofits who are already using AI to amplify their impact
            </p>
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              Start Your Assessment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}