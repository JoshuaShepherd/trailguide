import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Compass, Users, Crown, CheckCircle, MessageSquare } from 'lucide-react';

export function StartJourneySection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-trailguide-evergreen/5 via-white to-trailguide-bronze/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Your Trail Starts Here
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you&apos;re a nonprofit leader or thought leader, the path to AI-enhanced 
              impact begins with understanding where you are and where you want to go.
            </p>
            <div className="inline-flex items-center px-6 py-3 text-sm font-medium border border-trailguide-evergreen/30 text-trailguide-evergreen rounded-full bg-white/60 backdrop-blur-sm">
              <Compass className="mr-2 h-4 w-4" />
              Choose your own adventure
            </div>
          </div>

          {/* Action Paths */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Assessment Path */}
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-trailguide-evergreen/20 hover:border-trailguide-evergreen overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-trailguide-evergreen/5 to-transparent" />
              <CardHeader className="relative text-center pb-4">
                <div className="w-20 h-20 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-trailguide-evergreen/20 transition-colors">
                  <Compass className="h-10 w-10 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-2xl font-bold text-trailguide-neutral mb-3">
                  Find Your Starting Point
                </CardTitle>
                <p className="text-trailguide-slate">
                  Take our AI readiness assessment to discover where you are on the TrailMap 
                  and get personalized recommendations.
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-evergreen flex-shrink-0" />
                    <span>15-minute interactive assessment</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-evergreen flex-shrink-0" />
                    <span>Personalized TrailKit recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-evergreen flex-shrink-0" />
                    <span>5-stage maturity roadmap</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                    <Link href="/assessment" className="flex items-center justify-center">
                      Start Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Explore Path */}
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-trailguide-bronze/20 hover:border-trailguide-bronze overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-trailguide-bronze/5 to-transparent" />
              <CardHeader className="relative text-center pb-4">
                <div className="w-20 h-20 bg-trailguide-bronze/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-trailguide-bronze/20 transition-colors">
                  <Users className="h-10 w-10 text-trailguide-bronze" />
                </div>
                <CardTitle className="text-2xl font-bold text-trailguide-neutral mb-3">
                  Explore the Platform
                </CardTitle>
                <p className="text-trailguide-slate">
                  See our tools in action. Every feature we offer is demonstrated 
                  live on this platform—no mockups or promises.
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-bronze flex-shrink-0" />
                    <span>Live TrailKit demos</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-bronze flex-shrink-0" />
                    <span>Complete AI curriculum</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-bronze flex-shrink-0" />
                    <span>Expert publisher showcase</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full border-trailguide-bronze text-trailguide-bronze hover:bg-trailguide-bronze/5 group-hover:bg-trailguide-bronze group-hover:text-white transition-all">
                    <Link href="/hub" className="flex items-center justify-center">
                      Explore Tools
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Connect Path */}
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-trailguide-evergreen/20 hover:border-trailguide-evergreen overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-trailguide-evergreen/5 to-transparent" />
              <CardHeader className="relative text-center pb-4">
                <div className="w-20 h-20 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-trailguide-evergreen/20 transition-colors">
                  <MessageSquare className="h-10 w-10 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-2xl font-bold text-trailguide-neutral mb-3">
                  Start the Conversation  
                </CardTitle>
                <p className="text-trailguide-slate">
                  Ready to build something meaningful? Let&apos;s discuss your specific 
                  needs and explore how TrailGuide can serve your mission.
                </p>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-evergreen flex-shrink-0" />
                    <span>Free consultation call</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-evergreen flex-shrink-0" />
                    <span>Custom solution planning</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-trailguide-slate">
                    <CheckCircle className="h-4 w-4 text-trailguide-evergreen flex-shrink-0" />
                    <span>Transparent pricing discussion</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 group-hover:bg-trailguide-evergreen group-hover:text-white transition-all">
                    <Link href="/contact" className="flex items-center justify-center">
                      Get In Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Trust Signal */}
          <div className="text-center">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-trailguide-evergreen/20 shadow-lg">
              <div className="flex items-center justify-center space-x-6 text-trailguide-neutral mb-4">
                <div className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-trailguide-bronze" />
                  <span className="font-medium">100% Ownership</span>
                </div>
                <div className="w-1 h-4 bg-trailguide-slate/30 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-trailguide-evergreen" />
                  <span className="font-medium">Ethics First</span>
                </div>
                <div className="w-1 h-4 bg-trailguide-slate/30 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-trailguide-evergreen" />
                  <span className="font-medium">Human Centered</span>
                </div>
              </div>
              <p className="text-trailguide-slate text-sm">
                Join the movement toward technology that serves mission, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
