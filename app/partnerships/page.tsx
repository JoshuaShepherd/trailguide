import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Handshake, 
  Users, 
  Zap, 
  Globe,
  TrendingUp,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Heart,
  Lightbulb,
  Target,
  Building,
  Briefcase,
  Network,
  Gift,
  Mail
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnerships | TrailGuide',
  description: 'Join TrailGuide\'s partner ecosystem to accelerate nonprofit AI adoption. Explore referral, integration, co-marketing, and advisory partnership opportunities.',
}

const currentPartners = [
  {
    name: "Microsoft for Nonprofits",
    type: "Technology Integration",
    logo: "🔵",
    description: "Azure AI services integration for enhanced platform capabilities",
    benefits: "Advanced AI models, cloud infrastructure, enterprise security"
  },
  {
    name: "Salesforce Nonprofit Cloud",
    type: "Platform Integration", 
    logo: "☁️",
    description: "Seamless CRM integration for nonprofit customer management",
    benefits: "Data synchronization, workflow automation, donor insights"
  },
  {
    name: "TechSoup Global",
    type: "Distribution Partner",
    logo: "🌐",
    description: "Technology distribution and nonprofit verification services",
    benefits: "Global nonprofit network access, technology discounts"
  },
  {
    name: "Blackbaud",
    type: "Strategic Integration",
    logo: "⚫",
    description: "Fundraising platform integration and data connectivity",
    benefits: "Donor data insights, fundraising optimization, reporting"
  },
  {
    name: "Guidestar by Candid",
    type: "Data Partnership",
    logo: "⭐",
    description: "Nonprofit profile data and transparency metrics integration",
    benefits: "Organization verification, impact metrics, sector insights"
  },
  {
    name: "Network for Good",
    type: "Content Partnership",
    logo: "💚",
    description: "Educational content and best practices collaboration",
    benefits: "Training resources, webinar co-hosting, thought leadership"
  }
]

const partnershipTypes = [
  {
    title: "Referral Partner",
    tier: "Bronze",
    commitment: "Low",
    benefits: [
      "Commission on successful referrals",
      "Marketing materials and templates", 
      "Partner portal access",
      "Quarterly performance reports",
      "Basic co-marketing opportunities"
    ],
    requirements: [
      "Existing nonprofit client base",
      "Minimum 5 qualified referrals/year",
      "Basic TrailGuide product knowledge",
      "Signed referral agreement"
    ],
    commission: "10-15%"
  },
  {
    title: "Integration Partner", 
    tier: "Silver",
    commitment: "Medium",
    benefits: [
      "Technical integration support",
      "Joint go-to-market opportunities",
      "Co-branded solutions",
      "Priority support channel",
      "Revenue sharing agreements"
    ],
    requirements: [
      "Technical integration capability",
      "Complementary nonprofit-focused product",
      "Dedicated partnership resources",
      "Joint development roadmap"
    ],
    commission: "15-25%"
  },
  {
    title: "Strategic Partner",
    tier: "Gold",
    commitment: "High", 
    benefits: [
      "Joint product development",
      "Exclusive market opportunities",
      "Advisory board participation",
      "Shared marketing budgets",
      "Executive relationship management"
    ],
    requirements: [
      "Significant nonprofit market presence",
      "Multi-year partnership commitment",
      "Joint investment in initiatives",
      "Executive sponsor alignment"
    ],
    commission: "25-40%"
  },
  {
    title: "Advisory Partner",
    tier: "Platinum",
    commitment: "Strategic",
    benefits: [
      "Product direction influence",
      "Exclusive early access",
      "Industry thought leadership",
      "Speaking opportunities",
      "Equity considerations"
    ],
    requirements: [
      "Recognized nonprofit sector expertise",
      "Strategic guidance capability", 
      "Long-term vision alignment",
      "Board or advisory committee participation"
    ],
    commission: "Equity + Revenue"
  }
]

const successStories = [
  {
    partner: "Nonprofit Technology Network (NTEN)",
    type: "Content Partnership",
    challenge: "Members needed practical AI implementation guidance",
    solution: "Co-developed AI readiness curriculum and certification program",
    results: [
      "500+ nonprofit professionals trained",
      "85% completion rate for certification",
      "40% increase in member AI adoption"
    ],
    quote: "TrailGuide's partnership helped us deliver exactly what our members needed - practical, actionable AI guidance.",
    spokesperson: "Amy Sample Ward, CEO"
  },
  {
    partner: "Chronicle of Philanthropy",
    type: "Media Partnership",
    challenge: "Sector needed accessible AI education content",
    solution: "Monthly AI insights column and quarterly research reports",
    results: [
      "2M+ content impressions per month",
      "Featured in 15 major publications",
      "Established thought leadership position"
    ],
    quote: "The partnership elevated the entire nonprofit sector's understanding of AI possibilities.",
    spokesperson: "Alex Daniels, Editor"
  }
]

const applicationProcess = [
  {
    step: 1,
    title: "Initial Application",
    description: "Complete our partnership application with details about your organization and partnership interests.",
    timeframe: "5 minutes"
  },
  {
    step: 2,
    title: "Qualification Review",
    description: "Our partnerships team reviews your application and assesses fit with our ecosystem.",
    timeframe: "3-5 business days"
  },
  {
    step: 3,
    title: "Discovery Call",
    description: "Schedule a consultation to discuss mutual opportunities and alignment.",
    timeframe: "30-45 minutes"
  },
  {
    step: 4,
    title: "Proposal Development",
    description: "We collaborate on a customized partnership proposal with specific terms and benefits.",
    timeframe: "1-2 weeks"
  },
  {
    step: 5,
    title: "Agreement & Launch",
    description: "Finalize partnership agreement and launch with dedicated onboarding support.",
    timeframe: "2-4 weeks"
  }
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-white border-b border-trailguide-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
              Join our ecosystem of mission-driven partners working to accelerate AI adoption 
              across the nonprofit sector. Together, we can amplify impact for social good.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">50+</div>
                <div className="text-sm text-trailguide-slate">Active Partners</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Globe className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">25</div>
                <div className="text-sm text-trailguide-slate">Countries</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">$2.4M</div>
                <div className="text-sm text-trailguide-slate">Partner Revenue</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">15K</div>
                <div className="text-sm text-trailguide-slate">Nonprofits Served</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Current Partner Ecosystem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 text-center">
            Our Partner Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="border-trailguide-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{partner.logo}</div>
                    <div>
                      <h3 className="font-semibold text-trailguide-neutral">{partner.name}</h3>
                      <Badge variant="secondary" className="text-xs">{partner.type}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-trailguide-slate mb-3">{partner.description}</p>
                  
                  <div className="text-xs text-trailguide-slate">
                    <strong>Benefits: </strong>{partner.benefits}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Partnership Types & Benefits
            </h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              We offer flexible partnership models designed to match your organization's 
              capabilities, commitment level, and growth objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-trailguide-border relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  type.tier === 'Bronze' ? 'bg-amber-600' :
                  type.tier === 'Silver' ? 'bg-gray-400' :
                  type.tier === 'Gold' ? 'bg-yellow-500' :
                  'bg-purple-600'
                }`} />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={
                        type.tier === 'Bronze' ? 'bg-amber-100 text-amber-800' :
                        type.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                        type.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }
                    >
                      {type.tier} Tier
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-trailguide-slate">
                    <span>Commitment: {type.commitment}</span>
                    <span>•</span>
                    <span>Commission: {type.commission}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-trailguide-slate">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {type.requirements.map((requirement, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Target className="h-4 w-4 text-trailguide-evergreen mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-trailguide-slate">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6">
                    Apply for {type.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 text-center">
            Partnership Success Stories
          </h2>
          
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <Building className="h-6 w-6 text-trailguide-evergreen" />
                        <div>
                          <h3 className="font-semibold text-trailguide-neutral text-lg">{story.partner}</h3>
                          <Badge variant="secondary">{story.type}</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-trailguide-neutral mb-1">Challenge</h4>
                          <p className="text-sm text-trailguide-slate">{story.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-trailguide-neutral mb-1">Solution</h4>
                          <p className="text-sm text-trailguide-slate">{story.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-trailguide-neutral mb-3">Results Achieved</h4>
                      <ul className="space-y-2 mb-6">
                        {story.results.map((result, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 fill-current" />
                            <span className="text-trailguide-slate">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <blockquote className="border-l-4 border-trailguide-evergreen pl-4">
                        <p className="text-trailguide-slate italic mb-2">"{story.quote}"</p>
                        <cite className="text-sm font-medium text-trailguide-neutral">
                          — {story.spokesperson}
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Partnership Application Process
            </h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Our streamlined process ensures we find the right partnership model 
              that creates mutual value and drives nonprofit sector impact.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="space-y-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-trailguide-evergreen rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    {index < applicationProcess.length - 1 && (
                      <div className="w-0.5 h-16 bg-trailguide-border mx-auto mt-4" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-trailguide-neutral text-lg">{step.title}</h3>
                      <Badge variant="outline">{step.timeframe}</Badge>
                    </div>
                    <p className="text-trailguide-slate">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section className="mb-16">
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
                Start Your Partnership Journey
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Ready to explore partnership opportunities? Complete this form and our 
                partnerships team will be in touch within 3 business days.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto border-trailguide-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Organization Name *
                      </label>
                      <Input id="organization" placeholder="Your organization name" />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Primary Contact *
                      </label>
                      <Input id="contact" placeholder="Your full name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="contact@organization.org" />
                    </div>
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Job Title
                      </label>
                      <Input id="title" placeholder="Your job title" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="partnership-type" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Partnership Interest *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="referral">Referral Partner</SelectItem>
                        <SelectItem value="integration">Integration Partner</SelectItem>
                        <SelectItem value="strategic">Strategic Partner</SelectItem>
                        <SelectItem value="advisory">Advisory Partner</SelectItem>
                        <SelectItem value="content">Content Partnership</SelectItem>
                        <SelectItem value="distribution">Distribution Partner</SelectItem>
                        <SelectItem value="other">Other (please specify)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="organization-type" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Organization Type *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                        <SelectItem value="tech-vendor">Technology Vendor</SelectItem>
                        <SelectItem value="consultant">Consulting Firm</SelectItem>
                        <SelectItem value="association">Industry Association</SelectItem>
                        <SelectItem value="foundation">Foundation/Funder</SelectItem>
                        <SelectItem value="academic">Academic Institution</SelectItem>
                        <SelectItem value="media">Media/Publisher</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Website URL
                    </label>
                    <Input id="website" placeholder="https://your-website.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Tell us about your organization *
                    </label>
                    <Textarea 
                      id="description" 
                      placeholder="Brief description of your organization, mission, and how you serve nonprofits..."
                      className="h-24"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="partnership-goals" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Partnership Goals & Ideas *
                    </label>
                    <Textarea 
                      id="partnership-goals" 
                      placeholder="What specific partnership opportunities interest you? How do you envision working together?"
                      className="h-24"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nonprofit-reach" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Nonprofit Client/Audience Reach
                    </label>
                    <Input id="nonprofit-reach" placeholder="Approximate number of nonprofits you serve/reach" />
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Preferred Timeline
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When would you like to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="planning">Just planning/exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="rounded border-trailguide-border"
                    />
                    <label htmlFor="newsletter" className="text-sm text-trailguide-slate">
                      Subscribe to our partner newsletter for updates and opportunities
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Handshake className="h-4 w-4 mr-2" />
                    Submit Partnership Application
                  </Button>
                  
                  <p className="text-xs text-trailguide-slate text-center">
                    By submitting this form, you agree to our partnership evaluation process 
                    and potential follow-up communications about partnership opportunities.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Questions About Partnerships?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Our partnerships team is here to help you explore opportunities that create 
              mutual value and drive impact for the nonprofit sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:partnerships@trailguide.org">
                  <Mail className="h-4 w-4 mr-2" />
                  partnerships@trailguide.org
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  <Users className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
