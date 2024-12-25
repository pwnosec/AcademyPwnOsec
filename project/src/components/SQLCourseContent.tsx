import React from 'react';
import { Lock, CheckCircle } from 'lucide-react';
import { useSQLCourseProgress } from '../hooks/useSQLCourseProgress';
import { ModuleContent } from './ModuleContent';
import { CourseModule } from '../types/course';

interface SQLCourseContentProps {
  module: CourseModule;
  onComplete: () => void;
}

export function SQLCourseContent({ module, onComplete }: SQLCourseContentProps) {
  const { isModuleUnlocked, updateModuleProgress } = useSQLCourseProgress();

  const handleModuleComplete = (score?: number) => {
    updateModuleProgress(module.id, true, score);
    onComplete();
  };

  if (!isModuleUnlocked(module.id)) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-lg">
        <Lock className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Module Locked</h3>
        <p className="text-gray-600 text-center">
          Complete the previous level with a score of at least 70% to unlock this content.
        </p>
      </div>
    );
  }

  return (
    <ModuleContent 
      module={module} 
      onComplete={handleModuleComplete}
    />
  );
}