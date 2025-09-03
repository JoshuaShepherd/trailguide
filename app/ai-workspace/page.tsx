import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  BarChart3,
  ArrowRight,
  Check,
  Sparkles,
  Lightbulb,
  Workflow,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Workspace | TrailGuide',
  description: 'Intelligent AI-powered workspace for nonprofit operations, strategy, and decision-making.',
}

const workspaceFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations for strategy, operations, and fundraising",
    features: ["Predictive analytics", "Smart recommendations", "Pattern recognition"]
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline repetitive tasks with intelligent automation",
    features: ["Process automation", "Smart scheduling", "Task management"]
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "AI-assisted strategic planning and goal setting",
    features: ["SWOT analysis", "Goal tracking", "Risk assessment"]
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enhanced collaboration with AI-powered insights",
    features: ["Smart notifications", "Collaboration tools", "Knowledge sharing"]
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time analytics and performance monitoring",
    features: ["KPI dashboards", "Trend analysis", "Custom reports"]
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in guardrails for responsible AI usage",
    features: ["Ethics guidelines", "Bias detection", "Transparency tools"]
  }
]

export default function AIWorkspacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Workspace
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
              Your Intelligent
              <span className="text-trailguide-evergreen block">Nonprofit Command Center</span>
            </h1>
            <p className="text-lg text-trailguide-slate mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your nonprofit operations. 
              Make smarter decisions, automate routine tasks, and focus on what matters most—your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                Start AI Workspace <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Intelligent Features"
            subtitle="AI-powered tools designed specifically for nonprofit operations"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workspaceFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <CardTitle className="text-xl text-trailguide-neutral">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-trailguide-slate">
                        <Check className="h-4 w-4 text-trailguide-evergreen mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Transform Your Operations
            </h2>
            <p className="text-lg text-trailguide-slate">
              See how AI can revolutionize your nonprofit&apos;s efficiency and impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Save Time</h3>
                <p className="text-trailguide-slate">
                  Automate routine tasks and focus on strategic initiatives that drive impact
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Make Better Decisions</h3>
                <p className="text-trailguide-slate">
                  Get data-driven insights and recommendations for strategic planning
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Increase Impact</h3>
                <p className="text-trailguide-slate">
                  Optimize programs and operations to serve more beneficiaries effectively
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-trailguide-slate mb-8">
              Join nonprofit leaders who are already using AI to amplify their impact
            </p>
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              Get Started with AI <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}