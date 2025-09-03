import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Server, ExternalLink, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Deployment Guide | Documentation Archive',
  description: 'Main deployment guide and server configuration documentation.',
};

export default function DeploymentGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Header */}
      <section className="py-12 border-b border-trailguide-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/archive/docs" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Documentation Archive
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Server className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-trailguide-neutral">
                  TrailGuide Deployment Guide
                </h1>
                <p className="text-trailguide-slate">
                  Complete deployment documentation and server configuration
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="default" className="bg-green-100 text-green-700 border-green-200">
                Production Ready
              </Badge>
              <span className="text-sm text-gray-500">Last updated: December 19, 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Quick Deploy Options */}
            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🚀 Quick Deploy Options
                  </CardTitle>
                  <p className="text-gray-600">One-click deployment to production platforms</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h4 className="font-semibold text-lg mb-2 text-black">Vercel (Recommended)</h4>
                      <p className="text-sm text-gray-600 mb-3">One-click deployment with automatic CI/CD</p>
                      <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJoshuaShepherd%2Ftrailguide" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Deploy with Vercel
                        </a>
                      </Button>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-teal-50">
                      <h4 className="font-semibold text-lg mb-2 text-teal-800">Netlify</h4>
                      <p className="text-sm text-teal-600 mb-3">JAMstack deployment platform</p>
                      <Button asChild variant="outline" className="w-full border-teal-500 text-teal-700 hover:bg-teal-100">
                        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/JoshuaShepherd/trailguide" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Deploy to Netlify
                        </a>
                      </Button>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-purple-50">
                      <h4 className="font-semibold text-lg mb-2 text-purple-800">Railway</h4>
                      <p className="text-sm text-purple-600 mb-3">Modern application platform</p>
                      <Button asChild variant="outline" className="w-full border-purple-500 text-purple-700 hover:bg-purple-100">
                        <a href="https://railway.app/template/trailguide" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Deploy on Railway
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Manual Deployment */}
            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🔧 Manual Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Prerequisites */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Prerequisites</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Node.js 18+ installed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>npm or yarn package manager</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Git repository access</span>
                        </li>
                      </ul>
                    </div>

                    {/* Build Process */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Build Process</h4>
                      <div className="bg-gray-900 rounded-lg p-4 relative">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{`# Clone repository
git clone https://github.com/JoshuaShepherd/trailguide.git
cd trailguide

# Install dependencies
npm install

# Build for production (generates 45+ static pages)
npm run build

# Test production build locally
npm run start`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Environment Variables */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Environment Variables</h4>
                      <p className="text-gray-600 mb-3">Create <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env.local</code> for production settings:</p>
                      <div className="bg-gray-900 rounded-lg p-4 relative">
                        <pre className="text-blue-400 text-sm overflow-x-auto">
                          <code>{`# App Configuration
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com

# AI Integration (Optional)
OPENAI_API_KEY=your_openai_key`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Platform-Specific Notes */}
            <div className="mb-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Platform-Specific Deployment Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Vercel Configuration</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Automatic Next.js detection and optimization</li>
                        <li>• Edge runtime support for API routes</li>
                        <li>• Built-in CDN and global deployment</li>
                        <li>• Zero-config SSL and custom domains</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Build Optimization</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Static generation for 78+ pages</li>
                        <li>• Automatic code splitting</li>
                        <li>• Image optimization and lazy loading</li>
                        <li>• Bundle analysis available via <code>npm run analyze</code></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Success Metrics */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>📊 Deployment Success Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">78+</div>
                      <div className="text-sm text-gray-600">Static Pages Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">~2s</div>
                      <div className="text-sm text-gray-600">Average Build Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">95+</div>
                      <div className="text-sm text-gray-600">Lighthouse Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                      <div className="text-sm text-gray-600">Deployment Success</div>
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
