import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Lightbulb, Rocket, Target, TrendingUp, Users, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-trailguide-background to-white">
      {/* Demo Template Notice Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Crown className="h-4 w-4" />
            <span>🎯 LIVE DEMO: Expert Publisher Platform Template - See How Thought Leaders Build Authority & Revenue</span>
            <Crown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Platform Badge */}
            <div className="mb-8 inline-flex items-center px-4 py-2 text-sm font-medium border border-trailguide-evergreen text-trailguide-evergreen rounded-full bg-trailguide-evergreen/5">
              <Lightbulb className="mr-2 h-4 w-4" />
              Expert Publisher Platform Demo
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-trailguide-neutral mb-6 leading-tight">
              Build Your Thought Leadership{' '}
              <span className="text-trailguide-evergreen">Empire</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-trailguide-slate max-w-4xl mx-auto mb-12 leading-relaxed">
              This <strong>live interactive template</strong> demonstrates our complete Expert Publisher platform. 
              See exactly how you&apos;ll build authority, grow your audience, and create multiple revenue streams 
              through content, courses, coaching, and community.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <span className="text-sm font-medium text-trailguide-neutral">Authority Building</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <span className="text-sm font-medium text-trailguide-neutral">Audience Growth</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <span className="text-sm font-medium text-trailguide-neutral">Revenue Streams</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <span className="text-sm font-medium text-trailguide-neutral">AI Automation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                asChild 
                size="lg"
                className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-4 text-lg"
              >
                <Link href="/trailmap" className="flex items-center">
                  See Platform Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-4 text-lg"
              >
                <Link href="/hub">Explore All Features</Link>
              </Button>
            </div>

            {/* Demo Status Indicator */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-sm text-trailguide-slate bg-trailguide-evergreen/5 px-4 py-2 rounded-full">
                <Rocket className="h-4 w-4 text-trailguide-evergreen" />
                <span><strong>Live Demo:</strong> Interactive Features • Real Content • Working Workflows</span>
              </div>
            </div>

            {/* Template Showcase Preview */}
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">What You&apos;ll Experience in This Demo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Complete Content Engine</h3>
                  <p className="text-trailguide-slate text-sm">Blog system, newsletters, resources, and AI-powered content workflows</p>
                </div>
                <div>
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Monetization Stack</h3>
                  <p className="text-trailguide-slate text-sm">Memberships, courses, consulting, events, and multiple revenue streams</p>
                </div>
                <div>
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Authority Platform</h3>
                  <p className="text-trailguide-slate text-sm">Speaking, case studies, testimonials, and thought leadership showcase</p>
                </div>
              </div>
            </div>

            {/* Client Success Indicators */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-trailguide-slate">
              <div className="flex items-center">
                <span className="font-medium">Template Showcases:</span>
                <span className="ml-2">Content Strategy • Revenue Models • AI Integration</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-trailguide-slate/30"></div>
              <div>
                <span className="font-medium text-trailguide-evergreen">Demo Status:</span>
                <span className="ml-1">Fully Functional & Interactive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
