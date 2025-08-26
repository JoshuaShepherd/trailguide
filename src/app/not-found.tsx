import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Search, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-trailguide-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="border-trailguide-border shadow-lg">
          <CardContent className="p-12">
            {/* 404 Graphic */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-trailguide-evergreen mb-4">404</div>
              <div className="flex items-center justify-center gap-2 text-trailguide-slate mb-4">
                <MapPin className="h-5 w-5" />
                <span>You&apos;ve wandered off the trail</span>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-trailguide-neutral mb-3">
                Page Not Found
              </h1>
              <p className="text-trailguide-slate text-lg mb-6">
                The page you&apos;re looking for doesn&apos;t exist or has been moved. 
                Let&apos;s get you back on the right path.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button asChild className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button asChild variant="outline">
                <Link href="/trailmap">
                  <MapPin className="h-4 w-4 mr-2" />
                  Take Assessment
                </Link>
              </Button>
              
              <Button asChild variant="outline">
                <Link href="/blog">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Blog
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-trailguide-border">
              <p className="text-sm text-trailguide-slate mb-4">
                Popular pages you might be looking for:
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link href="/trailmap" className="text-trailguide-evergreen hover:underline">
                  AI Readiness Assessment
                </Link>
                <Link href="/hikes" className="text-trailguide-evergreen hover:underline">
                  Workshops & Training
                </Link>
                <Link href="/kits" className="text-trailguide-evergreen hover:underline">
                  AI Toolkits
                </Link>
                <Link href="/case-studies" className="text-trailguide-evergreen hover:underline">
                  Success Stories
                </Link>
                <Link href="/about" className="text-trailguide-evergreen hover:underline">
                  About Us
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
