import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CrossReference } from '@/components/cross-reference';
import Link from 'next/link';
import { 
  BookOpen, 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  Rocket, 
  Star,
  Crown,
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
  Search
} from 'lucide-react';

export default function ExpertPublisherGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Educational Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <BookOpen className="h-4 w-4" />
            <span>📚 COMPLETE GUIDE: Everything Thought Leaders Need to Build Authority & Revenue</span>
            <BookOpen className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/5 px-4 py-2 rounded-full mb-6">
            <Brain className="h-4 w-4" />
            <span>Expert Publisher Educational Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            The Complete <span className="text-trailguide-evergreen">Thought Leader</span> Platform Guide
          </h1>
          
          <p className="text-xl text-trailguide-slate leading-relaxed mb-8">
            Learn exactly what you need to build authority, grow your audience, and monetize your expertise. 
            This guide teaches through example—every strategy shown is implemented in our <Link href="/template" className="text-trailguide-evergreen hover:underline font-semibold">live demo template</Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
              <Link href="/template">
                View Live Demo Template
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#essential-elements">Learn What You Need</Link>
            </Button>
          </div>
        </div>

        {/* Why This Guide Matters */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Why Most Thought Leaders Fail Online</h2>
                <p className="text-trailguide-slate text-lg">
                  Having expertise isn&apos;t enough. You need the right platform, strategy, and systems to turn knowledge into authority and revenue.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-600 mb-4">❌ Common Mistakes</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-trailguide-slate">Scattered presence across multiple platforms without cohesive strategy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-trailguide-slate">No clear monetization path or revenue diversification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-trailguide-slate">Generic website that doesn&apos;t establish credibility or trust</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-trailguide-slate">Inconsistent content creation without systematic approach</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-trailguide-evergreen mb-4">✅ What Actually Works</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Centralized platform that owns your audience and content</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Multiple revenue streams working together systematically</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Authority-building design that showcases credibility markers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">AI-enhanced content workflows that scale your expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross Reference */}
        <CrossReference currentPage="guide" className="mb-20" />

        {/* Essential Elements */}
        <section id="essential-elements" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Essential Elements Every Thought Leader Needs</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              These aren&apos;t nice-to-haves—they&apos;re must-haves for building sustainable authority and revenue. 
              Each element is demonstrated in our <Link href="/template" className="text-trailguide-evergreen hover:underline font-semibold">live template</Link>.
            </p>
          </div>

          <div className="space-y-8">
            {/* Digital Foundation */}
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral">Digital Foundation</h3>
                  <p className="text-trailguide-slate">Your centralized hub that you own and control</p>
                </div>
                <Badge variant="secondary" className="ml-auto">Essential</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Eye className="h-5 w-5 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Authority Homepage</h4>
                    <p className="text-xs text-trailguide-slate">Hero section that establishes credibility instantly</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Heart className="h-5 w-5 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">About Page</h4>
                    <p className="text-xs text-trailguide-slate">Human story that builds trust and connection</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <MessageSquare className="h-5 w-5 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Contact Hub</h4>
                    <p className="text-xs text-trailguide-slate">Multiple ways to engage and work with you</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Shield className="h-5 w-5 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Trust Signals</h4>
                    <p className="text-xs text-trailguide-slate">Ethics, privacy, and human-first approach</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/template">View Foundation Demo</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/about">See About Page Example</Link>
                </Button>
              </div>
            </div>

            {/* Content Engine */}
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral">Content Engine</h3>
                  <p className="text-trailguide-slate">Systematic content creation and distribution</p>
                </div>
                <Badge variant="secondary" className="ml-auto">Core System</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <FileText className="h-5 w-5 text-emerald-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Blog System</h4>
                    <p className="text-xs text-trailguide-slate">SEO-optimized articles with paywall capabilities</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Mail className="h-5 w-5 text-emerald-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Newsletter</h4>
                    <p className="text-xs text-trailguide-slate">Email marketing with automation sequences</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Play className="h-5 w-5 text-emerald-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Media Hub</h4>
                    <p className="text-xs text-trailguide-slate">Podcast, video, and multimedia content</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Brain className="h-5 w-5 text-emerald-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">AI Assistance</h4>
                    <p className="text-xs text-trailguide-slate">Content creation and repurposing workflows</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">Explore Blog Demo</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/newsletter">Newsletter Example</Link>
                </Button>
              </div>
            </div>

            {/* Monetization Stack */}
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral">Monetization Stack</h3>
                  <p className="text-trailguide-slate">Multiple revenue streams working together</p>
                </div>
                <Badge variant="secondary" className="ml-auto">Revenue Critical</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Crown className="h-5 w-5 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Memberships</h4>
                    <p className="text-xs text-trailguide-slate">Tiered access with recurring revenue</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <BookOpen className="h-5 w-5 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Courses</h4>
                    <p className="text-xs text-trailguide-slate">Educational products and cohorts</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Calendar className="h-5 w-5 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Consulting</h4>
                    <p className="text-xs text-trailguide-slate">High-value 1:1 and group services</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Download className="h-5 w-5 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Digital Products</h4>
                    <p className="text-xs text-trailguide-slate">Templates, guides, and toolkits</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products">View Products Demo</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/case-studies">See Revenue Results</Link>
                </Button>
              </div>
            </div>

            {/* Analytics & Growth */}
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral">Analytics & Growth</h3>
                  <p className="text-trailguide-slate">Data-driven optimization and scaling</p>
                </div>
                <Badge variant="secondary" className="ml-auto">Growth Engine</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <TrendingUp className="h-5 w-5 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Performance Dashboard</h4>
                    <p className="text-xs text-trailguide-slate">Revenue, audience, and engagement metrics</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Search className="h-5 w-5 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">SEO Optimization</h4>
                    <p className="text-xs text-trailguide-slate">Content discovery and organic growth</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Users className="h-5 w-5 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Audience Insights</h4>
                    <p className="text-xs text-trailguide-slate">Behavior analysis and segmentation</p>
                  </CardContent>
                </Card>
                <Card className="border border-trailguide-slate/20">
                  <CardContent className="p-4">
                    <Zap className="h-5 w-5 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Conversion Optimization</h4>
                    <p className="text-xs text-trailguide-slate">A/B testing and funnel improvement</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/hub">View Dashboard Demo</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/analytics">Analytics Overview</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Complete System */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-trailguide-evergreen/5 to-blue-50 border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Why These Elements Work Together</h2>
                <p className="text-xl text-trailguide-slate">
                  It&apos;s not about having all the pieces—it&apos;s about having them work as an integrated system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-4">The Synergy Effect</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Content drives traffic to your owned platform</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Platform converts visitors into email subscribers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Email nurtures relationships and drives sales</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Revenue funds better content and growth</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-4">Compound Growth</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Each piece amplifies the others</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Data informs better content decisions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Authority increases all conversion rates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                      <span className="text-trailguide-slate">Success creates more opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                  <Link href="/template">
                    See The Complete System in Action
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">What Success Looks Like</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              These are the real metrics our template and platform help thought leaders achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">10K+</div>
              <div className="text-trailguide-slate">Average Email Subscribers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">$50K+</div>
              <div className="text-trailguide-slate">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">85%</div>
              <div className="text-trailguide-slate">Authority Recognition</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <div className="text-3xl font-bold text-trailguide-evergreen mb-2">300%</div>
              <div className="text-trailguide-slate">Growth Rate</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/case-studies">View Detailed Case Studies</Link>
            </Button>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                Ready to Build Your Complete Platform?
              </h2>
              <p className="text-xl text-trailguide-slate mb-8">
                You&apos;ve learned what you need. Now see exactly how it works in practice with our 
                fully functional demo, then get your personalized platform assessment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                  <Link href="/template">
                    Explore the Live Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/trailmap">Take Platform Assessment</Link>
                </Button>
              </div>

              <div className="text-sm text-trailguide-slate">
                <span>💡 Pro tip: Bookmark both pages to compare what you learn here with how it&apos;s implemented in the demo</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
