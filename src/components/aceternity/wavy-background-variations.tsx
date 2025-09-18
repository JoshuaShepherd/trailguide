"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundVariations() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Wavy Background Variations</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Different wave configurations, speeds, and color schemes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fast Ocean Waves */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <WavyBackground 
            speed="fast"
            colors={["#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7"]}
            waveWidth={60}
            backgroundFill="#1e293b"
            blur={8}
            waveOpacity={0.7}
            containerClassName="h-full"
          >
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-3">Ocean Waves</h3>
              <p className="text-lg opacity-90">Fast, blue gradient waves</p>
            </div>
          </WavyBackground>
        </div>

        {/* Slow Sunset Waves */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <WavyBackground 
            speed="slow"
            colors={["#f97316", "#ef4444", "#dc2626", "#b91c1c", "#991b1b"]}
            waveWidth={40}
            backgroundFill="#0f172a"
            blur={12}
            waveOpacity={0.6}
            containerClassName="h-full"
          >
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-3">Sunset Waves</h3>
              <p className="text-lg opacity-90">Slow, warm gradient waves</p>
            </div>
          </WavyBackground>
        </div>

        {/* Aurora Waves */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <WavyBackground 
            speed="fast"
            colors={["#10b981", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6"]}
            waveWidth={80}
            backgroundFill="#000000"
            blur={15}
            waveOpacity={0.4}
            containerClassName="h-full"
          >
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-3">Aurora Waves</h3>
              <p className="text-lg opacity-90">Ethereal, wide waves</p>
            </div>
          </WavyBackground>
        </div>

        {/* Neon Waves */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <WavyBackground 
            speed="fast"
            colors={["#ff0080", "#ff4081", "#e91e63", "#9c27b0", "#673ab7"]}
            waveWidth={30}
            backgroundFill="#111827"
            blur={6}
            waveOpacity={0.8}
            containerClassName="h-full"
          >
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-3">Neon Waves</h3>
              <p className="text-lg opacity-90">Sharp, vibrant waves</p>
            </div>
          </WavyBackground>
        </div>
      </div>
    </div>
  );
}
