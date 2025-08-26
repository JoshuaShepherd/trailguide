import { KitConfig } from '../types/kit';

export const dataKit: KitConfig = {
  slug: 'data',
  name: 'Data & Evaluation',
  stage: 'Optimization',
  description: 'Turn data into insights that drive program improvement.',
  colorAccent: 'purple',
  kpis: [
    { id: 'completeness', label: 'Data Completeness', value: '84%', delta: 7.3, period: '30d', format: 'percent' },
    { id: 'response_rate', label: 'Survey Response Rate', value: '67%', delta: -2.1, period: '30d', format: 'percent' },
    { id: 'quality_score', label: 'Data Quality Score', value: 89, delta: 5.4, period: '30d', format: 'number' },
    { id: 'insights_generated', label: 'Monthly Insights', value: 15, delta: 25.0, period: '30d', format: 'number' }
  ],
  quickActions: [
    { id: 'indicator_catalog', label: 'Outcome indicator catalog', icon: 'Database', handler: 'agent', promptId: 'data_indicators_v1' },
    { id: 'data_dictionary', label: 'Data dictionary generator', icon: 'BookOpen', handler: 'server', endpoint: '/api/kits/data/dictionary' },
    { id: 'evaluation_plan', label: 'Evaluation plan outline', icon: 'FileBarChart', handler: 'agent', promptId: 'eval_plan_v1' },
    { id: 'survey_design', label: 'Survey instrument design', icon: 'ClipboardList', handler: 'agent', promptId: 'survey_design_v1' },
    { id: 'analysis_brief', label: 'Data analysis brief', icon: 'TrendingUp', handler: 'agent', promptId: 'analysis_brief_v1' }
  ],
  snapshots: [
    { 
      id: 'data_quality', 
      type: 'chart', 
      title: 'Data Quality by Source', 
      source: 'static',
      data: [
        { source: 'Direct Entry', completeness: 92, accuracy: 88, timeliness: 95 },
        { source: 'Surveys', completeness: 78, accuracy: 94, timeliness: 85 },
        { source: 'Partner Systems', completeness: 65, accuracy: 82, timeliness: 70 },
        { source: 'Manual Import', completeness: 89, accuracy: 91, timeliness: 88 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Data for Decision Making', href: '/learn/hikes/data-decisions' },
    { label: 'Evaluation Design Principles', href: '/learn/guides/evaluation-design' }
  ],
  guardrails: [
    { title: 'Privacy Protection', body: 'De-identify data and follow IRB protocols for research involving human subjects.' },
    { title: 'Ethical Use', body: 'Use data to improve programs, not to penalize participants or communities.' }
  ]
};

export const itKit: KitConfig = {
  slug: 'it',
  name: 'IT & Security',
  stage: 'Awareness',
  description: 'Secure your operations and optimize technology systems.',
  colorAccent: 'red',
  kpis: [
    { id: 'mfa_adoption', label: 'MFA Adoption', value: '78%', delta: 12.5, period: '30d', format: 'percent' },
    { id: 'open_tickets', label: 'Open Tickets', value: 7, delta: -30.0, period: '30d', format: 'number' },
    { id: 'patch_status', label: 'Systems Patched', value: '94%', delta: 3.2, period: '30d', format: 'percent' },
    { id: 'uptime', label: 'System Uptime', value: '99.7%', delta: 0.1, period: '30d', format: 'percent' }
  ],
  quickActions: [
    { id: 'access_review', label: 'Quarterly access review', icon: 'UserCheck', handler: 'server', endpoint: '/api/kits/it/access-review' },
    { id: 'security_policies', label: 'Security policy pack', icon: 'Shield', handler: 'agent', promptId: 'security_policies_v1' },
    { id: 'incident_tabletop', label: 'Security incident drill', icon: 'AlertTriangle', handler: 'agent', promptId: 'security_drill_v1' },
    { id: 'backup_verification', label: 'Backup verification test', icon: 'HardDrive', handler: 'server', endpoint: '/api/kits/it/backup-test' },
    { id: 'vulnerability_scan', label: 'Vulnerability assessment', icon: 'Search', handler: 'server', endpoint: '/api/kits/it/vuln-scan' }
  ],
  snapshots: [
    { 
      id: 'security_metrics', 
      type: 'table', 
      title: 'Security Dashboard', 
      source: 'static',
      columns: ['metric', 'current', 'target', 'trend'],
      data: [
        { metric: 'Password Policy Compliance', current: '89%', target: '95%', trend: '↗️' },
        { metric: 'Phishing Test Pass Rate', current: '76%', target: '85%', trend: '↗️' },
        { metric: 'Software Updates Current', current: '94%', target: '98%', trend: '➡️' },
        { metric: 'Data Backup Success', current: '100%', target: '100%', trend: '✅' }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Nonprofit Cybersecurity', href: '/learn/hikes/cybersecurity' },
    { label: 'IT Security Best Practices', href: '/learn/guides/it-security' }
  ],
  guardrails: [
    { title: 'Least Privilege', body: 'Grant minimum necessary access and review permissions regularly.' },
    { title: 'No Secrets in AI', body: 'Never share passwords, API keys, or sensitive data with AI systems.' }
  ]
};

export const strategyKit: KitConfig = {
  slug: 'strategy',
  name: 'Strategy & OKRs',
  stage: 'Leadership',
  description: 'Set direction, track progress, and navigate strategic decisions.',
  colorAccent: 'emerald',
  kpis: [
    { id: 'okrs_on_track', label: 'OKRs On Track', value: '73%', delta: 8.2, period: 'Q4', format: 'percent' },
    { id: 'initiative_velocity', label: 'Initiative Completion', value: '67%', delta: 12.1, period: 'YTD', format: 'percent' },
    { id: 'stakeholder_alignment', label: 'Stakeholder Alignment', value: 82, delta: 5.5, period: '6m', format: 'number' },
    { id: 'strategic_review', label: 'Plan Reviews Complete', value: 4, format: 'number' }
  ],
  quickActions: [
    { id: 'okr_draft', label: 'Draft annual OKRs', icon: 'Target', handler: 'agent', promptId: 'okr_draft_v1' },
    { id: 'checkin_synthesis', label: 'Monthly check-in synthesis', icon: 'BarChart3', handler: 'agent', promptId: 'checkin_synthesis_v1' },
    { id: 'risk_register', label: 'Strategic risk register', icon: 'AlertTriangle', handler: 'agent', promptId: 'risk_register_v1' },
    { id: 'scenario_planning', label: 'Scenario planning exercise', icon: 'GitBranch', handler: 'agent', promptId: 'scenario_planning_v1' },
    { id: 'theory_of_change', label: 'Theory of change review', icon: 'Workflow', handler: 'agent', promptId: 'theory_change_v1' }
  ],
  snapshots: [
    { 
      id: 'okr_progress', 
      type: 'chart', 
      title: 'OKR Progress by Quarter', 
      source: 'static',
      data: [
        { objective: 'Increase Program Reach', q1: 85, q2: 72, q3: 78, q4: 73 },
        { objective: 'Strengthen Partnerships', q1: 90, q2: 88, q3: 85, q4: 82 },
        { objective: 'Build Sustainable Funding', q1: 60, q2: 65, q3: 70, q4: 75 },
        { objective: 'Enhance Staff Capacity', q1: 75, q2: 80, q3: 85, q4: 88 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Strategic Planning', href: '/learn/hikes/strategic-planning' },
    { label: 'OKR Implementation Guide', href: '/learn/guides/okr-implementation' }
  ],
  guardrails: [
    { title: 'Evidence-Based', body: 'Base all strategic decisions on data, stakeholder input, and mission alignment.' },
    { title: 'Adaptive Planning', body: 'Build flexibility into plans and regularly reassess assumptions.' }
  ]
};

export const majorGiftsKit: KitConfig = {
  slug: 'major-gifts',
  name: 'Major Gifts',
  stage: 'Leadership',
  description: 'Cultivate transformational gifts through relationship-centered fundraising.',
  colorAccent: 'gold',
  kpis: [
    { id: 'top20_touches', label: 'Top 20 Touches', value: 47, delta: 18.5, period: '30d', format: 'number' },
    { id: 'meetings_set', label: 'Meetings This Month', value: 12, delta: 20.0, period: '30d', format: 'number' },
    { id: 'pipeline_movement', label: 'Pipeline Advancement', value: 8, delta: 33.3, period: '30d', format: 'number' },
    { id: 'avg_gift_size', label: 'Avg Major Gift', value: 15750, delta: 12.4, period: 'YTD', format: 'currency' }
  ],
  quickActions: [
    { id: 'prospect_research', label: 'Prospect research brief', icon: 'Search', handler: 'agent', promptId: 'prospect_research_v1' },
    { id: 'personalized_outreach', label: '3x personalized outreach', icon: 'Mail', handler: 'agent', promptId: 'personalized_outreach_v1' },
    { id: 'donor_interests', label: 'What matters to this donor?', icon: 'Heart', handler: 'agent', promptId: 'donor_interests_v1' },
    { id: 'proposal_draft', label: 'Major gift proposal', icon: 'FileText', handler: 'agent', promptId: 'major_gift_proposal_v1' },
    { id: 'stewardship_timeline', label: 'Stewardship timeline', icon: 'Calendar', handler: 'agent', promptId: 'stewardship_timeline_v1' }
  ],
  snapshots: [
    { 
      id: 'top_prospects', 
      type: 'table', 
      title: 'Top 20 Prospect Activity', 
      source: 'static',
      columns: ['prospect', 'capacity', 'stage', 'lastTouch', 'nextAction'],
      data: [
        { prospect: 'Sarah Chen', capacity: '$50K+', stage: 'Cultivation', lastTouch: '2024-01-12', nextAction: 'Coffee meeting' },
        { prospect: 'Johnson Foundation', capacity: '$100K+', stage: 'Solicitation', lastTouch: '2024-01-10', nextAction: 'Proposal follow-up' },
        { prospect: 'Martinez Family', capacity: '$25K+', stage: 'Identification', lastTouch: '2024-01-08', nextAction: 'Capacity research' },
        { prospect: 'Tech Executive Board', capacity: '$75K+', stage: 'Qualification', lastTouch: '2024-01-15', nextAction: 'Site visit' }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Major Gift Fundraising', href: '/learn/hikes/major-gifts' },
    { label: 'Donor-Centered Fundraising', href: '/learn/guides/donor-centered' }
  ],
  guardrails: [
    { title: 'Respect Privacy', body: 'Use publicly available information only; avoid invasive research methods.' },
    { title: 'Authentic Relationships', body: 'Focus on genuine connection and mission alignment, not just capacity.' }
  ]
};
