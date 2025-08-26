import { KitConfig } from '../types/kit';

export const volunteerKit: KitConfig = {
  slug: 'volunteers',
  name: 'Volunteer Management',
  stage: 'Adoption',
  description: 'Engage, coordinate, and retain your volunteer community.',
  colorAccent: 'pink',
  kpis: [
    { id: 'active', label: 'Active Volunteers', value: 284, delta: 15.2, period: '30d', format: 'number' },
    { id: 'fill_rate', label: 'Shift Fill Rate', value: '87%', delta: 3.4, period: '30d', format: 'percent' },
    { id: 'retention', label: 'Volunteer Retention', value: '68%', delta: -2.1, period: 'YTD', format: 'percent' },
    { id: 'hours', label: 'Monthly Hours', value: 1456, delta: 12.8, period: '30d', format: 'number' }
  ],
  quickActions: [
    { id: 'role_descriptions', label: 'Volunteer role descriptions', icon: 'FileText', handler: 'agent', promptId: 'vol_roles_v1' },
    { id: 'shift_matching', label: 'Optimal shift matching', icon: 'Users', handler: 'server', endpoint: '/api/kits/volunteers/matching' },
    { id: 'appreciation', label: 'Appreciation schedule', icon: 'Heart', handler: 'agent', promptId: 'vol_appreciation_v1' },
    { id: 'training_plan', label: 'Training curriculum', icon: 'GraduationCap', handler: 'agent', promptId: 'vol_training_v1' },
    { id: 'recruitment', label: 'Recruitment campaign', icon: 'UserPlus', handler: 'agent', promptId: 'vol_recruitment_v1' }
  ],
  snapshots: [
    { 
      id: 'volunteer_hours', 
      type: 'chart', 
      title: 'Volunteer Hours by Program', 
      source: 'static',
      data: [
        { program: 'Food Pantry', hours: 456, volunteers: 23 },
        { program: 'Tutoring', hours: 324, volunteers: 18 },
        { program: 'Events', hours: 289, volunteers: 31 },
        { program: 'Administration', hours: 187, volunteers: 12 },
        { program: 'Outreach', hours: 200, volunteers: 15 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Volunteer Engagement', href: '/learn/hikes/volunteer-engagement' },
    { label: 'Recognition Program Ideas', href: '/learn/guides/volunteer-recognition' }
  ],
  guardrails: [
    { title: 'Safety First', body: 'Complete background checks and safety training for all appropriate roles.' },
    { title: 'Equitable Access', body: 'Remove barriers and ensure volunteer opportunities are accessible to all.' }
  ]
};

export const financeKit: KitConfig = {
  slug: 'finance',
  name: 'Finance & Budgeting',
  stage: 'Optimization',
  description: 'Monitor financial health and plan for sustainable growth.',
  colorAccent: 'yellow',
  kpis: [
    { id: 'runway', label: 'Cash Runway', value: '14 months', format: 'string' },
    { id: 'burn_variance', label: 'Burn vs Plan', value: '3%', delta: -1.2, period: '30d', format: 'percent' },
    { id: 'program_ratio', label: 'Program Expense Ratio', value: '78%', delta: 2.1, period: 'YTD', format: 'percent' },
    { id: 'reserve_ratio', label: 'Reserve Ratio', value: '23%', delta: 1.8, period: 'YTD', format: 'percent' }
  ],
  quickActions: [
    { id: 'variance_explain', label: 'Explain variance', icon: 'TrendingDown', handler: 'agent', promptId: 'finance_variance_v1' },
    { id: 'budget_template', label: 'Department budget template', icon: 'FileSpreadsheet', handler: 'server', endpoint: '/api/kits/finance/template' },
    { id: 'forecast_scenarios', label: 'Financial scenarios', icon: 'BarChart3', handler: 'agent', promptId: 'finance_scenarios_v1' },
    { id: 'board_dashboard', label: 'Board financial dashboard', icon: 'PieChart', handler: 'server', endpoint: '/api/kits/finance/board' },
    { id: 'grant_tracking', label: 'Grant compliance tracker', icon: 'CheckSquare', handler: 'agent', promptId: 'grant_compliance_v1' }
  ],
  snapshots: [
    { 
      id: 'cash_flow', 
      type: 'chart', 
      title: 'Cash Flow Trend', 
      source: 'static',
      data: [
        { month: 'Jan', inflow: 125000, outflow: 98000, net: 27000 },
        { month: 'Feb', inflow: 89000, outflow: 102000, net: -13000 },
        { month: 'Mar', inflow: 156000, outflow: 105000, net: 51000 },
        { month: 'Apr', inflow: 98000, outflow: 110000, net: -12000 },
        { month: 'May', inflow: 134000, outflow: 108000, net: 26000 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Nonprofit Finance Basics', href: '/learn/hikes/finance-basics' },
    { label: 'Reserve Fund Strategy', href: '/learn/guides/reserves' }
  ],
  guardrails: [
    { title: 'Not Financial Advice', body: 'Outputs are for planning only; consult qualified professionals for legal/tax advice.' },
    { title: 'Fiduciary Duty', body: 'All financial decisions must prioritize organizational mission and sustainability.' }
  ]
};

export const hrKit: KitConfig = {
  slug: 'hr',
  name: 'HR & Talent',
  stage: 'Experimentation',
  description: 'Build and support a thriving, equitable team.',
  colorAccent: 'cyan',
  kpis: [
    { id: 'open_roles', label: 'Open Positions', value: 3, format: 'number' },
    { id: 'time_to_fill', label: 'Avg Time to Fill', value: '45 days', delta: -8.2, period: 'YTD', format: 'string' },
    { id: 'engagement', label: 'Employee NPS', value: 67, delta: 5.1, period: '6m', format: 'number' },
    { id: 'turnover', label: 'Annual Turnover', value: '12%', delta: -3.4, period: 'YTD', format: 'percent' }
  ],
  quickActions: [
    { id: 'job_description', label: 'Job description writing', icon: 'FileText', handler: 'agent', promptId: 'hr_jobdesc_v1' },
    { id: 'interview_kit', label: 'Interview guide & questions', icon: 'MessageSquare', handler: 'agent', promptId: 'hr_interview_v1' },
    { id: 'onboarding_plan', label: '30/60/90 day plans', icon: 'Calendar', handler: 'agent', promptId: 'hr_onboarding_v1' },
    { id: 'performance_review', label: 'Performance review template', icon: 'Star', handler: 'agent', promptId: 'hr_review_v1' },
    { id: 'policy_draft', label: 'HR policy drafting', icon: 'Shield', handler: 'agent', promptId: 'hr_policy_v1' }
  ],
  snapshots: [
    { 
      id: 'hiring_pipeline', 
      type: 'table', 
      title: 'Hiring Pipeline', 
      source: 'static',
      columns: ['position', 'stage', 'candidates', 'daysOpen'],
      data: [
        { position: 'Program Manager', stage: 'Final Interview', candidates: 2, daysOpen: 32 },
        { position: 'Development Associate', stage: 'Phone Screen', candidates: 5, daysOpen: 18 },
        { position: 'Communications Coordinator', stage: 'Posted', candidates: 12, daysOpen: 8 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Equitable Hiring', href: '/learn/hikes/equitable-hiring' },
    { label: 'Remote Work Best Practices', href: '/learn/guides/remote-work' }
  ],
  guardrails: [
    { title: 'Anti-Bias', body: 'Use structured interviews and diverse panels to minimize hiring bias.' },
    { title: 'Privacy', body: 'Protect all employee information and follow applicable employment laws.' }
  ]
};
