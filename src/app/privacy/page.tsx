import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Shield, 
  Eye, 
  Lock, 
  Globe, 
  FileText,
  Mail,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | TrailGuide',
  description: 'TrailGuide\'s privacy policy outlines how we collect, use, and protect your personal information and organizational data with the highest ethical standards.',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xl text-trailguide-slate max-w-2xl">
            We are committed to protecting your privacy and handling your data with the highest ethical standards. 
            This policy explains how we collect, use, and safeguard your information.
          </p>
          
          <div className="mt-6 flex items-center text-sm text-trailguide-slate">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last updated: August 29, 2025</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Quick Summary */}
        <Card className="border-trailguide-border mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-trailguide-evergreen">
              <Shield className="h-5 w-5 mr-2" />
              Privacy at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">What We Collect</h4>
                <ul className="text-sm text-trailguide-slate space-y-1">
                  <li>• Contact information (name, email, organization)</li>
                  <li>• Assessment responses and preferences</li>
                  <li>• Usage data and analytics</li>
                  <li>• Communication records</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">How We Use It</h4>
                <ul className="text-sm text-trailguide-slate space-y-1">
                  <li>• Provide personalized recommendations</li>
                  <li>• Improve our services and platform</li>
                  <li>• Communicate updates and support</li>
                  <li>• Research and development</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-trailguide-evergreen/10 rounded-lg">
              <p className="text-sm text-trailguide-slate">
                <strong>Key Promise:</strong> We never sell your data, use it for advertising, or share it with third parties 
                without your explicit consent. Your information is used solely to serve your nonprofit's mission.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              1. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    When you interact with TrailGuide, we may collect:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• <strong>Contact Details:</strong> Name, email address, phone number, organization name, job title</li>
                    <li>• <strong>Account Information:</strong> Username, password (encrypted), profile preferences</li>
                    <li>• <strong>Communication Data:</strong> Messages, feedback, support requests, survey responses</li>
                    <li>• <strong>Assessment Data:</strong> Responses to TrailMap assessment questions and results</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Organizational Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    To provide relevant recommendations, we collect:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• <strong>Organization Details:</strong> Mission, size, sector, location, programs</li>
                    <li>• <strong>Technology Usage:</strong> Current tools, AI readiness level, technical capabilities</li>
                    <li>• <strong>Goals and Challenges:</strong> Objectives, pain points, desired outcomes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Usage and Technical Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    To improve our platform, we automatically collect:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• <strong>Platform Usage:</strong> Pages visited, features used, time spent, click patterns</li>
                    <li>• <strong>Device Information:</strong> Browser type, operating system, IP address, device identifiers</li>
                    <li>• <strong>Performance Data:</strong> Load times, errors, system performance metrics</li>
                    <li>• <strong>Cookies:</strong> Preferences, session data, analytics (see Cookie Policy below)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              2. How We Use Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Service Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Generate personalized AI readiness assessments</li>
                    <li>• Provide tailored kit and resource recommendations</li>
                    <li>• Deliver advisory services and support</li>
                    <li>• Enable peer connections and community features</li>
                    <li>• Process payments and manage subscriptions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Send assessment results and recommendations</li>
                    <li>• Provide platform updates and feature announcements</li>
                    <li>• Respond to support requests and inquiries</li>
                    <li>• Share relevant educational content and insights</li>
                    <li>• Notify about events and partnership opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Platform Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Analyze usage patterns to enhance user experience</li>
                    <li>• Develop new features and tools</li>
                    <li>• Conduct research on nonprofit AI adoption</li>
                    <li>• Test and optimize platform performance</li>
                    <li>• Create aggregate insights for the sector</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Legal Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Comply with applicable laws and regulations</li>
                    <li>• Respond to legal requests and court orders</li>
                    <li>• Protect against fraud and security threats</li>
                    <li>• Enforce our terms of service and policies</li>
                    <li>• Maintain accurate records for compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              3. Third-Party Services & AI
            </h2>
            
            <Card className="border-trailguide-border mb-6">
              <CardHeader>
                <CardTitle className="text-lg">OpenAI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-trailguide-slate mb-4">
                  TrailGuide uses OpenAI's services to power our AI assessment and recommendation features:
                </p>
                <ul className="space-y-2 text-trailguide-slate mb-4">
                  <li>• <strong>Data Sent:</strong> Assessment responses, organization context (anonymized when possible)</li>
                  <li>• <strong>Purpose:</strong> Generate personalized recommendations and insights</li>
                  <li>• <strong>OpenAI Policies:</strong> Subject to OpenAI's privacy policy and data usage agreement</li>
                  <li>• <strong>Opt-Out:</strong> You can request manual assessment processing instead of AI-powered analysis</li>
                </ul>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> We never send sensitive donor information, financial data, or confidential 
                    program details to third-party AI services. Only general organizational characteristics are shared.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Analytics & Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>Google Analytics:</strong> Website usage and performance</li>
                    <li>• <strong>Mixpanel:</strong> Product analytics and user behavior</li>
                    <li>• <strong>Sentry:</strong> Error monitoring and debugging</li>
                    <li>• <strong>Hotjar:</strong> User experience and interface optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>Vercel:</strong> Platform hosting and deployment</li>
                    <li>• <strong>Supabase:</strong> Database and user authentication</li>
                    <li>• <strong>Cloudflare:</strong> Security and performance optimization</li>
                    <li>• <strong>SendGrid:</strong> Email delivery and communications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              4. When We Share Information
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">With Your Consent</h4>
                    <p className="text-trailguide-slate text-sm">
                      We may share your information when you explicitly agree, such as connecting with peer organizations 
                      or participating in research studies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Service Providers</h4>
                    <p className="text-trailguide-slate text-sm">
                      We share data with trusted vendors who help us operate our platform (hosting, analytics, email). 
                      These providers are contractually bound to protect your information.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Aggregated Research</h4>
                    <p className="text-trailguide-slate text-sm">
                      We may share anonymized, aggregate data for nonprofit sector research and to advance AI adoption 
                      in social good work. Individual organizations are never identifiable.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Legal Requirements</h4>
                    <p className="text-trailguide-slate text-sm">
                      We may disclose information when required by law, to protect our legal rights, prevent harm, 
                      or respond to valid legal process.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>What We Never Do:</strong> We never sell your personal information to advertisers, 
                      marketers, or data brokers. We never use your data for advertising or commercial purposes 
                      unrelated to our nonprofit mission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              5. Your Privacy Rights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Access & Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                    <li>• <strong>Update:</strong> Correct or update your information</li>
                    <li>• <strong>Delete:</strong> Request deletion of your data</li>
                    <li>• <strong>Export:</strong> Download your data in portable format</li>
                    <li>• <strong>Restrict:</strong> Limit how we process your information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Communication Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
                    <li>• <strong>Customize:</strong> Choose types of communications you receive</li>
                    <li>• <strong>Frequency:</strong> Adjust how often we contact you</li>
                    <li>• <strong>Channels:</strong> Select preferred communication methods</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-trailguide-border mt-6">
              <CardContent className="p-6">
                <h4 className="font-semibold text-trailguide-neutral mb-3">Exercise Your Rights</h4>
                <p className="text-trailguide-slate mb-4">
                  To exercise any of these rights, contact us at <strong>privacy@trailguide.org</strong> or use our 
                  privacy request form. We'll respond within 30 days.
                </p>
                <Button asChild>
                  <Link href="/contact" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Submit Privacy Request
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Data Security & Retention */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              6. Data Security & Retention
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Security Measures</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• End-to-end encryption for sensitive data</li>
                    <li>• Secure hosting on SOC 2 compliant infrastructure</li>
                    <li>• Regular security audits and vulnerability testing</li>
                    <li>• Multi-factor authentication for all staff</li>
                    <li>• Incident response and breach notification procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• <strong>Account Data:</strong> Retained while account is active</li>
                    <li>• <strong>Assessment Data:</strong> 7 years for research purposes</li>
                    <li>• <strong>Communication Records:</strong> 3 years for support</li>
                    <li>• <strong>Analytics Data:</strong> 2 years in aggregated form</li>
                    <li>• <strong>Legal Requirements:</strong> As required by applicable law</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* International & Changes */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              7. International Data & Policy Changes
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">International Transfers</h4>
                    <p className="text-trailguide-slate text-sm mb-3">
                      TrailGuide operates globally and may transfer your data to countries with different privacy laws. 
                      We ensure adequate protection through:
                    </p>
                    <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                      <li>• Standard contractual clauses approved by data protection authorities</li>
                      <li>• Adequacy decisions recognizing equivalent protection</li>
                      <li>• Your explicit consent for specific transfers</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Policy Updates</h4>
                    <p className="text-trailguide-slate text-sm">
                      We may update this privacy policy to reflect changes in our practices or legal requirements. 
                      We'll notify you of material changes via email and prominently display updates on our website.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Contact Information</h4>
                    <p className="text-trailguide-slate text-sm">
                      Questions about this privacy policy or our data practices? Contact our Privacy Officer at 
                      <strong> privacy@trailguide.org</strong> or write to us at TrailGuide Foundation, 
                      Privacy Office, San Francisco, CA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/terms">Terms of Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/data">Data Practices</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Privacy Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
