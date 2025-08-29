import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Crown, Target, Users, TrendingUp, Award, CheckCircle, ArrowRight, Lightbulb, Rocket, Star } from 'lucide-react';

export default function ExpertPublisherAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Crown className="h-4 w-4" />
            <span>🎯 DEMO: Expert Publisher About Page Template - See How Thought Leaders Build Authority</span>
            <Crown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/5 px-4 py-2 rounded-full mb-6">
            <Lightbulb className="h-4 w-4" />
            <span>Expert Publisher Platform Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            About This <span className="text-trailguide-evergreen">Demo Template</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate leading-relaxed">
            This entire site demonstrates how our Expert Publisher platform works in practice. 
            Every page, feature, and workflow you see here is what thought leaders get when they launch with our platform.
          </p>
        </div>

        {/* Demo Purpose */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Purpose of This Demo</h2>
                <p className="text-trailguide-slate text-lg">
                  This isn&apos;t just a marketing site—it&apos;s an interactive showroom that demonstrates the complete Expert Publisher platform capabilities.
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
                  <Link href="/expert-publisher/products">Explore Products</Link>
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

        {/* Final CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Ready to See Your Platform in Action?
            </h2>
            <p className="text-trailguide-slate mb-8">
              This demo shows you exactly what you&apos;ll get with Expert Publisher. 
              Take the assessment to see your personalized platform recommendations.
            </p>
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
              <Link href="/trailmap">
                Take Platform Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
