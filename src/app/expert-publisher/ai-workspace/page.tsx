import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  Crown, Brain, Zap, Target, TrendingUp, FileText, 
  ArrowRight, CheckCircle, Star, Lightbulb, Rocket,
  PenTool, Repeat, Search, Mic, BarChart3, Megaphone,
  Play, Pause, RefreshCw, Download, Eye, Clock
} from 'lucide-react';

export default function AIWorkspace() {
  const aiAgents = [
    {
      name: "Writing Agent",
      icon: PenTool,
      status: "Active",
      description: "Transform outlines into polished drafts with your unique voice and style",
      capabilities: [
        "Outline to full article conversion",
        "Style preset application",
        "Voice consistency matching", 
        "Grammar and flow optimization",
        "SEO-friendly structure"
      ],
      example: {
        input: "Outline: 5 Steps to Build Authority\n1. Define your expertise\n2. Create valuable content\n3. Engage with community\n4. Build strategic partnerships\n5. Measure and iterate",
        output: "The path to thought leadership isn't built overnight, but with the right strategy, you can establish genuine authority in your field. Here's your roadmap to building influence that matters...\n\n**1. Define Your Unique Expertise**\nAuthority begins with clarity. What specific problem do you solve that others can't? Your expertise should be narrow enough to own, yet broad enough to scale..."
      },
      metrics: {
        draftsGenerated: 147,
        timesSaved: "23 hours",
        engagementBoost: "+34%"
      }
    },
    {
      name: "Repurposing Agent", 
      icon: Repeat,
      status: "Active",
      description: "Convert your long-form content into multiple formats for maximum reach",
      capabilities: [
        "Blog post to email newsletter",
        "Article to social media threads",
        "Long-form to short-form content",
        "Video script to podcast outline",
        "Multi-platform optimization"
      ],
      example: {
        input: "Blog Post: 'The Future of Remote Work Leadership' (2,500 words)",
        output: "✅ Email Newsletter (3 versions)\n✅ Twitter Thread (12 tweets)\n✅ LinkedIn Post (professional tone)\n✅ Instagram Carousel (5 slides)\n✅ YouTube Short Script (60 sec)\n✅ Podcast Talking Points (15 min)"
      },
      metrics: {
        contentPieces: 89,
        platformsReached: 6,
        audienceGrowth: "+127%"
      }
    },
    {
      name: "SEO Agent",
      icon: Search,
      status: "Active", 
      description: "Research keywords, optimize content, and build organic discovery",
      capabilities: [
        "Keyword research and analysis",
        "Title and meta optimization",
        "Internal linking suggestions",
        "Competitor content gaps",
        "Search intent matching"
      ],
      example: {
        input: "Topic: Leadership Development for Remote Teams",
        output: "🎯 Primary Keyword: 'remote leadership skills' (2.4K/month)\n📈 Long-tail opportunities: 15 identified\n🔗 Internal links: 8 strategic suggestions\n📊 Content gap: Virtual team building strategies\n⭐ Title suggestion: 'Remote Leadership Skills: 7 Essential Strategies for Distributed Teams'"
      },
      metrics: {
        keywordsTracked: 234,
        organicGrowth: "+89%",
        avgPosition: 3.2
      }
    },
    {
      name: "Transcript Agent",
      icon: Mic,
      status: "Processing",
      description: "Convert podcasts and videos into searchable, readable content",
      capabilities: [
        "Audio/video transcription",
        "Automatic summarization", 
        "Key quote extraction",
        "Timestamp navigation",
        "SEO-optimized formatting"
      ],
      example: {
        input: "Podcast Episode: 'Building Authority Through Content' (47 minutes)",
        output: "📄 Full transcript (9,847 words)\n📋 Executive summary (3 paragraphs)\n💎 Key quotes (12 highlighted)\n🕒 Chapter markers (8 sections)\n🔍 Searchable format with timestamps\n📱 Mobile-friendly display"
      },
      metrics: {
        hoursTranscribed: 67,
        summariesCreated: 23,
        searchabilityBoost: "+156%"
      }
    },
    {
      name: "Analytics Agent",
      icon: BarChart3,
      status: "Active",
      description: "Weekly insights on growth, engagement, and content performance",
      capabilities: [
        "Subscriber growth analysis",
        "Content performance tracking",
        "Engagement pattern recognition",
        "Revenue attribution",
        "Predictive recommendations"
      ],
      example: {
        input: "Weekly Performance Data",
        output: "📊 **Weekly Growth Digest**\n\n🎯 Subscribers: +127 (23% above target)\n📈 Top performer: 'AI Ethics in Business' (+2.3K views)\n💰 Revenue: $4,890 (+31% vs last week)\n🔥 Trending topic: 'Remote work culture'\n📋 Recommendation: Create video series on remote leadership"
      },
      metrics: {
        reportsGenerated: 52,
        insightAccuracy: "94%",
        actionableTips: 347
      }
    },
    {
      name: "Launch Agent",
      icon: Megaphone,
      status: "Ready",
      description: "Auto-generate complete launch campaigns for products and courses",
      capabilities: [
        "Campaign strategy development",
        "Multi-channel content creation",
        "Email sequence generation",
        "Social media calendars",
        "Landing page copy"
      ],
      example: {
        input: "Product: 'Authority Building Masterclass' ($497 course)",
        output: "🚀 **Complete Launch Campaign**\n\n📧 Email sequence (5 emails, 14 days)\n📱 Social content (21 posts across platforms)\n📄 Landing page copy (3 variations)\n🎯 Ad copy (6 variations for testing)\n📋 Launch timeline (pre, during, post)\n📊 Success metrics and tracking setup"
      },
      metrics: {
        campaignsCreated: 15,
        avgConversion: "12.7%",
        revenueGenerated: "$47K"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Brain className="h-4 w-4" />
            <span>🤖 AI WORKSPACE DEMO - See How AI Agents Amplify Your Thought Leadership</span>
            <Brain className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full mb-6">
            <Brain className="h-4 w-4" />
            <span>AI Agent Workspace Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Your <span className="text-purple-600">AI Agent Workforce</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Six specialized AI agents working 24/7 to amplify your expertise, expand your reach, 
            and accelerate your content creation—while you focus on what matters most.
          </p>

          <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-purple-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">6</div>
                <div className="text-trailguide-slate text-sm">AI Agents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-trailguide-slate text-sm">Always Working</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">10x</div>
                <div className="text-trailguide-slate text-sm">Content Output</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">Draft</div>
                <div className="text-trailguide-slate text-sm">Only Mode</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiAgents.map((agent, index) => (
            <Card key={agent.name} className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <agent.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <Badge variant={agent.status === "Active" ? "default" : agent.status === "Processing" ? "secondary" : "outline"}>
                        {agent.status === "Active" && <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />}
                        {agent.status === "Processing" && <RefreshCw className="h-3 w-3 mr-1 animate-spin" />}
                        {agent.status === "Ready" && <Clock className="h-3 w-3 mr-1" />}
                        {agent.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {agent.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="capabilities" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="capabilities">Features</TabsTrigger>
                    <TabsTrigger value="example">Example</TabsTrigger>
                    <TabsTrigger value="metrics">Results</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="capabilities" className="space-y-3">
                    <h4 className="font-semibold text-trailguide-neutral mb-3">Capabilities:</h4>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-trailguide-slate">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="example" className="space-y-3">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-semibold text-trailguide-neutral mb-2 text-xs uppercase tracking-wide">Input:</h5>
                      <p className="text-sm text-trailguide-slate mb-4 font-mono bg-white p-2 rounded border">
                        {agent.example.input}
                      </p>
                      <h5 className="font-semibold text-trailguide-neutral mb-2 text-xs uppercase tracking-wide">AI Output:</h5>
                      <p className="text-sm text-trailguide-slate font-mono bg-white p-2 rounded border whitespace-pre-line">
                        {agent.example.output}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="metrics" className="space-y-3">
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(agent.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="text-sm font-medium text-trailguide-neutral capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-sm font-bold text-purple-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-2 mt-6">
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <Play className="h-3 w-3 mr-1" />
                    Activate Agent
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Ethics & Safety */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">AI That Enhances, Never Replaces</h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Our AI agents are designed with strict ethical guidelines to amplify your unique voice and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-trailguide-neutral mb-2">Drafts Only</h3>
                <p className="text-trailguide-slate text-sm">
                  All AI agents produce drafts that require your review and approval before publication.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-trailguide-neutral mb-2">Your Voice</h3>
                <p className="text-trailguide-slate text-sm">
                  Trained on your existing content to maintain consistency and authenticity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-trailguide-neutral mb-2">Human Oversight</h3>
                <p className="text-trailguide-slate text-sm">
                  Complete transparency with explainable AI decisions and human-in-the-loop workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">AI Workspace ROI</h2>
              <p className="text-trailguide-slate">See the time and cost savings from your AI agent workforce</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 text-center border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">23 hrs</div>
                <div className="text-trailguide-slate text-sm mb-2">Saved per week</div>
                <div className="text-xs text-trailguide-slate">Content creation time</div>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 text-center border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">10x</div>
                <div className="text-trailguide-slate text-sm mb-2">Content output</div>
                <div className="text-xs text-trailguide-slate">Repurposing efficiency</div>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 text-center border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">$4,890</div>
                <div className="text-trailguide-slate text-sm mb-2">Weekly revenue</div>
                <div className="text-xs text-trailguide-slate">AI-optimized content</div>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 text-center border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-trailguide-slate text-sm mb-2">Accuracy rate</div>
                <div className="text-xs text-trailguide-slate">Predictive insights</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
              Ready to Activate Your AI Workforce?
            </h2>
            <p className="text-trailguide-slate mb-8">
              This complete AI agent workspace is included in your Expert Publisher platform. 
              Start your assessment to see how AI can amplify your thought leadership.
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
