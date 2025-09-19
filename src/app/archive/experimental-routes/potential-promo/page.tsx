import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  DollarSign, TrendingUp, Users, Clock, AlertTriangle, 
  CheckCircle, ArrowRight, Target, Zap, Award, Eye, 
  Lightbulb, Rocket, Star, Globe, Building
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why $1,000 for a $75,000 Platform | TrailGuide Pricing',
  description: 'Transparent pricing strategy: How AI agents enable enterprise-level thought leadership platforms at breakthrough pricing—for now.',
}

export default function PotentialPromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <AlertTriangle className="h-4 w-4" />
            <span>🎯 PRICING TRANSPARENCY: Why $1,000 now becomes $10,000 later</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-orange-600 bg-orange-100 px-6 py-3 rounded-full mb-6 border border-orange-200">
            <DollarSign className="h-4 w-4" />
            <span>Pricing Strategy Explained</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Why I'm charging <span className="text-orange-600">$1,000</span><br />
            for a <span className="text-trailguide-evergreen">$75,000 platform</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate leading-relaxed mb-8">
            Let me be completely transparent about pricing, timing, and why this opportunity 
            won't last. This isn't a sales pitch—it's an explanation.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-orange-700 mb-3">The Simple Truth</h3>
            <p className="text-trailguide-slate">
              I'm using AI agents to build enterprise-level thought leadership platforms at breakthrough speed. 
              This is slightly ahead of its time, which means the price will eventually go down—but not this far down.
            </p>
          </div>
        </div>

        {/* The Math Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-trailguide-neutral mb-6">What Agencies Actually Charge</h2>
              <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
                Let's talk real numbers for what you're actually getting here.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Agency Pricing */}
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">Agency Reality</h3>
                  <div className="text-4xl font-bold text-red-600 mb-4">$75,000 - $150,000</div>
                  <ul className="text-sm text-red-700 space-y-2 text-left">
                    <li>• 6-12 month timeline</li>
                    <li>• Basic WordPress + plugins</li>
                    <li>• Limited customization</li>
                    <li>• Ongoing monthly fees</li>
                    <li>• No strategic support</li>
                    <li>• Generic templates</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Current Pricing */}
              <Card className="border-trailguide-evergreen bg-trailguide-sage/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-bold">
                  LIMITED TIME
                </div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-trailguide-evergreen" />
                  </div>
                  <h3 className="text-2xl font-bold text-trailguide-evergreen mb-4">AI-Powered Reality</h3>
                  <div className="text-4xl font-bold text-trailguide-evergreen mb-4">$1,000</div>
                  <ul className="text-sm text-trailguide-slate space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                      2-3 week delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                      Custom Next.js platform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                      Complete customization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                      No monthly platform fees
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                      Strategic discovery included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-trailguide-evergreen" />
                      Built for your specific needs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Future Pricing */}
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-4">Coming Soon</h3>
                  <div className="text-4xl font-bold text-slate-600 mb-4">$10,000+</div>
                  <ul className="text-sm text-slate-600 space-y-2 text-left">
                    <li>• Same platform capabilities</li>
                    <li>• Market-rate pricing</li>
                    <li>• Higher demand</li>
                    <li>• Proven track record</li>
                    <li>• Established network</li>
                    <li>• Standard industry rates</li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Why This Audience Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">The Real Reason for $1,000</h2>
                <p className="text-trailguide-slate text-lg">
                  Here's the honest truth about pricing strategy and my audience.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-trailguide-sage/5 rounded-xl p-6 border border-trailguide-sage/20">
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Thought Leaders Don't Pay $75K</h3>
                  <p className="text-trailguide-slate leading-relaxed">
                    The bigger reason for this pricing isn't just AI efficiency—it's audience reality. 
                    My audience of movement-building thought leaders, nonprofit leaders, and social entrepreneurs 
                    would never pay $75,000 for a digital publishing platform, no matter how valuable.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">Pricing Them In, Aggressively</h3>
                  <p className="text-trailguide-slate leading-relaxed mb-4">
                    So I'm using this newfound AI-powered capacity to price them in, aggressively. 
                    This is intentional market positioning for people who create massive social value 
                    but operate on nonprofit or movement budgets.
                  </p>
                  <p className="text-trailguide-slate leading-relaxed">
                    After 100 users join our network, the price doubles to $2,000. 
                    At 500 users: $5,000. At 1,000 users: $10,000.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Creating Urgency for Good Reason</h3>
                  <p className="text-trailguide-slate leading-relaxed">
                    I'm doing this to compel urgency for those who recognize this is a genuine opportunity 
                    and need to read more closely about what we're actually talking about here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Actually Is */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-trailguide-neutral mb-6">This Isn't a Website</h2>
              <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
                Let's be crystal clear about what you're actually getting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* What It's NOT */}
              <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-6">❌ What This ISN'T</h3>
                <ul className="space-y-4 text-red-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>A static brochure hanging out on a domain somewhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>A WordPress theme with some plugins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>A business card online that looks professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Another platform taking 30% of your revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Dependence on someone else's audience</span>
                  </li>
                </ul>
              </div>

              {/* What It IS */}
              <div className="bg-trailguide-sage/10 rounded-2xl p-8 border border-trailguide-sage/20">
                <h3 className="text-2xl font-bold text-trailguide-evergreen mb-6">✅ What This IS</h3>
                <ul className="space-y-4 text-trailguide-slate">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                    <span>Full-stack capacity to create, publish, get paid, and connect with your audience TODAY</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                    <span>90% of revenues (not 15%) go directly to you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                    <span>100% of direct audience engagement and data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                    <span>Complete ownership of your digital presence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-1 flex-shrink-0" />
                    <span>Long-tail monetization capabilities</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Long Tail Explanation */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-3xl p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-purple-800 mb-4">The Long Tail Advantage</h2>
              </div>

              <div className="space-y-6 text-trailguide-slate">
                <p className="text-lg leading-relaxed">
                  This platform is for people who believe in the <strong>long tail</strong>—the idea that your audience, 
                  no matter how niche, can sustain your work if you own the relationship directly.
                </p>
                
                <p className="leading-relaxed">
                  Instead of chasing millions of followers on someone else's platform, you build deeper relationships 
                  with thousands of people who genuinely care about your work. Instead of depending on algorithmic 
                  distribution, you create direct paths to your audience.
                </p>
                
                <p className="leading-relaxed">
                  The long tail means that 1,000 true fans paying you $100/year directly is better than 
                  100,000 followers where a platform takes 70% of any revenue and controls who sees your content.
                </p>

                <div className="bg-white/60 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-2">Why This Matters for Movement Leaders</h3>
                  <p className="text-sm">
                    Your ideas need to reach the right people consistently, not get lost in someone else's feed. 
                    Your revenue needs to fund your mission, not some platform's shareholders. 
                    Your audience relationship needs to be owned by you, not rented from Big Tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Worth $75K */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-trailguide-neutral mb-6">Why It's Actually Worth $75,000</h2>
              <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
                Even though my audience would never pay that much, let me explain why agencies charge it.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Technical Value */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-trailguide-neutral">Technical Excellence</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg border border-trailguide-sage/20">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Enterprise-Grade Platform</h4>
                    <p className="text-sm text-trailguide-slate">Custom Next.js application with TypeScript, modern design system, and production-ready hosting infrastructure.</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-lg border border-trailguide-sage/20">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Complete Publishing Stack</h4>
                    <p className="text-sm text-trailguide-slate">Content management, email integration, payment processing, analytics, SEO optimization, and mobile responsiveness.</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-lg border border-trailguide-sage/20">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Custom Development</h4>
                    <p className="text-sm text-trailguide-slate">Every feature built specifically for thought leadership workflows, not adapted from generic templates.</p>
                  </div>
                </div>
              </div>

              {/* Strategic Value */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-trailguide-neutral">Strategic Support</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg border border-trailguide-sage/20">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Discovery & Planning</h4>
                    <p className="text-sm text-trailguide-slate">Deep strategy work to understand your unique positioning, audience, and monetization opportunities.</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-lg border border-trailguide-sage/20">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">My Personal Support</h4>
                    <p className="text-sm text-trailguide-slate">Direct access to someone who's built platforms for movement leaders and understands the unique challenges.</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-lg border border-trailguide-sage/20">
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Network Access</h4>
                    <p className="text-sm text-trailguide-slate">Connection to other established thought leaders who are building sustainable, independent platforms.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Who Am I */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-trailguide-evergreen" />
                </div>
                <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Who Am I?</h2>
                <p className="text-trailguide-slate text-lg">
                  Fair question. Mostly, I'm showing my work.
                </p>
              </div>

              <div className="space-y-6 text-trailguide-slate leading-relaxed">
                <p>
                  I'm Josh Shepherd, and I've spent years building technology for social impact. 
                  I've seen too many brilliant movement leaders struggle with platforms that don't serve their missions, 
                  take too much of their revenue, or disappear when algorithms change.
                </p>
                
                <p>
                  Rather than just complain about it, I'm building the solution I wish existed: 
                  enterprise-level publishing platforms priced for people who are changing the world, 
                  not just optimizing for profit.
                </p>
                
                <p>
                  This entire website you're exploring? It's not just marketing—it's proof of concept. 
                  Every feature you interact with demonstrates what your platform will include. 
                  The strategy guide explains why these choices matter. The intake process shows how we'll 
                  discover your specific needs.
                </p>

                <div className="bg-trailguide-sage/10 rounded-xl p-6 border border-trailguide-sage/20">
                  <p className="font-semibold text-trailguide-evergreen mb-2">My commitment:</p>
                  <p>
                    Build platforms worthy of the ideas they'll carry. Price them for people whose work 
                    matters more than their marketing budgets. And support thought leaders who are building 
                    something bigger than themselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Timeline */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-trailguide-neutral mb-6">The Pricing Timeline</h2>
              <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
                Here's exactly when prices change and why urgency matters.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              
              {/* Current */}
              <Card className="border-trailguide-evergreen bg-trailguide-sage/10 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-trailguide-evergreen text-white px-3 py-1 text-xs font-bold rounded-full">
                  NOW
                </div>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-trailguide-evergreen mb-2">$1,000</div>
                  <div className="text-sm text-trailguide-slate mb-4">First 100 users</div>
                  <div className="text-xs text-trailguide-slate">Current: 4 established thought leaders</div>
                </CardContent>
              </Card>

              {/* 100 Users */}
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2,000</div>
                  <div className="text-sm text-slate-600 mb-4">At 100 users</div>
                  <div className="text-xs text-slate-500">Proven network effect</div>
                </CardContent>
              </Card>

              {/* 500 Users */}
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">$5,000</div>
                  <div className="text-sm text-slate-600 mb-4">At 500 users</div>
                  <div className="text-xs text-slate-500">Established platform</div>
                </CardContent>
              </Card>

              {/* 1000 Users */}
              <Card className="border-slate-300 bg-slate-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-2">$10,000</div>
                  <div className="text-sm text-slate-600 mb-4">At 1,000 users</div>
                  <div className="text-xs text-slate-500">Market rates</div>
                </CardContent>
              </Card>

            </div>

            <div className="text-center mt-12">
              <p className="text-trailguide-slate mb-8 max-w-2xl mx-auto">
                Each price increase reflects the growing value of the network and proven track record. 
                Early adopters get the best deal because they're taking the earliest risk.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-trailguide-evergreen/10 to-orange-100 rounded-3xl p-12 border border-trailguide-evergreen/20">
              <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Ready to Own Your Platform?</h2>
              <p className="text-xl text-trailguide-slate mb-8 max-w-2xl mx-auto">
                You understand the value. You see the pricing logic. You know this opportunity won't last. 
                Let's build your complete thought leadership platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                  <Link href="/intake" className="flex items-center">
                    Start Your Platform ($1,000)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
                  <Link href="/template" className="flex items-center">
                    Explore the Template
                    <Eye className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
