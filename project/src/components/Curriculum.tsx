import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

const modules = [
  {
    title: 'Introduction to SQL Injection',
    duration: '1h 30m',
    lessons: ['Understanding SQL basics', 'Common vulnerabilities', 'Attack vectors'],
  },
  {
    title: 'Identification Techniques',
    duration: '2h',
    lessons: ['Manual testing methods', 'Automated scanning tools', 'Error-based detection'],
  },
  {
    title: 'Exploitation Techniques',
    duration: '3h',
    lessons: ['UNION-based attacks', 'Blind SQL injection', 'Time-based techniques'],
  },
  {
    title: 'Defense Strategies',
    duration: '2h 30m',
    lessons: ['Input validation', 'Prepared statements', 'WAF implementation'],
  },
];

export function Curriculum() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Clock className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold">Course Curriculum</h2>
      </div>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <span className="text-gray-600 text-sm">{module.duration}</span>
            </div>
            <ul className="space-y-2">
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="flex items-center gap-2 text-gray-700">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}