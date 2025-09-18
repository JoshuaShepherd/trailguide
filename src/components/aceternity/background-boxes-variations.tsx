"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesVariations() {
  return (
    <div className="space-y-8">
      {/* Original Demo */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Interactive Grid</h3>
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Tailwind is Awesome
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Framer motion is the best animation library ngl
          </p>
        </div>
      </div>

      {/* Minimal Version */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Minimal Background</h3>
        <div className="h-64 relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(circle,transparent_20%,white)] pointer-events-none" />
          <Boxes />
          <div className="relative z-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Background Boxes</h2>
            <p className="text-slate-400">Hover over the grid to see the effect</p>
          </div>
        </div>
      </div>

      {/* Card Layout */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Card Integration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-48 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg border border-slate-800">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(ellipse,transparent_40%,white)] pointer-events-none" />
            <Boxes />
            <div className="relative z-20 text-center px-6">
              <h3 className="text-lg font-semibold text-white">Feature One</h3>
              <p className="text-sm text-slate-400 mt-1">Interactive background grid</p>
            </div>
          </div>
          
          <div className="h-48 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg border border-slate-800">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(ellipse,transparent_40%,white)] pointer-events-none" />
            <Boxes />
            <div className="relative z-20 text-center px-6">
              <h3 className="text-lg font-semibold text-white">Feature Two</h3>
              <p className="text-sm text-slate-400 mt-1">Responsive design system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Hero */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Hero Section</h3>
        <div className="h-80 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-900 z-20 pointer-events-none" />
          <Boxes />
          <div className="relative z-20 text-center max-w-2xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Interactive
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Background
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Hover over the grid to see beautiful color animations powered by Framer Motion
            </p>
            <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
