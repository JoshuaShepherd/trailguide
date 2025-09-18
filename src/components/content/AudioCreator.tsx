"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Square, 
  Download,
  Upload,
  Volume2,
  Settings,
  Sparkles,
  Radio,
  User,
  Clock,
  FileAudio
} from 'lucide-react';

interface AudioCreatorProps {
  subtype: string;
  onSave: (content: AudioContent) => void;
}

interface AudioContent {
  title: string;
  description: string;
  type: 'podcast' | 'voice-note' | 'audiogram' | 'interview';
  duration: number;
  file?: File;
  transcript?: string;
  tags: string[];
  showNotes?: string;
}

export default function AudioCreator({ subtype, onSave }: AudioCreatorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioData, setAudioData] = useState<Partial<AudioContent>>({
    title: '',
    description: '',
    type: subtype as AudioContent['type'],
    tags: [],
    showNotes: ''
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Could not start recording. Please check microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const playAudio = () => {
    if (audioBlob && audioRef.current) {
      const url = URL.createObjectURL(audioBlob);
      audioRef.current.src = url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const downloadAudio = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${audioData.title || 'recording'}.wav`;
      a.click();
    }
  };

  const renderPodcastInterface = () => (
    <div className="space-y-6">
      {/* Recording Interface */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-200">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
            {isRecording ? (
              <div className="relative">
                <Mic className="w-16 h-16 text-red-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <Mic className="w-16 h-16 text-gray-400" />
            )}
          </div>

          {isRecording ? (
            <div className="space-y-4">
              <div className="text-3xl font-mono text-red-600">
                {formatTime(recordingTime)}
              </div>
              <button 
                onClick={stopRecording}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
              >
                <Square className="w-5 h-5 inline mr-2" />
                Stop Recording
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">Ready to record your podcast episode</p>
              <button 
                onClick={startRecording}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
              >
                <Mic className="w-5 h-5 inline mr-2" />
                Start Recording
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Audio Playback */}
      {audioBlob && (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold mb-4">Recording Playback</h4>
          <div className="flex items-center gap-4">
            <button 
              onClick={isPlaying ? pauseAudio : playAudio}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <button 
              onClick={downloadAudio}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>
      )}

      {/* Show Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Show Notes
        </label>
        <textarea 
          value={audioData.showNotes || ''}
          onChange={(e) => setAudioData(prev => ({ ...prev, showNotes: e.target.value }))}
          placeholder="Add episode show notes, links, and key takeaways..."
          className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );

  const renderVoiceNoteInterface = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
        <div className="text-center">
          <Mic className="w-12 h-12 mx-auto mb-4 text-orange-600" />
          <h3 className="text-lg font-semibold mb-2">Quick Voice Note</h3>
          <p className="text-gray-600 mb-4">Record a quick voice message or thought</p>
          
          {!isRecording ? (
            <button 
              onClick={startRecording}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Start Recording
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-2xl font-mono text-orange-600">
                {formatTime(recordingTime)}
              </div>
              <button 
                onClick={stopRecording}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Stop
              </button>
            </div>
          )}
        </div>
      </div>

      {audioBlob && (
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={isPlaying ? pauseAudio : playAudio}
                className="p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <span className="text-sm text-gray-600">Voice Note • {formatTime(recordingTime)}</span>
            </div>
            <button 
              onClick={downloadAudio}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>
      )}
    </div>
  );

  const renderAudiogramInterface = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
        <h3 className="text-lg font-semibold mb-4">Create Audiogram</h3>
        <p className="text-gray-600 mb-6">
          Upload audio or record new content to create visual audiograms for social media
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center p-6 border-2 border-dashed border-purple-300 rounded-lg">
            <Upload className="w-12 h-12 mx-auto mb-3 text-purple-400" />
            <p className="text-sm text-purple-700 mb-3">Upload Audio File</p>
            <input 
              type="file" 
              accept="audio/*" 
              className="hidden" 
              id="audio-upload"
            />
            <label 
              htmlFor="audio-upload"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 cursor-pointer text-sm"
            >
              Choose File
            </label>
          </div>
          
          <div className="text-center p-6 border-2 border-dashed border-purple-300 rounded-lg">
            <Mic className="w-12 h-12 mx-auto mb-3 text-purple-400" />
            <p className="text-sm text-purple-700 mb-3">Record New Audio</p>
            <button 
              onClick={startRecording}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
            >
              Start Recording
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold mb-4">Audiogram Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <div className="w-full aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-3"></div>
            <p className="text-sm font-medium">Square (1:1)</p>
            <p className="text-xs text-gray-500">Instagram Post</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <div className="w-full aspect-video bg-gradient-to-br from-green-400 to-blue-600 rounded-lg mb-3"></div>
            <p className="text-sm font-medium">Landscape (16:9)</p>
            <p className="text-xs text-gray-500">YouTube, LinkedIn</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <div className="w-full aspect-[9/16] bg-gradient-to-br from-pink-400 to-red-600 rounded-lg mb-3"></div>
            <p className="text-sm font-medium">Vertical (9:16)</p>
            <p className="text-xs text-gray-500">Instagram Stories, TikTok</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInterviewInterface = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <div className="flex items-center gap-3 mb-4">
          <User className="w-6 h-6 text-indigo-600" />
          <h3 className="text-lg font-semibold">Interview Setup</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guest Name
            </label>
            <input 
              type="text" 
              placeholder="Enter guest name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interview Topic
            </label>
            <input 
              type="text" 
              placeholder="Main interview topic..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prepared Questions
          </label>
          <textarea 
            placeholder="List your interview questions..."
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="text-center">
        {!isRecording ? (
          <button 
            onClick={startRecording}
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
          >
            <Radio className="w-5 h-5 inline mr-2" />
            Start Interview Recording
          </button>
        ) : (
          <div className="space-y-4">
            <div className="text-3xl font-mono text-indigo-600">
              Recording: {formatTime(recordingTime)}
            </div>
            <button 
              onClick={stopRecording}
              className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
            >
              End Interview
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderInterface = () => {
    switch (subtype) {
      case 'podcast':
        return renderPodcastInterface();
      case 'voice-note':
        return renderVoiceNoteInterface();
      case 'audiogram':
        return renderAudiogramInterface();
      case 'interview':
        return renderInterviewInterface();
      default:
        return <div>Unknown audio type</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Audio Metadata */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input 
            type="text" 
            value={audioData.title || ''}
            onChange={(e) => setAudioData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter audio title..."
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea 
            value={audioData.description || ''}
            onChange={(e) => setAudioData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your audio content..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={3}
          />
        </div>
      </div>

      {/* Audio Creation Interface */}
      {renderInterface()}

      {/* AI Enhancement Options */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          AI Audio Enhancement
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
            <h5 className="font-medium text-purple-900">Auto-Transcribe</h5>
            <p className="text-sm text-purple-700 mt-1">Generate text transcript</p>
          </button>
          
          <button className="p-4 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
            <h5 className="font-medium text-purple-900">Noise Reduction</h5>
            <p className="text-sm text-purple-700 mt-1">Remove background noise</p>
          </button>
          
          <button className="p-4 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
            <h5 className="font-medium text-purple-900">Auto-Edit</h5>
            <p className="text-sm text-purple-700 mt-1">Remove filler words</p>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            Save Draft
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Preview
          </button>
        </div>
        
        <button 
          onClick={() => onSave(audioData as AudioContent)}
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
        >
          Save Audio
        </button>
      </div>
    </div>
  );
}
