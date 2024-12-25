import { CourseModule } from '../../../types/course';

export const ssrfLevel1Modules: CourseModule[] = [
  {
    id: 'ssrf-level1-intro',
    title: 'Level 1: SSRF Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of Server-Side Request Forgery vulnerabilities and their impact on web security.',
    videoUrl: 'https://example.com/videos/ssrf-basics',
  },
  {
    id: 'ssrf-level1-lab',  // This ID is critical for lab routing
    title: 'Basic SSRF Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic SSRF vulnerabilities.',
    labInstructions: `
SSRF Testing Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review URL processing functionality
   - Understand basic SSRF concepts

2. Lab Objectives:
   - Test internal network access
   - Access cloud metadata endpoints
   - Practice URL manipulation
   - Analyze responses

3. Available Tools:
   - Request Inspector
   - Testing Terminal
   - Target Application
   - Real-time Analysis

4. Security Testing:
   - Internal network scanning
   - Cloud metadata access
   - URL scheme testing
   - Response analysis
    `,
  },
  {
    id: 'ssrf-level1-quiz',
    title: 'SSRF Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic SSRF concepts.',
    questions: [
      {
        question: 'What is the main purpose of SSRF attacks?',
        options: [
          'To make requests to internal resources from the server',
          'To inject SQL queries',
          'To execute JavaScript in browsers',
          'To modify HTTP headers',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is a common target for SSRF attacks?',
        options: [
          'Cloud instance metadata service',
          'Client-side JavaScript',
          'Browser cookies',
          'CSS files',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against SSRF?',
        options: [
          'URL validation and whitelisting',
          'Input length restrictions',
          'Using HTTPS',
          'Disabling JavaScript',
        ],
        correctAnswer: 0,
      },
    ],
  },
];