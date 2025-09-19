/**
 * Motion Components - Contemporary Design Meta
 * 
 * Provides accessible motion utilities with reduced motion support
 * and consistent animation patterns using Framer Motion.
 * 
 * Feature-flagged for opt-in adoption while preserving
 * existing TrailGuide animations.
 */

'use client';

import React from 'react';
import { motion, MotionProps, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ENABLE_META_MOTION = process.env.NODE_ENV === 'development';

// Motion presets
const motionPresets = {
  // Entrance animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },

  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },

  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },

  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },

  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  },

  // Hover states
  lift: {
    whileHover: { y: -2, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 }
  },

  grow: {
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 }
  },

  // Stagger children
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

// Duration presets from design tokens
const durations = {
  fast: 0.15,
  base: 0.2,
  slow: 0.3
};

// Easing presets from design tokens
const easings = {
  brand: [0.2, 0.8, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const
};

// Base Motion Component
interface MotionBoxProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  preset?: keyof typeof motionPresets;
  duration?: keyof typeof durations;
  easing?: keyof typeof easings;
  delay?: number;
  disabled?: boolean;
}

export function MotionBox({ 
  children, 
  className, 
  preset,
  duration = 'base',
  easing = 'brand',
  delay = 0,
  disabled = false,
  ...props 
}: MotionBoxProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (!ENABLE_META_MOTION || disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const presetProps = preset ? motionPresets[preset] : {};
  
  const transition = {
    duration: durations[duration],
    ease: easings[easing],
    delay
  };

  return (
    <motion.div 
      className={className}
      transition={transition}
      {...presetProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Fade In View (appears when scrolled into view)
interface FadeInViewProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: keyof typeof durations;
  delay?: number;
  once?: boolean;
  disabled?: boolean;
}

export function FadeInView({ 
  children, 
  className,
  direction = 'up',
  distance = 20,
  duration = 'base',
  delay = 0,
  once = true,
  disabled = false,
  ...props 
}: FadeInViewProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (!ENABLE_META_MOTION || disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionMap[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once }}
      transition={{ 
        duration: durations[duration], 
        ease: easings.brand,
        delay 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  childDelay?: number;
  duration?: keyof typeof durations;
  disabled?: boolean;
}

export function StaggerContainer({ 
  children, 
  className,
  staggerDelay = 0.1,
  childDelay = 0.2,
  duration = 'base',
  disabled = false,
  ...props 
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (!ENABLE_META_MOTION || disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item (use inside StaggerContainer)
interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  disabled?: boolean;
}

export function StaggerItem({ 
  children, 
  className,
  direction = 'up',
  distance = 20,
  disabled = false,
  ...props 
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (!ENABLE_META_MOTION || disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      className={className}
      variants={{
        initial: { 
          opacity: 0, 
          ...directionMap[direction] 
        },
        animate: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: { 
            duration: durations.base, 
            ease: easings.brand 
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Interactive Button Motion
interface MotionButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'lift' | 'grow' | 'press';
  disabled?: boolean;
}

export function MotionButton({ 
  children, 
  className,
  variant = 'lift',
  disabled = false,
  ...props 
}: MotionButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (!ENABLE_META_MOTION || disabled || shouldReduceMotion) {
    return (
      <button 
        className={className}
        disabled={disabled}
        onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }

  const variants = {
    lift: {
      whileHover: { y: -2 },
      whileTap: { scale: 0.98 }
    },
    grow: {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 }
    },
    press: {
      whileTap: { scale: 0.95 }
    }
  };

  return (
    <motion.button
      className={className}
      transition={{ 
        duration: durations.fast, 
        ease: easings.brand 
      }}
      {...variants[variant]}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Page Transition Wrapper
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function PageTransition({ 
  children, 
  className,
  disabled = false 
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (!ENABLE_META_MOTION || disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: durations.base, 
        ease: easings.brand 
      }}
    >
      {children}
    </motion.div>
  );
}

// Utility hook for reduced motion aware animations
export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    shouldReduceMotion,
    isEnabled: ENABLE_META_MOTION && !shouldReduceMotion,
    durations,
    easings,
    presets: motionPresets
  };
}