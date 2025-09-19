# Interface Evolution Documentation

This document explains the interface evolution in TrailGuide and how to navigate between the legacy and unified implementations.

## Route Structure

### Current (Unified Shell) - Primary Interface
- `/dashboard` - Unified dashboard landing page showcasing all kits
- `/hub/[kit]` - Individual kits using the Unified Shell (new implementation)
  - Examples: `/hub/fundraising`, `/hub/grants`, etc.

### Legacy (Original KitShell) - Preserved for Comparison  
- `/hub-old` - Legacy hub overview page
- `/hub-old/[kit]` - Individual kits using the original KitShell implementation
  - Examples: `/hub-old/fundraising`, `/hub-old/grants`, etc.

### Comparison & Documentation
- `/interface-comparison` - Side-by-side comparison of both approaches
- Navigation includes links to both versions for easy discovery

## Key Differences

### Legacy KitShell (hub-old)
- Individual kit implementations with custom layouts
- Tab-based navigation (Overview, Actions, Data, Docs, Learn)
- Right sidebar agent panel
- Kit-specific branding and layouts
- Simple search and basic functionality

### Unified Dashboard Shell (hub)
- Single shell architecture consistent across all kits
- Enhanced sidebar with universal navigation + kit-specific modules  
- Top KPI bar, right agent console drawer, bottom playbooks bar
- AI-first design with transparent agent interactions
- Audit logging and compliance features
- Global search and unified branding

## Implementation Philosophy

Following the TrailKits Shell Guide specifications:
- **"One Shell, Many Kits"** - Consistent UX that users never need to re-learn
- **Modular Components** - Reusable sidebar, KPI bar, agent console, playbooks bar
- **Swappable Content** - Kit-specific KPIs, modules, and workflows inside universal structure
- **Agent-First** - Integrated AI assistance with transparency and auditability

## Navigation Discovery

Users can discover both versions through:
1. Main navigation → Platform → TrailHub vs TrailHub (Legacy)
2. Main navigation → Platform → Interface Comparison  
3. Dashboard landing page buttons → Compare Interfaces, View Legacy Version
4. In-app banners on legacy pages linking to new unified versions

## Technical Implementation

- Legacy routes preserve original `KitShell` component
- Unified routes use new `UnifiedShell` component following shell guide specifications
- Both implementations co-exist without conflicts
- Easy comparison and migration path for users
- Full backward compatibility maintained

This architecture allows users to experience both approaches while gradually transitioning to the unified shell system.
