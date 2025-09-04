import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Eye, Star, ArrowRight } from 'lucide-react';

export function EducationalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-trailguide-background via-trailguide-sage/10 to-trailguide-evergreen/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm text-trailguide-evergreen bg-trailguide-sage/20 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4" />
              <span>Live Template Learning System</span>
            </div>
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              This Website <span className="text-trailguide-evergreen">IS</span> Your Template
            </h2>
            <p className="text-trailguide-slate text-lg max-w-3xl mx-auto">
              Instead of showing you mockups or screenshots, we built your actual platform. 
              Every page you're browsing demonstrates exactly what your audience will experience. 
              This IS thought leadership done right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-trailguide-sage/30 hover:border-trailguide-sage hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-trailguide-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Experience the Platform</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Navigate, interact, and see exactly how your audience will engage with your content and offers.
                </p>
                <Button size="sm" variant="outline" className="w-full border-trailguide-evergreen text-trailguide-evergreen" asChild>
                  <Link href="/what-you-get">
                    Explore Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-evergreen/30 hover:border-trailguide-evergreen hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-trailguide-evergreen/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">Learn the Strategy</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Understand the strategic thinking behind every design choice, content approach, and user flow.
                </p>
                <Button size="sm" className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90" asChild>
                  <Link href="/expert-publisher-guide">
                    Read Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-trailguide-sage/30 hover:border-trailguide-sage hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-trailguide-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-trailguide-evergreen" />
                </div>
                <h3 className="font-bold text-trailguide-neutral mb-2">See Content Examples</h3>
                <p className="text-trailguide-slate text-sm mb-4">
                  Browse real articles, content structures, and engagement features in action.
                </p>
                <Button size="sm" variant="outline" className="w-full border-trailguide-evergreen text-trailguide-evergreen" asChild>
                  <Link href="/blog">
                    View Content
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-trailguide-slate mb-4">
              💡 This entire website demonstrates the platform you'll receive - explore every page to learn!
            </p>
            <Button size="sm" variant="ghost" asChild>
              <Link href="/intake" className="text-trailguide-evergreen hover:text-trailguide-evergreen/80">
                Ready to start your platform? Begin discovery →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
