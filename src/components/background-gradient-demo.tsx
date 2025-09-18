"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BackgroundGradientOriginal() {
  return (
    <div className="min-h-[40rem] w-full bg-slate-900 flex items-center justify-center p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Original Aceternity Demo</h2>
        <p className="text-slate-400 max-w-2xl mb-8">
          This is the exact component from the Aceternity documentation, adapted to work without external image dependencies.
        </p>
        
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          {/* Replaced image with a placeholder */}
          <div className="w-full h-[400px] bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
            <div className="text-white text-6xl">👟</div>
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is by
            entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
