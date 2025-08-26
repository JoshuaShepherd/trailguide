import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const trailMapStages = [
  {
    id: 'awareness',
    name: 'Awareness',
    description: 'Understanding what AI can and cannot do for your nonprofit\'s mission.',
    color: 'from-red-100 to-red-200',
    textColor: 'text-red-800',
  },
  {
    id: 'experimentation',
    name: 'Experimentation',
    description: 'Testing AI tools in low-risk scenarios to build confidence and skills.',
    color: 'from-orange-100 to-orange-200',
    textColor: 'text-orange-800',
  },
  {
    id: 'adoption',
    name: 'Adoption',
    description: 'Integrating AI solutions into your regular workflows and processes.',
    color: 'from-yellow-100 to-yellow-200',
    textColor: 'text-yellow-800',
  },
  {
    id: 'optimization',
    name: 'Optimization',
    description: 'Refining and improving your AI implementations for maximum impact.',
    color: 'from-green-100 to-green-200',
    textColor: 'text-green-800',
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Sharing knowledge and leading others in ethical AI adoption.',
    color: 'from-blue-100 to-blue-200',
    textColor: 'text-blue-800',
  },
];

export function TrailMapSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral mb-6">
            Where Are You on the AI Trail?
          </h2>
          <p className="text-lg md:text-xl text-trailguide-slate max-w-2xl mx-auto">
            Our 5-stage, 4-dimension TrailMap gives you a clear starting point and path forward.
          </p>
        </div>

        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {trailMapStages.map((stage, index) => (
            <Card 
              key={stage.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-trailguide-border"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 mx-auto`}>
                  <span className={`text-lg font-bold ${stage.textColor}`}>
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-trailguide-neutral mb-3 text-center">
                  {stage.name}
                </h3>
                <p className="text-sm text-trailguide-slate text-center leading-relaxed">
                  {stage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-4"
          >
            <Link href="/assessment" className="flex items-center">
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-trailguide-slate">
            Free • Takes less than 10 minutes • No account required
          </p>
        </div>
      </div>
    </section>
  );
}
