import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Calendar, Info } from 'lucide-react';

export const metadata = {
  title: 'Homepage Backup v1 | Archive',
  description: 'Pre-restoration backup showing minimal testing page structure.',
};

export default function BackupV1Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Header */}
      <section className="py-12 border-b border-trailguide-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/archive/iterations/homepage" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Homepage Iterations
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-trailguide-neutral">
                  Homepage Backup v1
                </h1>
                <p className="text-trailguide-slate">
                  Basic testing structure from early development phase
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                Archived
              </Badge>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                December 19, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Context Note */}
            <div className="mb-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Info className="h-5 w-5" />
                    Development Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    This backup represents the minimal testing page that was used to verify routing functionality 
                    during the 404 error resolution phase. It shows the basic structure before full component 
                    integration and demonstrates our step-by-step approach to debugging.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Original Code Display */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Original Code</CardTitle>
                    <p className="text-sm text-gray-600">page.tsx.backup</p>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-50 rounded-lg p-4 text-sm overflow-x-auto">
                      <code className="language-tsx">{`export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          TrailGuide - Home Page Test
        </h1>
        <p className="text-lg text-gray-600">
          If you can see this, the home page routing is working!
        </p>
      </div>
    </div>
  );
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              {/* Live Preview */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Live Preview</CardTitle>
                    <p className="text-sm text-gray-600">How this would have appeared</p>
                  </CardHeader>
                  <CardContent>
                    {/* Simulated preview */}
                    <div className="border rounded-lg bg-white p-8">
                      <div className="min-h-[300px] flex items-center justify-center">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            TrailGuide - Home Page Test
                          </h1>
                          <p className="text-lg text-gray-600">
                            If you can see this, the home page routing is working!
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Analysis */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Minimal, focused on routing verification
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Simple centered layout approach
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          No external component dependencies
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Clear success/failure feedback message
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Development Purpose</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Test Next.js app router functionality
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Verify build system compilation
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Isolate routing issues from component complexity
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Provide clear debugging feedback
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
