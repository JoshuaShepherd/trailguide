import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Calendar,
  ExternalLink,
  Newspaper,
  Mic,
  Award,
  Users,
  Globe,
  Mail,
  Rss
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Updates | TrailGuide',
  description: 'Stay updated with TrailGuide news, press coverage, partnership announcements, and industry insights about AI in the nonprofit sector.',
}

const pressReleases = [
  {
    date: '2025-08-15',
    title: 'TrailGuide Launches Comprehensive AI Platform for Nonprofits',
    summary: 'New platform combines assessment tools, educational resources, and practical AI implementation guides specifically designed for nonprofit organizations.',
    type: 'Launch',
    link: '/news/platform-launch-2025'
  },
  {
    date: '2025-07-22',
    title: 'TrailGuide Receives $2.5M Seed Funding to Democratize AI for Social Good',
    summary: 'Investment led by Omidyar Network will accelerate development of AI tools and resources for nonprofit organizations worldwide.',
    type: 'Funding',
    link: '/news/seed-funding-announcement'
  },
  {
    date: '2025-06-10',
    title: 'Partnership with United Way Worldwide Brings AI Training to 1,200+ Local Organizations',
    summary: 'Strategic partnership will integrate TrailGuide assessment and training tools into United Way\'s digital transformation initiative.',
    type: 'Partnership',
    link: '/news/united-way-partnership'
  },
  {
    date: '2025-05-03',
    title: 'TrailGuide Founder Named to Forbes 30 Under 30 Social Impact List',
    summary: 'Recognition highlights innovative approach to making artificial intelligence accessible and ethical for nonprofit organizations.',
    type: 'Recognition',
    link: '/news/forbes-30-under-30'
  }
]

const mediaMentions = [
  {
    date: '2025-08-20',
    outlet: 'Chronicle of Philanthropy',
    title: 'How Small Nonprofits Are Successfully Adopting AI Tools',
    type: 'Feature Article',
    link: 'https://chronicle.com/nonprofit-ai-adoption-2025',
    description: 'In-depth look at how organizations with limited tech resources are using AI to amplify their impact.'
  },
  {
    date: '2025-08-12',
    outlet: 'TechCrunch',
    title: 'TrailGuide Wants to Be the Training Wheels for Nonprofit AI Adoption',
    type: 'Interview',
    link: 'https://techcrunch.com/trailguide-nonprofit-ai',
    description: 'CEO Joshua Shepherd discusses the unique challenges nonprofits face in AI adoption.'
  },
  {
    date: '2025-07-25',
    outlet: 'Stanford Social Innovation Review',
    title: 'The Ethics of AI in Social Impact Work',
    type: 'Op-Ed',
    link: 'https://ssir.org/ai-ethics-social-impact',
    description: 'TrailGuide\'s Chief Ethics Officer explores responsible AI development for social good.'
  },
  {
    date: '2025-07-18',
    outlet: 'Nonprofit Times',
    title: 'AI Assessment Tool Helps Organizations Find Their Digital Readiness',
    type: 'Product Review',
    link: 'https://nonprofittimes.com/trailguide-assessment-review',
    description: 'Comprehensive review of TrailMap assessment tool and its impact on nonprofit strategy.'
  },
  {
    date: '2025-06-30',
    outlet: 'Fast Company',
    title: 'These Startups Are Making AI Accessible to Organizations That Need It Most',
    type: 'Feature',
    link: 'https://fastcompany.com/nonprofit-ai-startups-2025',
    description: 'TrailGuide featured among innovative companies democratizing AI technology.'
  }
]

const partnerships = [
  {
    date: '2025-08-01',
    partner: 'TechSoup',
    title: 'Integration with TechSoup\'s Digital Literacy Programs',
    description: 'TrailGuide assessment and training resources now available through TechSoup\'s platform to 400,000+ nonprofits worldwide.',
    impact: '400K+ organizations reached'
  },
  {
    date: '2025-07-15',
    partner: 'Salesforce.org',
    title: 'AI Kit Integration with Nonprofit Cloud',
    description: 'TrailGuide\'s specialized nonprofit AI tools now integrate seamlessly with Salesforce Nonprofit Cloud platform.',
    impact: 'Native integration for 40K+ orgs'
  },
  {
    date: '2025-06-20',
    partner: 'GlobalGiving',
    title: 'AI Training for International Development Organizations',
    description: 'Specialized training program for international nonprofits focusing on culturally-sensitive AI implementation.',
    impact: 'Training for 500+ global NGOs'
  }
]

const speakingEngagements = [
  {
    date: '2025-09-15',
    event: 'Independent Sector Annual Conference',
    speaker: 'Joshua Shepherd',
    topic: 'AI Strategy for Nonprofit Boards: What Leaders Need to Know',
    location: 'Washington, DC',
    type: 'Upcoming'
  },
  {
    date: '2025-09-08',
    event: 'NTEN Nonprofit Technology Conference',
    speaker: 'Dr. Sarah Chen',
    topic: 'Building Ethical AI Systems for Social Impact',
    location: 'San Francisco, CA',
    type: 'Upcoming'
  },
  {
    date: '2025-08-22',
    event: 'Association of Fundraising Professionals International Conference',
    speaker: 'Marcus Rodriguez',
    topic: 'AI-Powered Donor Engagement: Ethics and Effectiveness',
    location: 'New Orleans, LA',
    type: 'Completed'
  },
  {
    date: '2025-08-10',
    event: 'TED@StateStreet',
    speaker: 'Dr. Amelia Foster',
    topic: 'The Future of Ethical AI in Social Good',
    location: 'Boston, MA',
    type: 'Completed'
  }
]

const grantAwards = [
  {
    date: '2025-07-30',
    funder: 'Knight Foundation',
    amount: '$500,000',
    project: 'AI Ethics Framework for Nonprofit Technology',
    duration: '18 months',
    description: 'Developing comprehensive ethical guidelines and governance frameworks for AI adoption in the nonprofit sector.'
  },
  {
    date: '2025-06-15',
    funder: 'Google.org AI for Social Good',
    amount: '$300,000',
    project: 'Global Nonprofit AI Training Initiative',
    duration: '12 months',
    description: 'Creating culturally-adapted AI training resources for nonprofits in emerging markets.'
  },
  {
    date: '2025-05-20',
    funder: 'Open Society Foundations',
    amount: '$250,000',
    project: 'Democratic AI Governance for Civil Society',
    duration: '24 months',
    description: 'Research and development of participatory approaches to AI governance in nonprofit organizations.'
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            Stay updated with TrailGuide news, partnerships, media coverage, and insights 
            about AI in the nonprofit sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-trailguide-evergreen"
            >
              <Link href="#newsletter" className="flex items-center">
                Subscribe to Updates
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-trailguide-evergreen"
            >
              <Link href="/rss" className="flex items-center">
                RSS Feed
                <Rss className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Latest announcements and milestones from TrailGuide
            </p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={release.title} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge variant="outline">{release.type}</Badge>
                        <span className="text-sm text-trailguide-slate flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                        {release.title}
                      </h3>
                      <p className="text-trailguide-slate mb-4">
                        {release.summary}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button asChild variant="outline">
                        <Link href={release.link} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Media Coverage
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              TrailGuide in the news and industry publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaMentions.map((mention, index) => (
              <Card key={mention.title} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Newspaper className="h-4 w-4 text-trailguide-evergreen" />
                    <span className="text-sm font-medium text-trailguide-evergreen">
                      {mention.outlet}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {mention.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-trailguide-neutral mb-2">
                    {mention.title}
                  </h3>
                  
                  <p className="text-sm text-trailguide-slate mb-4">
                    {mention.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-trailguide-slate flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(mention.date).toLocaleDateString()}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <a href={mention.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Read Article
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Partnership Announcements
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Collaborations expanding access to AI for nonprofits worldwide
            </p>
          </div>

          <div className="space-y-8">
            {partnerships.map((partnership, index) => (
              <Card key={partnership.title} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-trailguide-evergreen" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-trailguide-neutral">
                            {partnership.title}
                          </h3>
                          <p className="text-trailguide-evergreen font-medium">
                            Partnership with {partnership.partner}
                          </p>
                        </div>
                      </div>
                      <p className="text-trailguide-slate mb-3">
                        {partnership.description}
                      </p>
                    </div>
                    <div className="lg:ml-8 mt-4 lg:mt-0">
                      <div className="bg-trailguide-evergreen/10 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-trailguide-evergreen">
                          {partnership.impact}
                        </div>
                        <div className="text-xs text-trailguide-slate">
                          {new Date(partnership.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Grant Awards & Funding
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Investments supporting our mission to democratize AI for social good
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grantAwards.map((grant, index) => (
              <Card key={grant.project} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="h-5 w-5 text-trailguide-evergreen" />
                    <span className="font-medium text-trailguide-evergreen">
                      {grant.funder}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-trailguide-neutral mb-2">
                    {grant.project}
                  </h3>
                  
                  <div className="text-2xl font-bold text-trailguide-evergreen mb-2">
                    {grant.amount}
                  </div>
                  
                  <p className="text-sm text-trailguide-slate mb-4">
                    {grant.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-trailguide-slate">
                    <span>{grant.duration}</span>
                    <span>{new Date(grant.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Speaking Engagements
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Our team sharing insights at conferences and industry events
            </p>
          </div>

          <div className="space-y-6">
            {speakingEngagements.map((engagement, index) => (
              <Card key={engagement.event + engagement.date} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <Mic className="h-5 w-5 text-trailguide-evergreen" />
                        <Badge 
                          variant={engagement.type === 'Upcoming' ? 'default' : 'outline'}
                          className={engagement.type === 'Upcoming' ? 'bg-trailguide-evergreen' : ''}
                        >
                          {engagement.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-trailguide-neutral mb-2">
                        {engagement.topic}
                      </h3>
                      
                      <div className="space-y-1 text-sm text-trailguide-slate">
                        <p><strong>Event:</strong> {engagement.event}</p>
                        <p><strong>Speaker:</strong> {engagement.speaker}</p>
                        <p><strong>Location:</strong> {engagement.location}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6 text-right">
                      <div className="text-lg font-medium text-trailguide-neutral">
                        {new Date(engagement.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get the latest TrailGuide news, industry insights, and nonprofit AI trends 
            delivered to your inbox monthly.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <Button className="bg-white text-trailguide-evergreen hover:bg-gray-100 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
          
          <p className="text-emerald-200 text-sm">
            No spam, unsubscribe anytime. Read our <Link href="/privacy" className="underline">privacy policy</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
