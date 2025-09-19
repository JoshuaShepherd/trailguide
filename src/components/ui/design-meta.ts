/**
 * Design Meta - Contemporary Visual System
 * 
 * Modern design utilities and components that extend TrailGuide's
 * existing design system with contemporary patterns.
 * 
 * Features:
 * - Feature-flagged for opt-in adoption
 * - Preserves existing TrailGuide brand identity
 * - Accessible motion with reduced motion support
 * - 8-point spacing grid and responsive typography
 * - Semantic color system with state colors
 * 
 * Usage:
 * Import individual components or use the design utilities
 * alongside existing TrailGuide components.
 */

// Layout & Structure
export {
  Shell,
  PageHeader,
  PageContent,
  Section,
  Grid,
  Stack
} from './shell';

// Typography
export {
  Heading,
  Text,
  Eyebrow,
  Prose,
  Code,
  Quote
} from './typography';

// Motion & Animation
export {
  MotionBox,
  FadeInView,
  StaggerContainer,
  StaggerItem,
  MotionButton,
  PageTransition,
  useMotionConfig
} from './motion';

// Design System Configuration
export const designMeta = {
  // Feature flags
  flags: {
    shell: process.env.NODE_ENV === 'development',
    typography: process.env.NODE_ENV === 'development',
    motion: process.env.NODE_ENV === 'development',
    fonts: process.env.NODE_ENV === 'development'
  },

  // Design tokens (available via CSS custom properties)
  tokens: {
    spacing: {
      xs: 'var(--spacing-1)',
      sm: 'var(--spacing-2)',
      md: 'var(--spacing-4)',
      lg: 'var(--spacing-8)',
      xl: 'var(--spacing-12)'
    },
    
    colors: {
      accent: {
        light: 'var(--color-accent-100)',
        base: 'var(--color-accent-500)',
        dark: 'var(--color-accent-700)'
      },
      semantic: {
        success: 'var(--color-success)',
        attention: 'var(--color-attention)',
        danger: 'var(--color-danger)'
      }
    },

    typography: {
      sizes: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)'
      }
    },

    motion: {
      durations: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)'
      },
      easings: {
        brand: 'var(--easing-brand)',
        bounce: 'var(--easing-bounce)'
      }
    }
  },

  // Utility classes (use with Tailwind)
  utilities: {
    // Spacing
    spacing: {
      xs: 'space-y-1',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-8',
      xl: 'space-y-12'
    },

    // Text balance for headings
    balance: 'text-balance',

    // Focus states
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',

    // Reduced motion
    motionSafe: 'motion-safe:animate-in',
    motionReduce: 'motion-reduce:animate-none'
  }
} as const;

// Type definitions for design system
export type DesignMetaSpacing = keyof typeof designMeta.tokens.spacing;
export type DesignMetaColor = keyof typeof designMeta.tokens.colors.accent;
export type DesignMetaTypography = keyof typeof designMeta.tokens.typography.sizes;

// Utility function to check if design meta is enabled
export function isDesignMetaEnabled(feature?: keyof typeof designMeta.flags): boolean {
  if (!feature) {
    return Object.values(designMeta.flags).some(flag => flag);
  }
  return designMeta.flags[feature];
}