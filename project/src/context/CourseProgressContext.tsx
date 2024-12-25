import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface CourseProgress {
  courseId: string;
  completed: boolean;
  modules: {
    moduleId: string;
    completed: boolean;
    score?: number;
  }[];
}

interface CourseProgressContextType {
  progress: CourseProgress[];
  updateModuleProgress: (courseId: string, moduleId: string, completed: boolean, score?: number) => void;
  isAllCoursesCompleted: boolean;
  pendingReview: boolean;
  setPendingReview: (status: boolean) => void;
}

const CourseProgressContext = createContext<CourseProgressContextType | undefined>(undefined);

export function CourseProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [pendingReview, setPendingReview] = useState(false);

  // Calculate if all courses are completed
  const isAllCoursesCompleted = progress.every(
    (course) => course.completed && course.modules.every((module) => module.completed)
  );

  const updateModuleProgress = (
    courseId: string,
    moduleId: string,
    completed: boolean,
    score?: number
  ) => {
    setProgress((prev) => {
      const courseIndex = prev.findIndex((c) => c.courseId === courseId);
      if (courseIndex === -1) {
        // Create new course progress if it doesn't exist
        return [
          ...prev,
          {
            courseId,
            completed: false,
            modules: [{ moduleId, completed, score }],
          },
        ];
      }

      const newProgress = [...prev];
      const course = { ...newProgress[courseIndex] };
      const moduleIndex = course.modules.findIndex((m) => m.moduleId === moduleId);

      if (moduleIndex === -1) {
        course.modules.push({ moduleId, completed, score });
      } else {
        course.modules[moduleIndex] = { ...course.modules[moduleIndex], completed, score };
      }

      // Update course completion status
      course.completed = course.modules.every((m) => m.completed);
      newProgress[courseIndex] = course;

      return newProgress;
    });
  };

  // Load progress from localStorage on mount
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`courseProgress_${user.id}`);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    }
  }, [user]);

  // Save progress to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`courseProgress_${user.id}`, JSON.stringify(progress));
    }
  }, [progress, user]);

  return (
    <CourseProgressContext.Provider
      value={{
        progress,
        updateModuleProgress,
        isAllCoursesCompleted,
        pendingReview,
        setPendingReview,
      }}
    >
      {children}
    </CourseProgressContext.Provider>
  );
}

export const useCourseProgress = () => {
  const context = useContext(CourseProgressContext);
  if (context === undefined) {
    throw new Error('useCourseProgress must be used within a CourseProgressProvider');
  }
  return context;
};