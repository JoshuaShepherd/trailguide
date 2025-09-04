'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MeetingAgent } from '@/components/MeetingAgent';
import { ContentStrategyTool } from '@/components/ContentStrategyTool';
import { 
  Bot, 
  GraduationCap, 
  DollarSign, 
  Palette, 
  Target, 
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  Lightbulb,
  AlertCircle
} from 'lucide-react';

interface FlowItem {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  content: {
    description: string;
    keyPoints: string[];
    actionItems: string[];
  };
}

const FLOW_ITEMS: FlowItem[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    subtitle: 'Specificity & Scope',
    icon: Bot,
    color: 'from-blue-500 to-indigo-600',
    content: {
      description: 'Alan & I need to decide the exact agents & how they will function. We also need to plan content around the kind of meta-ai formation & training we need to do at launch.',
      keyPoints: [
        'Define specific agent functionalities and use cases',
        'Determine agent interaction patterns and workflows',
        'Plan meta-AI training content for launch',
        'Establish agent scope and limitations'
      ],
      actionItems: [
        'Map out agent specifications with Alan',
        'Create agent workflow diagrams',
        'Develop training content strategy',
        'Define success metrics for each agent'
      ]
    }
  },
  {
    id: 'mdna-lms',
    title: 'mDNA LMS',
    subtitle: 'Learning Plan',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600',
    content: {
      description: 'Alan wants an LMS to teach mDNA but I\'m not sure he\'s given specific info about what he wants yet, or whether he wants me to adapt it.',
      keyPoints: [
        'Clarify Alan\'s vision for mDNA curriculum',
        'Define learning objectives and outcomes',
        'Determine content structure and delivery method',
        'Establish adaptation requirements vs. new development'
      ],
      actionItems: [
        'Get detailed requirements from Alan',
        'Review existing mDNA materials',
        'Define LMS feature requirements',
        'Create curriculum outline and timeline'
      ]
    }
  },
  {
    id: 'content-monetization',
    title: 'Content & E-mail & Membership',
    subtitle: '& $$$',
    icon: DollarSign,
    color: 'from-amber-500 to-orange-600',
    content: {
      description: 'We need to look at all content (which I define as the dynamic stuff produced on and through the website) and sort through what\'s going to cost an e-mail or 10 bucks or whatever. Alan kinda needs a clear business plan.',
      keyPoints: [
        'Categorize all content types and formats',
        'Define pricing tiers and access levels',
        'Establish email capture strategies',
        'Create clear revenue model and projections'
      ],
      actionItems: [
        'Audit all existing and planned content',
        'Define pricing strategy for each content type',
        'Map out email marketing funnel',
        'Create business plan with revenue projections'
      ]
    }
  },
  {
    id: 'design-style',
    title: 'Style, Color & Design',
    subtitle: 'Visual Identity',
    icon: Palette,
    color: 'from-purple-500 to-pink-600',
    content: {
      description: 'He needs to pick his colors and maybe look at behance and show me what he likes, if he cares which he does a little.',
      keyPoints: [
        'Establish brand color palette and visual identity',
        'Review design inspiration and preferences',
        'Define design system and style guidelines',
        'Ensure visual consistency across all touchpoints'
      ],
      actionItems: [
        'Have Alan browse Behance for inspiration',
        'Create mood board with preferred styles',
        'Define brand guidelines document',
        'Apply chosen design system to key pages'
      ]
    }
  },
  {
    id: 'content-strategy',
    title: 'Content & Audience Strategy',
    subtitle: 'Post-Launch',
    icon: Target,
    color: 'from-rose-500 to-red-600',
    content: {
      description: 'What\'s he wanting to say after the platform is up? To whom? How? Etc.',
      keyPoints: [
        'Define target audience segments and personas',
        'Establish core messaging and value propositions',
        'Plan content calendar and publishing schedule',
        'Determine distribution channels and tactics'
      ],
      actionItems: [
        'Create detailed audience personas',
        'Develop content themes and topics',
        'Build editorial calendar for first 90 days',
        'Define engagement and growth strategies'
      ]
    }
  },
  {
    id: 'launch-plan',
    title: 'Launch Plan',
    subtitle: 'Go-to-Market',
    icon: Rocket,
    color: 'from-cyan-500 to-blue-600',
    content: {
      description: 'What\'s our specific launch plan? Or plan to make a launch plan?',
      keyPoints: [
        'Define launch timeline and key milestones',
        'Establish pre-launch marketing and audience building',
        'Plan launch sequence and announcement strategy',
        'Set success metrics and tracking systems'
      ],
      actionItems: [
        'Create detailed launch timeline',
        'Develop pre-launch audience building strategy',
        'Plan launch week activities and content',
        'Set up analytics and tracking systems'
      ]
    }
  }
];

export default function IntakeFlowPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [notes, setNotes] = useState<{ [key: string]: string }>({});

  const handleItemClick = (itemId: string) => {
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  const handleNotesChange = (itemId: string, value: string) => {
    setNotes(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  const selectedItemData = selectedItem ? FLOW_ITEMS.find(item => item.id === selectedItem) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-trailguide-background via-white to-trailguide-evergreen/5">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
            Thought Leader Platform Intake Flow
          </h1>
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
            Interactive agenda for planning your complete digital presence and launch strategy
          </p>
        </div>

        {/* Horizontal Flow */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-trailguide-neutral mb-6 text-center">
            Meeting Discussion Items
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {FLOW_ITEMS.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedItem === item.id;
              
              return (
                <Card
                  key={item.id}
                  className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                    isSelected 
                      ? 'ring-4 ring-trailguide-evergreen shadow-lg scale-105' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <div className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-trailguide-evergreen text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-semibold text-trailguide-neutral mb-2 text-lg">
                      {item.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm text-trailguide-slate">
                      {item.subtitle}
                    </p>
                    
                    {/* Selected Indicator */}
                    {isSelected && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <CheckCircle2 className="h-6 w-6 text-trailguide-evergreen bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Selected Item Details */}
        {selectedItemData && (
          <Card className="mb-8 border-2 border-trailguide-evergreen/20">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedItemData.color} rounded-lg flex items-center justify-center mr-4`}>
                  <selectedItemData.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral">
                    {selectedItemData.title}
                  </h3>
                  <p className="text-trailguide-slate">
                    {selectedItemData.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-trailguide-neutral mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                  Discussion Context
                </h4>
                <p className="text-trailguide-slate bg-trailguide-sage/10 p-4 rounded-lg leading-relaxed">
                  {selectedItemData.content.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Key Points */}
                <div>
                  <h4 className="text-lg font-semibold text-trailguide-neutral mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Key Discussion Points
                  </h4>
                  <ul className="space-y-3">
                    {selectedItemData.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-trailguide-evergreen rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-trailguide-slate">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Items */}
                <div>
                  <h4 className="text-lg font-semibold text-trailguide-neutral mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-trailguide-evergreen" />
                    Action Items
                  </h4>
                  <ul className="space-y-3">
                    {selectedItemData.content.actionItems.map((action, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-trailguide-sage rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-trailguide-slate">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Special Content for Content Strategy */}
              {selectedItemData.id === 'content-strategy' && (
                <div className="border-t border-trailguide-sage/30 pt-6 mb-6">
                  <h4 className="text-lg font-semibold text-trailguide-neutral mb-4">
                    Interactive Content Planning Tool
                  </h4>
                  <ContentStrategyTool />
                </div>
              )}

              {/* AI Meeting Agent */}
              <div className="border-t border-trailguide-sage/30 pt-6 mb-6">
                <h4 className="text-lg font-semibold text-trailguide-neutral mb-4">
                  AI Meeting Assistant
                </h4>
                <MeetingAgent 
                  agendaItem={selectedItemData.title}
                  itemId={selectedItemData.id}
                />
              </div>

              {/* Notes Section */}
              <div className="border-t border-trailguide-sage/30 pt-6">
                <h4 className="text-lg font-semibold text-trailguide-neutral mb-4">
                  Manual Notes & Understanding
                </h4>
                <Textarea
                  placeholder="Record additional notes, decisions, and understanding from this discussion..."
                  value={notes[selectedItemData.id] || ''}
                  onChange={(e) => handleNotesChange(selectedItemData.id, e.target.value)}
                  className="min-h-[120px] border-2 border-trailguide-sage/30 focus:border-trailguide-evergreen resize-none"
                />
                <p className="text-sm text-trailguide-slate mt-2">
                  Use this for additional notes beyond what the AI agent captures
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Strategic Decision: Substack vs TrailGuide */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Strategic Decision: Substack vs. All-In Digital Publishing
                </h3>
                <p className="text-gray-600">
                  Why scattered content hurts when concentrated ownership wins
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-blue-600" />
                  The Real Choice Alan Faces
                </h4>
                <p className="text-gray-700 mb-4">
                  This isn't <strong>Substack vs. Nothing Digital</strong> (which is how it sometimes sounds). 
                  This is <strong>Substack + AlanHirsch.org</strong> vs. <strong>All-In Publishing Through AlanHirsch.org</strong>.
                </p>
                <p className="text-gray-700">
                  The question is: Do you want to split your digital presence across platforms, or build 
                  everything on the foundation that becomes your network hub for amplifying other thought leaders?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* TrailGuide Advantages */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    TrailGuide All-In Approach
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Complete Digital Publishing Platform</strong> - Not just newsletters, 
                        but courses, memberships, speaking bookings, media kits, everything
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>100% Ownership</strong> - Your content, your audience, your revenue, 
                        your platform that you control completely
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Similar Cost, 50k+ Value</strong> - Get a complete platform plus 
                        $50,000 in digital products and services included
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Network Foundation</strong> - Becomes the hub for amplifying other 
                        thought leaders and building trusted digital community
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Concentrated Link Juice</strong> - All SEO, social signals, 
                        and digital authority flows to YOUR domain
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Split Approach Risks */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="font-semibold text-orange-900 mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Substack + AlanHirsch.org Risks
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Diluted Focus</strong> - Energy split between two platforms 
                        when consistency and momentum are everything
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Scattered Ownership</strong> - Audience and authority divided 
                        across platforms you don't control
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>"New Year's Resolution" Risk</strong> - Like bad diets, 
                        split content strategies often die after 2 months
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Limited Monetization</strong> - Substack only handles 
                        newsletters, not courses, consulting, events, or premium content
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>Trust Signal Weakness</strong> - In a zero-trust digital world, 
                        scattered presence looks less authoritative
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  The Community & Trust Advantage
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Audience Perspective</h5>
                    <p className="text-gray-700 text-sm mb-3">
                      People are more likely to attend a party where 5 of their favorite thought leaders 
                      are talking than one with just 2. Your platform becomes the gathering place.
                    </p>
                    <p className="text-gray-700 text-sm">
                      In a world where digital trust defaults to zero, concentrated authority and 
                      community signals matter more than ever.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Creator Perspective</h5>
                    <p className="text-gray-700 text-sm mb-3">
                      Content marketing is hard. It's lonely. It dies like New Year's resolutions 
                      without community, accountability, and shared momentum.
                    </p>
                    <p className="text-gray-700 text-sm">
                      This brings <strong>communitas</strong> and even <strong>scenius</strong> 
                      into your publishing strategy—making it sustainable and powerful.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Rocket className="h-5 w-5 mr-2 text-blue-400" />
                  Bottom Line: Zero Downside, All Upside
                </h4>
                <p className="mb-4">
                  There is <strong>no downside</strong> to going all-in with the TrailGuide Thought Leader + 
                  Multi-Leader Community vision. The downside to adding Substack is dilution at precisely 
                  the moment when concentration and ownership are your competitive advantages.
                </p>
                <p className="text-blue-200">
                  <strong>The future belongs to thought leaders who band together</strong> for link juice 
                  (pragmatically) and prophetic necessity (spiritually) in a world that desperately needs 
                  trusted human signals online.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Summary Section */}
        <Card className="bg-gradient-to-r from-trailguide-sage/10 to-trailguide-evergreen/10 border-trailguide-evergreen/20">
          <div className="p-8">
            <h3 className="text-xl font-bold text-trailguide-neutral mb-4">
              Meeting Summary
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-3">Items Discussed</h4>
                <p className="text-trailguide-slate">
                  {Object.keys(notes).length} of {FLOW_ITEMS.length} items have notes
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-trailguide-neutral mb-3">Next Steps</h4>
                <p className="text-trailguide-slate">
                  Review strategic decisions and prioritize action items for immediate implementation
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
