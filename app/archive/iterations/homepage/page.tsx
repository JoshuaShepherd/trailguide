import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GitBranch, Eye, Calendar, FileText } from 'lucide-react';

export const metadata = {
  title: 'Homepage Iterations | Archive',
  description: 'Previous versions of the TrailGuide homepage showing the evolution and refinement process.',
};

const iterations = [
  {
    id: 'current',
    title: 'Current Homepage',
    date: '2024-12-19',
    description: 'The current production version with all sections integrated',
    status: 'live',
    path: '/',
    changes: [
      'Complete HeroSection with value proposition',
      'TrailMapSection with interactive features',
      'TrailHikesSection showcasing content',
      'TrailKitsSection with tools and resources'
    ]
  },
  {
    id: 'backup-v1',
    title: 'Homepage Backup v1',
    date: '2024-12-19',
    description: 'Pre-restoration backup with partial component structure',
    status: 'archived',
    path: '/archive/iterations/homepage/backup-v1',
    changes: [
      'Basic layout structure',
      'Incomplete component imports',
      'Missing section integrations'
    ]
  },
  {
    id: 'backup-v2',
    title: 'Homepage Backup v2',
    date: '2024-12-19',
    description: 'Alternative layout approach with different section ordering',
    status: 'archived',
    path: '/archive/iterations/homepage/backup-v2',
    changes: [
      'Alternative hero design',
      'Different navigation structure',
      'Experimental content organization'
    ]
  }
];

export default function HomepageIterationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trailguide-background to-white">
      {/* Header */}
      <section className="py-12 border-b border-trailguide-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/archive" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Archive
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-trailguide-neutral">
                  Homepage Iterations
                </h1>
                <p className="text-trailguide-slate">
                  Evolution of the main landing page design and functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iterations List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {iterations.map((iteration) => (
              <Card key={iteration.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{iteration.title}</CardTitle>
                        <Badge 
                          variant={iteration.status === 'live' ? 'default' : 'secondary'}
                          className={
                            iteration.status === 'live' 
                              ? 'bg-green-100 text-green-700 border-green-200' 
                              : 'bg-gray-100 text-gray-700 border-gray-200'
                          }
                        >
                          {iteration.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        {iteration.date}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{iteration.description}</p>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="ml-4">
                      <Link href={iteration.path}>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Key Changes
                    </h4>
                    <ul className="space-y-2">
                      {iteration.changes.map((change, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Development Process Note */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-2">🔄 Iterative Development Process</h3>
              <p className="text-blue-700 text-sm mb-3">
                Each iteration represents a step in our refinement process. We maintain multiple versions 
                to compare approaches and preserve learnings from each development phase.
              </p>
              <p className="text-blue-700 text-sm">
                This transparency allows you to see not just the final product, but the thought process 
                and decision-making that led to our current implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
