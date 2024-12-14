import { CourseModule } from '../../types/course';

export const authVulnerabilitiesModules: CourseModule[] = [
  {
    id: 'auth-intro',
    title: 'Introduction to Authentication Vulnerabilities',
    duration: '45m',
    type: 'video',
    status: 'available',
    description: 'Learn about common authentication vulnerabilities and their impact on web applications.',
    videoUrl: 'https://example.com/videos/auth-vulnerabilities-intro',
  },
  {
    id: 'auth-lab',
    title: 'Authentication Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting authentication vulnerabilities in a controlled environment.',
    labInstructions: `
In this lab, you'll explore common authentication vulnerabilities:

1. Environment Setup:
   - Access the vulnerable web application
   - Review the authentication mechanisms
   - Set up testing tools

2. Tasks:
   - Test for password brute-forcing
   - Identify username enumeration
   - Exploit remember-me functionality
   - Test 2FA bypass methods

3. Challenge:
   - Find and document all authentication weaknesses
   - Implement proper security controls
   - Test the effectiveness of your fixes
    `,
  },
  {
    id: 'auth-quiz',
    title: 'Authentication Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of authentication vulnerabilities and security controls.',
    questions: [
      {
        question: 'Which of the following is NOT a secure password storage method?',
        options: [
          'Plain MD5 hashing',
          'Bcrypt with salt',
          'Argon2 with salt',
          'PBKDF2 with salt',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of implementing rate limiting?',
        options: [
          'Prevent brute force attacks',
          'Increase server performance',
          'Improve user experience',
          'Reduce bandwidth usage',
        ],
        correctAnswer: 0,
      },
    ],
  },
];