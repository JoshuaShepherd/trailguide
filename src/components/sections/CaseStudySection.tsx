import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Quote, ExternalLink } from 'lucide-react';

export function CaseStudySection() {
  return (
    <section className="py-24 bg-trailguide-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral mb-6">
              See It in Action
            </h2>
            <p className="text-lg md:text-xl text-trailguide-slate max-w-2xl mx-auto">
              We helped a national thought leader reinvent engagement with a modern reading experience, 
              AI co-reader, and cohort learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Browser Mockup */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Browser Frame */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-trailguide-border">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-trailguide-border">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-white rounded px-3 py-1 text-sm text-trailguide-slate max-w-xs mx-auto">
                        alanhirsch.org
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Preview */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-trailguide-evergreen rounded-full"></div>
                      <div>
                        <div className="h-3 bg-trailguide-slate/20 rounded w-24 mb-1"></div>
                        <div className="h-2 bg-trailguide-slate/15 rounded w-16"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-4 bg-trailguide-slate/20 rounded"></div>
                      <div className="h-4 bg-trailguide-slate/15 rounded w-5/6"></div>
                      <div className="h-4 bg-trailguide-slate/10 rounded w-4/6"></div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Badge className="bg-trailguide-evergreen/10 text-trailguide-evergreen border-0">
                        AI Co-Reader
                      </Badge>
                      <Badge className="bg-trailguide-bronze/10 text-trailguide-bronze border-0">
                        Interactive
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Details */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <Badge 
                  className="bg-trailguide-bronze/10 text-trailguide-bronze border-trailguide-bronze/30 mb-4"
                >
                  Featured Prototype
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-trailguide-neutral mb-4">
                  AlanHirsch.org Transformation
                </h3>
                <p className="text-trailguide-slate leading-relaxed mb-6">
                  We transformed a traditional blog into an interactive reading experience with AI-powered 
                  discussion facilitation, personalized content recommendations, and cohort-based learning modules.
                </p>
              </div>

              {/* Key Results */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-trailguide-evergreen mb-1">300%</div>
                  <div className="text-sm text-trailguide-slate">Engagement Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trailguide-evergreen mb-1">15min</div>
                  <div className="text-sm text-trailguide-slate">Avg. Session Time</div>
                </div>
              </div>

              {/* Testimonial */}
              <Card className="border-trailguide-border bg-white">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-trailguide-bronze mb-4" />
                  <blockquote className="text-trailguide-slate italic mb-4">
                    &ldquo;TrailGuide didn&rsquo;t just build us a website—they created a learning ecosystem. 
                    The AI co-reader helps visitors engage deeper with complex ideas, and the cohort 
                    features have transformed how we build community.&rdquo;
                  </blockquote>
                  <cite className="text-sm font-medium text-trailguide-neutral">
                    — Alan Hirsch, Author & Organizational Strategist
                  </cite>
                </CardContent>
              </Card>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white"
                >
                  <Link href="/case-studies/alan-hirsch" className="flex items-center">
                    Explore the Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5"
                >
                  <Link href="https://alanhirsch.org" target="_blank" className="flex items-center">
                    Visit Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
