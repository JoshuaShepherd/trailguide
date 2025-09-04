'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Mail, 
  Download, 
  BookOpen,
  Mic,
  Video,
  Users,
  Calendar,
  Award,
  MessageSquare,
  PenTool,
  DollarSign,
  CheckCircle2,
  X,
  HelpCircle,
  GripVertical,
  Bot,
  Target
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
}

interface ContentSelection {
  [key: string]: 'yes' | 'no' | 'maybe';
}

interface PricingTier {
  id: string;
  name: string;
  color: string;
  items: string[];
}

const CONTENT_OPTIONS: ContentItem[] = [
  // Core Publishing Streams
  { id: 'articles', title: 'Articles / Essays / Blog Posts', description: 'Written reflections, teaching notes, or public thought pieces', icon: FileText, category: 'Core Publishing Streams' },
  { id: 'newsletters', title: 'Newsletters', description: 'Serialized content delivered via email with optional free/paid tiers', icon: Mail, category: 'Core Publishing Streams' },
  { id: 'ebooks', title: 'E-Books & White Papers', description: 'Thematic collections or resources available for download', icon: Download, category: 'Core Publishing Streams' },
  { id: 'serialized-courses', title: 'Serialized Courses', description: 'Content released in lessons/chapters over weeks or months', icon: BookOpen, category: 'Core Publishing Streams' },
  
  // Audio / Video Channels
  { id: 'podcast', title: 'Podcast Episodes', description: 'Audio teaching, interviews, or guided reflections', icon: Mic, category: 'Audio / Video Channels' },
  { id: 'youtube', title: 'YouTube/Vimeo Channel', description: 'Long-form teaching, sermons, or visual content', icon: Video, category: 'Audio / Video Channels' },
  { id: 'short-video', title: 'Short-Form Video', description: 'Reels/TikToks/shorts that point back to the platform', icon: Video, category: 'Audio / Video Channels' },
  { id: 'webinars', title: 'Webinars / Live Streams', description: 'Real-time teaching, Q&A, or events', icon: Calendar, category: 'Audio / Video Channels' },
  
  // Learning & Training Products
  { id: 'online-courses', title: 'Online Courses', description: 'Structured, multi-module learning experiences (video + assignments)', icon: Award, category: 'Learning & Training Products' },
  { id: 'micro-courses', title: 'Micro-Courses / Mini-Modules', description: 'Smaller, affordable, 1-hour to 1-day teachings', icon: Award, category: 'Learning & Training Products' },
  { id: 'workbooks', title: 'Workbooks / Study Guides', description: 'PDF or interactive, downloadable companions to books or teachings', icon: PenTool, category: 'Learning & Training Products' },
  { id: 'certification', title: 'Certification Programs', description: 'Cohort-based training tied to expertise (e.g., missional leadership)', icon: Award, category: 'Learning & Training Products' },
  
  // Community Engagement
  { id: 'discussion-forum', title: 'Discussion Forum / Comments', description: 'Lightweight social layer within the platform', icon: MessageSquare, category: 'Community Engagement' },
  { id: 'private-community', title: 'Private Community (Discord/Slack)', description: 'Gated membership space for ongoing dialogue', icon: Users, category: 'Community Engagement' },
  { id: 'cohorts', title: 'Cohorts & Learning Communities', description: 'Guided small groups with accountability structures', icon: Users, category: 'Community Engagement' },
  { id: 'office-hours', title: 'Office Hours', description: 'Scheduled Q&A sessions or mentoring drop-ins', icon: Calendar, category: 'Community Engagement' },
  
  // Events & Experiences
  { id: 'workshops', title: 'Workshops', description: 'Paid or free, single-day interactive events', icon: Calendar, category: 'Events & Experiences' },
  { id: 'conferences', title: 'Conferences / Summits', description: 'Hybrid or virtual gatherings', icon: Calendar, category: 'Events & Experiences' },
  { id: 'retreats', title: 'Retreats', description: 'In-person immersive experiences tied to themes', icon: Calendar, category: 'Events & Experiences' },
  { id: 'book-launches', title: 'Book Launch Events', description: 'Online or in-person launch with live engagement', icon: Calendar, category: 'Events & Experiences' },
  
  // Interactive Content
  { id: 'quizzes', title: 'Quizzes / Assessments', description: 'e.g., "Where is your organization on the Trail Map?"', icon: HelpCircle, category: 'Interactive Content' },
  { id: 'ai-tools', title: 'AI-Powered Tools', description: 'Interactive agents that embody frameworks (digital guides, diagnostics)', icon: Bot, category: 'Interactive Content' },
  { id: 'surveys', title: 'Surveys / Polls', description: 'Audience insight collection that doubles as engagement', icon: HelpCircle, category: 'Interactive Content' },
  
  // Publications & Media
  { id: 'book-publishing', title: 'Book Publishing (Self-hosted)', description: 'Full-length works distributed digitally & print-on-demand', icon: BookOpen, category: 'Publications & Media' },
  { id: 'syndication', title: 'Article Syndication', description: 'Sharing essays with partner publications', icon: FileText, category: 'Publications & Media' },
  { id: 'devotionals', title: 'Devotionals / Daily Content', description: 'Short recurring practices, via email or app notifications', icon: Mail, category: 'Publications & Media' },
  
  // Membership & Subscription
  { id: 'free-tier', title: 'Free Tier Content', description: 'Articles/podcasts/newsletters as audience-building', icon: Users, category: 'Membership & Subscription' },
  { id: 'premium-tier', title: 'Premium Tier Content', description: 'Gated access to advanced teachings, videos, or downloads', icon: DollarSign, category: 'Membership & Subscription' },
  { id: 'inner-circle', title: 'Founders Circle / Inner Circle Membership', description: 'Higher tier with personal interaction', icon: Users, category: 'Membership & Subscription' },
  { id: 'corporate', title: 'Corporate / Institutional Memberships', description: 'Group licensing for seminaries, nonprofits, churches', icon: Users, category: 'Membership & Subscription' },
  
  // Speaking & Consulting
  { id: 'speaking', title: 'Speaking Requests', description: 'Intake forms for events, conferences, and workshops', icon: Mic, category: 'Speaking & Consulting' },
  { id: 'consulting', title: 'Consulting Services', description: 'Direct organizational advising (e.g., strategy sessions)', icon: Users, category: 'Speaking & Consulting' },
  { id: 'coaching', title: 'Coaching / Mentoring', description: '1:1 or group-based ongoing coaching', icon: Users, category: 'Speaking & Consulting' },
  
  // Philanthropic / Mission Engagement
  { id: 'donations', title: 'Donations & Giving', description: "Support broader mission or nonprofit ties", icon: DollarSign, category: 'Philanthropic / Mission Engagement' },
  { id: 'campaigns', title: 'Campaigns', description: 'Themed drives (e.g., to fund curriculum, to sponsor a movement)', icon: Target, category: 'Philanthropic / Mission Engagement' },
  { id: 'volunteer', title: 'Volunteer Pathways', description: 'Opportunities to serve aligned organizations', icon: Users, category: 'Philanthropic / Mission Engagement' }
];

const PRICING_TIERS: PricingTier[] = [
  { id: 'free', name: 'Free', color: 'bg-green-100 border-green-300 text-green-800', items: [] },
  { id: 'basic', name: 'Basic ($9-19/mo)', color: 'bg-blue-100 border-blue-300 text-blue-800', items: [] },
  { id: 'premium', name: 'Premium ($29-49/mo)', color: 'bg-purple-100 border-purple-300 text-purple-800', items: [] },
  { id: 'enterprise', name: 'Enterprise ($99+/mo)', color: 'bg-orange-100 border-orange-300 text-orange-800', items: [] }
];

export function ContentStrategyTool() {
  const [selections, setSelections] = useState<ContentSelection>({});
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>(PRICING_TIERS);
  const [showPricing, setShowPricing] = useState(false);
  
  const categories = [...new Set(CONTENT_OPTIONS.map(item => item.category))];
  
  const handleSelection = (itemId: string, choice: 'yes' | 'no' | 'maybe') => {
    setSelections(prev => ({
      ...prev,
      [itemId]: choice
    }));
  };

  const getSelectedItems = () => {
    return CONTENT_OPTIONS.filter(item => selections[item.id] === 'yes');
  };

  const getMaybeItems = () => {
    return CONTENT_OPTIONS.filter(item => selections[item.id] === 'maybe');
  };

  const moveToTier = (itemId: string, tierId: string) => {
    setPricingTiers(prev => prev.map(tier => ({
      ...tier,
      items: tier.id === tierId 
        ? [...tier.items.filter(id => id !== itemId), itemId]
        : tier.items.filter(id => id !== itemId)
    })));
  };

  const removeFromTier = (itemId: string) => {
    setPricingTiers(prev => prev.map(tier => ({
      ...tier,
      items: tier.items.filter(id => id !== itemId)
    })));
  };

  const proceedToPricing = () => {
    setShowPricing(true);
  };

  if (showPricing) {
    const selectedItems = getSelectedItems();
    const unassignedItems = selectedItems.filter(item => 
      !pricingTiers.some(tier => tier.items.includes(item.id))
    );

    return (
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-trailguide-evergreen" />
            Content Pricing Strategy
          </CardTitle>
          <p className="text-trailguide-slate">
            Drag and drop your selected content into appropriate pricing tiers
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Unassigned Items */}
          {unassignedItems.length > 0 && (
            <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="font-semibold mb-3 text-gray-700">Unassigned Content</h3>
              <div className="flex flex-wrap gap-2">
                {unassignedItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <Badge
                      key={item.id}
                      variant="outline"
                      className="cursor-pointer hover:bg-gray-100 p-2 flex items-center gap-2"
                      onClick={() => {/* Handle click to show tier options */}}
                    >
                      <Icon className="h-4 w-4" />
                      {item.title}
                      <GripVertical className="h-3 w-3 text-gray-400" />
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map(tier => (
              <div
                key={tier.id}
                className={`p-4 rounded-lg border-2 border-dashed min-h-[200px] ${tier.color}`}
              >
                <h3 className="font-semibold mb-3">{tier.name}</h3>
                <div className="space-y-2">
                  {tier.items.map(itemId => {
                    const item = CONTENT_OPTIONS.find(opt => opt.id === itemId);
                    if (!item) return null;
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemId}
                        className="bg-white p-2 rounded border flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span className="text-sm">{item.title}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromTier(itemId)}
                          className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    );
                  })}
                  {tier.items.length === 0 && (
                    <p className="text-sm opacity-60">Drop content here...</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Assignment Buttons for Unassigned Items */}
          {unassignedItems.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold">Quick Assignment</h3>
              {unassignedItems.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <div className="flex gap-2">
                      {pricingTiers.map(tier => (
                        <Button
                          key={tier.id}
                          size="sm"
                          variant="outline"
                          onClick={() => moveToTier(item.id, tier.id)}
                          className="text-xs"
                        >
                          {tier.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Standard Content Plan */}
          <Card className="bg-trailguide-evergreen/5 border-trailguide-evergreen/20">
            <CardHeader>
              <CardTitle className="text-trailguide-evergreen">Standard Content Plan (Baseline Best Practice)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-trailguide-evergreen mt-0.5" />
                  <span><strong>One free, recurring publishing stream</strong> (e.g., newsletter + podcast)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-trailguide-evergreen mt-0.5" />
                  <span><strong>One premium, gated stream</strong> (e.g., online course, cohort, or subscription archive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-trailguide-evergreen mt-0.5" />
                  <span><strong>Anchor product</strong> (e.g., book, flagship course, or signature event)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-trailguide-evergreen mt-0.5" />
                  <span><strong>Community element</strong> (forum, cohort, or group coaching for relational engagement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-trailguide-evergreen mt-0.5" />
                  <span><strong>Clear pathway to deeper investment</strong> (consulting, speaking, higher-tier membership)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button onClick={() => setShowPricing(false)} variant="outline">
              Back to Selection
            </Button>
            <Button className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              Finalize Content Strategy
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-6 w-6 text-trailguide-evergreen" />
          Content & Engagement Menu for Thought Leaders
        </CardTitle>
        <p className="text-trailguide-slate">
          Select which content types you want to include in your platform. Choose Yes/No/Maybe for each option.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {categories.map(category => {
          const categoryItems = CONTENT_OPTIONS.filter(item => item.category === category);
          
          return (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-trailguide-neutral border-b border-trailguide-border pb-2">
                {category}
              </h3>
              <div className="grid gap-4">
                {categoryItems.map(item => {
                  const Icon = item.icon;
                  const selection = selections[item.id];
                  
                  return (
                    <Card key={item.id} className={`transition-all ${
                      selection === 'yes' ? 'border-green-300 bg-green-50' :
                      selection === 'no' ? 'border-red-300 bg-red-50 opacity-50' :
                      selection === 'maybe' ? 'border-yellow-300 bg-yellow-50' :
                      'border-trailguide-border hover:border-trailguide-evergreen/50'
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <Icon className="h-5 w-5 text-trailguide-slate mt-0.5" />
                            <div>
                              <h4 className="font-medium text-trailguide-neutral mb-1">
                                {item.title}
                              </h4>
                              <p className="text-sm text-trailguide-slate">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant={selection === 'yes' ? 'default' : 'outline'}
                              onClick={() => handleSelection(item.id, 'yes')}
                              className={selection === 'yes' ? 'bg-green-600 hover:bg-green-700' : ''}
                            >
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              Yes
                            </Button>
                            <Button
                              size="sm"
                              variant={selection === 'maybe' ? 'default' : 'outline'}
                              onClick={() => handleSelection(item.id, 'maybe')}
                              className={selection === 'maybe' ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
                            >
                              <HelpCircle className="h-4 w-4 mr-1" />
                              Maybe
                            </Button>
                            <Button
                              size="sm"
                              variant={selection === 'no' ? 'default' : 'outline'}
                              onClick={() => handleSelection(item.id, 'no')}
                              className={selection === 'no' ? 'bg-red-600 hover:bg-red-700' : ''}
                            >
                              <X className="h-4 w-4 mr-1" />
                              No
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Summary and Next Steps */}
        <Card className="bg-trailguide-evergreen/5 border-trailguide-evergreen/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Object.values(selections).filter(s => s === 'yes').length}
                </div>
                <div className="text-sm text-trailguide-slate">Selected (Yes)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {Object.values(selections).filter(s => s === 'maybe').length}
                </div>
                <div className="text-sm text-trailguide-slate">Maybe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {Object.values(selections).filter(s => s === 'no').length}
                </div>
                <div className="text-sm text-trailguide-slate">Not Selected</div>
              </div>
            </div>

            {getSelectedItems().length > 0 && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-trailguide-neutral mb-2">Selected Content Types:</h4>
                  <div className="flex flex-wrap gap-2">
                    {getSelectedItems().map(item => (
                      <Badge key={item.id} className="bg-green-100 text-green-800">
                        {item.title}
                      </Badge>
                    ))}
                  </div>
                </div>

                {getMaybeItems().length > 0 && (
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-2">Maybe Items (for future consideration):</h4>
                    <div className="flex flex-wrap gap-2">
                      {getMaybeItems().map(item => (
                        <Badge key={item.id} variant="outline" className="border-yellow-300 text-yellow-700">
                          {item.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  onClick={proceedToPricing}
                  className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                  disabled={getSelectedItems().length === 0}
                >
                  Proceed to Pricing Strategy →
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
