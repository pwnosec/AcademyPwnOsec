import React from 'react';
import { Play, Beaker, HelpCircle, Lock, CheckCircle } from 'lucide-react';
import { CourseModule } from '../types/course';

interface ModuleListProps {
  modules: CourseModule[];
  onModuleSelect: (module: CourseModule) => void;
}

export function ModuleList({ modules, onModuleSelect }: ModuleListProps) {
  const getModuleIcon = (type: CourseModule['type']) => {
    switch (type) {
      case 'video':
        return <Play className="w-5 h-5" />;
      case 'lab':
        return <Beaker className="w-5 h-5" />;
      case 'quiz':
        return <HelpCircle className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: CourseModule['status']) => {
    switch (status) {
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-400" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <button
          key={module.id}
          onClick={() => onModuleSelect(module)}
          className={`w-full text-left p-4 rounded-lg border ${
            module.status === 'locked' 
              ? 'bg-gray-50 cursor-not-allowed' 
              : 'bg-white hover:border-blue-500 cursor-pointer'
          }`}
          disabled={module.status === 'locked'}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getModuleIcon(module.type)}
              <div>
                <h3 className="font-semibold">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.duration}</p>
              </div>
            </div>
            {getStatusIcon(module.status)}
          </div>
        </button>
      ))}
    </div>
  );
}