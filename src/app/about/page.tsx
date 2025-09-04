import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  Heart,
  Globe,
  Lightbulb,
  TrendingUp,
  Shield,
  Mail
} from 'lucide-react';
import { TemplateCallout } from '@/components/mdx/TemplateCallout';

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Template Learning Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium border border-trailguide-evergreen/30 text-trailguide-evergreen rounded-full bg-trailguide-sage/10 mb-6">
              <Users className="mr-2 h-4 w-4" />
              About Page Template Example
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              About This Template Platform
            </h1>
            <p className="text-xl text-trailguide-slate leading-relaxed max-w-3xl mx-auto">
              This About page demonstrates how thought leaders should present their story, mission, 
              and credibility while building trust and connection with their audience.
            </p>
          </div>

          <TemplateCallout title="About Page Best Practices" variant="learning">
            Notice how this About page includes all the essential elements for thought leaders:
            <ul className="mt-2 space-y-1">
              <li>• Clear mission and vision statements</li>
              <li>• Credibility markers and achievements</li>
              <li>• Human-first storytelling approach</li>
              <li>• Visual elements with abstract imagery</li>
              <li>• Clear next steps for visitors</li>
              <li>• Values and philosophy transparency</li>
            </ul>
          </TemplateCallout>

          {/* Hero Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                Building the Future of Expert Publishing
              </h2>
              <div className="space-y-6 text-trailguide-slate">
                <p className="text-lg leading-relaxed">
                  We believe every expert deserves a platform that amplifies their impact. 
                  This template demonstrates the complete digital ecosystem we create for 
                  thought leaders who are serious about building authority and scaling their expertise.
                </p>
                <p>
                  After working with hundreds of thought leaders, we've identified the exact 
                  combination of content strategy, audience building, and monetization that 
                  consistently delivers results. This platform showcases those proven approaches.
                </p>
                <p>
                  Our mission is simple: eliminate the complexity, confusion, and costly mistakes 
                  that prevent brilliant minds from sharing their knowledge with the world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/abstract-2.png"
                  alt="Vision of connected expertise and knowledge sharing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-trailguide-evergreen/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-trailguide-neutral text-center mb-12">
              Our Guiding Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">Human-First AI</h3>
                <p className="text-trailguide-slate">
                  Technology amplifies human expertise—it never replaces it. Every feature 
                  we build enhances your unique perspective and authentic voice.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">Universal Access</h3>
                <p className="text-trailguide-slate">
                  Great ideas should reach everyone. We build platforms that are accessible, 
                  inclusive, and designed for global impact.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">Transparent Ethics</h3>
                <p className="text-trailguide-slate">
                  We believe in radical transparency about our methods, pricing, and approach. 
                  No hidden agendas, no vendor lock-in.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Achievements */}
          <div className="bg-gradient-to-br from-trailguide-background to-white rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
                Template Platform Results
              </h2>
              <p className="text-trailguide-slate text-lg">
                This template demonstrates proven strategies used by successful thought leaders
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-trailguide-evergreen mb-2">95%</div>
                <div className="text-trailguide-slate">Content Engagement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trailguide-evergreen mb-2">3.2x</div>
                <div className="text-trailguide-slate">Lead Generation Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trailguide-evergreen mb-2">87%</div>
                <div className="text-trailguide-slate">Email Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trailguide-evergreen mb-2">2.8x</div>
                <div className="text-trailguide-slate">Revenue Per Visitor</div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/abstract-3.png"
                  alt="Strategic approach to thought leadership and expertise scaling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-trailguide-sage/20 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                Our Template Methodology
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trailguide-evergreen rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Strategic Foundation</h3>
                    <p className="text-trailguide-slate">Every platform starts with clear positioning, audience definition, and content strategy.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trailguide-evergreen rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Content Excellence</h3>
                    <p className="text-trailguide-slate">We optimize every piece of content for engagement, SEO, and conversion.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trailguide-evergreen rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trailguide-neutral mb-2">Growth Systems</h3>
                    <p className="text-trailguide-slate">Built-in lead generation, audience building, and monetization features that scale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TemplateCallout title="About Page Strategy" variant="strategy">
            This About page balances authority building with accessibility. Notice how it:
            <ul className="mt-2 space-y-1">
              <li>• Establishes credibility without being boastful</li>
              <li>• Uses specific metrics to build trust</li>
              <li>• Shows the human side behind the expertise</li>
              <li>• Connects values to visitor benefits</li>
              <li>• Includes clear next steps for engagement</li>
            </ul>
          </TemplateCallout>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-trailguide-sage/10 to-trailguide-evergreen/10 rounded-2xl p-12 border border-trailguide-sage/20">
            <h3 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Ready to Build Your Platform?
            </h3>
            <p className="text-xl text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Use this template as your blueprint. Every element here has been tested and proven 
              to build authority, engage audiences, and generate results for thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                <Link href="/expert-publisher-guide" className="flex items-center">
                  Get the Complete Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-3">
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}