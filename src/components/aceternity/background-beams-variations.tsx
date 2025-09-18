"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BackgroundBeamsVariations() {
  return (
    <div className="space-y-8">
      {/* Original Waitlist Demo */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Email Waitlist</h3>
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Join the waitlist
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Welcome to MailJet, the best transactional email service on the web.
              We provide reliable, scalable, and customizable email solutions for
              your business. Whether you&apos;re sending order confirmations,
              password reset emails, or promotional campaigns, MailJet has got you
              covered.
            </p>
            <input
              type="text"
              placeholder="hi@manuarora.in"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-3"
            />
          </div>
          <BackgroundBeams />
        </div>
      </div>

      {/* Hero Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Hero Section</h3>
        <div className="h-96 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-4xl mx-auto p-6 text-center">
            <h1 className="relative z-10 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold mb-4">
              Build Amazing Products
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg relative z-10 mb-8">
              Create stunning user experiences with our modern component library. 
              Fast, accessible, and beautiful by default.
            </p>
            <div className="flex gap-4 justify-center relative z-10">
              <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border border-neutral-700 text-white rounded-lg font-medium hover:border-neutral-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </div>

      {/* Compact Card */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Feature Card</h3>
        <div className="h-64 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased border border-neutral-800">
          <div className="max-w-md mx-auto p-6 text-center">
            <h2 className="relative z-10 text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold mb-3">
              Animated Beams
            </h2>
            <p className="text-neutral-500 text-sm relative z-10">
              Beautiful animated background beams that flow across your interface, 
              creating an engaging visual experience.
            </p>
          </div>
          <BackgroundBeams />
        </div>
      </div>

      {/* Split Layout */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Split Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-80 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased border border-neutral-800">
            <div className="max-w-sm mx-auto p-6 text-center">
              <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                Performance
              </h3>
              <p className="text-neutral-400 text-sm relative z-10">
                Lightning fast animations that don&apos;t compromise on performance or accessibility.
              </p>
            </div>
            <BackgroundBeams />
          </div>
          
          <div className="h-80 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased border border-neutral-800">
            <div className="max-w-sm mx-auto p-6 text-center">
              <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                Customizable
              </h3>
              <p className="text-neutral-400 text-sm relative z-10">
                Easily customize colors, speed, and behavior to match your brand and design system.
              </p>
            </div>
            <BackgroundBeams />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Call to Action</h3>
        <div className="h-72 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-3xl mx-auto p-6 text-center">
            <h2 className="relative z-10 text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto text-base relative z-10 mb-6">
              Join thousands of developers who are already building amazing products with our tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
}
