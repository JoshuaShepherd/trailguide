import { KitConfig } from '../types/kit';

export const grantsKit: KitConfig = {
  slug: 'grants',
  name: 'Grants & Institutional Giving',
  stage: 'Awareness',
  description: 'Source, fit-check, draft, and track grants with clarity.',
  colorAccent: 'blue',
  kpis: [
    { id: 'active', label: 'Active Proposals', value: 7, format: 'number' },
    { id: 'winrate', label: 'Win Rate', value: '28%', delta: 5.2, period: 'YTD', format: 'percent' },
    { id: 'deadlines60', label: 'Deadlines (60d)', value: 5, format: 'number' },
    { id: 'avgAward', label: 'Avg Award Size', value: 125000, delta: -8.1, period: '12m', format: 'currency' }
  ],
  quickActions: [
    { 
      id: 'draft_loi', 
      label: 'Draft LOI from brief', 
      description: 'Generate Letter of Inquiry from program brief',
      icon: 'Pencil', 
      handler: 'agent', 
      promptId: 'grants_loi_v1' 
    },
    { 
      id: 'fit_check', 
      label: 'Funder fit-check', 
      description: 'Analyze alignment between program and funder priorities',
      icon: 'CheckCircle', 
      handler: 'agent', 
      promptId: 'grants_fit_v1' 
    },
    { 
      id: 'budget_sheet', 
      label: 'Budget template export', 
      description: 'Generate detailed budget template for proposal',
      icon: 'FileSpreadsheet', 
      handler: 'server', 
      endpoint: '/api/kits/grants/budget' 
    },
    {
      id: 'deadline_tracker',
      label: 'Deadline action plan',
      description: 'Create timeline for upcoming proposal deadlines',
      icon: 'Calendar',
      handler: 'agent',
      promptId: 'grants_timeline_v1'
    },
    {
      id: 'impact_narrative',
      label: 'Draft impact narrative',
      description: 'Craft compelling outcome story from data',
      icon: 'FileText',
      handler: 'agent',
      promptId: 'grants_narrative_v1'
    }
  ],
  snapshots: [
    { 
      id: 'deadline_calendar', 
      type: 'list', 
      title: 'Upcoming Deadlines', 
      source: 'static',
      data: [
        { funder: 'Community Foundation', program: 'Youth Development', dueDate: '2024-02-15', amount: '$50,000', status: 'In Progress' },
        { funder: 'State Arts Council', program: 'Arts Education', dueDate: '2024-02-28', amount: '$25,000', status: 'Draft' },
        { funder: 'Federal SAMHSA', program: 'Mental Health', dueDate: '2024-03-10', amount: '$150,000', status: 'Research' },
        { funder: 'Private Foundation', program: 'Environmental', dueDate: '2024-03-20', amount: '$75,000', status: 'Concept' }
      ]
    },
    {
      id: 'win_loss_analysis',
      type: 'chart',
      title: 'Grant Success Rate by Funder Type',
      source: 'static',
      data: [
        { type: 'Federal', submitted: 12, awarded: 4, rate: 33 },
        { type: 'State', submitted: 8, awarded: 3, rate: 38 },
        { type: 'Foundation', submitted: 15, awarded: 6, rate: 40 },
        { type: 'Corporate', submitted: 6, awarded: 1, rate: 17 }
      ]
    },
    {
      id: 'active_proposals',
      type: 'table',
      title: 'Active Proposal Status',
      source: 'static',
      columns: ['proposal', 'funder', 'stage', 'amount', 'nextStep'],
      data: [
        { proposal: 'Youth Mentorship Expansion', funder: 'Smith Foundation', stage: 'Under Review', amount: '$100,000', nextStep: 'Site visit prep' },
        { proposal: 'Digital Equity Initiative', funder: 'Tech Corp Foundation', stage: 'Full Proposal', amount: '$200,000', nextStep: 'Budget revision' },
        { proposal: 'Community Garden Network', funder: 'Green Fund', stage: 'LOI Submitted', amount: '$35,000', nextStep: 'Wait for response' }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Grant Writing Foundations', href: '/learn/hikes/grant-foundations' },
    { label: 'Funder Research Strategies', href: '/learn/guides/funder-research' },
    { label: 'Budget Development Toolkit', href: '/learn/tools/budget-development' }
  ],
  guardrails: [
    { 
      title: 'Accuracy', 
      body: 'Cite sources for all claims and outcomes; avoid inflated impact language.' 
    },
    {
      title: 'Compliance',
      body: 'Ensure all requirements and restrictions are clearly documented and followed.'
    },
    {
      title: 'Realistic Projections',
      body: 'Base all outcome projections on evidence and comparable programs.'
    }
  ],
  dataBindings: {
    grantsTable: 'grants',
    fundersTable: 'funders',
    proposalsTable: 'proposals'
  }
};
