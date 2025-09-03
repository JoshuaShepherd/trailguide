import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Download, 
  Camera, 
  FileText, 
  Image, 
  Video,
  Mic,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Newspaper,
  BookOpen,
  Mail,
  ExternalLink,
  Briefcase,
  Target,
  Globe,
  Phone
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media Kit | TrailGuide',
  description: 'Download TrailGuide\'s media kit with logos, leadership photos, press releases, and brand assets for media coverage and partnership materials.',
}

const brandAssets = [
  {
    category: "Logos & Wordmarks",
    items: [
      { name: "Primary Logo (Color)", format: "PNG, SVG", size: "2.1 MB" },
      { name: "Primary Logo (Black)", format: "PNG, SVG", size: "1.8 MB" },
      { name: "Primary Logo (White)", format: "PNG, SVG", size: "1.9 MB" },
      { name: "Wordmark Only", format: "PNG, SVG", size: "1.2 MB" },
      { name: "Icon Only", format: "PNG, SVG", size: "0.8 MB" },
      { name: "Favicon Package", format: "ICO, PNG", size: "0.3 MB" }
    ]
  },
  {
    category: "Leadership Headshots",
    items: [
      { name: "Joshua Shepherd (Founder & CEO)", format: "JPG", size: "3.2 MB" },
      { name: "Dr. Sarah Chen (CTO)", format: "JPG", size: "2.8 MB" },
      { name: "Maria Rodriguez (Head of Partnerships)", format: "JPG", size: "3.1 MB" },
      { name: "David Kim (Head of Advisory)", format: "JPG", size: "2.9 MB" },
      { name: "Group Leadership Photo", format: "JPG", size: "4.5 MB" }
    ]
  },
  {
    category: "Product Screenshots",
    items: [
      { name: "TrailMap Assessment Interface", format: "PNG", size: "1.9 MB" },
      { name: "TrailKit Dashboard View", format: "PNG", size: "2.3 MB" },
      { name: "AI Recommendations Page", format: "PNG", size: "2.1 MB" },
      { name: "Analytics Dashboard", format: "PNG", size: "2.5 MB" },
      { name: "Mobile App Screenshots", format: "PNG", size: "3.2 MB" }
    ]
  },
  {
    category: "Brand Guidelines",
    items: [
      { name: "Complete Brand Guidelines", format: "PDF", size: "8.7 MB" },
      { name: "Color Palette Guide", format: "PDF", size: "2.1 MB" },
      { name: "Typography Guide", format: "PDF", size: "1.8 MB" },
      { name: "Usage Guidelines", format: "PDF", size: "3.2 MB" }
    ]
  }
]

const pressReleases = [
  {
    date: "2025-08-15",
    title: "TrailGuide Launches AI-Powered Assessment Platform for Nonprofits",
    summary: "New platform helps nonprofit organizations evaluate AI readiness and implement technology solutions tailored to their mission.",
    category: "Product Launch"
  },
  {
    date: "2025-07-22", 
    title: "TrailGuide Secures $2.5M Series A to Scale Nonprofit AI Adoption",
    summary: "Funding round led by Social Impact Ventures will accelerate platform development and expand advisory services.",
    category: "Funding"
  },
  {
    date: "2025-06-10",
    title: "Partnership Announcement: TrailGuide Joins Microsoft for Nonprofits",
    summary: "Strategic partnership integrates Azure AI services with TrailGuide's assessment platform for enhanced capabilities.",
    category: "Partnership"
  },
  {
    date: "2025-05-18",
    title: "Research Report: 78% of Nonprofits Plan AI Investment in Next 12 Months",
    summary: "TrailGuide's inaugural State of Nonprofit AI report reveals sector-wide momentum toward technology adoption.",
    category: "Research"
  }
]

const mediaMentions = [
  {
    outlet: "Chronicle of Philanthropy",
    title: "AI Tools Are Transforming How Nonprofits Work",
    date: "2025-08-20",
    type: "Feature Article",
    quote: "TrailGuide is leading the charge in making AI accessible to mission-driven organizations."
  },
  {
    outlet: "Stanford Social Innovation Review", 
    title: "The Future of Nonprofit Technology",
    date: "2025-07-30",
    type: "Research Analysis",
    quote: "TrailGuide's assessment methodology sets a new standard for responsible AI adoption."
  },
  {
    outlet: "TechSoup Blog",
    title: "Getting Started with AI: A Nonprofit's Guide",
    date: "2025-07-15", 
    type: "Guest Post",
    quote: "Joshua Shepherd's insights help nonprofits navigate the AI landscape with confidence."
  },
  {
    outlet: "Nonprofit Times",
    title: "Artificial Intelligence in the Social Sector",
    date: "2025-06-25",
    type: "Industry Coverage",
    quote: "TrailGuide demonstrates how AI can amplify nonprofit impact without compromising values."
  }
]

const keyStats = [
  { metric: "2,500+", description: "Nonprofit Organizations Served" },
  { metric: "15", description: "TrailKits Available" },
  { metric: "89%", description: "Average AI Readiness Improvement" },
  { metric: "$3.2M", description: "Total Funding Raised" },
  { metric: "50+", description: "Partner Organizations" },
  { metric: "25", description: "Countries Represented" }
]

const leadershipBios = [
  {
    name: "Joshua Shepherd",
    title: "Founder & CEO",
    bio: "Former nonprofit executive turned technology entrepreneur. Joshua founded TrailGuide after witnessing firsthand the challenges nonprofits face in adopting new technologies. Previously served as COO at United Way and holds an MBA from Stanford Graduate School of Business.",
    expertise: ["Nonprofit Leadership", "Social Innovation", "Technology Strategy"],
    speaking: ["AI Ethics", "Nonprofit Digital Transformation", "Social Impact Technology"]
  },
  {
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer", 
    bio: "AI researcher and former Google principal engineer with 12 years experience building ethical AI systems. Sarah leads TrailGuide's technical development and ensures all AI implementations meet the highest standards for fairness and transparency.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Ethical AI"],
    speaking: ["AI Ethics in Social Sector", "Responsible AI Development", "Technical Leadership"]
  },
  {
    name: "Maria Rodriguez",
    title: "Head of Partnerships",
    bio: "Partnership strategist with deep nonprofit sector connections. Maria previously led partnership programs at Salesforce Nonprofit Cloud and brings expertise in building ecosystems that drive social impact.",
    expertise: ["Strategic Partnerships", "Nonprofit Ecosystem", "Business Development"],
    speaking: ["Partnership Strategy", "Nonprofit Collaboration", "Ecosystem Building"]
  }
]

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <section className="bg-white border-b border-trailguide-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-trailguide-neutral mb-4">
              Media Kit & Press Resources
            </h1>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto">
              Everything you need for media coverage, partnership materials, and content creation. 
              Download high-quality assets and access the latest TrailGuide news and insights.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download Complete Media Kit
            </Button>
            <Button asChild size="lg" variant="outline" className="flex items-center">
              <Link href="mailto:press@trailguide.org">
                <Mail className="h-5 w-5 mr-2" />
                Contact Press Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Quick Facts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8 text-center">
            TrailGuide at a Glance
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyStats.map((stat, index) => (
              <Card key={index} className="border-trailguide-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-trailguide-evergreen mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-trailguide-slate">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Fact Sheet */}
        <section className="mb-16">
          <Card className="border-trailguide-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Company Fact Sheet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Founded</h4>
                    <p className="text-trailguide-slate">2024 in San Francisco, CA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Mission</h4>
                    <p className="text-trailguide-slate">
                      Accelerating AI adoption across the nonprofit sector through ethical, 
                      accessible, and mission-aligned technology solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Team Size</h4>
                    <p className="text-trailguide-slate">25+ employees across 8 countries</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Funding</h4>
                    <p className="text-trailguide-slate">$3.2M total raised (Seed + Series A)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Primary Services</h4>
                    <p className="text-trailguide-slate">
                      AI readiness assessments, implementation toolkits, advisory services, 
                      and community platform for nonprofit organizations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Key Differentiators</h4>
                    <p className="text-trailguide-slate">
                      Nonprofit-specific AI solutions, ethical AI framework, 
                      peer-to-peer learning network, expert advisory services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trailguide-neutral mb-1">Awards & Recognition</h4>
                    <p className="text-trailguide-slate">
                      Fast Company World Changing Ideas 2025, TechSoup Innovation Award, 
                      B Corp Certification (Pending)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Brand Assets */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-trailguide-neutral">Brand Assets</h2>
            <Button variant="outline" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Download All Assets
            </Button>
          </div>
          
          <div className="space-y-6">
            {brandAssets.map((category, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-trailguide-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Image className="h-5 w-5 text-trailguide-slate" />
                          <div>
                            <div className="font-medium text-trailguide-neutral text-sm">{item.name}</div>
                            <div className="text-xs text-trailguide-slate">{item.format} • {item.size}</div>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="flex items-center">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Bios */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">Leadership Team</h2>
          
          <div className="space-y-8">
            {leadershipBios.map((leader, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <div className="w-32 h-32 bg-trailguide-slate/10 rounded-full flex items-center justify-center mb-4">
                        <Camera className="h-12 w-12 text-trailguide-slate" />
                      </div>
                      <h3 className="font-bold text-trailguide-neutral text-lg">{leader.name}</h3>
                      <p className="text-trailguide-evergreen font-medium">{leader.title}</p>
                      <Button size="sm" variant="outline" className="mt-3 flex items-center">
                        <Download className="h-3 w-3 mr-1" />
                        Download Photo
                      </Button>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <p className="text-trailguide-slate mb-4">{leader.bio}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-trailguide-neutral mb-2">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((area, i) => (
                              <Badge key={i} variant="secondary">{area}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-trailguide-neutral mb-2">Speaking Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.speaking.map((topic, i) => (
                              <Badge key={i} variant="outline">{topic}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-trailguide-neutral">Recent Press Releases</h2>
            <Link href="/news" className="text-trailguide-evergreen hover:text-trailguide-evergreen/80">
              View all news →
            </Link>
          </div>
          
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <Card key={index} className="border-trailguide-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary">{release.category}</Badge>
                        <span className="text-sm text-trailguide-slate">
                          {new Date(release.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="font-semibold text-trailguide-neutral text-lg mb-2">
                        {release.title}
                      </h3>
                      <p className="text-trailguide-slate text-sm">{release.summary}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Read
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Coverage */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-trailguide-neutral mb-8">Recent Media Coverage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaMentions.map((mention, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Newspaper className="h-4 w-4 text-trailguide-evergreen" />
                    <span className="font-semibold text-trailguide-neutral">{mention.outlet}</span>
                    <Badge variant="outline" className="text-xs">{mention.type}</Badge>
                  </div>
                  
                  <h3 className="font-medium text-trailguide-neutral mb-2">{mention.title}</h3>
                  
                  <p className="text-sm text-trailguide-slate mb-3">
                    {new Date(mention.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  
                  <blockquote className="border-l-4 border-trailguide-evergreen pl-3 text-sm italic text-trailguide-slate">
                    "{mention.quote}"
                  </blockquote>
                  
                  <Button size="sm" variant="outline" className="mt-4 flex items-center">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Press Contact */}
        <section>
          <div className="bg-trailguide-evergreen/10 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">
                Press & Media Inquiries
              </h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                For interviews, expert commentary, or additional resources, our press team 
                is here to help. We typically respond within 4 hours during business days.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">General Press</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    For general media inquiries and interview requests
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:press@trailguide.org">
                      press@trailguide.org
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Briefcase className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Business Media</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    For funding, partnerships, and business announcements
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:business@trailguide.org">
                      business@trailguide.org
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-trailguide-border text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-trailguide-evergreen mx-auto mb-3" />
                  <h3 className="font-semibold text-trailguide-neutral mb-2">Speaking Requests</h3>
                  <p className="text-sm text-trailguide-slate mb-4">
                    For conference speaking and expert panel requests
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:speaking@trailguide.org">
                      speaking@trailguide.org
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-trailguide-slate mb-4">
                Need immediate assistance or have breaking news deadlines?
              </p>
              <Button asChild variant="outline">
                <Link href="tel:+1-555-TRAIL-01">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Press Line: +1 (555) TRAIL-01
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
