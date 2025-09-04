import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye, Code, Users, TrendingUp, BookOpen, Settings, ArrowRight, Play, Calendar, FileText, Award } from 'lucide-react';

export function TemplateShowcaseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header with Visual */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium border border-trailguide-evergreen/30 text-trailguide-evergreen rounded-full bg-trailguide-sage/10 mb-6">
              <Eye className="mr-2 h-4 w-4" />
              Interactive Template Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-trailguide-neutral mb-6">
              See your platform in action
            </h2>
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto leading-relaxed mb-12">
              This website is a live demonstration of the complete Expert Publisher platform. 
              Every page, feature, and workflow shows you exactly what your thought leadership platform will deliver.
            </p>
            
            {/* Visual Showcase Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-trailguide-sage/20 to-trailguide-evergreen/20 p-8 mb-16">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/abstract.png"
                    alt="Content creation and strategy visualization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-trailguide-evergreen/10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold">Content Engine</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/abstract-2.png"
                    alt="Audience engagement and community building"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-trailguide-evergreen/10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Users className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold">Audience Building</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/abstract-3.png"
                    alt="Revenue generation and monetization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-trailguide-evergreen/10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold">Monetization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Working Blog System */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Content Engine
              </h3>
              <p className="text-trailguide-slate mb-6">
                Browse real articles with SEO optimization, reading time estimates, author profiles, and content categorization.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/blog" className="flex items-center">
                  View Blog
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Podcast/Media System */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Media Library
              </h3>
              <p className="text-trailguide-slate mb-6">
                Podcast players, video integration, transcripts, and episode management for your multimedia content.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/media" className="flex items-center">
                  Explore Media
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Lead Generation */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Lead Magnets
              </h3>
              <p className="text-trailguide-slate mb-6">
                Gated resources, email capture forms, assessment tools, and lead qualification systems.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/kits" className="flex items-center">
                  View Resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Community Building */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Community Hub
              </h3>
              <p className="text-trailguide-slate mb-6">
                Newsletter signup, member areas, community features, and audience engagement tools.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/newsletter" className="flex items-center">
                  Join Community
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Course/Education System */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Courses & Programs
              </h3>
              <p className="text-trailguide-slate mb-6">
                Course catalogs, curriculum previews, enrollment systems, and educational content delivery.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/hikes" className="flex items-center">
                  View Courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Consulting/Speaking */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Speaking & Consulting
              </h3>
              <p className="text-trailguide-slate mb-6">
                Service pages, testimonials, booking systems, and consulting offer presentations.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/advisory" className="flex items-center">
                  View Services
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Membership System */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Membership & Products
              </h3>
              <p className="text-trailguide-slate mb-6">
                Pricing tables, membership benefits, product showcases, and e-commerce integration.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/products" className="flex items-center">
                  View Products
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Case Studies & Results */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Social Proof
              </h3>
              <p className="text-trailguide-slate mb-6">
                Case studies, client results, testimonials, and success story presentations.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/case-studies" className="flex items-center">
                  See Results
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Technical Excellence */}
            <div className="bg-gradient-to-br from-white to-trailguide-background border border-trailguide-sage/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-xl flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-trailguide-neutral mb-3">
                Technical Foundation
              </h3>
              <p className="text-trailguide-slate mb-6">
                Fast loading, mobile-optimized, SEO-ready, accessibility compliant, and analytics integrated.
              </p>
              <Button asChild variant="outline" size="sm" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5">
                <Link href="/accessibility" className="flex items-center">
                  View Standards
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-trailguide-sage/10 to-trailguide-evergreen/10 rounded-2xl p-12 border border-trailguide-sage/20">
            <h3 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Ready to build your platform?
            </h3>
            <p className="text-xl text-trailguide-slate mb-8 max-w-2xl mx-auto">
              Start with our discovery process to understand your specific needs and create a custom platform that amplifies your thought leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-3">
                <Link href="/intake" className="flex items-center">
                  Start Discovery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-3">
                <Link href="/what-you-get" className="flex items-center">
                  Learn More
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
