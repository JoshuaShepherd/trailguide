import { KitConfig } from '../types/kit';
import { fundraisingKit } from './fundraising';
import { grantsKit } from './grants';
import { 
  communicationsKit, 
  programsKit, 
  eventsKit 
} from './additional1';
import { 
  volunteerKit, 
  financeKit, 
  hrKit 
} from './additional2';
import { 
  complianceKit, 
  boardKit, 
  partnershipsKit 
} from './additional3';
import { 
  dataKit, 
  itKit, 
  strategyKit, 
  majorGiftsKit 
} from './additional4';

// Master registry of all TrailKits
export const Kits: Record<string, KitConfig> = {
  // Core fundraising kits
  fundraising: fundraisingKit,
  'major-gifts': majorGiftsKit,
  grants: grantsKit,
  
  // Program & operations kits
  programs: programsKit,
  communications: communicationsKit,
  events: eventsKit,
  volunteers: volunteerKit,
  
  // Organizational management kits
  finance: financeKit,
  hr: hrKit,
  compliance: complianceKit,
  board: boardKit,
  
  // Strategic & collaborative kits
  partnerships: partnershipsKit,
  data: dataKit,
  it: itKit,
  strategy: strategyKit,
};

// Helper functions
export function getKitBySlug(slug: string): KitConfig | undefined {
  return Kits[slug];
}

export function getAllKits(): KitConfig[] {
  return Object.values(Kits);
}

export function getKitsByStage(stage: string): KitConfig[] {
  return getAllKits().filter(kit => kit.stage === stage);
}

export function getKitCategories() {
  return {
    'Fundraising & Revenue': [
      Kits.fundraising,
      Kits['major-gifts'],
      Kits.grants
    ],
    'Programs & Impact': [
      Kits.programs,
      Kits.communications,
      Kits.events,
      Kits.volunteers
    ],
    'Operations & Management': [
      Kits.finance,
      Kits.hr,
      Kits.compliance,
      Kits.board
    ],
    'Strategy & Partnerships': [
      Kits.partnerships,
      Kits.data,
      Kits.it,
      Kits.strategy
    ]
  };
}

// Kit configuration validation
export function validateKitConfig(kit: KitConfig): string[] {
  const errors: string[] = [];
  
  if (!kit.slug) errors.push('Missing kit slug');
  if (!kit.name) errors.push('Missing kit name');
  if (!kit.description) errors.push('Missing kit description');
  if (!kit.kpis || kit.kpis.length === 0) errors.push('Kit must have at least one KPI');
  if (!kit.quickActions || kit.quickActions.length === 0) errors.push('Kit must have at least one quick action');
  
  return errors;
}

// Default kit for fallback
export const defaultKit: KitConfig = {
  slug: 'default',
  name: 'Default Kit',
  stage: 'Awareness',
  description: 'A basic kit configuration',
  colorAccent: 'gray',
  kpis: [
    { id: 'placeholder', label: 'Placeholder Metric', value: 0, format: 'number' }
  ],
  quickActions: [
    { id: 'placeholder', label: 'Placeholder Action', icon: 'Settings', handler: 'agent', promptId: 'placeholder' }
  ],
  guardrails: [
    { title: 'Under Construction', body: 'This kit is being configured. Please check back later.' }
  ]
};
