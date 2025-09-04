import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  FileText,
  Clock,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Calendar,
  Rocket,
  Star,
  Heart,
  Brain,
  Eye,
  Zap,
  BarChart,
  Globe
} from 'lucide-react';

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Process Banner */}
      <div className="bg-gradient-to-r from-trailguide-evergreen to-emerald-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <FileText className="h-4 w-4" />
            <span>🚀 INTAKE PROCESS: Transform from Inquiry to Platform Launch in 3-4 Weeks</span>
            <FileText className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/5 px-4 py-2 rounded-full mb-6">
            <Target className="h-4 w-4" />
            <span>Strategic Platform Development</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            The <span className="text-trailguide-evergreen">TrailGuide</span> Intake Process
          </h1>
          
          <p className="text-xl text-trailguide-slate leading-relaxed mb-8">
            A comprehensive system that transforms thought leaders from initial inquiry to platform launch. 
            We build strategic digital presence that amplifies your voice, grows your audience, and generates sustainable revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
              <Link href="/intake/discovery">
                Start Discovery Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#process-overview">Learn About the Process</Link>
            </Button>
          </div>
        </div>

        {/* Process Philosophy */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Our Process Philosophy</h2>
                <p className="text-trailguide-slate text-lg">
                  We don&apos;t just build websites—we create strategic digital platforms that serve your mission.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral">Story-First</h3>
                  </div>
                  <p className="text-trailguide-slate text-sm">
                    We understand your journey and mission before building any tools
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center">
                      <BarChart className="h-4 w-4 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral">Evidence-Based</h3>
                  </div>
                  <p className="text-trailguide-slate text-sm">
                    We research your existing content and audience patterns to inform strategy
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                      <Eye className="h-4 w-4 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral">Prototype-Driven</h3>
                  </div>
                  <p className="text-trailguide-slate text-sm">
                    We show you exactly what your platform will look like, not just tell you
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <Rocket className="h-4 w-4 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral">Launch-Ready</h3>
                  </div>
                  <p className="text-trailguide-slate text-sm">
                    Every platform launches with content and strategy, not empty templates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section id="process-overview" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">5-Phase Process Overview</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Each phase builds on the previous to create a comprehensive platform that serves your mission and grows your business.
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-trailguide-neutral">Phase 1: Discovery & Vision</h3>
                      <Badge variant="secondary">Week 1</Badge>
                    </div>
                    <p className="text-trailguide-slate mb-6">
                      Deep dive into your identity, audience, and existing assets. We answer the core questions 
                      that inform everything we build.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Core Identity Workshop</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Content Audit & Strategy</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Business Model Alignment</span>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <Link href="/intake/discovery">Start Discovery</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
                      <BarChart className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-trailguide-neutral">Phase 2: Digital Presence Research</h3>
                      <Badge variant="secondary">Week 1-2</Badge>
                    </div>
                    <p className="text-trailguide-slate mb-6">
                      Comprehensive analysis of your existing content, competitive landscape, and audience patterns 
                      to inform platform strategy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span>Automated Content Analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span>Competitive Intelligence</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span>Feature Recommendations</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/intake/research">View Research Phase</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
                      <Eye className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-trailguide-neutral">Phase 3: Design & User Experience</h3>
                      <Badge variant="secondary">Week 2</Badge>
                    </div>
                    <p className="text-trailguide-slate mb-6">
                      Visual identity development and site architecture planning based on your brand personality 
                      and user journey optimization.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span>Visual Identity Workshop</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span>Hero Section Strategy</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span>Site Architecture Planning</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/intake/design">View Design Phase</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <FileText className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-trailguide-neutral">Phase 4: Content Strategy & Launch Planning</h3>
                      <Badge variant="secondary">Week 3</Badge>
                    </div>
                    <p className="text-trailguide-slate mb-6">
                      Content creation, platform feature finalization, and comprehensive launch sequence 
                      planning for maximum impact.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                        <span>Launch Content Package</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                        <span>Platform Features Finalization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                        <span>Launch Sequence Planning</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/intake/content">View Content Phase</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 5 */}
            <Card className="border-2 border-trailguide-evergreen/30 hover:border-trailguide-evergreen transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                      <Rocket className="h-8 w-8 text-trailguide-evergreen" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-trailguide-neutral">Phase 5: Build & Launch Support</h3>
                      <Badge variant="secondary">Week 3-4</Badge>
                    </div>
                    <p className="text-trailguide-slate mb-6">
                      Platform development, content migration, and coordinated launch with ongoing support 
                      to ensure successful deployment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                        <span>Platform Development</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                        <span>Content Migration & Setup</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                        <span>Launch Day Strategy</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/intake/launch">View Launch Phase</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Intake Tools Preview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Interactive Tools & Resources</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              We&apos;ve created specialized tools to streamline the intake process and help you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Content Audit</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Comprehensive analysis of your existing content and performance
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/intake/tools/content-audit">Use Tool</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Design Preferences</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Visual survey to identify your design style and preferences
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/intake/tools/design-survey">Take Survey</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Revenue Calculator</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Project potential revenue based on your platform model
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/intake/tools/revenue-calculator">Calculate</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Feature Checklist</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Prioritized platform features based on your goals
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/intake/tools/feature-checklist">View Checklist</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Proven Success Outcomes</h2>
              <p className="text-gray-300 text-lg mb-12">
                Our comprehensive intake process leads to measurable results for thought leaders.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">3-4 Weeks</div>
                  <div className="text-gray-300 text-sm">From Inquiry to Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Average Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$50K+</div>
                  <div className="text-gray-300 text-sm">Average Monthly Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Start */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-trailguide-slate text-lg mb-8">
              Begin your journey from thought leader to platform owner. 
              Our intake process is designed to understand your unique vision and build accordingly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                <Link href="/intake/discovery">
                  Start Discovery Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
            <p className="text-sm text-trailguide-slate mt-4">
              💡 The discovery phase is complimentary and helps us both determine if we&apos;re the right fit
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
