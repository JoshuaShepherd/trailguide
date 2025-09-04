import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, ArrowRight, CheckCircle, Users, Zap, Target } from 'lucide-react';

export function ProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-trailguide-background to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Don&apos;t Just Take Our Word For It
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
              We don&apos;t speak abstractly about what AI can do. We show it in concrete, 
              working examples that you can touch, test, and learn from.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Live TrailKit Demo */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-trailguide-evergreen/20">
              <CardHeader>
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-xl text-trailguide-neutral">Live TrailKit Demos</CardTitle>
                <p className="text-trailguide-slate">
                  Experience fully functional AI dashboards for nonprofit operations. 
                  Click, explore, and see your future workflow.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                  <Link href="/hub" className="flex items-center justify-center">
                    Explore TrailKits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Expert Publisher Platform */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-trailguide-bronze/20">
              <CardHeader>
                <div className="w-12 h-12 bg-trailguide-bronze/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-trailguide-bronze" />
                </div>
                <CardTitle className="text-xl text-trailguide-neutral">Expert Publisher Demo</CardTitle>
                <p className="text-trailguide-slate">
                  This entire website IS the demo. See exactly how your thought leadership 
                  platform will look, feel, and function.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-trailguide-bronze text-trailguide-bronze hover:bg-trailguide-bronze/5">
                  <Link href="/expert-publisher" className="flex items-center justify-center">
                    See Platform Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Client Success */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-trailguide-evergreen/20">
              <CardHeader>
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-xl text-trailguide-neutral">Client Case Studies</CardTitle>
                <p className="text-trailguide-slate">
                  Real results from real leaders. See how Alan Hirsch, Brad Brisco, 
                  and others are transforming their reach and impact.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                  <Link href="/case-studies" className="flex items-center justify-center">
                    Read Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Working Examples Gallery */}
          <div className="bg-white rounded-2xl border border-trailguide-evergreen/10 p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-trailguide-neutral mb-4">
                Working Examples You Can Test Right Now
              </h3>
              <p className="text-trailguide-slate">
                Every feature we offer is demonstrated live on this platform. No mockups, no promises—real functionality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">AI Assessment Tool</h4>
                <p className="text-sm text-trailguide-slate">Interactive questionnaire with personalized recommendations</p>
                <Button asChild variant="link" className="text-trailguide-evergreen p-0 h-auto mt-2">
                  <Link href="/agent-assessment" className="text-sm">
                    Try It <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">AI Curriculum</h4>
                <p className="text-sm text-trailguide-slate">Complete prompt engineering course with progress tracking</p>
                <Button asChild variant="link" className="text-trailguide-evergreen p-0 h-auto mt-2">
                  <Link href="/tim-catchim" className="text-sm">
                    Explore <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Content Management</h4>
                <p className="text-sm text-trailguide-slate">Blog system with dynamic content, tags, and search</p>
                <Button asChild variant="link" className="text-trailguide-evergreen p-0 h-auto mt-2">
                  <Link href="/blog" className="text-sm">
                    Browse <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Interactive TrailMap</h4>
                <p className="text-sm text-trailguide-slate">5-stage maturity assessment with personalized guidance</p>
                <Button asChild variant="link" className="text-trailguide-evergreen p-0 h-auto mt-2">
                  <Link href="/trailmap" className="text-sm">
                    Navigate <ExternalLink className="ml-1 h-3 w-3" />
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
