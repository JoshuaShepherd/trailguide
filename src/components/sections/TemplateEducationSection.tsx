import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Target, 
  TrendingUp,
  Eye,
  Lightbulb,
  CheckCircle,
  Star
} from 'lucide-react';

export function TemplateEducationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-trailguide-background to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium border border-trailguide-evergreen/30 text-trailguide-evergreen rounded-full bg-white/80 backdrop-blur-sm mb-6">
              <GraduationCap className="mr-2 h-4 w-4" />
              Learning-First Template Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Learn by experiencing
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
              This entire website teaches thought leadership best practices through its own design and structure. 
              Every element demonstrates what works, why it works, and how to implement it.
            </p>
          </div>

          {/* Learning Methodology Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Left: Visual Learning Examples */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-trailguide-sage/20 to-trailguide-evergreen/20 rounded-2xl"></div>
                <div className="relative p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="/images/abstract.png"
                        alt="Content strategy visualization"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-trailguide-evergreen/20 flex items-center justify-center">
                        <div className="text-center text-white">
                          <BookOpen className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-xs font-semibold">Content</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="/images/abstract-2.png"
                        alt="Audience engagement strategy"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-trailguide-evergreen/20 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Users className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-xs font-semibold">Audience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="/images/abstract-3.png"
                      alt="Revenue and monetization strategy"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-trailguide-evergreen/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <TrendingUp className="h-6 w-6 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Learning Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-trailguide-neutral mb-2">
                      See Best Practices in Action
                    </h3>
                    <p className="text-trailguide-slate">
                      Instead of just reading about thought leadership, experience it. Every page demonstrates proven strategies you can implement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-trailguide-neutral mb-2">
                      Understand the Strategy
                    </h3>
                    <p className="text-trailguide-slate">
                      Learn the "why" behind every design choice, content structure, and user experience decision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trailguide-evergreen rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-trailguide-neutral mb-2">
                      Apply Immediately
                    </h3>
                    <p className="text-trailguide-slate">
                      Take the patterns, strategies, and approaches you see here and adapt them to your own platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Learning Features */}
          <div className="bg-white rounded-2xl border border-trailguide-sage/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-trailguide-neutral text-center mb-8">
              What You'll Learn From This Template
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Content Strategy</h4>
                <p className="text-sm text-trailguide-slate">How to structure, organize, and present your expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Audience Building</h4>
                <p className="text-sm text-trailguide-slate">Email capture, community features, and engagement tactics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Monetization</h4>
                <p className="text-sm text-trailguide-slate">Product pages, pricing strategies, and sales funnels</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-trailguide-neutral mb-2">Authority Building</h4>
                <p className="text-sm text-trailguide-slate">Credibility markers, social proof, and thought leadership positioning</p>
              </div>
            </div>
          </div>

          {/* Template Exploration CTA */}
          <div className="text-center bg-gradient-to-br from-trailguide-sage/10 to-trailguide-evergreen/10 rounded-2xl p-12 border border-trailguide-sage/20">
            <h3 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Start exploring the template
            </h3>
            <p className="text-xl text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Navigate through each section to see thought leadership best practices in action. 
              Use this template as your blueprint for building authority and scaling your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                <Link href="/expert-publisher-guide" className="flex items-center">
                  Complete Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-3">
                <Link href="/blog" className="flex items-center">
                  Content Examples
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
