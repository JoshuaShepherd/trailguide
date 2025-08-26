import { KitConfig } from '../types/kit';

export const communicationsKit: KitConfig = {
  slug: 'communications',
  name: 'Communications & Marketing',
  stage: 'Adoption',
  description: 'Amplify your mission with authentic, engaging communications.',
  colorAccent: 'violet',
  kpis: [
    { id: 'sessions', label: 'Monthly Sessions', value: 12400, delta: 8.7, period: '30d', format: 'number' },
    { id: 'ctr', label: 'Newsletter CTR', value: '3.2%', delta: 1.1, period: '30d', format: 'percent' },
    { id: 'social', label: 'Social Reach', value: 28500, delta: 15.3, period: '30d', format: 'number' },
    { id: 'engagement', label: 'Engagement Rate', value: '4.8%', delta: 2.4, period: '30d', format: 'percent' }
  ],
  quickActions: [
    { id: 'campaign_brief', label: 'Campaign brief from theme', icon: 'Lightbulb', handler: 'agent', promptId: 'comms_brief_v1' },
    { id: 'content_calendar', label: '30-day content calendar', icon: 'Calendar', handler: 'agent', promptId: 'content_cal_v1' },
    { id: 'story_repurpose', label: 'Repurpose success story', icon: 'Repeat', handler: 'agent', promptId: 'story_repurpose_v1' },
    { id: 'social_posts', label: 'Social media series', icon: 'Share', handler: 'agent', promptId: 'social_series_v1' },
    { id: 'press_release', label: 'Draft press release', icon: 'Newspaper', handler: 'agent', promptId: 'press_release_v1' }
  ],
  snapshots: [
    { 
      id: 'channel_performance', 
      type: 'chart', 
      title: 'Channel Performance', 
      source: 'static',
      data: [
        { channel: 'Website', sessions: 8200, conversions: 164, rate: 2.0 },
        { channel: 'Email', opens: 3400, clicks: 108, rate: 3.2 },
        { channel: 'Social Media', reach: 28500, engagement: 1368, rate: 4.8 },
        { channel: 'Blog', views: 5600, shares: 89, rate: 1.6 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Digital Storytelling', href: '/learn/hikes/digital-storytelling' },
    { label: 'Content Planning Strategies', href: '/learn/guides/content-planning' }
  ],
  guardrails: [
    { title: 'Dignified Storytelling', body: 'Center beneficiary agency and avoid tokenizing communities.' },
    { title: 'Accuracy', body: 'Fact-check all claims and provide sources for statistics.' }
  ]
};

export const programsKit: KitConfig = {
  slug: 'programs',
  name: 'Programs & Impact',
  stage: 'Optimization',
  description: 'Measure, improve, and communicate your program outcomes.',
  colorAccent: 'green',
  kpis: [
    { id: 'served', label: 'Participants Served', value: 1847, delta: 12.1, period: 'YTD', format: 'number' },
    { id: 'outcome_rate', label: 'Outcome Achievement', value: '73%', delta: 4.2, period: 'YTD', format: 'percent' },
    { id: 'cost_per', label: 'Cost per Outcome', value: 285, delta: -6.8, period: 'YTD', format: 'currency' },
    { id: 'satisfaction', label: 'Participant NPS', value: 64, delta: 8.1, period: '6m', format: 'number' }
  ],
  quickActions: [
    { id: 'logic_model', label: 'Draft logic model', icon: 'Workflow', handler: 'agent', promptId: 'logic_model_v1' },
    { id: 'survey_gen', label: 'Pre/post survey generation', icon: 'ClipboardList', handler: 'agent', promptId: 'survey_gen_v1' },
    { id: 'narrative_rollup', label: 'Monthly narrative rollup', icon: 'FileText', handler: 'agent', promptId: 'narrative_v1' },
    { id: 'outcome_analysis', label: 'Outcome trend analysis', icon: 'TrendingUp', handler: 'server', endpoint: '/api/kits/programs/analysis' },
    { id: 'impact_story', label: 'Impact story draft', icon: 'BookOpen', handler: 'agent', promptId: 'impact_story_v1' }
  ],
  snapshots: [
    { 
      id: 'outcome_dashboard', 
      type: 'chart', 
      title: 'Program Outcomes by Quarter', 
      source: 'static',
      data: [
        { quarter: 'Q1 2024', target: 180, achieved: 164, rate: 91 },
        { quarter: 'Q2 2024', target: 190, achieved: 182, rate: 96 },
        { quarter: 'Q3 2024', target: 185, achieved: 201, rate: 109 },
        { quarter: 'Q4 2024', target: 200, achieved: 146, rate: 73 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Outcome Measurement', href: '/learn/hikes/outcome-measurement' },
    { label: 'Logic Model Development', href: '/learn/guides/logic-models' }
  ],
  guardrails: [
    { title: 'Data Minimization', body: 'Collect only data necessary for program improvement.' },
    { title: 'Participant Consent', body: 'Ensure informed consent for all data collection and story sharing.' }
  ]
};

export const eventsKit: KitConfig = {
  slug: 'events',
  name: 'Events',
  stage: 'Adoption',
  description: 'Plan, execute, and maximize impact from your events.',
  colorAccent: 'orange',
  kpis: [
    { id: 'registrations', label: 'Event Registrations', value: 347, delta: 23.5, period: '30d', format: 'number' },
    { id: 'sponsor_revenue', label: 'Sponsor Revenue', value: 45000, delta: 18.2, period: 'YTD', format: 'currency' },
    { id: 'nps', label: 'Event NPS', value: 72, delta: 5.3, period: 'last event', format: 'number' },
    { id: 'conversion', label: 'Attendee → Donor', value: '12%', delta: 2.1, period: 'YTD', format: 'percent' }
  ],
  quickActions: [
    { id: 'timeline_gen', label: 'Event timeline generator', icon: 'Calendar', handler: 'agent', promptId: 'event_timeline_v1' },
    { id: 'sponsor_deck', label: 'Sponsor proposal deck', icon: 'Presentation', handler: 'agent', promptId: 'sponsor_deck_v1' },
    { id: 'post_event', label: 'Post-event recap pack', icon: 'FileBarChart', handler: 'server', endpoint: '/api/kits/events/recap' },
    { id: 'follow_up', label: 'Attendee follow-up sequence', icon: 'UserPlus', handler: 'agent', promptId: 'event_followup_v1' },
    { id: 'budget_tracker', label: 'Event budget template', icon: 'Calculator', handler: 'server', endpoint: '/api/kits/events/budget' }
  ],
  snapshots: [
    { 
      id: 'registrant_trends', 
      type: 'chart', 
      title: 'Registration Trends', 
      source: 'static',
      data: [
        { week: 'Week 1', registrations: 45, goal: 40 },
        { week: 'Week 2', registrations: 89, goal: 85 },
        { week: 'Week 3', registrations: 156, goal: 140 },
        { week: 'Week 4', registrations: 223, goal: 200 },
        { week: 'Week 5', registrations: 289, goal: 270 },
        { week: 'Week 6', registrations: 347, goal: 350 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Event Strategy', href: '/learn/hikes/event-strategy' },
    { label: 'Sponsor Stewardship Guide', href: '/learn/guides/sponsor-stewardship' }
  ],
  guardrails: [
    { title: 'Accessibility', body: 'Ensure all events are accessible and inclusive for all participants.' },
    { title: 'Clear Boundaries', body: 'Distinguish between donor cultivation and attendee experience messaging.' }
  ]
};
