import { CourseModule } from '../../../types/course';

export const corsLevel1Modules: CourseModule[] = [
  {
    id: 'cors-level1-intro',
    title: 'Level 1: CORS Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of Cross-Origin Resource Sharing and their impact on web security.',
    videoUrl: 'https://example.com/videos/cors-basics',
  },
  {
    id: 'cors-level1-lab',  // This ID is critical for lab routing
    title: 'Basic CORS Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic CORS misconfigurations.',
    labInstructions: `
CORS Testing Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Configure browser developer tools
   - Understand CORS headers and policies

2. Lab Objectives:
   - Test CORS configurations
   - Identify misconfigured headers
   - Exploit CORS vulnerabilities
   - Implement secure CORS policies

3. Available Tools:
   - CORS Policy Inspector
   - Testing Terminal
   - Target Application
   - Real-time Header Analysis

4. Security Testing:
   - Origin validation
   - Preflight requests
   - Credential handling
   - Header manipulation
    `,
  },
  {
    id: 'cors-level1-quiz',
    title: 'CORS Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic CORS concepts.',
    questions: [
      {
        question: 'What does CORS stand for?',
        options: [
          'Cross-Origin Resource Sharing',
          'Cross-Origin Request Security',
          'Cross-Origin Response System',
          'Cross-Origin Request Service',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which header controls allowed origins?',
        options: [
          'Access-Control-Allow-Origin',
          'Origin-Allow-Access',
          'Allow-Origin-Access',
          'Cross-Origin-Allow',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the risk of using "*" in CORS configuration?',
        options: [
          'It allows requests from any origin',
          'It blocks all requests',
          'It only allows local requests',
          'It requires authentication',
        ],
        correctAnswer: 0,
      },
    ],
  },
];