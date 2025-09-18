"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollisionVariations() {
  return (
    <div className="space-y-8">
      {/* Original Demo */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Exploding Beams Hero</h3>
        <BackgroundBeamsWithCollision>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            What&apos;s cooler than Beams?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Exploding beams.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Exploding beams.</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Product Launch */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Product Launch</h3>
        <BackgroundBeamsWithCollision className="h-96">
          <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              Introducing{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                NextGen AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary platform that delivers explosive performance and unprecedented capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-500 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Feature Showcase */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Feature Showcase</h3>
        <BackgroundBeamsWithCollision className="h-80">
          <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Lightning Fast Performance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Watch our beams collide with unmatched speed and precision. Every interaction is optimized for maximum impact and seamless user experience.
            </p>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Coming Soon */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Coming Soon</h3>
        <BackgroundBeamsWithCollision className="h-72">
          <div className="relative z-20 text-center max-w-2xl mx-auto px-6">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Coming Soon
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                Amazing
              </span>{" "}
              is Coming
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get ready for an explosive experience that will revolutionize how you think about interactive design.
            </p>
            <div className="flex justify-center">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Event Landing */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Event Landing</h3>
        <BackgroundBeamsWithCollision className="h-96">
          <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
                Live Event
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Design Conference 2025
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              March 15-17, 2025 • San Francisco
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join industry leaders for three days of explosive talks, interactive workshops, and networking opportunities that will ignite your creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                Register Now - $299
              </button>
              <div className="text-gray-500 dark:text-gray-400">
                <span className="text-sm">Early bird ends in: </span>
                <span className="font-mono font-bold">15:24:38</span>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
}
