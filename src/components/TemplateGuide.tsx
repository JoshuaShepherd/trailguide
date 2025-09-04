'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  X, 
  Eye, 
  Lightbulb, 
  ArrowRight,
  HelpCircle,
  Compass
} from 'lucide-react';

interface TemplateGuideProps {
  pageType?: 'homepage' | 'blog' | 'about' | 'products' | 'contact' | 'general';
  pageName?: string;
  templateInsights?: string[];
}

export function TemplateGuide({ 
  pageType = 'general', 
  pageName,
  templateInsights = []
}: TemplateGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Show the guide automatically after a few seconds if not previously shown
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsOpen(true);
        setHasBeenShown(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasBeenShown]);

  const getPageInsights = () => {
    const defaultInsights = {
      homepage: [
        "Notice the clear value proposition in the hero section",
        "Multiple revenue streams are showcased throughout",
        "Social proof and credibility markers are strategically placed",
        "Clear next steps guide visitors through the funnel"
      ],
      blog: [
        "Articles establish thought leadership and authority",
        "SEO optimization helps with discovery",
        "Author profiles build personal brand",
        "Related content keeps visitors engaged"
      ],
      about: [
        "Combines personal story with professional credibility",
        "Values and mission create emotional connection",
        "Specific achievements build trust",
        "Clear contact points encourage engagement"
      ],
      products: [
        "Multiple pricing tiers capture different customer segments",
        "Benefits are clearly articulated for each level",
        "Social proof reinforces value proposition",
        "Easy comparison helps decision-making"
      ],
      contact: [
        "Multiple contact methods accommodate preferences",
        "Response time expectations set proper expectations",
        "Contact forms capture qualification data",
        "FAQ section reduces support burden"
      ],
      general: [
        "Every element serves a strategic purpose",
        "User experience is optimized for conversion",
        "Content demonstrates expertise and authority",
        "Design supports the overall brand message"
      ]
    };

    return templateInsights.length > 0 ? templateInsights : defaultInsights[pageType];
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white shadow-lg"
          size="lg"
        >
          <Compass className="mr-2 h-5 w-5" />
          Template Guide
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <Card className="border-2 border-trailguide-evergreen shadow-xl bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-trailguide-evergreen rounded-lg flex items-center justify-center">
                <Eye className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-trailguide-neutral">Template Guide</h3>
                {pageName && (
                  <p className="text-xs text-trailguide-slate">{pageName}</p>
                )}
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-start space-x-2">
              <Lightbulb className="h-4 w-4 text-trailguide-evergreen mt-0.5 flex-shrink-0" />
              <p className="text-sm text-trailguide-slate">
                This page demonstrates thought leadership best practices:
              </p>
            </div>
            
            <ul className="text-xs text-trailguide-slate space-y-1 ml-6">
              {getPageInsights().map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1 h-1 bg-trailguide-evergreen rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <Button asChild size="sm" className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white">
              <Link href="/expert-publisher-guide">
                <BookOpen className="mr-2 h-4 w-4" />
                Complete Guide
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="sm" className="w-full border-trailguide-evergreen text-trailguide-evergreen">
              <Link href="/what-you-get">
                Platform Overview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-trailguide-sage/20">
            <p className="text-xs text-trailguide-slate text-center">
              🎯 Every element you see here will be in your platform
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
