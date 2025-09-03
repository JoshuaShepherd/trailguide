import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTACluster } from '@/components/shared/CTACluster'
import { CaseStudyCard } from '@/components/shared/CaseStudyCard'
import { InterestForm } from '@/components/shared/InterestForm'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Users, Lightbulb, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies: Nonprofit AI Success Stories | TrailGuide',
  description: 'Real nonprofits achieving real impact with AI. Explore case studies from organizations using AI to scale operations and amplify their mission.',
}

const featuredCase = {
  title: "AI-Powered Nonprofit Consulting Platform",
  organization: "AlanHirsch.org",
  summary: "How a solo nonprofit consultant scaled their practice 3x using AI tools for research, proposal writing, and client communication while maintaining personal touch.",
  outcomes: [
    "Increased client capacity from 8 to 24 nonprofits annually",
    "Reduced proposal writing time by 60% with AI-assisted research",
    "Improved client satisfaction scores by 35% through better preparation",
    "Launched new service offerings in grant writing and strategic planning"
  ],
  metrics: [
    {
      label: "Client Capacity",
      value: "3x",
      change: "+200%"
    },
    {
      label: "Proposal Speed",
      value: "60%",
      change: "faster"
    },
    {
      label: "Revenue Growth",
      value: "$180k",
      change: "+45%"
    },
    {
      label: "Client Satisfaction",
      value: "4.8/5",
      change: "+35%"
    }
  ],
  status: 'live' as const,
  href: '/case-studies/alanhirsch-org'
}

const pipelineCases = [
  {
    title: "Grant Success Through AI",
    organization: "KC Education Alliance",
    summary: "Pilot program testing AI tools for grant research, application writing, and reporting workflows.",
    outcomes: [
      "Currently testing TrailKits Grant module",
      "Tracking application success rates",
      "Measuring time savings in research phase"
    ],
    status: 'coming-soon' as const
  },
  {
    title: "Volunteer Engagement Revolution",
    organization: "Habitat for Humanity KC",
    summary: "Using AI to optimize volunteer recruitment, training, and retention across multiple build sites.",
    outcomes: [
      "Piloting automated volunteer matching",
      "Testing AI-powered training modules",
      "Measuring engagement improvements"
    ],
    status: 'coming-soon' as const
  },
  {
    title: "Impact Measurement Breakthrough",
    organization: "United Way of Greater KC",
    summary: "Leveraging AI to track and communicate program outcomes across 50+ partner organizations.",
    outcomes: [
      "Developing unified impact dashboard",
      "Automating data collection workflows",
      "Creating donor communication tools"
    ],
    status: 'coming-soon' as const
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Proof in the Field"
            subtitle="Real nonprofits, real advances, real impact. See how organizations like yours are using AI to amplify their mission and scale their operations."
            className="text-center max-w-3xl mx-auto"
          />

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-evergreen-600 rounded-full mr-2" />
                <span>Live Case Studies</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                <span>In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <TrendingUp className="w-6 h-6 text-evergreen-600 mr-3" />
              <h2 className="text-2xl font-bold">Featured Case Study</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CaseStudyCard {...featuredCase} className="h-full" />
              </div>
              
              <div className="space-y-6">
                <Card className="p-8">
                  <h3 className="font-semibold mb-6 text-lg">Case Study Highlights</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-bronze-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">TrailMap Stage</div>
                        <div className="text-gray-700">Leadership (Stage 5)</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-bronze-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Organization Size</div>
                        <div className="text-gray-700">Solo consultant</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-bronze-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Primary Tools</div>
                        <div className="text-gray-700">Custom AI workflows, Grant Kit prototype</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Implementation Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="w-16 text-sm text-gray-500 flex-shrink-0">Q1 2024</div>
                      <div className="text-sm">Initial AI experimentation</div>
                    </div>
                    <div className="flex">
                      <div className="w-16 text-sm text-gray-500 flex-shrink-0">Q2 2024</div>
                      <div className="text-sm">Workflow standardization</div>
                    </div>
                    <div className="flex">
                      <div className="w-16 text-sm text-gray-500 flex-shrink-0">Q3 2024</div>
                      <div className="text-sm">Full integration & scaling</div>
                    </div>
                    <div className="flex">
                      <div className="w-16 text-sm text-gray-500 flex-shrink-0">Q4 2024</div>
                      <div className="text-sm">Mentoring other consultants</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="More Stories in Development"
            subtitle="We&rsquo;re working with Kansas City nonprofits to document their AI journeys. These case studies will be available soon."
            className="text-center mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {pipelineCases.map((caseStudy, index) => (
              <CaseStudyCard key={index} {...caseStudy} />
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-md mx-auto p-6">
              <h3 className="font-semibold mb-2">Join Our Research</h3>
              <p className="text-sm text-gray-600 mb-4">
                Want to be featured in a future case study? Participate in a TrailHike and share your AI journey with the community.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/hikes">
                  Join a TrailHike →
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Share Your AI Success Story</h2>
              <p className="text-gray-600">
                Have you implemented AI in your nonprofit? We&rsquo;d love to learn about your journey and potentially feature your organization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <InterestForm
                title="Submit Your Story"
                description="Tell us about your organization's AI implementation. We'll reach out to discuss featuring your story and outcomes."
                submitLabel="Share My Story"
              />

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">What Makes a Great Case Study</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Clear problem and solution story</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Measurable outcomes and metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Lessons learned and best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Willingness to share openly</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Our Process</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center text-sm font-medium text-evergreen-600 mr-3 flex-shrink-0">1</div>
                      <div>
                        <div className="font-medium text-sm">Initial Interview</div>
                        <div className="text-xs text-gray-600">45-minute conversation about your journey</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center text-sm font-medium text-evergreen-600 mr-3 flex-shrink-0">2</div>
                      <div>
                        <div className="font-medium text-sm">Data Gathering</div>
                        <div className="text-xs text-gray-600">Collect metrics and supporting materials</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center text-sm font-medium text-evergreen-600 mr-3 flex-shrink-0">3</div>
                      <div>
                        <div className="font-medium text-sm">Draft & Review</div>
                        <div className="text-xs text-gray-600">Collaborate on case study content</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-8 h-8 bg-evergreen-100 rounded-full flex items-center justify-center text-sm font-medium text-evergreen-600 mr-3 flex-shrink-0">4</div>
                      <div>
                        <div className="font-medium text-sm">Publication</div>
                        <div className="text-xs text-gray-600">Launch and promote your story</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-gray-600 mb-8">
              Every great case study starts with understanding where you are today. Take our assessment to map your organization&rsquo;s AI readiness and discover your next steps.
            </p>
            <CTACluster
              primary={{
                label: "Start Your Assessment",
                href: "/assessment",
                icon: true
              }}
              secondary={{
                label: "Join a TrailHike",
                href: "/hikes"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
