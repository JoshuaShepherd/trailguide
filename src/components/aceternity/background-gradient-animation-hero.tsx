"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BackgroundGradientAnimationHero() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Background Gradient Animation Hero</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Fullscreen animated gradient background with interactive mouse effects
        </p>
      </div>
      
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">
                Beautiful Gradients
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Animated backgrounds that respond to your mouse
              </p>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}
