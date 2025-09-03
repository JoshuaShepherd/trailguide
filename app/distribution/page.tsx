import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Share2, 
  Mail, 
  Globe, 
  Megaphone, 
  Users, 
  Calendar,
  ArrowRight,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Distribution | TrailGuide',
  description: 'Multi-channel content distribution system for maximum nonprofit reach and engagement.',
}

const distributionChannels = [
  {
    icon: Globe,
    title: "Website & Blog",
    description: "Publish directly to your website with SEO optimization",
    features: ["SEO optimization", "Content scheduling", "Analytics tracking"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Send newsletters and campaigns to your subscriber base",
    features: ["Segmented lists", "A/B testing", "Automated sequences"]
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Cross-post content to all your social platforms",
    features: ["Multi-platform posting", "Optimal timing", "Engagement tracking"]
  },
  {
    icon: Megaphone,
    title: "Press & Media",
    description: "Distribute press releases and media announcements",
    features: ["Media contacts", "Press kit access", "Coverage tracking"]
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Share with partner organizations and stakeholders",
    features: ["Partner networks", "Stakeholder lists", "Community boards"]
  },
  {
    icon: Calendar,
    title: "Event Promotion",
    description: "Promote events across all channels simultaneously",
    features: ["Event calendars", "Registration links", "Reminder sequences"]
  }
]

const platformFeatures = [
  {
    platform: "Facebook",
    icon: Facebook,
    description: "Reach community members and local supporters",
    features: ["Page management", "Event creation", "Community groups"]
  },
  {
    platform: "Twitter",
    icon: Twitter,
    description: "Engage with media, advocates, and thought leaders",
    features: ["Thread creation", "Hashtag optimization", "Engagement metrics"]
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    description: "Connect with professional networks and corporate partners",
    features: ["Professional content", "Company pages", "Thought leadership"]
  },
  {
    platform: "Instagram",
    icon: Instagram,
    description: "Share visual stories and behind-the-scenes content",
    features: ["Story creation", "Visual content", "Community building"]
  }
]

export default function DistributionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Share2 className="mr-2 h-4 w-4" />
              Content Distribution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
              Amplify Your
              <span className="text-trailguide-evergreen block">Message Everywhere</span>
            </h1>
            <p className="text-lg text-trailguide-slate mb-8 max-w-3xl mx-auto">
              Maximize your content&apos;s reach with intelligent multi-channel distribution. 
              Get your message in front of the right people, at the right time, on the right platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                Start Distribution <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Integrations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Multi-Channel Distribution"
            subtitle="Reach your audience wherever they are with coordinated content delivery"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributionChannels.map((channel, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center mb-4">
                    <channel.icon className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <CardTitle className="text-xl text-trailguide-neutral">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">{channel.description}</p>
                  <ul className="space-y-2">
                    {channel.features.map((item, idx) => (
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

      {/* Platform-Specific Features */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Platform-Optimized Content
            </h2>
            <p className="text-lg text-trailguide-slate">
              Tailored content formats and timing for each social media platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {platformFeatures.map((platform, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center">
                      <platform.icon className="h-6 w-6 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-trailguide-neutral">{platform.platform}</CardTitle>
                      <p className="text-trailguide-slate text-sm">{platform.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-trailguide-slate">
                        <Check className="h-4 w-4 text-trailguide-evergreen mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Smart Distribution Automation
            </h2>
            <p className="text-lg text-trailguide-slate">
              Save time with intelligent scheduling and automated workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Smart Scheduling</h3>
                <p className="text-trailguide-slate">
                  Publish content at optimal times for maximum engagement on each platform
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Send className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Automated Workflows</h3>
                <p className="text-trailguide-slate">
                  Set up sequences that automatically distribute follow-up content
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">Audience Targeting</h3>
                <p className="text-trailguide-slate">
                  Deliver personalized content to specific segments across all channels
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
              Ready to Amplify Your Reach?
            </h2>
            <p className="text-lg text-trailguide-slate mb-8">
              Get your content in front of more supporters with intelligent distribution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                Set Up Distribution <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Platform Integrations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}