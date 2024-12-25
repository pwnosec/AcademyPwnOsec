import { CourseModule } from '../../../types/course';

export const authVulnerabilitiesLevel1Modules: CourseModule[] = [
  {
    id: 'auth-level1-intro',
    title: 'Level 1: Authentication Basics',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn fundamental authentication concepts and common vulnerabilities.',
    videoUrl: 'https://example.com/videos/auth-basics',
  },
  {
    id: 'auth-level1-lab',
    title: 'Basic Authentication Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic authentication vulnerabilities.',
    labInstructions: `
Authentication Basics Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review login functionality
   - Prepare basic testing tools

2. Basic Techniques:
   - Username enumeration
   - Weak password policies
   - Basic brute force attacks
   - Remember-me functionality testing

3. Practice Exercises:
   - Test password complexity requirements
   - Identify username enumeration vectors
   - Analyze session handling
   - Test password reset functionality

4. Defense Basics:
   - Understanding secure password storage
   - Basic rate limiting
   - Proper session management
   - Secure password reset implementation
    `,
  },
  {
    id: 'auth-level1-quiz',
    title: 'Authentication Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic authentication security concepts.',
    questions: [
      {
        question: 'Which of these is NOT a secure way to store passwords?',
        options: [
          'Plain MD5 hashing',
          'Bcrypt with salt',
          'Argon2 with salt',
          'PBKDF2 with salt',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of rate limiting?',
        options: [
          'To prevent brute force attacks',
          'To improve server performance',
          'To reduce bandwidth usage',
          'To encrypt passwords',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is a sign of username enumeration?',
        options: [
          'Different error messages for existing vs non-existing users',
          'HTTPS usage',
          'Password complexity requirements',
          'Session timeout',
        ],
        correctAnswer: 0,
      },
    ],
  },
];