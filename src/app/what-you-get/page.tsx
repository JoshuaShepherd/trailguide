import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowRight, 
  Crown, 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  Lightbulb, 
  Rocket, 
  Star,
  Globe,
  DollarSign,
  BarChart,
  Shield,
  Zap,
  Eye,
  Heart,
  Brain,
  MessageSquare,
  Calendar,
  FileText,
  Play,
  Download,
  Mail,
  Search,
  BookOpen,
  Settings,
  PieChart
} from 'lucide-react';

export default function WhatYouGetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-trailguide-evergreen to-emerald-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Crown className="h-4 w-4" />
            <span>🎯 COMPLETE PLATFORM TOUR: Everything Thought Leaders Get With Expert Publisher</span>
            <Crown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/5 px-4 py-2 rounded-full mb-6">
            <Eye className="h-4 w-4" />
            <span>Complete Platform Overview</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Everything You Get With <span className="text-trailguide-evergreen">Expert Publisher</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate leading-relaxed mb-8">
            A complete thought leadership platform with everything you need to build authority, grow your audience, 
            and monetize your expertise. See both the strategy and the execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Learn the Strategy</h3>
                <p className="text-sm text-gray-600 mb-4">Understand what you need and why</p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/expert-publisher-guide">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-200 bg-emerald-50/50">
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">See It Working</h3>
                <p className="text-sm text-gray-600 mb-4">Explore the live, functional demo</p>
                <Button size="sm" asChild>
                  <Link href="/template">Try Demo</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Complete Platform Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Your Complete Digital Authority Platform</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Everything a thought leader needs to build, scale, and monetize their expertise in one integrated system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Foundation Stack */}
            <div className="lg:col-span-3">
              <Card className="border-2 border-trailguide-evergreen/20 bg-gradient-to-br from-trailguide-evergreen/5 to-emerald-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trailguide-neutral">Digital Foundation</h3>
                      <p className="text-trailguide-slate">Your centralized hub that you own and control</p>
                    </div>
                    <Badge className="ml-auto">Core System</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                        <Eye className="h-8 w-8 text-trailguide-evergreen" />
                      </div>
                      <h4 className="font-semibold text-sm text-trailguide-neutral mb-1">Authority Homepage</h4>
                      <p className="text-xs text-trailguide-slate">Instant credibility</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-8 w-8 text-trailguide-evergreen" />
                      </div>
                      <h4 className="font-semibold text-sm text-trailguide-neutral mb-1">Personal Story</h4>
                      <p className="text-xs text-trailguide-slate">Human connection</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="h-8 w-8 text-trailguide-evergreen" />
                      </div>
                      <h4 className="font-semibold text-sm text-trailguide-neutral mb-1">Contact Hub</h4>
                      <p className="text-xs text-trailguide-slate">Multiple touchpoints</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-8 w-8 text-trailguide-evergreen" />
                      </div>
                      <h4 className="font-semibold text-sm text-trailguide-neutral mb-1">Trust & Ethics</h4>
                      <p className="text-xs text-trailguide-slate">Transparency first</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/template">View Foundation</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/expert-publisher-guide#essential-elements">Learn Strategy</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Engine */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-trailguide-neutral">Content Engine</h3>
                    <Badge variant="secondary" className="text-xs">AI-Enhanced</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>SEO-optimized blog system</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Newsletter with automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Podcast & video hosting</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>AI content assistance</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-full" asChild>
                  <Link href="/blog">Explore Content Demo</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Monetization Stack */}
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-trailguide-neutral">Revenue Streams</h3>
                    <Badge variant="secondary" className="text-xs">Multi-Channel</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Membership tiers & paywalls</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Course & cohort sales</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Consulting booking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Digital product sales</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-full" variant="outline" asChild>
                  <Link href="/products">View Products Demo</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Analytics & Growth */}
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-trailguide-neutral">Growth Engine</h3>
                    <Badge variant="secondary" className="text-xs">Data-Driven</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Performance dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>SEO optimization tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Audience insights</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Conversion optimization</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-full" variant="outline" asChild>
                  <Link href="/hub">View Dashboard Demo</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Integration */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">AI That Enhances, Never Replaces</h2>
                <p className="text-gray-300 text-lg">
                  Our AI agents amplify your expertise without compromising your authentic voice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <Zap className="h-8 w-8 text-yellow-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Writing Agent</h3>
                  <p className="text-gray-300 text-sm">
                    Outline → draft → improve with your personal style presets. Never auto-publishes.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <Target className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">SEO Agent</h3>
                  <p className="text-gray-300 text-sm">
                    Keyword research, title suggestions, and internal linking recommendations.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <PieChart className="h-8 w-8 text-green-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Analytics Agent</h3>
                  <p className="text-gray-300 text-sm">
                    Weekly insights on growth, engagement, and content performance.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>
                  <Link href="/ai-workspace">Experience AI Tools</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Real Results from Real Thought Leaders</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              These metrics represent actual outcomes achieved by thought leaders using our complete platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">15K+</div>
              <div className="text-trailguide-slate text-sm">Average Email List</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">$75K+</div>
              <div className="text-trailguide-slate text-sm">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">92%</div>
              <div className="text-trailguide-slate text-sm">Authority Recognition</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">400%</div>
              <div className="text-trailguide-slate text-sm">Growth Rate</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/case-studies">View Detailed Success Stories</Link>
            </Button>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Three Ways to Get Started</h2>
                <p className="text-xl text-trailguide-slate">
                  Choose your path based on where you are in your thought leadership journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral mb-3">1. Learn First</h3>
                    <p className="text-trailguide-slate text-sm mb-4">
                      Start with our comprehensive guide to understand what you need and why.
                    </p>
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link href="/expert-publisher-guide">
                        Read Complete Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral mb-3">2. Explore Demo</h3>
                    <p className="text-trailguide-slate text-sm mb-4">
                      See everything working together in our fully functional template.
                    </p>
                    <Button size="sm" className="w-full" asChild>
                      <Link href="/template">
                        Try Live Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-trailguide-neutral mb-3">3. Get Assessment</h3>
                    <p className="text-trailguide-slate text-sm mb-4">
                      Take our AI-powered assessment for personalized platform recommendations.
                    </p>
                    <Button size="sm" className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                      <Link href="/trailmap">
                        Start Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-sm text-trailguide-slate">
                  💡 <strong>Pro tip:</strong> Most successful thought leaders start with the guide, 
                  then explore the demo to see concepts in action, and finally take the assessment for their custom plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Ready to Build Your Authority Platform?
            </h2>
            <p className="text-trailguide-slate text-lg mb-8">
              You&apos;ve seen what&apos;s possible. Now let&apos;s build your personalized platform 
              that establishes authority, grows your audience, and monetizes your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                <Link href="/trailmap">
                  Start Your Platform Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
