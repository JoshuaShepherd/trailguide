import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getKitCategories } from '@/kits';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Settings,
  ArrowRight,
  Zap,
  BarChart3,
  Briefcase,
  Database,
  MessageCircle,
  Shield
} from 'lucide-react';

export default function UnifiedDashboardPage() {
  const kitCategories = getKitCategories();

  const categoryIcons = {
    'Fundraising & Revenue': TrendingUp,
    'Programs & Impact': Target,
    'Operations & Management': Settings,
    'Strategy & Partnerships': Users,
  };

  const features = [
    {
      title: 'Universal Navigation',
      description: 'Same UX across all 15 TrailKits - learn once, use everywhere',
      icon: BarChart3
    },
    {
      title: 'AI Agent Console',
      description: 'Context-aware assistant with transparent action logging',
      icon: Zap
    },
    {
      title: 'Unified KPI Bar',
      description: 'Live metrics with drill-down capabilities and filtering',
      icon: BarChart3
    },
    {
      title: 'Structured Workflows',
      description: 'Kanban boards, pipelines, and task management',
      icon: Briefcase
    },
    {
      title: 'Integrated Data Views',
      description: 'CRM-style interfaces with search, filter, and sort',
      icon: Database
    },
    {
      title: 'Communication Hub',
      description: 'Email, SMS, and notification management in one place',
      icon: MessageCircle
    },
    {
      title: 'Playbooks & Automation',
      description: 'Saved workflows and automated processes',
      icon: Settings
    },
    {
      title: 'Compliance & Audit',
      description: 'Full activity logging and ethics guardrails',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-evergreen-600 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Unified Dashboard</h1>
                <p className="text-sm text-gray-600">Next-generation TrailKit experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-evergreen-200 text-evergreen-700">
                Beta Release
              </Badge>
              <Button asChild>
                <Link href="/hub">View Original</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            One Shell, Many Kits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The unified dashboard brings all 15 TrailKits under a single, consistent interface. 
            Learn the navigation once, be productive everywhere.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#kits">Try a Kit</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">View Features</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Universal Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-evergreen-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-evergreen-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* TrailKits Grid */}
        <section id="kits">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Launch Any TrailKit
          </h3>
          
          {Object.entries(kitCategories).map(([category, kits]) => {
            const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
            
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-evergreen-100 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="h-4 w-4 text-evergreen-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{category}</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kits.map((kit) => (
                    <Card key={kit.slug} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg group-hover:text-evergreen-600 transition-colors">
                            {kit.name}
                          </CardTitle>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-evergreen-600 transition-colors" />
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {kit.stage}
                        </Badge>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {kit.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span>{kit.kpis.length} KPIs</span>
                          <span>{kit.quickActions.length} Actions</span>
                          <span>{kit.guardrails?.length || 0} Guardrails</span>
                        </div>

                        <Link href={`/dashboard/${kit.slug}`}>
                          <Button className="w-full group-hover:bg-evergreen-600 transition-colors">
                            Launch {kit.name}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Original vs Unified Dashboard
          </h3>
          
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4">Original TrailHub</th>
                      <th className="text-center py-3 px-4">Unified Dashboard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 font-medium">Navigation Consistency</td>
                      <td className="py-3 px-4 text-center text-gray-500">Per-kit variation</td>
                      <td className="py-3 px-4 text-center text-evergreen-600 font-medium">Universal UX</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">AI Agent Console</td>
                      <td className="py-3 px-4 text-center text-gray-500">Basic chat</td>
                      <td className="py-3 px-4 text-center text-evergreen-600 font-medium">Full-featured with audit</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Playbooks & Automation</td>
                      <td className="py-3 px-4 text-center text-gray-500">Not available</td>
                      <td className="py-3 px-4 text-center text-evergreen-600 font-medium">Persistent bottom bar</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Workflow Management</td>
                      <td className="py-3 px-4 text-center text-gray-500">Limited</td>
                      <td className="py-3 px-4 text-center text-evergreen-600 font-medium">Structured tabs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Compliance & Audit</td>
                      <td className="py-3 px-4 text-center text-gray-500">Static guardrails</td>
                      <td className="py-3 px-4 text-center text-evergreen-600 font-medium">Full activity logging</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-evergreen-50 border-evergreen-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                The unified dashboard represents the next evolution of TrailGuide. 
                Try any kit above to experience the streamlined workflow and enhanced productivity.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/dashboard/fundraising">Try Fundraising Kit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/hub">Compare with Original</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
