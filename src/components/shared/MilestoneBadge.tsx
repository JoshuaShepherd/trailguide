import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MilestoneBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'bronze' | 'evergreen';
  className?: string;
}

export function MilestoneBadge({ 
  children, 
  variant = 'bronze', 
  className 
}: MilestoneBadgeProps) {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 border-gray-300',
    bronze: 'bg-trailguide-bronze/10 text-trailguide-bronze border-trailguide-bronze/30',
    evergreen: 'bg-trailguide-evergreen/10 text-trailguide-evergreen border-trailguide-evergreen/30'
  };

  return (
    <Badge 
      variant="outline"
      className={cn(
        variantStyles[variant],
        'font-medium',
        className
      )}
    >
      {children}
    </Badge>
  );
}
