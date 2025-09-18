"use client";

import React, { useState } from 'react';
import TiptapEditor from '@/components/editor/TiptapEditor';
import { 
  Save, 
  Eye, 
  Send, 
  Sparkles, 
  FileText, 
  Calendar,
  Tag,
  Target,
  User
} from 'lucide-react';

interface BlogEditorProps {
  onSave: (content: BlogContent) => void;
}

interface BlogContent {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: string;
  publishDate: string;
  status: 'draft' | 'published';
}

export default function BlogEditor({ onSave }: BlogEditorProps) {
  const [blogData, setBlogData] = useState<BlogContent>({
    title: '',
    content: '',
    excerpt: '',
    tags: [],
    category: '',
    publishDate: '',
    status: 'draft'
  });
  
  const [currentTag, setCurrentTag] = useState('');
  const [showMetadata, setShowMetadata] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const handleSave = (status: 'draft' | 'published' = 'draft') => {
    const updatedContent = { ...blogData, status };
    onSave(updatedContent);
  };

  const addTag = () => {
    if (currentTag.trim() && !blogData.tags.includes(currentTag.trim())) {
      setBlogData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setBlogData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const generateAiSuggestions = () => {
    // Mock AI suggestions - in real implementation, this would call an AI service
    const suggestions = [
      "Consider adding a compelling hook in the first paragraph",
      "Include relevant statistics to support your main points",
      "Add subheadings to improve readability",
      "Consider adding a call-to-action at the end"
    ];
    setAiSuggestions(suggestions);
  };

  return (
    <div className="space-y-6">
      {/* Title and Basic Info */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Article Title
          </label>
          <input 
            type="text" 
            value={blogData.title}
            onChange={(e) => setBlogData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter a compelling title..."
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt (SEO Description)
          </label>
          <textarea 
            value={blogData.excerpt}
            onChange={(e) => setBlogData(prev => ({ ...prev, excerpt: e.target.value }))}
            placeholder="Brief description of your article (150-160 characters for SEO)..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
            maxLength={160}
          />
          <div className="text-sm text-gray-500 mt-1">
            {blogData.excerpt.length}/160 characters
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <TiptapEditor 
          content={blogData.content}
          onChange={(content) => setBlogData(prev => ({ ...prev, content }))}
          placeholder="Start writing your thought leadership content..."
        />
      </div>

      {/* AI Assistant Sidebar */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-purple-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            AI Writing Assistant
          </h3>
          <button 
            onClick={generateAiSuggestions}
            className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700"
          >
            Get Suggestions
          </button>
        </div>
        
        {aiSuggestions.length > 0 && (
          <div className="space-y-2">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-white p-3 rounded-md border border-purple-100">
                <p className="text-sm text-gray-700">{suggestion}</p>
              </div>
            ))}
          </div>
        )}
        
        {aiSuggestions.length === 0 && (
          <p className="text-sm text-purple-700">
            Click "Get Suggestions" to receive AI-powered writing tips and improvements for your content.
          </p>
        )}
      </div>

      {/* Metadata Toggle */}
      <button
        onClick={() => setShowMetadata(!showMetadata)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <FileText className="w-4 h-4" />
        {showMetadata ? 'Hide' : 'Show'} Metadata & SEO Settings
      </button>

      {/* Metadata Section */}
      {showMetadata && (
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-gray-900 mb-4">Article Metadata</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Tag className="w-4 h-4 inline mr-1" />
                Category
              </label>
              <select 
                value={blogData.category}
                onChange={(e) => setBlogData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select category</option>
                <option value="leadership">Leadership</option>
                <option value="strategy">Strategy</option>
                <option value="innovation">Innovation</option>
                <option value="culture">Culture</option>
                <option value="growth">Growth</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Publish Date
              </label>
              <input 
                type="datetime-local"
                value={blogData.publishDate}
                onChange={(e) => setBlogData(prev => ({ ...prev, publishDate: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input 
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
                placeholder="Add a tag..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={addTag}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogData.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                  <button 
                    onClick={() => removeTag(tag)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div className="flex gap-3">
          <button 
            onClick={() => handleSave('draft')}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>
        
        <button 
          onClick={() => handleSave('published')}
          className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
        >
          <Send className="w-4 h-4" />
          Publish Article
        </button>
      </div>
    </div>
  );
}
