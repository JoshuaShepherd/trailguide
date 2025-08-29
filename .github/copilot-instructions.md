# TrailGuide Copilot Instructions

## Core Architecture

TrailGuide is a Next.js 15 nonprofit platform built around **TrailKits** - 15 specialized modules (fundraising, grants, HR, etc.) that share a unified config-driven architecture.

### Kit System (Critical Pattern)
- **Registry**: `src/kits/index.ts` exports `Kits` object and `getKitBySlug()` function
- **Configs**: Each kit defined in `src/kits/*.ts` following `KitConfig` type from `src/types/kit.ts`  
- **Shell**: `src/components/kit-shell.tsx` renders any kit universally via props
- **Routing**: `/hub/[kit]` uses `generateStaticParams()` for all 15 kits

```typescript
// Adding new kit: create config, export, add to registry
export const myKit: KitConfig = {
  slug: 'my-kit',
  stage: 'Adoption', 
  kpis: [...],
  quickActions: [...]
}
```

### Next.js App Router Patterns
- **Async Params**: All dynamic routes use `params: Promise<{}>` - always `await params` first
- **Static Generation**: Use `generateStaticParams()` for SEO and performance
- **Error Handling**: Use `notFound()` from `next/navigation` for missing resources

```typescript
// Standard dynamic route pattern
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();
  return <Component resource={resource} />;
}
```

## Design System & Styling

### TrailGuide Brand Colors (Always Use These)
```css
/* Use these instead of generic Tailwind colors */
bg-trailguide-background   /* #F7F9FA */
text-trailguide-evergreen  /* #3A5A40 */ 
text-trailguide-bronze     /* #C89B3C */
text-trailguide-slate      /* #64748b */
border-trailguide-border   /* #e2e8f0 */
```

### Component Architecture
- **shadcn/ui base**: All UI components extend Radix primitives in `src/components/ui/`
- **Layout components**: Header, Footer, accessibility helpers in `src/components/layout/`
- **Feature modules**: Board, blog, etc. in dedicated folders
- **Utilities**: `cn()` from `src/lib/utils.ts` for conditional classes

## Development Workflows

### Build Commands
```bash
npm run dev    # Turbopack dev server (faster than webpack)
npm run build  # Turbopack production build
npm run lint   # ESLint with strict TypeScript rules
```

### Kit Development
1. Create config in `src/kits/[name].ts` matching `KitConfig` interface
2. Export from appropriate `additional[n].ts` grouping file  
3. Add to `Kits` registry in `src/kits/index.ts`
4. Kit auto-appears at `/hub/[kit]` route via shell component

### QuickAction Integration
Kit actions support two handlers:
- `handler: 'server'` → calls `endpoint` URL for server logic
- `handler: 'agent'` → triggers AI with `promptId` for LLM processing

```typescript
quickActions: [
  { 
    id: 'server-action',
    handler: 'server', 
    endpoint: '/api/kits/fundraising/analyze' 
  },
  { 
    id: 'ai-action', 
    handler: 'agent', 
    promptId: 'donor_appeal_v1' 
  }
]
```

## Project-Specific Conventions

- **Imports**: Use `@/` alias for `src/` directory
- **Types**: Comprehensive TypeScript definitions in `src/types/`
- **Data**: Static content and configs in `src/data/`
- **Icons**: Import specific icons from `lucide-react` (500+ available)
- **Accessibility**: Built-in `SkipLink` and `FocusManager` in root layout

### AI Agent Development
Follow vendor patterns from `vendor/` directories only. Never create custom implementations outside vendor specifications. Use Zod validation at all boundaries.

Focus on the TrailKit architecture - it's the core innovation enabling extensible nonprofit management through unified configuration patterns.

## 🧰 Vendor SDKs (use only these patterns)

All agent code must follow patterns and APIs found in our vendored directories (do not import from the internet, do not invent new APIs):

- `vendor/openai-agents-js-main/` – Core Agents framework & examples
- `vendor/openai-realtime-agents-main/` – Realtime agents UI (Next.js)
- `vendor/openai-realtime-api-beta-main/` – Realtime WS client

When building agents or tools:

1. Read the README + examples in these dirs.
2. Reuse provided utilities, types, and tool patterns.
3. Provide Zod validators at tool boundaries.
4. Never invent new transport layers or unsupported APIs.