import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard,
  Smartphone,
  Monitor,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Settings,
  Zap,
  Heart,
  Shield,
  Target,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  FileText,
  Volume2,
  Contrast,
  Mic
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility Statement | TrailGuide',
  description: 'TrailGuide\'s commitment to digital accessibility and inclusive design for all nonprofit users, including compliance with WCAG 2.1 AA standards.',
}

const wcagCompliance = [
  {
    principle: "Perceivable",
    icon: Eye,
    status: "compliant",
    features: [
      "Alt text for all images and graphics",
      "High contrast color schemes (4.5:1 minimum)",
      "Scalable text up to 200% without horizontal scrolling",
      "Audio descriptions for video content",
      "Captions for all multimedia content"
    ]
  },
  {
    principle: "Operable", 
    icon: MousePointer,
    status: "compliant",
    features: [
      "Full keyboard navigation support",
      "No content flashes more than 3 times per second",
      "Sufficient time limits with extension options",
      "Skip navigation links on all pages",
      "Focus indicators clearly visible"
    ]
  },
  {
    principle: "Understandable",
    icon: Users,
    status: "compliant", 
    features: [
      "Clear, simple language throughout",
      "Consistent navigation and layout",
      "Form labels and error messages",
      "Predictable interface behavior",
      "Context-sensitive help available"
    ]
  },
  {
    principle: "Robust",
    icon: Settings,
    status: "partial",
    features: [
      "Valid HTML5 semantic markup",
      "ARIA labels and landmarks",
      "Compatible with assistive technologies",
      "Progressive enhancement design",
      "Graceful degradation for older browsers"
    ]
  }
]

const assistiveTechnologies = [
  {
    technology: "Screen Readers",
    icon: Volume2,
    compatibility: "Full",
    tested: ["NVDA", "JAWS", "VoiceOver", "TalkBack"],
    features: ["Semantic HTML", "ARIA labels", "Skip links", "Heading structure"]
  },
  {
    technology: "Voice Control",
    icon: Mic,
    compatibility: "Full", 
    tested: ["Dragon NaturallySpeaking", "Windows Speech Recognition", "Voice Control (macOS)"],
    features: ["Voice navigation", "Voice form filling", "Command shortcuts"]
  },
  {
    technology: "Keyboard Navigation",
    icon: Keyboard,
    compatibility: "Full",
    tested: ["Tab navigation", "Arrow keys", "Enter/Space", "Escape key"],
    features: ["Focus management", "Keyboard shortcuts", "Tab order", "Focus indicators"]
  },
  {
    technology: "Screen Magnification",
    icon: Monitor,
    compatibility: "Full",
    tested: ["ZoomText", "Magnifier (Windows)", "Zoom (macOS)", "Browser zoom"],
    features: ["200% zoom support", "Responsive design", "No horizontal scroll", "Clear focus"]
  },
  {
    technology: "High Contrast",
    icon: Contrast,
    compatibility: "Partial",
    tested: ["Windows High Contrast", "Dark mode", "Custom themes"],
    features: ["Color contrast ratios", "Theme switching", "Custom CSS support"]
  }
]

const accessibilityFeatures = [
  {
    category: "Visual Accessibility",
    icon: Eye,
    features: [
      {
        name: "Color Contrast",
        status: "implemented",
        description: "Minimum 4.5:1 contrast ratio for normal text, 3:1 for large text"
      },
      {
        name: "Text Scaling",
        status: "implemented", 
        description: "Text can be scaled up to 200% without loss of functionality"
      },
      {
        name: "Alternative Text",
        status: "implemented",
        description: "All meaningful images have descriptive alt text"
      },
      {
        name: "High Contrast Mode",
        status: "in-progress",
        description: "Dedicated high contrast theme for users with visual impairments"
      }
    ]
  },
  {
    category: "Motor Accessibility",
    icon: MousePointer,
    features: [
      {
        name: "Keyboard Navigation",
        status: "implemented",
        description: "Complete keyboard access to all interactive elements"
      },
      {
        name: "Click Targets",
        status: "implemented",
        description: "Minimum 44px touch targets for mobile interfaces"
      },
      {
        name: "Focus Management",
        status: "implemented",
        description: "Clear focus indicators and logical tab order"
      },
      {
        name: "Voice Control",
        status: "planned",
        description: "Voice command support for navigation and form completion"
      }
    ]
  },
  {
    category: "Cognitive Accessibility",
    icon: Users,
    features: [
      {
        name: "Plain Language",
        status: "implemented",
        description: "Clear, simple language with technical terms explained"
      },
      {
        name: "Consistent Design",
        status: "implemented",
        description: "Predictable layout and navigation patterns throughout"
      },
      {
        name: "Error Prevention",
        status: "implemented",
        description: "Form validation with clear, helpful error messages"
      },
      {
        name: "Session Timeout",
        status: "in-progress",
        description: "Configurable session timeouts with warning notifications"
      }
    ]
  },
  {
    category: "Hearing Accessibility",
    icon: Ear,
    features: [
      {
        name: "Video Captions",
        status: "implemented",
        description: "All video content includes accurate closed captions"
      },
      {
        name: "Audio Transcripts",
        status: "implemented",
        description: "Written transcripts for all audio content"
      },
      {
        name: "Visual Indicators",
        status: "implemented",
        description: "Visual alerts for important notifications and feedback"
      },
      {
        name: "Sign Language",
        status: "planned",
        description: "ASL interpretation for key instructional content"
      }
    ]
  }
]

const knownLimitations = [
  {
    issue: "Third-party AI Interface",
    impact: "Some AI interaction elements may not be fully accessible",
    timeline: "Q4 2025",
    workaround: "Alternative text-based interaction methods available"
  },
  {
    issue: "Complex Data Visualizations", 
    impact: "Chart elements may require additional screen reader support",
    timeline: "Q1 2026",
    workaround: "Data tables and text summaries provided as alternatives"
  },
  {
    issue: "Video Player Controls",
    impact: "Custom video player may not work with all assistive technologies",
    timeline: "Q4 2025", 
    workaround: "Standard HTML5 video fallback available"
  }
]

const auditSchedule = [
  {
    type: "Internal Review",
    frequency: "Monthly",
    scope: "New features and content updates",
    nextDate: "2025-09-15"
  },
  {
    type: "External Audit",
    frequency: "Quarterly",
    scope: "Full platform WCAG 2.1 AA compliance",
    nextDate: "2025-10-30"
  },
  {
    type: "User Testing",
    frequency: "Bi-annually", 
    scope: "Testing with disabled users and assistive technology",
    nextDate: "2025-11-15"
  },
  {
    type: "Automated Testing",
    frequency: "Continuous",
    scope: "CI/CD pipeline accessibility checks",
    nextDate: "Ongoing"
  }
]

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-white border-b border-trailguide-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
              TrailGuide is committed to ensuring digital accessibility for all nonprofit users. 
              We continuously work to improve the accessibility of our platform and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-lg font-bold text-trailguide-neutral mb-1">WCAG 2.1</div>
                <div className="text-sm text-trailguide-slate">AA Compliant</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-lg font-bold text-trailguide-neutral mb-1">15%</div>
                <div className="text-sm text-trailguide-slate">Users with Disabilities</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-lg font-bold text-trailguide-neutral mb-1">12</div>
                <div className="text-sm text-trailguide-slate">Languages Supported</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-lg font-bold text-trailguide-neutral mb-1">Monthly</div>
                <div className="text-sm text-trailguide-slate">Accessibility Reviews</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Our Commitment */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 text-center">
            Our Accessibility Commitment
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Heart className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">
                  Inclusive by Design
                </h3>
                <p className="text-trailguide-slate max-w-3xl mx-auto">
                  At TrailGuide, we believe that AI-powered tools should be accessible to everyone in the nonprofit sector. 
                  We are committed to removing barriers and creating an inclusive digital experience that empowers all 
                  organizations, regardless of their users' abilities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Eye className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h4 className="font-semibold text-trailguide-neutral mb-2">Universal Design</h4>
                  <p className="text-sm text-trailguide-slate">
                    We design for the widest range of users from the start, not as an afterthought.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h4 className="font-semibold text-trailguide-neutral mb-2">User-Centered</h4>
                  <p className="text-sm text-trailguide-slate">
                    Real users with disabilities guide our design decisions and testing processes.
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h4 className="font-semibold text-trailguide-neutral mb-2">Continuous Improvement</h4>
                  <p className="text-sm text-trailguide-slate">
                    We regularly audit, test, and improve our accessibility features and compliance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* WCAG Compliance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            WCAG 2.1 AA Compliance
          </h2>
          
          <div className="space-y-6">
            {wcagCompliance.map((principle, index) => {
              const Icon = principle.icon
              return (
                <Card key={index} className="border-trailguide-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon className="h-6 w-6 mr-3 text-trailguide-evergreen" />
                        {principle.principle}
                      </div>
                      <Badge 
                        variant={principle.status === 'compliant' ? 'default' : 'secondary'}
                        className={principle.status === 'compliant' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {principle.status === 'compliant' ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {principle.status === 'compliant' ? 'Compliant' : 'In Progress'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {principle.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trailguide-slate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Assistive Technology Compatibility */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            Assistive Technology Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistiveTechnologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Card key={index} className="border-trailguide-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                      {tech.technology}
                    </CardTitle>
                    <Badge 
                      variant={tech.compatibility === 'Full' ? 'default' : 'secondary'}
                      className={tech.compatibility === 'Full' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {tech.compatibility} Support
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Tested With:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.tested.map((tool, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-trailguide-neutral mb-2">Features:</h5>
                        <ul className="space-y-1">
                          {tech.features.map((feature, i) => (
                            <li key={i} className="text-sm text-trailguide-slate flex items-start">
                              <span className="w-1 h-1 bg-trailguide-slate rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            Platform Accessibility Features
          </h2>
          
          <div className="space-y-8">
            {accessibilityFeatures.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="border-trailguide-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Icon className="h-6 w-6 mr-3 text-trailguide-evergreen" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.features.map((feature, i) => (
                        <div key={i} className="border border-trailguide-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-trailguide-neutral">{feature.name}</h4>
                            <Badge 
                              variant={
                                feature.status === 'implemented' ? 'default' : 
                                feature.status === 'in-progress' ? 'secondary' : 
                                'outline'
                              }
                              className={
                                feature.status === 'implemented' ? 'bg-green-100 text-green-800' :
                                feature.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }
                            >
                              {feature.status === 'implemented' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {feature.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                              {feature.status === 'planned' && <Target className="h-3 w-3 mr-1" />}
                              {feature.status.charAt(0).toUpperCase() + feature.status.slice(1).replace('-', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-trailguide-slate">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Known Limitations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            Known Limitations & Remediation
          </h2>
          
          <div className="space-y-4">
            {knownLimitations.map((limitation, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-trailguide-neutral mb-2">{limitation.issue}</h3>
                      <p className="text-trailguide-slate mb-3">{limitation.impact}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-trailguide-neutral mb-1">Current Workaround:</h4>
                          <p className="text-sm text-trailguide-slate">{limitation.workaround}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-trailguide-neutral mb-1">Expected Resolution:</h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{limitation.timeline}</Badge>
                            <span className="text-sm text-trailguide-slate">Target completion</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testing & Auditing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            Testing & Audit Schedule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditSchedule.map((audit, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">{audit.type}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{audit.frequency}</Badge>
                    <span className="text-sm text-trailguide-slate">• Next: {audit.nextDate}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate text-sm">{audit.scope}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feedback & Support */}
        <section>
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
                Accessibility Support & Feedback
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                We welcome feedback about the accessibility of our platform. If you encounter 
                any barriers or have suggestions for improvement, please reach out to us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Accessibility Team</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Report issues or request accessibility assistance
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:accessibility@trailguide.org">
                      accessibility@trailguide.org
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Phone Support</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Speak directly with our accessibility team
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="tel:+1-555-ACCESS">
                      +1 (555) ACCESS-1
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Alternative Formats</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Request content in alternative accessible formats
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Request Format
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-trailguide-slate mb-4">
                We aim to respond to all accessibility inquiries within 2 business days.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/support">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    General Support
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    <Users className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
