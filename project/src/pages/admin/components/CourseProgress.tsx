import React from 'react';
import { BarChart, CheckCircle, Clock } from 'lucide-react';
import { courses } from '../../../data/courses';
import { useCourseProgress } from '../../../context/CourseProgressContext';

export function CourseProgress() {
  const { progress } = useCourseProgress();

  // Calculate progress for each course
  const courseProgress = [
    { name: 'SQL Injection Mastery', progress: 75 },
    { name: 'Web Application Security', progress: 60 },
    { name: 'XSS Attack & Defense', progress: 45 },
    { name: 'Authentication Vulnerabilities', progress: 30 },
    { name: 'CSRF Security', progress: 25 },
    { name: 'JWT Security', progress: 20 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Course Progress</h2>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {courseProgress.map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{course.name}</h3>
                <span className="text-sm text-gray-600">{course.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{Math.round((course.progress / 100) * 12)} students completed</span>
                <span>{12 - Math.round((course.progress / 100) * 12)} in progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}