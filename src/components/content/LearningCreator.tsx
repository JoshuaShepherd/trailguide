"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  Plus, 
  GripVertical,
  Play,
  FileText,
  HelpCircle,
  CheckCircle,
  Edit,
  Trash2,
  Eye,
  Save,
  Settings,
  Users,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';

interface LearningCreatorProps {
  subtype: string;
  onSave: (content: LearningContent) => void;
}

interface LearningContent {
  title: string;
  description: string;
  type: 'lesson' | 'quiz' | 'workshop' | 'course-unit';
  components: LearningComponent[];
  objectives: string[];
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

interface LearningComponent {
  id: string;
  type: 'intro' | 'video' | 'text' | 'reflection' | 'quiz' | 'activity' | 'summary';
  title: string;
  content: any;
  duration?: number;
}

export default function LearningCreator({ subtype, onSave }: LearningCreatorProps) {
  const [learningData, setLearningData] = useState<Partial<LearningContent>>({
    title: '',
    description: '',
    type: subtype as LearningContent['type'],
    components: [],
    objectives: [''],
    duration: 30,
    difficulty: 'beginner',
    tags: []
  });

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const componentTypes = [
    { type: 'intro', icon: Lightbulb, name: 'Introduction', description: 'Welcome and overview' },
    { type: 'video', icon: Play, name: 'Video Content', description: 'Instructional video' },
    { type: 'text', icon: FileText, name: 'Text/Reading', description: 'Written content' },
    { type: 'reflection', icon: HelpCircle, name: 'Reflection', description: 'Thought questions' },
    { type: 'quiz', icon: CheckCircle, name: 'Quiz/Assessment', description: 'Knowledge check' },
    { type: 'activity', icon: Users, name: 'Activity', description: 'Practical exercise' },
    { type: 'summary', icon: BookOpen, name: 'Summary', description: 'Key takeaways' }
  ];

  const addComponent = (type: string) => {
    const newComponent: LearningComponent = {
      id: Date.now().toString(),
      type: type as LearningComponent['type'],
      title: `New ${type}`,
      content: {},
      duration: type === 'video' ? 10 : 5
    };

    setLearningData(prev => ({
      ...prev,
      components: [...(prev.components || []), newComponent]
    }));
  };

  const updateComponent = (id: string, updates: Partial<LearningComponent>) => {
    setLearningData(prev => ({
      ...prev,
      components: prev.components?.map(comp => 
        comp.id === id ? { ...comp, ...updates } : comp
      ) || []
    }));
  };

  const removeComponent = (id: string) => {
    setLearningData(prev => ({
      ...prev,
      components: prev.components?.filter(comp => comp.id !== id) || []
    }));
  };

  const addObjective = () => {
    setLearningData(prev => ({
      ...prev,
      objectives: [...(prev.objectives || []), '']
    }));
  };

  const updateObjective = (index: number, value: string) => {
    setLearningData(prev => ({
      ...prev,
      objectives: prev.objectives?.map((obj, i) => i === index ? value : obj) || []
    }));
  };

  const removeObjective = (index: number) => {
    setLearningData(prev => ({
      ...prev,
      objectives: prev.objectives?.filter((_, i) => i !== index) || []
    }));
  };

  const renderComponentEditor = (component: LearningComponent) => {
    const IconComponent = componentTypes.find(ct => ct.type === component.type)?.icon || FileText;

    return (
      <div key={component.id} className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
            <IconComponent className="w-5 h-5 text-blue-600" />
            <input 
              type="text"
              value={component.title}
              onChange={(e) => updateComponent(component.id, { title: e.target.value })}
              className="text-lg font-semibold bg-transparent border-none focus:outline-none focus:ring-0 p-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{component.duration}min</span>
            <button 
              onClick={() => removeComponent(component.id)}
              className="p-1 text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Component-specific content editors */}
        {component.type === 'intro' && (
          <div className="space-y-3">
            <textarea 
              placeholder="Write your introduction content..."
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, text: e.target.value }
              })}
            />
          </div>
        )}

        {component.type === 'video' && (
          <div className="space-y-3">
            <input 
              type="text"
              placeholder="Video title or description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, title: e.target.value }
              })}
            />
            <input 
              type="url"
              placeholder="Video URL or upload placeholder"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, url: e.target.value }
              })}
            />
          </div>
        )}

        {component.type === 'text' && (
          <div className="space-y-3">
            <textarea 
              placeholder="Write your lesson content..."
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, text: e.target.value }
              })}
            />
          </div>
        )}

        {component.type === 'reflection' && (
          <div className="space-y-3">
            <textarea 
              placeholder="What reflection questions do you want to ask?"
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, questions: e.target.value }
              })}
            />
          </div>
        )}

        {component.type === 'quiz' && (
          <div className="space-y-3">
            <input 
              type="text"
              placeholder="Quiz question"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, question: e.target.value }
              })}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[0,1,2,3].map(i => (
                <input 
                  key={i}
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
          </div>
        )}

        {component.type === 'activity' && (
          <div className="space-y-3">
            <input 
              type="text"
              placeholder="Activity title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, title: e.target.value }
              })}
            />
            <textarea 
              placeholder="Activity instructions and description..."
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, instructions: e.target.value }
              })}
            />
          </div>
        )}

        {component.type === 'summary' && (
          <div className="space-y-3">
            <textarea 
              placeholder="Summarize the key takeaways..."
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => updateComponent(component.id, { 
                content: { ...component.content, summary: e.target.value }
              })}
            />
          </div>
        )}
      </div>
    );
  };

  const renderLessonBuilder = () => (
    <div className="space-y-6">
      {/* Component Palette */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="font-semibold mb-4">Add Learning Components</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {componentTypes.map((compType) => {
            const IconComponent = compType.icon;
            return (
              <button
                key={compType.type}
                onClick={() => addComponent(compType.type)}
                className="p-3 bg-white rounded-lg border border-blue-200 hover:bg-blue-50 text-center transition-colors"
              >
                <IconComponent className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-xs font-medium text-blue-900">{compType.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Learning Components */}
      <div>
        <h3 className="font-semibold mb-4">Lesson Structure</h3>
        {learningData.components && learningData.components.length > 0 ? (
          <div className="space-y-4">
            {learningData.components.map(renderComponentEditor)}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600 mb-4">No components added yet</p>
            <p className="text-sm text-gray-500">Use the components above to build your lesson</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderQuizBuilder = () => (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <h3 className="font-semibold mb-4">Quiz Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Limit</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>No limit</option>
              <option>5 minutes</option>
              <option>10 minutes</option>
              <option>15 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Attempts</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Unlimited</option>
              <option>1 attempt</option>
              <option>3 attempts</option>
              <option>5 attempts</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Passing Score</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Quiz Questions</h3>
          <button 
            onClick={() => addComponent('quiz')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Question
          </button>
        </div>
        
        {learningData.components?.filter(c => c.type === 'quiz').map(renderComponentEditor)}
      </div>
    </div>
  );

  const renderWorkshopBuilder = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
        <h3 className="font-semibold mb-4">Workshop Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Pre-Workshop</h4>
            <div className="space-y-2">
              <button className="w-full p-3 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
                <div className="font-medium">Welcome & Introductions</div>
                <div className="text-sm text-gray-600">Ice breakers and expectations</div>
              </button>
              <button className="w-full p-3 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
                <div className="font-medium">Pre-Work Assignment</div>
                <div className="text-sm text-gray-600">Preparation materials</div>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Main Workshop</h4>
            <div className="space-y-2">
              <button className="w-full p-3 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
                <div className="font-medium">Interactive Sessions</div>
                <div className="text-sm text-gray-600">Hands-on activities</div>
              </button>
              <button className="w-full p-3 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 text-left">
                <div className="font-medium">Group Exercises</div>
                <div className="text-sm text-gray-600">Collaborative learning</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Workshop Components</h3>
        {learningData.components && learningData.components.length > 0 ? (
          <div className="space-y-4">
            {learningData.components.map(renderComponentEditor)}
          </div>
        ) : (
          renderLessonBuilder()
        )}
      </div>
    </div>
  );

  const renderCourseUnitBuilder = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <h3 className="font-semibold mb-4">Course Unit Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border border-indigo-200">
            <div className="text-2xl font-bold text-indigo-600">1</div>
            <div className="text-sm font-medium">Introduction</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-indigo-200">
            <div className="text-2xl font-bold text-indigo-600">2</div>
            <div className="text-sm font-medium">Core Content</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-indigo-200">
            <div className="text-2xl font-bold text-indigo-600">3</div>
            <div className="text-sm font-medium">Practice</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-indigo-200">
            <div className="text-2xl font-bold text-indigo-600">4</div>
            <div className="text-sm font-medium">Assessment</div>
          </div>
        </div>
      </div>

      {renderLessonBuilder()}
    </div>
  );

  const renderInterface = () => {
    switch (subtype) {
      case 'lesson':
        return renderLessonBuilder();
      case 'quiz':
        return renderQuizBuilder();
      case 'workshop':
        return renderWorkshopBuilder();
      case 'course-unit':
        return renderCourseUnitBuilder();
      default:
        return <div>Unknown learning type</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Learning Content Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input 
              type="text" 
              value={learningData.title || ''}
              onChange={(e) => setLearningData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter learning content title..."
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea 
              value={learningData.description || ''}
              onChange={(e) => setLearningData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe what learners will gain..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Duration (minutes)
              </label>
              <input 
                type="number" 
                value={learningData.duration || 30}
                onChange={(e) => setLearningData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select 
                value={learningData.difficulty}
                onChange={(e) => setLearningData(prev => ({ ...prev, difficulty: e.target.value as any }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Target className="w-4 h-4 inline mr-1" />
              Learning Objectives
            </label>
            <div className="space-y-2">
              {learningData.objectives?.map((objective, index) => (
                <div key={index} className="flex gap-2">
                  <input 
                    type="text"
                    value={objective}
                    onChange={(e) => updateObjective(index, e.target.value)}
                    placeholder={`Learning objective ${index + 1}...`}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button 
                    onClick={() => removeObjective(index)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button 
                onClick={addObjective}
                className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
              >
                <Plus className="w-4 h-4 inline mr-2" />
                Add Objective
              </button>
            </div>
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
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Preview as Student
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
        
        <button 
          onClick={() => onSave(learningData as LearningContent)}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          Publish Content
        </button>
      </div>
    </div>
  );
}
