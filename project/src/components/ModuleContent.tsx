import React from 'react';
import { CourseModule } from '../types/course';
import { Quiz } from './Quiz';

interface ModuleContentProps {
  module: CourseModule;
  onComplete?: () => void;
}

export function ModuleContent({ module, onComplete }: ModuleContentProps) {
  const renderContent = () => {
    switch (module.type) {
      case 'video':
        return (
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <iframe
              src={module.videoUrl}
              className="w-full h-full"
              title={module.title}
              allowFullScreen
            />
          </div>
        );
      case 'lab':
        return (
          <div className="prose max-w-none">
            <h2>Lab Instructions</h2>
            <div className="whitespace-pre-wrap">{module.labInstructions}</div>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Launch Lab Environment
            </button>
          </div>
        );
      case 'quiz':
        return <Quiz module={module} onComplete={onComplete || (() => {})} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">{module.title}</h2>
        <p className="text-gray-600">{module.description}</p>
      </div>
      <div className="space-y-6">
        {renderContent()}
      </div>
    </div>
  );
}