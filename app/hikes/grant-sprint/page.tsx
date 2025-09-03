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
  Phone
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Grant Writing Sprint | TrailGuide Hikes',
  description: 'Master AI-powered grant writing in 5 intensive days. Learn to research funders, write compelling proposals, and manage grants with cutting-edge tools.',
}

const hikeOverview = {
  title: "Grant Writing Sprint",
  subtitle: "Master AI-Powered Grant Writing in 5 Days",
  duration: "5 days",
  format: "Virtual intensive with peer collaboration",
  cohortSize: "12-15 participants",
  difficulty: "Intermediate",
  nextStartDate: "October 15, 2025",
  price: {
    standard: 899,
    earlyBird: 699,
    scholarship: 299
  }
}

const learningObjectives = [
  {
    module: "Day 1: Funder Research & Alignment",
    objectives: [
      "Use AI tools to identify perfect-fit funders for your mission",
      "Analyze funding patterns and preferences using data",
      "Create a strategic funding pipeline with success probabilities",
      "Master database research techniques and tools"
    ]
  },
  {
    module: "Day 2: Proposal Strategy & Structure", 
    objectives: [
      "Design compelling narrative frameworks with AI assistance",
      "Structure proposals for maximum reviewer impact",
      "Develop budget templates and financial projections",
      "Create reusable proposal components and templates"
    ]
  },
  {
    module: "Day 3: Writing & Content Creation",
    objectives: [
      "Write persuasive program descriptions using AI collaboration",
      "Craft compelling needs statements with data backing",
      "Develop evaluation frameworks and logic models",
      "Create executive summaries that capture attention"
    ]
  },
  {
    module: "Day 4: Review, Feedback & Iteration",
    objectives: [
      "Implement peer review processes for quality assurance",
      "Use AI tools for grammar, clarity, and impact optimization",
      "Refine proposals based on funder-specific requirements",
      "Create submission checklists and timelines"
    ]
  },
  {
    module: "Day 5: Submission & Relationship Building",
    objectives: [
      "Master submission platforms and requirements",
      "Develop post-submission follow-up strategies",
      "Build long-term funder relationships and stewardship",
      "Create grant management and reporting systems"
    ]
  }
]

const facilitators = [
  {
    name: "Dr. Elena Martinez",
    title: "Grant Writing Expert & Former Program Officer",
    bio: "15+ years experience including 8 years as a program officer at major foundations. Helped nonprofits secure over $50M in funding.",
    expertise: ["Foundation Relations", "Proposal Strategy", "Program Design"],
    credentials: ["PhD in Nonprofit Management", "Former Gates Foundation", "500+ successful grants"],
    image: "👩🏽‍💼"
  },
  {
    name: "Marcus Chen",
    title: "AI Tools Specialist & Data Analyst", 
    bio: "Technology consultant specializing in AI applications for nonprofit development. Expert in grant database analysis and automated research.",
    expertise: ["AI Tools", "Data Analysis", "Research Automation"],
    credentials: ["MS Computer Science", "10+ years tech nonprofit sector", "AI grant tools developer"],
    image: "👨🏻‍💻"
  }
]

const prerequisites = [
  "Basic grant writing experience or completion of Grant Writing Foundations course",
  "Access to laptop/computer with internet connection", 
  "Completed TrailMap assessment with focus on fundraising readiness",
  "Current fundraising need of $25K+ to work on during sprint",
  "Organizational commitment to implement learnings post-sprint"
]

const dailySchedule = [
  {
    time: "9:00-9:30 AM PT",
    activity: "Welcome & Peer Introductions",
    type: "Community"
  },
  {
    time: "9:30-11:00 AM PT", 
    activity: "Core Learning Session",
    type: "Instruction"
  },
  {
    time: "11:00-11:15 AM PT",
    activity: "Break & Networking",
    type: "Break"
  },
  {
    time: "11:15-12:30 PM PT",
    activity: "Hands-on Workshop & AI Tools",
    type: "Workshop"
  },
  {
    time: "12:30-1:30 PM PT",
    activity: "Lunch Break",
    type: "Break"
  },
  {
    time: "1:30-2:45 PM PT",
    activity: "Individual Work & Coaching",
    type: "Practice"
  },
  {
    time: "2:45-3:00 PM PT",
    activity: "Break",
    type: "Break" 
  },
  {
    time: "3:00-4:00 PM PT",
    activity: "Peer Review & Feedback",
    type: "Collaboration"
  },
  {
    time: "4:00-4:30 PM PT",
    activity: "Daily Wrap-up & Tomorrow's Prep",
    type: "Planning"
  }
]

const successStories = [
  {
    participant: "Sarah Thompson",
    organization: "Community Gardens Coalition",
    result: "$150K grant secured within 60 days",
    quote: "The AI research tools alone saved me 20 hours per proposal. I went from 10% success rate to 60% success rate.",
    beforeAfter: {
      before: "Manual research, generic proposals, 10% success rate",
      after: "AI-powered targeting, personalized proposals, 60% success rate"
    }
  },
  {
    participant: "James Rodriguez",
    organization: "Youth Coding Academy",
    result: "$75K foundation grant + $200K corporate partnership",
    quote: "Learning to build funder relationships changed everything. It's not just about the money - it's about partnerships.",
    beforeAfter: {
      before: "One-off applications, no follow-up strategy",
      after: "Strategic funder relationships, ongoing partnerships"
    }
  },
  {
    participant: "Dr. Aisha Patel",
    organization: "Rural Health Access Initiative", 
    result: "$300K multi-year federal grant",
    quote: "The proposal structure framework gave me confidence to go after bigger, more complex opportunities.",
    beforeAfter: {
      before: "Small local grants, under $25K",
      after: "Federal grants, multi-year funding, over $300K"
    }
  }
]

const pricingOptions = [
  {
    tier: "Early Bird",
    price: 699,
    originalPrice: 899,
    deadline: "September 15, 2025",
    includes: [
      "Full 5-day intensive program",
      "AI tools access during and after program",
      "Peer collaboration platform access",
      "1:1 coaching session with facilitator",
      "Grant template library and resources",
      "6 months of follow-up support"
    ],
    badge: "Save $200",
    popular: true
  },
  {
    tier: "Standard", 
    price: 899,
    deadline: "Until program starts",
    includes: [
      "Full 5-day intensive program", 
      "AI tools access during program",
      "Peer collaboration platform access",
      "Group coaching sessions",
      "Grant template library",
      "3 months of follow-up support"
    ],
    popular: false
  },
  {
    tier: "Scholarship",
    price: 299,
    deadline: "Application required",
    includes: [
      "Full 5-day intensive program",
      "Basic AI tools access",
      "Peer collaboration platform", 
      "Group sessions only",
      "Basic template library",
      "1 month follow-up support"
    ],
    note: "Need-based scholarships for organizations with budgets under $500K",
    popular: false
  }
]

const cohortBenefits = [
  {
    icon: Users,
    title: "Peer Collaboration",
    description: "Work alongside 12-15 other nonprofit professionals facing similar fundraising challenges"
  },
  {
    icon: Target,
    title: "Real Project Focus",
    description: "Work on actual grant applications during the sprint with expert guidance"
  },
  {
    icon: Lightbulb,
    title: "AI Tool Mastery",
    description: "Get hands-on experience with cutting-edge AI tools for research and writing"
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Previous participants see 40-60% improvement in grant success rates"
  }
]

export default function GrantSprintPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trailguide-evergreen to-trailguide-evergreen/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                {hikeOverview.difficulty} Level • {hikeOverview.duration}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{hikeOverview.title}</h1>
              <p className="text-xl mb-6 text-green-100">{hikeOverview.subtitle}</p>
              
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
                <Button size="lg" className="bg-white text-trailguide-evergreen hover:bg-white/90">
                  Register Now - ${hikeOverview.price.earlyBird}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Preview
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold">${hikeOverview.price.earlyBird}</div>
                    <div className="text-green-100 line-through">${hikeOverview.price.standard}</div>
                    <div className="text-sm">Early Bird - Save $200</div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Program Duration</span>
                      <span className="font-medium">{hikeOverview.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Daily Commitment</span>
                      <span className="font-medium">7.5 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cohort Size</span>
                      <span className="font-medium">{hikeOverview.cohortSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Follow-up Support</span>
                      <span className="font-medium">6 months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Learning Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            What You'll Master in 5 Days
          </h2>
          
          <div className="space-y-6">
            {learningObjectives.map((day, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-8 h-8 bg-trailguide-evergreen text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
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
            Meet Your Expert Facilitators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitators.map((facilitator, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{facilitator.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-trailguide-neutral text-lg">{facilitator.name}</h3>
                      <p className="text-trailguide-evergreen font-medium mb-3">{facilitator.title}</p>
                      <p className="text-trailguide-slate text-sm mb-4">{facilitator.bio}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-trailguide-neutral mb-1">Expertise</h4>
                          <div className="flex flex-wrap gap-1">
                            {facilitator.expertise.map((skill, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-trailguide-neutral mb-1">Credentials</h4>
                          <ul className="text-xs text-trailguide-slate space-y-1">
                            {facilitator.credentials.map((cred, i) => (
                              <li key={i}>• {cred}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Daily Schedule Overview
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="space-y-4">
                {dailySchedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-trailguide-border last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-24 text-sm font-medium text-trailguide-neutral">
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
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Time Zone:</strong> All sessions are in Pacific Time (PT). 
                  Recordings available for participants who can't attend live sessions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prerequisites */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Prerequisites & Preparation
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="space-y-4">
                {prerequisites.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Not sure if you're ready?</strong> Schedule a free 15-minute consultation 
                  with our team to discuss your goals and determine if this sprint is right for you.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Participant Success Stories
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
                        <span className="text-sm text-trailguide-slate">• 6 months after completion</span>
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
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-800">{story.result}</div>
                          <div className="text-sm text-green-600">Results Achieved</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-trailguide-neutral">Before:</div>
                          <div className="text-xs text-trailguide-slate">{story.beforeAfter.before}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-trailguide-neutral">After:</div>
                          <div className="text-xs text-trailguide-slate">{story.beforeAfter.after}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cohort Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Why Learn in a Cohort?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cohortBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-trailguide-border text-center">
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                    <h3 className="font-bold text-trailguide-neutral text-lg mb-3">{benefit.title}</h3>
                    <p className="text-trailguide-slate">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Investment Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`border-trailguide-border relative ${option.popular ? 'ring-2 ring-trailguide-evergreen' : ''}`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-trailguide-evergreen text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{option.tier}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-trailguide-neutral">
                      ${option.price}
                      {option.originalPrice && (
                        <span className="text-lg text-trailguide-slate line-through ml-2">
                          ${option.originalPrice}
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
                    className={`w-full ${option.popular ? 'bg-trailguide-evergreen hover:bg-trailguide-evergreen/90' : ''}`}
                    variant={option.popular ? 'default' : 'outline'}
                  >
                    {option.tier === 'Scholarship' ? 'Apply for Scholarship' : 'Register Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="mb-16">
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
                Ready to Transform Your Grant Writing?
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Join the next cohort and learn to secure more funding with less effort. 
                Early bird pricing ends September 15th.
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
                        Phone Number
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
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Your Role *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="executive-director">Executive Director</SelectItem>
                        <SelectItem value="development-director">Development Director</SelectItem>
                        <SelectItem value="grants-manager">Grants Manager</SelectItem>
                        <SelectItem value="program-director">Program Director</SelectItem>
                        <SelectItem value="fundraising-coordinator">Fundraising Coordinator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Grant Writing Experience *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                        <SelectItem value="expert">Expert (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="funding-goal" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Current Funding Goal *
                    </label>
                    <Textarea 
                      id="funding-goal" 
                      placeholder="Briefly describe the specific grant opportunity you want to work on during the sprint..."
                      className="h-24"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pricing" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Pricing Option *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pricing option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early-bird">Early Bird - $699 (Save $200)</SelectItem>
                        <SelectItem value="standard">Standard - $899</SelectItem>
                        <SelectItem value="scholarship">Scholarship Application - $299</SelectItem>
                      </SelectContent>
                    </Select>
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
                  
                  <Button type="submit" className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Complete Registration - $699
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-trailguide-slate">
                      Questions? Contact us at <strong>hikes@trailguide.org</strong> or call (555) 123-4567
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
              Questions About the Grant Writing Sprint?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Our team is here to help you determine if this intensive is right for your goals. 
              Schedule a free consultation or reach out with any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:hikes@trailguide.org">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Our Team
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="tel:+1-555-123-4567">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Call
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  More Questions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
