import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, Bookmark, Users, TrendingUp, Crown, Lightbulb, Target } from 'lucide-react';

export function DualPathSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Two Paths. One Mission.
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re a nonprofit maximizing impact or a thought leader building your platform, 
              TrailGuide meets you where you are and guides you where you&apos;re going.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Nonprofits Path */}
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-trailguide-evergreen/20 hover:border-trailguide-evergreen/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-trailguide-evergreen/5 to-transparent" />
              <CardHeader className="relative pb-6">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-trailguide-evergreen/20 transition-colors">
                  <Building className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-3xl font-bold text-trailguide-neutral mb-4">
                  For Nonprofits
                </CardTitle>
                <p className="text-trailguide-slate text-lg leading-relaxed">
                  Every wasted dollar is a life diminished. Our AI-powered TrailKits help you 
                  steward resources wisely while amplifying your mission impact.
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center mt-1">
                      <Target className="h-3 w-3 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-1">15 Specialized TrailKits</h4>
                      <p className="text-sm text-trailguide-slate">AI dashboards for fundraising, programs, operations, and more</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center mt-1">
                      <Users className="h-3 w-3 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-1">TrailHikes Training</h4>
                      <p className="text-sm text-trailguide-slate">Cohort-based workshops to implement AI responsibly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="h-3 w-3 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-1">TrailMap Assessment</h4>
                      <p className="text-sm text-trailguide-slate">5-stage maturity model for responsible AI adoption</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-trailguide-evergreen/10">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                      <Link href="/hub" className="flex items-center justify-center">
                        Explore TrailKits
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                      <Link href="/assessment" className="flex items-center justify-center">
                        Take Assessment
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thought Leaders Path */}
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-trailguide-bronze/20 hover:border-trailguide-bronze/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-trailguide-bronze/5 to-transparent" />
              <CardHeader className="relative pb-6">
                <div className="w-16 h-16 bg-trailguide-bronze/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-trailguide-bronze/20 transition-colors">
                  <Crown className="h-8 w-8 text-trailguide-bronze" />
                </div>
                <CardTitle className="text-3xl font-bold text-trailguide-neutral mb-4">
                  For Thought Leaders
                </CardTitle>
                <p className="text-trailguide-slate text-lg leading-relaxed">
                  The publishing industry is broken. Reclaim ownership of your ideas, 
                  your audience, and your revenue with AI-enhanced platforms you control.
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-trailguide-bronze/20 rounded-full flex items-center justify-center mt-1">
                      <Crown className="h-3 w-3 text-trailguide-bronze" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-1">Complete Ownership</h4>
                      <p className="text-sm text-trailguide-slate">Keep 90% of revenue and 100% of your audience relationship</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-trailguide-bronze/20 rounded-full flex items-center justify-center mt-1">
                      <Lightbulb className="h-3 w-3 text-trailguide-bronze" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-1">AI Writing Companion</h4>
                      <p className="text-sm text-trailguide-slate">Enhance your creativity with intelligent writing assistance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-trailguide-bronze/20 rounded-full flex items-center justify-center mt-1">
                      <Bookmark className="h-3 w-3 text-trailguide-bronze" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-trailguide-neutral mb-1">Full Publishing Platform</h4>
                      <p className="text-sm text-trailguide-slate">Content, courses, community, and commerce in one place</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-trailguide-bronze/10">
                  <div className="bg-trailguide-bronze/5 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-trailguide-bronze mb-1">$1,000 + 10%</div>
                      <div className="text-sm text-trailguide-slate">Revolutionary pricing vs. $50k+ agency costs</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 bg-trailguide-bronze hover:bg-trailguide-bronze/90 text-white">
                      <Link href="/expert-publisher" className="flex items-center justify-center">
                        See Platform Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-trailguide-bronze text-trailguide-bronze hover:bg-trailguide-bronze/5">
                      <Link href="/contact" className="flex items-center justify-center">
                        Start Building
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
