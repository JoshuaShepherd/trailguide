'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight,
  ChevronDown,
  User,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { NavigationItem, NavigationSubItem } from './shell-config';
import { KitConfig, Guardrail, OrgContext } from '@/types/kit';

interface EnhancedSidebarProps {
  kit: KitConfig;
  orgContext: OrgContext;
  primaryNavItems: NavigationItem[];
  kitModules: NavigationItem[];
  activeTab: string;
  isOpen: boolean;
  onTabChange: (tabId: string) => void;
  onClose: () => void;
  className?: string;
}

export function EnhancedSidebar({
  kit,
  orgContext,
  primaryNavItems,
  kitModules,
  activeTab,
  isOpen,
  onTabChange,
  onClose,
  className = ''
}: EnhancedSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const renderNavItem = (item: NavigationItem, isSubItem = false) => {
    const Icon = item.icon;
    const isExpanded = expandedSections.has(item.id);
    const isActive = activeTab === item.id;

    return (
      <div key={item.id}>
        {item.href ? (
          <Link
            href={item.href}
            className={`
              w-full flex items-center justify-between text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-evergreen-50 text-evergreen-700' 
                : 'text-gray-600 hover:bg-gray-50'
              }
              ${isSubItem ? 'pl-9' : ''}
            `}
          >
            <div className="flex items-center">
              <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {item.badge}
                </Badge>
              )}
            </div>
          </Link>
        ) : (
          <button
            onClick={item.expandable ? () => toggleSection(item.id) : () => onTabChange(item.id)}
            className={`
              w-full flex items-center justify-between text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-evergreen-50 text-evergreen-700' 
                : 'text-gray-600 hover:bg-gray-50'
              }
              ${isSubItem ? 'pl-9' : ''}
            `}
          >
            <div className="flex items-center">
              <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {item.badge}
                </Badge>
              )}
            </div>
            
            {item.expandable && (
              <ChevronRight className={`h-4 w-4 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`} />
            )}
          </button>
        )}
        
        {/* Sub Items */}
        {item.expandable && isExpanded && item.subItems && (
          <div className="ml-6 mt-1 space-y-1">
            {item.subItems.map((subItem: NavigationSubItem) => (
              <Link
                key={subItem.id}
                href={subItem.href}
                className="block px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <div className="flex items-center">
                  {subItem.icon && <subItem.icon className="h-3 w-3 mr-2 flex-shrink-0" />}
                  <span className="truncate">{subItem.label}</span>
                  {subItem.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {subItem.badge}
                    </Badge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={`
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0 transition-transform duration-200 ease-in-out
      fixed lg:relative z-30 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200
      ${className}
    `}>
      <div className="flex flex-col h-full">
        {/* Logo & Brand Marker */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-evergreen-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-gray-900 truncate">TrailGuide</h2>
              <p className="text-xs text-gray-500 truncate">{kit.name}</p>
            </div>
          </div>
        </div>

        {/* Primary Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <nav className="space-y-1">
              {primaryNavItems.map((item) => renderNavItem(item))}
            </nav>
          </div>
          
          {/* Kit-Specific Modules */}
          {kitModules.length > 0 && (
            <>
              <Separator />
              <div className="p-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {kit.name} Modules
                </h3>
                <nav className="space-y-1">
                  {kitModules.map((module) => renderNavItem(module))}
                </nav>
              </div>
            </>
          )}
        </div>
        
        {/* Guardrails Section */}
        {kit.guardrails && kit.guardrails.length > 0 && (
          <>
            <Separator />
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900">Ethics & Guardrails</h3>
                <Badge variant="outline" className="text-xs">
                  {kit.guardrails.length}
                </Badge>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {kit.guardrails.slice(0, 3).map((guardrail: Guardrail, index: number) => (
                  <div key={index} className="p-2 bg-yellow-50 rounded-md border border-yellow-200">
                    <p className="text-xs font-medium text-yellow-800 truncate">{guardrail.title}</p>
                    <p className="text-xs text-yellow-700 mt-1 line-clamp-2">{guardrail.body}</p>
                  </div>
                ))}
                {kit.guardrails.length > 3 && (
                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    View {kit.guardrails.length - 3} more
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
        
        {/* User Profile/Org Switcher */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 capitalize truncate">{orgContext.role}</p>
              <p className="text-xs text-gray-500 truncate">{orgContext.name}</p>
            </div>
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
