import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Database, 
  Shield, 
  Lock, 
  Eye, 
  Zap,
  Users,
  FileText,
  Calendar,
  CheckCircle,
  AlertCircle,
  Brain
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Practices | TrailGuide',
  description: 'TrailGuide\'s transparent data practices explain how we collect, process, and protect nonprofit data while powering AI-driven assessments and recommendations.',
}

export default function DataPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-white border-b border-trailguide-border py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/ethics" 
            className="inline-flex items-center text-trailguide-evergreen hover:text-trailguide-evergreen/80 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ethics
          </Link>
          
          <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
            Data Practices
          </h1>
          <p className="text-xl text-trailguide-slate max-w-2xl">
            Transparent information about how TrailGuide collects, processes, and protects your organizational 
            data to power our AI-driven assessments and recommendations.
          </p>
          
          <div className="mt-6 flex items-center text-sm text-trailguide-slate">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last updated: August 29, 2025</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Data Philosophy */}
        <Card className="border-trailguide-border mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-trailguide-evergreen">
              <Database className="h-5 w-5 mr-2" />
              Our Data Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-trailguide-slate">
                At TrailGuide, we believe data is a tool for empowerment, not exploitation. Every data practice 
                is designed with one question in mind: "How does this serve our nonprofit partners' missions?"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h4 className="font-semibold text-trailguide-neutral mb-2">Mission-First</h4>
                  <p className="text-sm text-trailguide-slate">
                    Your data serves your mission, not our profits
                  </p>
                </div>
                <div className="text-center">
                  <Eye className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h4 className="font-semibold text-trailguide-neutral mb-2">Radically Transparent</h4>
                  <p className="text-sm text-trailguide-slate">
                    No hidden uses, algorithms, or data practices
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h4 className="font-semibold text-trailguide-neutral mb-2">Community-Owned</h4>
                  <p className="text-sm text-trailguide-slate">
                    Insights benefit the entire nonprofit sector
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              1. What Data We Collect
            </h2>
            
            <div className="space-y-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Assessment Data
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Core Service
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-trailguide-slate text-sm">
                      Information you provide during TrailMap assessments to generate personalized recommendations:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Organization Profile</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Mission and focus areas</li>
                          <li>• Organizational size and structure</li>
                          <li>• Geographic scope</li>
                          <li>• Budget range</li>
                          <li>• Staff technical skills</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Current State</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Technology stack in use</li>
                          <li>• Data collection practices</li>
                          <li>• Operational challenges</li>
                          <li>• Strategic priorities</li>
                          <li>• AI readiness indicators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Platform Usage Data
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <Zap className="h-3 w-3 mr-1" />
                      Performance
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-trailguide-slate text-sm">
                      Technical data collected automatically to improve platform performance and user experience:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Usage Patterns</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Pages visited and time spent</li>
                          <li>• Features used and frequency</li>
                          <li>• Assessment completion rates</li>
                          <li>• Resource download patterns</li>
                          <li>• Search queries and results</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Technical Metrics</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Browser type and version</li>
                          <li>• Device and screen resolution</li>
                          <li>• Page load times</li>
                          <li>• Error logs and crash reports</li>
                          <li>• Network performance data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Communication Records
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      <Users className="h-3 w-3 mr-1" />
                      Support
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-trailguide-slate text-sm">
                      Records of our interactions to provide better support and track service quality:
                    </p>
                    <ul className="text-sm text-trailguide-slate space-y-1">
                      <li>• Email correspondence and support tickets</li>
                      <li>• Advisory session notes and recommendations</li>
                      <li>• Feedback surveys and ratings</li>
                      <li>• Community forum posts and comments</li>
                      <li>• Event registration and attendance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* AI Processing */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              2. How We Use AI
            </h2>
            
            <Card className="border-trailguide-border mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-trailguide-evergreen">
                  <Brain className="h-5 w-5 mr-2" />
                  AI-Powered Assessment Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-trailguide-slate">
                    Our AI assessment engine analyzes your responses to provide personalized recommendations. 
                    Here's exactly how it works:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-trailguide-evergreen text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-1">Data Input</h5>
                        <p className="text-sm text-trailguide-slate">
                          Your assessment responses are anonymized and structured for AI analysis. 
                          Sensitive information (donor data, financial details) is never included.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-trailguide-evergreen text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-1">Pattern Analysis</h5>
                        <p className="text-sm text-trailguide-slate">
                          OpenAI's models identify patterns in organizational characteristics, comparing your 
                          profile with successful AI implementations across similar nonprofits.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-trailguide-evergreen text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-1">Recommendation Generation</h5>
                        <p className="text-sm text-trailguide-slate">
                          AI generates tailored recommendations for TrailKits, implementation priorities, 
                          and strategic approaches based on your unique context.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-trailguide-evergreen text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-1">Human Review</h5>
                        <p className="text-sm text-trailguide-slate">
                          Our experts review AI outputs for accuracy, feasibility, and sector appropriateness 
                          before delivery to ensure high-quality recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    What AI Can Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Organizational profile and mission</li>
                    <li>• Technology readiness indicators</li>
                    <li>• Strategic goals and challenges</li>
                    <li>• General operational characteristics</li>
                    <li>• Anonymized assessment responses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                    What AI Cannot Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Donor information or contact lists</li>
                    <li>• Financial records or banking details</li>
                    <li>• Beneficiary personal information</li>
                    <li>• Confidential program data</li>
                    <li>• Internal communications or documents</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              3. How We Protect Your Data
            </h2>
            
            <div className="space-y-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Technical Safeguards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-trailguide-neutral mb-2">Encryption</h5>
                      <ul className="text-sm text-trailguide-slate space-y-1">
                        <li>• TLS 1.3 for data in transit</li>
                        <li>• AES-256 for data at rest</li>
                        <li>• End-to-end encryption for sensitive communications</li>
                        <li>• Encrypted database backups</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-trailguide-neutral mb-2">Access Controls</h5>
                      <ul className="text-sm text-trailguide-slate space-y-1">
                        <li>• Multi-factor authentication required</li>
                        <li>• Role-based permission systems</li>
                        <li>• Regular access reviews and audits</li>
                        <li>• Automated session timeouts</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-trailguide-neutral mb-2">Infrastructure</h5>
                      <ul className="text-sm text-trailguide-slate space-y-1">
                        <li>• SOC 2 Type II compliant hosting</li>
                        <li>• Distributed denial-of-service protection</li>
                        <li>• 24/7 security monitoring</li>
                        <li>• Regular vulnerability scanning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-trailguide-neutral mb-2">Backup & Recovery</h5>
                      <ul className="text-sm text-trailguide-slate space-y-1">
                        <li>• Daily automated backups</li>
                        <li>• Geographic redundancy</li>
                        <li>• Disaster recovery testing</li>
                        <li>• 99.9% uptime SLA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Human Safeguards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Staff Training</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Annual privacy and security training</li>
                          <li>• Nonprofit sector ethics education</li>
                          <li>• Incident response procedures</li>
                          <li>• Regular security awareness updates</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Data Governance</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Data privacy officer oversight</li>
                          <li>• Regular compliance audits</li>
                          <li>• Clear data handling procedures</li>
                          <li>• Breach notification protocols</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Background Checks:</strong> All staff with access to user data undergo background 
                        checks and sign confidentiality agreements specific to nonprofit data protection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              4. How We Share Data
            </h2>
            
            <div className="space-y-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">With Service Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-trailguide-slate text-sm">
                      We work with trusted providers who help us deliver our services. All providers sign 
                      data processing agreements and are contractually bound to protect your information:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Essential Infrastructure</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong className="text-trailguide-neutral">Vercel:</strong>
                            <p className="text-trailguide-slate">Platform hosting and deployment</p>
                          </div>
                          <div>
                            <strong className="text-trailguide-neutral">Supabase:</strong>
                            <p className="text-trailguide-slate">Database and user authentication</p>
                          </div>
                          <div>
                            <strong className="text-trailguide-neutral">Cloudflare:</strong>
                            <p className="text-trailguide-slate">Security and performance optimization</p>
                          </div>
                          <div>
                            <strong className="text-trailguide-neutral">SendGrid:</strong>
                            <p className="text-trailguide-slate">Email delivery and communications</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">AI & Analytics</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong className="text-trailguide-neutral">OpenAI:</strong>
                            <p className="text-trailguide-slate">AI assessment and recommendation engine</p>
                          </div>
                          <div>
                            <strong className="text-trailguide-neutral">Mixpanel:</strong>
                            <p className="text-trailguide-slate">Product analytics and user behavior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">For Research & Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-trailguide-slate text-sm">
                      We believe in advancing the entire nonprofit sector through research and advocacy. 
                      With appropriate safeguards:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">What We Share</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Anonymized aggregate statistics</li>
                          <li>• Industry trend analyses</li>
                          <li>• Best practice case studies (with consent)</li>
                          <li>• Research on AI adoption barriers</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Protection Measures</h5>
                        <ul className="text-sm text-trailguide-slate space-y-1">
                          <li>• Statistical disclosure control</li>
                          <li>• Minimum group sizes for reporting</li>
                          <li>• Expert review for re-identification risk</li>
                          <li>• Clear opt-out mechanisms</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Research Ethics:</strong> All research activities follow institutional review 
                        board (IRB) standards and nonprofit sector ethical guidelines for data use.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Rights */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              5. Your Data Rights & Controls
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Access & Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-trailguide-slate">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>View Your Data:</strong> Download a complete copy of your data in JSON format
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Update Information:</strong> Modify your profile and assessment responses anytime
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Delete Account:</strong> Remove your data with 30-day confirmation period
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Export Data:</strong> Get your data in portable formats for migration
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Privacy Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-trailguide-slate">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Opt-out of Research:</strong> Exclude your data from aggregate research studies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Limit AI Processing:</strong> Request human-only assessment processing
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Communication Preferences:</strong> Control emails, notifications, and marketing
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Data Retention:</strong> Set custom retention periods for your information
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-trailguide-border mt-6">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h4 className="font-semibold text-trailguide-neutral">Exercise Your Rights</h4>
                  <p className="text-trailguide-slate">
                    Access your data management dashboard or contact our privacy team for assistance 
                    with any data requests or questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/hub">Data Dashboard</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Contact Privacy Team</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              6. Compliance & Standards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Legal Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>GDPR:</strong> European Union data protection rights</li>
                    <li>• <strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
                    <li>• <strong>COPPA:</strong> Children's privacy protection (where applicable)</li>
                    <li>• <strong>SOX:</strong> Financial data handling for public nonprofits</li>
                    <li>• <strong>HIPAA:</strong> Health information (for healthcare nonprofits)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Industry Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>SOC 2 Type II:</strong> Security and availability controls</li>
                    <li>• <strong>ISO 27001:</strong> Information security management</li>
                    <li>• <strong>NIST Framework:</strong> Cybersecurity best practices</li>
                    <li>• <strong>Better Business Bureau:</strong> Nonprofit accountability standards</li>
                    <li>• <strong>AFP Guidelines:</strong> Association of Fundraising Professionals ethics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-trailguide-border mt-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-trailguide-evergreen flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Certification & Audits</h4>
                    <p className="text-trailguide-slate text-sm mb-4">
                      TrailGuide undergoes regular third-party audits and maintains current certifications 
                      to ensure our data practices meet the highest standards for nonprofit organizations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">SOC 2 Compliant</Badge>
                      <Badge variant="secondary">GDPR Ready</Badge>
                      <Badge variant="secondary">CCPA Compliant</Badge>
                      <Badge variant="secondary">Nonprofit Verified</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild variant="outline">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/terms">Terms of Service</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Data Team</Link>
            </Button>
          </div>
          
          <div className="p-6 bg-trailguide-evergreen/10 rounded-lg">
            <h4 className="font-semibold text-trailguide-neutral mb-2">Questions About Our Data Practices?</h4>
            <p className="text-sm text-trailguide-slate mb-4">
              We believe transparency builds trust. If you have questions about how we collect, use, 
              or protect your data, our privacy team is here to help.
            </p>
            <div className="space-y-2 text-sm text-trailguide-slate">
              <p><strong>Data Privacy Officer:</strong> privacy@trailguide.org</p>
              <p><strong>Security Team:</strong> security@trailguide.org</p>
              <p><strong>General Data Questions:</strong> Available through our contact form</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
