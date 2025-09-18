"use client";

import SparklesPreview from "@/components/sparkles-demo";
import AuroraBackgroundDemo from "@/components/aceternity/aurora-background-demo";
import VortexDemo from "@/components/aceternity/vortex-demo";
import MeteorsDemo from "@/components/aceternity/meteors-demo";
import GlowingStarsBackgroundCardPreview from "@/components/aceternity/glowing-stars-demo";
import ShootingStarsAndStarsBackgroundDemo from "@/components/aceternity/shooting-stars-and-stars-background-demo";
import SpotlightNewDemo from "@/components/aceternity/spotlight-new-demo";
import GlowingEffectDemo from "@/components/aceternity/glowing-effect-demo";
import LampDemo from "@/components/aceternity/lamp-demo";
import HeroParallaxDemo from "@/components/aceternity/hero-parallax-demo";

export const AceternityShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Sparkles Hero */}
      <section id="sparkles-hero" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sparkles Hero</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Animated particle effects with customizable density, size, and colors. Perfect for hero sections.
          </p>
        </div>
        <div className="mb-6">
          <SparklesPreview />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• @tsparticles/react</li>
              <li>• @tsparticles/slim</li>
              <li>• framer-motion</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">sparkles</span>
          </div>
        </div>
      </section>

      {/* Aurora Background */}
      <section id="aurora-background" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Aurora Background</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dynamic aurora effects with smooth color transitions and particle systems.
          </p>
        </div>
        <div className="mb-6">
          <AuroraBackgroundDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
              <li>• React</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">backgrounds</span>
          </div>
        </div>
      </section>

      {/* Vortex */}
      <section id="vortex" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vortex</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Spinning particle vortex with customizable speed, colors, and density.
          </p>
        </div>
        <div className="mb-6">
          <VortexDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
              <li>• simplex-noise</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">particles</span>
          </div>
        </div>
      </section>

      {/* Meteors */}
      <section id="meteors" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Meteors</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Animated shooting meteors with trail effects and customizable trajectories.
          </p>
        </div>
        <div className="mb-6">
          <MeteorsDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• React</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">effects</span>
          </div>
        </div>
      </section>

      {/* Glowing Stars */}
      <section id="glowing-stars" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Glowing Stars</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Twinkling star field background with glow effects and interactive cards.
          </p>
        </div>
        <div className="mb-6">
          <GlowingStarsBackgroundCardPreview />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
              <li>• React</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">backgrounds</span>
          </div>
        </div>
      </section>

      {/* Shooting Stars */}
      <section id="shooting-stars" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Shooting Stars</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Animated shooting stars with star field background and smooth SVG animations.
          </p>
        </div>
        <div className="mb-6">
          <ShootingStarsAndStarsBackgroundDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• React</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">effects</span>
          </div>
        </div>
      </section>

      {/* Spotlight New */}
      <section id="spotlight-new" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">New Spotlight</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dual-beam spotlight effects with smooth motion and customizable gradients.
          </p>
        </div>
        <div className="mb-6">
          <SpotlightNewDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
              <li>• React</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm">effects</span>
          </div>
        </div>
      </section>

      {/* Glowing Effect */}
      <section id="glowing-effect" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Glowing Effect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interactive mouse-following glow effects with customizable borders and gradients.
          </p>
        </div>
        <div className="mb-6">
          <GlowingEffectDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
              <li>• lucide-react</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-sm">effects</span>
          </div>
        </div>
      </section>

      {/* Lamp */}
      <section id="lamp" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Lamp Container</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Beautiful animated lamp effect with conic gradients and smooth transitions.
          </p>
        </div>
        <div className="mb-6">
          <LampDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">effects</span>
          </div>
        </div>
      </section>

      {/* Hero Parallax */}
      <section id="hero-parallax" className="scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hero Parallax</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stunning scrolling parallax effect showcasing products with smooth 3D transformations.
          </p>
        </div>
        <div className="mb-6">
          <HeroParallaxDemo />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• motion</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Category</h3>
            <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm">effects</span>
          </div>
        </div>
      </section>
    </div>
  );
};
