import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  Send, Mail, Share2, Search, Gift, Target,
  ArrowRight, CheckCircle, Star, Zap, Globe,
  Users, MessageSquare, Rocket, Eye, Heart,
  TrendingUp, Calendar, FileText, Link2, Award,
  Repeat, MousePointerClick, BarChart3, Crown
} from 'lucide-react';

export default function DistributionEngine() {
  const distributionChannels = [
    {
      category: "Email Marketing",
      icon: Mail,
      description: "Automated email sequences and broadcasts",
      features: [
        { name: "Welcome Sequences", description: "Onboard new subscribers with value-packed series", visual: true },
        { name: "Weekly Broadcasts", description: "Regular content updates to engaged subscribers", visual: true },
        { name: "Behavioral Triggers", description: "Emails based on user actions and preferences", visual: false },
        { name: "Segmented Lists", description: "Target specific audience segments with relevant content", visual: false },
        { name: "A/B Testing", description: "Optimize subject lines, content, and send times", visual: true },
        { name: "Performance Analytics", description: "Track opens, clicks, conversions, and revenue", visual: true }
      ]
    },
    {
      category: "Social Media",
      icon: Share2,
      description: "Multi-platform content distribution",
      features: [
        { name: "Auto-Publishing", description: "Schedule posts across LinkedIn, Twitter, Facebook", visual: true },
        { name: "Content Repurposing", description: "Transform long-form into social-ready snippets", visual: true },
        { name: "Engagement Tracking", description: "Monitor likes, shares, comments across platforms", visual: true },
        { name: "Hashtag Strategy", description: "Optimize reach with platform-specific hashtags", visual: false },
        { name: "Story Templates", description: "Create engaging visual stories from content", visual: true },
        { name: "Community Building", description: "Foster discussions and build loyal following", visual: false }
      ]
    },
    {
      category: "SEO & Discovery",
      icon: Search,
      description: "Organic search optimization",
      features: [
        { name: "Keyword Research", description: "Find high-value topics your audience searches", visual: true },
        { name: "Content Optimization", description: "Structure content for search engine success", visual: false },
        { name: "Schema Markup", description: "Rich snippets for better search visibility", visual: false },
        { name: "Internal Linking", description: "Connect related content for better rankings", visual: false },
        { name: "Performance Tracking", description: "Monitor rankings, traffic, and conversions", visual: true },
        { name: "Competitor Analysis", description: "Stay ahead of others in your space", visual: true }
      ]
    },
    {
      category: "Lead Magnets",
      icon: Gift,
      description: "Valuable resources that capture leads",
      features: [
        { name: "Resource Libraries", description: "Curated collections of valuable content", visual: true },
        { name: "Mini-Courses", description: "Email-delivered educational sequences", visual: true },
        { name: "Templates & Tools", description: "Practical resources subscribers can use", visual: true },
        { name: "Exclusive Content", description: "Members-only insights and behind-scenes", visual: true },
        { name: "Webinar Access", description: "Live and recorded training sessions", visual: true },
        { name: "Community Invites", description: "Access to private groups and discussions", visual: false }
      ]
    },
    {
      category: "Referral Program",
      icon: Award,
      description: "Word-of-mouth growth amplification",
      features: [
        { name: "Referral Tracking", description: "Monitor who refers new subscribers", visual: true },
        { name: "Reward Systems", description: "Incentivize sharing with valuable rewards", visual: true },
        { name: "Share Templates", description: "Make it easy for fans to recommend you", visual: true },
        { name: "Affiliate Dashboard", description: "Track performance and payouts", visual: true },
        { name: "Custom Links", description: "Personalized referral URLs for tracking", visual: false },
        { name: "Automated Payouts", description: "Handle commissions automatically", visual: false }
      ]
    }
  ];

  const emailTemplates = [
    {
      type: "Welcome Series",
      subject: "Your thought leadership journey starts now",
      preview: "Thank you for joining! Here's what you can expect...",
      openRate: "68%",
      clickRate: "12%"
    },
    {
      type: "Weekly Digest",
      subject: "This week's insights on authentic authority",
      preview: "5 strategies that transformed how I think about...",
      openRate: "45%",
      clickRate: "8%"
    },
    {
      type: "New Content Alert",
      subject: "New post: The Future of Thought Leadership",
      preview: "I just published something I think you'll find...",
      openRate: "52%",
      clickRate: "15%"
    },
    {
      type: "Subscriber Milestone",
      subject: "🎉 We hit 1,000 subscribers!",
      preview: "This community is growing and I couldn't be...",
      openRate: "71%",
      clickRate: "9%"
    }
  ];

  const socialPosts = [
    {
      platform: "LinkedIn",
      type: "Thought Leadership",
      content: "The biggest mistake I see thought leaders make is trying to be everything to everyone...",
      engagement: "234 likes, 45 comments",
      reach: "12K impressions"
    },
    {
      platform: "Twitter",
      type: "Quick Tip",
      content: "Your personal brand isn't what you say about yourself.\n\nIt's what others say when you're not in the room.\n\nBuild it with consistency, not campaigns.",
      engagement: "89 retweets, 156 likes",
      reach: "8.5K impressions"
    },
    {
      platform: "Facebook",
      type: "Community Post",
      content: "What's the best piece of career advice you've ever received? I'll share mine in the comments...",
      engagement: "67 reactions, 23 comments",
      reach: "3.2K impressions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Rocket className="h-4 w-4" />
            <span>🚀 DISTRIBUTION DEMO - Multi-Channel Growth Engine for Thought Leaders</span>
            <Rocket className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full mb-6">
            <Rocket className="h-4 w-4" />
            <span>Distribution & Growth Engine Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Multi-Channel <span className="text-purple-600">Distribution</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Amplify your thought leadership across every channel where your audience lives. 
            Automated distribution that grows your reach, engagement, and subscriber base.
          </p>

          <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-purple-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">5</div>
                <div className="text-trailguide-slate text-sm">Growth Channels</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">Auto</div>
                <div className="text-trailguide-slate text-sm">Distribution</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">Smart</div>
                <div className="text-trailguide-slate text-sm">Optimization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">Scale</div>
                <div className="text-trailguide-slate text-sm">Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Channels */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Complete Distribution System</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Reach your audience everywhere they are with automated, intelligent distribution
            </p>
          </div>

          {distributionChannels.map((channel, channelIndex) => (
            <div key={channel.category} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <channel.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-trailguide-neutral">{channel.category}</h3>
                  <p className="text-trailguide-slate">{channel.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {channel.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className={`border-2 ${feature.visual ? 'border-purple-200 hover:border-purple-400' : 'border-blue-200 hover:border-blue-400'} transition-all duration-300`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{feature.name}</CardTitle>
                        {feature.visual ? (
                          <Eye className="h-4 w-4 text-purple-600" />
                        ) : (
                          <Star className="h-4 w-4 text-blue-600" />
                        )}
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
            </div>
          ))}
        </section>

        {/* Email Marketing Demo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Email Marketing Engine</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Automated email sequences that nurture subscribers into loyal fans and customers
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
            <div className="bg-purple-50 p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-trailguide-neutral">Email Campaign Performance</h3>
                <div className="flex gap-2">
                  <Badge variant="secondary">4 templates</Badge>
                  <Badge variant="secondary">1,234 subscribers</Badge>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {emailTemplates.map((template, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {template.type}
                          </Badge>
                          <Mail className="h-3 w-3 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-trailguide-neutral mb-1">
                          {template.subject}
                        </h4>
                        <p className="text-trailguide-slate text-sm">
                          {template.preview}
                        </p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-green-600 font-medium">{template.openRate} open</div>
                        <div className="text-blue-600 font-medium">{template.clickRate} click</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Demo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Social Media Automation</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Your content automatically adapted and distributed across all social platforms
            </p>
          </div>

          <Tabs defaultValue="posts" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="posts">Recent Posts</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="posts">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialPosts.map((post, index) => (
                  <Card key={index} className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Share2 className="h-4 w-4 text-purple-600" />
                          <Badge variant="outline">{post.platform}</Badge>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {post.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-trailguide-slate text-sm mb-4 line-clamp-3">
                        {post.content}
                      </p>
                      <div className="space-y-1 text-xs text-trailguide-slate">
                        <div>{post.engagement}</div>
                        <div>{post.reach}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule">
              <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-trailguide-neutral mb-2">Smart Scheduling</h3>
                  <p className="text-trailguide-slate max-w-md mx-auto">
                    AI optimizes posting times for maximum engagement on each platform
                  </p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-600">LinkedIn</div>
                      <div className="text-xs text-trailguide-slate">Tues 9am</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-600">Twitter</div>
                      <div className="text-xs text-trailguide-slate">Daily 7am</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-600">Facebook</div>
                      <div className="text-xs text-trailguide-slate">Wed 2pm</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-600">Instagram</div>
                      <div className="text-xs text-trailguide-slate">Fri 6pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                      Engagement Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-trailguide-slate">This Week</span>
                        <span className="font-semibold text-green-600">+23%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-trailguide-slate">Reach</span>
                        <span className="font-semibold">24.7K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-trailguide-slate">Engagement Rate</span>
                        <span className="font-semibold">7.2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      Top Performing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-trailguide-slate">Best Platform</span>
                        <Badge variant="secondary">LinkedIn</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-trailguide-slate">Best Time</span>
                        <span className="font-semibold">Tuesday 9am</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-trailguide-slate">Best Format</span>
                        <span className="font-semibold">Question Posts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Growth Strategy */}
        <section className="mb-20">
          <div className="bg-purple-50 rounded-3xl p-8 border border-purple-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">Intelligent Growth Engine</h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                AI-powered distribution that learns what works and automatically optimizes for growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-purple-200 text-center">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Smart Automation</h3>
                <p className="text-trailguide-slate text-sm">
                  Content automatically distributed at optimal times across all channels
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-purple-200 text-center">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Audience Targeting</h3>
                <p className="text-trailguide-slate text-sm">
                  Personalized content delivery based on subscriber behavior and preferences
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-purple-200 text-center">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Performance Optimization</h3>
                <p className="text-trailguide-slate text-sm">
                  Continuous A/B testing and optimization for maximum engagement and growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Complete Distribution Features</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Everything you need to distribute your thought leadership content effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Email Automation", icon: Mail, description: "Sequences, broadcasts, triggers" },
              { name: "Social Publishing", icon: Share2, description: "Multi-platform posting" },
              { name: "SEO Optimization", icon: Search, description: "Search engine visibility" },
              { name: "Lead Magnets", icon: Gift, description: "Valuable subscriber incentives" },
              { name: "Referral Tracking", icon: Award, description: "Word-of-mouth amplification" },
              { name: "Content Repurposing", icon: Repeat, description: "Adapt content for channels" },
              { name: "Performance Analytics", icon: BarChart3, description: "Track all distribution metrics" },
              { name: "A/B Testing", icon: Target, description: "Optimize for best performance" },
              { name: "Audience Segmentation", icon: Users, description: "Targeted messaging" },
              { name: "Smart Scheduling", icon: Calendar, description: "Optimal timing automation" },
              { name: "Link Tracking", icon: Link2, description: "Monitor click-through rates" },
              { name: "Growth Insights", icon: TrendingUp, description: "AI-powered recommendations" }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 text-center">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.name}</CardTitle>
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
              Ready to Scale Your Reach?
            </h2>
            <p className="text-trailguide-slate mb-8">
              This complete distribution engine is included in your Expert Publisher platform. 
              Grow your audience across every channel where they discover great content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
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
