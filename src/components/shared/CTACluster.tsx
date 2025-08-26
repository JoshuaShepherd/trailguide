import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAAction {
  label: string;
  href: string;
  variant?: 'default' | 'outline' | 'ghost';
  icon?: boolean;
}

interface CTAClusterProps {
  primary: CTAAction;
  secondary?: CTAAction;
  className?: string;
  vertical?: boolean;
}

export function CTACluster({ 
  primary, 
  secondary, 
  className,
  vertical = false 
}: CTAClusterProps) {
  return (
    <div className={cn(
      'flex gap-4',
      vertical ? 'flex-col' : 'flex-col sm:flex-row',
      'justify-center',
      className
    )}>
      <Button 
        asChild 
        size="lg"
        className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white px-8 py-4 text-lg"
      >
        <Link href={primary.href} className="flex items-center">
          {primary.label}
          {primary.icon && <ArrowRight className="ml-2 h-5 w-5" />}
        </Link>
      </Button>
      
      {secondary && (
        <Button 
          asChild 
          variant={secondary.variant || "outline"}
          size="lg"
          className="border-trailguide-evergreen text-trailguide-evergreen hover:bg-trailguide-evergreen/5 px-8 py-4 text-lg"
        >
          <Link href={secondary.href} className="flex items-center">
            {secondary.label}
            {secondary.icon && <ArrowRight className="ml-2 h-5 w-5" />}
          </Link>
        </Button>
      )}
    </div>
  );
}
