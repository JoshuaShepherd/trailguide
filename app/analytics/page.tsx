import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Target, 
  DollarSign, 
  Users,
  ArrowRight,
  Check,
  Activity,
  Calendar,
  FileText,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analytics Dashboard | TrailGuide',
  description: 'Comprehensive analytics and reporting for nonprofit performance tracking and strategic insights.',
}

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Impact Metrics",
    description: "Track program outcomes and beneficiary engagement",
    features: ["Outcome measurement", "Beneficiary tracking", "Impact visualization"]
  },
  {
    icon: DollarSign,
    title: "Fundraising Analytics",
    description: "Monitor donation trends and campaign performance",
    features: ["Revenue tracking", "Donor retention", "Campaign ROI"]
  },
  {
    icon: Users,
    title: "Donor Insights",
    description: "Understand donor behavior and engagement patterns",
    features: ["Donor segmentation", "Engagement scoring", "Giving patterns"]
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Monitor progress toward strategic objectives",
    features: ["KPI dashboards", "Goal completion", "Milestone tracking"]
  },
  {
    icon: TrendingUp,
    title: "Performance Trends",
    description: "Identify patterns and growth opportunities",
    features: ["Trend analysis", "Predictive insights", "Growth forecasting"]
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Generate reports tailored to your stakeholders",
    features: ["Board reports", "Grant reports", "Impact summaries"]
  }
]

const dashboardTypes = [
  {
    title: "Executive Dashboard",
    description: "High-level overview for leadership and board members",
    icon: Eye,
    metrics: ["Total revenue", "Program reach", "Operational efficiency", "Strategic progress"]
  },
  {
    title: "Program Dashboard",
    description: "Detailed program performance and impact measurement",
    icon: Activity,
    metrics: ["Beneficiary outcomes", "Service delivery", "Program costs", "Impact metrics"]
  },
  {
    title: "Fundraising Dashboard",
    description: "Comprehensive donor and campaign analytics",
    icon: DollarSign,
    metrics: ["Revenue trends", "Donor acquisition", "Campaign performance", "Retention rates"]
  },
  {
    title: "Financial Dashboard",
    description: "Financial health and operational metrics",
    icon: PieChart,
    metrics: ["Budget vs actual", "Expense categories", "Cash flow", "Financial ratios"]
  }
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics & Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
              Data-Driven
              <span className="text-trailguide-evergreen block">Impact Decisions</span>
            </h1>
            <p className="text-lg text-trailguide-slate mb-8 max-w-3xl mx-auto">
              Transform raw data into actionable insights. Track your impact, optimize operations, 
              and make informed decisions that amplify your nonprofit&apos;s mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                View Analytics Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Custom Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Comprehensive Analytics Suite"
            subtitle="All the metrics and insights you need to drive nonprofit success"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
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

      {/* Dashboard Types */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Dashboards for Every Role
            </h2>
            <p className="text-lg text-trailguide-slate">
              Customized views and metrics for different stakeholders and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dashboardTypes.map((dashboard, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center">
                      <dashboard.icon className="h-6 w-6 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-trailguide-neutral">{dashboard.title}</CardTitle>
                      <p className="text-trailguide-slate text-sm">{dashboard.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {dashboard.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-trailguide-slate">
                        <TrendingUp className="h-4 w-4 text-trailguide-evergreen mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Why Analytics Matter
            </h2>
            <p className="text-lg text-trailguide-slate">
              Make decisions based on data, not assumptions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Prove Impact</h3>
                <p className="text-trailguide-slate">
                  Demonstrate measurable outcomes to donors, board members, and stakeholders
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Optimize Operations</h3>
                <p className="text-trailguide-slate">
                  Identify inefficiencies and opportunities for program improvement
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Plan Strategically</h3>
                <p className="text-trailguide-slate">
                  Use historical data and trends to inform future planning and goal setting
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
              Start Making Data-Driven Decisions
            </h2>
            <p className="text-lg text-trailguide-slate mb-8">
              Get the insights you need to maximize your nonprofit&apos;s impact
            </p>
            <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
              Explore Analytics <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}