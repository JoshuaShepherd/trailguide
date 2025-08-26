'use client';

import { KitConfig, Kpi, QuickAction, Guardrail } from '@/types/kit';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Search, 
  Bell, 
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface KitShellProps {
  kit: KitConfig;
  orgName?: string;
  userRole?: 'admin' | 'member';
  children?: React.ReactNode;
}

export default function KitShell({ 
  kit, 
  orgName = "Your Organization", 
  children 
}: KitShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'actions', label: 'Actions' },
    { id: 'data', label: 'Data' },
    { id: 'docs', label: 'Docs' },
    { id: 'learn', label: 'Learn' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Kit Title & Stage */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900">{kit.name}</h1>
              <StageBadge stage={kit.stage} />
            </div>
          </div>

          {/* Center: Global Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search actions, docs..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-evergreen-500 focus:border-transparent w-64"
              />
            </div>
          </div>

          {/* Right: Org Switcher, Notifications, Profile */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              {orgName}
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
        {/* Left Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-200 ease-in-out
          fixed md:relative z-30 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200
        `}>
          <div className="p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeTab === tab.id 
                      ? 'bg-evergreen-50 text-evergreen-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <Separator />

          {/* Guardrails Section */}
          {kit.guardrails && kit.guardrails.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Ethics & Guardrails</h3>
              <div className="h-32 overflow-y-auto">
                <div className="space-y-2">
                  {kit.guardrails.map((guardrail: Guardrail, index: number) => (
                    <div key={index} className="p-2 bg-yellow-50 rounded-md border border-yellow-200">
                      <p className="text-xs font-medium text-yellow-800">{guardrail.title}</p>
                      <p className="text-xs text-yellow-700 mt-1">{guardrail.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* KPI Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kit.kpis.map((kpi) => (
                  <KpiCard key={kpi.id} kpi={kpi} />
                ))}
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {kit.quickActions.map((action) => (
                      <QuickActionButton key={action.id} action={action} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Snapshots */}
              {kit.snapshots && kit.snapshots.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {kit.snapshots.map((snapshot) => (
                    <Card key={snapshot.id}>
                      <CardHeader>
                        <CardTitle className="text-base">{snapshot.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <SnapshotRenderer snapshot={snapshot} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'actions' && (
            <Card>
              <CardHeader>
                <CardTitle>All Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {kit.quickActions.map((action) => (
                    <div key={action.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{action.label}</h3>
                          {action.description && (
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          )}
                          <Badge variant="secondary" className="mt-2">
                            {action.handler === 'agent' ? 'AI Assistant' : 'Data Processing'}
                          </Badge>
                        </div>
                        <Button>Run Action</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'learn' && kit.learn && (
            <Card>
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {kit.learn.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-evergreen-600 font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Custom content from children */}
          {children}
        </main>

        {/* Right Agent Panel */}
        <aside className="hidden xl:block w-80 bg-white border-l border-gray-200 p-4">
          <AgentPanel kit={kit} />
        </aside>
      </div>
    </div>
  );
}

// Stage Badge Component
function StageBadge({ stage }: { stage: string }) {
  const stageColors = {
    'Awareness': 'bg-red-100 text-red-800',
    'Experimentation': 'bg-yellow-100 text-yellow-800',
    'Adoption': 'bg-blue-100 text-blue-800',
    'Optimization': 'bg-green-100 text-green-800',
    'Leadership': 'bg-purple-100 text-purple-800'
  };

  return (
    <Badge className={stageColors[stage as keyof typeof stageColors] || 'bg-gray-100 text-gray-800'}>
      {stage}
    </Badge>
  );
}

// KPI Card Component
function KpiCard({ kpi }: { kpi: Kpi }) {
  const formatValue = (value: string | number | null, format?: string) => {
    if (value === null) return '—';
    if (format === 'currency' && typeof value === 'number') {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    }
    if (format === 'number' && typeof value === 'number') {
      return new Intl.NumberFormat('en-US').format(value);
    }
    return String(value);
  };

  const getTrendIcon = (delta?: number) => {
    if (!delta) return <Minus className="h-3 w-3 text-gray-400" />;
    if (delta > 0) return <TrendingUp className="h-3 w-3 text-green-500" />;
    return <TrendingDown className="h-3 w-3 text-red-500" />;
  };

  const getTrendColor = (delta?: number) => {
    if (!delta) return 'text-gray-400';
    return delta > 0 ? 'text-green-600' : 'text-red-600';
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
          {getTrendIcon(kpi.delta)}
        </div>
        <div className="mt-2">
          <p className="text-2xl font-bold text-gray-900">
            {formatValue(kpi.value, kpi.format)}
          </p>
          {kpi.delta && (
            <div className="flex items-center gap-1 mt-1">
              <span className={`text-sm font-medium ${getTrendColor(kpi.delta)}`}>
                {kpi.delta > 0 ? '+' : ''}{kpi.delta}%
              </span>
              {kpi.period && (
                <span className="text-sm text-gray-500">vs {kpi.period}</span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Quick Action Button Component
function QuickActionButton({ action }: { action: QuickAction }) {
  return (
    <Button 
      variant="outline" 
      className="h-auto p-4 text-left justify-start"
      onClick={() => {
        // TODO: Implement action handler
        console.log(`Running action: ${action.id}`);
      }}
    >
      <div>
        <div className="font-medium text-gray-900">{action.label}</div>
        {action.description && (
          <div className="text-sm text-gray-600 mt-1">{action.description}</div>
        )}
        <Badge variant="secondary" className="mt-2">
          {action.handler === 'agent' ? 'AI' : 'Data'}
        </Badge>
      </div>
    </Button>
  );
}

// Snapshot Renderer Component
function SnapshotRenderer({ snapshot }: { snapshot: { id: string; type: string; title: string; data?: unknown[]; columns?: string[] } }) {
  if (!snapshot.data) {
    return <div className="text-gray-500 text-sm">No data available</div>;
  }

  if (snapshot.type === 'table') {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              {snapshot.columns?.map((col: string) => (
                <th key={col} className="text-left py-2 px-3 font-medium text-gray-900 capitalize">
                  {col.replace(/([A-Z])/g, ' $1').trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {snapshot.data.slice(0, 5).map((row, index: number) => {
              const rowData = row as Record<string, unknown>;
              return (
                <tr key={index} className="border-b border-gray-100">
                  {snapshot.columns?.map((col: string) => (
                    <td key={col} className="py-2 px-3 text-gray-700">
                      {String(rowData[col] || '')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (snapshot.type === 'list') {
    return (
      <div className="space-y-2">
        {snapshot.data.slice(0, 4).map((item, index: number) => {
          const itemData = item as Record<string, unknown>;
          const entries = Object.entries(itemData);
          return (
            <div key={index} className="p-2 bg-gray-50 rounded">
              <div className="text-sm font-medium text-gray-900">
                {String(itemData.name || itemData.title || entries[0]?.[1] || '')}
              </div>
              {entries.slice(1).map(([key, value]) => (
                <div key={key} className="text-xs text-gray-600">
                  {key}: {String(value)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  // Chart placeholder
  return (
    <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
      <span className="text-gray-500 text-sm">Chart visualization placeholder</span>
    </div>
  );
}

// Agent Panel Component
function AgentPanel({ kit }: { kit: KitConfig }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">AI Assistant</h3>
      
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Ready to help with {kit.name.toLowerCase()}. Ask me anything or use a quick action to get started.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-900">Quick Prompts</h4>
        {kit.quickActions.filter(action => action.handler === 'agent').slice(0, 3).map((action) => (
          <Button 
            key={action.id}
            variant="outline" 
            size="sm"
            className="w-full justify-start text-xs"
          >
            {action.label}
          </Button>
        ))}
      </div>

      <Separator />

      <div className="text-xs text-gray-500">
        Context: {kit.stage} stage • {kit.kpis.length} KPIs tracked
      </div>
    </div>
  );
}
