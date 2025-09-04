import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, Shield, Users, Lightbulb, Compass, Crown } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: Crown,
      title: 'Ownership & Agency',
      description: 'Technology should expand human agency, not extract it. You own your work, ideas, and impact.',
      color: 'trailguide-bronze'
    },
    {
      icon: Compass,
      title: 'Simplicity & Clarity', 
      description: 'We make complex technology comprehensible through clear interfaces, helpful metaphors, and thoughtful design.',
      color: 'trailguide-evergreen'
    },
    {
      icon: Shield,
      title: 'Ethics & Integrity',
      description: 'We covenant to use AI in ways that promote justice, stewardship, and human flourishing—never exploitation.',
      color: 'trailguide-evergreen'
    },
    {
      icon: Lightbulb,
      title: 'Learning in Public',
      description: 'We build quickly, test openly, and share our learnings. Our prototypes are invitations for others to learn.',
      color: 'trailguide-bronze'
    },
    {
      icon: Users,
      title: 'Relationship at Center',
      description: 'AI automates tasks, but cannot replace relationship. Technology serves community, not the other way around.',
      color: 'trailguide-evergreen'
    },
    {
      icon: Heart,
      title: 'Human Flourishing',
      description: 'Technology is never the end goal. Our success is measured by human thriving, not efficiency metrics.',
      color: 'trailguide-bronze'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Values That Guide Every Decision
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
              TrailGuide isn&apos;t just a technology company. We&apos;re a movement toward 
              human flourishing in the age of AI, guided by principles that matter.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const iconColorClass = `text-${value.color}`;
              const bgColorClass = `bg-${value.color}/10`;
              
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-trailguide-evergreen/20">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${bgColorClass} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${iconColorClass}`} />
                    </div>
                    <h3 className="text-xl font-bold text-trailguide-neutral">
                      {value.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-trailguide-slate leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-block bg-trailguide-background rounded-2xl px-8 py-6 border border-trailguide-evergreen/10">
              <p className="text-lg text-trailguide-neutral font-medium mb-2">
                Ready to work with a partner who shares your values?
              </p>
              <p className="text-trailguide-slate">
                Let&apos;s build something meaningful together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
