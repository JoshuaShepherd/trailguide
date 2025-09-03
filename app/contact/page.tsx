import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Mail, 
  MessageCircle, 
  Users, 
  Newspaper,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | TrailGuide',
  description: 'Get in touch with TrailGuide for support, partnerships, media inquiries, or to learn more about our AI tools and services for nonprofits.',
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'General Inquiries',
    description: 'Questions about our platform, services, or mission',
    contact: 'hello@trailguide.org',
    responseTime: '24 hours'
  },
  {
    icon: Users,
    title: 'Partnerships',
    description: 'Collaboration opportunities and strategic partnerships',
    contact: 'partnerships@trailguide.org',
    responseTime: '48 hours'
  },
  {
    icon: Newspaper,
    title: 'Media & Press',
    description: 'Interviews, press inquiries, and media resources',
    contact: 'media@trailguide.org',
    responseTime: '4 hours'
  },
  {
    icon: Calendar,
    title: 'Advisory Services',
    description: 'Consulting and strategic guidance for your AI journey',
    contact: 'advisory@trailguide.org',
    responseTime: '12 hours'
  }
]

const officeInfo = {
  headquarters: {
    title: 'Headquarters',
    address: 'San Francisco, CA',
    description: 'Primary operations and leadership team',
    note: 'Remote-first organization'
  },
  eastern: {
    title: 'Eastern Hub',
    address: 'Boston, MA',
    description: 'Research and development center',
    note: 'By appointment only'
  }
}

const responseExpectations = [
  {
    icon: CheckCircle,
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours during business days'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday-Friday, 9 AM - 6 PM PST | 12 PM - 9 PM EST'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Supporting nonprofits worldwide with localized assistance'
  }
]

const faqs = [
  {
    question: 'How do I get started with TrailGuide?',
    answer: 'The best way to start is by taking our free TrailMap assessment, which will help you understand your organization\'s AI readiness and provide personalized recommendations.'
  },
  {
    question: 'Do you offer training for nonprofit staff?',
    answer: 'Yes! We offer both group training through our TrailHikes program and customized training as part of our advisory services. Contact us to discuss your specific needs.'
  },
  {
    question: 'Is TrailGuide suitable for small nonprofits?',
    answer: 'Absolutely! Our tools and resources are designed to be accessible to organizations of all sizes. Many of our resources are free, and we offer sliding scale pricing for paid services.'
  },
  {
    question: 'Can you help with AI implementation?',
    answer: 'Yes, through our advisory services we provide hands-on implementation support, including tool selection, workflow design, staff training, and change management.'
  },
  {
    question: 'Do you work with international nonprofits?',
    answer: 'Yes! We work with nonprofits worldwide and have experience with different regulatory environments and cultural contexts.'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            We're here to help your nonprofit navigate the AI landscape. 
            Reach out for support, partnerships, or just to say hello.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {responseExpectations.map((expectation, index) => {
              const IconComponent = expectation.icon;
              return (
                <div key={expectation.title} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{expectation.title}</h3>
                  <p className="text-sm text-emerald-200">{expectation.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Choose Your Contact Method
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Different inquiries, different experts. We'll route your message to the right team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.title} className="border-trailguide-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-trailguide-evergreen" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-trailguide-neutral mb-2">
                          {method.title}
                        </h3>
                        <p className="text-trailguide-slate mb-4">
                          {method.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <a 
                            href={`mailto:${method.contact}`}
                            className="text-trailguide-evergreen hover:text-trailguide-evergreen/80 font-medium"
                          >
                            {method.contact}
                          </a>
                          <span className="text-sm text-trailguide-slate">
                            ~{method.responseTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-trailguide-slate">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="border-trailguide-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="border-trailguide-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.org"
                      className="border-trailguide-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input 
                      id="organization" 
                      placeholder="Your nonprofit organization"
                      className="border-trailguide-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger className="border-trailguide-border">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Questions</SelectItem>
                        <SelectItem value="advisory">Advisory Services</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orgSize">Organization Size</Label>
                    <Select>
                      <SelectTrigger className="border-trailguide-border">
                        <SelectValue placeholder="Select organization size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual/Volunteer</SelectItem>
                        <SelectItem value="micro">Micro (1-5 staff)</SelectItem>
                        <SelectItem value="small">Small (6-25 staff)</SelectItem>
                        <SelectItem value="medium">Medium (26-100 staff)</SelectItem>
                        <SelectItem value="large">Large (100+ staff)</SelectItem>
                        <SelectItem value="network">Network/Coalition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief description of your inquiry"
                    className="border-trailguide-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    rows={6}
                    placeholder="Please provide details about your inquiry, including any specific questions or areas where you'd like assistance..."
                    className="border-trailguide-border"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="newsletter" className="mt-1" />
                    <Label htmlFor="newsletter" className="text-sm text-trailguide-slate">
                      I'd like to receive updates about TrailGuide news and nonprofit AI insights
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <Label htmlFor="privacy" className="text-sm text-trailguide-slate">
                      I agree to TrailGuide's <a href="/privacy" className="text-trailguide-evergreen hover:underline">privacy policy</a> *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Contact & FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Information */}
            <div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
                Office Locations
              </h2>
              
              <div className="space-y-6">
                {Object.values(officeInfo).map((office, index) => (
                  <Card key={office.title} className="border-trailguide-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-trailguide-evergreen" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-trailguide-neutral mb-1">
                            {office.title}
                          </h3>
                          <p className="text-trailguide-slate mb-2">
                            {office.address}
                          </p>
                          <p className="text-sm text-trailguide-slate mb-1">
                            {office.description}
                          </p>
                          <p className="text-xs text-trailguide-slate italic">
                            {office.note}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-trailguide-neutral mb-4">
                  Schedule a Meeting
                </h3>
                <p className="text-trailguide-slate mb-4">
                  Need a more detailed conversation? Schedule a free 30-minute consultation with our team.
                </p>
                <Button asChild>
                  <a href="https://calendly.com/trailguide" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-trailguide-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-trailguide-neutral mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-trailguide-slate text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-trailguide-slate mb-4">
                  Don't see your question answered?
                </p>
                <Button asChild variant="outline">
                  <a href="/support" className="flex items-center">
                    Visit Support Center
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-trailguide-slate mb-6">
                For urgent technical issues or time-sensitive partnership opportunities, 
                contact us directly for faster response.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:urgent@trailguide.org" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    urgent@trailguide.org
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+1-415-555-0123" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    +1 (415) 555-0123
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-trailguide-slate mt-4">
                Emergency line monitored 24/7 for critical issues only
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
