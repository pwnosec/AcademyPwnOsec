import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export interface SQLModuleProgress {
  moduleId: string;
  completed: boolean;
  score?: number;
}

export function useSQLCourseProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<SQLModuleProgress[]>([]);

  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`sql_progress_${user.id}`);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    }
  }, [user]);

  const updateModuleProgress = (moduleId: string, completed: boolean, score?: number) => {
    if (user) {
      const newProgress = [...progress];
      const moduleIndex = newProgress.findIndex(p => p.moduleId === moduleId);
      
      if (moduleIndex === -1) {
        newProgress.push({ moduleId, completed, score });
      } else {
        newProgress[moduleIndex] = { ...newProgress[moduleIndex], completed, score };
      }
      
      localStorage.setItem(`sql_progress_${user.id}`, JSON.stringify(newProgress));
      setProgress(newProgress);
    }
  };

  const isModuleUnlocked = (moduleId: string): boolean => {
    if (moduleId.includes('level1')) return true;
    
    if (moduleId.includes('level2')) {
      return progress.some(p => 
        p.moduleId === 'sql-level1-quiz' && p.completed && (p.score || 0) >= 70
      );
    }
    
    if (moduleId.includes('level3')) {
      return progress.some(p => 
        p.moduleId === 'sql-level2-quiz' && p.completed && (p.score || 0) >= 70
      );
    }
    
    return false;
  };

  return {
    progress,
    updateModuleProgress,
    isModuleUnlocked
  };
}