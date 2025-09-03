import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTACluster } from '@/components/shared/CTACluster'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Shield, Users, MapPin, ExternalLink, Building, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About TrailGuide: AI That Serves Humans | TrailGuide',
  description: 'Learn about TrailGuide\'s mission to help nonprofits adopt AI thoughtfully. Discover our dual structure, origin story, and ethics-first approach.',
}

const advisors = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Ethics Researcher",
    organization: "Stanford HAI Institute",
    specialty: "Bias detection and mitigation"
  },
  {
    name: "Marcus Williams",
    role: "Nonprofit Technology Leader",
    organization: "United Way Worldwide",
    specialty: "Digital transformation strategy"
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Data Science for Good",
    organization: "DataKind",
    specialty: "Nonprofit analytics and evaluation"
  },
  {
    name: "Rev. James Thompson",
    role: "Community Organizing",
    organization: "PICO National Network",
    specialty: "Values-based technology adoption"
  },
  {
    name: "Amanda Chen",
    role: "Grant Strategy Expert",
    organization: "The Foundation Center",
    specialty: "Funding landscape and innovation"
  },
  {
    name: "Dr. Michael Brown",
    role: "Organizational Development",
    organization: "Independent Consultant",
    specialty: "Change management and capacity building"
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="AI That Serves Humans"
            subtitle="We believe artificial intelligence should amplify human flourishing, especially in organizations dedicated to serving others. TrailGuide exists to help nonprofits adopt AI thoughtfully—with tools, training, and formation that honor both innovation and values."
            className="text-center max-w-4xl mx-auto"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-evergreen-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <p className="text-gray-700 leading-relaxed">
                Ready-to-use AI workflows and templates designed specifically for nonprofit operations and values.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-bronze-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-bronze-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Training</h3>
              <p className="text-gray-700 leading-relaxed">
                Peer-to-peer learning experiences that build AI literacy while respecting organizational readiness.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-evergreen-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Formation</h3>
              <p className="text-gray-700 leading-relaxed">
                Ethical frameworks and decision-making support for AI adoption that aligns with your mission.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dual Structure Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How We&rsquo;re Organized"
            subtitle="TrailGuide operates through two complementary entities to ensure both mission alignment and operational sustainability."
            className="text-center mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-evergreen-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-evergreen-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">TrailGuide Foundation</h3>
                  <Badge variant="outline" className="mt-1">501(c)(3) Nonprofit</Badge>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Advance AI literacy and ethical adoption in the nonprofit sector through research, education, and community building.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Activities</h4>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li>• Free TrailMap assessments</li>
                    <li>• TrailHike peer learning programs</li>
                    <li>• Ethics framework development</li>
                    <li>• Research and case study publication</li>
                    <li>• Community events and conferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Funding</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Foundations, individual donors, and program fees from larger nonprofits.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-bronze-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-bronze-100 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-bronze-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">TrailGuide Applications</h3>
                  <Badge variant="outline" className="mt-1">For-Profit LLC</Badge>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Develop and license AI tools and workflows specifically designed for nonprofit operations and values.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Activities</h4>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li>• TrailKits development and licensing</li>
                    <li>• Custom AI implementation consulting</li>
                    <li>• TrailHub platform and community</li>
                    <li>• Technical support and training</li>
                    <li>• Software integration services</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Funding</h4>
                  <p className="text-gray-700 leading-relaxed">
                    License fees from TrailKits, consulting revenue, and platform subscriptions.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gray-50">
              <h3 className="text-xl font-semibold mb-6">Arm&rsquo;s Length Relationship</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                The Foundation and Applications operate independently with clear boundaries. The Foundation focuses on public benefit and education, 
                while Applications provides sustainable commercial tools. This structure ensures:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Alignment</h4>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li>• Shared ethics framework</li>
                    <li>• Common advisory board</li>
                    <li>• Coordinated research priorities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Independence</h4>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li>• Separate governance and finances</li>
                    <li>• Fair market rate transactions</li>
                    <li>• Transparent disclosure of relationships</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Origin Story"
              subtitle="TrailGuide emerged from real need in the Kansas City nonprofit community and has grown into a national network."
              className="text-center mb-12"
            />

            <div className="space-y-12">
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-evergreen-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kansas City Roots</h3>
                    <p className="text-gray-600 mb-4">
                      Founded in 2023 by a group of nonprofit leaders, technology professionals, and social entrepreneurs who saw 
                      their peers struggling with AI adoption. While tech companies promised revolutionary solutions, nonprofits 
                      needed practical guidance that respected their values and constraints.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Founding Partners</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• United Way of Greater Kansas City</li>
                          <li>• Nonprofit Connect</li>
                          <li>• KC Digital Drive</li>
                          <li>• Local independent consultants</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Initial Focus</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Grant writing automation</li>
                          <li>• Donor communication tools</li>
                          <li>• Volunteer management optimization</li>
                          <li>• Impact measurement frameworks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-bronze-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-bronze-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">National Network</h3>
                    <p className="text-gray-600 mb-4">
                      What began as local collaboration quickly attracted attention from nonprofits nationwide. We realized that 
                      the challenges we were addressing in Kansas City were universal—and so were the solutions we were developing.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Expansion Strategy</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Regional pilot programs</li>
                          <li>• Partnership with national associations</li>
                          <li>• Online community platform</li>
                          <li>• Distributed TrailHike cohorts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Current Reach</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• 500+ organizations assessed</li>
                          <li>• 150+ TrailHike participants</li>
                          <li>• 25+ TrailKit implementations</li>
                          <li>• 12 cities with active communities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors/Board Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Advisory Board"
            subtitle="Our work is guided by leaders who understand both the promise and the challenges of AI in mission-driven organizations."
            className="text-center mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {advisors.map((advisor, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">{advisor.name}</h3>
                  <p className="text-bronze-600 text-sm font-medium">{advisor.role}</p>
                  <p className="text-gray-500 text-sm">{advisor.organization}</p>
                </div>
                <div className="flex items-start">
                  <Award className="w-4 h-4 text-evergreen-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{advisor.specialty}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/ethics">
                See Our Ethics Framework →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Signature Prototype */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Signature Prototype"
              subtitle="AlanHirsch.org represents our first complete implementation—a solo consultant who scaled their nonprofit practice 3x using AI."
              className="text-center mb-12"
            />

            <Card className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">From Experiment to Excellence</h3>
                  <p className="text-gray-600 mb-6">
                    Alan Hirsch worked with our team to become one of the first nonprofit consultants to systematically 
                    integrate AI into every aspect of his practice—from client research to grant writing to impact reporting.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Tripled client capacity without sacrificing quality</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Reduced proposal writing time by 60%</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Improved client satisfaction through better preparation</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Now mentors other consultants in AI adoption</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-2 border-evergreen-600">
                  <div className="text-center mb-4">
                    <h4 className="font-semibold text-lg">AlanHirsch.org</h4>
                    <p className="text-sm text-gray-600">Nonprofit Consulting Practice</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-evergreen-600">3x</div>
                      <div className="text-xs text-gray-600">Client Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-bronze-600">60%</div>
                      <div className="text-xs text-gray-600">Time Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-evergreen-600">4.8</div>
                      <div className="text-xs text-gray-600">Client Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-bronze-600">12</div>
                      <div className="text-xs text-gray-600">Months</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/case-studies/alanhirsch-org">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Case Study
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Partnership CTAs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-gray-600 mb-8">
              Whether you&rsquo;re ready to start your AI journey or looking to collaborate on research and development, 
              we&rsquo;d love to connect with you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Individual Nonprofits</h3>
                <p className="text-sm text-gray-600 mb-4">Start with our free assessment to understand your AI readiness and next steps.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/assessment">Take Assessment</a>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Learning Community</h3>
                <p className="text-sm text-gray-600 mb-4">Join a TrailHike to learn alongside peers from similar organizations.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/hikes">Join a TrailHike</a>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Strategic Partners</h3>
                <p className="text-sm text-gray-600 mb-4">Explore opportunities for collaboration, research, and custom development.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </Card>
            </div>

            <CTACluster
              primary={{
                label: "Start Your Assessment",
                href: "/assessment",
                icon: true
              }}
              secondary={{
                label: "Contact Us",
                href: "/contact"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
