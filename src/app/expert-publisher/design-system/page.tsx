import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  Palette, Layout, Type, Smartphone, Monitor, Moon,
  ArrowRight, CheckCircle, Star, Zap, Eye, Brush,
  Grid3X3, Square, Circle, Triangle, Image, Video,
  Users, MessageSquare, BarChart3, DollarSign, Globe,
  Settings, Sliders, Wand2, Crown, Sparkles
} from 'lucide-react';

export default function DesignSystem() {
  const designComponents = [
    {
      category: "Hero Sections",
      description: "Make powerful first impressions",
      variants: [
        { name: "Full-bleed Photo", description: "Dramatic imagery with overlay text", visual: true },
        { name: "Split Layout", description: "Content alongside compelling visuals", visual: true },
        { name: "Video Background", description: "Motion graphics that capture attention", visual: true },
        { name: "Minimalist Text", description: "Clean typography-focused design", visual: true },
        { name: "Product Showcase", description: "Highlight your offerings prominently", visual: true },
        { name: "Authority Builder", description: "Credentials and social proof focus", visual: true }
      ]
    },
    {
      category: "Content Blocks",
      description: "Reusable sections for any page",
      variants: [
        { name: "Feature Grid", description: "Highlight key benefits and services", visual: true },
        { name: "Testimonial Cards", description: "Social proof that builds trust", visual: true },
        { name: "Stats Display", description: "Impressive numbers and achievements", visual: true },
        { name: "Pricing Tables", description: "Clear, compelling pricing options", visual: true },
        { name: "FAQ Accordion", description: "Address common questions elegantly", visual: true },
        { name: "Team Showcase", description: "Introduce your team professionally", visual: true }
      ]
    },
    {
      category: "Navigation",
      description: "Intuitive user experience",
      variants: [
        { name: "Header Navigation", description: "Clean, professional top navigation", visual: true },
        { name: "Sidebar Menu", description: "Comprehensive content organization", visual: true },
        { name: "Footer Links", description: "Complete site map and legal pages", visual: true },
        { name: "Breadcrumbs", description: "Clear location and navigation path", visual: true },
        { name: "Search Interface", description: "Find content quickly and easily", visual: true },
        { name: "Mobile Menu", description: "Touch-optimized mobile navigation", visual: true }
      ]
    },
    {
      category: "Interactive Elements",
      description: "Engage your audience",
      variants: [
        { name: "Subscribe Forms", description: "Beautiful email capture interfaces", visual: true },
        { name: "Comment System", description: "Foster community discussion", visual: true },
        { name: "Share Buttons", description: "Social media integration", visual: true },
        { name: "Progress Bars", description: "Reading progress and completion", visual: true },
        { name: "Modal Windows", description: "Focus attention on key actions", visual: true },
        { name: "Notification Banners", description: "Important updates and announcements", visual: true }
      ]
    }
  ];

  const colorSchemes = [
    { name: "Professional Blue", primary: "bg-blue-600", secondary: "bg-blue-100", accent: "bg-blue-400" },
    { name: "Authority Green", primary: "bg-green-600", secondary: "bg-green-100", accent: "bg-green-400" },
    { name: "Creative Purple", primary: "bg-purple-600", secondary: "bg-purple-100", accent: "bg-purple-400" },
    { name: "Bold Orange", primary: "bg-orange-600", secondary: "bg-orange-100", accent: "bg-orange-400" },
    { name: "Elegant Gray", primary: "bg-gray-800", secondary: "bg-gray-100", accent: "bg-gray-400" },
    { name: "Modern Teal", primary: "bg-teal-600", secondary: "bg-teal-100", accent: "bg-teal-400" }
  ];

  const typographyStyles = [
    { style: "Modern Sans", class: "font-sans", description: "Clean, professional readability" },
    { style: "Classic Serif", class: "font-serif", description: "Traditional, authoritative tone" },
    { style: "Creative Display", class: "font-bold", description: "Eye-catching headlines" },
    { style: "Readable Body", class: "font-normal", description: "Optimized for long-form content" }
  ];

  const templates = [
    {
      name: "Authority Builder",
      description: "Establish credibility with professional design",
      features: ["Professional headshot hero", "Credential highlights", "Client testimonials", "Speaking topics"],
      preview: "authority-preview.jpg"
    },
    {
      name: "Course Creator",
      description: "Perfect for educational content and courses",
      features: ["Course showcase hero", "Learning modules", "Student testimonials", "Pricing tiers"],
      preview: "course-preview.jpg"
    },
    {
      name: "Newsletter Focus",
      description: "Maximize email subscriber growth",
      features: ["Newsletter signup hero", "Archive showcase", "Subscriber benefits", "Social proof"],
      preview: "newsletter-preview.jpg"
    },
    {
      name: "Consulting Expert",
      description: "Attract high-value consulting clients",
      features: ["Service-focused hero", "Case study highlights", "Process overview", "Contact form"],
      preview: "consulting-preview.jpg"
    },
    {
      name: "Content Creator",
      description: "Showcase diverse content offerings",
      features: ["Multi-format hero", "Content categories", "Creator story", "Community focus"],
      preview: "creator-preview.jpg"
    },
    {
      name: "Minimalist Pro",
      description: "Clean, distraction-free design",
      features: ["Typography-focused hero", "Clean layouts", "Subtle animations", "Fast loading"],
      preview: "minimal-preview.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-4 py-3 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Palette className="h-4 w-4" />
            <span>🎨 DESIGN SYSTEM DEMO - Professional Templates & Brand Customization</span>
            <Palette className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-pink-600 bg-pink-50 px-4 py-2 rounded-full mb-6">
            <Palette className="h-4 w-4" />
            <span>Design System & Templates Demo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
            Professional <span className="text-pink-600">Design System</span>
          </h1>
          
          <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed">
            Beautiful, conversion-optimized designs that reflect your unique brand. 
            No design skills needed—just pick your style and customize to match your vision.
          </p>

          <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-pink-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-pink-600 mb-1">12</div>
                <div className="text-trailguide-slate text-sm">Templates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600 mb-1">50+</div>
                <div className="text-trailguide-slate text-sm">Components</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600 mb-1">Full</div>
                <div className="text-trailguide-slate text-sm">Customization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600 mb-1">Mobile</div>
                <div className="text-trailguide-slate text-sm">Optimized</div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Gallery */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Professional Templates</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Choose from expertly designed templates, each optimized for different thought leadership goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <Card key={index} className="border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <div className="text-center">
                    <Layout className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                    <div className="text-pink-600 font-medium">{template.name}</div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {template.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-trailguide-slate">
                        <CheckCircle className="h-3 w-3 text-pink-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Design Components */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Flexible Design Components</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Mix and match professional components to create your perfect layout
            </p>
          </div>

          <Tabs defaultValue="hero" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="hero">Heroes</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="interactive">Interactive</TabsTrigger>
            </TabsList>

            {designComponents.map((component, componentIndex) => (
              <TabsContent key={component.category} value={component.category.toLowerCase().split(' ')[0]}>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-trailguide-neutral mb-2">{component.category}</h3>
                  <p className="text-trailguide-slate">{component.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {component.variants.map((variant, variantIndex) => (
                    <Card key={variantIndex} className="border-2 border-pink-200 hover:border-pink-400 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{variant.name}</CardTitle>
                          <Eye className="h-4 w-4 text-pink-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-trailguide-slate">
                          {variant.description}
                        </CardDescription>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="w-full">
                            <Brush className="h-3 w-3 mr-1" />
                            Customize
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Brand Customization */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Brand Customization</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Make every design uniquely yours with comprehensive branding options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Color Schemes */}
            <div>
              <h3 className="text-xl font-bold text-trailguide-neutral mb-6 flex items-center gap-2">
                <Palette className="h-5 w-5 text-pink-600" />
                Color Schemes
              </h3>
              <div className="space-y-4">
                {colorSchemes.map((scheme, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-pink-200">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        <div className={`w-6 h-6 rounded-full ${scheme.primary}`}></div>
                        <div className={`w-6 h-6 rounded-full ${scheme.secondary}`}></div>
                        <div className={`w-6 h-6 rounded-full ${scheme.accent}`}></div>
                      </div>
                      <span className="font-medium text-trailguide-neutral">{scheme.name}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-xl font-bold text-trailguide-neutral mb-6 flex items-center gap-2">
                <Type className="h-5 w-5 text-pink-600" />
                Typography
              </h3>
              <div className="space-y-4">
                {typographyStyles.map((typography, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border-2 border-pink-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-trailguide-neutral">{typography.style}</span>
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                    <p className={`text-trailguide-slate text-sm ${typography.class}`}>
                      {typography.description}
                    </p>
                    <div className={`mt-2 ${typography.class}`}>
                      <div className="text-2xl font-bold text-trailguide-neutral mb-1">Sample Headline</div>
                      <div className="text-trailguide-slate">This is how body text will appear in your content.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Responsive Excellence</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Perfect experience on every device—desktop, tablet, and mobile
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-pink-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-trailguide-neutral mb-2">Desktop Optimized</h3>
                <p className="text-trailguide-slate text-sm">
                  Full-featured experience with rich layouts and detailed content presentation
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-trailguide-neutral mb-2">Mobile First</h3>
                <p className="text-trailguide-slate text-sm">
                  Touch-optimized interface with fast loading and easy navigation
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-trailguide-neutral mb-2">Dark Mode Ready</h3>
                <p className="text-trailguide-slate text-sm">
                  Optional dark mode for better reading experience in low light
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Features */}
        <section className="mb-20">
          <div className="bg-pink-50 rounded-3xl p-8 border border-pink-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-trailguide-neutral mb-4">Built for Performance</h2>
              <p className="text-trailguide-slate max-w-2xl mx-auto">
                Every design is optimized for speed, accessibility, and search engine visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 border border-pink-200 text-center">
                <Zap className="h-8 w-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Lightning Fast</h3>
                <p className="text-trailguide-slate text-sm">
                  Optimized images and code for instant loading
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-pink-200 text-center">
                <Eye className="h-8 w-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Accessible</h3>
                <p className="text-trailguide-slate text-sm">
                  WCAG compliant for all users and screen readers
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-pink-200 text-center">
                <Globe className="h-8 w-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">SEO Ready</h3>
                <p className="text-trailguide-slate text-sm">
                  Structured data and optimization built in
                </p>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-pink-200 text-center">
                <Settings className="h-8 w-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-trailguide-neutral mb-2">Customizable</h3>
                <p className="text-trailguide-slate text-sm">
                  Easy brand customization without code
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">Complete Design System</h2>
            <p className="text-trailguide-slate max-w-2xl mx-auto">
              Everything you need for a professional, cohesive brand presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Brand Kit Manager", icon: Palette, description: "Logo, colors, fonts in one place" },
              { name: "Template Library", icon: Layout, description: "12+ professional templates" },
              { name: "Component System", icon: Grid3X3, description: "50+ reusable design blocks" },
              { name: "Mobile Optimization", icon: Smartphone, description: "Perfect on every device" },
              { name: "Dark Mode Support", icon: Moon, description: "Automatic light/dark switching" },
              { name: "Custom Typography", icon: Type, description: "Professional font combinations" },
              { name: "Color Schemes", icon: Circle, description: "6+ curated color palettes" },
              { name: "Icon Library", icon: Star, description: "Hundreds of professional icons" },
              { name: "Animation Effects", icon: Sparkles, description: "Subtle, professional animations" },
              { name: "Performance Optimized", icon: Zap, description: "Fast loading, great Core Vitals" },
              { name: "Accessibility Built-in", icon: Eye, description: "WCAG compliant by default" },
              { name: "SEO Structured", icon: Globe, description: "Schema markup and optimization" }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-pink-200 hover:border-pink-400 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-pink-600" />
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
              Ready for Your Professional Design?
            </h2>
            <p className="text-trailguide-slate mb-8">
              This complete design system is included in your Expert Publisher platform. 
              Launch with a professional brand that reflects your expertise and builds trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700" asChild>
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
