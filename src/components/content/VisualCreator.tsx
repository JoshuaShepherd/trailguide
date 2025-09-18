"use client";

import React, { useState } from 'react';
import { 
  Image, 
  Type, 
  Palette, 
  Layout, 
  Download,
  Eye,
  Sparkles,
  BarChart3,
  Quote,
  Layers,
  Copy,
  Save,
  Zap
} from 'lucide-react';

interface VisualCreatorProps {
  subtype: string;
  onSave: (content: VisualContent) => void;
}

interface VisualContent {
  title: string;
  type: 'quote-card' | 'stat-card' | 'slide-deck' | 'infographic';
  content: any;
  style: {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
    font: string;
  };
  dimensions: string;
  tags: string[];
}

export default function VisualCreator({ subtype, onSave }: VisualCreatorProps) {
  const [visualData, setVisualData] = useState<Partial<VisualContent>>({
    title: '',
    type: subtype as VisualContent['type'],
    content: {},
    style: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#3B82F6',
      font: 'Inter'
    },
    dimensions: '1080x1080',
    tags: []
  });

  const [previewMode, setPreviewMode] = useState(false);

  const colorPresets = [
    { name: 'Professional Blue', bg: '#F8FAFC', text: '#1E293B', accent: '#3B82F6' },
    { name: 'Warm Orange', bg: '#FFF7ED', text: '#1C1917', accent: '#EA580C' },
    { name: 'Fresh Green', bg: '#F0FDF4', text: '#14532D', accent: '#16A34A' },
    { name: 'Royal Purple', bg: '#FAF5FF', text: '#581C87', accent: '#9333EA' },
    { name: 'Elegant Dark', bg: '#0F172A', text: '#F1F5F9', accent: '#06B6D4' }
  ];

  const fontOptions = ['Inter', 'Playfair Display', 'Roboto', 'Open Sans', 'Montserrat'];
  const dimensionOptions = [
    { label: 'Square (Instagram)', value: '1080x1080' },
    { label: 'Landscape (LinkedIn)', value: '1200x630' },
    { label: 'Story (Instagram)', value: '1080x1920' },
    { label: 'Twitter Card', value: '1200x675' }
  ];

  const applyColorPreset = (preset: typeof colorPresets[0]) => {
    setVisualData(prev => ({
      ...prev,
      style: {
        ...prev.style!,
        backgroundColor: preset.bg,
        textColor: preset.text,
        accentColor: preset.accent
      }
    }));
  };

  const renderQuoteCardCreator = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quote Text
            </label>
            <textarea 
              placeholder="Enter your inspiring quote..."
              className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                content: { ...prev.content, quote: e.target.value }
              }))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attribution
            </label>
            <input 
              type="text" 
              placeholder="Author name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                content: { ...prev.content, author: e.target.value }
              }))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Title (Optional)
            </label>
            <input 
              type="text" 
              placeholder="CEO, Company Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                content: { ...prev.content, authorTitle: e.target.value }
              }))}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <h3 className="font-semibold">Preview</h3>
          <div 
            className="aspect-square rounded-lg p-8 flex flex-col justify-center text-center shadow-lg"
            style={{ 
              backgroundColor: visualData.style?.backgroundColor,
              color: visualData.style?.textColor,
              fontFamily: visualData.style?.font
            }}
          >
            <Quote className="w-8 h-8 mx-auto mb-4 opacity-20" />
            <blockquote className="text-xl font-medium mb-6 leading-relaxed">
              {visualData.content?.quote || "Your inspiring quote will appear here..."}
            </blockquote>
            <div className="mt-auto">
              <div className="text-lg font-semibold" style={{ color: visualData.style?.accentColor }}>
                {visualData.content?.author || "Author Name"}
              </div>
              {visualData.content?.authorTitle && (
                <div className="text-sm opacity-75 mt-1">
                  {visualData.content.authorTitle}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatCardCreator = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Statistic
            </label>
            <input 
              type="text" 
              placeholder="e.g., 127%, $2.4M, 50K+"
              className="w-full px-4 py-3 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-center"
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                content: { ...prev.content, statistic: e.target.value }
              }))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input 
              type="text" 
              placeholder="What this statistic represents"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                content: { ...prev.content, description: e.target.value }
              }))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Context/Timeframe
            </label>
            <input 
              type="text" 
              placeholder="e.g., YoY Growth, Q3 2024"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                content: { ...prev.content, context: e.target.value }
              }))}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <h3 className="font-semibold">Preview</h3>
          <div 
            className="aspect-square rounded-lg p-8 flex flex-col justify-center text-center shadow-lg"
            style={{ 
              backgroundColor: visualData.style?.backgroundColor,
              color: visualData.style?.textColor,
              fontFamily: visualData.style?.font
            }}
          >
            <BarChart3 className="w-12 h-12 mx-auto mb-6 opacity-20" />
            <div 
              className="text-6xl font-bold mb-4"
              style={{ color: visualData.style?.accentColor }}
            >
              {visualData.content?.statistic || "127%"}
            </div>
            <div className="text-xl font-semibold mb-2">
              {visualData.content?.description || "Revenue Growth"}
            </div>
            <div className="text-sm opacity-75">
              {visualData.content?.context || "Year over Year"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSlideDeckCreator = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <h3 className="font-semibold mb-4">Slide Deck Builder</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-50 text-center">
            <Layout className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
            <h4 className="font-medium">Title Slide</h4>
            <p className="text-sm text-gray-600 mt-1">Main presentation title</p>
          </button>
          
          <button className="p-6 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-50 text-center">
            <Type className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
            <h4 className="font-medium">Content Slide</h4>
            <p className="text-sm text-gray-600 mt-1">Bullet points & text</p>
          </button>
          
          <button className="p-6 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-50 text-center">
            <Image className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
            <h4 className="font-medium">Image Slide</h4>
            <p className="text-sm text-gray-600 mt-1">Visual content</p>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold mb-4">Slide Templates</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-video bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer border-2 border-transparent hover:border-indigo-300">
              <div className="h-full flex flex-col">
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-2 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInfographicCreator = () => (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-green-600" />
          AI-Powered Infographic Generator
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data Source
            </label>
            <textarea 
              placeholder="Paste your data, statistics, or key points here..."
              className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Infographic Type
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Process Flow</option>
              <option>Comparison Chart</option>
              <option>Timeline</option>
              <option>Statistics Overview</option>
              <option>How-to Guide</option>
            </select>
          </div>
          
          <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            Generate Infographic
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold mb-4">Infographic Preview</h4>
        <div className="aspect-[2/3] bg-gradient-to-b from-green-50 to-blue-50 rounded-lg p-8 border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <Layers className="w-16 h-16 mx-auto mb-4" />
            <p>Your infographic will appear here</p>
            <p className="text-sm mt-2">Add data and generate to see preview</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInterface = () => {
    switch (subtype) {
      case 'quote-card':
        return renderQuoteCardCreator();
      case 'stat-card':
        return renderStatCardCreator();
      case 'slide-deck':
        return renderSlideDeckCreator();
      case 'infographic':
        return renderInfographicCreator();
      default:
        return <div>Unknown visual type</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Visual Metadata */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input 
            type="text" 
            value={visualData.title || ''}
            onChange={(e) => setVisualData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter visual title..."
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Style Controls */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Design Settings
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Font</label>
            <select 
              value={visualData.style?.font}
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                style: { ...prev.style!, font: e.target.value }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {fontOptions.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions</label>
            <select 
              value={visualData.dimensions}
              onChange={(e) => setVisualData(prev => ({ ...prev, dimensions: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {dimensionOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
            <input 
              type="color" 
              value={visualData.style?.backgroundColor}
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                style: { ...prev.style!, backgroundColor: e.target.value }
              }))}
              className="w-full h-10 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
            <input 
              type="color" 
              value={visualData.style?.accentColor}
              onChange={(e) => setVisualData(prev => ({
                ...prev,
                style: { ...prev.style!, accentColor: e.target.value }
              }))}
              className="w-full h-10 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color Presets</label>
          <div className="flex flex-wrap gap-2">
            {colorPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyColorPreset(preset)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2"
              >
                <div 
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: preset.accent }}
                ></div>
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Creation Interface */}
      {renderInterface()}

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button 
            onClick={() => setPreviewMode(!previewMode)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {previewMode ? 'Edit' : 'Preview'}
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        
        <button 
          onClick={() => onSave(visualData as VisualContent)}
          className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold flex items-center gap-2"
        >
          <Copy className="w-4 h-4" />
          Save Visual
        </button>
      </div>
    </div>
  );
}
