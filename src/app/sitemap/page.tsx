'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Home, 
  Users, 
  BookOpen, 
  Briefcase,
  MessageSquare,
  Settings,
  HelpCircle,
  FileText,
  Globe,
  Zap,
  Target,
  Award,
  Calendar,
  ChevronRight,
  ExternalLink,
  Clock,
  Star,
  Bot,
  Heart,
  BarChart3,
  Mail,
  Shield,
  Database,
  Palette,
  Map,
  Folder
} from 'lucide-react'
import { useState } from 'react'

const siteStructure = [
  {
    category: "Main Platform",
    icon: Home,
    pages: [
      { 
        title: "Home", 
        path: "/", 
        description: "AI-powered home agent and platform overview",
        updated: "2025-09-04",
        status: "live"
      },
      { 
        title: "About", 
        path: "/about", 
        description: "Our mission, team, and story",
        updated: "2025-08-25",
        status: "live"
      },
      { 
        title: "Expert Publisher Guide", 
        path: "/expert-publisher-guide", 
        description: "Complete guide for thought leader platform",
        updated: "2025-09-04",
        status: "live"
      },
      { 
        title: "What You Get", 
        path: "/what-you-get", 
        description: "Complete breakdown of platform features",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Products", 
        path: "/products", 
        description: "TrailMap, TrailKits, and advisory services",
        updated: "2025-08-28",
        status: "live"
      }
    ]
  },
  {
    category: "Assessment & Tools",
    icon: Target,
    pages: [
      { 
        title: "TrailMap Assessment", 
        path: "/assessment", 
        description: "AI readiness evaluation for nonprofits",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Agent Assessment", 
        path: "/agent-assessment", 
        description: "AI agent capability assessment",
        updated: "2025-09-01",
        status: "live"
      },
      { 
        title: "TrailMap", 
        path: "/trailmap", 
        description: "5-stage AI maturity framework",
        updated: "2025-08-28",
        status: "live"
      },
      { 
        title: "TrailKits Library", 
        path: "/kits", 
        description: "15 specialized modules for nonprofit operations",
        updated: "2025-08-27",
        status: "live"
      },
      { 
        title: "AI Workspace", 
        path: "/ai-workspace", 
        description: "Interactive AI tools and templates",
        updated: "2025-08-26",
        status: "live"
      }
    ]
  },
  {
    category: "Dashboards & Analytics",
    icon: BarChart3,
    pages: [
      { 
        title: "Analytics Dashboard", 
        path: "/analytics", 
        description: "Track progress and measure impact",
        updated: "2025-08-24",
        status: "live"
      },
      { 
        title: "Fundraising Dashboard", 
        path: "/fundraising-dashboard", 
        description: "Complete nonprofit fundraising management system",
        updated: "2025-09-04",
        status: "live"
      },
      { 
        title: "Main Dashboard", 
        path: "/dashboard", 
        description: "Central platform dashboard",
        updated: "2025-08-28",
        status: "live"
      }
    ]
  },
  {
    category: "AI Agents & Intelligence",
    icon: Bot,
    pages: [
      { 
        title: "Intake Flow", 
        path: "/intake-flow", 
        description: "AI-powered meeting agent and strategic planning",
        updated: "2025-09-04",
        status: "live"
      },
      { 
        title: "Content System", 
        path: "/content-system", 
        description: "AI-driven content creation and management",
        updated: "2025-08-26",
        status: "live"
      },
      { 
        title: "Distribution", 
        path: "/distribution", 
        description: "Multi-channel content distribution",
        updated: "2025-08-24",
        status: "live"
      }
    ]
  },
  {
    category: "Learning & Community",
    icon: BookOpen,
    pages: [
      { 
        title: "Blog", 
        path: "/blog", 
        description: "Insights, best practices, and sector news",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Case Studies", 
        path: "/case-studies", 
        description: "Success stories and implementation examples",
        updated: "2025-08-27",
        status: "live"
      },
      { 
        title: "Hikes (Workshops)", 
        path: "/hikes", 
        description: "Guided learning experiences and cohorts",
        updated: "2025-08-26",
        status: "live"
      },
      { 
        title: "Community Hub", 
        path: "/hub", 
        description: "Connect with peers and share experiences",
        updated: "2025-08-28",
        status: "live"
      },
      { 
        title: "Authors & Experts", 
        path: "/authors", 
        description: "Meet our contributors and thought leaders",
        updated: "2025-08-25",
        status: "live"
      }
    ]
  },
  {
    category: "Services & Support", 
    icon: Users,
    pages: [
      { 
        title: "Advisory Services", 
        path: "/advisory", 
        description: "Expert guidance and implementation support",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Support Center", 
        path: "/support", 
        description: "Help articles, tutorials, and community",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Partnerships", 
        path: "/partnerships", 
        description: "Join our ecosystem of mission-driven partners",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Search", 
        path: "/search", 
        description: "Site-wide content search",
        updated: "2025-08-20",
        status: "live"
      }
    ]
  },
  {
    category: "Intake & Client Management",
    icon: MessageSquare,
    pages: [
      { 
        title: "Intake Portal", 
        path: "/intake", 
        description: "Client onboarding and discovery",
        updated: "2025-09-01",
        status: "live"
      },
      { 
        title: "Discovery Process", 
        path: "/intake/discovery", 
        description: "Deep-dive client discovery workflow",
        updated: "2025-09-01",
        status: "live"
      },
      { 
        title: "Tools Assessment", 
        path: "/intake/tools", 
        description: "Current tools and systems evaluation",
        updated: "2025-09-01",
        status: "live"
      },
      { 
        title: "Template System", 
        path: "/template", 
        description: "Reusable templates and frameworks",
        updated: "2025-08-28",
        status: "live"
      }
    ]
  },
  {
    category: "Design & Development",
    icon: Palette,
    pages: [
      { 
        title: "Design System", 
        path: "/design-system", 
        description: "UI components and design guidelines",
        updated: "2025-08-23",
        status: "live"
      },
      { 
        title: "Interface Comparison", 
        path: "/interface-comparison", 
        description: "Before/after interface examples",
        updated: "2025-08-22",
        status: "live"
      },
      { 
        title: "Comparison Tools", 
        path: "/comparison", 
        description: "Feature and competitor comparisons",
        updated: "2025-08-25",
        status: "live"
      }
    ]
  },
  {
    category: "Company & Communication",
    icon: Globe,
    pages: [
      { 
        title: "Team & Leadership", 
        path: "/team", 
        description: "Meet the people behind TrailGuide",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "News & Updates", 
        path: "/news", 
        description: "Latest announcements and media coverage",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Newsletter", 
        path: "/newsletter", 
        description: "Subscribe to updates and insights",
        updated: "2025-08-27",
        status: "live"
      },
      { 
        title: "Contact Us", 
        path: "/contact", 
        description: "Get in touch with our team",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Media Kit", 
        path: "/media", 
        description: "Press resources and brand assets",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Potential Promo", 
        path: "/potential-promo", 
        description: "Marketing and promotional materials",
        updated: "2025-08-26",
        status: "live"
      }
    ]
  },
  {
    category: "Ethics & Compliance",
    icon: Shield,
    pages: [
      { 
        title: "Ethics Framework", 
        path: "/ethics", 
        description: "Our commitment to responsible AI",
        updated: "2025-08-28",
        status: "live"
      },
      { 
        title: "Privacy Policy", 
        path: "/privacy", 
        description: "How we protect your information",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Terms of Service", 
        path: "/terms", 
        description: "Platform usage terms and conditions",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Data Practices", 
        path: "/data", 
        description: "Transparent data collection and usage",
        updated: "2025-08-29",
        status: "live"
      },
      { 
        title: "Accessibility", 
        path: "/accessibility", 
        description: "Our commitment to inclusive design",
        updated: "2025-08-29",
        status: "live"
      }
    ]
  }
]

const dynamicPages = [
  {
    category: "Blog Content",
    icon: FileText,
    pattern: "/blog/[slug]",
    examples: [
      { title: "Board-Ready AI Reports Template", path: "/blog/board-ready-ai-reports-template", status: "published" },
      { title: "Nonprofit Grant Sprint Guide", path: "/blog/nonprofit-grant-sprint-guide", status: "published" },
      { title: "Orientation-First AI Journey", path: "/blog/orientation-first-ai-journey", status: "published" }
    ],
    additional: [
      { title: "Blog Archive", path: "/blog/page/[page]", description: "Paginated blog content" },
      { title: "Blog Tags", path: "/blog/tags", description: "All content tags" },
      { title: "Tag Archives", path: "/blog/tags/[tag]", description: "Posts by tag" }
    ]
  },
  {
    category: "Author Profiles",
    icon: Users,
    pattern: "/authors/[handle]", 
    examples: [
      { title: "Alex Rodriguez", path: "/authors/alex-r", status: "active" },
      { title: "K. Brisco", path: "/authors/k-brisco", status: "active" }
    ]
  },
  {
    category: "TrailKit Modules",
    icon: Zap,
    pattern: "/kits/[kit] & /hub/[kit]",
    examples: [
      { title: "Fundraising Toolkit", path: "/kits/fundraising", status: "active" },
      { title: "Grant Writing Kit", path: "/kits/grants", status: "active" }
    ],
    additional: [
      { title: "Hub Kit Access", path: "/hub/[kit]", description: "Community access to TrailKits" },
      { title: "Legacy Hub", path: "/hub-old/[kit]", description: "Previous hub implementation" }
    ]
  },
  {
    category: "Learning Experiences",
    icon: Calendar,
    pattern: "/hikes/[id]",
    examples: [
      { title: "Grant Writing Sprint", path: "/hikes/grant-sprint", status: "active" },
      { title: "Communications Workshop", path: "/hikes/comms-sprint", status: "active" },
      { title: "Fundraising Bootcamp", path: "/hikes/fundraising-intensive", status: "active" }
    ]
  },
  {
    category: "Case Studies",
    icon: Award,
    pattern: "/case-studies/[slug]",
    examples: [
      { title: "Alan Hirsch Transformation", path: "/case-studies/alan-hirsch", status: "featured" }
    ]
  }
]

const apiRoutes = [
  {
    category: "AI Agents",
    endpoints: [
      { path: "/api/home-agent", description: "Home page AI agent with streaming responses" },
      { path: "/api/meeting-agent", description: "Meeting dictation and coaching agent" },
      { path: "/api/ai/*", description: "Additional AI agent endpoints" }
    ]
  },
  {
    category: "Assessment",
    endpoints: [
      { path: "/api/assessments/*", description: "Assessment processing and scoring" }
    ]
  },
  {
    category: "Communication",
    endpoints: [
      { path: "/api/nominate/*", description: "Nomination and referral system" },
      { path: "/api/voice/*", description: "Voice processing capabilities" }
    ]
  }
]

const developmentPages = [
  {
    category: "Internal Tools",
    pages: [
      { title: "Site Map", path: "/sitemap", description: "This comprehensive site overview" },
      { title: "Legacy Hub", path: "/hub-old", description: "Previous hub implementation for reference" }
    ]
  }
]

const recentUpdates = [
  { page: "Home Page Agent", path: "/", date: "2025-09-04", type: "AI Feature" },
  { page: "Fundraising Dashboard", path: "/fundraising-dashboard", date: "2025-09-04", type: "New Page" },
  { page: "Intake Flow", path: "/intake-flow", date: "2025-09-04", type: "AI Feature" },
  { page: "Meeting Agent API", path: "/api/meeting-agent", date: "2025-09-04", type: "API" },
  { page: "Expert Publisher Guide", path: "/expert-publisher-guide", date: "2025-09-04", type: "Content Update" },
  { page: "Agent Assessment", path: "/agent-assessment", date: "2025-09-01", type: "New Feature" },
  { page: "Intake Portal", path: "/intake", date: "2025-09-01", type: "Content Update" },
  { page: "Privacy Policy", path: "/privacy", date: "2025-08-29", type: "Legal Update" },
  { page: "Terms of Service", path: "/terms", date: "2025-08-29", type: "Legal Update" },
  { page: "Data Practices", path: "/data", date: "2025-08-29", type: "New Page" }
]

const statistics = {
  totalPages: 58,
  apiEndpoints: 8,
  blogPosts: 3,
  trailKits: 2,
  hikes: 3,
  caseStudies: 1,
  authors: 2,
  lastUpdated: "2025-09-04"
}

export default function SitemapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filter pages based on search query
  const filteredStructure = searchQuery 
    ? siteStructure.map(category => ({
        ...category,
        pages: category.pages.filter(page => 
          page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          page.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.pages.length > 0)
    : siteStructure

  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-white border-b border-trailguide-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
              Site Map
            </h1>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
              Navigate TrailGuide's platform with ease. Find all pages, resources, and tools 
              designed to accelerate your nonprofit's AI adoption journey.
            </p>
          </div>
          
          {/* Site Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-trailguide-evergreen">{statistics.totalPages}</div>
              <div className="text-sm text-trailguide-slate">Total Pages</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-trailguide-evergreen">{statistics.apiEndpoints}</div>
              <div className="text-sm text-trailguide-slate">API Endpoints</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-trailguide-evergreen">{statistics.blogPosts}</div>
              <div className="text-sm text-trailguide-slate">Blog Posts</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-trailguide-evergreen">{statistics.trailKits}</div>
              <div className="text-sm text-trailguide-slate">TrailKits</div>
            </Card>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-trailguide-slate" />
              <Input 
                placeholder="Search for pages, features, or content..." 
                className="pl-10 py-3 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Globe className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">
                  {siteStructure.reduce((total, category) => total + category.pages.length, 0)}
                </div>
                <div className="text-sm text-trailguide-slate">Total Pages</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">15</div>
                <div className="text-sm text-trailguide-slate">TrailKits</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">25+</div>
                <div className="text-sm text-trailguide-slate">Blog Articles</div>
              </CardContent>
            </Card>
            <Card className="border-trailguide-border text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                <div className="text-2xl font-bold text-trailguide-neutral mb-1">Daily</div>
                <div className="text-sm text-trailguide-slate">Updates</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Site Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            Platform Navigation
          </h2>
          
          <div className="space-y-8">
            {filteredStructure.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="border-trailguide-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Icon className="h-6 w-6 mr-3 text-trailguide-evergreen" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.pages.map((page, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-trailguide-border rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Link 
                                href={page.path}
                                className="font-semibold text-trailguide-neutral hover:text-trailguide-evergreen transition-colors"
                              >
                                {page.title}
                              </Link>
                              {page.status && (
                                <Badge 
                                  variant={page.status === 'live' ? 'default' : 'secondary'}
                                  className="text-xs bg-green-100 text-green-800"
                                >
                                  {page.status}
                                </Badge>
                              )}
                              <ChevronRight className="h-4 w-4 text-trailguide-slate" />
                            </div>
                            <p className="text-sm text-trailguide-slate mb-2">{page.description}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {page.updated}
                              </Badge>
                            </div>
                          </div>
                          <Button asChild size="sm" variant="ghost">
                            <Link href={page.path}>
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Dynamic Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">
            Dynamic Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dynamicPages.map((section, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Folder className="h-5 w-5 text-trailguide-slate" />
                    {section.category}
                  </CardTitle>
                  <p className="text-sm text-trailguide-slate font-mono bg-trailguide-slate/5 px-2 py-1 rounded">
                    {section.pattern}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.examples.map((example, i) => (
                      <Link 
                        key={i}
                        href={example.path}
                        className="flex items-center justify-between p-3 border border-trailguide-border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-trailguide-slate" />
                          <span className="text-trailguide-neutral hover:text-trailguide-evergreen">
                            {example.title}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-trailguide-slate" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-trailguide-border">
                    <Link 
                      href={section.pattern.split('/[')[0]}
                      className="text-sm text-trailguide-evergreen hover:text-trailguide-evergreen/80"
                    >
                      View all {section.category.toLowerCase()} →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Routes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 flex items-center">
            <Bot className="h-6 w-6 mr-3 text-trailguide-evergreen" />
            API Routes & Endpoints
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {apiRoutes.map((section, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-trailguide-neutral">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.endpoints.map((endpoint, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-3">
                        <div className="font-mono text-sm text-trailguide-evergreen mb-1">
                          {endpoint.path}
                        </div>
                        <div className="text-sm text-trailguide-slate">
                          {endpoint.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Development Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 flex items-center">
            <Settings className="h-6 w-6 mr-3 text-trailguide-evergreen" />
            Development & Internal Tools
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {developmentPages.map((section, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-trailguide-neutral">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.pages.map((page, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <Link 
                            href={page.path}
                            className="font-medium text-trailguide-neutral hover:text-trailguide-evergreen"
                          >
                            {page.title}
                          </Link>
                          <div className="text-sm text-trailguide-slate mt-1">
                            {page.description}
                          </div>
                        </div>
                        <Button asChild size="sm" variant="ghost">
                          <Link href={page.path}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Updates */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 flex items-center">
            <Clock className="h-6 w-6 mr-3 text-trailguide-evergreen" />
            Recent Updates
          </h2>
          
          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-trailguide-border last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-trailguide-evergreen rounded-full"></div>
                      <div>
                        <Link 
                          href={update.path}
                          className="font-medium text-trailguide-neutral hover:text-trailguide-evergreen"
                        >
                          {update.page}
                        </Link>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            variant={update.type === 'New Page' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {update.type}
                          </Badge>
                          <span className="text-xs text-trailguide-slate">{update.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild size="sm" variant="ghost">
                      <Link href={update.path}>
                        View page
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* XML Sitemap & SEO */}
        <section>
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
                Technical Resources
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Access machine-readable sitemaps and technical documentation for 
                search engines, accessibility tools, and development purposes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">XML Sitemap</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Machine-readable sitemap for search engines
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/sitemap.xml">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View XML
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Settings className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Robots.txt</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Search engine crawling instructions
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/robots.txt">
                      <FileText className="h-4 w-4 mr-2" />
                      View File
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <HelpCircle className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Site Issues</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    Report broken links or accessibility issues
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Report Issue
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-trailguide-slate">
                This sitemap is automatically updated as new content is published. 
                Last generated: {statistics.lastUpdated}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
