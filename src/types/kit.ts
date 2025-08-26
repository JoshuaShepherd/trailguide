export type QuickAction = {
  id: string;
  label: string;
  description?: string;
  icon?: string; // lucide name
  inputs?: Record<string, unknown>; // optional prefilled params
  handler: 'server' | 'agent'; // where it runs
  endpoint?: string; // for server
  promptId?: string; // for agent
};

export type Kpi = {
  id: string;
  label: string;
  value: string | number | null;
  delta?: number; // +/- percentage
  period?: string; // "30d"
  format?: 'currency' | 'percent' | 'number' | 'string';
};

export type Snapshot = {
  id: string;
  type: 'chart' | 'table' | 'list';
  title: string;
  source: 'supabase' | 'sheet' | 'airtable' | 'static';
  query?: string; // e.g., SQL/airtable formula
  sheetId?: string;
  table?: string;
  columns?: string[];
  data?: unknown[]; // mock data for now
};

export type LearnLink = { 
  label: string; 
  href: string; 
};

export type Guardrail = { 
  title: string; 
  body: string; 
};

export type TrailStage = 'Awareness' | 'Experimentation' | 'Adoption' | 'Optimization' | 'Leadership';

export type KitConfig = {
  slug: string; // 'fundraising', etc.
  name: string;
  stage: TrailStage;
  description: string;
  kpis: Kpi[];
  quickActions: QuickAction[];
  snapshots?: Snapshot[];
  docs?: string[]; // asset ids/paths
  learn?: LearnLink[];
  guardrails?: Guardrail[];
  dataBindings?: Record<string, unknown>; // integration hints
  colorAccent?: string; // subtle brand color for kit
};

export type OrgContext = {
  id: string;
  name: string;
  role: 'admin' | 'member';
  integrations?: Record<string, unknown>;
};

export type KitContext = {
  kit: KitConfig;
  stage: TrailStage;
};

export type AIContext = {
  threadId?: string;
  lastResult?: unknown;
  citations?: string[];
};

export type AgentRequest = {
  orgId: string;
  kit: string;
  userId: string;
  role: 'admin' | 'member';
  action: string;
  inputs?: Record<string, unknown>;
  context: {
    kpis: Kpi[];
    selectedRecords?: unknown[];
    docs?: string[];
    stage: TrailStage;
  };
};
