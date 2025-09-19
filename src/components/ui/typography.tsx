/**
 * Typography Components - Contemporary Design Meta
 * 
 * Provides consistent typography with proper hierarchy,
 * responsive sizing, and accessibility features.
 * 
 * Feature-flagged for opt-in adoption while preserving
 * existing TrailGuide typography.
 */

import React from 'react';
import { cn } from '@/lib/utils';

const ENABLE_META_TYPOGRAPHY = process.env.NODE_ENV === 'development';

// Heading Component
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  variant?: 'default' | 'display' | 'section';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  tracking?: 'tight' | 'normal' | 'wide';
  balance?: boolean;
}

export function Heading({ 
  level, 
  children, 
  className, 
  variant = 'default',
  weight = 'semibold',
  tracking = 'normal',
  balance = true,
  ...props 
}: HeadingProps) {
  if (!ENABLE_META_TYPOGRAPHY) {
    const Tag = `h${level}` as const;
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  const Tag = `h${level}` as const;

  const baseStyles = 'font-sans leading-tight';
  
  const sizeStyles = {
    1: variant === 'display' 
      ? 'text-4xl lg:text-6xl xl:text-7xl' 
      : 'text-3xl lg:text-4xl xl:text-5xl',
    2: variant === 'display' 
      ? 'text-3xl lg:text-5xl xl:text-6xl' 
      : 'text-2xl lg:text-3xl xl:text-4xl',
    3: 'text-xl lg:text-2xl xl:text-3xl',
    4: 'text-lg lg:text-xl',
    5: 'text-base lg:text-lg',
    6: 'text-sm lg:text-base'
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const trackingStyles = {
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide'
  };

  const balanceStyle = balance ? 'text-balance' : '';

  return (
    <Tag 
      className={cn(
        baseStyles,
        sizeStyles[level],
        weightStyles[weight],
        trackingStyles[tracking],
        balanceStyle,
        className
      )} 
      {...props}
    >
      {children}
    </Tag>
  );
}

// Text Component
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'default' | 'muted' | 'accent' | 'success' | 'attention' | 'danger';
  weight?: 'normal' | 'medium' | 'semibold';
  leading?: 'tight' | 'normal' | 'relaxed' | 'loose';
  as?: 'p' | 'span' | 'div';
}

export function Text({ 
  children, 
  className, 
  size = 'base',
  variant = 'default',
  weight = 'normal',
  leading = 'normal',
  as = 'p',
  ...props 
}: TextProps) {
  if (!ENABLE_META_TYPOGRAPHY) {
    const Tag = as;
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  const Tag = as;

  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const variantStyles = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    accent: 'text-accent-600',
    success: 'text-success',
    attention: 'text-attention',
    danger: 'text-danger'
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold'
  };

  const leadingStyles = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  return (
    <Tag 
      className={cn(
        'font-sans',
        sizeStyles[size],
        variantStyles[variant],
        weightStyles[weight],
        leadingStyles[leading],
        className
      )} 
      {...props}
    >
      {children}
    </Tag>
  );
}

// Eyebrow Component (Small text above headings)
interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  weight?: 'medium' | 'semibold' | 'bold';
  uppercase?: boolean;
  tracking?: 'normal' | 'wide' | 'wider';
}

export function Eyebrow({ 
  children, 
  className, 
  variant = 'accent',
  weight = 'semibold',
  uppercase = true,
  tracking = 'wide',
  ...props 
}: EyebrowProps) {
  if (!ENABLE_META_TYPOGRAPHY) {
    return <p className={className} {...props}>{children}</p>;
  }

  const variantStyles = {
    default: 'text-foreground',
    accent: 'text-accent-600',
    muted: 'text-muted-foreground'
  };

  const weightStyles = {
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const trackingStyles = {
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider'
  };

  const uppercaseStyle = uppercase ? 'uppercase' : '';

  return (
    <p 
      className={cn(
        'font-sans text-sm leading-tight',
        variantStyles[variant],
        weightStyles[weight],
        trackingStyles[tracking],
        uppercaseStyle,
        className
      )} 
      {...props}
    >
      {children}
    </p>
  );
}

// Prose Wrapper for rich content
interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'default' | 'accent';
}

export function Prose({ 
  children, 
  className, 
  size = 'base',
  variant = 'default',
  ...props 
}: ProseProps) {
  if (!ENABLE_META_TYPOGRAPHY) {
    return <div className={className} {...props}>{children}</div>;
  }

  const sizeStyles = {
    sm: 'prose-sm',
    base: 'prose',
    lg: 'prose-lg',
    xl: 'prose-xl'
  };

  const variantStyles = {
    default: 'prose-trailguide',
    accent: 'prose-accent'
  };

  return (
    <div 
      className={cn(
        'prose max-w-none',
        sizeStyles[size],
        variantStyles[variant],
        // Prose customization via CSS custom properties
        '[--prose-body:theme(colors.foreground)]',
        '[--prose-headings:theme(colors.foreground)]',
        '[--prose-links:theme(colors.accent.600)]',
        '[--prose-links-hover:theme(colors.accent.700)]',
        '[--prose-code:theme(colors.accent.600)]',
        '[--prose-pre-bg:theme(colors.muted)]',
        '[--prose-quotes:theme(colors.muted.foreground)]',
        '[--prose-quote-borders:theme(colors.border)]',
        '[--prose-captions:theme(colors.muted.foreground)]',
        '[--prose-kbd:theme(colors.foreground)]',
        '[--prose-kbd-shadows:theme(colors.primary)]',
        '[--prose-th-borders:theme(colors.border)]',
        '[--prose-td-borders:theme(colors.border)]',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

// Code Component
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'inline' | 'block';
  language?: string;
}

export function Code({ 
  children, 
  className, 
  variant = 'inline',
  language,
  ...props 
}: CodeProps) {
  if (!ENABLE_META_TYPOGRAPHY) {
    return <code className={className} {...props}>{children}</code>;
  }

  if (variant === 'block') {
    return (
      <pre 
        className={cn(
          'bg-muted rounded-lg p-4 overflow-x-auto',
          'text-sm font-mono leading-relaxed',
          className
        )}
        {...(language && { 'data-language': language })}
      >
        <code className="font-mono">{children}</code>
      </pre>
    );
  }

  return (
    <code 
      className={cn(
        'font-mono text-sm bg-muted px-1.5 py-0.5 rounded',
        'text-accent-600',
        className
      )} 
      {...props}
    >
      {children}
    </code>
  );
}

// Quote Component
interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode;
  cite?: string;
  variant?: 'default' | 'large';
}

export function Quote({ 
  children, 
  className, 
  cite,
  variant = 'default',
  ...props 
}: QuoteProps) {
  if (!ENABLE_META_TYPOGRAPHY) {
    return <blockquote className={className} {...props}>{children}</blockquote>;
  }

  const variantStyles = {
    default: 'text-lg leading-relaxed',
    large: 'text-xl lg:text-2xl leading-relaxed'
  };

  return (
    <blockquote 
      className={cn(
        'border-l-4 border-accent-200 pl-6 py-2',
        'italic text-muted-foreground',
        variantStyles[variant],
        className
      )} 
      {...props}
    >
      {children}
      {cite && (
        <footer className="mt-2 text-sm not-italic text-muted-foreground">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}