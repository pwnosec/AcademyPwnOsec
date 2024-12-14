import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseHeader } from '../components/CourseHeader';
import { ModuleList } from '../components/ModuleList';
import { ModuleContent } from '../components/ModuleContent';
import { courses } from '../data/courses';
import { 
  sqlInjectionModules, 
  webSecurityModules, 
  xssModules,
  authVulnerabilitiesModules,
  directoryTraversalModules,
  commandInjectionModules,
  accessControlModules,
  fileUploadModules,
  ssrfModules,
  xxeModules,
  corsModules,
  csrfModules,
  jwtModules
} from '../data/courseModules';
import { CourseModule } from '../types/course';

export function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);

  if (!course) {
    return <div>Course not found</div>;
  }

  // Get the appropriate modules based on the course ID
  const getModules = () => {
    switch (courseId) {
      case 'sql-injection':
        return sqlInjectionModules;
      case 'web-security':
        return webSecurityModules;
      case 'xss-defense':
        return xssModules;
      case 'auth-vulnerabilities':
        return authVulnerabilitiesModules;
      case 'directory-traversal':
        return directoryTraversalModules;
      case 'command-injection':
        return commandInjectionModules;
      case 'access-control':
        return accessControlModules;
      case 'file-upload':
        return fileUploadModules;
      case 'ssrf':
        return ssrfModules;
      case 'xxe-injection':
        return xxeModules;
      case 'cors-vulnerabilities':
        return corsModules;
      case 'csrf':
        return csrfModules;
      case 'jwt-attacks':
        return jwtModules;
      default:
        return [];
    }
  };

  const modules = getModules();

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader course={course} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-xl font-bold mb-4">Course Objectives</h2>
              <ul className="space-y-2">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
              <ul className="space-y-2">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedModule ? (
              <ModuleContent module={selectedModule} />
            ) : (
              <ModuleList 
                modules={modules} 
                onModuleSelect={setSelectedModule} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}