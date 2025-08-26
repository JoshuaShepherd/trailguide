import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  eyebrow, 
  className,
  centered = false 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'space-y-4',
      centered && 'text-center',
      className
    )}>
      {eyebrow && (
        <div className={cn(
          'text-sm font-medium text-trailguide-bronze uppercase tracking-wide',
          centered && 'text-center'
        )}>
          {eyebrow}
        </div>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold text-trailguide-neutral',
        centered && 'text-center'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl text-trailguide-slate max-w-2xl leading-relaxed',
          centered && 'mx-auto text-center'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
