import React from 'react';
import { BarChart, CheckCircle, Clock } from 'lucide-react';

export function CourseProgress() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Course Progress</h2>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {[
            { name: 'SQL Injection Mastery', progress: 75 },
            { name: 'Web Application Security', progress: 45 },
            { name: 'XSS Attack & Defense', progress: 60 },
          ].map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{course.name}</h3>
                <span className="text-sm text-gray-600">{course.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}