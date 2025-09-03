'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  Briefcase,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Plus,
  Settings,
  Zap
} from 'lucide-react';
import { KitConfig, QuickAction, Snapshot } from '@/types/kit';

interface MainCanvasProps {
  kit: KitConfig;
  activeTab: string;
  children?: React.ReactNode;
  className?: string;
}

interface TabConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

export function MainCanvas({ kit, activeTab, children, className = '' }: MainCanvasProps) {
  const tabConfigs: TabConfig[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3,
      description: 'Overview with charts, tables, and activity feeds'
    },
    {
      id: 'work',
      label: 'Workflows',
      icon: Briefcase,
      description: 'Kanban boards, pipelines, campaigns, and task management'
    },
    {
      id: 'data',
      label: 'Data',
      icon: FileText,
      description: 'CRM-like view with search, filter, and sort capabilities'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: MessageCircle,
      description: 'Email, SMS, and communication logs integration'
    },
    {
      id: 'insights',
      label: 'Insights',
      icon: BarChart3,
      description: 'Visual analytics, reports, and data exports'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      description: 'Kit-specific configuration and preferences'
    }
  ];

  const renderQuickActions = () => (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Quick Actions</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Action
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {kit.quickActions.map((action: QuickAction) => (
            <Button
              key={action.id}
              variant="outline"
              className="justify-start h-auto p-4 text-left"
            >
              <div>
                <div className="font-medium">{action.label}</div>
                {action.description && (
                  <div className="text-sm text-gray-500 mt-1">{action.description}</div>
                )}
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {action.handler}
                  </Badge>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderSnapshots = () => {
    if (!kit.snapshots || kit.snapshots.length === 0) return null;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {kit.snapshots.map((snapshot: Snapshot) => (
          <Card key={snapshot.id}>
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                {snapshot.title}
                <Badge variant="outline" className="text-xs">
                  {snapshot.type}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-center">
                  {snapshot.type === 'chart' && <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-2" />}
                  {snapshot.type === 'table' && <FileText className="h-12 w-12 mx-auto text-gray-400 mb-2" />}
                  {snapshot.type === 'list' && <CheckSquare className="h-12 w-12 mx-auto text-gray-400 mb-2" />}
                  <p className="text-gray-500 text-sm">{snapshot.type} visualization</p>
                  <p className="text-gray-400 text-xs mt-1">Source: {snapshot.source}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderWorkflowsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Workflows</h2>
          <p className="text-gray-600">Manage tasks, campaigns, and processes</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Workflow
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500 text-sm">Campaign kanban board</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Task Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-center">
                <CheckSquare className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500 text-sm">Task management</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Automation Flows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500 text-sm">Process automation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderDataTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Management</h2>
          <p className="text-gray-600">Search, filter, and manage your records</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import</Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Record
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Records Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">CRM-style data table</p>
              <p className="text-gray-400 text-sm mt-1">Search, filter, sort capabilities</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderGenericTab = (config: TabConfig) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{config.label}</h2>
          <p className="text-gray-600">{config.description}</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{config.label} Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center">
              <config.icon className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">{config.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (children) {
    return (
      <main className={`flex-1 p-6 pb-16 ${className}`}>
        {children}
      </main>
    );
  }

  return (
    <main className={`flex-1 p-6 pb-16 ${className}`}>
      <div className="space-y-6">
        {activeTab === 'dashboard' && (
          <>
            {renderQuickActions()}
            {renderSnapshots()}
          </>
        )}

        {activeTab === 'work' && renderWorkflowsTab()}
        {activeTab === 'data' && renderDataTab()}
        
        {['messages', 'insights', 'settings'].includes(activeTab) && 
          renderGenericTab(tabConfigs.find(t => t.id === activeTab)!)
        }
      </div>
    </main>
  );
}
