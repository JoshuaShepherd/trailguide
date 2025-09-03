import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Scale, 
  FileText, 
  AlertTriangle, 
  Shield, 
  Users,
  Gavel,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | TrailGuide',
  description: 'TrailGuide\'s terms of service outline the rights and responsibilities for using our AI-powered nonprofit platform and advisory services.',
}

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-xl text-trailguide-slate max-w-2xl">
            These terms govern your use of TrailGuide's platform, assessment tools, and advisory services. 
            By using our services, you agree to these terms.
          </p>
          
          <div className="mt-6 flex items-center text-sm text-trailguide-slate">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Effective: August 29, 2025</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Agreement Summary */}
        <Card className="border-trailguide-border mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-trailguide-evergreen">
              <Scale className="h-5 w-5 mr-2" />
              Agreement Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Your Rights</h4>
                <ul className="text-sm text-trailguide-slate space-y-1">
                  <li>• Use all platform features</li>
                  <li>• Receive assessment results</li>
                  <li>• Access advisory services</li>
                  <li>• Export your data</li>
                  <li>• Cancel anytime</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Your Responsibilities</h4>
                <ul className="text-sm text-trailguide-slate space-y-1">
                  <li>• Provide accurate information</li>
                  <li>• Use services legally and ethically</li>
                  <li>• Protect account credentials</li>
                  <li>• Respect intellectual property</li>
                  <li>• Follow community guidelines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Our Commitments</h4>
                <ul className="text-sm text-trailguide-slate space-y-1">
                  <li>• Maintain platform availability</li>
                  <li>• Protect your privacy</li>
                  <li>• Provide quality assessments</li>
                  <li>• Offer responsive support</li>
                  <li>• Continuously improve services</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Nonprofit-First Commitment:</strong> These terms are designed specifically for nonprofit organizations. 
                We prioritize your mission over profit and structure our services to support social good.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              1. Acceptance of Terms
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-trailguide-slate">
                    By accessing or using TrailGuide's services, including our website, assessment platform, AI tools, 
                    and advisory services, you agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                  
                  <p className="text-trailguide-slate">
                    These terms constitute a legally binding agreement between your organization and TrailGuide Foundation. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                  
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Organizational Authority:</strong> By accepting these terms, you confirm that you have 
                      the authority to bind your organization to this agreement and that your organization is a 
                      qualified nonprofit or social good entity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              2. TrailGuide Services
            </h2>
            
            <div className="space-y-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Platform Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• <strong>TrailMap Assessment:</strong> AI-powered organizational readiness evaluation</li>
                    <li>• <strong>TrailKits:</strong> 15 specialized modules for nonprofit operations</li>
                    <li>• <strong>Resource Library:</strong> Curated tools, templates, and best practices</li>
                    <li>• <strong>Peer Network:</strong> Connection with other mission-driven organizations</li>
                    <li>• <strong>Progress Tracking:</strong> Dashboard for monitoring AI adoption journey</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Advisory Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• <strong>Strategy Consulting:</strong> Custom AI implementation roadmaps</li>
                    <li>• <strong>Training & Workshops:</strong> Staff development and change management</li>
                    <li>• <strong>Technical Support:</strong> Implementation assistance and troubleshooting</li>
                    <li>• <strong>Ongoing Guidance:</strong> Regular check-ins and optimization recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Service Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We may:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• Perform scheduled maintenance with advance notice</li>
                    <li>• Temporarily suspend services for security or technical reasons</li>
                    <li>• Update or modify features to improve functionality</li>
                    <li>• Discontinue services with 90 days notice and data export options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              3. Your Responsibilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Account Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Maintain accurate and current organization information</li>
                    <li>• Protect your login credentials and account security</li>
                    <li>• Notify us immediately of any unauthorized access</li>
                    <li>• Ensure authorized personnel manage your account</li>
                    <li>• Update contact information for important notifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Appropriate Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Use services only for legitimate nonprofit purposes</li>
                    <li>• Provide truthful information in assessments</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Follow applicable laws and regulations</li>
                    <li>• Maintain professional conduct in community interactions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Prohibited Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Sharing account access with unauthorized parties</li>
                    <li>• Attempting to reverse engineer our platform</li>
                    <li>• Using services for commercial or political purposes</li>
                    <li>• Distributing harmful or offensive content</li>
                    <li>• Interfering with platform security or performance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Data Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Provide complete and honest assessment responses</li>
                    <li>• Update organizational information when circumstances change</li>
                    <li>• Verify data before submitting for AI analysis</li>
                    <li>• Report any errors or inconsistencies promptly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              4. Payment & Subscription Terms
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Free Services</h4>
                    <p className="text-trailguide-slate text-sm mb-3">
                      Basic TrailMap assessment and essential TrailKits are provided free to qualifying nonprofits. 
                      These services are supported by grants and donations to advance sector-wide AI adoption.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Premium Services</h4>
                    <p className="text-trailguide-slate text-sm mb-3">
                      Advanced advisory services, custom implementations, and priority support are available 
                      through paid subscriptions:
                    </p>
                    <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                      <li>• Pricing based on organization size and needs</li>
                      <li>• Annual subscriptions with monthly payment options</li>
                      <li>• Pro-rata billing for mid-cycle changes</li>
                      <li>• 30-day money-back guarantee for new subscribers</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Payment Processing</h4>
                    <p className="text-trailguide-slate text-sm mb-3">
                      Payments are processed securely through Stripe. We accept:
                    </p>
                    <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                      <li>• Credit and debit cards (Visa, MasterCard, American Express)</li>
                      <li>• Bank transfers (ACH) for annual subscriptions</li>
                      <li>• Purchase orders for qualifying organizations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Cancellation & Refunds</h4>
                    <p className="text-trailguide-slate text-sm">
                      You may cancel your subscription at any time. Services continue until the end of your 
                      billing period. Refunds are provided for unused portions of annual subscriptions 
                      (minus a $50 processing fee for cancellations after 30 days).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              5. Intellectual Property
            </h2>
            
            <div className="space-y-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">TrailGuide's IP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    TrailGuide owns or licenses all intellectual property in our platform, including:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• Platform software, algorithms, and AI models</li>
                    <li>• Assessment methodologies and scoring systems</li>
                    <li>• TrailKit content, templates, and resources</li>
                    <li>• Trademarks, logos, and brand materials</li>
                    <li>• Research insights and aggregate data analyses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Your Content & Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    You retain ownership of all content and data you provide to TrailGuide. By using our services, 
                    you grant us limited rights to:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• Process your data to provide assessment and advisory services</li>
                    <li>• Create anonymized, aggregate insights for sector research</li>
                    <li>• Store and backup your information for service continuity</li>
                    <li>• Share data with service providers as outlined in our Privacy Policy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">Open Source & Attribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">
                    Some TrailGuide resources are available under Creative Commons licenses:
                  </p>
                  <ul className="space-y-2 text-trailguide-slate">
                    <li>• Assessment frameworks and methodologies (CC BY-SA 4.0)</li>
                    <li>• Selected templates and worksheets (CC BY 4.0)</li>
                    <li>• Research publications and white papers (CC BY-NC 4.0)</li>
                    <li>• Community-contributed content (various licenses)</li>
                  </ul>
                  <p className="text-sm text-trailguide-slate mt-4">
                    Please check individual resource licenses and provide appropriate attribution when sharing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              6. Disclaimers & Liability
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Important Disclaimers</h4>
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>• AI assessments are guidance tools, not definitive recommendations</li>
                          <li>• Results may not reflect unique organizational circumstances</li>
                          <li>• Implementation success depends on factors beyond our control</li>
                          <li>• Services are provided "as is" without warranties</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Limitation of Liability</h4>
                    <p className="text-trailguide-slate text-sm mb-3">
                      To the maximum extent permitted by law, TrailGuide's liability is limited to:
                    </p>
                    <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                      <li>• The amount you paid us in the 12 months preceding the claim</li>
                      <li>• Direct damages only (no consequential or punitive damages)</li>
                      <li>• Claims brought within one year of the incident</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Your Acknowledgment</h4>
                    <p className="text-trailguide-slate text-sm">
                      You acknowledge that AI technology has limitations and that all recommendations should be 
                      evaluated within the context of your organization's specific circumstances, legal requirements, 
                      and stakeholder needs. You remain solely responsible for strategic decisions and implementations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              7. Termination
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">By You</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• Cancel subscription anytime through your account</li>
                    <li>• Services continue through end of billing period</li>
                    <li>• Export your data before account closure</li>
                    <li>• Contact support for assistance with termination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">By TrailGuide</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-trailguide-slate">
                    <li>• For violation of terms (with notice and cure period)</li>
                    <li>• For non-payment after 30 days (with service suspension)</li>
                    <li>• For illegal or harmful activities (immediate)</li>
                    <li>• For service discontinuation (with 90 days notice)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-trailguide-border mt-6">
              <CardContent className="p-6">
                <h4 className="font-semibold text-trailguide-neutral mb-3">Data After Termination</h4>
                <p className="text-trailguide-slate text-sm">
                  Upon termination, we will provide a 30-day grace period for data export. After this period, 
                  your data will be deleted from our systems in accordance with our data retention policy, 
                  except as required by law or for legitimate business purposes.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              8. Legal Matters
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Governing Law</h4>
                    <p className="text-trailguide-slate text-sm">
                      These terms are governed by California law and federal law applicable therein. 
                      Any disputes will be resolved in the courts of San Francisco County, California.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Dispute Resolution</h4>
                    <p className="text-trailguide-slate text-sm mb-3">
                      We encourage resolving disputes through direct communication. For formal disputes:
                    </p>
                    <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                      <li>• First, contact our support team for resolution attempts</li>
                      <li>• Mediation through the American Arbitration Association</li>
                      <li>• Binding arbitration for disputes over $10,000</li>
                      <li>• Small claims court for smaller amounts</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Changes to Terms</h4>
                    <p className="text-trailguide-slate text-sm">
                      We may update these terms periodically. Material changes will be communicated via email 
                      and posted prominently on our website at least 30 days before taking effect. 
                      Continued use constitutes acceptance of updated terms.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Severability</h4>
                    <p className="text-trailguide-slate text-sm">
                      If any provision of these terms is found to be unenforceable, the remaining provisions 
                      will continue in full force and effect. We will work to replace any invalid provisions 
                      with enforceable alternatives that preserve the original intent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-6">
              9. Contact & Questions
            </h2>
            
            <Card className="border-trailguide-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-trailguide-slate">
                    Questions about these terms of service or need to report a terms violation? 
                    Contact our Legal Team:
                  </p>
                  
                  <div className="space-y-2 text-trailguide-slate">
                    <p><strong>Email:</strong> legal@trailguide.org</p>
                    <p><strong>Mail:</strong> TrailGuide Foundation, Legal Department, San Francisco, CA</p>
                    <p><strong>Phone:</strong> Available through our contact form for urgent legal matters</p>
                  </div>
                  
                  <div className="pt-4 border-t border-trailguide-border">
                    <p className="text-sm text-trailguide-slate">
                      <strong>TrailGuide Foundation</strong> is a registered 501(c)(3) nonprofit organization 
                      dedicated to advancing AI adoption in the social sector. EIN: [To be assigned]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/data">Data Practices</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Legal Team</Link>
            </Button>
          </div>
          
          <div className="mt-8 p-4 bg-trailguide-evergreen/10 rounded-lg">
            <p className="text-sm text-trailguide-slate">
              By using TrailGuide services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
