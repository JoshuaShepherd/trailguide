"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesPurple() {
  return (
    <div className="h-[30rem] w-full bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-6xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20 mb-4">
        Purple Magic
      </h1>
      <p className="text-purple-200 text-center relative z-20 max-w-lg">
        Mystical purple sparkles with enhanced particle density
      </p>
      <div className="w-[40rem] h-40 relative">
        {/* Purple Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent h-px w-1/4" />

        {/* Core component with purple theme */}
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#C084FC"
          speed={3}
        />

        {/* Purple Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
