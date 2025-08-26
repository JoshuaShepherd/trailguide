import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, DollarSign } from 'lucide-react';

const trailHikes = [
  {
    id: 'grant-sprint',
    title: 'Grant Writing Sprint',
    description: 'Transform your grant applications with AI-assisted research, writing, and review processes.',
    duration: '4 weeks',
    cohortSize: '8-12 teams',
    priceRange: '$2,500-4,000',
    highlights: ['Proposal templates', 'Research automation', 'Review workflows', 'Success metrics'],
  },
  {
    id: 'comms-sprint',
    title: 'Communications Sprint',
    description: 'Amplify your message with AI-powered content creation, social media, and storytelling.',
    duration: '3 weeks',
    cohortSize: '10-15 teams',
    priceRange: '$1,800-3,200',
    highlights: ['Content templates', 'Social automation', 'Story frameworks', 'Analytics setup'],
  },
  {
    id: 'board-report-sprint',
    title: 'Board Report Sprint',
    description: 'Create compelling board presentations with data visualization and impact storytelling.',
    duration: '2 weeks',
    cohortSize: '6-10 teams',
    priceRange: '$1,200-2,000',
    highlights: ['Report templates', 'Data visualization', 'Impact metrics', 'Presentation skills'],
  },
];

export function TrailHikesSection() {
  return (
    <section className="py-24 bg-trailguide-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral mb-6">
            Learn by Doing — with Your Team
          </h2>
          <p className="text-lg md:text-xl text-trailguide-slate max-w-2xl mx-auto mb-8">
            Join a focused sprint — build real capacity while solving real problems.
          </p>
          
          {/* Callout Banner */}
          <div className="inline-flex items-center bg-trailguide-evergreen/10 border border-trailguide-evergreen/20 rounded-lg px-4 py-2 text-sm text-trailguide-evergreen mb-8">
            <Users className="h-4 w-4 mr-2" />
            Cohorts use the same AI tools you&rsquo;ll later adopt
          </div>
        </div>

        {/* Featured Hikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trailHikes.map((hike) => (
            <Card 
              key={hike.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-trailguide-border bg-white"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-trailguide-neutral mb-3">
                  {hike.title}
                </CardTitle>
                <p className="text-trailguide-slate text-sm leading-relaxed">
                  {hike.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Hike Details */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-trailguide-slate/30 text-trailguide-slate">
                    <Clock className="h-3 w-3 mr-1" />
                    {hike.duration}
                  </Badge>
                  <Badge variant="outline" className="border-trailguide-slate/30 text-trailguide-slate">
                    <Users className="h-3 w-3 mr-1" />
                    {hike.cohortSize}
                  </Badge>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-medium text-trailguide-neutral mb-2">What you&rsquo;ll build:</h4>
                  <ul className="text-sm text-trailguide-slate space-y-1">
                    {hike.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-trailguide-evergreen mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-trailguide-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-trailguide-slate">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{hike.priceRange}</span>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white"
                  >
                    <Link href={`/hikes/${hike.id}`}>Sign Up</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-trailguide-slate max-w-2xl mx-auto">
            All hikes include live coaching sessions, peer collaboration, and access to our AI tool library. 
            Scholarships available for qualifying organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
