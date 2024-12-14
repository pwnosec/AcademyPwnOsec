import { CourseModule } from '../../types/course';

export const xssModules: CourseModule[] = [
  {
    id: 'xss-intro',
    title: 'Understanding XSS Attacks',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn about different types of Cross-Site Scripting attacks and their impact.',
    videoUrl: 'https://example.com/videos/xss-intro',
  },
  {
    id: 'xss-lab',
    title: 'XSS Prevention Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Hands-on practice with XSS prevention techniques.',
    labInstructions: `
XSS Prevention Laboratory Exercise:

1. Setup:
   - Access the vulnerable blog application
   - Review the current input handling
   - Identify XSS vulnerabilities

2. Objectives:
   - Implement input validation
   - Apply output encoding
   - Configure Content Security Policy
   - Test XSS prevention measures

3. Challenges:
   - Find and fix reflected XSS
   - Prevent stored XSS attacks
   - Implement CSP without breaking functionality
    `,
  },
  {
    id: 'xss-quiz',
    title: 'XSS Knowledge Check',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of XSS vulnerabilities and prevention techniques.',
    questions: [
      {
        question: "Which type of XSS persists in the application database?",
        options: [
          'Stored XSS',
          'Reflected XSS',
          'DOM-based XSS',
          'None of the above',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary defense against XSS attacks?',
        options: [
          'Output encoding',
          'Input validation',
          'Using HTTPS',
          'Disabling JavaScript',
        ],
        correctAnswer: 0,
      },
    ],
  },
];