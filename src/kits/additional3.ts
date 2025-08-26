import { KitConfig } from '../types/kit';

export const complianceKit: KitConfig = {
  slug: 'compliance',
  name: 'Compliance & Policies',
  stage: 'Awareness',
  description: 'Maintain regulatory compliance and organizational policies.',
  colorAccent: 'slate',
  kpis: [
    { id: 'policies_updated', label: 'Policies Current', value: '89%', delta: 12.4, period: 'YTD', format: 'percent' },
    { id: 'training_complete', label: 'Staff Training Complete', value: '94%', delta: 3.2, period: 'YTD', format: 'percent' },
    { id: 'audits_passed', label: 'Audits Passed', value: 3, format: 'number' },
    { id: 'incidents', label: 'Incidents (30d)', value: 0, format: 'number' }
  ],
  quickActions: [
    { id: 'policy_template', label: 'Policy from template', icon: 'FileCheck', handler: 'agent', promptId: 'compliance_policy_v1' },
    { id: 'review_checklist', label: 'Annual review checklist', icon: 'CheckSquare', handler: 'server', endpoint: '/api/kits/compliance/checklist' },
    { id: 'incident_response', label: 'Incident response plan', icon: 'AlertTriangle', handler: 'agent', promptId: 'incident_response_v1' },
    { id: 'training_tracker', label: 'Training compliance tracker', icon: 'GraduationCap', handler: 'server', endpoint: '/api/kits/compliance/training' },
    { id: 'risk_assessment', label: 'Risk assessment template', icon: 'Shield', handler: 'agent', promptId: 'risk_assessment_v1' }
  ],
  snapshots: [
    { 
      id: 'policy_status', 
      type: 'table', 
      title: 'Policy Review Status', 
      source: 'static',
      columns: ['policy', 'lastReview', 'nextReview', 'status'],
      data: [
        { policy: 'Code of Conduct', lastReview: '2024-01-15', nextReview: '2025-01-15', status: 'Current' },
        { policy: 'Whistleblower Policy', lastReview: '2023-03-10', nextReview: '2024-03-10', status: 'Overdue' },
        { policy: 'Data Privacy Policy', lastReview: '2024-06-01', nextReview: '2025-06-01', status: 'Current' },
        { policy: 'Conflict of Interest', lastReview: '2023-09-20', nextReview: '2024-09-20', status: 'Due Soon' }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Nonprofit Compliance', href: '/learn/hikes/compliance-basics' },
    { label: 'Policy Development Guide', href: '/learn/guides/policy-development' }
  ],
  guardrails: [
    { title: 'Legal Review', body: 'All policies must be reviewed by qualified legal counsel before implementation.' },
    { title: 'Jurisdiction Awareness', body: 'Ensure compliance with local, state, and federal regulations.' }
  ]
};

export const boardKit: KitConfig = {
  slug: 'board',
  name: 'Board Relations & Governance',
  stage: 'Leadership',
  description: 'Strengthen governance and board engagement.',
  colorAccent: 'indigo',
  kpis: [
    { id: 'attendance', label: 'Meeting Attendance', value: '87%', delta: 5.2, period: 'YTD', format: 'percent' },
    { id: 'giving_participation', label: 'Board Giving', value: '100%', format: 'percent' },
    { id: 'committee_fill', label: 'Committee Participation', value: '73%', delta: 8.1, period: 'YTD', format: 'percent' },
    { id: 'orientation_complete', label: 'New Member Orientation', value: '100%', format: 'percent' }
  ],
  quickActions: [
    { id: 'agenda_template', label: 'Meeting agenda template', icon: 'FileText', handler: 'agent', promptId: 'board_agenda_v1' },
    { id: 'board_dashboard', label: 'Executive dashboard', icon: 'BarChart3', handler: 'server', endpoint: '/api/kits/board/dashboard' },
    { id: 'recruitment_brief', label: 'Board recruitment brief', icon: 'UserPlus', handler: 'agent', promptId: 'board_recruit_v1' },
    { id: 'orientation_plan', label: 'New member orientation', icon: 'BookOpen', handler: 'agent', promptId: 'board_orientation_v1' },
    { id: 'governance_review', label: 'Annual governance review', icon: 'CheckCircle', handler: 'server', endpoint: '/api/kits/board/review' }
  ],
  snapshots: [
    { 
      id: 'board_composition', 
      type: 'chart', 
      title: 'Board Skills Matrix', 
      source: 'static',
      data: [
        { skill: 'Fundraising', current: 4, target: 5 },
        { skill: 'Finance', current: 3, target: 3 },
        { skill: 'Legal', current: 2, target: 2 },
        { skill: 'Program Expertise', current: 5, target: 4 },
        { skill: 'Marketing', current: 2, target: 3 },
        { skill: 'Community Connections', current: 6, target: 6 }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Board Governance', href: '/learn/hikes/board-governance' },
    { label: 'Executive Director-Board Relations', href: '/learn/guides/ed-board-relations' }
  ],
  guardrails: [
    { title: 'Governance Boundaries', body: 'Maintain clear distinction between governance oversight and operational management.' },
    { title: 'Fiduciary Responsibility', body: 'All board actions must prioritize organizational mission and public benefit.' }
  ]
};

export const partnershipsKit: KitConfig = {
  slug: 'partnerships',
  name: 'Partnerships & Community',
  stage: 'Experimentation',
  description: 'Build strategic alliances that amplify your impact.',
  colorAccent: 'teal',
  kpis: [
    { id: 'active_mous', label: 'Active Partnerships', value: 12, delta: 20.0, period: 'YTD', format: 'number' },
    { id: 'joint_initiatives', label: 'Joint Programs', value: 4, delta: 33.3, period: 'YTD', format: 'number' },
    { id: 'partner_nps', label: 'Partner Satisfaction', value: 73, delta: 8.9, period: '6m', format: 'number' },
    { id: 'shared_resources', label: 'Resource Sharing Value', value: 45000, delta: 15.2, period: 'YTD', format: 'currency' }
  ],
  quickActions: [
    { id: 'outreach_brief', label: 'Partnership outreach brief', icon: 'HandHeart', handler: 'agent', promptId: 'partnership_outreach_v1' },
    { id: 'mou_draft', label: 'MOU template draft', icon: 'FileSignature', handler: 'agent', promptId: 'mou_draft_v1' },
    { id: 'collaboration_plan', label: 'Collaboration strategy', icon: 'Users', handler: 'agent', promptId: 'collab_plan_v1' },
    { id: 'impact_measurement', label: 'Joint impact framework', icon: 'Target', handler: 'agent', promptId: 'joint_impact_v1' },
    { id: 'partner_communications', label: 'Partner communication plan', icon: 'MessageCircle', handler: 'agent', promptId: 'partner_comms_v1' }
  ],
  snapshots: [
    { 
      id: 'partnership_map', 
      type: 'table', 
      title: 'Partnership Portfolio', 
      source: 'static',
      columns: ['partner', 'type', 'status', 'impact', 'nextStep'],
      data: [
        { partner: 'City Public Library', type: 'Program Collaboration', status: 'Active', impact: 'High', nextStep: 'Quarterly review' },
        { partner: 'Local Food Bank', type: 'Resource Sharing', status: 'Active', impact: 'Medium', nextStep: 'Service expansion' },
        { partner: 'University Research Center', type: 'Evaluation Partner', status: 'Planning', impact: 'High', nextStep: 'IRB approval' },
        { partner: 'Corporate Volunteer Program', type: 'Skills-based Volunteering', status: 'Active', impact: 'Medium', nextStep: 'Project scoping' }
      ]
    }
  ],
  learn: [
    { label: 'TrailHike: Strategic Partnerships', href: '/learn/hikes/strategic-partnerships' },
    { label: 'Collaboration Best Practices', href: '/learn/guides/collaboration' }
  ],
  guardrails: [
    { title: 'Mission Alignment', body: 'All partnerships must align with and advance organizational mission.' },
    { title: 'Clear Agreements', body: 'Document roles, responsibilities, and IP sharing arrangements clearly.' }
  ]
};
