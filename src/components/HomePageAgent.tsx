'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageSquare, Send, Users, Heart, Lightbulb, ArrowRight } from 'lucide-react';

interface Message {
  type: 'thinking' | 'response' | 'error';
  message: string;
  nextStep?: string;
}

const USER_TYPE_OPTIONS = [
  {
    id: 'nonprofit-leader',
    label: 'Nonprofit Leader',
    icon: Heart,
    description: 'Running an organization with social impact'
  },
  {
    id: 'thought-leader',
    label: 'Thought Leader',
    icon: Lightbulb,
    description: 'Author, speaker, or content creator'
  },
  {
    id: 'team-leader',
    label: 'Team Leader',
    icon: Users,
    description: 'Managing teams or operations'
  }
];

export function HomePageAgent() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [customInput, setCustomInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasResponded, setHasResponded] = useState(false);

  const handleSubmit = async (userType: string) => {
    if (hasResponded) return; // Only allow one response
    
    setIsLoading(true);
    setMessages([]);
    setHasResponded(true);

    try {
      const response = await fetch('/api/home-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userType }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              setIsLoading(false);
              return;
            }

            try {
              const parsed = JSON.parse(data);
              setMessages(prev => {
                // Replace thinking message with response, or add new message
                if (parsed.type === 'response' && prev.length > 0 && prev[prev.length - 1].type === 'thinking') {
                  return [...prev.slice(0, -1), parsed];
                }
                return [...prev, parsed];
              });
            } catch (e) {
              console.error('Failed to parse message:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages([{ type: 'error', message: 'Sorry, something went wrong. Please refresh and try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypeClick = (typeId: string) => {
    setSelectedType(typeId);
    handleSubmit(typeId);
  };

  const handleCustomSubmit = () => {
    if (customInput.trim()) {
      handleSubmit(customInput.trim());
      setCustomInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCustomSubmit();
    }
  };

  const reset = () => {
    setSelectedType('');
    setCustomInput('');
    setMessages([]);
    setIsLoading(false);
    setHasResponded(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-trailguide-evergreen/20 shadow-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-full mb-4">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-trailguide-neutral mb-2">
            What can TrailGuide do for you?
          </h2>
          <p className="text-trailguide-slate">
            Tell us who you are and we'll show you exactly how we can help
          </p>
        </div>

        {!hasResponded && (
          <div className="space-y-6">
            {/* Quick Selection Buttons */}
            <div className="grid md:grid-cols-3 gap-4">
              {USER_TYPE_OPTIONS.map((option) => {
                const Icon = option.icon;
                return (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="h-auto p-6 border-2 border-trailguide-sage/30 hover:border-trailguide-evergreen hover:bg-trailguide-sage/10 text-left"
                    onClick={() => handleTypeClick(option.id)}
                    disabled={isLoading}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Icon className="h-8 w-8 text-trailguide-evergreen" />
                      <div>
                        <div className="font-semibold text-trailguide-neutral">{option.label}</div>
                        <div className="text-sm text-trailguide-slate mt-1">{option.description}</div>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Custom Input */}
            <div className="relative">
              <div className="text-center text-trailguide-slate mb-4 font-medium">
                Or describe your role/industry:
              </div>
              <div className="flex gap-3">
                <Input
                  placeholder="e.g., Healthcare administrator, Small business owner, Consultant..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1 border-2 border-trailguide-sage/30 focus:border-trailguide-evergreen"
                />
                <Button 
                  onClick={handleCustomSubmit}
                  disabled={isLoading || !customInput.trim()}
                  className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Messages Area */}
        {messages.length > 0 && (
          <div className="mt-8 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className="space-y-4">
                {message.type === 'thinking' && (
                  <div className="flex items-center justify-center py-4">
                    <div className="flex items-center space-x-2 text-trailguide-slate">
                      <div className="animate-spin w-4 h-4 border-2 border-trailguide-evergreen border-t-transparent rounded-full"></div>
                      <span className="text-sm font-medium">{message.message}</span>
                    </div>
                  </div>
                )}
                
                {message.type === 'response' && (
                  <div className="bg-gradient-to-r from-trailguide-sage/10 to-trailguide-evergreen/10 border border-trailguide-evergreen/20 rounded-lg p-6">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-trailguide-neutral text-lg leading-relaxed font-medium mb-4">
                        {message.message}
                      </p>
                      {message.nextStep && (
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-trailguide-evergreen/20">
                          <p className="text-trailguide-slate font-medium">
                            Next step: {message.nextStep}
                          </p>
                          <Button 
                            className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90 ml-4"
                            onClick={() => window.location.href = '/expert-publisher-guide'}
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {message.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800">{message.message}</p>
                  </div>
                )}
              </div>
            ))}
            
            {hasResponded && (
              <div className="text-center pt-4">
                <Button 
                  variant="outline" 
                  onClick={reset}
                  className="border-trailguide-sage text-trailguide-evergreen hover:bg-trailguide-sage/10"
                >
                  Ask about a different role
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
