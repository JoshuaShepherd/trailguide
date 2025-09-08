'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SearchTrigger } from '@/components/global-search';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Map, 
  Mountain, 
  Package, 
  BookOpen, 
  Users, 
  Archive,
  Target,
  Briefcase,
  Settings,
  HelpCircle,
  Globe,
  FileText,
  Award,
  Calendar,
  MessageSquare,
  Zap,
  ChevronRight
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: any;
  description?: string;
}

interface MegaMenuCategory {
  name: string;
  items: NavigationItem[];
  icon: any;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main navigation with mega menu structure
  const navigation = [
    {
      name: 'Platform',
      href: null,
      megaMenu: [
        {
          name: 'Core Tools',
          icon: Target,
          items: [
            { name: 'TrailMap Assessment', href: '/trailmap', description: 'AI readiness evaluation' },
            { name: 'TrailHub', href: '/hub', description: 'Community connection' },
            { name: 'TrailHub (Legacy)', href: '/hub-old', description: 'Original interface for comparison' },
            { name: 'Interface Comparison', href: '/interface-comparison', description: 'Compare legacy vs unified shell' },
            { name: 'Unified Dashboard', href: '/dashboard', description: 'Next-gen TrailKit experience' },
            { name: 'TrailKits Library', href: '/kits', description: '15+ specialized modules' },
            { name: 'AI Workspace', href: '/ai-workspace', description: 'Interactive AI tools' }
          ]
        },
        {
          name: 'Learning',
          icon: Mountain,
          items: [
            { name: 'What You Get', href: '/what-you-get', description: 'Complete platform overview & tour' },
            { name: 'Expert Publisher Guide', href: '/expert-publisher-guide', description: 'Complete thought leadership platform guide' },
            { name: 'Demo Template', href: '/template', description: 'Live example of complete platform' },
            { name: 'Hikes (Workshops)', href: '/hikes', description: 'Guided learning experiences' },
            { name: 'Case Studies', href: '/case-studies', description: 'Success stories & examples' },
            { name: 'Blog', href: '/blog', description: 'Insights & best practices' }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      href: null,
      megaMenu: [
        {
          name: 'Support',
          icon: HelpCircle,
          items: [
            { name: 'Support Center', href: '/support', description: 'Help articles & tutorials' },
            { name: 'Design System', href: '/design-system', description: 'UI components & guidelines' },
            { name: 'Content System', href: '/content-system', description: 'Content management tools' }
          ]
        },
        {
          name: 'Archive',
          icon: Archive,
          items: [
            { name: 'Archive Overview', href: '/archive', description: 'Development history' },
            { name: 'Documentation', href: '/archive/docs', description: 'Technical guides' },
            { name: 'Iterations', href: '/archive/iterations/homepage', description: 'Design evolution' }
          ]
        }
      ]
    },
    {
      name: 'Services',
      href: null,
      megaMenu: [
        {
          name: 'Professional',
          icon: Briefcase,
          items: [
            { name: 'Intake Process', href: '/intake', description: 'Begin your platform journey' },
            { name: 'Advisory Services', href: '/advisory', description: 'Expert guidance' },
            { name: 'Products', href: '/products', description: 'Specialized offerings' },
            { name: 'Partnerships', href: '/partnerships', description: 'Strategic alliances' }
          ]
        },
        {
          name: 'Analytics',
          icon: Zap,
          items: [
            { name: 'Analytics Dashboard', href: '/analytics', description: 'Track progress' },
            { name: 'Distribution', href: '/distribution', description: 'Content distribution' }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: null,
      megaMenu: [
        {
          name: 'About',
          icon: Users,
          items: [
            { name: 'About Us', href: '/about', description: 'Mission, team & story' },
            { name: 'Team', href: '/team', description: 'Meet our people' },
            { name: 'News', href: '/news', description: 'Latest updates' },
            { name: 'Media Kit', href: '/media', description: 'Press resources' }
          ]
        },
        {
          name: 'Legal',
          icon: FileText,
          items: [
            { name: 'Ethics Framework', href: '/ethics', description: 'Responsible AI commitment' },
            { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
            { name: 'Terms of Service', href: '/terms', description: 'Usage terms' },
            { name: 'Contact', href: '/contact', description: 'Get in touch' }
          ]
        }
      ]
    }
  ];

  // Quick access items (always visible)
  const quickAccess = [
    { name: 'Home', href: '/', icon: Home }
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isActiveInMegaMenu = (megaMenu: MegaMenuCategory[]) => {
    return megaMenu.some(category => 
      category.items.some(item => isActivePath(item.href))
    );
  };

  const handleMegaMenuToggle = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMegaMenu(null);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setIsMenuOpen(false);
      }
    };
    
    if (activeMegaMenu || isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeMegaMenu, isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-trailguide-border/50 bg-trailguide-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50 focus:outline-none focus:ring-2 focus:ring-trailguide-evergreen focus:ring-offset-2 rounded-lg p-2 -m-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-trailguide-neutral">TrailGuide Publishing Platform</span>
            <div className="ml-1 h-2 w-2 rounded-full bg-trailguide-evergreen logo-dot"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {/* Quick Access Home */}
          {quickAccess.map((item) => {
            const isActive = isActivePath(item.href);
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-trailguide-evergreen bg-trailguide-evergreen/10' 
                    : 'text-trailguide-neutral hover:text-trailguide-evergreen hover:bg-trailguide-evergreen/5'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            );
          })}

          {/* Mega Menu Items */}
          {navigation.map((item) => {
            const isActive = item.megaMenu ? isActiveInMegaMenu(item.megaMenu) : false;
            return (
              <div key={item.name} className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleMegaMenuToggle(item.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMegaMenuToggle(item.name);
                    }
                  }}
                  aria-expanded={activeMegaMenu === item.name}
                  aria-haspopup="true"
                  className={`nav-button flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-trailguide-evergreen focus:ring-offset-2 ${
                    isActive || activeMegaMenu === item.name
                      ? 'text-trailguide-evergreen bg-trailguide-evergreen/10' 
                      : 'text-trailguide-neutral hover:text-trailguide-evergreen hover:bg-trailguide-evergreen/5'
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    activeMegaMenu === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMegaMenu === item.name && item.megaMenu && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-trailguide-border rounded-xl shadow-xl mega-menu-shadow p-6 z-50"
                    role="menu"
                    aria-label={`${item.name} menu`}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {item.megaMenu.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <div key={category.name}>
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 rounded-lg bg-trailguide-evergreen/10 flex items-center justify-center mr-3">
                                <IconComponent className="h-4 w-4 text-trailguide-evergreen" />
                              </div>
                              <h3 className="font-semibold text-trailguide-neutral">
                                {category.name}
                              </h3>
                            </div>
                            <div className="space-y-2">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="block group p-2 rounded-lg hover:bg-trailguide-evergreen/5 transition-colors"
                                >
                                  <div className="flex items-start">
                                    <div className="flex-1">
                                      <div className="font-medium text-trailguide-neutral group-hover:text-trailguide-evergreen transition-colors text-sm">
                                        {subItem.name}
                                      </div>
                                      <div className="text-xs text-trailguide-slate">
                                        {subItem.description}
                                      </div>
                                    </div>
                                    <ChevronRight className="h-3 w-3 text-trailguide-slate group-hover:text-trailguide-evergreen transition-colors mt-1 ml-2" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Search and CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-64">
            <SearchTrigger />
          </div>
          <Button 
            asChild
            className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="/trailmap">Start Assessment</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden z-50"
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
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6">
            {/* Quick Access */}
            <div className="mb-8">
              <div className="space-y-2">
                {quickAccess.map((item) => {
                  const isActive = isActivePath(item.href);
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive 
                          ? 'text-trailguide-evergreen bg-trailguide-evergreen/10' 
                          : 'text-trailguide-neutral hover:text-trailguide-evergreen hover:bg-trailguide-evergreen/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Categories */}
            <div className="space-y-8">
              {navigation.map((navItem) => (
                <div key={navItem.name}>
                  <h2 className="text-lg font-semibold text-trailguide-neutral mb-4">
                    {navItem.name}
                  </h2>
                  {navItem.megaMenu && (
                    <div className="space-y-6">
                      {navItem.megaMenu.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <div key={category.name}>
                            <div className="flex items-center mb-3">
                              <div className="w-6 h-6 rounded-md bg-trailguide-evergreen/10 flex items-center justify-center mr-2">
                                <IconComponent className="h-3 w-3 text-trailguide-evergreen" />
                              </div>
                              <h3 className="font-medium text-trailguide-neutral">
                                {category.name}
                              </h3>
                            </div>
                            <div className="space-y-1 ml-8">
                              {category.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block px-3 py-2 rounded-lg text-sm text-trailguide-slate hover:text-trailguide-evergreen hover:bg-trailguide-evergreen/5 transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-trailguide-border">
              <Button 
                asChild
                className="w-full bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 text-white text-lg py-6"
              >
                <Link href="/trailmap" onClick={() => setIsMenuOpen(false)}>
                  Start Your Assessment
                </Link>
              </Button>
              
              <div className="mt-4">
                <SearchTrigger />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
