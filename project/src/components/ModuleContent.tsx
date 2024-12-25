import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseModule } from '../types/course';
import { Quiz } from './Quiz';

interface ModuleContentProps {
  module: CourseModule;
  onComplete?: () => void;
}

export function ModuleContent({ module, onComplete }: ModuleContentProps) {
  const navigate = useNavigate();

  const handleLabLaunch = () => {
    // Map module IDs to their corresponding lab routes
    const labRoutes: Record<string, string> = {
      'sql-level1-lab': '/lab/sql',
      'jwt-level1-lab': '/lab/jwt',
      'csrf-level1-lab': '/lab/csrf',
      'cors-level1-lab': '/lab/cors',  // CORS lab route
      'ssrf-level1-lab': '/lab/ssrf',
      'web-sec-level1-lab': '/lab/websecurity',
      'xss-level1-lab': '/lab/xss',
      'xxe-level1-lab': '/lab/xxe'
    };

    // Find the matching lab route
    const labRoute = Object.entries(labRoutes).find(([id]) => 
      module.id.includes(id)
    )?.[1];

    // Navigate to the lab if a route is found
    if (labRoute) {
      navigate(labRoute);
    }
  };

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
            <button 
              onClick={handleLabLaunch}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
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