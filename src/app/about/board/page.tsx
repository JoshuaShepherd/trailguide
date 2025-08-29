'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BoardMemberCard } from '@/components/board/BoardMemberCard';
import { EmptySeatCard } from '@/components/board/EmptySeatCard';
import { leadership } from '@/data/leadership';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

// Demo mode logic
const getDemoMode = () => {
  // Check URL params
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('demo') === '1') return true;
  }
  
  // Check environment variable
  if (process.env.NODE_ENV !== 'production') {
    return process.env.NEXT_PUBLIC_BOARD_DEMO !== '0';
  }
  
  return process.env.NEXT_PUBLIC_BOARD_DEMO === '1';
};

export default function BoardPage() {
  const [demoMode, setDemoMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDemoMode(getDemoMode());
  }, []);

  const boardMembers = leadership.filter(person => person.group === 'board');
  const advisors = leadership.filter(person => person.group === 'advisor');

  if (!mounted) {
    // Prevent hydration mismatch
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="bg-white/50 text-green-700 border-green-200 px-3 py-1">
                Governance
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Board & Advisors
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our early board and trusted advisors help TrailGuide stay calm, trustworthy, 
              and practical as we scale wise AI for nonprofits.
            </p>

            {demoMode && (
              <div className="inline-block">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2 text-sm">
                  Early Board — 3 seats to fill
                </Badge>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Early Board Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Board</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our founding board members bring diverse expertise in manufacturing, public service, 
              education, and go-to-market strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <BoardMemberCard key={member.id} person={member} />
            ))}
            
            {/* Empty Seats (Demo Mode Only) */}
            {demoMode && (
              <>
                <EmptySeatCard isDemoMode={demoMode} />
                <EmptySeatCard isDemoMode={demoMode} />
                <EmptySeatCard isDemoMode={demoMode} />
              </>
            )}
          </div>
        </section>

        {/* Demo Mode Recruiting Banner */}
        {demoMode && (
          <section className="mb-16">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 lg:p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Internal demo: honoring the early board
                </h3>
                <p className="text-green-700 mb-4">
                  We&rsquo;re exploring 3 additional directors with nonprofit ops, philanthropy, 
                  and data/ethics depth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="bg-white hover:bg-green-50 border-green-300 text-green-700">
                    Role outline (PDF)
                  </Button>
                  <Button variant="outline" className="bg-white hover:bg-green-50 border-green-300 text-green-700">
                    Nominate a leader
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        <Separator className="my-16" />

        {/* Advisors Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted voices who guide our strategic thinking and help ensure we stay grounded 
              in practical wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor) => (
              <BoardMemberCard key={advisor.id} person={advisor} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3">Term Lengths</h3>
                <p className="text-gray-600 text-sm">
                  Board members serve three-year terms, with staggered renewals to ensure 
                  continuity while bringing fresh perspectives.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3">Dual-Entity Structure</h3>
                <p className="text-gray-600 text-sm">
                  TrailGuide operates through both a Foundation (501c3) and Applications entity, 
                  ensuring mission alignment while enabling sustainable operations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3">Conflict of Interest</h3>
                <p className="text-gray-600 text-sm">
                  We maintain arm&rsquo;s-length policies to ensure board decisions prioritize 
                  TrailGuide&rsquo;s mission over any individual or organizational interests.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3">Meeting Cadence</h3>
                <p className="text-gray-600 text-sm">
                  The board meets quarterly, with additional meetings as needed for 
                  strategic decisions and oversight responsibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let TrailGuide help your nonprofit navigate the AI landscape with confidence 
            and practical wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
              <Link href="/trailmap">Start Your Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
