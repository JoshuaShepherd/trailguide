import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Crown, Lightbulb, Rocket, Target, TrendingUp, Users, Zap, 
  ArrowRight, CheckCircle, Star, Award, Eye, Cog, Brain, 
  BarChart3, Shield, Globe, Palette, Smartphone, Database,
  Mail, Calendar, CreditCard, MessageSquare, Video, Mic,
  BookOpen, FileText, Image, Settings, Monitor, Lock
} from 'lucide-react';

export default function WhatYouGet() {
  const platformComponents = [
    {
      category: "Member Experience & Flows",
      icon: Users,
      visual: true,
      items: [
        { name: "Member Dashboard", description: "Latest posts, saved content, personalized recommendations", demo: "/hub", visual: true },
        { name: "Authentication System", description: "Email/passwordless or OAuth with seamless onboarding", demo: "/expert-publisher/template", visual: false },
        { name: "Subscription Management", description: "Profile, billing, invoices, plan changes", demo: "/expert-publisher/products", visual: true },
        { name: "Community Integration", description: "Forum or chat integration, member connections", demo: "/expert-publisher/template", visual: false },
        { name: "Content Bookmarking", description: "Save content for quick return, reading history", demo: "/blog", visual: false }
      ]
    },
    {
      category: "Complete Monetization Stack",
      icon: CreditCard,
      visual: true,
      items: [
        { name: "Subscription Tiers", description: "Soft and hard paywalls, member-only content", demo: "/expert-publisher/products", visual: true },
        { name: "Stripe Integration", description: "Recurring billing, one-time payments, receipts", demo: "/expert-publisher/products", visual: true },
        { name: "Digital Products", description: "Course enrollments, download delivery, upsells", demo: "/expert-publisher/products", visual: true },
        { name: "Affiliate Program", description: "Referral codes, tracking, commission management", demo: "/platform-features", visual: false },
        { name: "Donation System", description: "One-time and recurring donations with goals", demo: "/platform-features", visual: false }
      ]
    },
    {
      category: "Content Production System",
      icon: FileText,
      visual: true,
      items: [
        { name: "Advanced CMS Editor", description: "Tiptap-based WYSIWYG with blocks, media, SEO", demo: "/expert-publisher/content-system", visual: true },
        { name: "Media Library", description: "Upload, crop, organize assets with CDN delivery", demo: "/expert-publisher/content-system", visual: true },
        { name: "Scheduling & Drafts", description: "Publish in future, autosave, version control", demo: "/expert-publisher/content-system", visual: false },
        { name: "Series & Collections", description: "Group content for long-term reader engagement", demo: "/blog", visual: true },
        { name: "Collaboration Tools", description: "Co-authoring, comments, approval workflows", demo: "/expert-publisher/content-system", visual: false }
      ]
    },
    {
      category: "AI Agent Workspace",
      icon: Brain,
      visual: true,
      items: [
        { name: "Writing Agent", description: "Outline → draft → improve with style presets", demo: "/expert-publisher/ai-workspace", visual: true },
        { name: "Repurposing Agent", description: "Convert posts to emails, threads, social shorts", demo: "/expert-publisher/ai-workspace", visual: true },
        { name: "SEO Agent", description: "Keyword research, title/meta suggestions, internal links", demo: "/expert-publisher/ai-workspace", visual: true },
        { name: "Transcript Agent", description: "Podcast/video transcription with summaries", demo: "/expert-publisher/ai-workspace", visual: false },
        { name: "Analytics Agent", description: "Weekly growth digests, performance insights", demo: "/expert-publisher/ai-workspace", visual: true },
        { name: "Launch Agent", description: "Auto-generate campaigns for products/courses", demo: "/expert-publisher/ai-workspace", visual: true }
      ]
    },
    {
      category: "Distribution & Growth Engine",
      icon: TrendingUp,
      visual: true,
      items: [
        { name: "Email Marketing", description: "Broadcasts, automations, segmented lists", demo: "/expert-publisher/distribution", visual: true },
        { name: "Lead Magnets", description: "Gated resources with automated delivery", demo: "/expert-publisher/distribution", visual: true },
        { name: "SEO Optimization", description: "JSON-LD schema, sitemaps, canonical tags", demo: "/expert-publisher/distribution", visual: false },
        { name: "Social Syndication", description: "Auto-post summaries to X, LinkedIn, etc.", demo: "/expert-publisher/distribution", visual: true },
        { name: "Referral System", description: "Reward sharing, viral growth mechanics", demo: "/expert-publisher/distribution", visual: false }
      ]
    },
    {
      category: "Design System & Templates",
      icon: Palette,
      visual: true,
      items: [
        { name: "Global Theme System", description: "Color tokens, typography scale, responsive spacing", demo: "/expert-publisher/design-system", visual: true },
        { name: "Hero Variants", description: "Full-bleed, split layout, productized hybrid", demo: "/expert-publisher/design-system", visual: true },
        { name: "Reusable Blocks", description: "Features, testimonials, stats, pricing, FAQs", demo: "/expert-publisher/design-system", visual: true },
        { name: "Brand Kit Support", description: "Easy logo/palette/font swapping per client", demo: "/expert-publisher/design-system", visual: true },
        { name: "Dark Mode Toggle", description: "Optional dark theme with smooth transitions", demo: "/expert-publisher/design-system", visual: true }
      ]
    },
    {
      category: "Performance & Accessibility",
      icon: Rocket,
      visual: false,
      items: [
        { name: "Next.js Optimization", description: "Image, fonts, ISR/Edge for maximum speed", demo: "/performance", visual: false },
        { name: "Core Web Vitals", description: "LCP/CLS/INP budgeted and optimized", demo: "/performance", visual: false },
        { name: "Accessibility Compliance", description: "Keyboard, contrast, ARIA, skip links, captions", demo: "/performance", visual: false },
        { name: "Mobile Performance", description: "Responsive design with touch optimization", demo: "/performance", visual: false },
        { name: "SEO Foundation", description: "Meta tags, structured data, sitemap generation", demo: "/performance", visual: false }
      ]
    },
    {
      category: "Analytics & Business Intelligence",
      icon: BarChart3,
      visual: true,
      items: [
        { name: "Business Metrics", description: "Subscriptions, MRR, churn, LTV tracking", demo: "/expert-publisher/analytics", visual: true },
        { name: "Content Analytics", description: "Reads, time, conversion, engagement metrics", demo: "/expert-publisher/analytics", visual: true },
        { name: "Attribution Tracking", description: "UTM, campaign tracking, source analysis", demo: "/expert-publisher/analytics", visual: true },
        { name: "Growth Analytics", description: "Funnel analysis, cohort tracking, predictions", demo: "/expert-publisher/analytics", visual: true },
        { name: "Error Monitoring", description: "Sentry integration, uptime monitoring", demo: "/expert-publisher/analytics", visual: false }
      ]
    },
    {
      category: "Integration Ecosystem",
      icon: Globe,
      visual: false,
      items: [
        { name: "Payment Processing", description: "Stripe for subscriptions, one-time, donations", demo: "/integrations", visual: false },
        { name: "Email Services", description: "Resend/Sendgrid/ConvertKit for newsletters", demo: "/integrations", visual: false },
        { name: "Authentication", description: "NextAuth/Clerk for secure user management", demo: "/integrations", visual: false },
        { name: "Database Systems", description: "Supabase/Postgres for scalable data storage", demo: "/integrations", visual: false },
        { name: "Community Platforms", description: "Circle/Discord integration for engagement", demo: "/integrations", visual: false },
        { name: "Calendar & CDN", description: "Calendly booking, Vercel/S3 for assets", demo: "/integrations", visual: false }
      ]
    },
    {
      category: "Legal & Trust Framework",
      icon: Shield,
      visual: false,
      items: [
        { name: "Legal Pages", description: "Privacy policy, terms, cookie policy", demo: "/legal", visual: false },
        { name: "AI Ethics Statement", description: "Transparent AI usage and human-first approach", demo: "/ethics", visual: false },
        { name: "DMCA Process", description: "Content protection and takedown procedures", demo: "/legal", visual: false },
        { name: "Accessibility Statement", description: "Compliance documentation and contact info", demo: "/legal", visual: false },
        { name: "Security Measures", description: "Data protection, encryption, audit trails", demo: "/legal", visual: false }
      ]
    },
    {
      category: "Admin & Multi-Tenant Tools",
      icon: Settings,
      visual: true,
      items: [
        { name: "Multi-Tenant Dashboard", description: "Switch between client instances seamlessly", demo: "/admin", visual: true },
        { name: "Content Moderation", description: "Queue, approvals, editorial workflows", demo: "/admin", visual: true },
        { name: "Billing Management", description: "Revenue share tracking, client billing", demo: "/admin", visual: true },
        { name: "Template Switcher", description: "Rebrand and customize per client easily", demo: "/admin", visual: true },
        { name: "Backup & Export", description: "Data exports, migrations, backup systems", demo: "/admin", visual: false }
      ]
    },
    {
      category: "Onboarding & Education",
      icon: BookOpen,
      visual: true,
      items: [
        { name: "Setup Checklist", description: "Interactive domain, branding, content setup", demo: "/onboarding", visual: true },
        { name: "30-Day Launch Plan", description: "Pre-seeded tasks, milestones, best practices", demo: "/onboarding", visual: true },
        { name: "Contextual Help", description: "Tooltips, guides, in-app assistance", demo: "/onboarding", visual: false },
        { name: "Resource Hub", description: "Tutorials, walkthroughs, case studies", demo: "/resources", visual: true },
        { name: "Success Tracking", description: "Progress monitoring, achievement badges", demo: "/onboarding", visual: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Crown className="h-4 w-4" />
            <span>🎯 COMPLETE PLATFORM SHOWCASE - Every Feature That Makes Thought Leaders Successful</span>
            <Crown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-evergreen/5 px-4 py-2 rounded-full mb-6">
            <Eye className="h-4 w-4" />
            <span>Complete Platform Tour</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            What You Get: <span className="text-trailguide-evergreen">The Complete Stack</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Every single feature, system, and capability that transforms aspiring thought leaders into 
            industry authorities with multiple revenue streams. This is the complete platform you receive.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/80 rounded-2xl p-6 border border-trailguide-evergreen/20">
              <div className="text-2xl font-bold text-trailguide-evergreen mb-1">120+</div>
              <div className="text-trailguide-slate text-sm">Features & Tools</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border border-trailguide-evergreen/20">
              <div className="text-2xl font-bold text-trailguide-evergreen mb-1">12</div>
              <div className="text-trailguide-slate text-sm">Platform Categories</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border border-trailguide-evergreen/20">
              <div className="text-2xl font-bold text-trailguide-evergreen mb-1">6</div>
              <div className="text-trailguide-slate text-sm">AI Agents Included</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border border-trailguide-evergreen/20">
              <div className="text-2xl font-bold text-trailguide-evergreen mb-1">∞</div>
              <div className="text-trailguide-slate text-sm">Revenue Potential</div>
            </div>
          </div>
        </div>

        {/* Platform Components */}
        {platformComponents.map((component, index) => (
          <section key={component.category} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center">
                <component.icon className="h-6 w-6 text-trailguide-evergreen" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-trailguide-neutral">{component.category}</h2>
                <div className="flex items-center gap-2 mt-1">
                  {component.visual ? (
                    <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                      <Eye className="h-3 w-3 mr-1" />
                      Visual Demo Available
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs border-blue-500 text-blue-600">
                      <Cog className="h-3 w-3 mr-1" />
                      Backend System
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {component.items.map((item, itemIndex) => (
                <Card key={itemIndex} className={`border-2 ${item.visual ? 'border-green-200 hover:border-green-400' : 'border-blue-200 hover:border-blue-400'} transition-all duration-300 hover:shadow-lg`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      {item.visual ? (
                        <Eye className="h-4 w-4 text-green-600" />
                      ) : (
                        <Cog className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-trailguide-slate">
                      {item.description}
                    </CardDescription>
                    <Button 
                      variant={item.visual ? "default" : "outline"} 
                      size="sm" 
                      className={item.visual ? "w-full bg-green-600 hover:bg-green-700" : "w-full"} 
                      asChild
                    >
                      <Link href={item.demo}>
                        {item.visual ? "See Live Demo" : "Learn More"}
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Pricing Revolution */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-trailguide-evergreen/10 to-blue-50 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-trailguide-evergreen" />
              </div>
              <h2 className="text-3xl font-bold text-trailguide-neutral mb-6">
                The Price That Will <span className="text-trailguide-evergreen">Blow Your Mind</span>
              </h2>
              <p className="text-xl text-trailguide-slate mb-8">
                This complete platform—worth $100,000+ if built custom—is included in our 
                monthly service. No additional development, integration, or setup costs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white/80 rounded-2xl p-6 border border-red-200">
                  <div className="text-lg font-semibold text-red-600 mb-2">Traditional Development</div>
                  <div className="text-3xl font-bold text-red-700 mb-1">$100,000+</div>
                  <div className="text-red-600 text-sm">6-12 months development</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-6 border border-yellow-200">
                  <div className="text-lg font-semibold text-yellow-600 mb-2">DIY Platform Building</div>
                  <div className="text-3xl font-bold text-yellow-700 mb-1">$25,000+</div>
                  <div className="text-yellow-600 text-sm">3-6 months + ongoing costs</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-6 border border-trailguide-evergreen/50">
                  <div className="text-lg font-semibold text-trailguide-evergreen mb-2">Our Platform</div>
                  <div className="text-3xl font-bold text-trailguide-evergreen mb-1">$297/mo</div>
                  <div className="text-trailguide-evergreen text-sm">Launch in 30 days</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                  <Link href="/trailmap">
                    Start Your Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">See Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Outcome */}
        <section className="bg-white/80 backdrop-blur-sm border border-trailguide-evergreen/20 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-8">
              Your Complete Transformation Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">What You&apos;ll Achieve:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">See yourself in our working examples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">Understand the complete journey from zero to thriving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">Trust that we&apos;ve built everything you need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">Feel confident in your investment decision</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-trailguide-neutral mb-4">What Makes Us Different:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">Complete platform, not just tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">AI that enhances, never replaces you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">30-day launch with ongoing support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
                    <span className="text-trailguide-slate">Pricing that makes sense for growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
              <Link href="/trailmap">
                Start Your Assessment - Get Your Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
