import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Calendar, Mic, Video, Award, Crown, Star, TrendingUp, Target, Zap } from 'lucide-react';

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Crown className="h-4 w-4" />
            <span>🎯 DEMO: Complete Monetization Stack - All Revenue Streams in One Platform</span>
            <Crown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/5 px-4 py-2 rounded-full mb-6">
            <Target className="h-4 w-4" />
            <span>Expert Publisher Platform Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Complete <span className="text-trailguide-evergreen">Monetization Stack</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
            See how thought leaders create multiple revenue streams through our integrated platform. 
            Every feature you see here is included in your Expert Publisher setup.
          </p>
        </div>

        {/* Membership Tiers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Membership Community</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Build recurring revenue with tiered memberships that provide ongoing value to your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative border-2 border-trailguide-slate/20">
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-2xl">Community</CardTitle>
                <CardDescription className="text-trailguide-slate">For engaged followers</CardDescription>
                <div className="text-3xl font-bold text-trailguide-neutral mt-4">
                  $29<span className="text-lg font-normal text-trailguide-slate">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Weekly exclusive content
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Community discussion access
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Monthly Q&A sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Resource library access
                  </li>
                </ul>
                <Button className="w-full mt-6">Join Community</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-trailguide-evergreen shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-trailguide-evergreen text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-2xl">Inner Circle</CardTitle>
                <CardDescription className="text-trailguide-slate">For serious practitioners</CardDescription>
                <div className="text-3xl font-bold text-trailguide-neutral mt-4">
                  $97<span className="text-lg font-normal text-trailguide-slate">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Everything in Community
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Weekly group coaching calls
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Premium course library
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Direct access to expert
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Implementation templates
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                  Join Inner Circle
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-trailguide-slate/20">
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle className="text-2xl">Mastermind</CardTitle>
                <CardDescription className="text-trailguide-slate">For transformation leaders</CardDescription>
                <div className="text-3xl font-bold text-trailguide-neutral mt-4">
                  $297<span className="text-lg font-normal text-trailguide-slate">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Everything in Inner Circle
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Monthly 1:1 strategy sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Exclusive mastermind events
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Business growth blueprints
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-trailguide-evergreen" />
                    Personal brand audit
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Join Mastermind</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Courses & Programs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Signature Courses</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Transform your expertise into scalable educational products that generate recurring revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <span className="text-2xl font-bold text-trailguide-neutral">$497</span>
                </div>
                <CardTitle className="text-xl">Authority Blueprint</CardTitle>
                <CardDescription>Master the fundamentals of thought leadership and content strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-trailguide-slate mb-6">
                  <li>• 8 comprehensive modules</li>
                  <li>• 40+ video lessons</li>
                  <li>• Implementation worksheets</li>
                  <li>• Private community access</li>
                  <li>• Lifetime updates</li>
                </ul>
                <Button className="w-full">Enroll Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20 hover:border-trailguide-evergreen/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <span className="text-2xl font-bold text-trailguide-neutral">$997</span>
                </div>
                <CardTitle className="text-xl">Revenue Accelerator</CardTitle>
                <CardDescription>Build and scale multiple income streams from your expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-trailguide-slate mb-6">
                  <li>• 12 advanced modules</li>
                  <li>• Live group coaching calls</li>
                  <li>• Revenue tracking tools</li>
                  <li>• Sales funnel templates</li>
                  <li>• 6 months of support</li>
                </ul>
                <Button className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Events & Workshops */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Live Events & Workshops</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              High-value, interactive experiences that command premium pricing and build deeper connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-trailguide-slate/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Quarterly Intensive</CardTitle>
                    <CardDescription>3-day virtual transformation workshop</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-trailguide-slate">Next Event:</span>
                    <span className="font-semibold text-trailguide-neutral">March 15-17, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trailguide-slate">Investment:</span>
                    <span className="text-2xl font-bold text-trailguide-evergreen">$1,997</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trailguide-slate">Spots Remaining:</span>
                    <span className="font-semibold text-trailguide-neutral">12 / 50</span>
                  </div>
                  <Button className="w-full mt-6">Reserve Your Spot</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-slate/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Mastermind Retreat</CardTitle>
                    <CardDescription>Exclusive in-person experience</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-trailguide-slate">Next Retreat:</span>
                    <span className="font-semibold text-trailguide-neutral">June 20-23, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trailguide-slate">Investment:</span>
                    <span className="text-2xl font-bold text-trailguide-evergreen">$4,997</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trailguide-slate">Limited to:</span>
                    <span className="font-semibold text-trailguide-neutral">20 Leaders</span>
                  </div>
                  <Button className="w-full mt-6 bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Speaking & Consulting */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Speaking & Consulting</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Leverage your expertise for high-value speaking engagements and strategic consulting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-trailguide-slate/20">
              <CardHeader>
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle>Keynote Speaking</CardTitle>
                <CardDescription>Transform audiences with powerful presentations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-trailguide-evergreen mb-4">$15K - $50K</div>
                <ul className="text-sm text-trailguide-slate space-y-2 mb-6">
                  <li>• Custom presentation development</li>
                  <li>• Interactive audience engagement</li>
                  <li>• Follow-up resources provided</li>
                  <li>• Video recording rights included</li>
                </ul>
                <Button variant="outline" className="w-full">Book Speaking</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-trailguide-slate/20">
              <CardHeader>
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle>Workshop Facilitation</CardTitle>
                <CardDescription>Interactive learning experiences for teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-trailguide-evergreen mb-4">$25K - $75K</div>
                <ul className="text-sm text-trailguide-slate space-y-2 mb-6">
                  <li>• Half-day to multi-day options</li>
                  <li>• Customized content development</li>
                  <li>• Participant workbooks included</li>
                  <li>• 90-day implementation support</li>
                </ul>
                <Button variant="outline" className="w-full">Book Workshop</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-trailguide-slate/20">
              <CardHeader>
                <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <CardTitle>Strategic Consulting</CardTitle>
                <CardDescription>Ongoing partnership for transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-trailguide-evergreen mb-4">Custom Pricing</div>
                <ul className="text-sm text-trailguide-slate space-y-2 mb-6">
                  <li>• Quarterly strategic planning</li>
                  <li>• Monthly advisory sessions</li>
                  <li>• Team coaching and development</li>
                  <li>• Results tracking and optimization</li>
                </ul>
                <Button className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                  Discuss Partnership
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="bg-trailguide-evergreen/5 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
            This Complete Stack Is Included In Your Expert Publisher Platform
          </h2>
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto mb-8">
            Every feature you see demonstrated here comes ready-to-launch with your Expert Publisher setup. 
            No additional development or integration required.
          </p>
          <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
            <Link href="/trailmap" className="flex items-center">
              See Your Platform Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
