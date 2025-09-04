import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, BookOpen, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

export function TemplateHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-trailguide-background via-white to-trailguide-evergreen/5 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(58,90,64,0.1),transparent)]" />
      
      <div className="relative py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Template Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 text-sm font-medium border-2 border-trailguide-evergreen text-trailguide-evergreen rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                <Eye className="mr-2 h-4 w-4" />
                Live Template Demo - Complete Expert Publisher Platform
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Template Messaging */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-trailguide-neutral mb-8 leading-[1.1]">
                  Your complete{' '}
                  <span className="text-trailguide-evergreen block">thought leadership</span>
                  <span className="block">platform template</span>
                </h1>

                <p className="text-xl text-trailguide-slate mb-8 leading-relaxed max-w-xl">
                  This live demo shows exactly what your full digital presence will look like. 
                  Every page, feature, and flow demonstrates proven thought leadership best practices 
                  in action—from content strategy to monetization.
                </p>

                <div className="bg-white/60 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-lg p-6 mb-10">
                  <p className="text-trailguide-evergreen font-semibold mb-4 flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Template Learning Approach:
                  </p>
                  <div className="space-y-2 text-sm text-trailguide-slate">
                    <p className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-trailguide-evergreen rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Every section teaches by example—showing you what works
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-trailguide-evergreen rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Real content demonstrates thought leadership best practices
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-trailguide-evergreen rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Working features show your audience's complete experience
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                    <Link href="/expert-publisher-guide" className="flex items-center">
                      Explore Full Template
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-3">
                    <Link href="/blog" className="flex items-center">
                      See Content Examples
                      <BookOpen className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Platform Features Visual */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Foundation Card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-trailguide-sage/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Foundation</h3>
                    <p className="text-sm text-trailguide-slate">Brand identity, messaging, and strategic positioning</p>
                  </div>

                  {/* Content Engine Card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-trailguide-sage/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Content Engine</h3>
                    <p className="text-sm text-trailguide-slate">Blog, podcast, newsletter, and media library</p>
                  </div>

                  {/* Audience Building Card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-trailguide-sage/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Audience Building</h3>
                    <p className="text-sm text-trailguide-slate">Lead magnets, email capture, and community tools</p>
                  </div>

                  {/* Monetization Card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-trailguide-sage/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Monetization</h3>
                    <p className="text-sm text-trailguide-slate">Courses, memberships, consulting, and products</p>
                  </div>

                </div>

                {/* Template Callout */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-4 py-2 text-xs font-medium border border-trailguide-evergreen/30 text-trailguide-evergreen rounded-full bg-trailguide-sage/10">
                    <Lightbulb className="mr-1 h-3 w-3" />
                    Every element demonstrates best practices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
