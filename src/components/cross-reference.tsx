import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Eye, ArrowRight, Lightbulb } from 'lucide-react';

interface CrossReferenceProps {
  currentPage: 'guide' | 'template';
  className?: string;
}

export function CrossReference({ currentPage, className = '' }: CrossReferenceProps) {
  if (currentPage === 'guide') {
    return (
      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Eye className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-gray-900 mb-2">See It In Action</h3>
            <p className="text-gray-600 text-sm mb-4">
              Every strategy described in this guide is implemented in our fully functional demo template. 
              See exactly how these concepts work in practice.
            </p>
            <Button size="sm" asChild>
              <Link href="/template">
                Explore Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
          <BookOpen className="h-6 w-6 text-emerald-600" />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-gray-900 mb-2">Learn the Strategy</h3>
          <p className="text-gray-600 text-sm mb-4">
            Understand the proven strategies and best practices behind every element you see in this demo. 
            Get the complete educational guide for thought leaders.
          </p>
          <Button size="sm" variant="outline" asChild>
            <Link href="/expert-publisher-guide">
              <Lightbulb className="mr-2 h-4 w-4" />
              Read Complete Guide
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
