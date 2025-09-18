export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  category: 'sparkles' | 'particles' | 'gradients' | 'effects' | 'backgrounds';
  component: React.ComponentType;
  dependencies: string[];
  props?: Record<string, any>;
}

// Import components as we create them
import SparklesPreview from "@/components/sparkles-demo";
import SparklesPurple from "./sparkles-purple";
import BackgroundGradientDemo from "./background-gradient-demo";
import BackgroundGradientVariations from "./background-gradient-variations";
import { BackgroundGradientAnimationHero } from "./background-gradient-animation-hero";
import { InteractiveGradientCards } from "./interactive-gradient-cards";
import { WavyBackgroundHero } from "./wavy-background-hero";
import { WavyBackgroundVariations } from "./wavy-background-variations";
import BackgroundBoxesDemo from "./background-boxes-demo";
import BackgroundBoxesVariations from "./background-boxes-variations";
import BackgroundBeamsDemo from "./background-beams-demo";
import BackgroundBeamsVariations from "./background-beams-variations";
import BackgroundBeamsWithCollisionDemo from "./background-beams-with-collision-demo";
import BackgroundBeamsWithCollisionVariations from "./background-beams-with-collision-variations";
import BackgroundLinesDemo from "./background-lines-demo";
import { BackgroundLinesVariations } from "./background-lines-variations";
import AuroraBackgroundDemo from "./aurora-background-demo";
import VortexDemo from "./vortex-demo";
import MeteorsDemo from "./meteors-demo";
import GlowingStarsBackgroundCardPreview from "./glowing-stars-demo";
import ShootingStarsAndStarsBackgroundDemo from "./shooting-stars-and-stars-background-demo";
import SpotlightNewDemo from "./spotlight-new-demo";
import GlowingEffectDemo from "./glowing-effect-demo";
import LampDemo from "./lamp-demo";
import HeroParallaxDemo from "./hero-parallax-demo";

export const componentRegistry: ComponentInfo[] = [
  {
    id: 'sparkles-hero',
    name: 'Sparkles Hero',
    description: 'Animated particle effects with customizable density, size, and colors. Perfect for hero sections.',
    category: 'sparkles',
    component: SparklesPreview,
    dependencies: ['@tsparticles/react', '@tsparticles/slim', 'framer-motion'],
    props: {
      background: 'transparent',
      particleColor: '#FFFFFF',
      particleDensity: 1200,
      minSize: 0.4,
      maxSize: 1
    }
  },
  {
    id: 'sparkles-purple',
    name: 'Purple Magic',
    description: 'Mystical purple sparkles with enhanced particle density and violet gradient effects.',
    category: 'sparkles',
    component: SparklesPurple,
    dependencies: ['@tsparticles/react', '@tsparticles/slim', 'framer-motion'],
    props: {
      background: 'transparent',
      particleColor: '#C084FC',
      particleDensity: 800,
      minSize: 0.6,
      maxSize: 1.4,
      speed: 3
    }
  },
  {
    id: 'background-gradient-demo',
    name: 'Background Gradient Cards',
    description: 'Animated gradient borders that create stunning visual effects for cards and containers.',
    category: 'gradients',
    component: BackgroundGradientDemo,
    dependencies: ['framer-motion'],
    props: {
      animate: true,
      className: 'rounded-[22px]',
      containerClassName: 'p-[4px] group'
    }
  },
  {
    id: 'background-gradient-variations',
    name: 'Gradient Variations',
    description: 'Multiple examples of gradient backgrounds: pricing cards, feature highlights, and dashboard widgets.',
    category: 'gradients',
    component: BackgroundGradientVariations,
    dependencies: ['framer-motion'],
    props: {
      animate: true,
      responsive: true
    }
  },
  {
    id: 'background-gradient-animation-hero',
    name: 'Animated Gradient Hero',
    description: 'Fullscreen animated gradient background with 5-layer rotation system and interactive mouse effects.',
    category: 'gradients',
    component: BackgroundGradientAnimationHero,
    dependencies: ['react', 'css-custom-properties'],
    props: {
      gradientBackgroundStart: 'rgb(108, 0, 162)',
      gradientBackgroundEnd: 'rgb(0, 17, 82)',
      interactive: true,
      blendingValue: 'hard-light'
    }
  },
  {
    id: 'interactive-gradient-cards',
    name: 'Interactive Gradient Cards',
    description: 'Multiple cards showcasing different color schemes with mouse-interactive animated gradients.',
    category: 'gradients',
    component: InteractiveGradientCards,
    dependencies: ['react', 'css-custom-properties'],
    props: {
      customizable: true,
      interactive: true,
      multiCard: true
    }
  },
  {
    id: 'wavy-background-hero',
    name: 'Wavy Background Hero',
    description: 'Canvas-powered animated wave background with dynamic noise generation for hero sections.',
    category: 'effects',
    component: WavyBackgroundHero,
    dependencies: ['simplex-noise', 'canvas-api'],
    props: {
      speed: 'fast',
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
      waveWidth: 50,
      blur: 10,
      waveOpacity: 0.5
    }
  },
  {
    id: 'wavy-background-variations',
    name: 'Wavy Background Variations',
    description: 'Multiple wavy background examples with different speeds, colors, and wave configurations.',
    category: 'effects',
    component: WavyBackgroundVariations,
    dependencies: ['simplex-noise', 'canvas-api'],
    props: {
      customizable: true,
      multiVariation: true,
      speedControl: true,
      colorThemes: true
    }
  },
  {
    id: 'background-boxes-demo',
    name: 'Interactive Grid',
    description: 'Animated background grid with hover effects and color transitions. Perfect for interactive sections.',
    category: 'effects',
    component: BackgroundBoxesDemo,
    dependencies: ['framer-motion'],
    props: {
      interactive: true,
      colorPalette: ['#93c5fd', '#f9a8d4', '#86efac', '#fde047', '#fca5a5', '#d8b4fe'],
      hoverTransition: 0,
      rows: 150,
      cols: 100
    }
  },
  {
    id: 'background-boxes-variations',
    name: 'Grid Variations',
    description: 'Multiple layouts showcasing the background boxes component in different contexts.',
    category: 'effects',
    component: BackgroundBoxesVariations,
    dependencies: ['framer-motion'],
    props: {
      layouts: ['hero', 'minimal', 'cards', 'fullWidth'],
      maskStyles: ['radial-gradient', 'ellipse', 'gradient-overlay'],
      responsive: true,
      customizable: true
    }
  },
  {
    id: 'background-beams-demo',
    name: 'Animated Beams',
    description: 'Flowing animated beam paths with SVG gradients and smooth transitions. Perfect for hero sections and CTAs.',
    category: 'effects',
    component: BackgroundBeamsDemo,
    dependencies: ['framer-motion'],
    props: {
      pathCount: 50,
      animationDuration: '10-20s',
      gradientColors: ['#18CCFC', '#6344F5', '#AE48FF'],
      strokeOpacity: 0.4,
      strokeWidth: 0.5
    }
  },
  {
    id: 'background-beams-variations',
    name: 'Beam Layouts',
    description: 'Multiple layout examples showcasing animated beams in different contexts and use cases.',
    category: 'effects',
    component: BackgroundBeamsVariations,
    dependencies: ['framer-motion'],
    props: {
      layouts: ['waitlist', 'hero', 'card', 'split', 'cta'],
      responsive: true,
      customizable: true,
      gradientAnimations: true
    }
  },
  {
    id: 'background-beams-collision-demo',
    name: 'Exploding Beams',
    description: 'Interactive beam animations with collision detection and particle explosions. Advanced physics-based effects.',
    category: 'effects',
    component: BackgroundBeamsWithCollisionDemo,
    dependencies: ['framer-motion'],
    props: {
      beamCount: 7,
      collisionDetection: true,
      explosionParticles: 20,
      animationDuration: '3-11s',
      gradientColors: ['indigo', 'purple', 'pink']
    }
  },
  {
    id: 'background-beams-collision-variations',
    name: 'Collision Layouts',
    description: 'Multiple layout examples showcasing exploding beams in different contexts and use cases.',
    category: 'effects',
    component: BackgroundBeamsWithCollisionVariations,
    dependencies: ['framer-motion'],
    props: {
      layouts: ['hero', 'product', 'feature', 'coming-soon', 'event'],
      collisionEffects: true,
      responsive: true,
      customizable: true
    }
  },
  {
    id: 'background-lines-demo',
    name: 'Animated Lines',
    description: 'Animated line background with customizable duration and multiple colorful paths flowing across the screen.',
    category: 'backgrounds',
    component: BackgroundLinesDemo,
    dependencies: ['framer-motion'],
    props: {
      children: 'Content displayed over animated lines',
      className: 'Additional CSS classes',
      svgOptions: 'Animation configuration (duration, etc.)'
    }
  },
  {
    id: 'background-lines-variations',
    name: 'Line Layouts',
    description: 'Multiple layout examples showcasing animated line backgrounds for hero sections, testimonials, and CTAs.',
    category: 'backgrounds',
    component: BackgroundLinesVariations,
    dependencies: ['framer-motion'],
    props: {
      layouts: ['hero', 'product', 'testimonial', 'feature', 'cta'],
      animationSpeeds: 'Variable (6-15 seconds)',
      colorSchemes: 'Multi-color gradient paths',
      responsive: true
    }
  },
  {
    id: 'aurora-background',
    name: 'Aurora Background',
    description: 'Animated aurora borealis effect with CSS custom properties. Creates beautiful moving light gradients.',
    category: 'backgrounds',
    component: AuroraBackgroundDemo,
    dependencies: ['motion', 'clsx'],
    props: {
      showRadialGradient: true,
      colorScheme: 'blue-gradient',
      animationDuration: '60s',
      blurIntensity: '10px',
      opacity: 0.5
    }
  },
  {
    id: 'vortex-effect',
    name: 'Vortex Effect',
    description: 'Interactive particle vortex with noise-based movement patterns. Creates dynamic swirling particle effects.',
    category: 'effects',
    component: VortexDemo,
    dependencies: ['motion', 'simplex-noise', 'clsx'],
    props: {
      particleCount: 700,
      backgroundColor: 'black',
      baseHue: 220,
      baseSpeed: 0.0,
      rangeSpeed: 1.5,
      baseRadius: 1,
      rangeRadius: 2
    }
  },
  {
    id: 'meteors-effect',
    name: 'Meteors Effect',
    description: 'Animated meteor shower effect with customizable count and positioning. Perfect for card overlays and hero sections.',
    category: 'effects',
    component: MeteorsDemo,
    dependencies: ['motion', 'clsx'],
    props: {
      number: 20,
      animationDuration: '8s',
      meteorSize: '0.5px',
      gradientLength: '50px',
      colors: ['#64748b', 'transparent']
    }
  },
  {
    id: 'glowing-stars',
    name: 'Glowing Stars Background',
    description: 'Interactive star field with hover effects and periodic glow animations. Grid-based layout with motion controls.',
    category: 'backgrounds',
    component: GlowingStarsBackgroundCardPreview,
    dependencies: ['motion', 'clsx'],
    props: {
      stars: 108,
      columns: 18,
      glowInterval: '3s',
      hoverEffect: true,
      glowColor: '#3b82f6',
      starColor: '#666'
    }
  },
  {
    id: 'shooting-stars-background',
    name: 'Shooting Stars + Background',
    description: 'Combined shooting stars animation with twinkling star background. Canvas-based rendering with customizable star density and effects.',
    category: 'backgrounds',
    component: ShootingStarsAndStarsBackgroundDemo,
    dependencies: ['motion', 'clsx'],
    props: {
      starDensity: 0.00015,
      shootingStarSpeed: '10-30',
      shootingStarDelay: '1200-4200ms',
      starColor: '#9E00FF',
      trailColor: '#2EB9DF',
      twinkleProbability: 0.7
    }
  },
  {
    id: 'spotlight-new',
    name: 'New Spotlight Effect',
    description: 'Subtle animated spotlight with multiple gradient layers. Dual spotlight beams with smooth oscillating movement.',
    category: 'effects',
    component: SpotlightNewDemo,
    dependencies: ['motion', 'clsx'],
    props: {
      duration: 7,
      translateY: -350,
      width: 560,
      height: 1380,
      xOffset: 100,
      gradientIntensity: 'customizable'
    }
  },
  {
    id: 'glowing-effect',
    name: 'Glowing Effect',
    description: 'Interactive mouse-following glow effects with customizable borders and gradients. Perfect for highlighting interactive cards.',
    category: 'effects',
    component: GlowingEffectDemo,
    dependencies: ['motion', 'lucide-react'],
    props: {
      blur: 0,
      inactiveZone: 0.7,
      proximity: 0,
      spread: 20,
      variant: 'default',
      glow: false,
      disabled: true,
      movementDuration: 2,
      borderWidth: 1
    }
  },
  {
    id: 'lamp',
    name: 'Lamp Container',
    description: 'Beautiful animated lamp effect with conic gradients and smooth transitions. Perfect for hero sections and feature highlights.',
    category: 'effects',
    component: LampDemo,
    dependencies: ['motion'],
    props: {
      className: 'customizable container styles',
      children: 'React nodes for content',
      gradientAnimation: 'smooth width transitions',
      lightingLayers: 'multiple gradient effects'
    }
  },
  {
    id: 'hero-parallax',
    name: 'Hero Parallax',
    description: 'Stunning scrolling parallax effect showcasing products or portfolio items with smooth 3D transformations and spring animations.',
    category: 'effects',
    component: HeroParallaxDemo,
    dependencies: ['motion'],
    props: {
      products: 'array of {title, link, thumbnail}',
      scrollTrigger: 'scroll-based animations',
      springAnimations: 'smooth physics-based motion',
      threeDTransforms: 'perspective and rotation effects',
      responsiveLayout: 'mobile and desktop optimized'
    }
  },
  // Add more components here as we create them
];

export const getComponentsByCategory = (category: ComponentInfo['category']) => {
  return componentRegistry.filter(comp => comp.category === category);
};

export const getAllCategories = () => {
  return Array.from(new Set(componentRegistry.map(comp => comp.category)));
};
