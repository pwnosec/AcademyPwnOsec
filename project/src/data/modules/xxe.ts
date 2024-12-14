import { CourseModule } from '../../types/course';

export const xxeModules: CourseModule[] = [
  {
    id: 'xxe-intro',
    title: 'Introduction to XXE Injection',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn about XML External Entity (XXE) injection vulnerabilities.',
    videoUrl: 'https://example.com/videos/xxe-intro',
  },
  {
    id: 'xxe-lab',
    title: 'XXE Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting XXE vulnerabilities.',
    labInstructions: `
XXE Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review XML processing functionality
   - Prepare XXE payloads

2. Basic Tests:
   - Test for file disclosure
   - Exploit external entities
   - Test SYSTEM keyword
   - Document findings

3. Advanced Challenges:
   - Bypass XML parsing restrictions
   - Exploit blind XXE
   - Chain XXE with other vulnerabilities
    `,
  },
  {
    id: 'xxe-quiz',
    title: 'XXE Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of XXE vulnerabilities.',
    questions: [
      {
        question: 'Which feature should be disabled to prevent XXE?',
        options: [
          'External entity processing',
          'XML validation',
          'XML formatting',
          'XML namespaces',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What can XXE vulnerabilities typically lead to?',
        options: [
          'File content disclosure',
          'SQL injection',
          'Cross-site scripting',
          'Buffer overflow',
        ],
        correctAnswer: 0,
      },
    ],
  },
];