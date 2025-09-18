"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BackgroundGradientVariations() {
  return (
    <div className="min-h-[50rem] w-full bg-slate-900 flex flex-col items-center justify-center p-8 space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Background Gradient Variations</h2>
        <p className="text-slate-400 max-w-2xl">
          Multiple ways to use animated gradient backgrounds for cards, buttons, and content containers
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* Pricing Card */}
        <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-zinc-900">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Pro Plan</h3>
            <div className="text-4xl font-bold text-black dark:text-white mb-4">
              $29<span className="text-lg text-slate-500">/mo</span>
            </div>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2 mb-6">
              <li>✓ Unlimited projects</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
              <li>✓ Custom integrations</li>
            </ul>
            <button className="w-full bg-black text-white rounded-lg py-2 font-semibold dark:bg-white dark:text-black">
              Get Started
            </button>
          </div>
        </BackgroundGradient>

        {/* Feature Card */}
        <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-zinc-900">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-3">Design System</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Comprehensive design tokens, components, and patterns for consistent user experiences across your applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Design</span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Components</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tokens</span>
            </div>
          </div>
        </BackgroundGradient>

        {/* Stats Card */}
        <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-zinc-900">
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Analytics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Users</span>
                <span className="font-bold text-black dark:text-white">12,543</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Revenue</span>
                <span className="font-bold text-black dark:text-white">$45,231</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Growth</span>
                <span className="font-bold text-green-600">+23.5%</span>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </div>

      {/* Wide Card Example */}
      <div className="max-w-4xl w-full">
        <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Animated Gradient Borders
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Create stunning visual effects with animated gradient borders that respond to user interaction. 
                Perfect for highlighting important content, call-to-action buttons, or premium features.
              </p>
              <div className="flex space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-lg dark:bg-white dark:text-black">
                  Primary Action
                </button>
                <button className="border border-gray-300 text-black px-4 py-2 rounded-lg dark:border-gray-600 dark:text-white">
                  Secondary
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌈</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Hover over this card to see the gradient animation in action
              </p>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
