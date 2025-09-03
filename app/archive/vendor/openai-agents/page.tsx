import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code2, Github, ExternalLink, Package, Star } from 'lucide-react';

export const metadata = {
  title: 'OpenAI Agents | Vendor Archive',
  description: 'Archived OpenAI agents implementation and experimental AI features.',
};

const agentProjects = [
  {
    name: 'OpenAI Agents JS',
    description: 'JavaScript implementation of OpenAI agent patterns and tooling',
    path: 'vendor/openai-agents-js-main',
    license: 'MIT',
    features: [
      'Agent lifecycle management',
      'Tool integration patterns',
      'Multi-agent coordination',
      'TypeScript definitions',
      'Testing framework',
      'Documentation system'
    ],
    stats: {
      files: 25,
      examples: 8,
      tests: 12
    }
  },
  {
    name: 'Realtime Agents',
    description: 'Real-time communication agents for interactive experiences',
    path: 'vendor/openai-realtime-agents-main',
    license: 'MIT',
    features: [
      'WebSocket connections',
      'Real-time audio processing',
      'Voice interaction patterns',
      'Session management',
      'Event streaming',
      'Client libraries'
    ],
    stats: {
      files: 18,
      examples: 6,
      integrations: 4
    }
  }
];

export default function OpenAIAgentsPage() {
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
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-trailguide-neutral">
                  OpenAI Agents Archive
                </h1>
                <p className="text-trailguide-slate">
                  Experimental AI agent implementations and integration prototypes
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
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Package className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-2">Vendor Archive Purpose</h3>
                      <p className="text-purple-700 mb-3">
                        This section contains experimental AI agent implementations that were explored 
                        during our platform development. These represent research into advanced AI patterns, 
                        real-time communication, and agent orchestration techniques.
                      </p>
                      <p className="text-purple-700">
                        While not integrated into our current platform, they inform our understanding 
                        of AI capabilities and potential future enhancements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {agentProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{project.name}</CardTitle>
                          <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                            {project.license}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            {project.stats.files} files
                          </span>
                          {project.stats.examples && (
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              {project.stats.examples} examples
                            </span>
                          )}
                          {project.stats.tests && (
                            <span>{project.stats.tests} tests</span>
                          )}
                          {project.stats.integrations && (
                            <span>{project.stats.integrations} integrations</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/archive/vendor/${project.path.split('/').pop()}`}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Explore
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Impact */}
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    Research Impact on TrailGuide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Learnings Applied</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          AI interaction patterns informed our user experience design
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Agent lifecycle management concepts guide our tool architecture
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Real-time communication patterns influence future feature planning
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          TypeScript patterns improve our codebase quality
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Future Considerations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Voice interaction capabilities for accessibility enhancement
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Multi-agent workflows for complex content generation
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Real-time collaborative features for team environments
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Advanced tool orchestration for expert publishers
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
