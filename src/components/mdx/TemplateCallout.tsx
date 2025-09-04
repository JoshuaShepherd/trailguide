import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { 
  Lightbulb, 
  Target, 
  GraduationCap, 
  Eye, 
  CheckCircle,
  Info,
  AlertTriangle
} from 'lucide-react';

interface TemplateCalloutProps {
  title: string;
  children: ReactNode;
  variant?: 'info' | 'learning' | 'strategy' | 'best-practice' | 'example' | 'warning';
  className?: string;
}

const variantConfig = {
  info: {
    icon: Info,
    bgColor: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-900',
    iconColor: 'text-blue-600'
  },
  learning: {
    icon: GraduationCap,
    bgColor: 'bg-trailguide-sage/10 border-trailguide-sage/30',
    textColor: 'text-trailguide-neutral',
    iconColor: 'text-trailguide-evergreen'
  },
  strategy: {
    icon: Target,
    bgColor: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-900',
    iconColor: 'text-purple-600'
  },
  'best-practice': {
    icon: CheckCircle,
    bgColor: 'bg-green-50 border-green-200',
    textColor: 'text-green-900',
    iconColor: 'text-green-600'
  },
  example: {
    icon: Eye,
    bgColor: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-900',
    iconColor: 'text-orange-600'
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-red-50 border-red-200',
    textColor: 'text-red-900',
    iconColor: 'text-red-600'
  }
};

export function TemplateCallout({ 
  title, 
  children, 
  variant = 'learning',
  className 
}: TemplateCalloutProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div className={cn(
      'rounded-lg border p-6 my-6',
      config.bgColor,
      className
    )}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Icon className={cn('h-5 w-5', config.iconColor)} />
        </div>
        <div className="flex-1">
          <h4 className={cn('font-semibold mb-2', config.textColor)}>
            {title}
          </h4>
          <div className={cn('prose prose-sm', config.textColor)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
