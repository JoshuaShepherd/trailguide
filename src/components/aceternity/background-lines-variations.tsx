"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesVariations() {
  return (
    <div className="space-y-8">
      {/* Hero Landing */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-screen">
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-8xl font-sans py-8 relative z-20 font-bold tracking-tight">
          Transform Your Ideas <br /> Into Impact
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center mb-8">
          The complete platform for thought leaders to create, publish, and monetize their expertise with AI-powered tools.
        </p>
        <div className="flex gap-4 relative z-20">
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Start Building
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            See Examples
          </button>
        </div>
      </BackgroundLines>

      {/* Product Showcase */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-[80vh]" svgOptions={{ duration: 15 }}>
        <div className="text-center relative z-20">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
            New Platform Features
          </span>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-600 to-purple-600 text-3xl md:text-5xl lg:text-6xl font-sans py-4 font-bold tracking-tight">
            AI-Powered Content Engine
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 dark:text-neutral-400 text-center">
            Generate, optimize, and distribute your thought leadership content across all channels with intelligent automation and personalized insights.
          </p>
        </div>
      </BackgroundLines>

      {/* Testimonial Section */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-[70vh]" svgOptions={{ duration: 8 }}>
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-green-600 to-teal-600 text-2xl md:text-4xl font-sans py-4 font-bold tracking-tight mb-8">
            "This platform transformed how I share my expertise"
          </h3>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 italic">
            "Within 3 months, I built a sustainable content system, grew my audience by 300%, and launched my first digital product. The AI tools saved me hours every week."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
            <div className="text-left">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">Sarah Chen</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Leadership Coach & Author</p>
            </div>
          </div>
        </div>
      </BackgroundLines>

      {/* Feature Highlight */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-[60vh]" svgOptions={{ duration: 12 }}>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center relative z-20">
          <div>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 text-3xl md:text-4xl font-sans py-2 font-bold tracking-tight mb-4">
              Analytics That Matter
            </h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              Track engagement, measure impact, and optimize your content strategy with comprehensive analytics designed for thought leaders.
            </p>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li>• Real-time audience insights</li>
              <li>• Content performance tracking</li>
              <li>• Revenue attribution analysis</li>
              <li>• Growth trend predictions</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">127%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Average Growth</div>
            </div>
          </div>
        </div>
      </BackgroundLines>

      {/* Call to Action */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-[50vh]" svgOptions={{ duration: 6 }}>
        <div className="text-center relative z-20">
          <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-600 to-pink-600 text-3xl md:text-5xl font-sans py-4 font-bold tracking-tight mb-6">
            Ready to Scale Your Influence?
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Join thousands of thought leaders who are building sustainable, profitable content businesses with our platform.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </BackgroundLines>
    </div>
  );
}
