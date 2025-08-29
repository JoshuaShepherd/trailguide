import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-trailguide-background to-white py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-trailguide-neutral mb-6 leading-tight">
            AI That Serves Humans.{' '}
            <span className="text-trailguide-evergreen">A Path You Can Trust.</span>
          </h1>

          {/* Subcopy */}
          <p className="text-lg md:text-xl text-trailguide-slate max-w-3xl mx-auto mb-12 leading-relaxed">
            TrailGuide equips nonprofits with the tools, training, and ethics to adopt AI wisely —
            starting with a simple assessment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild 
              size="lg"
              className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/trailmap" className="flex items-center">
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-4 text-lg"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          {/* Abstract TrailMap Visual */}
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex items-center space-x-8 overflow-x-auto pb-4">
                  {[
                    { stage: 'Awareness', active: true },
                    { stage: 'Experimentation', active: false },
                    { stage: 'Adoption', active: false },
                    { stage: 'Optimization', active: false },
                    { stage: 'Leadership', active: false },
                  ].map((item, index) => (
                    <div key={item.stage} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                            item.active
                              ? 'bg-trailguide-bronze border-trailguide-bronze text-white'
                              : 'border-trailguide-slate/30 text-trailguide-slate/50'
                          }`}
                        >
                          {item.active ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <span className="text-sm font-medium">{index + 1}</span>
                          )}
                        </div>
                        <span
                          className={`mt-2 text-sm font-medium ${
                            item.active ? 'text-trailguide-neutral' : 'text-trailguide-slate/70'
                          }`}
                        >
                          {item.stage}
                        </span>
                      </div>
                      {index < 4 && (
                        <div
                          className={`w-8 h-0.5 mx-4 ${
                            item.active ? 'bg-trailguide-bronze' : 'bg-trailguide-slate/20'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-trailguide-slate">
            <div className="flex items-center">
              <span className="font-medium">Trusted advisors:</span>
              <span className="ml-2">Alan Hirsch, Brad Brisco, KC Network</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-trailguide-slate/30"></div>
            <div>
              <span className="font-medium text-trailguide-evergreen">Featured Prototype:</span>
              <span className="ml-1">AlanHirsch.org</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
