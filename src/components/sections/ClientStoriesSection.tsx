import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote, ArrowRight, ExternalLink, Star } from 'lucide-react';

export function ClientStoriesSection() {
  const stories = [
    {
      name: 'Alan Hirsch',
      role: 'Author & Missional Thinker',
      company: 'The Forgotten Ways',
      image: '/team/alan-hirsch.jpg', // You'll need to add these images
      quote: 'TrailGuide transformed how I engage with my audience. Instead of losing 85% to publishers, I now own my platform and keep direct relationships with readers.',
      metric: '90% Revenue Retention',
      link: '/case-studies/alan-hirsch'
    },
    {
      name: 'Brad Brisco',
      role: 'Co-Author & Strategy Consultant',
      company: 'Missional Essentials',
      image: '/team/brad-brisco.jpg',
      quote: 'The integration of AI writing tools with a complete publishing platform gave me capabilities I never thought possible at this price point.',
      metric: '10x Platform Cost Savings',
      link: '/case-studies'
    },
    {
      name: 'Tim Catchim',
      role: 'Co-Author & Innovation Leader',
      company: 'Permanent Revolution',
      image: '/team/tim-catchim.jpg', 
      quote: 'TrailGuide doesn&apos;t just build tools—they create learning experiences. Their AI curriculum is now central to how I teach others.',
      metric: 'Complete Curriculum Platform',
      link: '/tim-catchim'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-trailguide-background to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Leaders Who&apos;ve Chosen Their Path
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
              See how thought leaders and nonprofit innovators are reclaiming ownership 
              and amplifying impact through AI-enhanced platforms.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {stories.map((story, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border border-trailguide-evergreen/20 hover:border-trailguide-evergreen/40 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                      {/* Placeholder for profile image */}
                      <div className="w-12 h-12 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center">
                        <span className="text-trailguide-evergreen font-bold text-lg">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-trailguide-neutral text-lg">{story.name}</h3>
                      <p className="text-trailguide-slate text-sm">{story.role}</p>
                      <p className="text-trailguide-slate text-sm font-medium">{story.company}</p>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-trailguide-bronze text-trailguide-bronze" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-trailguide-evergreen/20" />
                    <blockquote className="text-trailguide-neutral italic leading-relaxed pl-4">
                      {story.quote}
                    </blockquote>
                  </div>

                  <div className="bg-trailguide-evergreen/5 rounded-lg p-4 text-center">
                    <div className="font-bold text-trailguide-evergreen text-lg">
                      {story.metric}
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 group-hover:bg-trailguide-evergreen group-hover:text-white transition-all">
                    <Link href={story.link} className="flex items-center justify-center">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Summary */}
          <div className="bg-white rounded-2xl border border-trailguide-evergreen/10 p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-trailguide-neutral mb-4">
                Results That Speak for Themselves
              </h3>
              <p className="text-trailguide-slate">
                Our clients don&apos;t just get tools—they get transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-trailguide-evergreen mb-2">90%</div>
                <div className="text-sm text-trailguide-slate">Revenue Retained by Authors</div>
                <div className="text-xs text-trailguide-slate/60 mt-1">vs. 15% with traditional publishers</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-trailguide-evergreen mb-2">$50k+</div>
                <div className="text-sm text-trailguide-slate">Savings vs. Agency Costs</div>
                <div className="text-xs text-trailguide-slate/60 mt-1">For equivalent platform functionality</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-trailguide-evergreen mb-2">100%</div>
                <div className="text-sm text-trailguide-slate">Platform Ownership</div>
                <div className="text-xs text-trailguide-slate/60 mt-1">Content, audience, and data remain yours</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-trailguide-evergreen mb-2">15</div>
                <div className="text-sm text-trailguide-slate">Specialized TrailKits</div>
                <div className="text-xs text-trailguide-slate/60 mt-1">AI-powered nonprofit tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
