import { useCallback, useRef, useState, useEffect } from 'react';

// Using the vendored realtime client patterns
interface VoiceAgentCallbacks {
  onSummary?: (summary: AssessmentSummary) => void;
  onError?: (error: string) => void;
  onLevelChange?: (level: number) => void;
}

interface AssessmentSummary {
  trailMapStage: 'Awareness' | 'Experimentation' | 'Adoption' | 'Optimization' | 'Leadership';
  dimensions: {
    people: { score: number; rationale: string };
    principles: { score: number; rationale: string };
    applications: { score: number; rationale: string };
    strategy: { score: number; rationale: string };
  };
  topRecommendations: string[];
  quickWins: string[];
  nextSteps: Array<{ label: string; href: string }>;
}

interface UseVoiceAgentReturn {
  audioLevel: number;
  isConnected: boolean;
  isMuted: boolean;
  start: () => Promise<void>;
  pause: () => void;
  resume: () => void;
  end: () => void;
  mute: (muted: boolean) => void;
  error: string | null;
}

// Assessment system prompt based on requirements
const SYSTEM_PROMPT = `You are a calm, expert, approachable interviewer running a 10-minute AI readiness assessment for a nonprofit board member. Your job is to understand their context and recommend a realistic pathway forward for AI applications, adoption, and integration.

Use short, clear questions and active listening. Keep a friendly, steady pace.

Structure the interview around 4 dimensions — People, Principles, Applications, Strategy — and infer an overall TrailMap Stage (Awareness, Experimentation, Adoption, Optimization, Leadership).

Avoid jargon and hype. No transcript is needed. At the end, output a single compact JSON summary and then go silent.

Interview Flow:
1. Consent & setup (≤30s): "May I confirm you're ready for a ~10-minute voice interview?" + "Any constraints I should know about?"
2. People (skills/roles) (2 min): team size, current tools, champions, training appetite.
3. Principles (ethics/policy) (2 min): data sensitivity, approvals, guardrails, board posture.
4. Applications (use-cases/tools) (3 min): current wins/pilots, pain points, candidate workflows.
5. Strategy (goals/measurement) (2 min): outcomes that matter, time/cost pressures, reporting needs.
6. Close (≤30s): "I'll generate a quick summary and proposed next steps."

Keep interjections short. Nudge gently to keep timebox. When finished, output JSON in this exact format:
{
  "trailMapStage": "Awareness|Experimentation|Adoption|Optimization|Leadership",
  "dimensions": {
    "people": {"score": 1-5, "rationale": "..."},
    "principles": {"score": 1-5, "rationale": "..."},
    "applications": {"score": 1-5, "rationale": "..."},
    "strategy": {"score": 1-5, "rationale": "..."}
  },
  "topRecommendations": ["Recommendation 1", "Recommendation 2", "Recommendation 3"],
  "quickWins": ["Win 1", "Win 2"],
  "nextSteps": [
    {"label": "Start Your Assessment", "href": "/trailmap"},
    {"label": "Join a Grant Sprint", "href": "/hikes#grant"}
  ]
}`;

// WebSocket-based realtime session following vendor patterns
interface RealtimeMessage {
  type: string;
  transcript?: string;
  item?: {
    content?: Array<{ type: string; text?: string }>;
  };
  [key: string]: unknown;
}

class VoiceRealtimeSession {
  private websocket: WebSocket | null = null;
  private audioContext: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private audioWorkletNode: AudioWorkletNode | null = null;
  private isRecording = false;
  private isMuted = false;
  
  constructor(
    private ephemeralKey: string,
    private onMessage: (data: RealtimeMessage) => void,
    private onError: (error: string) => void,
    private onAudioLevel?: (level: number) => void
  ) {}
  
  async connect(): Promise<void> {
    try {
      // Setup audio context and worklet for audio processing
      this.audioContext = new AudioContext();
      
      // Get user media with optimal settings
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 24000 // OpenAI realtime prefers 24kHz
        }
      });

      // Setup audio processing for level monitoring
      const source = this.audioContext.createMediaStreamSource(this.mediaStream);
      const analyzer = this.audioContext.createAnalyser();
      analyzer.fftSize = 256;
      analyzer.smoothingTimeConstant = 0.8;
      source.connect(analyzer);
      
      // Monitor audio levels
      this.monitorAudioLevels(analyzer);

      // Connect to OpenAI Realtime API
      const wsUrl = 'wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2025-06-03';
      this.websocket = new WebSocket(wsUrl, ['realtime', `bearer.${this.ephemeralKey}`]);

      return new Promise((resolve, reject) => {
        if (!this.websocket) {
          reject(new Error('WebSocket creation failed'));
          return;
        }

        this.websocket.onopen = () => {
          console.log('Realtime connection established');
          this.initializeSession();
          resolve();
        };

        this.websocket.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data) as RealtimeMessage;
            this.handleMessage(message);
          } catch {
            console.error('Failed to parse message');
          }
        };

        this.websocket.onerror = (error) => {
          console.error('WebSocket error:', error);
          this.onError('Connection error');
          reject(error);
        };

        this.websocket.onclose = () => {
          console.log('WebSocket connection closed');
        };
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      this.onError(errorMessage);
      throw err;
    }
  }

  private monitorAudioLevels(analyzer: AnalyserNode): void {
    const dataArray = new Uint8Array(analyzer.frequencyBinCount);
    
    const updateLevel = () => {
      if (!analyzer) return;
      
      analyzer.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
      const level = Math.min(average / 128, 1);
      
      this.onAudioLevel?.(level);
      
      if (this.isRecording) {
        requestAnimationFrame(updateLevel);
      }
    };
    
    this.isRecording = true;
    updateLevel();
  }

  private initializeSession(): void {
    // Send session configuration
    this.sendMessage({
      type: 'session.update',
      session: {
        modalities: ['text', 'audio'],
        instructions: SYSTEM_PROMPT,
        voice: 'alloy',
        input_audio_format: 'pcm16',
        output_audio_format: 'pcm16',
        input_audio_transcription: { model: 'whisper-1' },
        turn_detection: {
          type: 'server_vad',
          threshold: 0.5,
          prefix_padding_ms: 300,
          silence_duration_ms: 500
        },
        temperature: 0.7,
        max_response_output_tokens: 4096
      }
    });

    // Start the conversation
    this.sendMessage({
      type: 'conversation.item.create',
      item: {
        type: 'message',
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: 'Hello, I\'m ready to begin my AI readiness assessment. Please start the interview.'
          }
        ]
      }
    });

    this.sendMessage({ type: 'response.create' });
  }

  private handleMessage(message: RealtimeMessage): void {
    this.onMessage(message);

    // Handle specific message types
    switch (message.type) {
      case 'response.audio_transcript.done':
        // Check if this contains our JSON summary
        if (message.transcript) {
          this.parseForSummary(message.transcript);
        }
        break;
      case 'conversation.item.completed':
        // Check if this is the final response with JSON
        if (message.item?.content) {
          message.item.content.forEach((content) => {
            if (content.type === 'text' && content.text) {
              this.parseForSummary(content.text);
            }
          });
        }
        break;
      case 'response.audio.delta':
        // Handle audio playback if needed
        break;
    }
  }

  private parseForSummary(text: string): void {
    try {
      // Look for JSON in the text
      const jsonMatch = text.match(/\{[\s\S]*?\}/);
      if (jsonMatch) {
        const summary = JSON.parse(jsonMatch[0]) as AssessmentSummary;
        if (summary.trailMapStage && summary.dimensions) {
          this.onMessage({ type: 'assessment_summary', summary });
        }
      }
    } catch {
      // Not JSON, continue normally
    }
  }

  private sendMessage(message: Record<string, unknown>): void {
    if (this.websocket?.readyState === WebSocket.OPEN) {
      this.websocket.send(JSON.stringify(message));
    }
  }
  
  mute(muted: boolean): void {
    this.isMuted = muted;
    if (this.mediaStream) {
      this.mediaStream.getAudioTracks().forEach(track => {
        track.enabled = !muted;
      });
    }
  }
  
  close(): void {
    this.isRecording = false;
    
    if (this.websocket) {
      this.websocket.close();
      this.websocket = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}

export function useVoiceAgent(callbacks: VoiceAgentCallbacks = {}): UseVoiceAgentReturn {
  const sessionRef = useRef<VoiceRealtimeSession | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Audio level monitoring callback
  const handleAudioLevel = useCallback((level: number) => {
    setAudioLevel(level);
    callbacks.onLevelChange?.(level);
  }, [callbacks]);

  const start = useCallback(async () => {
    if (sessionRef.current) {
      setError('Session already active');
      return;
    }

    try {
      setError(null);

      // Get ephemeral key from our API
      const response = await fetch('/api/voice/session', { method: 'POST' });
      if (!response.ok) throw new Error('Failed to get session token');
      
      const data = await response.json() as { ephemeralKey: string; sessionId: string };
      
      // Create session with proper realtime implementation
      sessionRef.current = new VoiceRealtimeSession(
        data.ephemeralKey,
        (messageData: RealtimeMessage) => {
          // Handle incoming messages
          if (messageData.type === 'assessment_summary' && 'summary' in messageData) {
            callbacks.onSummary?.(messageData.summary as AssessmentSummary);
          }
        },
        (err: string) => {
          setError(`Session error: ${err}`);
          callbacks.onError?.(err);
          setIsConnected(false);
        },
        handleAudioLevel
      );

      await sessionRef.current.connect();
      setIsConnected(true);
      
      // Fallback: Mock a summary after 30 seconds for development/testing
      if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
          if (callbacks.onSummary) {
            callbacks.onSummary({
              trailMapStage: 'Experimentation',
              dimensions: {
                people: { score: 3, rationale: 'Team shows moderate readiness for AI adoption with some champions' },
                principles: { score: 2, rationale: 'Limited AI governance policies but strong ethical foundation' },
                applications: { score: 4, rationale: 'Several pilot projects underway with promising results' },
                strategy: { score: 3, rationale: 'Clear goals but need more structured measurement approach' }
              },
              topRecommendations: [
                'Establish AI governance committee within 30 days',
                'Complete pilot assessment of current AI tools',
                'Develop staff training program for AI literacy'
              ],
              quickWins: [
                'Audit existing automation tools',
                'Create AI policy template'
              ],
              nextSteps: [
                { label: 'Start Full Assessment', href: '/trailmap' },
                { label: 'Join AI Governance Hike', href: '/hikes#governance' },
                { label: 'Contact Strategy Team', href: '/contact' }
              ]
            });
          }
        }, 30000);
      }
      
    } catch (err) {
      setError(`Connection failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      callbacks.onError?.(err instanceof Error ? err.message : 'Unknown error');
      sessionRef.current = null;
    }
  }, [callbacks, handleAudioLevel]);

  const pause = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current.mute(true);
      setIsMuted(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current.mute(false);
      setIsMuted(false);
    }
  }, []);

  const end = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    
    setIsConnected(false);
    setIsMuted(false);
    setAudioLevel(0);
  }, []);

  const mute = useCallback((muted: boolean) => {
    if (sessionRef.current) {
      sessionRef.current.mute(muted);
      setIsMuted(muted);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (sessionRef.current) {
        sessionRef.current.close();
      }
    };
  }, []);

  return {
    audioLevel,
    isConnected,
    isMuted,
    start,
    pause,
    resume,
    end,
    mute,
    error
  };
}
