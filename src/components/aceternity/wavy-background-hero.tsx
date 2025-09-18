"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundHero() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Wavy Background Hero</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Canvas-powered animated wave background with dynamic noise generation
        </p>
      </div>
      
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Hero waves are cool
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Leverage the power of canvas to create a beautiful hero section
          </p>
        </WavyBackground>
      </div>
    </div>
  );
}
