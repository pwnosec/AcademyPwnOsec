import { CourseModule } from '../../types/course';

export const corsModules: CourseModule[] = [
  {
    id: 'cors-intro',
    title: 'Introduction to CORS Vulnerabilities',
    duration: '45m',
    type: 'video',
    status: 'available',
    description: 'Learn about Cross-Origin Resource Sharing vulnerabilities.',
    videoUrl: 'https://example.com/videos/cors-intro',
  },
  {
    id: 'cors-lab',
    title: 'CORS Testing Lab',
    duration: '1h 30m',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting CORS misconfigurations.',
    labInstructions: `
CORS Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review CORS configurations
   - Set up cross-origin test environment

2. Basic Tests:
   - Test CORS headers
   - Exploit misconfigured origins
   - Test credential handling
   - Document findings

3. Advanced Challenges:
   - Bypass origin validation
   - Exploit null origin
   - Test wildcard configurations
    `,
  },
  {
    id: 'cors-quiz',
    title: 'CORS Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of CORS security.',
    questions: [
      {
        question: 'What does Access-Control-Allow-Origin: * mean?',
        options: [
          'Allow requests from any origin',
          'Block all cross-origin requests',
          'Allow only local requests',
          'Require authentication',
        ],
        correctAnswer: 0,
      },
      {
        question: 'When are preflight requests sent?',
        options: [
          'For non-simple requests',
          'For all requests',
          'Only for GET requests',
          'Only for POST requests',
        ],
        correctAnswer: 0,
      },
    ],
  },
];