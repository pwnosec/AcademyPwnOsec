import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

const modules = [
  {
    title: 'SQL Injection Mastery',
    duration: '10h',
    lessons: [
      'Understanding SQL basics and injection fundamentals',
      'Authentication bypass techniques',
      'UNION-based SQL injection',
      'Blind SQL injection methods',
      'Time-based SQL injection',
      'Error-based SQL injection',
      'Advanced exploitation techniques',
      'WAF bypass strategies',
      'Defense implementation'
    ],
  },
  {
    title: 'Web Application Security',
    duration: '12h',
    lessons: [
      'Web security fundamentals',
      'Common vulnerability types',
      'Security headers implementation',
      'Input validation techniques',
      'Session management security',
      'Secure authentication methods',
      'WAF configuration and management',
      'Security monitoring setup',
      'Incident response planning'
    ],
  },
  {
    title: 'XSS Attack & Defense',
    duration: '8h',
    lessons: [
      'XSS fundamentals and types',
      'Reflected XSS techniques',
      'Stored XSS exploitation',
      'DOM-based XSS attacks',
      'Filter bypass methods',
      'CSP implementation',
      'XSS prevention strategies',
      'Framework-specific protections',
      'Advanced defense mechanisms'
    ],
  },
  {
    title: 'Authentication Vulnerabilities',
    duration: '8h',
    lessons: [
      'Authentication bypass techniques',
      'Password-based vulnerabilities',
      'Multi-factor authentication flaws',
      'Session management issues',
      'OAuth 2.0 vulnerabilities',
      'JWT token attacks',
      'SSO implementation flaws',
      'Password reset vulnerabilities',
      'Defense strategies'
    ],
  },
  {
    title: 'Directory Traversal',
    duration: '6h',
    lessons: [
      'Path traversal fundamentals',
      'Basic exploitation techniques',
      'Filter bypass methods',
      'Encoding tricks',
      'Null byte injection',
      'Archive file traversal',
      'File upload traversal',
      'Symlink attacks',
      'Security controls'
    ],
  },
  {
    title: 'Command Injection',
    duration: '7h',
    lessons: [
      'Command injection basics',
      'OS command execution',
      'Filter bypass techniques',
      'Blind command injection',
      'Time-based injection',
      'Out-of-band techniques',
      'Advanced filter bypass',
      'Custom shell techniques',
      'Defense implementation'
    ],
  },
  {
    title: 'Access Control Vulnerabilities',
    duration: '9h',
    lessons: [
      'Access control fundamentals',
      'Horizontal privilege escalation',
      'Vertical privilege escalation',
      'IDOR vulnerabilities',
      'Role-based access control',
      'Attribute-based access control',
      'Permission inheritance',
      'Dynamic authorization',
      'Enterprise defense patterns'
    ],
  },
  {
    title: 'File Upload Vulnerabilities',
    duration: '7h',
    lessons: [
      'File upload security basics',
      'Content-type validation',
      'File content analysis',
      'Magic number checking',
      'Upload race conditions',
      'File upload traversal',
      'Polyglot file uploads',
      'Advanced filter bypass',
      'Secure implementation'
    ],
  },
  {
    title: 'Server-Side Request Forgery',
    duration: '8h',
    lessons: [
      'SSRF fundamentals',
      'Internal service access',
      'Cloud metadata access',
      'Protocol smuggling',
      'DNS rebinding attacks',
      'Filter bypass methods',
      'IPv6 bypass techniques',
      'Blind SSRF exploitation',
      'Defense strategies'
    ],
  }
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