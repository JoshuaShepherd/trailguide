'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import '../../styles/thought-leader-coffee.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Future: Sound effects utility
const playSound = (soundType: 'hover' | 'click' | 'success' | 'whoosh') => {
  // This would play appropriate sound effects
  // For now, we'll just add visual feedback
  console.log(`🔊 Playing ${soundType} sound`);
};

const ThoughtLeaderCoffeePage = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [showStory, setShowStory] = useState(false);
  const [showNonMatch, setShowNonMatch] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const selectionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const napkinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const roles = [
    'Thought Leader',
    'Pastor',
    'Writer',
    'Coach',
    'Consultant',
    'Speaker',
    'Entrepreneur',
    'Ministry Leader',
    'Movement Leader',
    'Non-Profit Leader'
  ];

  const handleRoleToggle = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handleContinue = () => {
    if (selectedRoles.length === 0) {
      setShowNonMatch(true);
      return;
    }
    setShowStory(true);
    
    // Animate transition to story
    gsap.to(selectionRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        initStoryAnimations();
      }
    });
  };

  const initStoryAnimations = () => {
    if (!storyRef.current) return;

    const tl = gsap.timeline();
    
    // Initial story fade in
    tl.from(storyRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    });

    // Set up scroll-triggered animations
    setupScrollAnimations();
  };

  const setupScrollAnimations = () => {
    const sections = gsap.utils.toArray('.story-section');
    
    // Create scroll progress indicator
    gsap.to(progressRef.current, {
      scaleY: 1,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3
      }
    });
    
    sections.forEach((section: any, index) => {
      // Pin each section during scroll with enhanced effects
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onEnter: () => {
          setCurrentSection(index);
          gsap.timeline()
            .to(section, {
              scale: 1.05,
              duration: 0.8,
              ease: "power2.out"
            })
            .to(section.querySelector('.parallax-bg'), {
              y: -50,
              duration: 0.8,
              ease: "power2.out"
            }, "<");
        },
        onLeave: () => {
          gsap.timeline()
            .to(section, {
              scale: 0.95,
              opacity: 0.7,
              duration: 0.8,
              ease: "power2.out"
            })
            .to(section, {
              rotationX: -10,
              transformPerspective: 1000,
              duration: 0.8,
              ease: "power2.out"
            }, "<");
        },
        onEnterBack: () => {
          setCurrentSection(index);
          gsap.timeline()
            .to(section, {
              scale: 1.05,
              opacity: 1,
              rotationX: 0,
              duration: 0.8,
              ease: "power2.out"
            });
        }
      });

      // Animate text elements
      const textElements = section.querySelectorAll('.animate-text');
      textElements.forEach((text: any, textIndex: number) => {
        gsap.fromTo(text, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: textIndex * 0.2,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1
            }
          }
        );
      });

      // Animate images
      const imageElements = section.querySelectorAll('.animate-image');
      imageElements.forEach((img: any) => {
        gsap.fromTo(img,
          { scale: 0.8, opacity: 0, rotation: -5 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: img,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1
            }
          }
        );
      });
    });

    // Special napkin map animation
    if (napkinRef.current) {
      ScrollTrigger.create({
        trigger: napkinRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.timeline()
            .to(napkinRef.current, {
              scale: 1.2,
              rotation: 2,
              duration: 0.8,
              ease: "power2.out"
            })
            .to('.napkin-path', {
              strokeDashoffset: 0,
              duration: 2,
              ease: "power2.inOut",
              stagger: 0.3
            }, "-=0.5")
            .to('.napkin-marker', {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              stagger: 0.2
            }, "-=1");
        }
      });
    }

    // Background color transitions
    const colorSections = [
      { trigger: '.section-1', color: '#f8fafc' },
      { trigger: '.section-2', color: '#f1f5f9' },
      { trigger: '.section-3', color: '#e2e8f0' },
      { trigger: '.section-4', color: '#cbd5e1' },
      { trigger: '.section-5', color: '#94a3b8' }
    ];

    colorSections.forEach(({ trigger, color }) => {
      ScrollTrigger.create({
        trigger,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to('body', { backgroundColor: color, duration: 1 });
        },
        onEnterBack: () => {
          gsap.to('body', { backgroundColor: color, duration: 1 });
        }
      });
    });
  };

  useEffect(() => {
    if (showStory) {
      // Small delay to ensure DOM is ready
      setTimeout(setupScrollAnimations, 100);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showStory]);

  if (showNonMatch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-2xl mx-auto text-center p-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            Thanks for stopping by!
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            This conversation is designed specifically for thought leaders, creators, and influencers. 
            While you might not fit these categories today, we appreciate your interest!
          </p>
          <button 
            onClick={() => {
              setShowNonMatch(false);
              setSelectedRoles([]);
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Another Look
          </button>
        </div>
      </div>
    );
  }

  if (!showStory) {
    return (
      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <div ref={heroRef} className="min-h-screen flex items-center justify-center">
          <div ref={selectionRef} className="max-w-4xl mx-auto text-center p-8">
            <h1 className="text-6xl font-bold text-slate-800 mb-8 leading-tight">
              Let's grab coffee<br />
              <span className="text-amber-600">and talk about your future</span>
            </h1>
            
            <p className="text-2xl text-slate-600 mb-12">
              First, let me know - are you any of these?
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {roles.map((role, index) => (
                <button
                  key={role}
                  onClick={() => handleRoleToggle(role)}
                  className={`role-button p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl ${
                    selectedRoles.includes(role)
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 border-amber-500 text-white shadow-lg animate-pulse'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: selectedRoles.includes(role) ? 'scale(1.05) rotate(1deg)' : 'scale(1)'
                  }}
                >
                  <div className="font-semibold relative z-10">
                    {selectedRoles.includes(role) && <span className="mr-2">✓</span>}
                    {role}
                  </div>
                  {selectedRoles.includes(role) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl opacity-20 animate-ping"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <input
                type="text"
                placeholder="Other: ___________"
                className="w-full max-w-md mx-auto p-4 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-center text-lg"
                onChange={(e) => {
                  if (e.target.value.trim()) {
                    setSelectedRoles(prev => [...prev.filter(r => !r.startsWith('Other:')), `Other: ${e.target.value}`]);
                  } else {
                    setSelectedRoles(prev => prev.filter(r => !r.startsWith('Other:')));
                  }
                }}
              />
            </div>

            <button
              onClick={handleContinue}
              disabled={selectedRoles.length === 0}
              className={`text-xl px-12 py-4 rounded-full font-semibold transition-all duration-300 transform ${
                selectedRoles.length > 0
                  ? 'bg-amber-600 text-white hover:bg-amber-700 hover:scale-105 shadow-lg'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              Perfect! Let's continue our conversation →
            </button>

            {selectedRoles.length > 0 && (
              <p className="mt-6 text-slate-600">
                Great! You selected: <span className="font-semibold">{selectedRoles.join(', ')}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={storyRef} className="story-container">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div ref={progressRef} className="w-1 h-32 bg-amber-500 transform scale-y-0 origin-top rounded-full shadow-lg"></div>
        <div className="mt-4 space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`scroll-dot ${currentSection === i ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="story-section section-1 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="parallax-bg bg-gradient-to-br from-amber-50 to-orange-100"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-slate-800 animate-text leading-tight">
              I'm so glad you're here.
            </h2>
            <p className="text-2xl text-slate-600 animate-text">
              You know what I love about coffee conversations? 
              They're where the best ideas get sketched on napkins.
            </p>
            <p className="text-xl text-slate-700 animate-text">
              And I have something I want to show you...
            </p>
          </div>
          <div className="animate-image">
            <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl shadow-2xl flex items-center justify-center relative coffee-steam">
              <div className="text-6xl animate-pulse">☕</div>
              {/* Floating coffee beans */}
              <div className="absolute top-4 left-4 text-2xl opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}>🫘</div>
              <div className="absolute bottom-4 right-4 text-xl opacity-40 animate-bounce" style={{animationDelay: '1.5s'}}>🫘</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="story-section section-2 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="parallax-bg bg-gradient-to-br from-slate-100 to-slate-200"></div>
        <div className="max-w-6xl mx-auto text-center p-8">
          <h2 className="text-5xl font-bold text-slate-800 mb-8 animate-text">
            Here's what I see happening...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-text p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-4">You create amazing content</h3>
              <p className="text-slate-600">But it's scattered across platforms you don't control</p>
            </div>
            <div className="animate-text p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">You're building an audience</h3>
              <p className="text-slate-600">But someone else owns the relationship</p>
            </div>
            <div className="animate-text p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">You're making money</h3>
              <p className="text-slate-600">But giving away 30-70% to middlemen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Napkin Map */}
      <section className="story-section section-3 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="parallax-bg bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        <div className="max-w-6xl mx-auto text-center p-8">
          <h2 className="text-5xl font-bold text-slate-800 mb-8 animate-text">
            So I grabbed this napkin...
          </h2>
          <div ref={napkinRef} className="relative mx-auto max-w-4xl">
            <div className="animate-image w-full h-96 bg-white rounded-lg shadow-2xl border-4 border-amber-100 relative overflow-hidden transform rotate-1 napkin-texture">
              {/* Coffee stains with realistic texture */}
              <div className="absolute top-4 right-8 w-16 h-16 bg-amber-100 rounded-full opacity-60 blur-sm"></div>
              <div className="absolute top-6 right-10 w-12 h-12 bg-amber-200 rounded-full opacity-80"></div>
              <div className="absolute bottom-12 left-12 w-12 h-12 bg-amber-200 rounded-full opacity-40 blur-sm"></div>
              <div className="absolute bottom-14 left-14 w-8 h-8 bg-amber-300 rounded-full opacity-60"></div>
              
              {/* Napkin wrinkles */}
              <div className="absolute top-0 left-1/4 w-1 h-full bg-gray-100 opacity-30 transform rotate-3"></div>
              <div className="absolute top-0 right-1/3 w-1 h-full bg-gray-100 opacity-20 transform -rotate-2"></div>
              
              {/* Hand-drawn path with imperfections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence baseFrequency="0.02" numOctaves="1" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5"/>
                  </filter>
                </defs>
                
                <path
                  className="napkin-path"
                  d="M 50 250 Q 98 205 152 218 Q 180 225 210 210 Q 240 195 270 185 Q 310 170 350 120"
                  stroke="#4f46e5"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  strokeLinecap="round"
                  filter="url(#roughPaper)"
                />
                
                {/* Hand-drawn arrows */}
                <path className="napkin-path" d="M 340 130 L 350 120 L 345 135" stroke="#4f46e5" strokeWidth="2" fill="none" strokeDasharray="100" strokeDashoffset="100"/>
                
                {/* Markers with slight imperfections */}
                <circle className="napkin-marker" cx="50" cy="250" r="8" fill="#ef4444" opacity="0" transform="scale(0)" />
                <circle className="napkin-marker" cx="152" cy="218" r="9" fill="#f97316" opacity="0" transform="scale(0)" />
                <circle className="napkin-marker" cx="270" cy="185" r="7" fill="#eab308" opacity="0" transform="scale(0)" />
                <circle className="napkin-marker" cx="350" cy="120" r="10" fill="#22c55e" opacity="0" transform="scale(0)" />
                
                {/* Connecting lines (sketchy style) */}
                <path className="napkin-path" d="M 50 240 L 45 235 M 55 245 L 50 240" stroke="#ef4444" strokeWidth="1" strokeDasharray="50" strokeDashoffset="50"/>
                <path className="napkin-path" d="M 152 208 L 147 203 M 157 213 L 152 208" stroke="#f97316" strokeWidth="1" strokeDasharray="50" strokeDashoffset="50"/>
                <path className="napkin-path" d="M 270 175 L 265 170 M 275 180 L 270 175" stroke="#eab308" strokeWidth="1" strokeDasharray="50" strokeDashoffset="50"/>
                <path className="napkin-path" d="M 350 110 L 345 105 M 355 115 L 350 110" stroke="#22c55e" strokeWidth="1" strokeDasharray="50" strokeDashoffset="50"/>
              </svg>
              
              {/* Labels with handwritten style */}
              <div className="absolute bottom-8 left-8 text-sm font-bold text-slate-700 animate-text transform -rotate-2">
                <div className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-red-400">
                  Your Content<br />Today 📝
                </div>
              </div>
              <div className="absolute bottom-16 left-32 text-sm font-bold text-slate-700 animate-text transform rotate-1">
                <div className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-orange-400">
                  AI Enhancement 🤖
                </div>
              </div>
              <div className="absolute top-24 right-32 text-sm font-bold text-slate-700 animate-text transform -rotate-1">
                <div className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-400">
                  Your Platform 🏠
                </div>
              </div>
              <div className="absolute top-8 right-8 text-sm font-bold text-slate-700 animate-text transform rotate-2">
                <div className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-green-400">
                  Keep 90%<br />Revenue 💰
                </div>
              </div>
              
              {/* Hand-drawn "Eureka!" moment */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-slate-500 animate-text opacity-60 rotate-12">
                💡 Eureka!
              </div>
            </div>
          </div>
          <p className="text-2xl text-slate-600 mt-8 animate-text">
            And drew you a map to freedom.
          </p>
        </div>
      </section>

      {/* Section 4: The Solution */}
      <section className="story-section section-4 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="parallax-bg bg-gradient-to-br from-purple-50 to-pink-100"></div>
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-5xl font-bold text-slate-800 mb-12 text-center animate-text">
            Here's how it works:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-text">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">🤖 AI Co-Creation</h3>
                <p className="text-slate-600">
                  AI amplifies your ideas, doesn't replace them. Create more content, faster, 
                  while staying authentically you.
                </p>
              </div>
              <div className="animate-text">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">🏠 Your Platform</h3>
                <p className="text-slate-600">
                  Own your content, your audience, your data. No more algorithm anxiety 
                  or platform dependency.
                </p>
              </div>
              <div className="animate-text">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">💰 Keep 90%</h3>
                <p className="text-slate-600">
                  Direct monetization means you keep what you earn. No more giving 
                  away the majority of your revenue.
                </p>
              </div>
            </div>
            <div className="animate-image">
              <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="story-section section-5 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="parallax-bg bg-gradient-to-br from-green-50 to-emerald-100"></div>
        <div className="max-w-4xl mx-auto text-center p-8">
          <h2 className="text-5xl font-bold text-slate-800 mb-8 animate-text">
            Ready to build your future?
          </h2>
          <p className="text-2xl text-slate-600 mb-12 animate-text">
            Let's finish this conversation over another coffee. ☕
          </p>
          <div className="space-y-6">
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl px-12 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-text relative overflow-hidden group"
              onClick={() => {
                // Future: Add success sound effect
                // playSound('success');
                window.location.href = '/contact';
              }}
            >
              <span className="relative z-10">Yes, let's talk! →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="text-slate-600 hover:text-blue-600 transition-colors animate-text underline"
                onClick={() => window.location.href = '/what-you-get'}
              >
                What exactly do I get? 🤔
              </button>
              <span className="text-slate-400 hidden sm:block">•</span>
              <button 
                className="text-slate-600 hover:text-blue-600 transition-colors animate-text underline"
                onClick={() => window.location.href = '/case-studies'}
              >
                Show me the results 📊
              </button>
            </div>
            
            <p className="text-slate-500 animate-text text-sm">
              ✨ This conversation changes everything. I promise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThoughtLeaderCoffeePage;
