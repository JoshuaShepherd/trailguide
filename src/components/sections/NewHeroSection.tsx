import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Compass, Users, Lightbulb } from 'lucide-react';

export function NewHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-trailguide-background via-white to-trailguide-evergreen/5 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(58,90,64,0.1),transparent)]" />
      
      <div className="relative py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Mission Badge */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 text-sm font-medium border border-trailguide-evergreen text-trailguide-evergreen rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                <Heart className="mr-2 h-4 w-4" />
                Human flourishing through technology that serves people, not systems
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Messaging */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-trailguide-neutral mb-8 leading-[1.1]">
                  AI that amplifies{' '}
                  <span className="text-trailguide-evergreen block">your mission</span>
                </h1>

                <p className="text-xl text-trailguide-slate mb-10 leading-relaxed max-w-xl">
                  TrailGuide creates AI-powered tools and platforms that help nonprofits maximize impact 
                  and thought leaders own their voice. Technology should expand human agency, not extract it.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                    <Link href="/assessment" className="flex items-center">
                      Start Your Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-3">
                    <Link href="/case-studies" className="flex items-center">
                      See Success Stories
                      <Compass className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Social Proof */}
              <div className="space-y-8">
                
                {/* Key Stats */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-trailguide-evergreen/10 shadow-lg">
                  <h3 className="text-2xl font-bold text-trailguide-neutral mb-6 text-center">Proven Impact</h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-trailguide-evergreen mb-2">15</div>
                      <div className="text-sm text-trailguide-slate">Specialized TrailKits</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-trailguide-evergreen mb-2">90%</div>
                      <div className="text-sm text-trailguide-slate">Author Revenue Retention</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-trailguide-evergreen mb-2">$1K</div>
                      <div className="text-sm text-trailguide-slate">Platform Starting Price</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-trailguide-evergreen mb-2">100%</div>
                      <div className="text-sm text-trailguide-slate">Ownership Retained</div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="text-center space-y-4">
                  <p className="text-sm text-trailguide-slate font-medium">Trusted by leaders like:</p>
                  <div className="flex justify-center items-center space-x-6 text-trailguide-neutral">
                    <div className="font-semibold">Alan Hirsch</div>
                    <div className="w-1 h-1 bg-trailguide-slate rounded-full"></div>
                    <div className="font-semibold">Brad Brisco</div>
                    <div className="w-1 h-1 bg-trailguide-slate rounded-full"></div>
                    <div className="font-semibold">Tim Catchim</div>
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
