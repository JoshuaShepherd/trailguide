# TrailGuide App Index

## Application Status: ✅ Deployment Ready

**Main App**: TrailGuide - Nonprofit Operations Platform  
**Framework**: Next.js 15 (App Router)  
**Language**: TypeScript  
**Package Manager**: npm  
**Build Status**: ✅ Passing  
**Dev Server**: ✅ Running on localhost:3003  
**Git Branch**: chore/run-trailguide  

## Core Architecture

### TrailKit System
15 specialized modules for nonprofit management:
- Fundraising, Grants, Board Relations, Volunteer Management
- HR, Finance, Programs, Impact Measurement
- Communications, Events, Compliance, Strategy
- Operations, Technology, Partnerships

### Technology Stack
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui + Radix primitives
- **AI Integration**: OpenAI GPT-4 for assessment and insights
- **Deployment**: Vercel-ready with static generation

## Key Files & Directories

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components  
├── kits/               # TrailKit configurations
├── types/              # TypeScript definitions
└── lib/                # Shared utilities

vendor/                  # Vendored AI agent SDKs
├── openai-agents-js-main/
├── openai-realtime-agents-main/
└── openai-realtime-api-beta-main/
```

## Features Implemented

### ✅ Core Platform
- Voice-powered nonprofit assessment
- 15 specialized TrailKit modules
- AI-driven recommendations
- Blog and content system
- Design system with brand colors

### ✅ Build & Deploy Ready
- Production builds successful
- Static generation optimized
- Environment variables configured
- GitHub workflow ready

## Development Commands

```bash
# Development
npm run dev         # Start dev server (Turbopack disabled)

# Production
npm run build      # Build for production
npm run start      # Start production server

# Code Quality
npm run lint       # ESLint check
```

## Deployment Notes

- **Environment**: Requires `OPENAI_API_KEY` for AI features
- **Build Time**: ~30 seconds for production build
- **Static Pages**: Homepage, about, blog posts, kit pages
- **Dynamic Routes**: `/hub/[kit]`, `/blog/[slug]`, `/authors/[handle]`

## Recent Updates (Latest Session)

1. ✅ Fixed Turbopack routing compatibility issues
2. ✅ Resolved Next.js 15 async params patterns  
3. ✅ Cleaned up directory structure conflicts
4. ✅ Verified production build success
5. ✅ Confirmed development server functionality
6. ✅ Updated README with quick start guide

**Status**: Ready for GitHub push and Vercel deployment
