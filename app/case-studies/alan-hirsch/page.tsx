import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
  BarChart3,
  FileText,
  MessageSquare,
  Zap,
  Building,
  MapPin,
  Calendar as CalendarIcon,
  Quote
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Alan Hirsch Case Study | TrailGuide Success Stories',
  description: 'How a veteran nonprofit leader transformed his fundraising approach and secured $2.3M in new funding using TrailGuide methodology.',
}

const caseStudyOverview = {
  client: "Alan Hirsch",
  title: "Executive Director",
  organization: "Community Development Partnership",
  location: "Portland, Oregon",
  orgType: "Community Development & Housing",
  budget: "$3.2M annually",
  timeline: "18-month engagement",
  startDate: "January 2024",
  completionDate: "June 2025"
}

const challengesBefore = [
  {
    category: "Fundraising Performance",
    issues: [
      "Inconsistent funding - 60% government dependent, 40% unpredictable donor support",
      "Board members not engaged in fundraising beyond personal contributions",
      "No major gift program despite 15-year organizational track record", 
      "Grant success rate below 25% with mostly small, one-time awards"
    ]
  },
  {
    category: "Organizational Capacity",
    issues: [
      "Alan doing 80% of fundraising activities alone while managing all other ED duties",
      "No development staff - one part-time admin helping with basic donor database",
      "Limited data tracking - minimal donor analytics or retention insights",
      "Communications inconsistent - quarterly newsletter and sporadic social media"
    ]
  },
  {
    category: "Strategic Positioning",
    issues: [
      "Unclear organizational messaging - trying to be everything to everyone",
      "No clear case for support or theory of change documentation",
      "Limited community visibility beyond immediate neighborhood",
      "Competing with larger organizations for same funding sources without differentiation"
    ]
  }
]

const solutionsImplemented = [
  {
    phase: "Phase 1: Strategic Foundation (Months 1-3)",
    trailguideTools: ["TrailMap Assessment", "Organizational Audit", "Stakeholder Analysis"],
    outcomes: [
      "Clarified mission focus: affordable housing development + resident services integration",
      "Identified unique value proposition: only org in region doing wraparound housing model",
      "Mapped all stakeholder relationships and identified 47 potential major donor prospects",
      "Created comprehensive case for support with compelling impact metrics"
    ]
  },
  {
    phase: "Phase 2: Systems & Capacity Building (Months 4-8)",
    trailguideTools: ["Fundraising Infrastructure Toolkit", "Board Development Kit", "AI-Powered Prospect Research"],
    outcomes: [
      "Hired first full-time Development Associate using new fundraising revenue projections",
      "Implemented Salesforce Nonprofit Cloud with comprehensive donor tracking and analytics",
      "Trained 100% of board members in fundraising roles - 8 of 12 now actively soliciting",
      "Established monthly donor newsletter with 35% average open rate (up from 18%)"
    ]
  },
  {
    phase: "Phase 3: Program Launch & Execution (Months 9-15)",
    trailguideTools: ["Major Gift Strategy Kit", "Grant Writing Sprint", "Communications Intensive"],
    outcomes: [
      "Launched major gift program with $25K+ donor focus - secured 12 major gifts first year",
      "Improved grant success rate to 65% through targeted applications and stronger proposals",
      "Established monthly giving program generating $8,400/month in recurring revenue",
      "Created corporate partnership program generating $185K in first-year sponsorships"
    ]
  },
  {
    phase: "Phase 4: Scale & Sustainability (Months 16-18)",
    trailguideTools: ["Leadership Development", "Advanced Analytics", "Peer Learning Network"],
    outcomes: [
      "Alan transitioned from doing 80% to 30% of fundraising - now focused on strategy and major relationships",
      "Development Associate promoted to Development Manager with two new part-time staff",
      "Established $500K capital campaign for new affordable housing project",
      "Became regional thought leader - speaking at 3 conferences, featured in 8 media stories"
    ]
  }
]

const resultsAchieved = [
  {
    metric: "Total New Funding Secured",
    before: "$1.8M annually (mostly government)",
    after: "$4.1M annually (diversified sources)",
    improvement: "+128%",
    timeline: "18 months"
  },
  {
    metric: "Individual Donor Base",
    before: "312 donors, average gift $127",
    after: "847 donors, average gift $289", 
    improvement: "+171% donors, +127% average",
    timeline: "18 months"
  },
  {
    metric: "Major Gifts Program",
    before: "No major gift program",
    after: "$650K from 18 major gifts ($25K+)",
    improvement: "New revenue stream",
    timeline: "12 months"
  },
  {
    metric: "Grant Success Rate", 
    before: "24% success rate, avg award $18K",
    after: "67% success rate, avg award $67K",
    improvement: "+279% success, +272% avg award",
    timeline: "15 months"
  },
  {
    metric: "Monthly Recurring Revenue",
    before: "$0 monthly giving program",
    after: "$8,400/month recurring",
    improvement: "$100K+ annual recurring",
    timeline: "9 months"
  },
  {
    metric: "Board Fundraising Engagement",
    before: "3 of 12 board members gave only",
    after: "12 of 12 give, 8 actively solicit", 
    improvement: "400% engagement increase",
    timeline: "12 months"
  }
]

const testimonialQuotes = [
  {
    quote: "I was skeptical about another consultant, but TrailGuide was different from day one. They didn't just give us templates - they built our capacity to think and act strategically about fundraising for the long term.",
    context: "On the TrailGuide approach",
    date: "Month 6"
  },
  {
    quote: "The board transformation was remarkable. These are busy professionals who previously saw their role as 'writing a check and staying out of the way.' Now they're actively opening doors and making asks because they understand how.",
    context: "On board development results", 
    date: "Month 12"
  },
  {
    quote: "We didn't just increase our fundraising - we fundamentally changed how we operate as an organization. I'm now spending my time on strategy and vision instead of chasing grants and managing databases.",
    context: "On organizational transformation",
    date: "Month 18"
  }
]

const keyInsights = [
  {
    insight: "Leadership Development First",
    lesson: "Before building systems, Alan needed to transform his own role from 'doer' to 'strategic leader.' The first 90 days focused heavily on leadership coaching and mindset shifts."
  },
  {
    insight: "Board as Partners, Not Clients",
    lesson: "Rather than asking board members to 'help with fundraising,' we repositioned them as strategic partners in organizational growth, with specific expertise to contribute."
  },
  {
    insight: "Data-Driven Decision Making",
    lesson: "Implementing analytics early revealed surprising insights - their retention rate was actually strong, but average gift size was low due to lack of upgrade asks and major gift focus."
  },
  {
    insight: "Organizational Clarity Drives Results",
    lesson: "The biggest breakthrough came from clarifying their unique value proposition. Once stakeholders understood exactly what made CDP special, funding followed naturally."
  }
]

const toolsUsed = [
  {
    category: "Assessment & Planning",
    tools: [
      "TrailMap Organizational Assessment",
      "Stakeholder Relationship Mapping", 
      "Competitive Landscape Analysis",
      "Capacity Audit & Gap Analysis"
    ]
  },
  {
    category: "Systems & Infrastructure", 
    tools: [
      "CRM Implementation & Optimization",
      "Donor Analytics Dashboard Setup",
      "Fundraising Process Documentation",
      "Board Training & Development Kits"
    ]
  },
  {
    category: "Strategy & Execution",
    tools: [
      "Major Gift Program Design",
      "Grant Research & Writing Templates",
      "Corporate Partnership Framework", 
      "Communications Strategy & Content Calendar"
    ]
  },
  {
    category: "Leadership & Growth",
    tools: [
      "Executive Coaching & Leadership Development",
      "Staff Training & Professional Development",
      "Peer Learning Network Access",
      "Thought Leadership Positioning"
    ]
  }
]

const impactStories = [
  {
    title: "The $250K Board Connection",
    story: "Board member Janet Wu initially resisted 'asking friends for money.' After TrailGuide's board development training, she realized her network included several developers interested in affordable housing. Her introduction led to a $250K corporate partnership with a local development firm.",
    outcome: "$250K partnership + ongoing relationship"
  },
  {
    title: "From Rejection to $100K Grant",
    story: "After being rejected by the Miller Foundation twice, CDP used TrailGuide's grant strategy approach to completely reframe their proposal around foundation priorities. The third application not only succeeded but secured their largest-ever foundation grant.",
    outcome: "$100K grant + multi-year relationship"
  },
  {
    title: "The Monthly Giving Breakthrough",
    story: "Using TrailGuide's donor psychology insights, CDP repositioned monthly giving as 'Stability Partners' rather than 'monthly donors.' The messaging shift, combined with board personal asks, grew monthly giving from $0 to $8,400/month in 9 months.",
    outcome: "$100K+ annual recurring revenue"
  }
]

export default function AlanHirschCaseStudy() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trailguide-evergreen to-trailguide-evergreen/80 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-white/20 text-white mb-4">
              Case Study • 18-Month Engagement
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              From Struggling Alone to Leading a Movement
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              How Alan Hirsch transformed from an overwhelmed executive director doing everything 
              to a strategic leader who built sustainable systems and secured $2.3M in new funding
            </p>
          </div>
          
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <User className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold text-lg">{caseStudyOverview.client}</div>
                  <div className="text-green-100 text-sm">{caseStudyOverview.title}</div>
                  <div className="text-green-100 text-sm">{caseStudyOverview.organization}</div>
                </div>
                
                <div className="text-center">
                  <Building className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold text-lg">{caseStudyOverview.budget}</div>
                  <div className="text-green-100 text-sm">{caseStudyOverview.orgType}</div>
                  <div className="text-green-100 text-sm flex items-center justify-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {caseStudyOverview.location}
                  </div>
                </div>
                
                <div className="text-center">
                  <CalendarIcon className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold text-lg">{caseStudyOverview.timeline}</div>
                  <div className="text-green-100 text-sm">{caseStudyOverview.startDate} - {caseStudyOverview.completionDate}</div>
                  <div className="text-green-100 text-sm">Completed Successfully</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Executive Summary */}
        <section className="mb-16">
          <Card className="border-trailguide-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-3 text-trailguide-evergreen" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-trailguide-slate mb-4">
                    Alan Hirsch came to TrailGuide as a 15-year nonprofit veteran feeling overwhelmed and stuck. 
                    As Executive Director of Community Development Partnership, he was doing everything himself - 
                    from writing grants to managing programs to building relationships with donors. Despite his 
                    organization's strong community impact, fundraising was inconsistent and unsustainable.
                  </p>
                  <p className="text-trailguide-slate mb-4">
                    Through our comprehensive 18-month engagement, Alan transformed both personally and 
                    organizationally. He evolved from a hands-on operator to a strategic leader, built systems 
                    that scale, and created sustainable funding streams that support long-term growth.
                  </p>
                  <p className="text-trailguide-slate">
                    Most importantly, Alan's story demonstrates that with the right approach, even small to 
                    mid-size nonprofits can achieve remarkable fundraising results while building capacity 
                    for sustained impact.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-800">$2.3M</div>
                    <div className="text-sm text-green-600">New Funding Secured</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-800">171%</div>
                    <div className="text-sm text-blue-600">Donor Base Growth</div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-800">67%</div>
                    <div className="text-sm text-purple-600">Grant Success Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            The Challenge: A Capable Leader at a Breaking Point
          </h2>
          
          <div className="space-y-6">
            {challengesBefore.map((challenge, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">{challenge.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {challenge.issues.map((issue, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-trailguide-slate">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6 bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Quote className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 italic text-lg mb-2">
                    "I was working 60-hour weeks and felt like I was failing at everything. We were doing good work, 
                    but I couldn't figure out how to fund it sustainably. I knew there had to be a better way, 
                    but I didn't know what that looked like."
                  </p>
                  <div className="text-amber-700 font-medium">- Alan Hirsch, Initial Consultation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            The TrailGuide Solution: Systematic Transformation
          </h2>
          
          <div className="space-y-8">
            {solutionsImplemented.map((phase, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-8 h-8 bg-trailguide-evergreen text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    {phase.phase}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">TrailGuide Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.trailguideTools.map((tool, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-3">Key Outcomes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trailguide-slate">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Results Achieved */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            Measurable Results: The Numbers Tell the Story
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resultsAchieved.map((result, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-trailguide-neutral text-lg mb-2">{result.metric}</h3>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-800">{result.improvement}</div>
                      <div className="text-sm text-green-600">Improvement in {result.timeline}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-trailguide-neutral">Before:</span>
                      <span className="text-trailguide-slate ml-1">{result.before}</span>
                    </div>
                    <div>
                      <span className="font-medium text-trailguide-neutral">After:</span>
                      <span className="text-trailguide-slate ml-1">{result.after}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            In Alan's Own Words: Transformation Insights
          </h2>
          
          <div className="space-y-6">
            {testimonialQuotes.map((testimonial, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Quote className="h-8 w-8 text-trailguide-evergreen flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-trailguide-neutral text-lg italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-trailguide-slate">
                          <strong>{testimonial.context}</strong>
                        </div>
                        <div className="text-sm text-trailguide-slate">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            Success Stories: How Strategy Became Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((story, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate text-sm mb-4">{story.story}</p>
                  <div className="bg-trailguide-evergreen/10 border border-trailguide-evergreen/20 rounded-lg p-3">
                    <div className="font-semibold text-trailguide-evergreen text-sm">{story.outcome}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            Key Insights: What Made the Difference
          </h2>
          
          <div className="space-y-6">
            {keyInsights.map((insight, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-trailguide-neutral text-lg mb-2">{insight.insight}</h3>
                      <p className="text-trailguide-slate">{insight.lesson}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & Resources Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
            TrailGuide Tools & Resources Applied
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolsUsed.map((category, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg text-trailguide-evergreen">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tools.map((tool, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-trailguide-slate">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Status & Long-term Impact */}
        <section className="mb-16">
          <Card className="border-trailguide-border bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="h-6 w-6 mr-3 text-green-600" />
                Current Status & Continued Success
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-trailguide-neutral mb-4">18 Months Later:</h3>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Annual fundraising increased from $1.8M to $4.1M</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Development team grown from 0.5 FTE to 2.5 FTE</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Successfully launched $500K capital campaign</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Alan selected as regional nonprofit leadership fellow</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-trailguide-neutral mb-4">Organizational Impact:</h3>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Expanded affordable housing units from 45 to 127</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Added comprehensive resident services program</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Board engagement at all-time high with 100% giving</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Became model organization for similar nonprofits regionally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Alan's transformation didn't happen overnight, but it did happen systematically. 
              If you're feeling overwhelmed and ready for sustainable change, let's talk about 
              how TrailGuide can help you achieve similar results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/assessment">
                  <Target className="h-4 w-4 mr-2" />
                  Take the TrailMap Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">
                  <FileText className="h-4 w-4 mr-2" />
                  View More Case Studies
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-trailguide-slate">
              <p>
                <strong>Confidentiality Note:</strong> This case study is published with Alan's permission. 
                All TrailGuide client engagements include strict confidentiality agreements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
