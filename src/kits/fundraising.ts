import { KitConfig } from '../types/kit';

export const fundraisingKit: KitConfig = {
  slug: 'fundraising',
  name: 'Fundraising & Development',
  stage: 'Experimentation',
  description: 'Grow giving, deepen relationships, and steward donors with integrity.',
  colorAccent: 'emerald',
  kpis: [
    { id: 'mtd', label: 'MTD Revenue', value: 84250, delta: 12.4, period: '30d', format: 'currency' },
    { id: 'ret', label: 'Donor Retention', value: '46%', delta: -3.1, period: 'YTD', format: 'percent' },
    { id: 'lybunt', label: 'LYBUNT', value: 137, format: 'number' },
    { id: 'avgGift', label: 'Avg Gift', value: '$186', format: 'currency' }
  ],
  quickActions: [
    { 
      id: 'donor_appeal_v1', 
      label: 'Draft segmented appeal', 
      description: 'Create personalized donor appeals for different segments',
      icon: 'Megaphone', 
      handler: 'agent', 
      promptId: 'donor_appeal_v1' 
    },
    { 
      id: 'upgrade_candidates', 
      label: 'Find upgrade candidates', 
      description: 'Identify LYBUNT donors ready for larger gifts',
      icon: 'ArrowUp', 
      handler: 'server', 
      endpoint: '/api/kits/fundraising/upgrade' 
    },
    { 
      id: 'stewardship_plan', 
      label: '3-touch stewardship plan', 
      description: 'Create personalized stewardship sequence for top donors',
      icon: 'Handshake', 
      handler: 'agent', 
      promptId: 'stewardship_plan_v1' 
    },
    { 
      id: 'newsletter_blurbs', 
      label: 'Newsletter blurbs x5', 
      description: 'Generate donor newsletter content ideas',
      icon: 'Newspaper', 
      handler: 'agent', 
      promptId: 'nl_blurbs_v1' 
    },
    { 
      id: 'end_of_month_report', 
      label: 'End-of-month report', 
      description: 'Compile monthly fundraising performance summary',
      icon: 'FileBarChart', 
      handler: 'server', 
      endpoint: '/api/kits/fundraising/eom' 
    }
  ],
  snapshots: [
    { 
      id: 'by_channel', 
      type: 'chart', 
      title: 'Gifts by Channel', 
      source: 'static',
      data: [
        { channel: 'Online', amount: 45200, count: 342 },
        { channel: 'Direct Mail', amount: 28400, count: 156 },
        { channel: 'Events', amount: 18600, count: 47 },
        { channel: 'Major Gifts', amount: 52000, count: 8 },
        { channel: 'Grants', amount: 25000, count: 3 }
      ]
    },
    { 
      id: 'pipeline', 
      type: 'table', 
      title: 'Major Gifts Pipeline', 
      source: 'static',
      columns: ['prospect', 'stage', 'next_action', 'amount'],
      data: [
        { prospect: 'Johnson Foundation', stage: 'Cultivation', next_action: 'Site visit scheduled', amount: '$50,000' },
        { prospect: 'Sarah Chen', stage: 'Solicitation', next_action: 'Follow up call', amount: '$25,000' },
        { prospect: 'Martinez Family', stage: 'Qualification', next_action: 'Research capacity', amount: '$10,000' },
        { prospect: 'Tech Corp CSR', stage: 'Stewardship', next_action: 'Impact report', amount: '$75,000' }
      ]
    },
    {
      id: 'lybunt_list',
      type: 'list',
      title: 'LYBUNT Priority List',
      source: 'static',
      data: [
        { name: 'David Rodriguez', lastGift: '$500', lastDate: '2023-11-15', years: 3 },
        { name: 'Emily Watson', lastGift: '$250', lastDate: '2023-10-22', years: 2 },
        { name: 'Michael Kim', lastGift: '$1,000', lastDate: '2023-09-08', years: 4 },
        { name: 'Lisa Thompson', lastGift: '$150', lastDate: '2023-12-01', years: 1 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Donor Journeys 101', href: '/learn/hikes/fundraising-journeys' },
    { label: 'Ethics: Storytelling with Dignity', href: '/learn/ethics/story-dignity' },
    { label: 'LYBUNT Strategy Guide', href: '/learn/guides/lybunt-strategy' }
  ],
  guardrails: [
    { 
      title: 'Privacy', 
      body: 'Do not expose PII or donation history in public outputs. Summarize sensitively.' 
    },
    { 
      title: 'No False Promises', 
      body: 'Avoid implying guaranteed outcomes in solicitations.' 
    },
    {
      title: 'Dignified Storytelling',
      body: 'Center beneficiary agency and avoid exploitative emotional appeals.'
    }
  ],
  dataBindings: { 
    giftsTable: 'gifts', 
    donorsTable: 'donors',
    pipelineTable: 'pipeline'
  }
};
