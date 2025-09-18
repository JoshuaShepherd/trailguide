"use client";

import React, { useState, useRef } from 'react';
import { 
  Camera, 
  Monitor, 
  Scissors, 
  Presentation,
  Play,
  Pause,
  Square,
  RotateCcw,
  Download,
  Upload,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Settings,
  Sparkles
} from 'lucide-react';

interface VideoCreatorProps {
  subtype: string;
  onSave: (content: VideoContent) => void;
}

interface VideoContent {
  title: string;
  description: string;
  type: 'talking-head' | 'screencast' | 'short-clips' | 'slide-based';
  duration: number;
  file?: File;
  thumbnail?: string;
  transcript?: string;
  tags: string[];
}

export default function VideoCreator({ subtype, onSave }: VideoCreatorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [videoData, setVideoData] = useState<Partial<VideoContent>>({
    title: '',
    description: '',
    type: subtype as VideoContent['type'],
    tags: []
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startRecording = async () => {
    try {
      let stream: MediaStream;
      
      if (subtype === 'talking-head') {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        });
      } else if (subtype === 'screencast') {
        stream = await navigator.mediaDevices.getDisplayMedia({ 
          video: true, 
          audio: true 
        });
      } else {
        // Default fallback
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        });
      }

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      setIsRecording(true);
      
      // Start timer
      const timer = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

      // Store timer reference for cleanup
      (window as any).recordingTimer = timer;
      
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Could not start recording. Please check camera/microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    setIsRecording(false);
    setIsPaused(false);
    
    // Clear timer
    if ((window as any).recordingTimer) {
      clearInterval((window as any).recordingTimer);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderTalkingHeadInterface = () => (
    <div className="space-y-6">
      <div className="bg-black rounded-lg aspect-video relative overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={false}
        />
        
        {!isRecording && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="text-center text-white">
              <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg mb-4">Ready to record your talking head video</p>
              <button 
                onClick={startRecording}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
              >
                Start Recording
              </button>
            </div>
          </div>
        )}

        {isRecording && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            REC {formatTime(recordingTime)}
          </div>
        )}
      </div>

      {isRecording && (
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="p-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700"
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
          </button>
          <button 
            onClick={stopRecording}
            className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700"
          >
            <Square className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );

  const renderScreencastInterface = () => (
    <div className="space-y-6">
      <div className="bg-gray-100 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
        <Monitor className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-semibold mb-2">Screen Recording</h3>
        <p className="text-gray-600 mb-6">
          Record your screen with audio narration. Perfect for tutorials and demos.
        </p>
        
        {!isRecording ? (
          <button 
            onClick={startRecording}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            Start Screen Recording
          </button>
        ) : (
          <div className="space-y-4">
            <div className="text-2xl font-mono text-red-600">
              Recording: {formatTime(recordingTime)}
            </div>
            <button 
              onClick={stopRecording}
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
            >
              Stop Recording
            </button>
          </div>
        )}
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">Recording Tips:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Close unnecessary applications</li>
          <li>• Use a quiet environment for clear audio</li>
          <li>• Plan your content flow beforehand</li>
          <li>• Keep recordings under 10 minutes for better engagement</li>
        </ul>
      </div>
    </div>
  );

  const renderShortClipsInterface = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
        <div className="text-center">
          <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Upload Video</h3>
          <p className="text-gray-600 mb-4">
            Upload your video to create short clips and highlights
          </p>
          <input 
            type="file" 
            accept="video/*" 
            className="hidden" 
            id="video-upload"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setVideoData(prev => ({ ...prev, file }));
              }
            }}
          />
          <label 
            htmlFor="video-upload"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer inline-block"
          >
            Choose Video File
          </label>
        </div>
      </div>

      {videoData.file && (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold mb-4">AI-Powered Clip Generation</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900">Auto-transcribe video</span>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Generate
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900">Create highlight clips</span>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Create Clips
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900">Export for social media</span>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSlideBasedInterface = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold">Script Input</h3>
          <textarea 
            placeholder="Enter your script here. AI will generate slides based on your content..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setVideoData(prev => ({ ...prev, description: e.target.value }))}
          />
          <button className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Generate Slides from Script
          </button>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Generated Slides</h3>
          <div className="bg-gray-100 rounded-lg p-6 text-center border-2 border-dashed border-gray-300 h-64">
            <Presentation className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">
              Slides will appear here after script processing
            </p>
          </div>
          <button className="w-full px-4 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 flex items-center justify-center gap-2">
            <Mic className="w-4 h-4" />
            Record Narration
          </button>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
        <h4 className="font-semibold text-indigo-900 mb-2">Slide-Based Video Workflow:</h4>
        <ol className="text-sm text-indigo-800 space-y-1 list-decimal list-inside">
          <li>Input your script or talking points</li>
          <li>AI generates slide templates</li>
          <li>Customize slides with your branding</li>
          <li>Record narration for each slide</li>
          <li>Export as complete video presentation</li>
        </ol>
      </div>
    </div>
  );

  const renderInterface = () => {
    switch (subtype) {
      case 'talking-head':
        return renderTalkingHeadInterface();
      case 'screencast':
        return renderScreencastInterface();
      case 'short-clips':
        return renderShortClipsInterface();
      case 'slide-based':
        return renderSlideBasedInterface();
      default:
        return <div>Unknown video type</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Video Metadata */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Video Title
          </label>
          <input 
            type="text" 
            value={videoData.title || ''}
            onChange={(e) => setVideoData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter video title..."
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea 
            value={videoData.description || ''}
            onChange={(e) => setVideoData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your video content..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>
      </div>

      {/* Video Creation Interface */}
      {renderInterface()}

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
          onClick={() => onSave(videoData as VideoContent)}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Save Video
        </button>
      </div>
    </div>
  );
}
