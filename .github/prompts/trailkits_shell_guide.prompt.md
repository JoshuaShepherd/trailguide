---
mode: agent
---
# TrailGuide Unified Dashboard Shell – Prompt Engineering Guide

This guide defines the **standard dashboard shell/structure** that every TrailKit uses.  
It provides a **single UX formula** that ensures consistency, scalability, and intuitive use across all nonprofit and thought-leader toolkits.  

The coding agent should treat this as the **master template** to be applied modularly, with each TrailKit swapping in its own modules, KPIs, and workflows inside the same structural frame.

---

## 1. Core Philosophy

- **One Shell, Many Kits**: Every TrailKit lives inside the same dashboard frame. The user should never need to re-learn navigation.  
- **Consistency Over Customization**: Customization happens in **modules/content**, not in the core UX layout.  
- **Agent-First**: Every dashboard includes an **Agent Console** that is transparent, auditable, and consistent across kits.  
- **Modular**: Each functional block (sidebar, KPI bar, main canvas, agent drawer, playbooks bar) is a reusable component.  
- **Scalable**: Adding a new TrailKit = new KPIs + new module views inside the same skeleton.

---

## 2. Layout Structure (Universal)

### A) Sidebar (Left Navigation)
- Persistent vertical nav
- Contains:
  - **Logo + Brand Marker** (TrailGuide/Kit identity)
  - **Primary Nav Items** (Dashboard, Work, Data, Messages, Insights, Settings)
  - **Expandable Sections** (per TrailKit modules, e.g., Fundraising → Donors, Campaigns, Reports)
  - **User Profile/Org Switcher** (bottom)

**Best Practice**:  
- Icon + label for each nav item  
- Keep hierarchy shallow (max 2 levels deep)  

---

### B) Top KPI Bar
- Always present above the main canvas
- Displays **4–6 live KPI tiles** relevant to the active TrailKit
- Tiles are interactive → drill down to detailed reports
- Includes **date range / filter controls**

**Example KPIs**:  
- Fundraising Kit → “YTD Raised”, “Active Donors”, “Pipeline Value”  
- Volunteer Kit → “Active Volunteers”, “Hours Served”  
- Finance Kit → “Budget vs Actual”, “Cash on Hand”  

---

### C) Main Canvas (Dashboard Body)
- Flexible grid system for primary content
- Default tabs:
  1. **Overview Dashboard** (charts, tables, activity feeds)
  2. **Workflows/Tasks** (kanban, pipeline, campaigns, sprints)
  3. **Data Records** (CRM-like view with search/filter/sort)
  4. **Messages/Comms** (email/SMS/logs integration)
  5. **Insights/Reports** (visual analytics, exports)
  6. **Settings** (kit-specific config)

**Rule**: Each TrailKit defines what content fills these tabs, but structure/order is fixed.

---

### D) Right Drawer (Agent Console)
- Slide-out pane anchored to right
- Functions:
  - **Chat Interface** (to AI agent, pre-trained on TrailKit domain)
  - **Task Log** (transparent record of actions taken by agent)
  - **Action Buttons** (Run playbook, generate report, create donor segment, etc.)
  - **Explainability Layer** (summaries of why an action was taken)

**Always Available**: User can open this drawer in any context.

---

### E) Bottom Bar (Playbooks & Audit)
- Persistent thin bar at bottom of screen
- Functions:
  - **Playbook Launcher** (quick access to saved automations, e.g., “Send Donor Update”, “Generate Volunteer Roster”)
  - **Audit Log Toggle** (compliance view of recent activity, exportable)

**Key Principle**: This ensures accountability and repeatability across all TrailKits.

---

## 3. UX Flow

1. **User Signs In** → lands on **TrailGuide Home** (select active TrailKit or bundled dashboard).
2. **Sidebar** → navigate between TrailKits or modules.
3. **Top KPI Bar** → immediate glanceable metrics.  
4. **Main Canvas** → perform work in structured tabs.  
5. **Right Drawer Agent Console** → request help, delegate tasks, review automation.  
6. **Bottom Bar** → run saved playbooks or check compliance.

---

## 4. Design System Rules

- **Typography**: Consistent across kits (from TrailGuide brand guidelines).  
- **Color Tokens**: Each TrailKit may have an accent color but must follow global theme tokens.  
- **Grid Layout**: Fixed breakpoints for responsive design.  
- **Accessibility**: WCAG AA compliance baseline.  
- **Interactivity**: All actions traceable through Agent Console + Audit Log.  

---

## 5. Adaptation for Each TrailKit

- **Shared Components**: Sidebar, KPI bar, agent console, playbooks bar  
- **Swappable Content**: KPIs, modules, data schema, reports  
- **Agent Prompts**: Pre-configured per kit (e.g., fundraising agent vs volunteer agent)  
- **Theming**: Accent color + kit logo/marker  

---

## 6. Deliverables for Each Kit Build

When creating a new TrailKit, the dev agent must deliver:

1. **KPI Definitions** (tiles + drill-down views)  
2. **Module Screens** (overview dashboard + 3–5 main submodules)  
3. **Agent Prompt Pack** (system prompts + tool functions wired to APIs)  
4. **Playbook Library** (5–10 common automations relevant to this kit)  
5. **Compliance/Audit Schema** (logging what matters in this domain)  

---

## 7. Summary

All TrailKits = **same skeleton**, **different muscles**.  
By fixing the layout, TrailGuide ensures:
- Ease of learning for users  
- Rapid dev through reusable components  
- Unified identity across nonprofit + thought leader markets  
- Maximum agentic integration consistency