import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, FileText, Server, Zap, Settings, Eye } from 'lucide-react';

export const metadata = {
  title: 'Documentation Archive | TrailGuide Development',
  description: 'Development documentation, deployment guides, and technical notes from the TrailGuide build process.',
};

const documentationSections = [
  {
    id: 'deployment',
    title: 'Deployment Documentation',
    icon: Server,
    color: 'bg-green-50 border-green-200',
    description: 'Server setup, deployment processes, and production configurations',
    documents: [
      {
        name: 'DEPLOYMENT.md',
        path: '/archive/docs/deployment/main',
        description: 'Main deployment guide and server configuration',
        lastUpdated: '2024-12-19'
      },
      {
        name: 'DEPLOYMENT-SUCCESS.md',
        path: '/archive/docs/deployment/success',
        description: 'Successful deployment checklist and validation steps',
        lastUpdated: '2024-12-19'
      },
      {
        name: 'Vercel Configuration',
        path: '/archive/docs/deployment/vercel',
        description: 'Vercel-specific deployment settings and optimizations',
        lastUpdated: '2024-12-19'
      }
    ]
  },
  {
    id: 'gsap',
    title: 'GSAP Integration',
    icon: Zap,
    color: 'bg-yellow-50 border-yellow-200',
    description: 'Animation library integration and implementation guides',
    documents: [
      {
        name: 'Core Documentation',
        path: '/archive/docs/gsap/core',
        description: 'GSAP setup, configuration, and basic usage patterns',
        lastUpdated: '2024-12-19'
      },
      {
        name: 'Builder Guide',
        path: '/archive/docs/gsap/builder',
        description: 'Advanced GSAP patterns and component integration',
        lastUpdated: '2024-12-19'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development Notes',
    icon: FileText,
    color: 'bg-blue-50 border-blue-200',
    description: 'Planning documents, feature specifications, and development insights',
    documents: [
      {
        name: 'Full Publishing Platform',
        path: '/archive/docs/notes/publishing-platform',
        description: 'Complete platform specification and feature roadmap',
        lastUpdated: '2024-12-19'
      },
      {
        name: 'Expert Publisher Concept',
        path: '/archive/docs/notes/expert-publisher',
        description: 'Original concept documentation and requirements',
        lastUpdated: '2024-12-19'
      },
      {
        name: 'TrailHub Documentation',
        path: '/archive/docs/notes/trailhub',
        description: 'Hub functionality and integration specifications',
        lastUpdated: '2024-12-19'
      }
    ]
  }
];

export default function DocumentationArchivePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Header */}
      <section className="py-12 border-b border-trailguide-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/archive" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Archive
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-trailguide-neutral">
                  Development Documentation
                </h1>
                <p className="text-trailguide-slate">
                  Technical documentation, guides, and development notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Overview */}
            <div className="mb-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Settings className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-green-800 mb-2">Documentation Archive</h3>
                      <p className="text-green-700 mb-3">
                        This archive preserves the technical documentation, deployment guides, and development 
                        notes created during the TrailGuide platform build process. These documents capture 
                        decision-making processes, technical implementations, and lessons learned.
                      </p>
                      <p className="text-green-700">
                        The documentation demonstrates our systematic approach to platform development 
                        and serves as a reference for future enhancements and similar projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {documentationSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Card key={section.id} className={`${section.color} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{section.title}</CardTitle>
                          <p className="text-gray-600 text-sm">{section.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {section.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-white/70 rounded-lg border">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <FileText className="h-4 w-4 text-gray-500" />
                                <span className="font-medium">{doc.name}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                              <p className="text-xs text-gray-500">
                                Last updated: {doc.lastUpdated}
                              </p>
                            </div>
                            <Button asChild variant="outline" size="sm" className="ml-4">
                              <Link href={doc.path}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Documentation Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Technical Documents</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Deployment Guides</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                <div className="text-sm text-gray-600">Integration Guides</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Planning Documents</div>
              </div>
            </div>

            {/* Knowledge Preservation */}
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Knowledge Preservation Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Documentation Benefits</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Captures technical decisions and reasoning
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Preserves deployment and configuration knowledge
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Documents integration patterns and solutions
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Enables knowledge transfer and onboarding
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Future Applications</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Reference for similar platform development
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Templates for client project documentation
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Best practices for development workflows
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Troubleshooting guides for common issues
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
