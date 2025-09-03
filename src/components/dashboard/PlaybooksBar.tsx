'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Shield, 
  Zap, 
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Eye,
  Download,
  User
} from 'lucide-react';
import { PlaybookAction, AuditLogEntry } from './shell-config';

interface PlaybooksBarProps {
  playbooks: PlaybookAction[];
  auditLog: AuditLogEntry[];
  onPlaybookRun: (playbookId: string) => void;
  onAgentOpen: () => void;
  className?: string;
}

export function PlaybooksBar({ 
  playbooks, 
  auditLog, 
  onPlaybookRun,
  onAgentOpen,
  className = '' 
}: PlaybooksBarProps) {
  const [auditLogOpen, setAuditLogOpen] = useState(false);

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}min ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getStatusIcon = (status: AuditLogEntry['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-3 w-3 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-3 w-3 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-3 w-3 text-yellow-500" />;
      default:
        return <Clock className="h-3 w-3 text-gray-400" />;
    }
  };

  return (
    <>
      {/* Bottom Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-30 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h4 className="text-sm font-medium text-gray-700">Playbooks</h4>
            <div className="flex gap-2 overflow-x-auto max-w-md">
              {playbooks.slice(0, 3).map((playbook) => (
                <Button
                  key={playbook.id}
                  variant="outline"
                  size="sm"
                  onClick={() => onPlaybookRun(playbook.id)}
                  className="text-xs whitespace-nowrap"
                  title={playbook.description}
                >
                  <Play className="h-3 w-3 mr-1" />
                  {playbook.label}
                  {playbook.lastRun && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {formatRelativeTime(playbook.lastRun)}
                    </Badge>
                  )}
                </Button>
              ))}
              {playbooks.length > 3 && (
                <Button variant="ghost" size="sm" className="text-xs">
                  +{playbooks.length - 3} more
                </Button>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setAuditLogOpen(!auditLogOpen)}
              className="text-xs"
            >
              <Shield className="h-3 w-3 mr-1" />
              Audit Log
              <Badge variant="secondary" className="ml-2">
                {auditLog.length}
              </Badge>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onAgentOpen}
              className="text-xs"
            >
              <Zap className="h-3 w-3 mr-1" />
              Ask Agent
            </Button>
          </div>
        </div>
      </div>

      {/* Audit Log Modal */}
      {auditLogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Audit Log</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Complete record of system actions and user activities
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setAuditLogOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="overflow-y-auto max-h-96">
                <div className="space-y-3">
                  {auditLog.map((entry) => (
                    <div 
                      key={entry.id} 
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {getStatusIcon(entry.status)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {entry.action}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <User className="h-3 w-3" />
                            <span>{entry.user}</span>
                            <span>•</span>
                            <span>{formatRelativeTime(entry.timestamp)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>Resource: {entry.resource}</span>
                          {entry.details && (
                            <>
                              <span>•</span>
                              <span>{entry.details}</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                {auditLog.length === 0 && (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No audit entries</h3>
                    <p className="text-gray-600">
                      System actions and user activities will appear here
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
