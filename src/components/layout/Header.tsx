'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SearchTrigger } from '@/components/global-search';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Platform', href: '/hub', submenu: [
      { name: 'TrailHub', href: '/hub' },
      { name: 'TrailKits', href: '/kits' },
      { name: 'Case Studies', href: '/case-studies' },
    ]},
    { name: 'Resources', href: '/blog', submenu: [
      { name: 'Blog', href: '/blog' },
      { name: 'Hikes', href: '/hikes' },
      { name: 'Ethics', href: '/ethics' },
    ]},
    { name: 'About', href: '/about', submenu: [
      { name: 'About Us', href: '/about' },
      { name: 'Board & Advisors', href: '/about/board' },
    ]},
    { name: 'Demo', href: '/expert-publisher', highlight: true },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-trailguide-border bg-trailguide-background/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-gradient-to-r from-trailguide-evergreen via-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200">
                <span className="text-white font-bold text-sm">TG</span>
              </div>
              <span className="ml-3 text-xl font-bold text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors duration-200">TrailGuide</span>
            </div>
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => {
            const isActive = isActivePath(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-200 px-1 py-2 ${
                  item.highlight 
                    ? 'px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transform hover:scale-105' 
                    : isActive 
                      ? 'text-trailguide-evergreen font-semibold' 
                      : 'text-trailguide-slate hover:text-trailguide-evergreen hover:scale-105'
                }`}
              >
                {item.name}
                {isActive && !item.highlight && (
                  <>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-trailguide-evergreen to-emerald-600 rounded-full"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-trailguide-evergreen shadow-sm"></div>
                  </>
                )}
              </Link>
            );
          })}
        </div>

        {/* Search and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-64">
            <SearchTrigger />
          </div>
          <Button 
            asChild
            className="bg-gradient-to-r from-trailguide-evergreen to-emerald-600 hover:from-trailguide-evergreen/90 hover:to-emerald-700 text-white px-6 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Link href="/trailmap">Start Assessment</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-trailguide-background/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-trailguide-slate" />
          ) : (
            <Menu className="h-6 w-6 text-trailguide-slate" />
          )}
        </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-trailguide-border bg-trailguide-background shadow-lg">
          <nav className="container mx-auto px-4 py-6 space-y-3">
            {navigation.map((item, index) => {
              const isActive = isActivePath(item.href);
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center text-base font-medium transition-colors py-3 px-2 rounded-lg ${
                      item.highlight
                        ? 'px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white justify-center shadow-md'
                        : isActive 
                          ? 'text-trailguide-evergreen font-semibold bg-trailguide-evergreen/5' 
                          : 'text-trailguide-slate hover:text-trailguide-evergreen hover:bg-trailguide-evergreen/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isActive && !item.highlight && (
                      <div className="w-2 h-2 rounded-full bg-trailguide-evergreen mr-3"></div>
                    )}
                    {item.name}
                  </Link>
                  {index < navigation.length - 1 && !item.highlight && (
                    <div className="border-b border-trailguide-border/50 mt-3"></div>
                  )}
                </div>
              );
            })}
            <div className="pt-6 border-t border-trailguide-border">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-trailguide-evergreen to-emerald-600 hover:from-trailguide-evergreen/90 hover:to-emerald-700 text-white py-3 text-base font-semibold shadow-md"
              >
                <Link href="/trailmap">Start Assessment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
