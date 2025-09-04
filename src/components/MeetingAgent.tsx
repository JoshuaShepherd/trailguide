'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  MicOff, 
  Square, 
  Play,
  AlertCircle,
  CheckCircle2,
  Clock,
  Brain,
  FileText,
  Target,
  ArrowRight
} from 'lucide-react';

interface Analysis {
  summary: string;
  keyDecisions: string[];
  actionItems: string[];
  decisionQuality: 'complete' | 'partial' | 'insufficient';
  coaching: string;
  nextSteps: string;
}

interface MeetingAgentProps {
  agendaItem: string;
  itemId: string;
}

export function MeetingAgent({ agendaItem, itemId }: MeetingAgentProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startListening = async () => {
    try {
      setError(null);
      setAnalysis(null);
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = handleRecordingStop;
      
      mediaRecorder.start(1000); // Collect data every second
      setIsListening(true);
      setRecordingTime(0);
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (err) {
      setError('Could not access microphone. Please check permissions.');
      console.error('Microphone access error:', err);
    }
  };

  const stopListening = () => {
    if (mediaRecorderRef.current && isListening) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsListening(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleRecordingStop = async () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    
    // For demo purposes, we'll use realistic conversation examples
    // In a real implementation, you'd use a speech-to-text service like OpenAI Whisper
    const { getRandomTranscription } = await import('@/lib/demoTranscriptions');
    const simulatedTranscription = getRandomTranscription(itemId);
    
    setTranscription(simulatedTranscription);
    await analyzeTranscription(simulatedTranscription);
  };

  const analyzeTranscription = async (transcriptionText: string) => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch('/api/meeting-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transcription: transcriptionText,
          agendaItem: agendaItem
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze meeting');
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
              setIsAnalyzing(false);
              return;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.type === 'analysis') {
                setAnalysis(parsed.analysis);
              }
            } catch (e) {
              console.error('Failed to parse analysis:', e);
            }
          }
        }
      }
    } catch (err) {
      setError('Failed to analyze meeting. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'complete': return 'bg-green-100 text-green-800 border-green-200';
      case 'partial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'insufficient': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case 'complete': return <CheckCircle2 className="h-4 w-4" />;
      case 'partial': return <Clock className="h-4 w-4" />;
      case 'insufficient': return <AlertCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">AI Meeting Agent</h4>
              <p className="text-sm text-gray-600">Dictation & Decision Coaching</p>
            </div>
          </div>
          
          {/* Recording Controls */}
          <div className="flex items-center space-x-3">
            {isListening && (
              <div className="flex items-center space-x-2 text-red-600">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm">{formatTime(recordingTime)}</span>
              </div>
            )}
            
            <Button
              onClick={isListening ? stopListening : startListening}
              disabled={isAnalyzing}
              className={`${
                isListening 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-red-500 hover:bg-red-600'
              } text-white`}
            >
              {isListening ? (
                <>
                  <Square className="h-4 w-4 mr-2" />
                  Stop & Analyze
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4 mr-2" />
                  Start Listening
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Status Messages */}
        {isAnalyzing && (
          <div className="flex items-center justify-center py-4 text-orange-600">
            <div className="animate-spin w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full mr-2"></div>
            <span className="text-sm font-medium">Analyzing discussion quality...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-4">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              {error}
            </div>
          </div>
        )}

        {/* Transcription Display */}
        {transcription && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FileText className="h-4 w-4 mr-2 text-gray-600" />
              <span className="font-medium text-gray-900">Meeting Transcription</span>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border text-sm text-gray-700 max-h-32 overflow-y-auto">
              {transcription}
            </div>
          </div>
        )}

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            
            {/* Decision Quality Assessment */}
            <div className="flex items-center justify-between p-4 bg-white/80 rounded-lg border">
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">Decision Quality</span>
              </div>
              <Badge className={`${getQualityColor(analysis.decisionQuality)} border`}>
                <div className="flex items-center space-x-1">
                  {getQualityIcon(analysis.decisionQuality)}
                  <span className="capitalize">{analysis.decisionQuality}</span>
                </div>
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Summary & Decisions */}
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Discussion Summary</h5>
                  <p className="text-sm text-gray-700 bg-white/60 p-3 rounded">
                    {analysis.summary}
                  </p>
                </div>
                
                {analysis.keyDecisions.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Decisions</h5>
                    <ul className="space-y-1">
                      {analysis.keyDecisions.map((decision, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Items & Coaching */}
              <div className="space-y-4">
                {analysis.actionItems.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Action Items</h5>
                    <ul className="space-y-1">
                      {analysis.actionItems.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <ArrowRight className="h-3 w-3 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Coaching Feedback</h5>
                  <p className="text-sm text-gray-700 bg-orange-50 border border-orange-200 p-3 rounded">
                    {analysis.coaching}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Play className="h-4 w-4 mr-2 text-blue-600" />
                Recommended Next Steps
              </h5>
              <p className="text-sm text-gray-700">{analysis.nextSteps}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
