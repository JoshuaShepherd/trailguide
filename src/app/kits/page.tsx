import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTACluster } from '@/components/shared/CTACluster'
import { KitCard } from '@/components/shared/KitCard'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, BookOpen, Users, TrendingUp, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrailKits: Role-Based AI Tools | TrailGuide',
  description: 'Ready-to-use AI toolkit modules designed for nonprofit roles. Grant writing, communications, board governance, program impact, and volunteer coordination.',
}

const kits = [
  {
    title: 'Grant Kit',
    purpose: 'Streamline grant research, writing, and reporting with AI-powered tools and templates.',
    tasks: [
      'Research funding opportunities and alignment',
      'Draft compelling grant narratives and budgets',
      'Generate progress reports and impact statements',
      'Track deadlines and submission requirements',
      'Create donor stewardship communications'
    ],
    outcomes: [
      'Increase grant applications by 40%',
      'Improve success rates through better targeting',
      'Reduce writing time by 60% with smart templates'
    ],
    timeSavings: '15-20 hrs/week',
    features: [
      'Funder database with AI-powered matching',
      'Grant narrative templates and generators',
      'Budget calculators and justification tools',
      'Reporting dashboard templates',
      'Compliance checklists and reminders'
    ]
  },
  {
    title: 'Communications Kit',
    purpose: 'Create consistent, engaging content across all channels with brand-aligned AI assistance.',
    tasks: [
      'Develop social media content calendars',
      'Write newsletters and email campaigns',
      'Create website copy and blog posts',
      'Design graphics and visual content',
      'Manage crisis communications'
    ],
    outcomes: [
      'Increase social engagement by 65%',
      'Maintain consistent brand voice',
      'Reduce content creation time by 50%'
    ],
    timeSavings: '10-15 hrs/week',
    features: [
      'Brand voice guidelines and checkers',
      'Content calendar templates',
      'Social media post generators',
      'Email campaign builders',
      'Crisis communication playbooks'
    ]
  },
  {
    title: 'Board/Executive Kit',
    purpose: 'Enhance governance and strategic decision-making with data-driven insights and templates.',
    tasks: [
      'Prepare board meeting materials',
      'Analyze organizational performance',
      'Develop strategic plans and goals',
      'Create executive dashboards',
      'Generate governance reports'
    ],
    outcomes: [
      'Improve board engagement by 35%',
      'Make faster, more informed decisions',
      'Strengthen accountability and transparency'
    ],
    timeSavings: '8-12 hrs/week',
    features: [
      'Board packet templates and automation',
      'Performance dashboard builders',
      'Strategic planning frameworks',
      'Risk assessment tools',
      'Compliance monitoring systems'
    ]
  },
  {
    title: 'Program/Impact Kit',
    purpose: 'Measure, analyze, and communicate program effectiveness with robust evaluation tools.',
    tasks: [
      'Design program evaluation frameworks',
      'Collect and analyze outcome data',
      'Create impact reports and visualizations',
      'Track beneficiary progress and stories',
      'Benchmark against sector standards'
    ],
    outcomes: [
      'Increase program effectiveness by 25%',
      'Demonstrate clear impact to stakeholders',
      'Identify improvement opportunities faster'
    ],
    timeSavings: '12-18 hrs/week',
    features: [
      'Evaluation framework templates',
      'Data collection and survey tools',
      'Impact visualization dashboards',
      'Story collection and curation tools',
      'Benchmarking and analysis reports'
    ]
  },
  {
    title: 'Volunteer Kit',
    purpose: 'Recruit, train, and retain volunteers with scalable engagement and management tools.',
    tasks: [
      'Create volunteer recruitment campaigns',
      'Design training and onboarding programs',
      'Schedule and coordinate volunteer activities',
      'Track volunteer hours and impact',
      'Recognize and retain top volunteers'
    ],
    outcomes: [
      'Increase volunteer retention by 45%',
      'Reduce training time by 40%',
      'Scale volunteer programs efficiently'
    ],
    timeSavings: '6-10 hrs/week',
    features: [
      'Recruitment campaign templates',
      'Training module builders',
      'Scheduling and coordination tools',
      'Impact tracking dashboards',
      'Recognition and reward systems'
    ]
  }
]

export default function KitsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="TrailKits: Role-Based AI Tools"
            subtitle="Ready-to-use toolkit modules designed for nonprofit roles. Each kit contains proven templates, workflows, and AI-powered tools that adapt to your organization&rsquo;s voice and values."
            className="text-center max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Top 5 Kits Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {kits.map((kit, index) => (
              <KitCard
                key={kit.title}
                {...kit}
                className={index === 0 ? "lg:col-span-1 lg:row-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Your Complete AI Journey"
            subtitle="TrailKits work best when your team is ready. Here&rsquo;s how they fit into your larger transformation."
            className="text-center mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Step 1 */}
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-evergreen-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">Discover where your organization stands across People, Principles, Applications, and Strategy.</p>
              </div>

              <ArrowRight className="text-gray-400 hidden md:block" />

              {/* Step 2 */}
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-evergreen-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TrailHike</h3>
                <p className="text-gray-600 text-sm">Build readiness through guided learning with peers from similar organizations.</p>
              </div>

              <ArrowRight className="text-gray-400 hidden md:block" />

              {/* Step 3 */}
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-bronze-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TrailKits</h3>
                <p className="text-gray-600 text-sm">Deploy proven tools and templates customized for your team&rsquo;s specific roles and goals.</p>
              </div>

              <ArrowRight className="text-gray-400 hidden md:block" />

              {/* Step 4 */}
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-bronze-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TrailHub</h3>
                <p className="text-gray-600 text-sm">Access ongoing support, updates, and community resources for sustained success.</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-evergreen-600">
              <h4 className="font-semibold mb-2">Ready to Deploy?</h4>
              <p className="text-gray-600 mb-4">
                TrailKits perform best when your team has reached the &ldquo;Adoption&rdquo; stage or higher on our TrailMap. 
                This typically means you&rsquo;ve completed at least one TrailHike and have basic AI literacy across key roles.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Adoption Stage or Higher</Badge>
                <Badge variant="outline">Basic AI Literacy</Badge>
                <Badge variant="outline">Clear Use Cases</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Simple, Fair Licensing"
            subtitle="Choose the option that fits your organization&rsquo;s size and needs."
            className="text-center mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4">Starter Bundle</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">$2,400</span>
                  <span className="text-gray-600 ml-2">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Choose any 2 TrailKits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Up to 25 staff members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Quarterly updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Card>

              <Card className="p-8 border-2 border-evergreen-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Complete Suite</h3>
                  <Badge className="bg-evergreen-600 text-white">Most Popular</Badge>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">$4,800</span>
                  <span className="text-gray-600 ml-2">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">All 5 TrailKits included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Unlimited staff members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Monthly updates & new features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Priority support & training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">TrailHub community access</span>
                  </li>
                </ul>
                <Button className="w-full bg-evergreen-600 hover:bg-evergreen-700">Contact Sales</Button>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Want to see how TrailKits work in practice? Schedule a personalized demo.
              </p>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Ethics Note */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-evergreen-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Security & Ethics First</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium mb-2">Data Protection</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Your data stays in your systems</li>
                        <li>• SOC 2 Type II compliance</li>
                        <li>• End-to-end encryption</li>
                        <li>• Regular security audits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ethical AI</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Human oversight built-in</li>
                        <li>• Bias detection and mitigation</li>
                        <li>• Transparent decision-making</li>
                        <li>• Values-aligned recommendations</li>
                      </ul>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 text-evergreen-600">
                    Read our full Ethics Framework →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-gray-600 mb-8">
              Start with our assessment to understand your readiness, then join a TrailHike to build the foundation for successful TrailKit deployment.
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
