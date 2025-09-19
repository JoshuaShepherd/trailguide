/**
 * Shell Component - Contemporary Design Meta
 * 
 * Provides consistent page layouts with proper spacing,
 * typography hierarchy, and responsive behavior.
 * 
 * Feature-flagged for opt-in adoption while preserving
 * existing TrailGuide layouts.
 */

import React from 'react';
import { cn } from '@/lib/utils';

const ENABLE_META_SHELL = process.env.NODE_ENV === 'development';

// Shell Container
interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'wide' | 'narrow' | 'flush';
  spacing?: 'default' | 'tight' | 'loose';
}

export function Shell({ 
  children, 
  className, 
  variant = 'default', 
  spacing = 'default',
  ...props 
}: ShellProps) {
  if (!ENABLE_META_SHELL) {
    return <div className={className} {...props}>{children}</div>;
  }

  const variants = {
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    flush: 'w-full'
  };

  const spacings = {
    default: 'py-8 lg:py-12',
    tight: 'py-4 lg:py-6',
    loose: 'py-12 lg:py-16'
  };

  return (
    <div 
      className={cn(
        variants[variant],
        spacings[spacing],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

// Page Header
interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: 'default' | 'tight' | 'loose';
}

export function PageHeader({ 
  children, 
  className, 
  spacing = 'default',
  ...props 
}: PageHeaderProps) {
  if (!ENABLE_META_SHELL) {
    return <div className={className} {...props}>{children}</div>;
  }

  const spacings = {
    default: 'pb-8 border-b border-border',
    tight: 'pb-4 border-b border-border',
    loose: 'pb-12 border-b border-border'
  };

  return (
    <div 
      className={cn(
        spacings[spacing],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

// Page Content
interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: 'default' | 'tight' | 'loose';
}

export function PageContent({ 
  children, 
  className, 
  spacing = 'default',
  ...props 
}: PageContentProps) {
  if (!ENABLE_META_SHELL) {
    return <div className={className} {...props}>{children}</div>;
  }

  const spacings = {
    default: 'pt-8',
    tight: 'pt-4',
    loose: 'pt-12'
  };

  return (
    <div 
      className={cn(
        spacings[spacing],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

// Section
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: 'default' | 'tight' | 'loose';
}

export function Section({ 
  children, 
  className, 
  spacing = 'default',
  ...props 
}: SectionProps) {
  if (!ENABLE_META_SHELL) {
    return <section className={className} {...props}>{children}</section>;
  }

  const spacings = {
    default: 'py-16 lg:py-20',
    tight: 'py-8 lg:py-12',
    loose: 'py-20 lg:py-24'
  };

  return (
    <section 
      className={cn(
        spacings[spacing],
        className
      )} 
      {...props}
    >
      {children}
    </section>
  );
}

// Grid System
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: '1' | '2' | '3' | '4' | '6' | '12';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Grid({ 
  children, 
  className, 
  cols = '3',
  gap = 'md',
  ...props 
}: GridProps) {
  if (!ENABLE_META_SHELL) {
    return <div className={className} {...props}>{children}</div>;
  }

  const colClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '6': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    '12': 'grid-cols-12'
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  return (
    <div 
      className={cn(
        'grid',
        colClasses[cols],
        gapClasses[gap],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

// Stack (Flexbox column with spacing)
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end';
}

export function Stack({ 
  children, 
  className, 
  spacing = 'md',
  align = 'start',
  ...props 
}: StackProps) {
  if (!ENABLE_META_SHELL) {
    return <div className={className} {...props}>{children}</div>;
  }

  const spacingClasses = {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  };

  return (
    <div 
      className={cn(
        'flex flex-col',
        spacingClasses[spacing],
        alignClasses[align],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}