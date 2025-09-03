import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTACluster } from '@/components/shared/CTACluster'
import { HikeCard } from '@/components/shared/HikeCard'
import { InterestForm } from '@/components/shared/InterestForm'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Users, Target, Lightbulb, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrailHikes: Nonprofit AI Workshops | TrailGuide',
  description: 'Hands-on AI workshops for nonprofits. Learn practical skills in grant writing, communications, governance, and impact measurement through peer collaboration.',
}

const availableHikes = [
  {
    title: "Grant Writing with AI",
    description: "Master AI-powered research, writing, and reporting tools while maintaining authentic organizational voice.",
    duration: "4-week sprint (8 hours total)",
    outcomes: [
      "Custom grant research workflow using AI tools",
      "Template library for proposals and reports", 
      "Quality assurance checklist for AI-generated content",
      "Network of peer grant writers for ongoing support"
    ],
    prerequisites: [
      "Basic grant writing experience",
      "Completed TrailMap assessment (Experimentation stage or higher)"
    ],
    nextCohortDate: "January 15, 2025",
    spotsAvailable: 8,
    totalSpots: 15,
    pricing: "$299 per organization"
  },
  {
    title: "Communications & Social Media",
    description: "Build AI workflows for consistent, engaging content across all channels while staying true to your mission.",
    duration: "3-week sprint (6 hours total)",
    outcomes: [
      "Content calendar automation system",
      "Brand voice guidelines for AI tools",
      "Crisis communication playbook",
      "Social media scheduling and analytics setup"
    ],
    prerequisites: [
      "Active social media presence",
      "Basic content creation experience"
    ],
    nextCohortDate: "February 5, 2025",
    spotsAvailable: 12,
    totalSpots: 18,
    pricing: "$249 per organization"
  },
  {
    title: "Board/Executive AI Readiness",
    description: "Equip leadership teams with frameworks for AI governance, strategic planning, and risk management.",
    duration: "2-week intensive (4 hours total)",
    outcomes: [
      "AI governance policy template",
      "Strategic planning framework with AI considerations",
      "Risk assessment and mitigation strategies",
      "Executive dashboard for AI initiatives tracking"
    ],
    prerequisites: [
      "Board or executive team participation",
      "Organizational readiness for policy development"
    ],
    nextCohortDate: "January 22, 2025",
    spotsAvailable: 5,
    totalSpots: 12,
    pricing: "$399 per organization"
  },
  {
    title: "Program Impact Measurement",
    description: "Design robust evaluation systems using AI for data collection, analysis, and storytelling.",
    duration: "5-week program (10 hours total)",
    outcomes: [
      "Custom impact measurement framework",
      "Automated data collection and analysis tools",
      "Story collection and curation system",
      "Funder-ready impact reports and dashboards"
    ],
    prerequisites: [
      "Existing program with 6+ months of operation",
      "Basic data collection experience"
    ],
    nextCohortDate: "February 12, 2025",
    spotsAvailable: 6,
    totalSpots: 12,
    pricing: "$349 per organization"
  },
  {
    title: "Volunteer Management Optimization",
    description: "Streamline recruitment, training, and retention using AI while preserving the human connection.",
    duration: "3-week sprint (6 hours total)",
    outcomes: [
      "Volunteer recruitment automation system",
      "Training module templates and delivery system",
      "Recognition and engagement workflow",
      "Impact tracking for volunteer contributions"
    ],
    prerequisites: [
      "Active volunteer program (10+ volunteers)",
      "Basic volunteer management system in place"
    ],
    nextCohortDate: "March 5, 2025",
    spotsAvailable: 15,
    totalSpots: 20,
    pricing: "$199 per organization"
  }
]

export default function HikesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="TrailHikes: AI Workshops for Nonprofits"
            subtitle="Hands-on, collaborative workshops that transform AI curiosity into practical skills. Learn alongside peers, build real tools, and develop the confidence to implement AI ethically in your organization."
            className="text-center max-w-4xl mx-auto"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-evergreen-600" />
              </div>
              <h3 className="font-semibold mb-2">Peer Learning</h3>
              <p className="text-sm text-gray-600">
                Learn alongside nonprofit professionals facing similar challenges and opportunities.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-bronze-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-bronze-600" />
              </div>
              <h3 className="font-semibold mb-2">Practical Tools</h3>
              <p className="text-sm text-gray-600">
                Build custom workflows and templates you&rsquo;ll use immediately after the workshop.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-evergreen-600" />
              </div>
              <h3 className="font-semibold mb-2">Values-Aligned</h3>
              <p className="text-sm text-gray-600">
                Every tool and technique honors your mission and maintains human-centered approaches.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Are TrailHikes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="What Are TrailHikes?"
              subtitle="Short, intensive workshops designed specifically for nonprofit organizations ready to move beyond AI experimentation."
              className="text-center mb-12"
            />

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Sprint-Style Learning</h3>
                <p className="text-gray-600 mb-6">
                  Each TrailHike is a focused, time-bound sprint that takes you from concept to working solution in just 2-5 weeks. 
                  You&rsquo;ll meet virtually with your cohort for 1-2 hours per week, plus independent work time.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium text-evergreen-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Challenge Framing</h4>
                      <p className="text-sm text-gray-600">Define your specific AI opportunity and success metrics</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium text-evergreen-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Tool Building</h4>
                      <p className="text-sm text-gray-600">Create custom workflows using AI tools tailored to your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium text-evergreen-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Implementation</h4>
                      <p className="text-sm text-gray-600">Deploy your solution with team training and quality controls</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-medium text-evergreen-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Community</h4>
                      <p className="text-sm text-gray-600">Join ongoing peer network for support and knowledge sharing</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gray-50">
                <h4 className="font-semibold mb-4">TrailHike Format</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">2-5 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Time commitment:</span>
                    <span className="font-medium">4-10 hours total</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cohort size:</span>
                    <span className="font-medium">12-20 organizations</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">Virtual + async work</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Outcome:</span>
                    <span className="font-medium">Working AI solution</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Hikes Connect to TrailKits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="From Training to Tools"
            subtitle="TrailHikes build the skills and confidence you need to successfully implement TrailKits in your organization."
            className="text-center mb-12"
          />

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-12">
              {/* Assessment */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-evergreen-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">Understand your current AI readiness and identify opportunities</p>
              </div>

              <ArrowRight className="text-gray-400 hidden md:block" />

              {/* Hikes */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-bronze-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TrailHikes</h3>
                <p className="text-gray-600 text-sm">Build practical AI skills through hands-on workshops with peers</p>
              </div>

              <ArrowRight className="text-gray-400 hidden md:block" />

              {/* Kits */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-evergreen-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TrailKits</h3>
                <p className="text-gray-600 text-sm">Deploy comprehensive AI tool suites across your organization</p>
              </div>

              <ArrowRight className="text-gray-400 hidden md:block" />

              {/* Implementation */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-bronze-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-gray-600 text-sm">Scale your mission with AI-enhanced operations and strategy</p>
              </div>
            </div>

            <Card className="p-6 bg-white">
              <h3 className="font-semibold mb-4">The Connection</h3>
              <p className="text-gray-600 mb-4">
                TrailHikes aren&rsquo;t just training—they&rsquo;re the foundation for successful TrailKit implementation. 
                In each workshop, you&rsquo;ll build custom versions of the tools and workflows that later become part of our comprehensive toolkit offerings.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Skills You&rsquo;ll Develop</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI tool evaluation and selection</li>
                    <li>• Custom workflow design</li>
                    <li>• Quality assurance and human oversight</li>
                    <li>• Team training and change management</li>
                    <li>• Ethics and values integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What You&rsquo;ll Build</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Working prototypes of AI solutions</li>
                    <li>• Custom templates and frameworks</li>
                    <li>• Quality control checklists</li>
                    <li>• Team training materials</li>
                    <li>• Implementation roadmaps</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Hikes/Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Current Workshop Offerings"
            subtitle="Choose the TrailHike that matches your organization&rsquo;s priority area and readiness level."
            className="text-center mb-12"
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {availableHikes.map((hike, index) => (
              <HikeCard key={index} {...hike} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto p-6">
              <Calendar className="w-8 h-8 text-bronze-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Custom Workshops</h3>
              <p className="text-sm text-gray-600 mb-4">
                Need a workshop tailored to your specific challenge? We can design custom TrailHikes for organizations with unique needs.
              </p>
              <Button variant="outline" className="w-full">
                Request Custom Workshop
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup & Registration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Ready to Join Your First TrailHike?"
              subtitle="Registration is simple, and we&rsquo;ll make sure you&rsquo;re prepared for success."
              className="text-center mb-12"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              <InterestForm
                title="Register Interest"
                description="Tell us which workshop interests you most and we'll send details about upcoming cohorts, plus help you assess your readiness."
                submitLabel="Register My Interest"
              />

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-bronze-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Time Commitment</div>
                        <div className="text-sm text-gray-600">1-2 hours per week for live sessions, plus 30-60 minutes of independent work</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-bronze-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Peer Learning</div>
                        <div className="text-sm text-gray-600">Small cohorts (12-20 organizations) for personalized attention and networking</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-bronze-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Practical Outcome</div>
                        <div className="text-sm text-gray-600">Working AI solution you can implement immediately in your organization</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Pricing & Scholarships</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Standard pricing:</span>
                      <span className="font-medium">$199-$399 per organization</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Payment options:</span>
                      <span className="font-medium">Pay in full or 2 installments</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Scholarships available:</span>
                      <span className="font-medium">50% discount for qualifying orgs</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-evergreen-50 rounded text-sm text-gray-700">
                    <strong>Need-based scholarships available</strong> for organizations with annual budgets under $500K. Contact us for details.
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Prerequisites</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Most TrailHikes require that your organization has reached the &ldquo;Experimentation&rdquo; stage on our TrailMap assessment.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/assessment">
                      Take Assessment to Check Readiness →
                    </a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your AI Learning Journey</h2>
            <p className="text-gray-600 mb-8">
              Not sure which TrailHike is right for you? Start with our assessment to understand your organization&rsquo;s readiness and get personalized recommendations.
            </p>
            <CTACluster
              primary={{
                label: "Sign Up for Next Hike",
                href: "#register",
                icon: true
              }}
              secondary={{
                label: "Take Assessment First",
                href: "/assessment"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
