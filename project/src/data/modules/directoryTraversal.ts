import { CourseModule } from '../../types/course';

export const directoryTraversalModules: CourseModule[] = [
  {
    id: 'dir-traversal-intro',
    title: 'Introduction to Directory Traversal',
    duration: '45m',
    type: 'video',
    status: 'available',
    description: 'Understanding directory traversal vulnerabilities and their impact.',
    videoUrl: 'https://example.com/videos/directory-traversal-intro',
  },
  {
    id: 'dir-traversal-lab',
    title: 'Directory Traversal Lab',
    duration: '1h 30m',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting directory traversal vulnerabilities.',
    labInstructions: `
Directory Traversal Testing Lab:

1. Setup:
   - Access the vulnerable file server
   - Review the file access mechanisms
   - Prepare testing tools

2. Objectives:
   - Identify vulnerable file access endpoints
   - Test path traversal sequences
   - Access sensitive files
   - Document findings

3. Advanced Challenges:
   - Bypass basic filters
   - Handle encoded traversal sequences
   - Test for null byte injection
    `,
  },
  {
    id: 'dir-traversal-quiz',
    title: 'Directory Traversal Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of directory traversal concepts.',
    questions: [
      {
        question: 'Which sequence is commonly used for directory traversal in Windows?',
        options: [
          '..\\',
          '//',
          '&&',
          '--',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against directory traversal attacks?',
        options: [
          'Proper input validation and sanitization',
          'Disabling file access',
          'Using only absolute paths',
          'Removing error messages',
        ],
        correctAnswer: 0,
      },
    ],
  },
];