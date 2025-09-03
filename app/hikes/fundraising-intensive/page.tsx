import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Calendar,
  Clock,
  Users,
  Target,
  Award,
  BookOpen,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Play,
  User,
  Globe,
  Lightbulb,
  TrendingUp,
  Heart,
  Mail,
  Phone,
  PiggyBank,
  CreditCard,
  UserCheck,
  BarChart,
  Handshake,
  Gift,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fundraising Intensive | TrailGuide Hikes',
  description: 'Build a comprehensive fundraising strategy in 7 days. Master donor relationships, campaign design, and AI-powered development operations.',
}

const hikeOverview = {
  title: "Fundraising Intensive",
  subtitle: "Build Your Complete Fundraising Engine in 7 Days",
  duration: "7 days",
  format: "Virtual intensive with expert coaching",
  cohortSize: "8-10 participants", 
  difficulty: "Advanced",
  nextStartDate: "December 3, 2025",
  price: {
    standard: 1299,
    earlyBird: 999,
    scholarship: 399
  }
}

const learningObjectives = [
  {
    module: "Day 1: Strategic Fundraising Foundation",
    objectives: [
      "Assess current fundraising capacity and identify growth opportunities",
      "Build comprehensive donor personas and segmentation strategies",
      "Design multi-channel fundraising funnels with AI optimization",
      "Create annual fundraising calendars and goal-setting frameworks"
    ]
  },
  {
    module: "Day 2: Donor Research & Prospecting", 
    objectives: [
      "Master AI-powered prospect research techniques and tools",
      "Build targeted donor databases with wealth screening insights",
      "Develop major gift identification and qualification processes",
      "Create foundation and corporate partnership pipelines"
    ]
  },
  {
    module: "Day 3: Relationship Building & Stewardship",
    objectives: [
      "Design donor journey mapping and lifecycle management",
      "Build personalized stewardship programs that increase retention",
      "Master cultivation strategies for different donor segments",
      "Create volunteer fundraising programs and peer-to-peer campaigns"
    ]
  },
  {
    module: "Day 4: Campaign Design & Execution",
    objectives: [
      "Design compelling fundraising campaigns with psychological triggers",
      "Master digital fundraising platforms and optimization techniques",
      "Build effective direct mail and email fundraising sequences",
      "Create special events and peer-to-peer fundraising strategies"
    ]
  },
  {
    module: "Day 5: Major Gifts & Planned Giving",
    objectives: [
      "Develop major gift solicitation strategies and best practices",
      "Learn planned giving basics and legacy fundraising approaches",
      "Master donor meeting preparation and follow-up systems",
      "Build proposal writing and presentation skills for large gifts"
    ]
  },
  {
    module: "Day 6: Board Engagement & Leadership Fundraising",
    objectives: [
      "Transform board members into effective fundraising ambassadors", 
      "Design board fundraising training and accountability systems",
      "Create leadership giving programs and ambassador networks",
      "Build peer influence strategies and referral programs"
    ]
  },
  {
    module: "Day 7: Systems, Analytics & Scale",
    objectives: [
      "Implement CRM systems and donor database optimization",
      "Build fundraising analytics dashboards and ROI tracking",
      "Create sustainable fundraising operations and staff development",
      "Design growth strategies and scaling frameworks for long-term success"
    ]
  }
]

const facilitators = [
  {
    name: "Sarah Chen, CFRE",
    title: "VP Development & Former Nonprofit CEO",
    bio: "20+ years raising $500M+ for nonprofits from startups to $50M organizations. Expert in capital campaigns, major gifts, and development operations.",
    expertise: ["Major Gifts", "Capital Campaigns", "Board Development"],
    credentials: ["CFRE Certified", "Former United Way CEO", "$500M+ raised", "AFP Faculty"],
    image: "👩🏻‍💼"
  },
  {
    name: "Marcus Thompson",
    title: "Digital Fundraising Strategist & Data Expert", 
    bio: "Former tech executive turned nonprofit fundraising consultant. Specializes in digital campaigns, donor analytics, and fundraising technology.",
    expertise: ["Digital Fundraising", "Donor Analytics", "CRM Systems"],
    credentials: ["MBA Technology", "20+ years tech", "AI fundraising tools creator", "Data science expert"],
    image: "👨🏽‍💻"
  },
  {
    name: "Dr. Patricia Williams",
    title: "Planned Giving & Wealth Management Expert",
    bio: "Former financial advisor now specializing in planned giving and donor psychology. Helped secure $200M+ in planned gifts and legacy donations.", 
    expertise: ["Planned Giving", "Donor Psychology", "Wealth Screening"],
    credentials: ["PhD Psychology", "Financial Planning background", "Planned Giving Institute", "$200M+ legacy gifts"],
    image: "👩🏾‍🎓"
  }
]

const fundraisingChannels = [
  {
    channel: "Individual Giving",
    icon: UserCheck,
    description: "Annual campaigns, major gifts, monthly giving, peer-to-peer"
  },
  {
    channel: "Digital Campaigns",
    icon: Zap,
    description: "Online fundraising, social media, email marketing, crowdfunding"
  },
  {
    channel: "Institutional Funding",
    icon: Handshake,
    description: "Foundations, corporations, government grants, partnerships"
  },
  {
    channel: "Special Events",
    icon: Gift,
    description: "Galas, auctions, peer-to-peer events, virtual fundraising"
  }
]

const prerequisites = [
  "Completed TrailMap assessment with fundraising focus area identified",
  "Current fundraising experience (minimum 1 year in development role)",
  "Access to laptop/computer with high-speed internet for intensive sessions", 
  "Access to your organization's donor database or willingness to start one",
  "Organizational commitment to implement intensive learnings post-program",
  "Authority to make fundraising strategy decisions or direct access to decision-makers"
]

const successStories = [
  {
    participant: "Michael Rodriguez",
    organization: "Community Education Foundation",
    result: "$2.1M raised in following 12 months (300% increase)",
    quote: "The intensive completely transformed our approach. We went from reactive fundraising to a strategic, data-driven operation that consistently hits targets.",
    metrics: {
      before: "$700K annual fundraising, 45% donor retention",
      after: "$2.1M annual fundraising, 78% donor retention, $500K in major gifts"
    },
    timeline: "12 months post-intensive"
  },
  {
    participant: "Dr. Amanda Foster",
    organization: "Rural Health Initiative",
    result: "$850K capital campaign + $1.5M in planned gifts secured",
    quote: "Learning to engage our board as fundraisers was game-changing. They went from writing checks to bringing in major donors and opening doors.",
    metrics: {
      before: "Board giving only, no major gift program",
      after: "100% board giving + solicitation, 12 major gifts over $25K"
    },
    timeline: "8 months post-intensive"
  },
  {
    participant: "James Park",
    organization: "Youth Development Alliance",
    result: "Launched monthly giving program generating $180K annually",
    quote: "The digital fundraising strategies and donor analytics completely revolutionized how we think about donor relationships and lifetime value.",
    metrics: {
      before: "Event-based fundraising only, inconsistent revenue",
      after: "$15K monthly recurring revenue, predictable funding pipeline"
    },
    timeline: "6 months post-intensive"
  }
]

const pricingOptions = [
  {
    tier: "Early Bird",
    price: 999,
    originalPrice: 1299,
    deadline: "November 3, 2025",
    includes: [
      "Full 7-day intensive program",
      "AI fundraising tools access (12 months)",
      "1:1 strategy sessions with all facilitators", 
      "Donor database and CRM setup assistance",
      "Complete template and resource library",
      "12 months of implementation support",
      "Alumni network access and ongoing coaching"
    ],
    badge: "Save $300",
    popular: true
  },
  {
    tier: "Standard", 
    price: 1299,
    deadline: "Until program starts",
    includes: [
      "Full 7-day intensive program", 
      "AI fundraising tools access (6 months)",
      "Group coaching sessions with facilitators",
      "Basic database setup guidance",
      "Core template library",
      "6 months of implementation support",
      "Alumni network access"
    ],
    popular: false
  },
  {
    tier: "Scholarship",
    price: 399,
    deadline: "Application required by October 15",
    includes: [
      "Full 7-day intensive program",
      "Basic AI tools access (3 months)",
      "Group sessions only",
      "Essential templates",
      "3 months follow-up support",
      "Alumni network access"
    ],
    note: "Need-based scholarships for organizations with budgets under $1M. Requires application and financial documentation.",
    popular: false
  }
]

const dailySchedule = [
  {
    time: "8:30-9:00 AM PT",
    activity: "Morning Check-in & Goal Setting",
    type: "Community"
  },
  {
    time: "9:00-10:30 AM PT", 
    activity: "Core Fundraising Strategy Session",
    type: "Instruction"
  },
  {
    time: "10:30-10:45 AM PT",
    activity: "Break & Networking",
    type: "Break"
  },
  {
    time: "10:45-12:15 PM PT",
    activity: "Hands-on Workshop & Tool Implementation",
    type: "Workshop"
  },
  {
    time: "12:15-1:15 PM PT",
    activity: "Lunch Break",
    type: "Break"
  },
  {
    time: "1:15-2:30 PM PT",
    activity: "Individual Strategy Development",
    type: "Practice"
  },
  {
    time: "2:30-2:45 PM PT",
    activity: "Break",
    type: "Break" 
  },
  {
    time: "2:45-3:45 PM PT",
    activity: "Peer Review & Expert Feedback",
    type: "Collaboration"
  },
  {
    time: "3:45-4:15 PM PT",
    activity: "1:1 Coaching Sessions (rotating)",
    type: "Coaching"
  },
  {
    time: "4:15-4:30 PM PT",
    activity: "Daily Wrap-up & Tomorrow's Preparation",
    type: "Planning"
  }
]

const intensiveBenefits = [
  {
    icon: Target,
    title: "Comprehensive Strategy",
    description: "Build complete fundraising operations, not just tactics. Create sustainable systems that grow with your organization."
  },
  {
    icon: BarChart,
    title: "Data-Driven Approach", 
    description: "Learn to use analytics and AI tools to optimize every aspect of your fundraising from prospect research to campaign performance."
  },
  {
    icon: Users,
    title: "Expert-Led Cohort",
    description: "Small cohort size ensures personalized attention from three expert facilitators, plus peer learning from advanced practitioners."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Graduates average 200%+ increase in fundraising within 12 months. Learn the strategies used by top-performing development teams."
  }
]

export default function FundraisingIntensivePage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                {hikeOverview.difficulty} Level • {hikeOverview.duration}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{hikeOverview.title}</h1>
              <p className="text-xl mb-6 text-emerald-100">{hikeOverview.subtitle}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Next cohort: {hikeOverview.nextStartDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{hikeOverview.cohortSize} participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>{hikeOverview.format}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Register Now - ${hikeOverview.price.earlyBird}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Graduate Stories
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold">${hikeOverview.price.earlyBird}</div>
                    <div className="text-emerald-100 line-through">${hikeOverview.price.standard}</div>
                    <div className="text-sm">Early Bird - Save $300</div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Program Duration</span>
                      <span className="font-medium">{hikeOverview.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Daily Commitment</span>
                      <span className="font-medium">8 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cohort Size</span>
                      <span className="font-medium">{hikeOverview.cohortSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Implementation Support</span>
                      <span className="font-medium">12 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Avg. ROI (1 year)</span>
                      <span className="font-medium text-emerald-200">200%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Fundraising Channels Mastery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Master All Fundraising Channels
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundraisingChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <Card key={index} className="border-trailguide-border text-center">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold text-trailguide-neutral text-lg mb-3">{channel.channel}</h3>
                    <p className="text-trailguide-slate text-sm">{channel.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Learning Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Your 7-Day Intensive Journey
          </h2>
          
          <div className="space-y-6">
            {learningObjectives.map((day, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    {day.module}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {day.objectives.map((objective, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-trailguide-slate">{objective}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Facilitators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Learn from Fundraising Industry Leaders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilitators.map((facilitator, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{facilitator.image}</div>
                    <h3 className="font-bold text-trailguide-neutral text-lg">{facilitator.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{facilitator.title}</p>
                  </div>
                  
                  <p className="text-trailguide-slate text-sm mb-4 text-center">{facilitator.bio}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-trailguide-neutral mb-1 text-center">Expertise</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {facilitator.expertise.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-trailguide-neutral mb-1 text-center">Credentials</h4>
                      <ul className="text-xs text-trailguide-slate space-y-1">
                        {facilitator.credentials.map((cred, i) => (
                          <li key={i} className="text-center">• {cred}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Intensive Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Why Choose the 7-Day Intensive Format?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {intensiveBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-trailguide-border">
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold text-trailguide-neutral text-lg mb-3">{benefit.title}</h3>
                    <p className="text-trailguide-slate">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Extraordinary Results from Past Participants
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
                        <span className="text-sm text-trailguide-slate">• {story.timeline}</span>
                      </div>
                      
                      <blockquote className="text-trailguide-neutral text-lg mb-4 italic">
                        "{story.quote}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-3">
                        <User className="h-8 w-8 text-trailguide-slate" />
                        <div>
                          <div className="font-semibold text-trailguide-neutral">{story.participant}</div>
                          <div className="text-sm text-trailguide-slate">{story.organization}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-800">{story.result}</div>
                          <div className="text-sm text-emerald-600">Results Achieved</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-trailguide-neutral">Before:</div>
                          <div className="text-xs text-trailguide-slate">{story.metrics.before}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-trailguide-neutral">After:</div>
                          <div className="text-xs text-trailguide-slate">{story.metrics.after}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Prerequisites & Readiness
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <p className="text-trailguide-slate text-center mb-6">
                  This is our most advanced program, designed for experienced development professionals 
                  ready to transform their fundraising operations. Please ensure you meet these requirements:
                </p>
              </div>
              
              <div className="space-y-4">
                {prerequisites.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Readiness Assessment Required:</strong> All applicants must complete a pre-program 
                  assessment to ensure this intensive is the right fit for your experience level and organizational needs.
                  <Link href="/assessment" className="underline ml-1">Take Assessment</Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Daily Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Intensive Daily Schedule
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="space-y-4">
                {dailySchedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-trailguide-border last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-28 text-sm font-medium text-trailguide-neutral">
                        {session.time}
                      </div>
                      <div>
                        <div className="font-medium text-trailguide-neutral">{session.activity}</div>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        session.type === 'Instruction' ? 'default' :
                        session.type === 'Workshop' ? 'secondary' :
                        session.type === 'Coaching' ? 'default' :
                        session.type === 'Break' ? 'outline' :
                        'secondary'
                      }
                      className="text-xs"
                    >
                      {session.type}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>Time Zone:</strong> All sessions are in Pacific Time (PT). 
                    This intensive format requires live attendance - recordings are for review only.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>1:1 Coaching:</strong> Each participant gets three private 30-minute sessions 
                    with facilitators during the week, plus follow-up implementation calls.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Investment & ROI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`border-trailguide-border relative ${option.popular ? 'ring-2 ring-emerald-600' : ''}`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white">Best Value</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{option.tier}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-trailguide-neutral">
                      ${option.price.toLocaleString()}
                      {option.originalPrice && (
                        <span className="text-lg text-trailguide-slate line-through ml-2">
                          ${option.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {option.badge && (
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        {option.badge}
                      </Badge>
                    )}
                    <div className="text-sm text-trailguide-slate">{option.deadline}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.includes.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-trailguide-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {option.note && (
                    <div className="text-xs text-trailguide-slate bg-trailguide-slate/5 p-3 rounded-lg mb-4">
                      {option.note}
                    </div>
                  )}
                  
                  <Button 
                    className={`w-full ${option.popular ? 'bg-emerald-600 hover:bg-emerald-600/90' : ''}`}
                    variant={option.popular ? 'default' : 'outline'}
                  >
                    {option.tier === 'Scholarship' ? 'Apply for Scholarship' : 'Register Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-trailguide-slate mb-4">
              <strong>Average ROI:</strong> Participants typically see a 200-400% return on investment 
              within 12 months through improved fundraising performance.
            </p>
            <p className="text-sm text-trailguide-slate">
              Payment plans available. Contact us to discuss corporate rates or organizational discounts.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <div className="bg-emerald-600/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
                Apply for the Fundraising Intensive
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                This advanced program requires an application process to ensure participant readiness 
                and program success. Apply early - cohorts are limited to 10 participants.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto border-trailguide-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="you@organization.org" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Organization Name *
                    </label>
                    <Input id="organization" placeholder="Your organization name" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Your Role *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chief-development-officer">Chief Development Officer</SelectItem>
                          <SelectItem value="development-director">Development Director</SelectItem>
                          <SelectItem value="executive-director">Executive Director</SelectItem>
                          <SelectItem value="major-gifts-officer">Major Gifts Officer</SelectItem>
                          <SelectItem value="fundraising-manager">Fundraising Manager</SelectItem>
                          <SelectItem value="other">Other Senior Development Role</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Fundraising Experience *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="orgBudget" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Annual Organization Budget *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                          <SelectItem value="over-25m">Over $25M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="fundraisingGoal" className="block text-sm font-medium text-trailguide-neutral mb-2">
                        Current Annual Fundraising *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Current fundraising level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under $100K</SelectItem>
                          <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="over-5m">Over $5M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Primary Fundraising Challenges *
                    </label>
                    <Textarea 
                      id="challenges" 
                      placeholder="What are the biggest fundraising challenges you want to address? Be specific about goals and obstacles..."
                      className="h-32"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Goals for Next 12 Months *
                    </label>
                    <Textarea 
                      id="goals" 
                      placeholder="What specific fundraising results do you want to achieve in the next 12 months? Include dollar amounts and strategic objectives..."
                      className="h-24"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="commitment" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Implementation Commitment *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Your commitment level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-authority">I have full authority to implement changes</SelectItem>
                        <SelectItem value="leadership-support">I have leadership support for implementation</SelectItem>
                        <SelectItem value="need-buy-in">I'll need to get buy-in but am committed</SelectItem>
                        <SelectItem value="exploring">I'm exploring options and assessing fit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="pricing" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Pricing Option Interest *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pricing preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early-bird">Early Bird - $999 (Save $300)</SelectItem>
                        <SelectItem value="standard">Standard - $1,299</SelectItem>
                        <SelectItem value="scholarship">Scholarship Application - $399</SelectItem>
                        <SelectItem value="corporate">Corporate/Group Rates</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="assessment" 
                      className="rounded border-trailguide-border"
                    />
                    <label htmlFor="assessment" className="text-sm text-trailguide-slate">
                      I understand that acceptance requires completing the TrailMap assessment and may involve a brief interview
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="rounded border-trailguide-border"
                    />
                    <label htmlFor="terms" className="text-sm text-trailguide-slate">
                      I agree to the program terms and conditions and understand the refund policy
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-600/90">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Submit Application
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-trailguide-slate">
                      Questions? Contact our intensive team at <strong>intensive@trailguide.org</strong> or call (555) 123-4567
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact & Questions */}
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Questions About the Fundraising Intensive?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              This is a significant investment in your fundraising future. We're here to help you 
              determine if this intensive is the right fit for your experience level and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:intensive@trailguide.org">
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
                <Link href="/assessment">
                  Take Readiness Assessment
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
