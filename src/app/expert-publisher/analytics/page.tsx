import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  BarChart3, TrendingUp, Users, DollarSign, Eye, Clock,
  Target, ArrowRight, CheckCircle, Star, Activity, Zap,
  BookOpen, Mail, Share, MousePointerClick, Heart, Repeat,
  CreditCard, Calendar, Globe, Smartphone, AlertCircle
} from 'lucide-react';

export default function AnalyticsGrowth() {
  const metrics = [
    {
      category: "Business Intelligence",
      description: "Track revenue, growth, and business performance",
      metrics: [
        { name: "Monthly Recurring Revenue", value: "$12,847", change: "+23%", trend: "up", icon: DollarSign },
        { name: "Active Subscribers", value: "1,234", change: "+67", trend: "up", icon: Users },
        { name: "Churn Rate", value: "2.3%", change: "-0.5%", trend: "down", icon: TrendingUp },
        { name: "Customer LTV", value: "$892", change: "+12%", trend: "up", icon: Target },
        { name: "Conversion Rate", value: "4.2%", change: "+0.8%", trend: "up", icon: MousePointerClick },
        { name: "Revenue per User", value: "$23.50", change: "+15%", trend: "up", icon: CreditCard }
      ]
    },
    {
      category: "Content Performance",
      description: "Understand what resonates with your audience",
      metrics: [
        { name: "Total Page Views", value: "24,891", change: "+34%", trend: "up", icon: Eye },
        { name: "Average Read Time", value: "4m 23s", change: "+12%", trend: "up", icon: Clock },
        { name: "Engagement Rate", value: "8.7%", change: "+2.1%", trend: "up", icon: Heart },
        { name: "Email Open Rate", value: "42.3%", change: "+5.2%", trend: "up", icon: Mail },
        { name: "Social Shares", value: "1,847", change: "+89%", trend: "up", icon: Share },
        { name: "Comments/Feedback", value: "234", change: "+45%", trend: "up", icon: BookOpen }
      ]
    },
    {
      category: "Growth Analytics",
      description: "Track acquisition, retention, and expansion",
      metrics: [
        { name: "New Subscribers", value: "89", change: "+23%", trend: "up", icon: Users },
        { name: "Organic Traffic", value: "18,234", change: "+67%", trend: "up", icon: Globe },
        { name: "Email Signups", value: "145", change: "+34%", trend: "up", icon: Mail },
        { name: "Referral Traffic", value: "3,456", change: "+12%", trend: "up", icon: Repeat },
        { name: "Mobile Traffic", value: "67%", change: "+5%", trend: "up", icon: Smartphone },
        { name: "Return Visitors", value: "43%", change: "+8%", trend: "up", icon: Activity }
      ]
    }
  ];

  const topContent = [
    {
      title: "5 Strategies for Building Authentic Authority",
      views: "3,247",
      engagement: "9.2%",
      conversions: "23",
      revenue: "$547"
    },
    {
      title: "The Future of Thought Leadership in AI Era",
      views: "2,891",
      engagement: "8.7%",
      conversions: "18",
      revenue: "$428"
    },
    {
      title: "Building Your Personal Brand Without Burnout",
      views: "2,634",
      engagement: "7.9%",
      conversions: "15",
      revenue: "$357"
    },
    {
      title: "Email Marketing for Thought Leaders",
      views: "2,123",
      engagement: "8.1%",
      conversions: "12",
      revenue: "$289"
    }
  ];

  const growthChannels = [
    { name: "Organic Search", percentage: 45, value: "18,234 visitors", color: "bg-green-500" },
    { name: "Email Marketing", percentage: 25, value: "10,123 visitors", color: "bg-blue-500" },
    { name: "Social Media", percentage: 15, value: "6,074 visitors", color: "bg-purple-500" },
    { name: "Direct Traffic", percentage: 10, value: "4,049 visitors", color: "bg-orange-500" },
    { name: "Referrals", percentage: 5, value: "2,025 visitors", color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <BarChart3 className="h-4 w-4" />
            <span>📊 ANALYTICS DEMO - Real-time Business Intelligence for Thought Leaders</span>
            <BarChart3 className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="h-4 w-4" />
            <span>Analytics & Growth Dashboard Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Data-Driven <span className="text-blue-600">Growth</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Make informed decisions with comprehensive analytics that track every aspect of your 
            thought leadership business—from content performance to revenue growth.
          </p>

          <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-blue-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">Real-time</div>
                <div className="text-trailguide-slate text-sm">Data Updates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-trailguide-slate text-sm">Key Metrics</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">Auto</div>
                <div className="text-trailguide-slate text-sm">Reports</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">AI</div>
                <div className="text-trailguide-slate text-sm">Insights</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Executive Dashboard</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Get a complete view of your thought leadership business at a glance
            </p>
          </div>

          <Tabs defaultValue="business" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
            </TabsList>

            {metrics.map((category, categoryIndex) => (
              <TabsContent key={category.category} value={category.category.toLowerCase().split(' ')[0]}>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">{category.category}</h3>
                  <p className="text-trailguide-slate">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.metrics.map((metric, metricIndex) => (
                    <Card key={metricIndex} className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium text-trailguide-slate">
                            {metric.name}
                          </CardTitle>
                          <metric.icon className="h-4 w-4 text-blue-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-trailguide-neutral">
                            {metric.value}
                          </div>
                          <div className={`flex items-center text-sm font-medium ${
                            metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            <TrendingUp className={`h-3 w-3 mr-1 ${
                              metric.trend === 'down' ? 'rotate-180' : ''
                            }`} />
                            {metric.change}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Top Content */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Top Performing Content</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              See which content drives the most engagement and revenue
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
            <div className="bg-blue-50 p-4 border-b">
              <div className="grid grid-cols-5 gap-4 text-sm font-medium text-trailguide-neutral">
                <div>Content Title</div>
                <div className="text-center">Views</div>
                <div className="text-center">Engagement</div>
                <div className="text-center">Conversions</div>
                <div className="text-center">Revenue</div>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {topContent.map((content, index) => (
                <div key={index} className="p-4 hover:bg-blue-50/50 transition-colors">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div>
                      <div className="font-medium text-trailguide-neutral mb-1">
                        {content.title}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          #{index + 1}
                        </Badge>
                        <span className="text-xs text-trailguide-slate">This week</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-trailguide-neutral">{content.views}</div>
                      <div className="text-xs text-trailguide-slate">views</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{content.engagement}</div>
                      <div className="text-xs text-trailguide-slate">rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{content.conversions}</div>
                      <div className="text-xs text-trailguide-slate">subs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{content.revenue}</div>
                      <div className="text-xs text-trailguide-slate">revenue</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Traffic Sources */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Growth Channel Analysis</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Understand where your audience comes from and optimize your growth strategy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traffic Breakdown */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-trailguide-neutral mb-6">Traffic Sources</h3>
              <div className="space-y-4">
                {growthChannels.map((channel, index) => (
                  <div key={channel.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-trailguide-neutral">{channel.name}</span>
                      <span className="text-trailguide-slate">{channel.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${channel.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${channel.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-trailguide-slate">{channel.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Insights */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-trailguide-neutral mb-6">AI Growth Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-900 mb-1">Strong SEO Performance</h4>
                      <p className="text-sm text-green-800">
                        Organic traffic up 67% this month. Your content strategy is working.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Email Engagement High</h4>
                      <p className="text-sm text-blue-800">
                        42.3% open rate is 2x industry average. Consider more email content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-900 mb-1">Social Growth Opportunity</h4>
                      <p className="text-sm text-yellow-800">
                        Social traffic is only 15%. Try repurposing content for LinkedIn/Twitter.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-purple-900 mb-1">Conversion Optimization</h4>
                      <p className="text-sm text-purple-800">
                        4.2% conversion rate. Test different lead magnets to increase signups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Analytics */}
        <section className="mb-20">
          <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">Revenue Intelligence</h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Track every dollar and understand what drives your business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$12,847</div>
                <div className="text-trailguide-slate text-sm mb-1">Monthly Revenue</div>
                <div className="text-green-600 text-xs font-medium">+23% vs last month</div>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$892</div>
                <div className="text-trailguide-slate text-sm mb-1">Customer LTV</div>
                <div className="text-blue-600 text-xs font-medium">+12% vs last quarter</div>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.3%</div>
                <div className="text-trailguide-slate text-sm mb-1">Monthly Churn</div>
                <div className="text-green-600 text-xs font-medium">-0.5% improvement</div>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-green-200 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
                <div className="text-trailguide-slate text-sm mb-1">New Customers</div>
                <div className="text-orange-600 text-xs font-medium">+23% vs last month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Complete Analytics Suite</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Every metric you need to grow your thought leadership business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Real-time Dashboard", description: "Live metrics updated every minute", icon: Activity },
              { name: "Revenue Tracking", description: "MRR, churn, LTV, and growth metrics", icon: DollarSign },
              { name: "Content Analytics", description: "Engagement, read time, conversions", icon: BookOpen },
              { name: "Audience Insights", description: "Demographics, behavior, preferences", icon: Users },
              { name: "Email Performance", description: "Open rates, click rates, conversions", icon: Mail },
              { name: "SEO Analytics", description: "Rankings, traffic, keyword performance", icon: Globe },
              { name: "Social Metrics", description: "Shares, engagement, reach", icon: Share },
              { name: "Conversion Funnels", description: "Track visitor to customer journey", icon: Target },
              { name: "Cohort Analysis", description: "User retention and behavior over time", icon: Calendar },
              { name: "A/B Test Results", description: "Compare content and conversion rates", icon: MousePointerClick },
              { name: "Custom Reports", description: "Build reports for your specific needs", icon: BarChart3 },
              { name: "AI Insights", description: "Automated analysis and recommendations", icon: Zap }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-trailguide-slate">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-trailguide-slate mb-8">
              This complete analytics suite is included in your Expert Publisher platform. 
              Make data-driven decisions that grow your thought leadership business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/trailmap">
                  Start Platform Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/expert-publisher/what-you-get">View Complete Platform</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
