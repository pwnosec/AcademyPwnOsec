import { CourseModule } from '../../types/course';

export const webSecurityModules: CourseModule[] = [
  {
    id: 'web-sec-intro',
    title: 'Web Security Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Understanding the core concepts of web application security and common attack vectors.',
    videoUrl: 'https://example.com/videos/web-security-intro',
  },
  {
    id: 'web-sec-lab',
    title: 'Security Headers Lab',
    duration: '1h 30m',
    type: 'lab',
    status: 'available',
    description: 'Learn how to implement and test security headers in web applications.',
    labInstructions: `
In this lab, you'll work with security headers:

1. Environment Setup:
   - Clone the provided web application
   - Review current security headers
   - Use security header scanning tools

2. Tasks:
   - Implement Content Security Policy (CSP)
   - Configure HSTS headers
   - Set up X-Frame-Options
   - Test header effectiveness

3. Validation:
   - Use security scanners to verify headers
   - Test against common attack scenarios
   - Document implementation challenges
    `,
  },
  {
    id: 'web-sec-quiz',
    title: 'Web Security Assessment',
    duration: '45m',
    type: 'quiz',
    status: 'available',
    description: 'Evaluate your understanding of web security concepts and best practices.',
    questions: [
      {
        question: 'Which security header prevents clickjacking attacks?',
        options: [
          'X-Frame-Options',
          'Content-Security-Policy',
          'X-XSS-Protection',
          'X-Content-Type-Options',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of CORS?',
        options: [
          'To control resource sharing between origins',
          'To encrypt data in transit',
          'To validate user input',
          'To prevent SQL injection',
        ],
        correctAnswer: 0,
      },
    ],
  },
];