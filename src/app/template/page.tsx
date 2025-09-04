import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CrossReference } from '@/components/cross-reference';
import { TemplateSiteMapSection } from '@/components/sections/TemplateSiteMapSection';
import Link from 'next/link';
import { Crown, Target, Users, TrendingUp, Award, CheckCircle, ArrowRight, Lightbulb, Rocket, Star, Eye, Code } from 'lucide-react';

export default function ExpertPublisherAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Template Notice */}
      <div className="bg-gradient-to-r from-trailguide-evergreen to-trailguide-sage px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Eye className="h-4 w-4" />
            <span>🎯 LIVE TEMPLATE: Complete Expert Publisher Platform - This Is What You Get</span>
            <Eye className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Template Showcase Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/10 px-6 py-3 rounded-full mb-6 border border-trailguide-evergreen/20">
            <Code className="h-4 w-4" />
            <span>Expert Publisher Platform Template</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Your Complete <span className="text-trailguide-evergreen">Digital Platform</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate leading-relaxed mb-8">
            This entire website is a working example of the Expert Publisher platform. Every feature, design choice, 
            and user experience demonstrates exactly what your thought leadership platform will deliver.
          </p>

          <div className="bg-gradient-to-r from-trailguide-evergreen/10 to-trailguide-sage/10 border border-trailguide-evergreen/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-trailguide-neutral mb-4">What You're Experiencing</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-trailguide-neutral">Live Content Engine</p>
                  <p className="text-sm text-trailguide-slate">Articles, media, and resources exactly as your audience will see them</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-trailguide-neutral">Working Lead Generation</p>
                  <p className="text-sm text-trailguide-slate">Forms, assessments, and capture tools functioning in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-trailguide-neutral">Complete User Journey</p>
                  <p className="text-sm text-trailguide-slate">From first visit to engagement to conversion pathways</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-trailguide-neutral">Best Practice Design</p>
                  <p className="text-sm text-trailguide-slate">Every element optimized for thought leader success</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Purpose */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Template Demonstration</h2>
                <p className="text-trailguide-slate text-lg">
                  This isn&apos;t just a marketing site—it&apos;s your actual platform template showing complete capabilities in action.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Demonstrates Capabilities</h3>
                  <p className="text-trailguide-slate text-sm">Shows the end-to-end capabilities of our platform in a real, working environment</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Proves Business Value</h3>
                  <p className="text-trailguide-slate text-sm">Shows how each feature benefits your goals of building audience, authority, and revenue</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Teaches Best Practices</h3>
                  <p className="text-trailguide-slate text-sm">The site itself is a model of thought leadership best practices and proven strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross Reference */}
        <CrossReference currentPage="template" className="mb-20" />

        {/* Template Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                  A Template That <span className="text-trailguide-evergreen">Teaches Through Example</span>
                </h2>
                <div className="space-y-6 text-trailguide-slate">
                  <p>
                    Instead of just telling you what our Expert Publisher platform can do, we&apos;ve built this complete, 
                    functional demonstration that shows you exactly what your digital presence will look like.
                  </p>
                  <p>
                    Every page you visit, every feature you interact with, and every workflow you experience 
                    is included in your Expert Publisher setup. This isn&apos;t a mockup—it&apos;s your blueprint.
                  </p>
                  <p>
                    From the content management system to the membership tiers, from the course catalog to the 
                    consulting booking system, everything you see here demonstrates proven strategies that work.
                  </p>
                </div>
              </div>
              <div className="bg-trailguide-evergreen/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-trailguide-neutral mb-6">What Makes This Demo Special</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate"><strong>Real Content:</strong> Seeded with authentic examples that demonstrate best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate"><strong>Working Features:</strong> Every button, form, and workflow actually functions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate"><strong>AI Integration:</strong> Shows how AI enhances rather than replaces human expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate"><strong>Complete Stack:</strong> Demonstrates all revenue streams and audience building tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Demo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Featured Platform Capabilities</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Explore the complete Expert Publisher platform through this interactive demo environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Content Engine</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Complete blog system, newsletter management, and AI-powered content workflows
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">View Blog Demo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Monetization Stack</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Membership tiers, course sales, consulting booking, and multiple revenue streams
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products">Explore Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Platform Assessment</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Interactive assessment tool that demonstrates AI-powered personalization
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/trailmap">Take Assessment</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Authority Dashboard</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Complete dashboard system with analytics, workflows, and AI integration
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/hub">View Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Case Studies</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Social proof and success story templates that build credibility and trust
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/case-studies">View Results</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Ethics Framework</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Transparent AI usage, privacy protection, and human-first approach
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/ethics">Read Ethics</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Template Credibility */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                Built for Thought Leaders, By Thought Leaders
              </h2>
              <p className="text-xl text-trailguide-slate mb-8">
                This template represents years of working with industry experts, analyzing what works, 
                and distilling the most effective strategies into a proven platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-2xl font-bold text-trailguide-evergreen">500+</div>
                  <div className="text-trailguide-slate">Thought Leaders Studied</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trailguide-evergreen">$50M+</div>
                  <div className="text-trailguide-slate">In Client Revenue Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trailguide-evergreen">95%</div>
                  <div className="text-trailguide-slate">Success Rate With Our System</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                  <Link href="/trailmap">
                    Start Your Platform Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Try These Live Demo Features</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Don&apos;t just look—interact! These features are fully functional in this demo environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trailguide-neutral">Interactive Assessment</h3>
                  <p className="text-trailguide-slate text-sm">AI-powered personalization in action</p>
                </div>
              </div>
              <p className="text-trailguide-slate mb-4">
                Experience our intelligent assessment system that creates personalized recommendations based on your expertise and goals.
              </p>
              <Button className="w-full mb-3" asChild>
                <Link href="/trailmap">Take Live Assessment</Link>
              </Button>
              <p className="text-xs text-trailguide-slate text-center">
                ✨ Fully functional AI analysis
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trailguide-neutral">Authority Dashboard</h3>
                  <p className="text-trailguide-slate text-sm">Complete content & business hub</p>
                </div>
              </div>
              <p className="text-trailguide-slate mb-4">
                See the unified dashboard that thought leaders use to manage content, track analytics, and grow their business.
              </p>
              <Button variant="outline" className="w-full mb-3" asChild>
                <Link href="/hub">Explore Dashboard</Link>
              </Button>
              <p className="text-xs text-trailguide-slate text-center">
                📊 Real analytics and workflows
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trailguide-neutral">Content Showcase</h3>
                  <p className="text-trailguide-slate text-sm">Real articles with paywall demo</p>
                </div>
              </div>
              <p className="text-trailguide-slate mb-4">
                Browse actual thought leadership content with functioning membership gates and premium features.
              </p>
              <Button variant="outline" className="w-full mb-3" asChild>
                <Link href="/blog">Browse Articles</Link>
              </Button>
              <p className="text-xs text-trailguide-slate text-center">
                📝 Live content management system
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-trailguide-neutral">Revenue Models</h3>
                  <p className="text-trailguide-slate text-sm">Products, courses & consulting</p>
                </div>
              </div>
              <p className="text-trailguide-slate mb-4">
                See how multiple revenue streams integrate seamlessly within a single platform ecosystem.
              </p>
              <Button variant="outline" className="w-full mb-3" asChild>
                <Link href="/products">View Monetization</Link>
              </Button>
              <p className="text-xs text-trailguide-slate text-center">
                💰 Complete commerce integration
              </p>
            </div>
          </div>
        </section>

        {/* Educational Connection */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-trailguide-evergreen/10 to-blue-50 border border-trailguide-evergreen/20 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                Want to Learn the Strategy Behind This Demo?
              </h2>
              <p className="text-xl text-trailguide-slate mb-8">
                This template demonstrates proven strategies, but understanding <em>why</em> these elements work 
                together will help you maximize your own platform&apos;s potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/expert-publisher-guide">
                    📚 Read the Complete Guide
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                  <Link href="/trailmap">Get Your Custom Platform</Link>
                </Button>
              </div>

              <p className="text-sm text-trailguide-slate">
                💡 The guide explains what you need, this demo shows how it works in practice
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Ready to Build Your Own Platform?
            </h2>
            <p className="text-trailguide-slate mb-8">
              You&apos;ve seen how it works. Now get your personalized platform assessment 
              and start building your complete thought leadership presence.
            </p>
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
              <Link href="/trailmap">
                Take Platform Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Complete Site Map Showcase */}
        <TemplateSiteMapSection />

        {/* Final CTA */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-trailguide-evergreen/5 to-trailguide-sage/5 rounded-3xl p-12 border border-trailguide-evergreen/10">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">Ready to Build Yours?</h2>
            <p className="text-trailguide-slate mb-8 leading-relaxed">
              You've explored the template. Now discover your specific needs, goals, and opportunities 
              and start building your complete thought leadership presence.
            </p>
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
              <Link href="/intake">
                Start Your Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
