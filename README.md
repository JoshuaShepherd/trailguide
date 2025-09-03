# 🏔️ TrailGuide

> **AI-powered nonprofit operations platform with 15 specialized TrailKits for transforming organizational impact**

TrailGuide is a comprehensive nonprofit management platform that combines AI-powered insights, automated workflows, and industry best practices to help organizations at every stage of their digital transformation journey.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJoshuaShepherd%2Ftrailguide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-blueviolet.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org)

## ⚡ **Quick Start**

### Prerequisites
- **Node.js**: v18.17 or higher (v20.19.2 recommended)
- **npm**: v8 or higher

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/JoshuaShepherd/trailguide.git
cd trailguide

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env.local

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables
See `.env.example` for available configuration options. All variables are optional for basic functionality.

## 🚀 **Key Features**

### 🎯 **TrailHub: 15 Specialized TrailKits**
- **Fundraising & Revenue**: Fundraising & Development, Major Gifts, Grants
- **Programs & Impact**: Programs, Communications, Events, Volunteers
- **Operations & Management**: Finance, HR, Compliance, Board Relations  
- **Strategy & Partnerships**: Partnerships, Data & Evaluation, IT & Security, Strategy & OKRs

### 🧭 **TrailMap Assessment**
- Interactive 5-stage maturity model (Awareness → Leadership)
- Personalized recommendations based on organizational stage
- Progress tracking and milestone achievements

### 🤖 **AI-Powered Workflows**
- 75+ context-aware quick actions across all functional areas
- Kit-specific AI assistants with built-in guardrails
- Automated document generation and insights

### 📊 **Comprehensive Analytics**
- Real-time KPI dashboards with trend analysis
- Data visualization with charts, tables, and metrics
- Performance tracking across all nonprofit functions

### 📚 **Learning & Resources**
- Complete blog system with industry insights
- TrailHike learning modules and best practices
- Case studies and implementation guides

## 🛠️ **Tech Stack**

## 🛠️ **Tech Stack**

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript 5.0 with strict mode
- **Styling**: Tailwind CSS 3.4 with custom design system
- **UI Components**: shadcn/ui with Radix primitives
- **Icons**: Lucide React with 500+ consistent icons
- **Animations**: Framer Motion for micro-interactions
- **Deployment**: Vercel with automatic CI/CD

## 🏃‍♂️ **Quick Start**

```bash
# Clone and setup
git clone https://github.com/JoshuaShepherd/trailguide.git
cd trailguide
npm install

# Development
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build (generates 45+ static pages)
npm run start        # Start production server
npm run lint         # ESLint with TypeScript rules
npm run type-check   # TypeScript compilation check
```

## 📁 **Project Structure**

```
trailguide/
├── src/
│   ├── app/                    # App Router pages & layouts
│   │   ├── hub/               # TrailHub dashboard & kits
│   │   ├── blog/              # Blog system with MDX
│   │   ├── assessment/        # TrailMap assessment tool
│   │   └── api/               # API routes (future)
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui base components
│   │   ├── layout/           # Navigation, headers, footers
│   │   └── forms/            # Form components & validation
│   ├── kits/                 # 15 TrailKit configurations
│   │   ├── fundraising/      # Fundraising & Development
│   │   ├── major-gifts/      # Major Gifts Management
│   │   ├── grants/           # Grant Writing & Management
│   │   └── ...               # 12 additional kits
│   ├── types/                # TypeScript definitions
│   └── lib/                  # Utilities & configurations
├── public/                   # Static assets
└── docs/                    # Documentation & guides
```

## 🏅 **TrailKits Overview**

Each TrailKit includes dashboard, workflows, analytics, and AI-powered tools:

| **Kit** | **Focus Area** | **Key Features** |
|---------|----------------|------------------|
| 🎯 **Fundraising & Development** | Revenue Generation | Donor management, campaign tracking, revenue analytics |
| 💎 **Major Gifts** | High-Value Relationships | Prospect research, relationship mapping, gift pipeline |
| 📋 **Grants** | Grant Management | Opportunity tracking, application workflows, compliance |
| 🚀 **Programs** | Service Delivery | Impact measurement, beneficiary tracking, outcomes |
| 📢 **Communications** | Brand & Messaging | Content strategy, channel management, engagement metrics |
| 🎪 **Events** | Experience Design | Registration, logistics, attendee engagement, ROI |
| 🤝 **Volunteers** | Community Building | Recruitment, scheduling, recognition, retention |
| 💰 **Finance** | Financial Health | Budgeting, reporting, compliance, sustainability |
| 👥 **HR** | People Operations | Talent management, performance, culture, wellbeing |
| ✅ **Compliance** | Risk Management | Legal requirements, audits, policies, governance |
| 🏛️ **Board Relations** | Governance Excellence | Meeting management, engagement, strategic alignment |
| 🤝 **Partnerships** | Strategic Alliances | Relationship building, collaboration, shared impact |
| 📊 **Data & Evaluation** | Evidence-Based Impact | Metrics, analysis, reporting, continuous improvement |
| 🔐 **IT & Security** | Technology Infrastructure | Systems, security, data protection, digital capacity |
| 🎯 **Strategy & OKRs** | Organizational Direction | Planning, goal-setting, execution, accountability |

## 🎯 **TrailMap Assessment Stages**

**Stage 1: Awareness** - Basic understanding of nonprofit fundamentals
**Stage 2: Developing** - Building systematic approaches and processes  
**Stage 3: Practicing** - Implementing consistent, measurable practices
**Stage 4: Advancing** - Optimizing with data-driven decision making
**Stage 5: Leadership** - Industry leadership and innovation

## 🤖 **AI-Powered Features**

- **Intelligent Workflows**: Context-aware automation for routine tasks
- **Personalized Insights**: Custom recommendations based on organizational data
- **Document Generation**: Automated reports, proposals, and communications
- **Trend Analysis**: Predictive analytics for strategic planning
- **Natural Language Queries**: Ask questions about your data in plain English

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
# Deploy to Vercel
npm install -g vercel
vercel --prod
```

### **Manual Deployment**
```bash
# Build and export
npm run build
# Deploy the .next folder to your hosting provider
```

## 🤝 **Contributing**

TrailGuide is designed for the nonprofit community. We welcome contributions:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **shadcn/ui** for the beautiful component library
- **Vercel** for excellent Next.js hosting
- **Lucide** for comprehensive icon system
- **Tailwind CSS** for utility-first styling
- **The nonprofit community** for inspiring this platform

---

**Ready to transform your nonprofit operations?** 

[![Deploy TrailGuide](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJoshuaShepherd%2Ftrailguide)

*Built with ❤️ for nonprofits making the world better*

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage component
├── components/         # Reusable components
│   └── ui/             # shadcn/ui components
└── lib/                # Utility functions
    └── utils.ts        # cn() utility and other helpers
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## shadcn/ui Components

This project includes the following shadcn/ui components:
- Button
- Card 
- Input

Add more components with:
```bash
npx shadcn@latest add [component-name]
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
