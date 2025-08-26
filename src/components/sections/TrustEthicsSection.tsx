import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, ArrowRight } from 'lucide-react';

const advisors = [
  {
    name: 'Alan Hirsch',
    title: 'Author & Organizational Strategist',
    org: 'AlanHirsch.org',
  },
  {
    name: 'Brad Brisco',
    title: 'Church Planting Expert',
    org: 'Missional Church Network',
  },
  {
    name: 'KC Network',
    title: 'Regional Innovation Hub',
    org: 'Kansas City',
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'AI Ethics Researcher',
    org: 'Stanford HAI',
  },
  {
    name: 'Marcus Johnson',
    title: 'Nonprofit Technology Leader',
    org: 'TechSoup',
  },
  {
    name: 'Rev. Maria Santos',
    title: 'Community Organizer',
    org: 'Faith in Action',
  },
];

const ethicsPrinciples = [
  {
    title: 'Human-Centered',
    description: 'AI should amplify human capabilities, not replace human judgment.',
  },
  {
    title: 'Transparent',
    description: 'Clear about what AI is doing, when it\'s being used, and how it works.',
  },
  {
    title: 'Accountable',
    description: 'Organizations maintain responsibility for AI-assisted decisions.',
  },
  {
    title: 'Equitable',
    description: 'AI tools should reduce, not increase, existing inequalities.',
  },
];

export function TrustEthicsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral mb-6">
              Built for Nonprofits. Guided by Ethics.
            </h2>
            <p className="text-lg md:text-xl text-trailguide-slate max-w-2xl mx-auto">
              Our commitment to ethical AI isn&rsquo;t just a promise—it&rsquo;s built into everything we do, 
              guided by trusted advisors and proven frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ethics Framework */}
            <div>
              <Card className="border-trailguide-border h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-trailguide-evergreen/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-trailguide-evergreen" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-trailguide-neutral">
                      Our Ethics Framework
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-trailguide-slate leading-relaxed">
                    We believe AI should serve humanity&rsquo;s highest values. Our framework ensures 
                    every tool, training, and recommendation upholds the mission-driven work 
                    nonprofits do every day.
                  </p>

                  {/* Ethics Principles */}
                  <div className="space-y-4">
                    {ethicsPrinciples.map((principle, index) => (
                      <div key={index} className="flex space-x-3">
                        <div className="w-6 h-6 rounded-full bg-trailguide-evergreen flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-trailguide-neutral mb-1">
                            {principle.title}
                          </h4>
                          <p className="text-sm text-trailguide-slate leading-relaxed">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white"
                  >
                    <Link href="/ethics" className="flex items-center justify-center">
                      Read Our Complete Ethics Framework
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Advisors & Board */}
            <div>
              <Card className="border-trailguide-border h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-trailguide-bronze/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-trailguide-bronze" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-trailguide-neutral">
                      Trusted Advisors
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-trailguide-slate leading-relaxed">
                    Our work is guided by leaders who understand both the potential and 
                    the challenges of technology in mission-driven organizations.
                  </p>

                  {/* Advisors Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advisors.map((advisor, index) => (
                      <div key={index} className="space-y-1">
                        <h4 className="font-semibold text-trailguide-neutral text-sm">
                          {advisor.name}
                        </h4>
                        <p className="text-xs text-trailguide-slate">
                          {advisor.title}
                        </p>
                        <p className="text-xs text-trailguide-evergreen font-medium">
                          {advisor.org}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-trailguide-border">
                    <p className="text-sm text-trailguide-slate mb-4">
                      Want to join our advisory network? We&rsquo;re always looking for 
                      experienced nonprofit leaders and technology experts.
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-trailguide-bronze text-trailguide-bronze hover:bg-trailguide-bronze/5"
                    >
                      <Link href="/advisors">Learn About Advisory Opportunities</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
