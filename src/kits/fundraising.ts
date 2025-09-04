import { KitConfig } from '../types/kit';

export const fundraisingKit: KitConfig = {
  slug: 'fundraising',
  name: 'Library Fundraising & Development',
  stage: 'Optimization',
  description: 'Build sustainable support for library programs, collections, and services through strategic relationship building and community engagement.',
  colorAccent: 'emerald',
  kpis: [
    { id: 'mtd', label: 'MTD Revenue', value: 42150, delta: 8.3, period: '30d', format: 'currency' },
    { id: 'annual_fund', label: 'Annual Fund Progress', value: '67%', delta: 12.1, period: 'YTD', format: 'percent' },
    { id: 'ret', label: 'Donor Retention', value: '73%', delta: 4.2, period: 'YTD', format: 'percent' },
    { id: 'lybunt', label: 'LYBUNT Donors', value: 89, delta: -15.2, period: 'YTD', format: 'number' },
    { id: 'avgGift', label: 'Average Gift', value: '$127', delta: 2.8, period: '30d', format: 'currency' },
    { id: 'major_gifts', label: 'Major Gifts Pipeline', value: '$125,000', delta: 18.7, period: '90d', format: 'currency' },
    { id: 'events', label: 'Event Revenue', value: '$8,400', delta: -3.1, period: '30d', format: 'currency' },
    { id: 'corporate', label: 'Corporate Partners', value: 12, delta: 20.0, period: 'YTD', format: 'number' }
  ],
  quickActions: [
    { 
      id: 'library_impact_story', 
      label: 'Craft Library Impact Story', 
      description: 'Transform program data into compelling donor story highlighting community benefit',
      icon: 'BookOpen', 
      handler: 'agent', 
      promptId: 'library_impact_story_v1',
      inputs: {
        program_focus: 'children|teens|adults|seniors|literacy|digital|research',
        story_type: 'individual_impact|community_wide|program_expansion'
      }
    },
    { 
      id: 'seasonal_appeal', 
      label: 'Seasonal Appeal Letter', 
      description: 'Create targeted appeal for specific library needs (Summer Reading, Technology, etc.)',
      icon: 'CalendarDays', 
      handler: 'agent', 
      promptId: 'seasonal_appeal_v1',
      inputs: {
        season: 'spring|summer|fall|winter|year_end',
        focus_area: 'programs|collections|technology|facility|general'
      }
    },
    { 
      id: 'corporate_proposal', 
      label: 'Corporate Partnership Proposal', 
      description: 'Draft business case for local corporate sponsorship or partnership',
      icon: 'Building2', 
      handler: 'agent', 
      promptId: 'corporate_proposal_v1',
      inputs: {
        partnership_type: 'sponsorship|employee_engagement|matching_gift|in_kind',
        program_alignment: 'workforce_development|literacy|community_space|technology'
      }
    },
    { 
      id: 'grant_narrative', 
      label: 'Grant Application Narrative', 
      description: 'Convert program description into compelling grant proposal narrative',
      icon: 'FileText', 
      handler: 'agent', 
      promptId: 'grant_narrative_v1',
      inputs: {
        funder_type: 'foundation|government|corporate|community',
        grant_focus: 'capacity_building|program_expansion|capital|technology'
      }
    },
    { 
      id: 'donor_thank_you', 
      label: 'Personalized Thank You', 
      description: 'Create meaningful appreciation message showing specific impact of their gift',
      icon: 'Heart', 
      handler: 'agent', 
      promptId: 'donor_thank_you_v1',
      inputs: {
        donor_segment: 'first_time|recurring|major_gift|volunteer|board',
        gift_designation: 'general|programs|collections|capital|memorial'
      }
    },
    { 
      id: 'lybunt_outreach', 
      label: 'LYBUNT Re-engagement Campaign', 
      description: 'Craft series to reconnect with lapsed donors using library updates',
      icon: 'UserPlus', 
      handler: 'agent', 
      promptId: 'lybunt_outreach_v1',
      inputs: {
        lapse_period: 'one_year|two_years|three_plus_years',
        approach: 'gentle_update|program_focus|urgent_need|nostalgia'
      }
    },
    { 
      id: 'board_ask_prep', 
      label: 'Board Member Ask Preparation', 
      description: 'Prepare talking points and materials for board member to make personal ask',
      icon: 'Users', 
      handler: 'agent', 
      promptId: 'board_ask_prep_v1',
      inputs: {
        prospect_relationship: 'friend|colleague|community_leader|business_contact',
        ask_amount: 'under_500|500_to_2500|2500_to_10000|over_10000'
      }
    },
    { 
      id: 'event_follow_up', 
      label: 'Event Follow-up Strategy', 
      description: 'Convert event attendees into donors with strategic follow-up sequence',
      icon: 'Calendar', 
      handler: 'agent', 
      promptId: 'event_follow_up_v1',
      inputs: {
        event_type: 'book_sale|author_talk|gala|community_program|tour',
        attendee_type: 'new_prospect|existing_donor|volunteer|community_leader'
      }
    },
    { 
      id: 'memorial_tribute', 
      label: 'Memorial & Tribute Program', 
      description: 'Create sensitive memorial giving materials and stewardship plan',
      icon: 'Flower2', 
      handler: 'agent', 
      promptId: 'memorial_tribute_v1',
      inputs: {
        tribute_type: 'memorial|honor|celebration|milestone',
        recognition_level: 'nameplate|collection|room|garden|general'
      }
    },
    { 
      id: 'monthly_report', 
      label: 'Monthly Development Report', 
      description: 'Comprehensive report for board/leadership with insights and recommendations',
      icon: 'FileBarChart', 
      handler: 'server', 
      endpoint: '/api/kits/fundraising/monthly_report',
      inputs: {
        audience: 'board|staff|friends_group|volunteers',
        detail_level: 'executive_summary|detailed|comprehensive'
      }
    }
  ],
  snapshots: [
    { 
      id: 'revenue_channels', 
      type: 'chart', 
      title: 'Revenue by Channel (YTD)', 
      source: 'static',
      data: [
        { channel: 'Annual Fund (Direct Mail)', amount: 125400, count: 847, avg: 148 },
        { channel: 'Online Giving', amount: 89200, count: 523, avg: 171 },
        { channel: 'Major Gifts', amount: 275000, count: 18, avg: 15278 },
        { channel: 'Events & Programs', amount: 32600, count: 156, avg: 209 },
        { channel: 'Corporate/Business', amount: 48500, count: 12, avg: 4042 },
        { channel: 'Foundation Grants', amount: 185000, count: 7, avg: 26429 },
        { channel: 'Memorial/Tribute', amount: 28900, count: 89, avg: 325 },
        { channel: 'Friends Group', amount: 15200, count: 78, avg: 195 }
      ]
    },
    { 
      id: 'major_gifts_pipeline', 
      type: 'table', 
      title: 'Major Gifts Pipeline', 
      source: 'static',
      columns: ['Prospect', 'Connection', 'Stage', 'Ask Amount', 'Next Action', 'Timeline'],
      data: [
        { 
          prospect: 'Henderson Family Foundation', 
          connection: 'Board Chair relationship',
          stage: 'Cultivation', 
          ask_amount: '$50,000', 
          next_action: 'Program site visit scheduled',
          timeline: 'Dec 2024'
        },
        { 
          prospect: 'Sarah Chen (Tech Executive)', 
          connection: 'Library volunteer',
          stage: 'Solicitation', 
          ask_amount: '$25,000', 
          next_action: 'Proposal submitted, follow-up call',
          timeline: 'Nov 2024'
        },
        { 
          prospect: 'Martinez Construction Co.', 
          connection: 'Local business owner',
          stage: 'Qualification', 
          ask_amount: '$15,000', 
          next_action: 'Research capacity & interests',
          timeline: 'Jan 2025'
        },
        { 
          prospect: 'Dr. Emily Watson', 
          connection: 'University partnership',
          stage: 'Stewardship', 
          ask_amount: '$35,000', 
          next_action: 'Send Q3 impact report',
          timeline: 'Ongoing'
        },
        { 
          prospect: 'Regional Community Bank', 
          connection: 'Board member contact',
          stage: 'Identification', 
          ask_amount: '$20,000', 
          next_action: 'Initial meeting request',
          timeline: 'Feb 2025'
        }
      ]
    },
    {
      id: 'lybunt_priority',
      type: 'table',
      title: 'LYBUNT Priority Re-engagement',
      source: 'static',
      columns: ['Donor', 'Last Gift', 'Total Giving', 'Years Supporting', 'Connection', 'Strategy'],
      data: [
        { 
          donor: 'Robert & Linda Kim', 
          last_gift: '$500 (Dec 2022)', 
          total_giving: '$8,400',
          years_supporting: '12 years',
          connection: 'Former board member',
          strategy: 'Personal call from current board chair'
        },
        { 
          donor: 'Thompson Family Trust', 
          last_gift: '$1,000 (Nov 2022)', 
          total_giving: '$15,200',
          years_supporting: '8 years',
          connection: 'Children\'s program supporters',
          strategy: 'Summer reading impact story'
        },
        { 
          donor: 'David Rodriguez', 
          last_gift: '$250 (Oct 2022)', 
          total_giving: '$3,100',
          years_supporting: '6 years',
          connection: 'Regular program attendee',
          strategy: 'Event invitation + gentle ask'
        },
        { 
          donor: 'Miller Business Associates', 
          last_gift: '$750 (Sep 2022)', 
          total_giving: '$5,500',
          years_supporting: '4 years',
          connection: 'Employee volunteers',
          strategy: 'Corporate partnership proposal'
        }
      ]
    },
    {
      id: 'program_funding_needs',
      type: 'chart',
      title: 'Program Funding Priorities',
      source: 'static',
      data: [
        { program: 'Summer Reading Program', needed: 25000, funded: 18000, priority: 'High' },
        { program: 'Adult Literacy Classes', needed: 15000, funded: 8500, priority: 'High' },
        { program: 'Teen Maker Space', needed: 35000, funded: 12000, priority: 'Medium' },
        { program: 'Senior Technology Training', needed: 12000, funded: 9000, priority: 'Medium' },
        { program: 'Early Childhood Story Time', needed: 8000, funded: 8000, priority: 'Funded' },
        { program: 'Digital Archives Project', needed: 45000, funded: 5000, priority: 'Low' }
      ]
    },
    {
      id: 'donor_engagement_metrics',
      type: 'chart',
      title: 'Donor Engagement Trends',
      source: 'static',
      data: [
        { month: 'Jan', new_donors: 23, retained: 87, events: 45, newsletters: 1240 },
        { month: 'Feb', new_donors: 18, retained: 91, events: 52, newsletters: 1255 },
        { month: 'Mar', new_donors: 31, retained: 89, events: 67, newsletters: 1278 },
        { month: 'Apr', new_donors: 28, retained: 92, events: 78, newsletters: 1295 },
        { month: 'May', new_donors: 35, retained: 88, events: 89, newsletters: 1312 },
        { month: 'Jun', new_donors: 42, retained: 85, events: 156, newsletters: 1328 }
      ]
    },
    {
      id: 'upcoming_opportunities',
      type: 'list',
      title: 'Upcoming Fundraising Opportunities',
      source: 'static',
      data: [
        { 
          opportunity: 'National Library Week (April)', 
          type: 'Annual Campaign',
          potential: '$15,000-25,000',
          deadline: 'March 15 prep',
          status: 'Planning phase'
        },
        { 
          opportunity: 'State Arts Council Grant', 
          type: 'Grant Application',
          potential: '$50,000',
          deadline: 'February 1',
          status: 'Draft in progress'
        },
        { 
          opportunity: 'Local Foundation Q1 Cycle', 
          type: 'Foundation Grant',
          potential: '$30,000',
          deadline: 'January 31',
          status: 'Ready to submit'
        },
        { 
          opportunity: 'Corporate Matching Gift Season', 
          type: 'Donor Stewardship',
          potential: '$8,000-12,000',
          deadline: 'December 31',
          status: 'Active outreach'
        }
      ]
    }
  ],
  learn: [
    { label: 'Library Fundraising Fundamentals Course', href: '/learn/courses/library-fundraising-101' },
    { label: 'TrailHike: Donor Stewardship for Libraries', href: '/learn/hikes/library-donor-stewardship' },
    { label: 'Grant Writing for Library Programs', href: '/learn/guides/library-grant-writing' },
    { label: 'Corporate Partnership Strategies', href: '/learn/guides/corporate-partnerships' },
    { label: 'Building Your Library\'s Case for Support', href: '/learn/workshops/case-for-support' },
    { label: 'Ethics: Dignified Storytelling in Library Fundraising', href: '/learn/ethics/library-storytelling' },
    { label: 'Annual Fund Best Practices', href: '/learn/playbooks/annual-fund-libraries' },
    { label: 'Major Gifts for Library Professionals', href: '/learn/courses/library-major-gifts' },
    { label: 'Community Foundation Relationships', href: '/learn/guides/community-foundations' },
    { label: 'Digital Fundraising for Libraries', href: '/learn/workshops/digital-fundraising' }
  ],
  guardrails: [
    { 
      title: 'Patron Privacy Protection', 
      body: 'Never use specific patron information in fundraising materials. All stories must have explicit consent and protect individual privacy. Focus on aggregate impact and community benefit rather than individual circumstances.' 
    },
    { 
      title: 'Authentic Impact Reporting', 
      body: 'Only report verified outcomes and measurable impact. Distinguish between outputs (books purchased) and outcomes (literacy improved). Avoid inflated claims that could damage long-term trust with donors.' 
    },
    {
      title: 'Inclusive Community Representation',
      body: 'Ensure fundraising materials reflect the full diversity of your community. Avoid deficit narratives about underserved populations. Emphasize library services as community assets, not charity for the disadvantaged.'
    },
    {
      title: 'Transparent Fund Usage',
      body: 'Clearly communicate how donated funds will be used. If circumstances change, proactively communicate with donors. Maintain designated funds according to donor intent and provide regular updates on restricted gifts.'
    },
    {
      title: 'Professional Boundaries',
      body: 'Maintain appropriate boundaries with donors while building genuine relationships. Avoid conflicts of interest, particularly with board members or vendors. Document all major gift conversations and decisions.'
    },
    {
      title: 'Accessibility in All Communications',
      body: 'Ensure all fundraising materials are accessible (alt text, clear fonts, plain language). Provide multiple ways for donors to give and engage. Consider economic diversity in ask amounts and recognition levels.'
    },
    {
      title: 'Political Neutrality',
      body: 'Maintain library neutrality in all fundraising communications. Avoid partisan political content while advocating for library funding and intellectual freedom. Focus on community benefit rather than political positions.'
    }
  ],
  dataBindings: { 
    donorDatabase: 'library_donor_crm',
    circulationStats: 'ils_system',
    programAttendance: 'event_management',
    grantsDatabase: 'grant_tracking',
    emailMarketing: 'mailchimp_nonprofit',
    onlineGiving: 'donation_platform',
    boardManagement: 'board_portal',
    financialReporting: 'library_finance_system'
  }
};
