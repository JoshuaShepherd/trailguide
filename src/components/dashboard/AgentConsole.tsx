'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Note: ScrollArea not available, using div with overflow
import { 
  X, 
  Activity, 
  Play, 
  Send, 
  Lightbulb,
  Zap,
  MessageCircle,
  FileText,
  BarChart3,
  Clock
} from 'lucide-react';
import { KitConfig } from '@/types/kit';

interface AgentConsoleProps {
  kit: KitConfig;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  actions?: AgentAction[];
}

interface AgentAction {
  id: string;
  label: string;
  type: 'report' | 'automation' | 'data' | 'communication';
  status: 'pending' | 'running' | 'completed' | 'error';
}

export function AgentConsole({ kit, isOpen, onClose, className = '' }: AgentConsoleProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'agent',
      content: `I'm your ${kit.name} assistant. I can help with ${kit.quickActions[0]?.label.toLowerCase() || 'various tasks'}, generate reports, and answer questions about your data. What would you like to do today?`,
      timestamp: new Date(Date.now() - 5 * 60 * 1000)
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');

  const quickPrompts = [
    "Show me this month's performance",
    "Generate a summary report",
    "What are my top priorities?",
    "Help me create a campaign"
  ];

  const recentActions = [
    { 
      id: '1',
      action: 'Generated donor report', 
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      status: 'completed' as const
    },
    { 
      id: '2',
      action: 'Updated contact segments', 
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      status: 'completed' as const
    },
    { 
      id: '3',
      action: 'Sent thank you emails', 
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      status: 'completed' as const
    }
  ];

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: currentInput,
      timestamp: new Date()
    };

    const agentResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'agent',
      content: `I'll help you with that. Let me analyze your ${currentInput.toLowerCase().includes('donor') ? 'donor data' : 'information'} and prepare a response.`,
      timestamp: new Date(),
      actions: [
        {
          id: '1',
          label: 'Analyze Data',
          type: 'data',
          status: 'running'
        },
        {
          id: '2',
          label: 'Generate Report',
          type: 'report',
          status: 'pending'
        }
      ]
    };

    setMessages(prev => [...prev, userMessage, agentResponse]);
    setCurrentInput('');
  };

  const handleQuickPrompt = (prompt: string) => {
    setCurrentInput(prompt);
  };

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}min ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  if (!isOpen) return null;

  return (
    <div className={`
      fixed right-0 top-16 h-[calc(100vh-64px)] w-96 bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 z-40
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      ${className}
    `}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-evergreen-600 rounded-lg flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">AI Agent</h3>
              <p className="text-xs text-gray-500">{kit.name} Assistant</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Chat Interface */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-evergreen-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                } rounded-lg p-3`}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {formatRelativeTime(message.timestamp)}
                  </p>
                  
                  {/* Agent Actions */}
                  {message.actions && message.actions.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.actions.map((action) => (
                        <div key={action.id} className="flex items-center gap-2 text-xs">
                          <div className={`w-2 h-2 rounded-full ${
                            action.status === 'completed' ? 'bg-green-400' :
                            action.status === 'running' ? 'bg-yellow-400 animate-pulse' :
                            action.status === 'error' ? 'bg-red-400' : 'bg-gray-400'
                          }`} />
                          <span>{action.label}</span>
                          {getActionIcon(action.type)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Prompts */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <p className="text-xs font-medium text-gray-700 mb-2">Quick prompts:</p>
          <div className="grid grid-cols-2 gap-1">
            {quickPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickPrompt(prompt)}
                className="text-xs h-8 px-2"
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Quick Action Buttons */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
          <div className="space-y-2">
            {kit.quickActions.slice(0, 3).map((action) => (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
              >
                <Play className="h-3 w-3 mr-2" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Recent Activity Log */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-700">Recent Actions</h4>
            <Button variant="ghost" size="sm" className="text-xs">
              View All
            </Button>
          </div>
          <div className="space-y-2">
            {recentActions.map((activity) => (
              <div key={activity.id} className="flex items-center gap-2 text-xs text-gray-600">
                <Activity className="h-3 w-3 flex-shrink-0" />
                <span className="flex-1 truncate">{activity.action}</span>
                <span className="text-gray-400 flex-shrink-0">
                  {formatRelativeTime(activity.timestamp)}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <Input
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="text-sm"
            />
            <Button onClick={handleSendMessage} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getActionIcon(type: AgentAction['type']) {
  switch (type) {
    case 'report':
      return <FileText className="h-3 w-3" />;
    case 'data':
      return <BarChart3 className="h-3 w-3" />;
    case 'communication':
      return <MessageCircle className="h-3 w-3" />;
    case 'automation':
      return <Zap className="h-3 w-3" />;
    default:
      return <Activity className="h-3 w-3" />;
  }
}
