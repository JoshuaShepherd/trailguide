import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, Users, TrendingUp, Settings, Search, Mail, 
  FileText, Award, Shield, Phone, ArrowRight, CheckCircle,
  MessageSquare, BarChart, Calendar, Globe, Target
} from 'lucide-react';

export function TemplateSiteMapSection() {
  const siteFeatures = [
    {
      category: "Content & Publishing",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      features: [
        { name: "Blog System", href: "/blog", description: "Full article publishing with MDX support" },
        { name: "Author Profiles", href: "/authors", description: "Professional author pages with bios" },
        { name: "Case Studies", href: "/case-studies", description: "Success story showcases" },
        { name: "Media Library", href: "/media", description: "Organized content resources" },
      ]
    },
    {
      category: "Lead Generation",
      icon: Target,
      color: "from-emerald-500 to-emerald-600",
      features: [
        { name: "Intake Process", href: "/intake", description: "Complete discovery and qualification system" },
        { name: "Assessment Tools", href: "/assessment", description: "Interactive evaluation forms" },
        { name: "Newsletter Signup", href: "/newsletter", description: "Email capture and automation" },
        { name: "Contact Forms", href: "/contact", description: "Multiple engagement pathways" },
      ]
    },
    {
      category: "Authority Building",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      features: [
        { name: "About Pages", href: "/about", description: "Professional positioning and story" },
        { name: "Team Showcase", href: "/team", description: "Expert team presentations" },
        { name: "Advisory Board", href: "/advisory", description: "Strategic partnership displays" },
        { name: "Partnership Hub", href: "/partnerships", description: "Collaboration showcases" },
      ]
    },
    {
      category: "Revenue Streams",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      features: [
        { name: "Product Catalog", href: "/products", description: "Services and offering showcases" },
        { name: "Kit Library", href: "/kits", description: "Resource packages and downloads" },
        { name: "Hub Access", href: "/hub", description: "Member and client portals" },
        { name: "AI Workspace", href: "/ai-workspace", description: "Premium tool access" },
      ]
    },
    {
      category: "User Experience",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      features: [
        { name: "Search System", href: "/search", description: "Site-wide content discovery" },
        { name: "Analytics Dashboard", href: "/analytics", description: "Performance tracking" },
        { name: "Support Center", href: "/support", description: "Help and documentation" },
        { name: "Accessibility", href: "/accessibility", description: "Inclusive design standards" },
      ]
    },
    {
      category: "Legal & Trust",
      icon: Shield,
      color: "from-slate-500 to-slate-600",
      features: [
        { name: "Privacy Policy", href: "/privacy", description: "Data protection compliance" },
        { name: "Terms of Service", href: "/terms", description: "Platform usage guidelines" },
        { name: "Ethics Statement", href: "/ethics", description: "Values and principles" },
        { name: "Site Map", href: "/sitemap", description: "Complete navigation structure" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-trailguide-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 text-sm font-medium border border-trailguide-evergreen/30 text-trailguide-evergreen rounded-full bg-trailguide-sage/10 mb-6">
              <Globe className="mr-2 h-4 w-4" />
              Complete Site Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              Explore Every Feature
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
              This template includes every page, feature, and function you need for a complete thought leadership platform. 
              Click through to see each section in action.
            </p>
          </div>

          {/* Feature Categories */}
          <div className="space-y-12">
            {siteFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/80 backdrop-blur-sm border border-trailguide-sage/20 rounded-2xl p-8 shadow-sm">
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-trailguide-neutral">{category.category}</h3>
                    <p className="text-trailguide-slate">Essential features for this category</p>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {category.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="group hover:shadow-md transition-all duration-200 border-trailguide-sage/20 hover:border-trailguide-sage/40">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors">
                            {feature.name}
                          </h4>
                          <CheckCircle className="h-5 w-5 text-trailguide-evergreen flex-shrink-0" />
                        </div>
                        <p className="text-sm text-trailguide-slate mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <Button asChild size="sm" variant="outline" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 group-hover:border-trailguide-evergreen/60">
                          <Link href={feature.href} className="flex items-center text-sm">
                            Explore
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-br from-trailguide-evergreen/10 to-trailguide-sage/10 rounded-2xl p-12 border border-trailguide-evergreen/20">
            <h3 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Ready for Your Own Platform?
            </h3>
            <p className="text-xl text-trailguide-slate mb-8 max-w-2xl mx-auto">
              You've seen what's possible. Now let's build your customized version with your content, branding, and strategic focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                <Link href="/intake" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-3">
                <Link href="/expert-publisher-guide" className="flex items-center">
                  Learn Strategy
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
