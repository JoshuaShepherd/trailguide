import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Check, 
  X, 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  TrendingUp,
  Zap,
  Shield,
  Users,
  Target,
  Gauge,
  Wrench,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Platform Comparison - Expert Publisher vs Alternatives | TrailGuide',
  description: 'Honest comparison of Expert Publisher platform against WordPress, Squarespace, Substack, SaaS publishers, and custom agency builds. Real costs, benefits, and ROI analysis.',
}

interface ComparisonOption {
  name: string
  type: 'DIY' | 'SaaS' | 'Agency' | 'Platform'
  monthlyPrice: string
  setupTime: string
  technicalSkill: 'None' | 'Basic' | 'Intermediate' | 'Advanced'
  features: {
    customDesign: boolean | 'Limited'
    seoOptimization: boolean | 'Basic'
    pageSpeed: 'Poor' | 'Fair' | 'Good' | 'Excellent'
    emailIntegration: boolean | 'Basic'
    membershipSystem: boolean | 'Basic'
    contentManagement: boolean | 'Basic'
    analytics: boolean | 'Basic'
    maintenance: 'You' | 'Shared' | 'Full'
    scalability: 'Limited' | 'Good' | 'Excellent'
    ownership: 'None' | 'Limited' | 'Full'
  }
  pros: string[]
  cons: string[]
  bestFor: string
  realWorldImpact?: {
    revenueImplications: string
    timeInvestment: string
    growthLimitations?: string
  }
}

const comparisonOptions: ComparisonOption[] = [
  {
    name: 'Expert Publisher (TrailGuide)',
    type: 'Platform',
    monthlyPrice: '$497-997',
    setupTime: '2-4 weeks',
    technicalSkill: 'None',
    features: {
      customDesign: true,
      seoOptimization: true,
      pageSpeed: 'Excellent',
      emailIntegration: true,
      membershipSystem: true,
      contentManagement: true,
      analytics: true,
      maintenance: 'Full',
      scalability: 'Excellent',
      ownership: 'Full'
    },
    pros: [
      'Done-for-you: Zero technical work required',
      'Optimized for thought leadership and monetization',
      'Custom design that reflects your brand',
      'Built-in member management and payment processing',
      'Page speed scores consistently 95-100',
      'Strategic content guidance included',
      'Full ownership of platform and data',
      'Scales from startup to enterprise'
    ],
    cons: [
      'Higher upfront investment than DIY options',
      'Monthly cost higher than basic platforms',
      'Less control over day-to-day technical decisions'
    ],
    bestFor: 'Established thought leaders who want a premium platform without technical hassle',
    realWorldImpact: {
      revenueImplications: 'Optimized conversion funnels can increase revenue 40-200% vs generic platforms',
      timeInvestment: '2-5 hours/month vs 10-20 hours/week with DIY solutions',
      growthLimitations: 'None - platform scales with your business'
    }
  },
  {
    name: 'WordPress + Premium Theme',
    type: 'DIY',
    monthlyPrice: '$50-200',
    setupTime: '2-8 weeks',
    technicalSkill: 'Intermediate',
    features: {
      customDesign: 'Limited',
      seoOptimization: 'Basic',
      pageSpeed: 'Fair',
      emailIntegration: 'Basic',
      membershipSystem: 'Basic',
      contentManagement: true,
      analytics: 'Basic',
      maintenance: 'You',
      scalability: 'Good',
      ownership: 'Full'
    },
    pros: [
      'Lower monthly costs',
      'Huge ecosystem of plugins',
      'Complete ownership',
      'Flexibility to customize anything'
    ],
    cons: [
      'Requires ongoing technical maintenance',
      'Security vulnerabilities need constant monitoring',
      'Plugin conflicts can break your site',
      'Page speed optimization requires expertise',
      'Time-consuming to set up properly'
    ],
    bestFor: 'Tech-savvy individuals with time to manage ongoing maintenance',
    realWorldImpact: {
      revenueImplications: 'Poor conversion optimization can cost 20-50% in lost revenue',
      timeInvestment: '10-20 hours/week for setup, maintenance, and troubleshooting',
      growthLimitations: 'Performance degrades with scale without expert optimization'
    }
  },
  {
    name: 'Squarespace',
    type: 'SaaS',
    monthlyPrice: '$18-40',
    setupTime: '1-3 weeks',
    technicalSkill: 'Basic',
    features: {
      customDesign: 'Limited',
      seoOptimization: 'Basic',
      pageSpeed: 'Fair',
      emailIntegration: 'Basic',
      membershipSystem: 'Basic',
      contentManagement: true,
      analytics: 'Basic',
      maintenance: 'Full',
      scalability: 'Limited',
      ownership: 'None'
    },
    pros: [
      'Beautiful templates out of the box',
      'No technical maintenance required',
      'Integrated commerce features',
      'Mobile-responsive designs'
    ],
    cons: [
      'Limited customization options',
      'No data ownership or export',
      'Poor SEO compared to custom solutions',
      'Page speed often 60-80 (impacts SEO ranking)',
      'Cannot integrate advanced membership features'
    ],
    bestFor: 'Small businesses or creators who prioritize ease over performance',
    realWorldImpact: {
      revenueImplications: 'Slower sites lose 7% conversions per 100ms delay. 60-80 page speed = significant revenue loss',
      timeInvestment: '5-10 hours/week for content management',
      growthLimitations: 'Platform limitations become apparent at $10k+/month revenue'
    }
  },
  {
    name: 'Substack',
    type: 'SaaS',
    monthlyPrice: '10% of revenue',
    setupTime: '1 day',
    technicalSkill: 'None',
    features: {
      customDesign: false,
      seoOptimization: 'Basic',
      pageSpeed: 'Good',
      emailIntegration: true,
      membershipSystem: true,
      contentManagement: 'Basic',
      analytics: 'Basic',
      maintenance: 'Full',
      scalability: 'Good',
      ownership: 'None'
    },
    pros: [
      'Dead simple to start',
      'Built-in email list management',
      'Payment processing included',
      'Network effects from Substack community'
    ],
    cons: [
      'Zero customization - every Substack looks the same',
      'No SEO optimization for individual posts',
      '10% revenue fee forever (vs fixed monthly cost)',
      'Cannot build broader thought leadership platform',
      'Limited monetization options beyond subscriptions'
    ],
    bestFor: 'Newsletter-first creators who want simplicity over customization',
    realWorldImpact: {
      revenueImplications: '10% fee means $10k/month costs $1k/month vs $497-997 fixed',
      timeInvestment: '2-3 hours/week for content only',
      growthLimitations: 'Difficult to expand beyond newsletter format; 10% fee scales painfully'
    }
  },
  {
    name: 'Custom Agency Build',
    type: 'Agency',
    monthlyPrice: '$200-500',
    setupTime: '3-6 months',
    technicalSkill: 'None',
    features: {
      customDesign: true,
      seoOptimization: true,
      pageSpeed: 'Good',
      emailIntegration: true,
      membershipSystem: true,
      contentManagement: true,
      analytics: true,
      maintenance: 'Shared',
      scalability: 'Good',
      ownership: 'Limited'
    },
    pros: [
      'Fully custom solution',
      'Professional development',
      'Can build exactly what you want'
    ],
    cons: [
      'High upfront cost ($15k-50k)',
      'Long development timeline',
      'Vendor lock-in for updates',
      'May not understand thought leadership business models',
      'Ongoing dev costs for changes'
    ],
    bestFor: 'Large organizations with specific requirements and big budgets',
    realWorldImpact: {
      revenueImplications: 'High upfront cost delays launch; generic approach may miss conversion opportunities',
      timeInvestment: '20-40 hours of project management during 3-6 month build',
      growthLimitations: 'Change requests expensive; may not evolve with business needs'
    }
  },
  {
    name: 'SaaS Publishing Platform',
    type: 'SaaS',
    monthlyPrice: '$99-299',
    setupTime: '1-2 weeks',
    technicalSkill: 'Basic',
    features: {
      customDesign: 'Limited',
      seoOptimization: 'Basic',
      pageSpeed: 'Good',
      emailIntegration: true,
      membershipSystem: 'Basic',
      contentManagement: true,
      analytics: 'Basic',
      maintenance: 'Full',
      scalability: 'Good',
      ownership: 'None'
    },
    pros: [
      'Faster setup than custom builds',
      'Built for content creators',
      'Ongoing feature updates'
    ],
    cons: [
      'Template-based design limits uniqueness',
      'Data locked into platform',
      'Limited integration options',
      'One-size-fits-all approach'
    ],
    bestFor: 'Content creators who want more than Substack but less than custom',
    realWorldImpact: {
      revenueImplications: 'Generic optimization misses audience-specific conversion opportunities',
      timeInvestment: '5-8 hours/week for setup and management',
      growthLimitations: 'Platform constraints become apparent as business grows'
    }
  },
  {
    name: 'Basic Website Builder',
    type: 'DIY',
    monthlyPrice: '$10-30',
    setupTime: '1-2 weeks',
    technicalSkill: 'Basic',
    features: {
      customDesign: 'Limited',
      seoOptimization: false,
      pageSpeed: 'Poor',
      emailIntegration: false,
      membershipSystem: false,
      contentManagement: 'Basic',
      analytics: false,
      maintenance: 'You',
      scalability: 'Limited',
      ownership: 'None'
    },
    pros: [
      'Very low cost',
      'Quick to set up basic site',
      'No technical knowledge required'
    ],
    cons: [
      'No business features',
      'Poor SEO performance',
      'Slow page speeds',
      'Cannot monetize effectively',
      'Looks generic and unprofessional'
    ],
    bestFor: 'Hobby bloggers or very early-stage creators',
    realWorldImpact: {
      revenueImplications: 'Minimal monetization capability; professional credibility issues',
      timeInvestment: '3-5 hours/week',
      growthLimitations: 'Must migrate to real platform when business grows'
    }
  }
]

function FeatureIcon({ feature }: { feature: boolean | string }) {
  if (feature === true) return <Check className="h-4 w-4 text-green-600" />
  if (feature === false) return <X className="h-4 w-4 text-red-500" />
  return <AlertTriangle className="h-4 w-4 text-yellow-500" />
}

function PageSpeedBadge({ speed }: { speed: string }) {
  const colors = {
    'Poor': 'bg-red-100 text-red-800',
    'Fair': 'bg-yellow-100 text-yellow-800', 
    'Good': 'bg-blue-100 text-blue-800',
    'Excellent': 'bg-green-100 text-green-800'
  }
  return <Badge className={colors[speed as keyof typeof colors]}>{speed}</Badge>
}

export default function ComparisonPage() {
  const expertPublisher = comparisonOptions[0]
  const alternatives = comparisonOptions.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Comparison
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Honest analysis of Expert Publisher vs every realistic alternative.
              Real costs, actual benefits, and what they mean for your revenue and growth.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-left">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Our Promise: Radical Honesty</h3>
                  <p className="text-amber-800 text-sm">
                    This comparison includes real drawbacks of our platform and honest advantages of alternatives. 
                    We believe you deserve the full picture to make the right decision for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Platform</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Monthly Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Setup Time</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Page Speed</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Ownership</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonOptions.map((option, index) => (
                  <tr key={option.name} className={index === 0 ? 'bg-green-50' : ''}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{option.name}</span>
                        {index === 0 && <Badge className="bg-green-100 text-green-800">Our Platform</Badge>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{option.monthlyPrice}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{option.setupTime}</td>
                    <td className="px-6 py-4">
                      <PageSpeedBadge speed={option.features.pageSpeed} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{option.features.ownership}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{option.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive: Why Page Speed Actually Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Page Speed Actually Matters for Revenue</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    The 100ms Rule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    For every 100ms delay in page load time, conversions drop by 7%. 
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>95+ Page Speed (Expert Publisher):</span>
                      <span className="font-semibold text-green-600">Baseline</span>
                    </div>
                    <div className="flex justify-between">
                      <span>80 Page Speed (Squarespace):</span>
                      <span className="font-semibold text-red-600">-14% conversions</span>
                    </div>
                    <div className="flex justify-between">
                      <span>60 Page Speed (Basic WordPress):</span>
                      <span className="font-semibold text-red-600">-35% conversions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Real Revenue Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    On a $50k/year thought leadership business:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Fast site (95+ speed):</span>
                      <span className="font-semibold">$50k</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medium site (80 speed):</span>
                      <span className="font-semibold text-red-600">$43k (-$7k)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Slow site (60 speed):</span>
                      <span className="font-semibold text-red-600">$32.5k (-$17.5k)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    A slow site can cost more annually than our platform fee.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">SEO Impact</h3>
              <p className="text-blue-800 text-sm mb-3">
                Google's Core Web Vitals use page speed as a ranking factor. Slower sites rank lower, 
                reducing organic traffic and compounding revenue loss.
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Bottom line:</strong> A 95+ page speed score isn't just a nice-to-have metric—it's 
                a revenue optimization tool that pays for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Publisher vs Substack Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Expert Publisher vs Substack: The Real Comparison</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>What We Share with Substack</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email list management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Subscription payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Content publishing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Analytics tracking</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Where We Diverge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">Full thought leadership platform</span>
                      <p className="text-xs text-gray-600">vs newsletter-only focus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wrench className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">Custom branding & design</span>
                      <p className="text-xs text-gray-600">vs identical templates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">Multiple revenue streams</span>
                      <p className="text-xs text-gray-600">vs subscription-only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">Data ownership</span>
                      <p className="text-xs text-gray-600">vs platform dependency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-900 mb-3">The 10% Problem</h3>
              <p className="text-yellow-800 text-sm mb-3">
                Substack's 10% fee seems small until you do the math:
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Substack at $5k/month:</strong><br />
                  $500/month fee = $6k/year
                </div>
                <div>
                  <strong>Expert Publisher:</strong><br />
                  $497-997/month fixed
                </div>
              </div>
              <p className="text-yellow-800 text-sm mt-3">
                At $6k+/month revenue, Substack becomes more expensive. At $10k+/month, 
                it's significantly more expensive with zero additional features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Platform Breakdowns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Platform Analysis</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {alternatives.map((option) => (
              <Card key={option.name} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{option.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">{option.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">{option.monthlyPrice}</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Setup Time:</span>
                      <div className="font-medium">{option.setupTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Technical Skill:</span>
                      <div className="font-medium">{option.technicalSkill}</div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div>
                    <h4 className="font-medium mb-3">Features</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <FeatureIcon feature={option.features.customDesign} />
                        <span>Custom Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatureIcon feature={option.features.seoOptimization} />
                        <span>SEO Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatureIcon feature={option.features.emailIntegration} />
                        <span>Email Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatureIcon feature={option.features.membershipSystem} />
                        <span>Membership System</span>
                      </div>
                    </div>
                  </div>

                  {/* Real World Impact */}
                  {option.realWorldImpact && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Real-World Impact
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>
                          <strong>Revenue:</strong> {option.realWorldImpact.revenueImplications}
                        </div>
                        <div>
                          <strong>Time:</strong> {option.realWorldImpact.timeInvestment}
                        </div>
                        {option.realWorldImpact.growthLimitations && (
                          <div>
                            <strong>Growth:</strong> {option.realWorldImpact.growthLimitations}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Pros</h4>
                      <ul className="space-y-1 text-sm">
                        {option.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Cons</h4>
                      <ul className="space-y-1 text-sm">
                        {option.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">When Expert Publisher Pays for Itself</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Small Creator</CardTitle>
                  <p className="text-sm text-gray-600">$2k/month revenue</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">Not Yet</div>
                    <p className="text-sm text-gray-600">
                      Substack or WordPress likely better until you reach $5k+/month
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Growing Creator</CardTitle>
                  <p className="text-sm text-gray-600">$5-10k/month revenue</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">Break-Even</div>
                    <p className="text-sm text-gray-600">
                      Platform pays for itself through speed & conversion optimization
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Established Expert</CardTitle>
                  <p className="text-sm text-gray-600">$10k+/month revenue</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">Clear Win</div>
                    <p className="text-sm text-gray-600">
                      Platform saves money vs alternatives while increasing performance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 text-left">
              <h3 className="text-xl font-semibold mb-4">The Honest Assessment</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>If you're just starting:</strong> Use Substack or basic WordPress. 
                  Focus on building your audience first.
                </p>
                <p>
                  <strong>If you're growing (5k+/month):</strong> Platform limitations are starting 
                  to cost you revenue. Time to upgrade.
                </p>
                <p>
                  <strong>If you're established (10k+/month):</strong> Not using a optimized platform 
                  is leaving significant money on the table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to See the Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience a platform built specifically for thought leaders who are serious about growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/intake" className="flex items-center gap-2">
                  Start Discovery Process
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/expert-publisher-guide">
                  Learn Our Methodology
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No sales calls required. See if Expert Publisher is right for your business.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
