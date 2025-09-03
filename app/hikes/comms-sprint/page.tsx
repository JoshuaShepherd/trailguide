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
  MessageSquare,
  Share2,
  BarChart3,
  Zap,
  Video,
  Mic
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Communications Sprint | TrailGuide Hikes',
  description: 'Build a powerful communications strategy in 5 days. Master storytelling, content creation, media relations, and AI-powered outreach.',
}

const hikeOverview = {
  title: "Communications Sprint",
  subtitle: "Build Your Media & Outreach Engine in 5 Days",
  duration: "5 days",
  format: "Virtual intensive with live collaboration",
  cohortSize: "10-12 participants",
  difficulty: "Intermediate",
  nextStartDate: "November 5, 2025",
  price: {
    standard: 799,
    earlyBird: 599,
    scholarship: 249
  }
}

const learningObjectives = [
  {
    module: "Day 1: Strategic Communications Foundation",
    objectives: [
      "Define your unique voice and key messages using AI tools",
      "Map stakeholder audiences and communication channels",
      "Build a comprehensive communications strategy framework",
      "Create editorial calendars and content planning systems"
    ]
  },
  {
    module: "Day 2: Content Creation & Storytelling", 
    objectives: [
      "Craft compelling stories using data-driven narrative techniques",
      "Master different content formats: written, visual, video, audio",
      "Use AI tools for content generation, editing, and optimization",
      "Develop reusable content templates and brand guidelines"
    ]
  },
  {
    module: "Day 3: Media Relations & Press Strategy",
    objectives: [
      "Build targeted media lists using AI research tools",
      "Write effective press releases and media pitches",
      "Prepare for interviews and media interactions",
      "Create crisis communication protocols and responses"
    ]
  },
  {
    module: "Day 4: Digital Outreach & Social Strategy",
    objectives: [
      "Develop social media strategies across multiple platforms",
      "Create engagement campaigns and community building tactics",
      "Use automation tools for outreach and relationship building",
      "Design email campaigns and newsletter strategies"
    ]
  },
  {
    module: "Day 5: Measurement & Optimization",
    objectives: [
      "Set up analytics and tracking systems for all channels",
      "Create dashboards for communications impact measurement",
      "Build feedback loops for continuous strategy improvement",
      "Plan post-sprint implementation and scaling strategies"
    ]
  }
]

const facilitators = [
  {
    name: "Maria Gonzalez",
    title: "Communications Director & Former Journalist",
    bio: "15+ years in nonprofit communications including 8 years as a journalist at major publications. Led communications for organizations raising $100M+ annually.",
    expertise: ["Media Relations", "Crisis Communications", "Digital Strategy"],
    credentials: ["MA Journalism", "Former NPR correspondent", "Led 50+ successful campaigns"],
    image: "👩🏽‍📺"
  },
  {
    name: "David Kim",
    title: "Digital Marketing Specialist & Content Creator", 
    bio: "Expert in content creation and social media strategy for nonprofits. Helped organizations grow audiences by 300%+ using data-driven approaches.",
    expertise: ["Content Strategy", "Social Media", "AI Tools"],
    credentials: ["Digital Marketing Certified", "500K+ follower growth", "AI content tools expert"],
    image: "👨🏻‍💻"
  }
]

const prerequisites = [
  "Basic understanding of your organization's mission and goals",
  "Access to laptop/computer with internet and camera for video sessions", 
  "Completed TrailMap assessment with focus on communications readiness",
  "Current communications challenge or opportunity to work on during sprint",
  "Willingness to share work for peer feedback and collaboration"
]

const toolsAndPlatforms = [
  {
    category: "AI Content Tools",
    tools: ["ChatGPT", "Claude", "Jasper", "Copy.ai", "Grammarly", "Hemingway Editor"]
  },
  {
    category: "Design & Visual",
    tools: ["Canva Pro", "Adobe Express", "Figma", "Unsplash", "Pexels", "DALL-E"]
  },
  {
    category: "Media & Outreach",
    tools: ["Cision", "HARO", "Meltwater", "Google Alerts", "Social media APIs", "Email automation"]
  },
  {
    category: "Analytics & Tracking",
    tools: ["Google Analytics", "Social media insights", "Email analytics", "Media monitoring", "Custom dashboards"]
  }
]

const successStories = [
  {
    participant: "Jennifer Walsh",
    organization: "Clean Water Initiative",
    result: "40% increase in media coverage, 200% email list growth",
    quote: "The media relations training was game-changing. I went from struggling to get coverage to having reporters call me for quotes.",
    metrics: {
      before: "2-3 media mentions per quarter",
      after: "12-15 media mentions per month"
    }
  },
  {
    participant: "Carlos Rivera",
    organization: "Youth Arts Collective",
    result: "Launched successful $50K crowdfunding campaign",
    quote: "Learning to tell our story effectively helped us connect with supporters in ways we never imagined. The AI tools saved hours of work.",
    metrics: {
      before: "500 email subscribers, 15% open rates",
      after: "2,500 subscribers, 35% open rates"
    }
  },
  {
    participant: "Dr. Fatima Ahmed",
    organization: "Community Health Network", 
    result: "Featured in 3 major publications, became industry thought leader",
    quote: "The sprint taught me how to position myself as an expert. Now I'm the go-to person reporters call for health equity stories.",
    metrics: {
      before: "No media presence, limited reach",
      after: "Monthly media appearances, 10K LinkedIn followers"
    }
  }
]

const communicationChannels = [
  {
    channel: "Traditional Media",
    icon: Mic,
    focus: "Press releases, journalist relationships, media interviews, thought leadership"
  },
  {
    channel: "Digital Content",
    icon: Video,
    focus: "Blog posts, newsletters, social media, video content, podcasts"
  },
  {
    channel: "Stakeholder Outreach",
    icon: MessageSquare,
    focus: "Donor communications, volunteer engagement, board updates, partnership outreach"
  },
  {
    channel: "Crisis Response",
    icon: Zap,
    focus: "Crisis protocols, rapid response, reputation management, stakeholder communications"
  }
]

const pricingOptions = [
  {
    tier: "Early Bird",
    price: 599,
    originalPrice: 799,
    deadline: "October 5, 2025",
    includes: [
      "Full 5-day intensive program",
      "AI tools access and training",
      "Media database access (3 months)",
      "1:1 strategy session with facilitator",
      "Templates and resource library",
      "6 months of follow-up support"
    ],
    badge: "Save $200",
    popular: true
  },
  {
    tier: "Standard", 
    price: 799,
    deadline: "Until program starts",
    includes: [
      "Full 5-day intensive program", 
      "AI tools access during program",
      "Media database access (1 month)",
      "Group coaching sessions",
      "Templates and resources",
      "3 months of follow-up support"
    ],
    popular: false
  },
  {
    tier: "Scholarship",
    price: 249,
    deadline: "Application required",
    includes: [
      "Full 5-day intensive program",
      "Basic AI tools access",
      "Group sessions only",
      "Essential templates",
      "1 month follow-up support"
    ],
    note: "Need-based scholarships for organizations with budgets under $250K",
    popular: false
  }
]

const dailySchedule = [
  {
    time: "9:00-9:30 AM PT",
    activity: "Morning Check-in & Goal Setting",
    type: "Community"
  },
  {
    time: "9:30-11:00 AM PT", 
    activity: "Core Communications Training",
    type: "Instruction"
  },
  {
    time: "11:00-11:15 AM PT",
    activity: "Break & Networking",
    type: "Break"
  },
  {
    time: "11:15-12:30 PM PT",
    activity: "Hands-on Content Creation Workshop",
    type: "Workshop"
  },
  {
    time: "12:30-1:30 PM PT",
    activity: "Lunch Break",
    type: "Break"
  },
  {
    time: "1:30-2:45 PM PT",
    activity: "Individual Project Work & AI Tools Practice",
    type: "Practice"
  },
  {
    time: "2:45-3:00 PM PT",
    activity: "Break",
    type: "Break" 
  },
  {
    time: "3:00-4:00 PM PT",
    activity: "Peer Review & Feedback Sessions",
    type: "Collaboration"
  },
  {
    time: "4:00-4:30 PM PT",
    activity: "Daily Wrap-up & Next Day Preview",
    type: "Planning"
  }
]

export default function CommsSprintPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                {hikeOverview.difficulty} Level • {hikeOverview.duration}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{hikeOverview.title}</h1>
              <p className="text-xl mb-6 text-blue-100">{hikeOverview.subtitle}</p>
              
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
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Register Now - ${hikeOverview.price.earlyBird}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Sample Session
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold">${hikeOverview.price.earlyBird}</div>
                    <div className="text-blue-100 line-through">${hikeOverview.price.standard}</div>
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
        {/* Communication Channels We'll Master */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Master All Communication Channels
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <Card key={index} className="border-trailguide-border text-center">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-trailguide-neutral text-lg mb-3">{channel.channel}</h3>
                    <p className="text-trailguide-slate text-sm">{channel.focus}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Learning Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Your 5-Day Learning Journey
          </h2>
          
          <div className="space-y-6">
            {learningObjectives.map((day, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
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

        {/* Tools & Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Tools & Platforms You'll Master
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolsAndPlatforms.map((category, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tool}</Badge>
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
            Learn from Communications Experts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitators.map((facilitator, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{facilitator.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-trailguide-neutral text-lg">{facilitator.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{facilitator.title}</p>
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

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8 text-center">
            Real Results from Past Participants
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
                        <span className="text-sm text-trailguide-slate">• 3 months after completion</span>
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
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{story.result}</div>
                          <div className="text-sm text-blue-600">Impact Achieved</div>
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
            What You'll Need to Succeed
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
                  <strong>New to communications?</strong> Consider taking our Communications Foundations 
                  mini-course first, or schedule a consultation to discuss your readiness level.
                </p>
              </div>
            </CardContent>
          </Card>
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
                className={`border-trailguide-border relative ${option.popular ? 'ring-2 ring-blue-600' : ''}`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
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
                    className={`w-full ${option.popular ? 'bg-blue-600 hover:bg-blue-600/90' : ''}`}
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
          <div className="bg-blue-600/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
                Ready to Transform Your Communications?
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Join the next cohort and learn to tell your story with impact. 
                Early bird pricing ends October 5th.
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
                        <SelectItem value="communications-director">Communications Director</SelectItem>
                        <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                        <SelectItem value="program-director">Program Director</SelectItem>
                        <SelectItem value="development-coordinator">Development Coordinator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Communications Experience *
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
                    <label htmlFor="challenge" className="block text-sm font-medium text-trailguide-neutral mb-2">
                      Current Communications Challenge *
                    </label>
                    <Textarea 
                      id="challenge" 
                      placeholder="What specific communications challenge would you like to work on during the sprint?"
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
                        <SelectItem value="early-bird">Early Bird - $599 (Save $200)</SelectItem>
                        <SelectItem value="standard">Standard - $799</SelectItem>
                        <SelectItem value="scholarship">Scholarship Application - $249</SelectItem>
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
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-600/90">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Complete Registration - $599
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
              Questions About the Communications Sprint?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Our team is here to help you determine if this intensive is right for your 
              communications goals. Schedule a free consultation or reach out with questions.
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
