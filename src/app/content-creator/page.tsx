"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  Mic, 
  Image, 
  GraduationCap,
  Plus,
  Search,
  Bell,
  User,
  FileEdit,
  Eye,
  BarChart3,
  Layout,
  HelpCircle,
  Play,
  Camera,
  Monitor,
  Scissors,
  Presentation,
  Volume2,
  Radio,
  PaintBucket,
  Layers,
  BookOpen,
  Settings
} from 'lucide-react';
import BlogEditor from '@/components/content/BlogEditor';
import VideoCreator from '@/components/content/VideoCreator';
import AudioCreator from '@/components/content/AudioCreator';
import VisualCreator from '@/components/content/VisualCreator';
import LearningCreator from '@/components/content/LearningCreator';

// Content type definitions
const contentTypes = [
  {
    id: 'blog',
    title: 'Blog/Article',
    description: 'Rich text content with AI assistance',
    icon: FileText,
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    subtypes: ['Article', 'Newsletter', 'Press Release', 'Case Study']
  },
  {
    id: 'video',
    title: 'Video Content',
    description: 'Multiple video formats for engagement',
    icon: Video,
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    subtypes: ['Talking Head', 'Screencast', 'Short Clips', 'Slide-Based']
  },
  {
    id: 'audio',
    title: 'Audio/Podcast',
    description: 'Voice content and audiogram creation',
    icon: Mic,
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
    subtypes: ['Podcast Episode', 'Voice Note', 'Audiogram', 'Interview']
  },
  {
    id: 'visual',
    title: 'Visual/Graphics',
    description: 'Templates and visual content creation',
    icon: Image,
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    subtypes: ['Quote Card', 'Stat Card', 'Slide Deck', 'Infographic']
  },
  {
    id: 'learning',
    title: 'Learning Module',
    description: 'Course content and educational materials',
    icon: GraduationCap,
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    subtypes: ['Lesson', 'Quiz', 'Workshop', 'Course Unit']
  }
];

// Video subtypes with icons
const videoSubtypes = [
  { id: 'talking-head', title: 'Talking Head', icon: Camera, description: 'Webcam recording with you as the focus' },
  { id: 'screencast', title: 'Screencast', icon: Monitor, description: 'Screen recording with narration' },
  { id: 'short-clips', title: 'Short Clips', icon: Scissors, description: 'Quick video highlights and snippets' },
  { id: 'slide-based', title: 'Slide-Based', icon: Presentation, description: 'Script-driven slide presentations' }
];

// Audio subtypes with icons
const audioSubtypes = [
  { id: 'podcast', title: 'Podcast Episode', icon: Volume2, description: 'Full-length audio content' },
  { id: 'voice-note', title: 'Voice Note', icon: Mic, description: 'Quick voice messages' },
  { id: 'audiogram', title: 'Audiogram', icon: Radio, description: 'Visual audio content for social' },
  { id: 'interview', title: 'Interview', icon: User, description: 'Guest conversations' }
];

// Visual subtypes with icons
const visualSubtypes = [
  { id: 'quote-card', title: 'Quote Card', icon: PaintBucket, description: 'Inspirational quote graphics' },
  { id: 'stat-card', title: 'Stat Card', icon: BarChart3, description: 'Data visualization cards' },
  { id: 'slide-deck', title: 'Slide Deck', icon: Layers, description: 'Multi-slide presentations' },
  { id: 'infographic', title: 'Infographic', icon: Layout, description: 'Complex data storytelling' }
];

// Learning subtypes with icons
const learningSubtypes = [
  { id: 'lesson', title: 'Lesson', icon: BookOpen, description: 'Educational content modules' },
  { id: 'quiz', title: 'Quiz', icon: HelpCircle, description: 'Interactive assessments' },
  { id: 'workshop', title: 'Workshop', icon: Settings, description: 'Hands-on learning experiences' },
  { id: 'course-unit', title: 'Course Unit', icon: GraduationCap, description: 'Structured learning sequences' }
];

export default function ContentCreatorPage() {
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
  const [selectedSubtype, setSelectedSubtype] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (contentType: string) => {
    setSelectedContentType(contentType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContentType(null);
    setSelectedSubtype(null);
  };

  const getSubtypes = (contentTypeId: string) => {
    switch (contentTypeId) {
      case 'video': return videoSubtypes;
      case 'audio': return audioSubtypes;
      case 'visual': return visualSubtypes;
      case 'learning': return learningSubtypes;
      default: return [];
    }
  };

  const renderSubtypeSelection = () => {
    if (!selectedContentType) return null;
    
    const subtypes = getSubtypes(selectedContentType);
    if (subtypes.length === 0) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {subtypes.map((subtype) => {
          const IconComponent = subtype.icon;
          return (
            <button
              key={subtype.id}
              onClick={() => setSelectedSubtype(subtype.id)}
              className="p-4 border-2 rounded-lg text-left hover:bg-gray-50 transition-colors border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-start gap-3">
                <IconComponent className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{subtype.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{subtype.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderCreationInterface = () => {
    if (!selectedSubtype && selectedContentType !== 'blog') return null;

    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Creation Interface</h3>
        
        {selectedContentType === 'blog' && (
          <BlogEditor onSave={(content: any) => console.log('Saving blog:', content)} />
        )}

        {selectedContentType === 'video' && selectedSubtype && (
          <VideoCreator 
            subtype={selectedSubtype} 
            onSave={(content: any) => console.log('Saving video:', content)} 
          />
        )}

        {selectedContentType === 'audio' && selectedSubtype && (
          <AudioCreator 
            subtype={selectedSubtype} 
            onSave={(content: any) => console.log('Saving audio:', content)} 
          />
        )}

        {selectedContentType === 'visual' && selectedSubtype && (
          <VisualCreator 
            subtype={selectedSubtype} 
            onSave={(content: any) => console.log('Saving visual:', content)} 
          />
        )}

        {selectedContentType === 'learning' && selectedSubtype && (
          <LearningCreator 
            subtype={selectedSubtype} 
            onSave={(content: any) => console.log('Saving learning:', content)} 
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Content Creation Center</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search content..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <nav className="space-y-3">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-md">
                <Plus className="w-5 h-5" />
                Create New
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <FileEdit className="w-5 h-5" />
                My Drafts
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Eye className="w-5 h-5" />
                My Published
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Layout className="w-5 h-5" />
                Templates
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <HelpCircle className="w-5 h-5" />
                Help (AI Agent)
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Start New Content Button */}
          <div className="mb-8">
            <button className="w-full max-w-md mx-auto block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
              <Plus className="w-6 h-6 inline-block mr-2" />
              Start New Content
            </button>
          </div>

          {/* Content Type Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => openModal(type.id)}
                  className={`${type.color} border-2 rounded-lg p-6 text-left transition-all transform hover:scale-105 shadow-sm hover:shadow-md`}
                >
                  <div className="flex items-start gap-4">
                    <IconComponent className={`w-8 h-8 ${type.iconColor}`} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {type.subtypes.map((subtype, index) => (
                          <span 
                            key={index}
                            className="inline-block px-2 py-1 bg-white bg-opacity-70 text-xs rounded-full text-gray-700"
                          >
                            {subtype}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Create {contentTypes.find(type => type.id === selectedContentType)?.title}
                </h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {selectedContentType === 'blog' ? (
                renderCreationInterface()
              ) : (
                <>
                  {!selectedSubtype ? (
                    <>
                      <p className="text-gray-600 mb-6">
                        Choose the type of {contentTypes.find(type => type.id === selectedContentType)?.title.toLowerCase()} you want to create:
                      </p>
                      {renderSubtypeSelection()}
                    </>
                  ) : (
                    renderCreationInterface()
                  )}
                </>
              )}
              
              {selectedSubtype && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => setSelectedSubtype(null)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ← Back to type selection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
