'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mic, MicOff, Play, Pause, Square, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useVoiceAgent } from './hooks/useVoiceAgent';

// Types for the assessment summary
interface DimensionScore {
  score: number;
  rationale: string;
}

interface AssessmentSummary {
  trailMapStage: 'Awareness' | 'Experimentation' | 'Adoption' | 'Optimization' | 'Leadership';
  dimensions: {
    people: DimensionScore;
    principles: DimensionScore;
    applications: DimensionScore;
    strategy: DimensionScore;
  };
  topRecommendations: string[];
  quickWins: string[];
  nextSteps: Array<{ label: string; href: string }>;
}

// Voice agent states
type VoiceState = 'idle' | 'connecting' | 'live' | 'paused' | 'ending' | 'ended' | 'summarizing' | 'summaryReady';

export default function AgentAssessmentPage() {
  const [state, setState] = useState<VoiceState>('idle');
  const [timer, setTimer] = useState(0);
  const [summary, setSummary] = useState<AssessmentSummary | null>(null);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'pending'>('pending');

  const {
    audioLevel,
    isMuted,
    start,
    pause,
    resume,
    end,
    mute,
    error
  } = useVoiceAgent({
    onSummary: (summaryData: AssessmentSummary) => {
      setSummary(summaryData);
      setState('summaryReady');
    },
    onError: (err: string) => {
      console.error('Voice agent error:', err);
      setState('idle');
    }
  });

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (state === 'live') {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev >= 600) { // 10 minutes = 600 seconds
            setState('ending');
            end();
            return 600;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state, end]);

  // Check microphone permission on mount
  useEffect(() => {
    navigator.permissions.query({ name: 'microphone' as PermissionName })
      .then(result => {
        setMicPermission(result.state === 'granted' ? 'granted' : 'denied');
      })
      .catch(() => setMicPermission('denied'));
  }, []);

  const requestMicPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          echoCancellation: true, 
          noiseSuppression: true, 
          autoGainControl: true 
        } 
      });
      setMicPermission('granted');
    } catch (err) {
      setMicPermission('denied');
      console.error('Microphone permission denied:', err);
    }
  };

  const handleStart = useCallback(async () => {
    if (micPermission !== 'granted') {
      await requestMicPermission();
      return;
    }
    
    setState('connecting');
    setTimer(0);
    try {
      await start();
      setState('live');
    } catch (err) {
      setState('idle');
      console.error('Failed to start session:', err);
    }
  }, [micPermission, start]);

  const handlePause = useCallback(() => {
    setState('paused');
    pause();
  }, [pause]);

  const handleResume = useCallback(() => {
    setState('live');
    resume();
  }, [resume]);

  const handleEnd = useCallback(() => {
    setState('ending');
    setTimeout(() => {
      setState('summarizing');
      end();
    }, 1000);
  }, [end]);

  const handleMute = useCallback(() => {
    mute(!isMuted);
  }, [mute, isMuted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusBadge = () => {
    switch (state) {
      case 'connecting':
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse mr-2" />
            Connecting
          </Badge>
        );
      case 'live':
        return (
          <Badge className="bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
            Live
          </Badge>
        );
      case 'paused':
        return (
          <Badge className="bg-amber-100 text-amber-800">
            <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
            Paused
          </Badge>
        );
      case 'ending':
      case 'ended':
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-2" />
            Ended
          </Badge>
        );
      case 'summarizing':
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-2" />
            Generating Summary
          </Badge>
        );
      case 'summaryReady':
        return (
          <Badge className="bg-purple-100 text-purple-800">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
            Complete
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            Ready to Start
          </Badge>
        );
    }
  };

  const getStageColor = (stage: string) => {
    const colors = {
      'Awareness': 'bg-red-100 text-red-800',
      'Experimentation': 'bg-yellow-100 text-yellow-800',
      'Adoption': 'bg-blue-100 text-blue-800',
      'Optimization': 'bg-green-100 text-green-800',
      'Leadership': 'bg-purple-100 text-purple-800'
    };
    return colors[stage as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ALLOW_INDEX !== '1') {
    return (
      <div className="min-h-screen bg-trailguide-background flex items-center justify-center p-4">
        <Card className="max-w-md text-center">
          <CardContent className="p-6">
            <h1 className="text-xl font-semibold text-trailguide-evergreen mb-4">
              Voice Assessment
            </h1>
            <p className="text-trailguide-slate">
              This feature is currently in development and not publicly available.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-trailguide-background">
      {/* Header */}
      <header className="border-b border-trailguide-border bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-trailguide-evergreen">
              AI Voice Assessment
            </h1>
          </div>
          {getStatusBadge()}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <p className="text-trailguide-slate mb-2">
            Speak naturally—this is a live conversation. We&apos;ll wrap at ten minutes.
          </p>
          <p className="text-sm text-trailguide-slate">
            A 10-minute, live voice interview to map your AI pathway forward.
          </p>
        </div>

        {/* Call Card */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardContent className="p-8 text-center">
            {/* Status announcement for screen readers */}
            <div aria-live="polite" className="sr-only">
              {state === 'idle' && "Ready to begin your assessment"}
              {state === 'connecting' && "Connecting to your AI interviewer"}
              {state === 'live' && "Voice assessment is live and recording"}
              {state === 'paused' && "Assessment is paused"}
              {state === 'summarizing' && "Generating your assessment summary"}
              {state === 'summaryReady' && "Assessment complete, summary is ready"}
            </div>

            {/* Microphone Permission Gate */}
            {micPermission !== 'granted' && state === 'idle' && (
              <div className="space-y-4">
                <div 
                  className="w-24 h-24 bg-trailguide-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  role="img"
                  aria-label="Microphone icon"
                >
                  <Mic className="w-12 h-12 text-trailguide-evergreen" />
                </div>
                <h3 className="text-lg font-semibold text-trailguide-evergreen mb-2">
                  Enable Microphone
                </h3>
                <p className="text-trailguide-slate mb-6">
                  We need access to your microphone to conduct the voice assessment.
                </p>
                <Button 
                  onClick={requestMicPermission}
                  className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                  aria-describedby="mic-help"
                >
                  <Mic className="w-4 h-4 mr-2" aria-hidden="true" />
                  Allow Microphone Access
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                  <p id="mic-help" className="text-xs text-trailguide-slate">
                    Having trouble with microphone access?
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <HelpCircle className="w-4 h-4 text-trailguide-slate" />
                        <span className="sr-only">Get help with microphone access</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Microphone Access Help</DialogTitle>
                        <DialogDescription asChild>
                          <div className="space-y-4 text-sm">
                            <div>
                              <h4 className="font-medium">If your browser blocked the microphone:</h4>
                              <ol className="list-decimal list-inside mt-2 space-y-1">
                                <li>Look for a microphone icon in your browser&apos;s address bar</li>
                                <li>Click it and select &quot;Always allow&quot; for this site</li>
                                <li>Refresh the page and try again</li>
                              </ol>
                            </div>
                            <div>
                              <h4 className="font-medium">Alternative method:</h4>
                              <ol className="list-decimal list-inside mt-2 space-y-1">
                                <li>Go to your browser settings</li>
                                <li>Find &quot;Privacy and Security&quot; → &quot;Site Settings&quot;</li>
                                <li>Look for &quot;Microphone&quot; and allow access for this site</li>
                              </ol>
                            </div>
                            <div>
                              <h4 className="font-medium">Still having issues?</h4>
                              <p>Make sure your microphone is connected and not being used by other applications.</p>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )}

            {/* Voice Interface */}
            {micPermission === 'granted' && state !== 'summaryReady' && (
              <div className="space-y-6">
                {/* VU Meter */}
                <div className="relative w-32 h-32 mx-auto">
                  <div 
                    className={cn(
                      "w-32 h-32 rounded-full border-4 transition-all duration-75",
                      state === 'live' 
                        ? "border-trailguide-evergreen" 
                        : "border-gray-300"
                    )}
                    style={{
                      borderWidth: state === 'live' 
                        ? `${4 + (audioLevel * 8)}px` 
                        : '4px'
                    }}
                    role="img"
                    aria-label={`Microphone visualizer showing ${state === 'live' ? 'active' : 'inactive'} voice activity`}
                  >
                    <div className="w-full h-full rounded-full bg-trailguide-evergreen/10 flex items-center justify-center">
                      {isMuted ? (
                        <MicOff className="w-8 h-8 text-gray-400" aria-label="Microphone muted" />
                      ) : (
                        <Mic className="w-8 h-8 text-trailguide-evergreen" aria-label="Microphone active" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Audio Level Bars */}
                {state === 'live' && (
                  <div 
                    className="flex items-center justify-center gap-1 h-8"
                    role="img"
                    aria-label="Audio level indicator"
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-1 rounded-full transition-all duration-75",
                          audioLevel > i / 12 
                            ? "bg-trailguide-evergreen h-6" 
                            : "bg-gray-200 h-2"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}

                {/* Timer and Progress */}
                <div className="space-y-2">
                  <div 
                    className="text-3xl font-bold text-trailguide-evergreen"
                    aria-label={`Assessment time: ${formatTime(timer)}`}
                  >
                    {formatTime(timer)}
                  </div>
                  <div 
                    className="w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden"
                    role="progressbar"
                    aria-valuenow={timer}
                    aria-valuemin={0}
                    aria-valuemax={600}
                    aria-label="Assessment progress"
                  >
                    <div 
                      className="h-full bg-trailguide-evergreen rounded-full transition-all duration-300"
                      style={{ width: `${(timer / 600) * 100}%` }}
                    />
                  </div>
                  {timer >= 570 && state === 'live' && (
                    <p className="text-sm text-trailguide-bronze" role="status">
                      Wrapping soon...
                    </p>
                  )}
                </div>

                {/* Status Text */}
                <p className="text-trailguide-slate" role="status" aria-live="polite">
                  {state === 'idle' && "Ready to begin your assessment"}
                  {state === 'connecting' && "Connecting to your AI interviewer..."}
                  {state === 'live' && "You&apos;re connected. Speak naturally—this is a real-time conversation."}
                  {state === 'paused' && "Session paused. Click Resume to continue."}
                  {state === 'ending' && "Wrapping up the session..."}
                  {state === 'summarizing' && "Generating your assessment summary..."}
                </p>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  {state === 'idle' && (
                    <Button 
                      onClick={handleStart}
                      className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Assessment
                    </Button>
                  )}
                  
                  {state === 'live' && (
                    <>
                      <Button 
                        onClick={handlePause}
                        variant="outline"
                        className="border-trailguide-evergreen text-trailguide-evergreen"
                      >
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </Button>
                      <Button 
                        onClick={handleMute}
                        variant="outline"
                        className={isMuted ? "bg-red-50 border-red-300" : ""}
                      >
                        {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                      <Button 
                        onClick={handleEnd}
                        variant="destructive"
                      >
                        <Square className="w-4 h-4 mr-2" />
                        End Early
                      </Button>
                    </>
                  )}

                  {state === 'paused' && (
                    <Button 
                      onClick={handleResume}
                      className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-red-600 text-sm mt-4">
                Error: {error}
              </div>
            )}
          </CardContent>
        </Card>

        {/* After-Call Summary Panel */}
        {state === 'summaryReady' && summary && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-xl text-trailguide-evergreen">
                Assessment Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* TrailMap Stage */}
              <div className="text-center">
                <h3 className="font-semibold mb-2">Your Recommended TrailMap Stage</h3>
                <Badge className={cn("text-base px-4 py-2", getStageColor(summary.trailMapStage))}>
                  {summary.trailMapStage}
                </Badge>
              </div>

              <Separator />

              {/* Dimensions */}
              <div>
                <h3 className="font-semibold mb-4">Assessment Dimensions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(summary.dimensions).map(([key, dimension]) => (
                    <Card key={key} className="border-trailguide-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium capitalize text-trailguide-evergreen">
                            {key}
                          </h4>
                          <Badge variant="outline">
                            {dimension.score}/5
                          </Badge>
                        </div>
                        <p className="text-sm text-trailguide-slate">
                          {dimension.rationale}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Top Recommendations</h3>
                  <ul className="space-y-2">
                    {summary.topRecommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-trailguide-evergreen rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-trailguide-slate">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Quick Wins</h3>
                  <ul className="space-y-2">
                    {summary.quickWins.map((win, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-trailguide-bronze rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-trailguide-slate">{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator />

              {/* Next Steps */}
              <div className="text-center space-y-4">
                <h3 className="font-semibold">Next Steps</h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {summary.nextSteps.map((step, index) => (
                    <Button 
                      key={index}
                      asChild
                      className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90"
                    >
                      <a href={step.href}>{step.label}</a>
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Save Options */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      localStorage.setItem('trailguide-assessment', JSON.stringify(summary));
                      alert('Summary saved to your browser storage!');
                    }}
                  >
                    Save Summary Locally
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/assessments', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(summary)
                        });
                        if (response.ok) {
                          alert('Summary saved to server!');
                        } else {
                          alert('Failed to save to server');
                        }
                      } catch {
                        alert('Failed to save to server');
                      }
                    }}
                  >
                    Save to Server
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setState('idle');
                      setSummary(null);
                      setTimer(0);
                    }}
                  >
                    Start Over
                  </Button>
                </div>
                <p className="text-xs text-trailguide-slate">
                  We do not store your audio—only this summary.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Privacy Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-trailguide-slate">
            Privacy Notice: We don&apos;t store audio. We only keep the end-of-call summary (if you choose).
          </p>
        </div>
      </main>
    </div>
  );
}
