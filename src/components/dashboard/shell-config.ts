import { 
  LucideIcon,
  Users,
  Target,
  Shield,
  Search,
  FileText,
  Calendar,
  DollarSign,
  Receipt
} from 'lucide-react';
import { KitConfig } from '@/types/kit';

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  expandable?: boolean;
  subItems?: NavigationSubItem[];
  badge?: string;
}

export interface NavigationSubItem {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
}

export interface PlaybookAction {
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  lastRun?: Date;
  category: 'automation' | 'report' | 'communication' | 'analysis';
}

export interface AuditLogEntry {
  id: string;
  timestamp: Date;
  action: string;
  user: string;
  resource: string;
  details?: string;
  status: 'success' | 'error' | 'warning';
}

export interface ShellConfiguration {
  kit: KitConfig;
  primaryNavItems: NavigationItem[];
  kitModules: NavigationItem[];
  playbooks: PlaybookAction[];
  auditLog: AuditLogEntry[];
  features: {
    agentConsole: boolean;
    playbooksBar: boolean;
    auditLog: boolean;
    globalSearch: boolean;
  };
}

// Kit-specific navigation builders
export const buildNavigationForKit = (kit: KitConfig): NavigationItem[] => {
  const baseModules: Record<string, NavigationItem[]> = {
    fundraising: [
      {
        id: 'donors',
        label: 'Donors',
        icon: Users,
        expandable: true,
        subItems: [
          { id: 'all-donors', label: 'All Donors', href: `/hub/${kit.slug}/donors` },
          { id: 'major-donors', label: 'Major Donors', href: `/hub/${kit.slug}/donors/major` },
          { id: 'segments', label: 'Segments', href: `/hub/${kit.slug}/donors/segments` },
        ]
      },
      {
        id: 'campaigns',
        label: 'Campaigns',
        icon: Target,
        expandable: true,
        subItems: [
          { id: 'active', label: 'Active', href: `/hub/${kit.slug}/campaigns/active` },
          { id: 'planned', label: 'Planned', href: `/hub/${kit.slug}/campaigns/planned` },
          { id: 'archive', label: 'Archive', href: `/hub/${kit.slug}/campaigns/archive` },
        ]
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: FileText,
        href: `/hub/${kit.slug}/reports`
      }
    ],
    grants: [
      {
        id: 'opportunities',
        label: 'Opportunities',
        icon: Search,
        href: `/hub/${kit.slug}/opportunities`
      },
      {
        id: 'proposals',
        label: 'Proposals',
        icon: FileText,
        expandable: true,
        subItems: [
          { id: 'draft', label: 'Draft', href: `/hub/${kit.slug}/proposals/draft` },
          { id: 'submitted', label: 'Submitted', href: `/hub/${kit.slug}/proposals/submitted` },
          { id: 'awarded', label: 'Awarded', href: `/hub/${kit.slug}/proposals/awarded` },
        ]
      },
      {
        id: 'compliance',
        label: 'Compliance',
        icon: Shield,
        href: `/hub/${kit.slug}/compliance`
      }
    ],
    volunteers: [
      {
        id: 'volunteers',
        label: 'Volunteers',
        icon: Users,
        expandable: true,
        subItems: [
          { id: 'active', label: 'Active', href: `/hub/${kit.slug}/volunteers/active` },
          { id: 'recruiting', label: 'Recruiting', href: `/hub/${kit.slug}/volunteers/recruiting` },
          { id: 'training', label: 'Training', href: `/hub/${kit.slug}/volunteers/training` },
        ]
      },
      {
        id: 'schedules',
        label: 'Schedules',
        icon: Calendar,
        href: `/hub/${kit.slug}/schedules`
      }
    ],
    finance: [
      {
        id: 'budget',
        label: 'Budget',
        icon: DollarSign,
        expandable: true,
        subItems: [
          { id: 'overview', label: 'Overview', href: `/hub/${kit.slug}/budget` },
          { id: 'programs', label: 'Programs', href: `/hub/${kit.slug}/budget/programs` },
          { id: 'admin', label: 'Administration', href: `/hub/${kit.slug}/budget/admin` },
        ]
      },
      {
        id: 'transactions',
        label: 'Transactions',
        icon: Receipt,
        href: `/hub/${kit.slug}/transactions`
      }
    ]
  };

  return baseModules[kit.slug] || [];
};

// Playbook builders for different kit types
export const buildPlaybooksForKit = (kit: KitConfig): PlaybookAction[] => {
  const basePlaybooks: Record<string, PlaybookAction[]> = {
    fundraising: [
      {
        id: 'donor-thank-you',
        label: 'Send Thank You Letters',
        description: 'Generate personalized thank you letters for recent donors',
        category: 'communication'
      },
      {
        id: 'donor-report',
        label: 'Monthly Donor Report',
        description: 'Create comprehensive donor analytics report',
        category: 'report'
      },
      {
        id: 'segment-update',
        label: 'Update Donor Segments',
        description: 'Refresh donor segmentation based on latest data',
        category: 'automation'
      }
    ],
    grants: [
      {
        id: 'proposal-review',
        label: 'Proposal Quality Check',
        description: 'AI-powered review of proposal completeness and quality',
        category: 'analysis'
      },
      {
        id: 'opportunity-match',
        label: 'Match Opportunities',
        description: 'Find grant opportunities matching your programs',
        category: 'automation'
      },
      {
        id: 'compliance-check',
        label: 'Compliance Check',
        description: 'Review requirements and deadlines',
        category: 'analysis'
      }
    ],
    volunteers: [
      {
        id: 'volunteer-match',
        label: 'Match Volunteers',
        description: 'Match volunteers with appropriate opportunities',
        category: 'automation'
      },
      {
        id: 'schedule-update',
        label: 'Update Schedules',
        description: 'Sync volunteer schedules across platforms',
        category: 'automation'
      },
      {
        id: 'recognition-report',
        label: 'Recognition Report',
        description: 'Generate volunteer appreciation materials',
        category: 'report'
      }
    ]
  };

  return basePlaybooks[kit.slug] || [
    {
      id: 'general-report',
      label: 'Generate Report',
      description: 'Create a report for this module',
      category: 'report'
    },
    {
      id: 'data-sync',
      label: 'Sync Data',
      description: 'Update data from connected sources',
      category: 'automation'
    }
  ];
};

// Audit log generator
export const generateAuditLog = (kit: KitConfig): AuditLogEntry[] => {
  const now = new Date();
  return [
    {
      id: '1',
      timestamp: new Date(now.getTime() - 2 * 60 * 1000),
      action: 'Generated donor report',
      user: 'System',
      resource: 'Reports',
      status: 'success'
    },
    {
      id: '2',
      timestamp: new Date(now.getTime() - 5 * 60 * 1000),
      action: 'Updated contact segments',
      user: 'AI Agent',
      resource: 'Donors',
      status: 'success'
    },
    {
      id: '3',
      timestamp: new Date(now.getTime() - 8 * 60 * 1000),
      action: 'Sent thank you emails',
      user: 'Admin User',
      resource: 'Communications',
      details: '24 emails sent',
      status: 'success'
    },
    {
      id: '4',
      timestamp: new Date(now.getTime() - 15 * 60 * 1000),
      action: 'Data import failed',
      user: 'System',
      resource: 'Database',
      details: 'CSV format error',
      status: 'error'
    }
  ];
};
