import { KitConfig } from '../types/kit';

export const enhancedCommunicationsKit: KitConfig = {
  slug: 'communications',
  name: 'Communications & Marketing',
  stage: 'Adoption',
  description: 'Amplify your mission with authentic, engaging communications that drive action.',
  colorAccent: 'violet',
  
  // Comprehensive KPI tracking
  kpis: [
    { id: 'sessions', label: 'Monthly Sessions', value: 12400, delta: 8.7, period: '30d', format: 'number' },
    { id: 'ctr', label: 'Newsletter CTR', value: '3.2%', delta: 1.1, period: '30d', format: 'percent' },
    { id: 'social', label: 'Social Reach', value: 28500, delta: 15.3, period: '30d', format: 'number' },
    { id: 'engagement', label: 'Engagement Rate', value: '4.8%', delta: 2.4, period: '30d', format: 'percent' },
    { id: 'cost_per_action', label: 'Cost per Action', value: '$2.14', delta: -12.3, period: '30d', format: 'currency' },
    { id: 'brand_mentions', label: 'Brand Mentions', value: 147, delta: 22.1, period: '7d', format: 'number' },
    { id: 'email_growth', label: 'List Growth', value: '2.3%', delta: 0.8, period: '30d', format: 'percent' },
    { id: 'video_completion', label: 'Video Completion', value: '68%', delta: 5.2, period: '30d', format: 'percent' }
  ],
  
  // Enhanced quick actions with better descriptions
  quickActions: [
    { 
      id: 'campaign_brief', 
      label: 'Campaign Strategy Brief', 
      description: 'Generate comprehensive campaign brief from mission focus or current initiative',
      icon: 'Lightbulb', 
      handler: 'agent', 
      promptId: 'comms_brief_v2',
      inputs: { 
        campaign_type: 'awareness|fundraising|advocacy',
        audience_segment: 'donors|volunteers|beneficiaries|general'
      }
    },
    { 
      id: 'content_calendar', 
      label: '30-Day Content Calendar', 
      description: 'Create themed content calendar with post ideas, timing, and channel strategy',
      icon: 'Calendar', 
      handler: 'agent', 
      promptId: 'content_cal_v2' 
    },
    { 
      id: 'story_repurpose', 
      label: 'Repurpose Success Story', 
      description: 'Transform impact story into multiple formats: social, newsletter, blog, press',
      icon: 'Repeat', 
      handler: 'agent', 
      promptId: 'story_repurpose_v2' 
    },
    { 
      id: 'social_series', 
      label: 'Social Media Series', 
      description: 'Generate cohesive 5-7 post series around theme with optimal timing',
      icon: 'Share', 
      handler: 'agent', 
      promptId: 'social_series_v2' 
    },
    { 
      id: 'press_release', 
      label: 'Press Release Draft', 
      description: 'Professional press release with compelling hook and media contact strategy',
      icon: 'Newspaper', 
      handler: 'agent', 
      promptId: 'press_release_v2' 
    },
    { 
      id: 'crisis_response', 
      label: 'Crisis Response Plan', 
      description: 'Draft response strategy and key messages for sensitive situations',
      icon: 'Shield', 
      handler: 'agent', 
      promptId: 'crisis_response_v1' 
    },
    { 
      id: 'donor_newsletter', 
      label: 'Donor Newsletter', 
      description: 'Craft engaging newsletter balancing impact stories with clear giving opportunities',
      icon: 'Mail', 
      handler: 'agent', 
      promptId: 'donor_newsletter_v1' 
    },
    { 
      id: 'grant_narrative', 
      label: 'Grant Narrative', 
      description: 'Transform program description into compelling grant application narrative',
      icon: 'FileText', 
      handler: 'agent', 
      promptId: 'grant_narrative_v1' 
    }
  ],
  
  // Data visualizations and reports
  snapshots: [
    { 
      id: 'channel_performance', 
      type: 'chart', 
      title: 'Channel Performance Trends', 
      source: 'static',
      data: [
        { month: 'Jan', website: 7800, email: 3200, social: 24500, blog: 4800 },
        { month: 'Feb', website: 8100, email: 3350, social: 26200, blog: 5200 },
        { month: 'Mar', website: 8200, email: 3400, social: 28500, blog: 5600 }
      ]
    },
    {
      id: 'content_performance',
      type: 'table',
      title: 'Top Performing Content',
      source: 'static',
      columns: ['Title', 'Type', 'Views', 'Engagement', 'Conversions'],
      data: [
        { title: 'Spring Impact Report', type: 'Blog', views: 2340, engagement: '6.2%', conversions: 23 },
        { title: 'Volunteer Spotlight: Maria', type: 'Social', views: 4150, engagement: '8.9%', conversions: 12 },
        { title: 'Monthly Newsletter - March', type: 'Email', views: 3400, engagement: '3.2%', conversions: 18 }
      ]
    },
    {
      id: 'audience_insights',
      type: 'chart',
      title: 'Audience Demographics',
      source: 'static',
      data: [
        { segment: 'Long-term Donors', size: 1240, engagement: 7.2, conversion: 4.8 },
        { segment: 'Recent Volunteers', size: 890, engagement: 9.1, conversion: 2.3 },
        { segment: 'Newsletter Subscribers', size: 3400, engagement: 3.2, conversion: 1.1 },
        { segment: 'Social Followers', size: 8200, engagement: 4.8, conversion: 0.7 }
      ]
    }
  ],
  
  // Learning resources specific to communications
  learn: [
    { label: 'TrailHike: Digital Storytelling Mastery', href: '/learn/hikes/digital-storytelling' },
    { label: 'Content Planning & Strategy Guide', href: '/learn/guides/content-planning' },
    { label: 'Crisis Communications Playbook', href: '/learn/playbooks/crisis-communications' },
    { label: 'Donor Communication Best Practices', href: '/learn/guides/donor-communications' },
    { label: 'Social Media for Nonprofits', href: '/learn/courses/social-media-nonprofits' },
    { label: 'Email Marketing Optimization', href: '/learn/guides/email-optimization' }
  ],
  
  // Comprehensive best practices and guardrails
  guardrails: [
    { 
      title: 'Dignified Storytelling', 
      body: 'Always center beneficiary agency and avoid tokenizing communities. Get explicit consent for photos and stories. Focus on strength and resilience, not just need.' 
    },
    { 
      title: 'Fact-Checking & Accuracy', 
      body: 'Verify all claims, provide sources for statistics, and clearly distinguish between goals and achievements. When in doubt, under-promise and over-deliver.' 
    },
    { 
      title: 'Donor Privacy', 
      body: 'Never share donor information without explicit consent. Be thoughtful about donor recognition levels and respect privacy preferences.' 
    },
    { 
      title: 'Cultural Sensitivity', 
      body: 'Review content through lens of cultural humility. Avoid saviorism narratives and ensure authentic representation of communities served.' 
    },
    { 
      title: 'Accessibility', 
      body: 'Include alt text for images, use clear fonts and adequate contrast, provide captions for videos, and write in plain language.' 
    },
    { 
      title: 'Legal Compliance', 
      body: 'Ensure all communications comply with fundraising regulations, include required disclaimers, and follow email marketing laws (CAN-SPAM, GDPR).' 
    }
  ],
  
  // Integration hints for data sources
  dataBindings: {
    'website_analytics': 'google_analytics',
    'email_metrics': 'mailchimp',
    'social_media': 'hootsuite',
    'donor_data': 'salesforce_npsp',
    'content_calendar': 'notion'
  }
};

// Export existing kit for now, but this shows the enhanced structure
export { communicationsKit } from './additional1';
