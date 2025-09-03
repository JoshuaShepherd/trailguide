import { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Type, 
  Layout, 
  Zap, 
  Layers, 
  Grid3X3,
  ArrowRight,
  Check,
  Smartphone,
  Monitor,
  Globe,
  Accessibility
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Design System | TrailGuide',
  description: 'Comprehensive design system and brand guidelines for consistent nonprofit communications.',
}

const designComponents = [
  {
    icon: Palette,
    title: "Color System",
    description: "Consistent color palette that reinforces your brand identity",
    features: ["Primary colors", "Secondary palette", "Accessibility compliance"]
  },
  {
    icon: Type,
    title: "Typography",
    description: "Hierarchical text system for clear communication",
    features: ["Font families", "Size scale", "Line height ratios"]
  },
  {
    icon: Layout,
    title: "Layout Components",
    description: "Flexible grid and spacing system for all content",
    features: ["Grid system", "Spacing scale", "Container layouts"]
  },
  {
    icon: Zap,
    title: "Interactive Elements",
    description: "Consistent buttons, forms, and navigation components",
    features: ["Button variants", "Form controls", "Navigation patterns"]
  },
  {
    icon: Layers,
    title: "Card Components",
    description: "Modular content blocks for flexible layouts",
    features: ["Content cards", "Feature highlights", "Testimonial blocks"]
  },
  {
    icon: Grid3X3,
    title: "Icon Library",
    description: "Comprehensive icon set for consistent visual language",
    features: ["Interface icons", "Decorative graphics", "Brand symbols"]
  }
]

const brandElements = [
  {
    title: "Logo Usage",
    description: "Guidelines for proper logo implementation across all materials"
  },
  {
    title: "Color Guidelines",
    description: "Brand color applications and accessibility requirements"
  },
  {
    title: "Typography Rules",
    description: "Font selection and hierarchy for different communication types"
  },
  {
    title: "Photography Style",
    description: "Visual style guide for images and graphic elements"
  },
  {
    title: "Voice & Tone",
    description: "Written communication style and messaging guidelines"
  },
  {
    title: "Application Examples",
    description: "Real-world examples of brand implementation across channels"
  }
]

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Palette className="mr-2 h-4 w-4" />
              Design System
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-trailguide-neutral mb-6">
              Consistent Brand
              <span className="text-trailguide-evergreen block">Professional Impact</span>
            </h1>
            <p className="text-lg text-trailguide-slate mb-8 max-w-3xl mx-auto">
              Build trust and recognition with a cohesive visual identity. Our comprehensive design system 
              ensures your nonprofit looks professional across all communications and touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                View Design System <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Design Foundation"
            subtitle="Building blocks for consistent and professional communications"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designComponents.map((component, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-trailguide-evergreen/10 rounded-lg flex items-center justify-center mb-4">
                    <component.icon className="h-6 w-6 text-trailguide-evergreen" />
                  </div>
                  <CardTitle className="text-xl text-trailguide-neutral">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trailguide-slate mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((item, idx) => (
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

      {/* Brand Guidelines */}
      <section className="py-20 bg-trailguide-background/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Complete Brand Guidelines
            </h2>
            <p className="text-lg text-trailguide-slate">
              Everything your team needs to maintain consistent brand presentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {brandElements.map((element, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette className="h-5 w-5 text-trailguide-evergreen" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-trailguide-neutral mb-2">{element.title}</h3>
                      <p className="text-sm text-trailguide-slate">{element.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Built for Every Device
            </h2>
            <p className="text-lg text-trailguide-slate">
              Your brand looks perfect on desktop, tablet, and mobile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Monitor className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
              <h3 className="font-semibold text-trailguide-neutral mb-2">Desktop</h3>
              <p className="text-sm text-trailguide-slate">Full-featured experience with rich interactions</p>
            </div>
            
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
              <h3 className="font-semibold text-trailguide-neutral mb-2">Mobile</h3>
              <p className="text-sm text-trailguide-slate">Optimized for touch interactions and small screens</p>
            </div>
            
            <div className="text-center">
              <Globe className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
              <h3 className="font-semibold text-trailguide-neutral mb-2">Web</h3>
              <p className="text-sm text-trailguide-slate">Fast loading and SEO-optimized for discovery</p>
            </div>
            
            <div className="text-center">
              <Accessibility className="h-12 w-12 text-trailguide-evergreen mx-auto mb-4" />
              <h3 className="font-semibold text-trailguide-neutral mb-2">Accessible</h3>
              <p className="text-sm text-trailguide-slate">WCAG 2.1 AA compliant for all users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-trailguide-neutral mb-6">
              Ready for Professional Brand Consistency?
            </h2>
            <p className="text-lg text-trailguide-slate mb-8">
              Get your complete design system and brand guidelines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                Access Design System <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Brand Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}