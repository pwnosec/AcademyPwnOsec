import { CourseModule } from '../../types/course';

export const jwtModules: CourseModule[] = [
  {
    id: 'jwt-intro',
    title: 'Introduction to JWT Security',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn about JSON Web Token security and common vulnerabilities.',
    videoUrl: 'https://example.com/videos/jwt-intro',
  },
  {
    id: 'jwt-lab',
    title: 'JWT Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting JWT vulnerabilities.',
    labInstructions: `
JWT Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review JWT implementation
   - Set up testing tools

2. Basic Tests:
   - Test signature verification
   - Modify token claims
   - Test algorithm confusion
   - Document findings

3. Advanced Challenges:
   - Crack weak secrets
   - Exploit "none" algorithm
   - Test for key injection
    `,
  },
  {
    id: 'jwt-quiz',
    title: 'JWT Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of JWT security.',
    questions: [
      {
        question: 'Which part of a JWT contains the signature?',
        options: [
          'Third part',
          'First part',
          'Second part',
          'Fourth part',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best practice for JWT secrets?',
        options: [
          'Use strong random values',
          'Use simple passwords',
          'Use public keys only',
          'Use static values',
        ],
        correctAnswer: 0,
      },
    ],
  },
];