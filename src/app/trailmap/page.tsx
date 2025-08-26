import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTACluster } from '@/components/shared/CTACluster';
import { MilestoneBadge } from '@/components/shared/MilestoneBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Users, Clock, Shield } from 'lucide-react';
import InteractiveAssessment from '@/components/interactive-assessment';

export const metadata: Metadata = {
  title: 'TrailMap - Your Map for Wise AI Adoption | TrailGuide',
  description: 'A 5-stage, 4-dimension model that orients individuals and organizations—then guides the next step.',
};

const stages = [
  {
    id: 'awareness',
    title: 'Awareness',
    summary: 'Understanding what AI can and cannot do for your mission.',
    symptoms: ['Wondering if AI could help', 'Hearing conflicting advice', 'Feeling overwhelmed by options'],
    risks: ['Analysis paralysis', 'Missing opportunities', 'Falling behind peers'],
    moveOnSignal: 'You have a clear picture of AI&rsquo;s potential and limitations for your work.',
    color: 'from-red-100 to-red-200',
    textColor: 'text-red-800'
  },
  {
    id: 'experimentation',
    title: 'Experimentation', 
    summary: 'Testing AI tools safely to learn what works for your context.',
    symptoms: ['Trying different tools', 'Learning through trial', 'Building confidence gradually'],
    risks: ['Getting stuck in pilot mode', 'Not documenting learnings', 'Inconsistent approaches'],
    moveOnSignal: 'You&rsquo;ve identified 2-3 AI applications that clearly add value.',
    color: 'from-orange-100 to-orange-200',
    textColor: 'text-orange-800'
  },
  {
    id: 'adoption',
    title: 'Adoption',
    summary: 'Integrating proven AI solutions into regular workflows.',
    symptoms: ['Standardizing successful pilots', 'Training team members', 'Establishing processes'],
    risks: ['Inconsistent implementation', 'Resistance to change', 'Insufficient training'],
    moveOnSignal: 'AI tools are part of your standard operating procedures.',
    color: 'from-yellow-100 to-yellow-200', 
    textColor: 'text-yellow-800'
  },
  {
    id: 'optimization',
    title: 'Optimization',
    summary: 'Refining and improving AI implementations for maximum impact.',
    symptoms: ['Measuring ROI', 'Fine-tuning processes', 'Scaling successful applications'],
    risks: ['Complacency', 'Missing new opportunities', 'Inefficient resource allocation'],
    moveOnSignal: 'You can demonstrate clear value and continuously improve AI systems.',
    color: 'from-green-100 to-green-200',
    textColor: 'text-green-800'
  },
  {
    id: 'leadership',
    title: 'Leadership',
    summary: 'Sharing knowledge and leading others in ethical AI adoption.',
    symptoms: ['Mentoring other organizations', 'Speaking at conferences', 'Contributing to best practices'],
    risks: ['Becoming isolated', 'Missing community insights', 'Stagnating innovation'],
    moveOnSignal: 'Others seek your guidance on AI adoption and implementation.',
    color: 'from-blue-100 to-blue-200',
    textColor: 'text-blue-800'
  }
];

const dimensions = [
  {
    id: 'people',
    title: 'People',
    summary: 'Skills, roles, and capacity for AI adoption across your team.'
  },
  {
    id: 'principles', 
    title: 'Principles',
    summary: 'Ethics, policies, and governance frameworks for responsible AI use.'
  },
  {
    id: 'applications',
    title: 'Applications', 
    summary: 'Specific use-cases, tools, and implementations in your work.'
  },
  {
    id: 'strategy',
    title: 'Strategy',
    summary: 'Goals, measurement, and long-term vision for AI integration.'
  }
];

const faqs = [
  {
    q: 'Is this assessment for individuals or organizations?',
    a: 'Both! You can assess your personal AI readiness or evaluate your entire organization. The TrailMap works at any scale and helps identify where different team members might be on their AI journey.'
  },
  {
    q: 'What do the four dimensions mean?',
    a: 'The dimensions help you understand AI readiness across People (skills & roles), Principles (ethics & policy), Applications (use-cases & tools), and Strategy (goals & measurement). Most organizations are stronger in some dimensions than others.'
  },
  {
    q: 'How do you handle our assessment data?',
    a: 'We collect minimal data and never store sensitive organizational information. Your assessment results are private to you, and we only use anonymized, aggregated data to improve the TrailMap model.'
  },
  {
    q: 'Can we reassess later?',
    a: 'Absolutely! We encourage regular reassessment as your AI adoption progresses. Many organizations reassess quarterly or after completing a TrailHike to track their progress.'
  }
];

export default function TrailMapPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-trailguide-background to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader
                title="Your Map for Wise AI Adoption"
                subtitle="A 5-stage, 4-dimension model that orients individuals and organizations—then guides the next step."
                centered
              />
            </div>
          </div>
        </section>

        {/* Model Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                title="The TrailMap Model"
                subtitle="Navigate your AI journey with clarity and confidence."
                centered
                className="mb-16"
              />

              {/* 5 Stages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                {stages.map((stage, index) => (
                  <Card key={stage.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-trailguide-border">
                    <CardHeader className="text-center pb-3">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 mx-auto`}>
                        <span className={`text-xl font-bold ${stage.textColor}`}>
                          {index + 1}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold text-trailguide-neutral mb-2">
                        {stage.title}
                      </CardTitle>
                      <p className="text-sm text-trailguide-slate">{stage.summary}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-xs font-medium text-trailguide-neutral mb-2 uppercase tracking-wide">
                          Symptoms
                        </h4>
                        <ul className="text-xs text-trailguide-slate space-y-1">
                          {stage.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1 h-1 rounded-full bg-trailguide-evergreen mr-2 mt-2 flex-shrink-0"></div>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-medium text-trailguide-bronze mb-3 uppercase tracking-wide">
                          Ready to Move On?
                        </h4>
                        <p className="text-sm text-trailguide-slate leading-relaxed" dangerouslySetInnerHTML={{ __html: stage.moveOnSignal }}></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Dimensions Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dimensions.map((dimension) => (
                  <Card key={dimension.id} className="border-trailguide-border bg-trailguide-background/50">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-trailguide-neutral mb-3 text-lg">{dimension.title}</h3>
                      <p className="text-trailguide-slate leading-relaxed">{dimension.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-trailguide-slate">
                <div className="flex items-center">
                  <MilestoneBadge variant="bronze" className="mr-2">Milestone</MilestoneBadge>
                  <span>Achievement markers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-trailguide-evergreen mr-2"></div>
                  <span>Trail progression nodes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Assessment Works */}
        <section className="py-24 bg-trailguide-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="How the Assessment Works"
                subtitle="Three simple steps to understand your AI readiness."
                centered
                className="mb-16"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { step: '01', title: 'Answer Questions', desc: 'Quick questions about your current AI experience and goals.' },
                  { step: '02', title: 'See Your Position', desc: 'Get your stage and dimension scores with clear explanations.' },
                  { step: '03', title: 'Get Your Plan', desc: 'Receive tailored recommendations for your next steps.' }
                ].map((item, index) => (
                  <Card key={index} className="text-center border-trailguide-border bg-white">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-full bg-trailguide-evergreen text-white flex items-center justify-center text-lg font-bold mb-4 mx-auto">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">{item.title}</h3>
                      <p className="text-trailguide-slate">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Callout */}
              <div className="bg-trailguide-evergreen/10 border border-trailguide-evergreen/20 rounded-lg p-6 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-trailguide-evergreen">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Less than 10 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Individual & organizational assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Assessment */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                title="Take Your AI Readiness Assessment"
                subtitle="Discover where you are on the TrailMap and get personalized recommendations for your next steps."
                centered
                className="mb-12"
              />

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="overview">Assessment Overview</TabsTrigger>
                  <TabsTrigger value="interactive">Take Assessment</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You&apos;ll Learn</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-trailguide-evergreen mb-3">Your Current Stage</h4>
                        <ul className="space-y-2 text-sm text-trailguide-slate">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mt-0.5 shrink-0" />
                            Where you are in the 5-stage journey
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mt-0.5 shrink-0" />
                            Your organization&apos;s AI readiness score
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mt-0.5 shrink-0" />
                            Strengths and growth opportunities
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-trailguide-evergreen mb-3">Personalized Recommendations</h4>
                        <ul className="space-y-2 text-sm text-trailguide-slate">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mt-0.5 shrink-0" />
                            Tailored next steps for your stage
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mt-0.5 shrink-0" />
                            Relevant TrailGuide resources
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trailguide-evergreen mt-0.5 shrink-0" />
                            Workshop and toolkit suggestions
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="interactive">
                  <InteractiveAssessment />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Results & Next Steps */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="What You&rsquo;ll Receive"
                subtitle="Comprehensive insights to guide your AI journey forward."
                centered
                className="mb-16"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Deliverables */}
                <div>
                  <h3 className="text-2xl font-semibold text-trailguide-neutral mb-6">Your Assessment Results Include:</h3>
                  <ul className="space-y-4">
                    {[
                      'Stage score with detailed explanation',
                      'Four dimension scores and analysis', 
                      'Quick wins you can implement immediately',
                      'Recommended TrailHikes for your level',
                      'Suggested TrailKits for your use cases',
                      'Shareable summary for your team or board'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-trailguide-evergreen mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-trailguide-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results Screenshot */}
                <Card className="border-trailguide-border">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-trailguide-background to-trailguide-evergreen/5 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-trailguide-bronze/20 flex items-center justify-center mb-4 mx-auto">
                          <CheckCircle className="h-8 w-8 text-trailguide-bronze" />
                        </div>
                        <h4 className="text-lg font-semibold text-trailguide-neutral mb-2">Assessment Complete</h4>
                        <p className="text-sm text-trailguide-slate">
                          Sample results view will appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-24 bg-gradient-to-b from-trailguide-background to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeader
                title="Ready to Find Your Position?"
                subtitle="Take the first step toward confident, ethical AI adoption."
                centered
                className="mb-12"
              />
              
              <CTACluster
                primary={{
                  label: 'Start Your Assessment',
                  href: '/assessment',
                  icon: true
                }}
                secondary={{
                  label: 'Questions? Contact Us', 
                  href: '/contact'
                }}
                className="mb-8"
              />

              <p className="text-sm text-trailguide-slate">
                Free assessment • No account required • Results in minutes
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                title="Frequently Asked Questions"
                centered
                className="mb-12"
              />

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-trailguide-neutral">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-trailguide-slate leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
    </main>
  );
}
