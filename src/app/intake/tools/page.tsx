import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft,
  FileText,
  Eye,
  BarChart,
  CheckCircle,
  Calculator,
  Search,
  Palette,
  Users,
  Target,
  ArrowRight,
  Zap,
  Brain
} from 'lucide-react';

export default function IntakeToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/intake">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Intake Process
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold text-trailguide-neutral">Intake Tools & Resources</h1>
              <p className="text-sm text-trailguide-slate">Interactive tools to guide your platform planning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-trailguide-neutral mb-6">
              Interactive Planning <span className="text-trailguide-evergreen">Tools</span>
            </h1>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              These specialized tools help you make informed decisions about your platform 
              while gathering the information we need to build effectively.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Content Audit Tool */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Content Audit Tool</h3>
                  <p className="text-trailguide-slate mb-6">
                    Comprehensive analysis of your existing content, social media presence, 
                    and audience engagement patterns.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Analyzes published works and articles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Social media performance review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Content theme identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Engagement pattern analysis</span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" asChild>
                    <Link href="/intake/tools/content-audit">
                      Start Content Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-trailguide-slate">
                    ⏱️ 15-20 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Design Preference Survey */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Palette className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Design Preference Survey</h3>
                  <p className="text-trailguide-slate mb-6">
                    Visual survey with 20+ design examples to identify your style preferences 
                    and brand personality.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span>Portfolio of design examples</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span>Style preference rating system</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span>Brand personality assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span>Hero section strategy guide</span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" variant="outline" asChild>
                    <Link href="/intake/tools/design-survey">
                      Take Design Survey
                      <Eye className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-trailguide-slate">
                    ⏱️ 10-15 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Calculator */}
            <Card className="border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Revenue Model Calculator</h3>
                  <p className="text-trailguide-slate mb-6">
                    Interactive tool to project potential revenue based on your platform model 
                    and audience size goals.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Subscription pricing scenarios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Course and product revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Speaking booking projections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Mixed model optimization</span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" variant="outline" asChild>
                    <Link href="/intake/tools/revenue-calculator">
                      Calculate Revenue
                      <BarChart className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-trailguide-slate">
                    ⏱️ 5-10 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature Checklist */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Platform Feature Checklist</h3>
                  <p className="text-trailguide-slate mb-6">
                    Prioritized list of platform features based on your goals, 
                    with recommendations for launch vs. future phases.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span>Essential launch features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span>Value-add recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span>Future enhancement ideas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span>Custom feature planning</span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" variant="outline" asChild>
                    <Link href="/intake/tools/feature-checklist">
                      View Checklist
                      <Target className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-trailguide-slate">
                    ⏱️ 8-12 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Competitive Analysis */}
            <Card className="border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Competitive Intelligence</h3>
                  <p className="text-trailguide-slate mb-6">
                    Analysis of your competitive landscape to identify opportunities 
                    for differentiation and positioning.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      <span>Direct competitor analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      <span>Pricing benchmark research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      <span>Content strategy insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      <span>Differentiation opportunities</span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" variant="outline" asChild>
                    <Link href="/intake/tools/competitive-analysis">
                      Start Analysis
                      <Zap className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-trailguide-slate">
                    ⏱️ 12-18 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Audience Profiler */}
            <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-3">Audience Profiler</h3>
                  <p className="text-trailguide-slate mb-6">
                    Deep dive into your target audience characteristics, 
                    pain points, and preferred content formats.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600" />
                      <span>Demographics and psychographics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600" />
                      <span>Pain point identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600" />
                      <span>Content preference mapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600" />
                      <span>Engagement strategy guide</span>
                    </div>
                  </div>

                  <Button className="w-full mb-3" variant="outline" asChild>
                    <Link href="/intake/tools/audience-profiler">
                      Profile Audience
                      <Brain className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-trailguide-slate">
                    ⏱️ 15-20 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How Tools Work Together */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-trailguide-evergreen/5 to-blue-50 rounded-3xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">How These Tools Work Together</h2>
                <p className="text-trailguide-slate max-w-2xl mx-auto">
                  Each tool informs the others to create a comprehensive understanding of your platform needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-trailguide-neutral mb-2">Foundation</h3>
                  <p className="text-sm text-trailguide-slate">
                    Content audit and audience profiler establish your starting point and target destination.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-trailguide-neutral mb-2">Strategy</h3>
                  <p className="text-sm text-trailguide-slate">
                    Design preferences and competitive analysis shape your platform positioning and visual identity.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-trailguide-neutral mb-2">Execution</h3>
                  <p className="text-sm text-trailguide-slate">
                    Revenue calculator and feature checklist define your platform architecture and business model.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Ready to Start Your Platform Journey?
            </h2>
            <p className="text-trailguide-slate mb-8">
              Begin with any tool that interests you, or start with the comprehensive discovery process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                <Link href="/intake/discovery">
                  Start Discovery Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/intake/tools/content-audit">Try Content Audit First</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
