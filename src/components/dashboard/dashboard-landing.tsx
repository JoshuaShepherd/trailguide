import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Heart,
  Calendar,
  UserCheck,
  DollarSign,
  FileText,
  Building,
  Network,
  Lightbulb,
  Monitor,
  PieChart,
  Sparkles,
  CheckCircle,
  Star,
  Clock,
  Settings,
  Users,
  MessageCircle,
  Database,
  Shield
} from 'lucide-react';
import { KitConfig } from '@/types/kit';

interface DashboardLandingProps {
  kitCategories: Record<string, KitConfig[]>;
}

export default function DashboardLanding({ kitCategories }: DashboardLandingProps) {
  const categoryIcons = {
    'Fundraising & Revenue': DollarSign,
    'Programs & Impact': Heart,
    'Operations & Management': Building,
    'Strategy & Partnerships': Network,
  };

  const getKitIcon = (kitSlug: string) => {
    const iconMap: Record<string, any> = {
      'fundraising': DollarSign,
      'major-gifts': Star,
      'grants': FileText,
      'programs': Heart,
      'communications': MessageCircle,
      'events': Calendar,
      'volunteers': UserCheck,
      'finance': PieChart,
      'hr': Users,
      'compliance': Shield,
      'board': Building,
      'partnerships': Network,
      'data': Database,
      'it': Monitor,
      'strategy': Lightbulb,
    };
    return iconMap[kitSlug] || Settings;
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Live': return 'bg-green-100 text-green-800 border-green-200';
      case 'Experimentation': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Development': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-evergreen-50 to-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-evergreen-600" />
              <Badge variant="secondary" className="bg-evergreen-100 text-evergreen-800">
                Unified Dashboard Shell
              </Badge>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              TrailGuide <span className="text-evergreen-600">Unified Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              One shell, many kits. Experience consistent UX across all 15 TrailKits with 
              integrated AI, automated playbooks, and unified workflows.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>15 TrailKits Available</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-orange-500" />
                <span>Audit-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* TrailKit Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your TrailKit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each kit is purpose-built for specific nonprofit functions while maintaining 
              the same intuitive interface you'll learn to love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(kitCategories).map(([categoryName, kits]) => {
              const CategoryIcon = categoryIcons[categoryName as keyof typeof categoryIcons];
              
              return (
                <Card key={categoryName} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-evergreen-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-emerald-100">
                        <CategoryIcon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{categoryName}</CardTitle>
                        <p className="text-sm text-gray-500 mt-1">{kits.length} kits available</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid gap-3">
                      {kits.map((kit) => {
                        const KitIcon = getKitIcon(kit.slug);
                        return (
                          <Link 
                            key={kit.slug} 
                            href={`/hub/${kit.slug}`}
                            className="block"
                          >
                            <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-evergreen-300 hover:bg-gray-50 transition-all duration-200 group/kit">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover/kit:bg-evergreen-100 transition-colors">
                                  <KitIcon className="h-4 w-4 text-gray-600 group-hover/kit:text-evergreen-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover/kit:text-evergreen-600">
                                    {kit.name}
                                  </h4>
                                  <p className="text-sm text-gray-500 line-clamp-1">
                                    {kit.description}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getStageColor(kit.stage)}`}
                                >
                                  {kit.stage}
                                </Badge>
                                <ArrowRight className="h-4 w-4 text-gray-400 group-hover/kit:text-evergreen-500 transition-colors" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-emerald-900 mb-1">15</div>
                <div className="text-sm text-emerald-700">TrailKits Available</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-900 mb-1">1</div>
                <div className="text-sm text-blue-700">Unified Interface</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-900 mb-1">100%</div>
                <div className="text-sm text-purple-700">Audit Ready</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-900 mb-1">5min</div>
                <div className="text-sm text-orange-700">Learning Curve</div>
              </CardContent>
            </Card>
          </div>
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
                  <Link href="/hub/fundraising">Try Fundraising Kit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/interface-comparison">Compare Interfaces</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/hub-old">View Legacy Version</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
