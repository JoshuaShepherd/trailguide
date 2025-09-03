import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Archive, 
  FileText, 
  Code2, 
  Layers, 
  GitBranch, 
  Clock, 
  Eye, 
  Wrench,
  BookOpen,
  Settings,
  Folder
} from 'lucide-react';

export const metadata = {
  title: 'Archive | TrailGuide Development',
  description: 'Explore the evolution and refinement process of the TrailGuide platform - archived pages, experimental features, and development iterations.',
};

interface ArchiveItem {
  name: string;
  path: string;
  description: string;
  files?: number;
  status?: string;
}

interface ArchiveCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  items: ArchiveItem[];
}

const archiveCategories: ArchiveCategory[] = [
  {
    id: 'iterations',
    title: 'Page Iterations',
    description: 'Previous versions of pages showing the refinement process',
    icon: GitBranch,
    color: 'bg-blue-50 border-blue-200',
    items: [
      {
        name: 'Homepage Variations',
        path: '/archive/iterations/homepage',
        description: 'Multiple iterations of the main landing page',
        files: 3
      },
      {
        name: 'Layout Experiments',
        path: '/archive/iterations/layouts', 
        description: 'Different layout approaches and structures',
        files: 2
      }
    ]
  },
  {
    id: 'vendor',
    title: 'Vendor Archives',
    description: 'Third-party libraries and experimental integrations',
    icon: Code2,
    color: 'bg-purple-50 border-purple-200',
    items: [
      {
        name: 'OpenAI Agents',
        path: '/archive/vendor/openai-agents',
        description: 'AI agent implementations and examples',
        files: 25
      },
      {
        name: 'Realtime Features',
        path: '/archive/vendor/realtime',
        description: 'Real-time communication prototypes',
        files: 18
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Development Documentation',
    description: 'Process notes, deployment guides, and technical documentation',
    icon: BookOpen,
    color: 'bg-green-50 border-green-200',
    items: [
      {
        name: 'Deployment Notes',
        path: '/archive/docs/deployment',
        description: 'Server setup and deployment processes',
        files: 4
      },
      {
        name: 'GSAP Integration',
        path: '/archive/docs/gsap',
        description: 'Animation library documentation and guides',
        files: 2
      },
      {
        name: 'Development Notes',
        path: '/archive/docs/notes',
        description: 'Planning documents and feature specifications',
        files: 8
      }
    ]
  },
  {
    id: 'experiments',
    title: 'Experimental Features',
    description: 'Prototype features and proof-of-concept implementations',
    icon: Wrench,
    color: 'bg-orange-50 border-orange-200',
    items: [
      {
        name: 'AI Workspace',
        path: '/archive/experiments/ai-workspace',
        description: 'Interactive AI collaboration environment',
        status: 'prototype'
      },
      {
        name: 'Voice Sessions',
        path: '/archive/experiments/voice',
        description: 'Voice-based interaction prototypes',
        status: 'experimental'
      },
      {
        name: 'Analytics Dashboard',
        path: '/archive/experiments/analytics',
        description: 'User engagement and content performance tracking',
        status: 'development'
      }
    ]
  }
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Hero Section */}
      <section className="py-24 border-b border-trailguide-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Archive className="h-4 w-4 mr-2" />
              Development Archive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trailguide-neutral mb-6">
              Behind the Scenes
            </h1>
            
            <p className="text-xl text-trailguide-slate max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore the evolution of TrailGuide - from early prototypes to refined implementations. 
              This archive showcases the iterative development process, experimental features, 
              and the journey toward our current platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                <Clock className="h-3 w-3 mr-1" />
                Live Development Process
              </Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 bg-blue-50">
                <Eye className="h-3 w-3 mr-1" />
                Transparent Iteration
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-700 bg-purple-50">
                <Layers className="h-3 w-3 mr-1" />
                Multiple Approaches
              </Badge>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-yellow-800 mb-2">🔍 What You&apos;ll Find Here</h3>
              <p className="text-yellow-700 text-sm">
                This archive demonstrates our commitment to transparency and continuous improvement. 
                You&apos;ll see multiple iterations of features, experimental approaches that didn&apos;t make 
                it to production, and the technical exploration that informs our final implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {archiveCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className={`${category.color} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item: ArchiveItem, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white/70 rounded-lg border">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Folder className="h-4 w-4 text-gray-500" />
                                <span className="font-medium">{item.name}</span>
                                {item.status && (
                                  <Badge variant="secondary" className="text-xs">
                                    {item.status}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              {item.files && (
                                <p className="text-xs text-gray-500 mt-1">
                                  {item.files} files
                                </p>
                              )}
                            </div>
                            <Button 
                              asChild 
                              variant="ghost" 
                              size="sm"
                              className="ml-3"
                            >
                              <Link href={item.path}>
                                <Eye className="h-4 w-4" />
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

            {/* Archive Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-trailguide-evergreen mb-2">47</div>
                <div className="text-sm text-gray-600">Archived Files</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-gray-600">Page Iterations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Experimental Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">25</div>
                <div className="text-sm text-gray-600">Development Notes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-trailguide-neutral mb-4">
              Transparency in Development
            </h2>
            <p className="text-lg text-trailguide-slate mb-8">
              This archive represents our commitment to open development and continuous iteration. 
              See how features evolve, experiments are tested, and decisions are made.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  Return to Main Site
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn About Our Process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
