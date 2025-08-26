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
    { name: 'TrailHub', href: '/hub' },
    { name: 'TrailMap', href: '/trailmap' },
    { name: 'Hikes', href: '/hikes' },
    { name: 'Kits', href: '/kits' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Ethics', href: '/ethics' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-trailguide-border/50 bg-trailguide-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-trailguide-neutral">TrailGuide</span>
            <div className="ml-1 h-2 w-2 rounded-full bg-trailguide-evergreen"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = isActivePath(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-trailguide-evergreen' 
                    : 'text-trailguide-neutral hover:text-trailguide-evergreen'
                }`}
              >
                {item.name}
                {isActive && (
                  <>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-trailguide-evergreen"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-trailguide-evergreen"></div>
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Search and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-64">
            <SearchTrigger />
          </div>
          <Button 
            asChild
            className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white"
          >
            <Link href="/trailmap">Start Assessment</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-trailguide-neutral" />
          ) : (
            <Menu className="h-6 w-6 text-trailguide-neutral" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-trailguide-border/50 bg-trailguide-background/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => {
              const isActive = isActivePath(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-trailguide-evergreen' 
                      : 'text-trailguide-neutral hover:text-trailguide-evergreen'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActive && (
                    <div className="w-1 h-1 rounded-full bg-trailguide-evergreen mr-2"></div>
                  )}
                  {item.name}
                </Link>
              );
            })}
            <Button 
              asChild
              className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white mt-4"
            >
              <Link href="/assessment">Start Your Assessment</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
