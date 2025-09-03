import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Lightbulb,
  BarChart3,
  Star,
  Clock,
  Shield,
  MessageCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrailMap Assessment: Discover Your AI Readiness | TrailGuide',
  description: 'Take our comprehensive AI readiness assessment to discover your nonprofit\'s current stage and get personalized recommendations for your AI transformation journey.',
}

const assessmentStages = [
  {
    name: 'Awareness',
    description: 'Understanding AI capabilities and limitations for your mission',
    color: 'from-red-100 to-red-200',
    textColor: 'text-red-800',
    icon: Lightbulb
  },
  {
    name: 'Experimentation',
    description: 'Testing AI tools in low-risk scenarios to build confidence',
    color: 'from-orange-100 to-orange-200',
    textColor: 'text-orange-800',
    icon: Target
  },
  {
    name: 'Adoption',
    description: 'Integrating AI solutions into regular workflows',
    color: 'from-yellow-100 to-yellow-200',
    textColor: 'text-yellow-800',
    icon: CheckCircle
  },
  {
    name: 'Integration',
    description: 'AI becomes part of your organizational DNA',
    color: 'from-green-100 to-green-200',
    textColor: 'text-green-800',
    icon: BarChart3
  },
  {
    name: 'Transformation',
    description: 'Leading innovation in the nonprofit sector',
    color: 'from-blue-100 to-blue-200',
    textColor: 'text-blue-800',
    icon: Star
  }
]

const benefits = [
  {
    icon: Target,
    title: 'Personalized Roadmap',
    description: 'Get a custom AI implementation plan based on your current stage and organizational goals.'
  },
  {
    icon: BarChart3,
    title: 'Kit Recommendations',
    description: 'Receive tailored TrailKit suggestions that match your specific needs and readiness level.'
  },
  {
    icon: Users,
    title: 'Peer Connections',
    description: 'Connect with nonprofits at similar stages for collaborative learning and support.'
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Identify potential challenges and get guidance on ethical AI implementation.'
  }
]

const testimonials = [
  {
    quote: "The TrailMap assessment helped us realize we were already further along than we thought. The personalized recommendations gave us confidence to take the next steps.",
    author: "Sarah Chen",
    role: "Executive Director",
    organization: "Community Health Alliance",
    stage: "Adoption → Integration"
  },
  {
    quote: "We went from being overwhelmed by AI possibilities to having a clear, actionable plan. The assessment was the perfect starting point for our journey.",
    author: "Marcus Rodriguez",
    role: "Program Manager",
    organization: "Education Forward",
    stage: "Awareness → Experimentation"
  },
  {
    quote: "The peer connections we made through the assessment process have been invaluable. It's reassuring to learn alongside organizations facing similar challenges.",
    author: "Dr. Amara Okafor",
    role: "Research Director",
    organization: "Global Health Initiative",
    stage: "Experimentation → Adoption"
  }
]

const faqs = [
  {
    question: "How long does the assessment take?",
    answer: "The complete TrailMap assessment takes approximately 15-20 minutes. It's designed to be thorough yet respectful of your time, with the option to save and return if needed."
  },
  {
    question: "Is my data kept private?",
    answer: "Yes, absolutely. Your assessment responses are kept strictly confidential and are only used to generate your personalized recommendations. We never share individual responses with third parties."
  },
  {
    question: "What happens after I complete the assessment?",
    answer: "You'll immediately receive a detailed report with your current AI readiness stage, personalized recommendations, and suggested next steps. You'll also have the option to connect with peer organizations and explore relevant TrailKits."
  },
  {
    question: "Do I need technical expertise to take the assessment?",
    answer: "Not at all! The TrailMap assessment is designed for nonprofit leaders at all technical levels. Questions focus on organizational readiness, culture, and goals rather than technical implementation details."
  },
  {
    question: "Can I retake the assessment?",
    answer: "Yes, we encourage organizations to retake the assessment every 6-12 months as they progress on their AI journey. This helps track growth and identify new opportunities for advancement."
  },
  {
    question: "Is there a cost for the assessment?",
    answer: "The TrailMap assessment is completely free for all nonprofits. It's part of our commitment to making AI accessible to organizations working for social good."
  }
]

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your AI Readiness
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Take our comprehensive TrailMap assessment to understand where you are on your AI journey 
            and get personalized recommendations for your next steps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              asChild
              size="lg"
              className="bg-white text-trailguide-evergreen hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/trailmap" className="flex items-center">
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <div className="flex items-center text-emerald-200">
              <Clock className="h-4 w-4 mr-2" />
              <span>15-20 minutes • Free forever</span>
            </div>
          </div>

          <p className="text-emerald-200 text-sm">
            Join 500+ nonprofits who have mapped their AI journey
          </p>
        </div>
      </section>

      {/* Assessment Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              The Five Stages of AI Readiness
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              Our assessment maps your organization across five key stages of AI maturity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {assessmentStages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <Card 
                  key={stage.name}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-trailguide-border"
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 mx-auto`}>
                      <IconComponent className={`h-8 w-8 ${stage.textColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-trailguide-neutral mb-3">
                      {stage.name}
                    </h3>
                    <p className="text-sm text-trailguide-slate leading-relaxed">
                      {stage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              What You'll Get From Your Assessment
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              More than just a score - get actionable insights tailored to your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="border-trailguide-border">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-trailguide-evergreen" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-trailguide-slate leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-trailguide-slate max-w-2xl mx-auto">
              See how the TrailMap assessment helped nonprofits like yours take their next steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.author} className="border-trailguide-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <MessageCircle className="h-8 w-8 text-trailguide-evergreen mb-4" />
                    <p className="text-trailguide-slate italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="border-t border-trailguide-border pt-6">
                    <p className="font-semibold text-trailguide-neutral">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-trailguide-slate">
                      {testimonial.role}
                    </p>
                    <p className="text-sm font-medium text-trailguide-evergreen">
                      {testimonial.organization}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Journey: {testimonial.stage}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-trailguide-slate">
              Everything you need to know about the TrailMap assessment
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-trailguide-border">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-trailguide-neutral mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-trailguide-slate leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-trailguide-evergreen to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Map Your AI Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of nonprofits who have discovered their AI readiness and taken 
            meaningful steps toward transformation.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-white text-trailguide-evergreen hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/trailmap" className="flex items-center">
              Start Your Assessment Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="text-emerald-200 text-sm mt-6">
            No cost • No commitment • Immediate results
          </p>
        </div>
      </section>
    </div>
  )
}
