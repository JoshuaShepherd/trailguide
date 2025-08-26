import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  MessageCircle, 
  BarChart3, 
  Users, 
  Lightbulb,
  ArrowRight 
} from 'lucide-react';

const trailKits = [
  {
    id: 'grant-kit',
    title: 'Grant Writing Kit',
    icon: FileText,
    shortDesc: 'Templates, workflows, and AI prompts for compelling proposals.',
    features: ['Proposal templates', 'Research automation', 'Review checklists'],
  },
  {
    id: 'communications-kit',
    title: 'Communications Kit',
    icon: MessageCircle,
    shortDesc: 'Content creation tools for social media, newsletters, and campaigns.',
    features: ['Content calendars', 'Social templates', 'Brand guidelines'],
  },
  {
    id: 'impact-kit',
    title: 'Impact Measurement Kit',
    icon: BarChart3,
    shortDesc: 'Data collection and storytelling tools for demonstrating outcomes.',
    features: ['Metrics frameworks', 'Data visualization', 'Report templates'],
  },
  {
    id: 'volunteer-kit',
    title: 'Volunteer Management Kit',
    icon: Users,
    shortDesc: 'Recruitment, onboarding, and engagement systems for volunteers.',
    features: ['Screening workflows', 'Training modules', 'Recognition systems'],
  },
  {
    id: 'innovation-kit',
    title: 'Program Innovation Kit',
    icon: Lightbulb,
    shortDesc: 'Design thinking and iteration tools for program development.',
    features: ['Innovation frameworks', 'Testing protocols', 'Feedback systems'],
  },
];

export function TrailKitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral mb-6">
            Tools That Work as Hard as You Do
          </h2>
          <p className="text-lg md:text-xl text-trailguide-slate max-w-2xl mx-auto mb-8">
            Our modular AI kits support your team&rsquo;s ongoing work — ready when you are.
          </p>
          
          {/* Availability Badge */}
          <Badge 
            variant="outline" 
            className="border-trailguide-bronze text-trailguide-bronze bg-trailguide-bronze/10"
          >
            Available to cohort alumni and partners
          </Badge>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {trailKits.map((kit) => {
            const IconComponent = kit.icon;
            return (
              <Card 
                key={kit.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-trailguide-border"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-trailguide-evergreen/10 flex items-center justify-center mb-3 mx-auto">
                    <IconComponent className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-trailguide-neutral text-center mb-2">
                    {kit.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-trailguide-slate text-center leading-relaxed">
                    {kit.shortDesc}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    {kit.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-trailguide-slate">
                        <div className="w-1 h-1 rounded-full bg-trailguide-evergreen mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 group-hover:bg-trailguide-evergreen group-hover:text-white transition-all"
                  >
                    <Link href={`/kits/${kit.id}`} className="flex items-center">
                      See Inside
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-trailguide-slate max-w-2xl mx-auto mb-6">
            Each kit includes templates, workflows, AI prompts, and step-by-step implementation guides. 
            Updated monthly with community feedback and new AI capabilities.
          </p>
          
          <Button 
            asChild
            variant="outline"
            className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5"
          >
            <Link href="/kits">View All Kits</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
