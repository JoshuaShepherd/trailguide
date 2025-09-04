'use client';

import React, { useState, createContext, useContext, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

/* Lightweight in-file RadioGroup implementation to replace missing module:
   - RadioGroup provides a consistent name and onValueChange handler via context
   - RadioGroupItem renders a standard radio input that integrates with the existing markup
*/
type RadioGroupContextType = {
  name: string;
  value: string;
  onValueChange: (v: string) => void;
};
const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

export function RadioGroup({
  value,
  onValueChange,
  children
}: {
  value: string;
  onValueChange: (v: string) => void;
  children: React.ReactNode;
}) {
  const name = useMemo(() => 'rg-' + Math.random().toString(36).slice(2), []);
  return (
    <RadioGroupContext.Provider value={{ name, value, onValueChange }}>
      <div role="radiogroup">{children}</div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({ value, id }: { value: string; id?: string }) {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) return null;
  return (
    <input
      type="radio"
      name={ctx.name}
      id={id}
      value={value}
      checked={ctx.value === value}
      onChange={() => ctx.onValueChange(value)}
      className="h-4 w-4"
    />
  );
}

/* Local lightweight Checkbox replacement because '@/components/ui/checkbox' is missing.
   Controlled Checkbox props:
   - checked: boolean
   - onCheckedChange: (checked: boolean) => void
   - id?: string
*/
export function Checkbox({
  id,
  checked,
  onCheckedChange,
  className
}: {
  id?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className={className || 'h-4 w-4'}
      aria-checked={checked}
    />
  );
}

import Link from 'next/link';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Users,
  Target,
  TrendingUp,
  Heart,
  X,
  Save,
  Eye,
  HelpCircle,
  Star,
  AlertCircle
} from 'lucide-react';

interface FormData {
  // Core Identity
  platformGoal: string;
  targetAudience: string;
  existingAssets: string[];
  successMetrics: {
    revenue: string;
    audience: string;
    content: string;
    speaking: string;
  };
  toneAndFeel: {
    style: string;
    personality: string;
    inspiration: string;
  };
  avoidances: string[];
  
  // Content Strategy
  signatureMessage: string;
  commonQuestions: string[];
  naturalFormats: string[];
  highEngagement: string;
  unlimitedResources: string;
  
  // Business Model
  revenuePreferences: string[];
  pricingComfort: string;
  monthlyGoal: string;
  
  // Contact Info
  name: string;
  email: string;
  website: string;
  phone: string;
}

const initialFormData: FormData = {
  platformGoal: '',
  targetAudience: '',
  existingAssets: [],
  successMetrics: {
    revenue: '',
    audience: '',
    content: '',
    speaking: ''
  },
  toneAndFeel: {
    style: '',
    personality: '',
    inspiration: ''
  },
  avoidances: [],
  signatureMessage: '',
  commonQuestions: [],
  naturalFormats: [],
  highEngagement: '',
  unlimitedResources: '',
  revenuePreferences: [],
  pricingComfort: '',
  monthlyGoal: '',
  name: '',
  email: '',
  website: '',
  phone: ''
};

export default function DiscoveryPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sections = [
    'Contact Information',
    'Core Identity Questions',
    'Content Strategy',
    'Business Model Alignment',
    'Review & Submit'
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedFormData = (parent: keyof FormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field as keyof FormData] as string[];
      const newArray = currentArray.includes(value) 
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend
    console.log('Form Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-trailguide-evergreen" />
            </div>
            <h1 className="text-3xl font-bold text-trailguide-neutral mb-4">Discovery Submitted Successfully!</h1>
            <p className="text-trailguide-slate mb-8">
              Thank you for providing detailed information about your vision. We&apos;ll review your responses 
              and reach out within 24 hours to schedule your strategy session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                <Link href="/intake">Return to Intake Process</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/template">Explore Demo While You Wait</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/intake">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Overview
                </Link>
              </Button>
              <div>
                <h1 className="text-xl font-bold text-trailguide-neutral">Discovery & Vision</h1>
                <p className="text-sm text-trailguide-slate">Phase 1 - Strategic Foundation</p>
              </div>
            </div>
            <Badge variant="secondary">
              Section {currentSection + 1} of {sections.length}
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {sections.map((section, index) => (
              <div
                key={section}
                className={`flex-1 ${index < sections.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <div className={`text-center px-2 ${
                  index === currentSection 
                    ? 'text-trailguide-evergreen font-medium' 
                    : index < currentSection 
                      ? 'text-gray-600' 
                      : 'text-gray-400'
                }`}>
                  <div className={`w-6 h-6 rounded-full mx-auto mb-2 flex items-center justify-center text-sm ${
                    index === currentSection
                      ? 'bg-trailguide-evergreen text-white'
                      : index < currentSection
                        ? 'bg-gray-600 text-white'
                        : 'bg-gray-300 text-gray-500'
                  }`}>
                    {index < currentSection ? <CheckCircle className="h-4 w-4" /> : index + 1}
                  </div>
                  <div className="text-xs">{section}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Section 0: Contact Information */}
          {currentSection === 0 && (
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-trailguide-neutral mb-2">Let&apos;s Get to Know You</h2>
                  <p className="text-trailguide-slate">
                    Basic contact information so we can reach you throughout the process.
                  </p>
                </div>

                <div className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-trailguide-neutral">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-trailguide-neutral">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-sm font-medium text-trailguide-neutral">
                      Current Website/Platform
                    </Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => updateFormData('website', e.target.value)}
                      placeholder="https://yourwebsite.com (if you have one)"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-trailguide-neutral">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="(555) 123-4567 (optional)"
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 1: Core Identity Questions */}
          {currentSection === 1 && (
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-trailguide-neutral mb-2">The Big Six Questions</h2>
                  <p className="text-trailguide-slate">
                    These core questions help us understand your vision and build the right platform for your mission.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Question 1 */}
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      1. What&apos;s the first thing you want to put into the world through this platform? *
                    </Label>
                    <div className="mb-4">
                      <p className="text-sm text-trailguide-slate mb-3">Consider:</p>
                      <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                        <li>• Is it a specific book/course/series you&apos;re working on?</li>
                        <li>• New content you want to create?</li>
                        <li>• Existing content you want to digitize and expand?</li>
                      </ul>
                    </div>
                    <Textarea
                      value={formData.platformGoal}
                      onChange={(e) => updateFormData('platformGoal', e.target.value)}
                      placeholder="Describe what you most want to share with the world..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  {/* Question 2 */}
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      2. Who do you most want to reach right now? *
                    </Label>
                    <div className="mb-4">
                      <p className="text-sm text-trailguide-slate mb-3">Think about:</p>
                      <ul className="text-sm text-trailguide-slate space-y-1 ml-4">
                        <li>• Primary audience (demographics, psychographics, current challenges)</li>
                        <li>• Where do they currently find you? (social, conferences, books)</li>
                        <li>• What transformation are you trying to create in their lives/organizations?</li>
                      </ul>
                    </div>
                    <Textarea
                      value={formData.targetAudience}
                      onChange={(e) => updateFormData('targetAudience', e.target.value)}
                      placeholder="Describe your ideal audience and the transformation you want to create..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  {/* Question 3 */}
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      3. What already exists that we should build on?
                    </Label>
                    <p className="text-sm text-trailguide-slate mb-4">Select all that apply:</p>
                    <div className="space-y-3">
                      {[
                        'Books published or in progress',
                        'Speaking topics and presentations',
                        'Social media presence',
                        'Email lists',
                        'Courses or educational content',
                        'Communities or groups',
                        'Partnerships and endorsements',
                        'Podcast or video content',
                        'Research or academic work',
                        'Consulting or coaching practice'
                      ].map(asset => (
                        <div key={asset} className="flex items-center space-x-2">
                          <Checkbox
                            id={asset}
                            checked={formData.existingAssets.includes(asset)}
                            onCheckedChange={() => handleArrayToggle('existingAssets', asset)}
                          />
                          <Label htmlFor={asset} className="text-sm">{asset}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      4. What does success look like in 3 months? *
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="revenue" className="text-sm font-medium">Revenue targets</Label>
                        <Input
                          id="revenue"
                          value={formData.successMetrics.revenue}
                          onChange={(e) => updateNestedFormData('successMetrics', 'revenue', e.target.value)}
                          placeholder="e.g., $5,000/month"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="audience" className="text-sm font-medium">Audience growth</Label>
                        <Input
                          id="audience"
                          value={formData.successMetrics.audience}
                          onChange={(e) => updateNestedFormData('successMetrics', 'audience', e.target.value)}
                          placeholder="e.g., 1,000 subscribers"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="content" className="text-sm font-medium">Content production</Label>
                        <Input
                          id="content"
                          value={formData.successMetrics.content}
                          onChange={(e) => updateNestedFormData('successMetrics', 'content', e.target.value)}
                          placeholder="e.g., 2 posts/week"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="speaking" className="text-sm font-medium">Speaking/partnerships</Label>
                        <Input
                          id="speaking"
                          value={formData.successMetrics.speaking}
                          onChange={(e) => updateNestedFormData('successMetrics', 'speaking', e.target.value)}
                          placeholder="e.g., 5 speaking gigs"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      5. What tone & feel do you want?
                    </Label>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Communication Style</Label>
                        <RadioGroup 
                          value={formData.toneAndFeel.style} 
                          onValueChange={(value: string) => updateNestedFormData('toneAndFeel', 'style', value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="authoritative" id="authoritative" />
                            <Label htmlFor="authoritative">Authoritative & Expert</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="conversational" id="conversational" />
                            <Label htmlFor="conversational">Conversational & Approachable</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="academic" id="academic" />
                            <Label htmlFor="academic">Academic & Research-Based</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="practical" id="practical" />
                            <Label htmlFor="practical">Practical & Action-Oriented</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Brand Personality</Label>
                        <RadioGroup 
                          value={formData.toneAndFeel.personality} 
                          onValueChange={(value: string) => updateNestedFormData('toneAndFeel', 'personality', value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="personal" id="personal" />
                            <Label htmlFor="personal">Personal & Human-Centered</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="institutional" id="institutional" />
                            <Label htmlFor="institutional">Institutional & Professional</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="movement" id="movement" />
                            <Label htmlFor="movement">Movement & Community-Focused</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label htmlFor="inspiration" className="text-sm font-medium">Visual Inspiration</Label>
                        <Input
                          id="inspiration"
                          value={formData.toneAndFeel.inspiration}
                          onChange={(e) => updateNestedFormData('toneAndFeel', 'inspiration', e.target.value)}
                          placeholder="Websites, brands, or visual styles you admire..."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 6 */}
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      6. What do you absolutely NOT want?
                    </Label>
                    <p className="text-sm text-trailguide-slate mb-4">Select any concerns:</p>
                    <div className="space-y-3">
                      {[
                        'Generic or template-looking design',
                        'Technical complexity that overwhelms me',
                        'Competitor approaches I want to avoid',
                        'Revenue models that feel pushy or misaligned',
                        'Content formats that don\'t fit my strengths',
                        'Social media dependency',
                        'High maintenance requirements',
                        'Impersonal or corporate feel'
                      ].map(avoidance => (
                        <div key={avoidance} className="flex items-center space-x-2">
                          <Checkbox
                            id={avoidance}
                            checked={formData.avoidances.includes(avoidance)}
                            onCheckedChange={() => handleArrayToggle('avoidances', avoidance)}
                          />
                          <Label htmlFor={avoidance} className="text-sm">{avoidance}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 2: Content Strategy */}
          {currentSection === 2 && (
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-trailguide-neutral mb-2">Content Strategy</h2>
                  <p className="text-trailguide-slate">
                    Understanding your content strengths and patterns helps us optimize your platform for maximum impact.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      What&apos;s your signature message or framework?
                    </Label>
                    <Textarea
                      value={formData.signatureMessage}
                      onChange={(e) => updateFormData('signatureMessage', e.target.value)}
                      placeholder="Describe the core message, methodology, or framework you're known for..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      What questions do people always ask you?
                    </Label>
                    <p className="text-sm text-trailguide-slate mb-4">Select common question categories:</p>
                    <div className="space-y-3">
                      {[
                        'How to get started in your field',
                        'Common mistakes to avoid',
                        'Advanced strategies or techniques',
                        'Industry trends and predictions',
                        'Personal journey and lessons learned',
                        'Tool and resource recommendations',
                        'Case studies and examples',
                        'Overcoming specific challenges'
                      ].map(question => (
                        <div key={question} className="flex items-center space-x-2">
                          <Checkbox
                            id={question}
                            checked={formData.commonQuestions.includes(question)}
                            onCheckedChange={() => handleArrayToggle('commonQuestions', question)}
                          />
                          <Label htmlFor={question} className="text-sm">{question}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      What content do you create most naturally?
                    </Label>
                    <div className="space-y-3">
                      {[
                        'Long-form writing and articles',
                        'Short-form posts and insights',
                        'Video content and presentations',
                        'Podcast or audio content',
                        'Visual content and infographics',
                        'Interactive workshops or teaching',
                        'Case studies and research',
                        'Personal stories and experiences'
                      ].map(format => (
                        <div key={format} className="flex items-center space-x-2">
                          <Checkbox
                            id={format}
                            checked={formData.naturalFormats.includes(format)}
                            onCheckedChange={() => handleArrayToggle('naturalFormats', format)}
                          />
                          <Label htmlFor={format} className="text-sm">{format}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      What formats have generated the most engagement for you?
                    </Label>
                    <Textarea
                      value={formData.highEngagement}
                      onChange={(e) => updateFormData('highEngagement', e.target.value)}
                      placeholder="Describe your most successful content pieces and what made them work..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      What would you create if you had unlimited time and resources?
                    </Label>
                    <Textarea
                      value={formData.unlimitedResources}
                      onChange={(e) => updateFormData('unlimitedResources', e.target.value)}
                      placeholder="Dream big - what's your ultimate content or educational vision..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 3: Business Model */}
          {currentSection === 3 && (
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-trailguide-neutral mb-2">Business Model Alignment</h2>
                  <p className="text-trailguide-slate">
                    Understanding your revenue preferences helps us design the right monetization strategy.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      Revenue Preferences
                    </Label>
                    <p className="text-sm text-trailguide-slate mb-4">Select all that interest you:</p>
                    <div className="space-y-3">
                      {[
                        'Subscription/membership (recurring community access)',
                        'Course sales (one-time digital products)',
                        'Coaching/consulting (high-touch services)',
                        'Speaking bookings (platform as marketing tool)',
                        'Book sales (traditional + direct)',
                        'Corporate partnerships (sponsored content, collaborations)',
                        'Workshop/event hosting',
                        'Affiliate marketing',
                        'Digital product sales (templates, tools)',
                        'Community platform (paid access)'
                      ].map(revenue => (
                        <div key={revenue} className="flex items-center space-x-2">
                          <Checkbox
                            id={revenue}
                            checked={formData.revenuePreferences.includes(revenue)}
                            onCheckedChange={() => handleArrayToggle('revenuePreferences', revenue)}
                          />
                          <Label htmlFor={revenue} className="text-sm">{revenue}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      Pricing Philosophy
                    </Label>
                    <RadioGroup 
                      value={formData.pricingComfort} 
                      onValueChange={(value: string) => updateFormData('pricingComfort', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium">Premium pricing that reflects my expertise level</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate">Moderate pricing with sliding scale options</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="accessible" id="accessible" />
                        <Label htmlFor="accessible">Accessible pricing to reach broader audience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mixed" id="mixed" />
                        <Label htmlFor="mixed">Mixed model (free content + premium offerings)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="monthlyGoal" className="text-lg font-semibold text-trailguide-neutral mb-3 block">
                      Target Monthly Recurring Revenue Goal
                    </Label>
                    <Input
                      id="monthlyGoal"
                      value={formData.monthlyGoal}
                      onChange={(e) => updateFormData('monthlyGoal', e.target.value)}
                      placeholder="e.g., $10,000/month within 12 months"
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 4: Review */}
          {currentSection === 4 && (
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <h2 className="text-2xl font-bold text-trailguide-neutral mb-2">Review & Submit</h2>
                  <p className="text-trailguide-slate">
                    Please review your responses before submitting. You can go back to make changes if needed.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-trailguide-neutral mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Website:</strong> {formData.website || 'Not provided'}</p>
                      <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-trailguide-neutral mb-3">Platform Vision</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Primary Goal:</strong> {formData.platformGoal.substring(0, 100)}...</p>
                      <p><strong>Target Audience:</strong> {formData.targetAudience.substring(0, 100)}...</p>
                      <p><strong>Existing Assets:</strong> {formData.existingAssets.length} selected</p>
                      <p><strong>Revenue Preferences:</strong> {formData.revenuePreferences.length} selected</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      <h3 className="font-semibold text-amber-800">What Happens Next?</h3>
                    </div>
                    <div className="text-sm text-amber-700 space-y-2">
                      <p>1. We&apos;ll review your responses within 24 hours</p>
                      <p>2. Schedule a 90-minute strategy session to dive deeper</p>
                      <p>3. Begin Phase 2 research and analysis</p>
                      <p>4. Create your custom platform strategy brief</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={prevSection}
              disabled={currentSection === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="text-sm text-trailguide-slate">
              {currentSection + 1} of {sections.length}
            </div>

            {currentSection < sections.length - 1 ? (
              <Button onClick={nextSection}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                disabled={!formData.name || !formData.email || !formData.platformGoal}
              >
                Submit Discovery
                <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
