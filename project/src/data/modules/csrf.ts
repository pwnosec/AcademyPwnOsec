import { CourseModule } from '../../types/course';

export const csrfModules: CourseModule[] = [
  {
    id: 'csrf-intro',
    title: 'Introduction to CSRF',
    duration: '45m',
    type: 'video',
    status: 'available',
    description: 'Learn about Cross-Site Request Forgery attacks and their impact.',
    videoUrl: 'https://example.com/videos/csrf-intro',
  },
  {
    id: 'csrf-lab',
    title: 'CSRF Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting CSRF vulnerabilities.',
    labInstructions: `
CSRF Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review form submissions
   - Prepare CSRF payloads

2. Basic Tests:
   - Test for missing CSRF tokens
   - Create proof-of-concept exploits
   - Test token validation
   - Document findings

3. Advanced Challenges:
   - Bypass CSRF protections
   - Chain CSRF with other vulnerabilities
   - Test login CSRF
    `,
  },
  {
    id: 'csrf-quiz',
    title: 'CSRF Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of CSRF vulnerabilities.',
    questions: [
      {
        question: 'Which HTTP method is naturally protected against CSRF?',
        options: [
          'GET',
          'POST',
          'PUT',
          'DELETE',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against CSRF?',
        options: [
          'Anti-CSRF tokens',
          'Using only POST requests',
          'Input validation',
          'HTTPS only',
        ],
        correctAnswer: 0,
      },
    ],
  },
];