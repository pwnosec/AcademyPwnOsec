import { CourseModule } from '../../types/course';

export const accessControlModules: CourseModule[] = [
  {
    id: 'access-control-intro',
    title: 'Introduction to Access Control',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn about access control vulnerabilities and their impact on application security.',
    videoUrl: 'https://example.com/videos/access-control-intro',
  },
  {
    id: 'access-control-lab',
    title: 'Access Control Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting access control vulnerabilities.',
    labInstructions: `
Access Control Testing Lab:

1. Environment Setup:
   - Access the vulnerable web application
   - Review user roles and permissions
   - Set up testing tools

2. Tasks:
   - Test vertical privilege escalation
   - Identify horizontal privilege bypass
   - Exploit insecure direct object references
   - Test access control in APIs

3. Advanced Challenges:
   - Bypass role-based restrictions
   - Exploit missing function level access control
   - Test for indirect object references
    `,
  },
  {
    id: 'access-control-quiz',
    title: 'Access Control Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of access control vulnerabilities and security.',
    questions: [
      {
        question: 'What is horizontal privilege escalation?',
        options: [
          'Accessing resources of other users at same privilege level',
          'Gaining admin privileges',
          'Accessing public resources',
          'Bypassing authentication',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the best practice for implementing access control?',
        options: [
          'Deny by default, allow explicitly',
          'Allow by default, deny explicitly',
          'Check only authentication',
          'Hide sensitive functions',
        ],
        correctAnswer: 0,
      },
    ],
  },
];