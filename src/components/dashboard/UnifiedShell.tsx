'use client';

import React, { useState } from 'react';
import { KitConfig, OrgContext } from '@/types/kit';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Bell, 
  User,
  ChevronDown,
  Menu,
  X,
  Home,
  Briefcase,
  Database,
  MessageCircle,
  BarChart3,
  Settings,
  Zap
} from 'lucide-react';

// Import new components
import { KPIBar } from './KPIBar';
import { AgentConsole } from './AgentConsole';
import { PlaybooksBar } from './PlaybooksBar';
import { EnhancedSidebar } from './EnhancedSidebar';
import { MainCanvas } from './MainCanvas';
import { 
  buildNavigationForKit, 
  buildPlaybooksForKit, 
  generateAuditLog,
  NavigationItem
} from './shell-config';

interface UnifiedShellProps {
  kit: KitConfig;
  orgContext?: OrgContext;
  children?: React.ReactNode;
}

export default function UnifiedShell({ 
  kit, 
  orgContext = {
    id: 'default',
    name: 'Your Organization',
    role: 'admin'
  },
  children 
}: UnifiedShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [agentDrawerOpen, setAgentDrawerOpen] = useState(false);

  // Primary Navigation Items (Universal across all kits)
  const primaryNavItems: NavigationItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'data', label: 'Data', icon: Database },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Kit-specific modules and configurations
  const kitModules = buildNavigationForKit(kit);
  const playbooks = buildPlaybooksForKit(kit);
  const auditLog = generateAuditLog(kit);

  const handlePlaybookRun = (playbookId: string) => {
    console.log('Running playbook:', playbookId);
    // Here you would integrate with your playbook execution system
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-gray-200 h-16">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left: Kit Title & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-evergreen-600 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{kit.name}</h1>
                <Badge variant="secondary" className="text-xs">
                  {kit.stage}
                </Badge>
              </div>
            </div>
          </div>

          {/* Center: Global Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search actions, docs, data..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-evergreen-500 focus:border-transparent w-full"
              />
            </div>
          </div>

          {/* Right: Org Switcher, Notifications, Profile */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              {orgContext.name}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Enhanced Sidebar */}
        <EnhancedSidebar
          kit={kit}
          orgContext={orgContext}
          primaryNavItems={primaryNavItems}
          kitModules={kitModules}
          activeTab={activeTab}
          isOpen={sidebarOpen}
          onTabChange={setActiveTab}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Sidebar Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top KPI Bar */}
          <KPIBar kpis={kit.kpis} />
          
          {/* Main Canvas */}
          <MainCanvas 
            kit={kit} 
            activeTab={activeTab}
          >
            {children}
          </MainCanvas>
        </div>
      </div>

      {/* Agent Console Drawer */}
      <AgentConsole 
        kit={kit} 
        isOpen={agentDrawerOpen} 
        onClose={() => setAgentDrawerOpen(false)} 
      />

      {/* Bottom Playbooks Bar */}
      <PlaybooksBar 
        playbooks={playbooks}
        auditLog={auditLog}
        onPlaybookRun={handlePlaybookRun}
        onAgentOpen={() => setAgentDrawerOpen(true)}
      />
    </div>
  );
}
