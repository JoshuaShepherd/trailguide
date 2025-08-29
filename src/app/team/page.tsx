import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  Globe,
  Users,
  Heart,
  Target,
  Lightbulb,
  MapPin,
  Calendar,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team & Leadership | TrailGuide',
  description: 'Meet the team behind TrailGuide - experienced nonprofit leaders, AI specialists, and mission-driven professionals working to democratize AI for social good.',
}

const leadership = [
  {
    name: 'Joshua Shepherd',
    role: 'Founder & CEO',
    bio: 'Former nonprofit executive turned AI evangelist, Joshua combines 15+ years of nonprofit leadership with deep expertise in artificial intelligence and organizational transformation. Previously led digital transformation at three major nonprofits.',
    background: 'Stanford MBA, Former United Way VP of Innovation',
    specialties: ['Strategic Leadership', 'AI Ethics', 'Organizational Change'],
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com/in/joshuashepherd',
      email: 'joshua@trailguide.org',
      website: 'https://joshuashepherd.com'
    },
    quote: '"Every nonprofit deserves access to the tools that can amplify their impact. AI shouldn\'t be a privilege reserved for tech companies."'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Leading AI researcher and former nonprofit CTO, Sarah bridges the gap between cutting-edge AI capabilities and practical nonprofit applications. She holds multiple patents in ethical AI systems.',
    background: 'PhD Computer Science MIT, Former CTO United Way Worldwide',
    specialties: ['AI Architecture', 'Ethical AI', 'Nonprofit Technology'],
    location: 'Boston, MA',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen-ai',
      email: 'sarah@trailguide.org'
    },
    quote: '"The future of AI is not just about what we can build, but about who we build it for and how it serves humanity."'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Vice President of Programs',
    bio: 'Marcus brings grassroots nonprofit experience and program excellence to TrailGuide. He\'s helped over 200 organizations implement technology solutions that directly improve their program outcomes.',
    background: 'MSW, Former Director of Programs at Salesforce.org',
    specialties: ['Program Design', 'Change Management', 'Community Building'],
    location: 'Chicago, IL',
    social: {
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      email: 'marcus@trailguide.org'
    },
    quote: '"Technology is only as good as the programs it serves. Our job is to make AI work for the communities nonprofits serve."'
  },
  {
    name: 'Dr. Amelia Foster',
    role: 'Chief Ethics Officer',
    bio: 'Former White House AI Policy advisor and nonprofit board member, Amelia ensures TrailGuide\'s commitment to ethical AI development and responsible innovation in the nonprofit sector.',
    background: 'JD/PhD, Former White House Office of Science & Technology Policy',
    specialties: ['AI Policy', 'Ethics Framework', 'Governance'],
    location: 'Washington, DC',
    social: {
      linkedin: 'https://linkedin.com/in/ameliafoster',
      email: 'amelia@trailguide.org'
    },
    quote: '"Ethics can\'t be an afterthought in AI development. It must be foundational to everything we build and every decision we make."'
  }
]

const advisoryBoard = [
  {
    name: 'Dan Pallotta',
    role: 'Strategic Advisor',
    background: 'Author "Uncharitable", Founder Pallotta TeamWorks',
    expertise: 'Nonprofit Innovation, Social Change Theory',
    contribution: 'Strategic vision and sector transformation insights'
  },
  {
    name: 'Reshma Saujani',
    role: 'Advisor',
    background: 'Founder Girls Who Code, Former NYC Deputy Public Advocate',
    expertise: 'Tech Equity, Women in Tech, Social Justice',
    contribution: 'Diversity, equity, and inclusion in AI development'
  },
  {
    name: 'Craig Newmark',
    role: 'Technology Advisor',
    background: 'Founder Craigslist, Philanthropist',
    expertise: 'Internet Technologies, Civic Tech, Trustworthy Journalism',
    contribution: 'Technology ethics and platform responsibility'
  },
  {
    name: 'Asha Curran',
    role: 'Program Advisor',
    background: 'Former CEO GivingTuesday, Global Movement Builder',
    expertise: 'Global Movements, Collective Action, Generosity',
    contribution: 'Global scaling and community building strategies'
  }
]

const coreValues = [
  {
    icon: Heart,
    title: 'Mission-First',
    description: 'Every decision we make is filtered through impact on nonprofit missions and the communities they serve.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by the real-world outcomes achieved by the organizations we support.'
  },
  {
    icon: Users,
    title: 'Inclusive by Design',
    description: 'AI tools should be accessible to all nonprofits, regardless of size, budget, or technical expertise.'
  },
  {
    icon: Lightbulb,
    title: 'Ethical Innovation',
    description: 'We pioneer responsible AI development that respects privacy, promotes equity, and builds trust.'
  }
]

const workCulture = {
  title: 'Remote-First, Mission-Driven Culture',
  description: 'We believe the best talent for nonprofit AI work comes from everywhere, and our remote-first approach lets us build a truly diverse, global team.',
  features: [
    'Flexible work arrangements with core collaboration hours',
    'Annual team retreats for in-person connection and strategic planning',
    'Professional development budget for AI and nonprofit skills',
    'Sabbatical program for long-term team members',
    'Equity participation for all full-time team members',
    'Mental health and wellness support for mission-driven work'
  ]
}

const careers = {
  title: 'Join Our Mission',
  description: 'We\'re always looking for passionate individuals who want to democratize AI for social good.',
  openRoles: [
    {
      title: 'Senior AI Engineer',
      type: 'Full-time',
      location: 'Remote',
      description: 'Build and scale AI systems specifically designed for nonprofit use cases.'
    },
    {
      title: 'Nonprofit Partnership Manager',
      type: 'Full-time', 
      location: 'Remote',
      description: 'Develop relationships with nonprofit partners and guide their AI transformation.'
    },
    {
      title: 'Content & Community Specialist',
      type: 'Part-time',
      location: 'Remote',
      description: 'Create educational content and build community among nonprofit AI adopters.'
    }
  ]
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the TrailGuide Team
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            Experienced nonprofit leaders, AI specialists, and mission-driven professionals 
            working to democratize AI for social good.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-trailguide-evergreen"
            >
              <Link href="#careers" className="flex items-center">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <div className="flex items-center text-emerald-200">
              <Users className="h-4 w-4 mr-2" />
              <span>Remote-first • Mission-driven • Globally distributed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Combining deep nonprofit experience with cutting-edge AI expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-trailguide-evergreen to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-trailguide-neutral mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-trailguide-evergreen font-medium mb-2">
                        {leader.role}
                      </p>
                      
                      <div className="flex items-center text-sm text-trailguide-slate mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {leader.location}
                      </div>
                      
                      <p className="text-trailguide-slate mb-4 text-sm leading-relaxed">
                        {leader.bio}
                      </p>
                      
                      <p className="text-sm font-medium text-trailguide-neutral mb-3">
                        {leader.background}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {leader.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3 mb-4">
                        {leader.social.linkedin && (
                          <a 
                            href={leader.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-trailguide-slate hover:text-trailguide-evergreen"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {leader.social.email && (
                          <a 
                            href={`mailto:${leader.social.email}`}
                            className="text-trailguide-slate hover:text-trailguide-evergreen"
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                        {leader.social.website && (
                          <a 
                            href={leader.social.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-trailguide-slate hover:text-trailguide-evergreen"
                          >
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      
                      <blockquote className="text-sm italic text-trailguide-slate border-l-4 border-trailguide-evergreen pl-4">
                        {leader.quote}
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Industry leaders and visionaries guiding our strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <Card key={advisor.name} className="border-trailguide-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-trailguide-neutral mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-trailguide-evergreen font-medium text-sm mb-2">
                    {advisor.role}
                  </p>
                  <p className="text-sm text-trailguide-slate mb-3">
                    {advisor.background}
                  </p>
                  <p className="text-xs text-trailguide-slate mb-2">
                    <strong>Expertise:</strong> {advisor.expertise}
                  </p>
                  <p className="text-xs text-trailguide-slate">
                    <strong>Contribution:</strong> {advisor.contribution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              The principles that guide every decision and drive our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="border-trailguide-border text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-trailguide-evergreen" />
                    </div>
                    <h3 className="text-lg font-semibold text-trailguide-neutral mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-trailguide-slate leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              {workCulture.title}
            </h2>
            <p className="text-xl text-trailguide-slate">
              {workCulture.description}
            </p>
          </div>

          <Card className="border-trailguide-border">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {workCulture.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-trailguide-evergreen rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-trailguide-slate">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              {careers.title}
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              {careers.description}
            </p>
          </div>

          <div className="space-y-6">
            {careers.openRoles.map((role, index) => (
              <Card key={role.title} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-trailguide-neutral mb-2">
                        {role.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge variant="outline">{role.type}</Badge>
                        <span className="text-sm text-trailguide-slate flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {role.location}
                        </span>
                      </div>
                      <p className="text-trailguide-slate">
                        {role.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button asChild>
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-trailguide-slate mb-6">
              Don't see a role that fits? We're always interested in hearing from passionate individuals.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Send Us Your Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Photo Section - Placeholder */}
      <section className="py-20 bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Building the Future of Nonprofit AI
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Every day, we work to make AI more accessible, ethical, and impactful for organizations 
            dedicated to making the world better.
          </p>
          
          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <p className="text-emerald-200 text-sm mb-4">
              Team photo coming soon - we're planning our first all-hands retreat!
            </p>
            <div className="h-48 bg-white/5 rounded-lg flex items-center justify-center">
              <Users className="h-16 w-16 text-white/50" />
            </div>
          </div>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-trailguide-evergreen"
          >
            <Link href="/contact" className="flex items-center">
              Get in Touch
              <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
