import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTACluster } from '@/components/shared/CTACluster'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Eye, Shield, Scale, Search, FileText, AlertCircle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ethics Framework: AI with Integrity | TrailGuide',
  description: 'TrailGuide\'s comprehensive ethics framework for nonprofit AI adoption. Learn how we ensure human flourishing, transparency, and accountability.',
}

const pillars = [
  {
    icon: Heart,
    title: "Human Flourishing",
    description: "AI should enhance human dignity, expand opportunities, and strengthen communities rather than replace or diminish human value.",
    principles: [
      "Augment human capabilities rather than replace human judgment",
      "Prioritize solutions that create meaningful work and learning",
      "Ensure AI serves the most vulnerable and marginalized communities",
      "Measure success by human outcomes, not just efficiency metrics"
    ],
    examples: [
      "Grant writing tools that teach best practices while saving time",
      "Volunteer matching systems that honor personal preferences and growth",
      "Impact measurement that captures stories alongside statistics"
    ]
  },
  {
    icon: Eye,
    title: "Transparency & Documentation",
    description: "Organizations should understand how AI systems work, what decisions they make, and what data they use.",
    principles: [
      "Maintain clear documentation of AI system capabilities and limitations",
      "Provide explanations for AI-generated recommendations and decisions",
      "Ensure staff can understand and question AI outputs",
      "Document bias testing and mitigation efforts"
    ],
    examples: [
      "TrailKits include plain-language explanations of AI recommendations",
      "Assessment results show reasoning behind stage and dimension ratings",
      "All AI tools include confidence scores and alternative options"
    ]
  },
  {
    icon: Shield,
    title: "Data Stewardship",
    description: "Donor, client, and community data deserves the highest levels of protection and ethical handling.",
    principles: [
      "Minimize data collection to what is necessary for the mission",
      "Ensure data subjects understand and consent to AI processing",
      "Implement robust security measures and access controls",
      "Regularly audit data usage and retention policies"
    ],
    examples: [
      "TrailMap assessments use aggregated data, not individual responses",
      "TrailKits process data locally when possible",
      "All third-party integrations require explicit consent and review"
    ]
  },
  {
    icon: Scale,
    title: "Accountability & Governance",
    description: "Clear processes and human oversight ensure AI systems remain aligned with organizational values and mission.",
    principles: [
      "Establish clear governance structures for AI decision-making",
      "Regular review and audit of AI system performance and impact",
      "Maintain human oversight for all significant decisions",
      "Create feedback mechanisms for continuous improvement"
    ],
    examples: [
      "Monthly AI ethics review meetings in organizations using TrailKits",
      "Required human approval for all AI-generated grant applications",
      "Quarterly assessments of AI tool effectiveness and alignment"
    ]
  },
  {
    icon: Search,
    title: "Bias Detection & Mitigation",
    description: "Actively identify and address biases that could perpetuate inequality or harm vulnerable populations.",
    principles: [
      "Regular testing for demographic and cultural biases in AI outputs",
      "Diverse perspectives in AI system design and evaluation",
      "Transparent reporting of bias detection and mitigation efforts",
      "Ongoing education about implicit bias and AI limitations"
    ],
    examples: [
      "Grant matching tools tested across diverse nonprofit types and sizes",
      "Communication templates reviewed for cultural sensitivity",
      "Regular bias audits by external diverse review panels"
    ]
  }
]

const practiceExamples = [
  {
    area: "TrailMap Assessment",
    description: "How ethics shows up in our flagship assessment tool",
    practices: [
      "Questions designed to avoid cultural or organizational bias",
      "Results include uncertainty ranges and alternative interpretations",
      "Data aggregated to protect individual organization privacy",
      "Regular validation with diverse nonprofit types and sizes"
    ]
  },
  {
    area: "TrailHikes",
    description: "Ethical considerations in our peer learning programs",
    practices: [
      "Diverse cohorts representing different communities and perspectives",
      "Safe spaces for questioning and challenging AI recommendations",
      "Emphasis on values-based decision making alongside technical skills",
      "Follow-up support to ensure sustainable and ethical implementation"
    ]
  },
  {
    area: "TrailKits",
    description: "Ethics built into our AI tool modules",
    practices: [
      "All outputs include confidence scores and alternative options",
      "Human review required for high-stakes decisions (grants, hiring)",
      "Regular bias testing with diverse input scenarios",
      "Clear documentation of system limitations and failure modes"
    ]
  }
]

export default function EthicsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ethics in Action"
            subtitle="We believe AI ethics isn&rsquo;t just a philosophy—it&rsquo;s a practice. Every tool, training, and decision reflects our commitment to technology that serves human flourishing and strengthens communities."
            className="text-center max-w-4xl mx-auto"
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-6 bg-evergreen-50 border-evergreen-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-evergreen-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Our Commitment</h3>
                  <p className="text-sm text-gray-700">
                    We hold ourselves accountable to the highest ethical standards because we work with organizations 
                    dedicated to serving the most vulnerable members of our communities. Their trust is sacred.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Five Pillars"
            subtitle="These principles guide every decision we make about AI development, implementation, and governance."
            className="text-center mb-12"
          />

          <div className="space-y-16 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-evergreen-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                        <Badge variant="outline" className="mt-2">Pillar {index + 1}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{pillar.description}</p>

                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Core Principles</h4>
                      <ul className="space-y-2">
                        {pillar.principles.map((principle, pIndex) => (
                          <li key={pIndex} className="flex items-start text-sm">
                            <span className="w-2 h-2 bg-evergreen-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {principle}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Card className="p-6 h-full">
                    <h4 className="font-medium mb-4">In Practice</h4>
                    <ul className="space-y-3">
                      {pillar.examples.map((example, eIndex) => (
                        <li key={eIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-bronze-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Practice Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ethics in Our Products"
            subtitle="See how our ethical framework translates into concrete practices across our tools and programs."
            className="text-center mb-12"
          />

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {practiceExamples.map((example, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{example.area}</h3>
                <p className="text-sm text-gray-600 mb-4">{example.description}</p>
                <ul className="space-y-2">
                  {example.practices.map((practice, pIndex) => (
                    <li key={pIndex} className="flex items-start text-sm">
                      <span className="w-1 h-1 bg-evergreen-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Disclosures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Resources & Accountability"
            subtitle="Access our policies, report concerns, and stay informed about our ongoing ethics initiatives."
            className="text-center mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-evergreen-600" />
              </div>
              <h3 className="font-semibold mb-2">Policy Documents</h3>
              <p className="text-sm text-gray-600 mb-4">Detailed policies and procedures for AI ethics implementation.</p>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-bronze-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-bronze-600" />
              </div>
              <h3 className="font-semibold mb-2">Report Concerns</h3>
              <p className="text-sm text-gray-600 mb-4">Confidential reporting for ethics violations or concerns.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:ethics@trailguide.org">Contact Ethics Team</a>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-evergreen-600" />
              </div>
              <h3 className="font-semibold mb-2">Audit Reports</h3>
              <p className="text-sm text-gray-600 mb-4">Regular third-party assessments of our AI systems and practices.</p>
              <Button variant="outline" size="sm" disabled>
                2024 Report (Q2)
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-bronze-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-bronze-600" />
              </div>
              <h3 className="font-semibold mb-2">Ethics Advisory</h3>
              <p className="text-sm text-gray-600 mb-4">External advisors who help guide our ethical decision-making.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/about#advisors">Meet Our Board</a>
              </Button>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto p-8">
            <h3 className="text-xl font-semibold mb-4">Our Ethics Commitment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Continuous Improvement</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Quarterly ethics framework reviews</li>
                  <li>• Annual third-party ethics audits</li>
                  <li>• Ongoing bias testing and mitigation</li>
                  <li>• Regular stakeholder feedback collection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Transparency Promise</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Public disclosure of significant ethics issues</li>
                  <li>• Annual ethics impact reports</li>
                  <li>• Open source ethical AI research</li>
                  <li>• Community input on framework updates</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-evergreen-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Questions or Concerns?</strong> We welcome feedback on our ethics framework and practices. 
                Contact our Ethics Advisory Team at{' '}
                <a href="mailto:ethics@trailguide.org" className="text-evergreen-600 hover:underline">
                  ethics@trailguide.org
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Ethical AI Journey</h2>
            <p className="text-gray-600 mb-8">
              Ready to explore AI adoption that aligns with your values? Begin with our assessment to understand your organization&rsquo;s readiness and ethical considerations.
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
