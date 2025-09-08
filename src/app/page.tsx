'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Hero Image/Abstract Visual */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50"></div>
          {/* Abstract trail/map visualization */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <path
                d="M 100 600 Q 300 400 500 450 T 900 300 Q 1000 250 1100 200"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-stone-400"
                strokeDasharray="20,10"
              />
              <path
                d="M 200 700 Q 400 500 600 550 T 1000 400"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-amber-400"
                strokeDasharray="15,8"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Own Your Publishing.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Keep 90%.
              </span><br />
              Launch in Weeks.
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              A six-figure digital publishing stack, custom-built for thought leaders — yours for <strong>$1,000 + 10%</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="bg-slate-900 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Start Your Platform
              </button>
              <Link
                href="#examples"
                className="text-slate-600 hover:text-slate-900 text-lg font-medium underline underline-offset-4 transition-colors"
              >
                See Examples
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Why Publishing Is Broken */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Publishing is Broken
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                85% of royalties go to publishers.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Traditional publishers take the lion's share while you do all the work. 
                Your ideas, your audience, their profit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Slow, print-first formats.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                18-month publishing cycles in a digital-first world. 
                By the time your book hits shelves, the conversation has moved on.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Disconnected from your audience.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Publishers own your reader relationships. You never know who's actually 
                engaging with your work or how to reach them directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The TrailGuide Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Dashboard Mockup */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Dashboard Frame */}
                <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-slate-400 text-sm">author.trailguide.com</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-slate-900">Your Publishing Dashboard</h3>
                      <div className="text-green-600 font-semibold">$12,847 this month</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">2,847</div>
                        <div className="text-slate-600 text-sm">Active Subscribers</div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">94%</div>
                        <div className="text-slate-600 text-sm">Revenue Retention</div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">47</div>
                        <div className="text-slate-600 text-sm">Articles Published</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                        <span className="text-slate-700">New Course: "Leadership in Crisis"</span>
                        <span className="text-green-600 font-semibold">$847</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                        <span className="text-slate-700">Premium Subscription</span>
                        <span className="text-green-600 font-semibold">$2,940</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                        <span className="text-slate-700">Speaking Event Bookings</span>
                        <span className="text-green-600 font-semibold">$9,060</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Your Platform.<br />
                Your Audience.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                  Your Revenue.
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>Custom publishing website</strong> (Next.js, Tailwind, Supabase, Vercel)
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>AI writing and content support agents</strong>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>Paywall + subscriptions</strong> (Stripe integration)
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>SEO, email capture, analytics</strong> baked in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples / Case Studies */}
      <section id="examples" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Thought leaders already using TrailGuide to own their publishing and keep 90%+ of their revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Alan Hirsch */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">AH</div>
                  <div className="text-sm opacity-80">Author Platform</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Alan Hirsch</h3>
                <p className="text-slate-600 mb-4">Missional leadership author and thought leader</p>
                <Link 
                  href="/alan-hirsch-platform" 
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  See Live Example →
                </Link>
              </div>
            </div>

            {/* Brad Briscoe */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">BB</div>
                  <div className="text-sm opacity-80">Author Platform</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Brad Briscoe</h3>
                <p className="text-slate-600 mb-4">Church planting strategist and author</p>
                <Link 
                  href="/brad-brisco-platform" 
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  See Live Example →
                </Link>
              </div>
            </div>

            {/* Tim Catchim */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">TC</div>
                  <div className="text-sm opacity-80">Author Platform</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tim Catchim</h3>
                <p className="text-slate-600 mb-4">Leadership development and organizational culture</p>
                <Link 
                  href="/tim-catchim-platform" 
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  See Live Example →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
              Transparent. Simple. Fair.
            </h2>
            
            <div className="bg-slate-900 text-white rounded-3xl p-12 mb-12">
              <div className="text-6xl font-bold mb-4">$1,000</div>
              <div className="text-2xl mb-2">Setup</div>
              <div className="text-4xl font-bold mb-4">+ 10%</div>
              <div className="text-2xl mb-6">of Earnings</div>
              <div className="text-slate-300 text-lg">
                That's it. No hidden fees. No monthly SaaS bills. No agency retainers.
              </div>
            </div>

            {/* TrailGuide Analytics Dashboard */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-12 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    TrailGuide Analytics
                  </h3>
                  <div className="text-slate-400 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Live Data • First 100 Users
                  </div>
                </div>
                <div className="text-slate-400 text-xs font-mono">
                  Last updated: Sep 7, 2025
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">UPFRONT REVENUE</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">$100,000</div>
                  <div className="text-green-400 text-xs font-mono mt-1">100 × $1,000</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">COMBINED AUDIENCE</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">353,624</div>
                  <div className="text-blue-400 text-xs font-mono mt-1">verified pipeline data</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">PAID SUBSCRIBERS</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">8,840</div>
                  <div className="text-purple-400 text-xs font-mono mt-1">2.5% conversion</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">MONTHLY PLATFORM</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">$884</div>
                  <div className="text-amber-400 text-xs font-mono mt-1">10% revenue share</div>
                </div>
              </div>
              
              {/* Bottom metrics bar */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="text-slate-400 text-sm">
                    Pipeline includes: Alan Hirsch (50K), Brad Brisco (25K), Tim Catchim (15K), Deb Hirsch (20K), Hugh Halter (30K) + 95 more
                  </div>
                  <div className="text-emerald-400 text-sm font-medium">
                    Annual Recurring: $10,608
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 border border-red-200 rounded-xl">
                <div className="text-red-600 font-bold text-lg mb-2">Agency Build</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$100,000+</div>
                <div className="text-slate-600">upfront</div>
                <div className="mt-4 text-sm text-slate-500">
                  Plus months of back-and-forth, change orders, and ongoing maintenance fees.
                </div>
              </div>

              <div className="p-6 border border-orange-200 rounded-xl">
                <div className="text-orange-600 font-bold text-lg mb-2">DIY SaaS</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$500-1,000</div>
                <div className="text-slate-600">per month forever</div>
                <div className="mt-4 text-sm text-slate-500">
                  Multiple subscriptions, integration headaches, and you still build it yourself.
                </div>
              </div>

              <div className="p-6 border-2 border-green-500 rounded-xl bg-green-50">
                <div className="text-green-600 font-bold text-lg mb-2">TrailGuide</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">$1,000 + 10%</div>
                <div className="text-slate-600">that's it</div>
                <div className="mt-4 text-sm text-slate-500">
                  Built in weeks. You own the code. We succeed when you succeed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Own Your Platform?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Join the first 100 thought leaders shaping the future of publishing.
          </p>
          <button className="bg-white text-slate-900 px-12 py-4 rounded-full text-xl font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-200 shadow-lg mb-6">
            Get Started Today
          </button>
          <p className="text-slate-400 text-lg">
            Join the first 100 thought leaders shaping the future of publishing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-slate-900">TrailGuide</div>
            </div>
            <div className="flex space-x-8">
              <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
              <Link href="#examples" className="text-slate-600 hover:text-slate-900 transition-colors">Examples</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500">
            Copyright TrailGuide © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
