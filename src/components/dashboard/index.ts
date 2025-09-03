// Unified Dashboard Shell Components
export { default as UnifiedShell } from './UnifiedShell';
export { KPIBar } from './KPIBar';
export { AgentConsole } from './AgentConsole';
export { PlaybooksBar } from './PlaybooksBar';
export { EnhancedSidebar } from './EnhancedSidebar';
export { MainCanvas } from './MainCanvas';

// Configuration utilities
export {
  buildNavigationForKit,
  buildPlaybooksForKit,
  generateAuditLog,
  type NavigationItem,
  type NavigationSubItem,
  type PlaybookAction,
  type AuditLogEntry,
  type ShellConfiguration
} from './shell-config';

// Re-export types for convenience
export type {
  KitConfig,
  OrgContext,
  Kpi,
  QuickAction,
  Snapshot,
  Guardrail,
  TrailStage
} from '@/types/kit';
