"use client";
import React from 'react';
import { ComponentInfo } from './registry';

interface ComponentShowcaseProps {
  component: ComponentInfo;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ component }) => {
  const Component = component.component;
  
  return (
    <section id={component.id} className="scroll-mt-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{component.name}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {component.description}
        </p>
      </div>
      
      {/* Main Component Demo */}
      <div className="mb-6">
        <Component />
      </div>
      
      {/* Component Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Dependencies</h3>
          <div className="space-y-1">
            {component.dependencies.map((dep, index) => (
              <code key={index} className="block text-sm text-green-400 bg-slate-900 px-2 py-1 rounded">
                {dep}
              </code>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Props</h3>
          <div className="space-y-2">
            {component.props && Object.entries(component.props).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-slate-300">{key}:</span>
                <code className="text-blue-400">{JSON.stringify(value)}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
