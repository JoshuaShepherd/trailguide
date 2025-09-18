"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BackgroundGradientDemo() {
  return (
    <div className="min-h-[40rem] w-full bg-slate-900 flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {/* Original Card Design */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-white text-6xl">🚀</div>
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            TrailGuide Platform
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            A complete digital publishing platform for movement leaders. Built with modern tech stack and AI-powered tools for content creation and audience engagement.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Learn More</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              Free
            </span>
          </button>
        </BackgroundGradient>

        {/* Variant with Different Content */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-white text-6xl">✨</div>
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Aceternity Components
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Beautiful animated UI components with particles, gradients, and special effects. Perfect for modern web applications that need visual impact.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Explore</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              New
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
