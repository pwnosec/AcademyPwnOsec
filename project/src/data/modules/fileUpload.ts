import { CourseModule } from '../../types/course';

export const fileUploadModules: CourseModule[] = [
  {
    id: 'file-upload-intro',
    title: 'Introduction to File Upload Vulnerabilities',
    duration: '45m',
    type: 'video',
    status: 'available',
    description: 'Learn about file upload vulnerabilities and their security implications.',
    videoUrl: 'https://example.com/videos/file-upload-intro',
  },
  {
    id: 'file-upload-lab',
    title: 'File Upload Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting file upload vulnerabilities.',
    labInstructions: `
File Upload Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review file upload functionality
   - Prepare malicious test files

2. Basic Tests:
   - Test file type restrictions
   - Bypass client-side validation
   - Test file extension handling
   - Exploit path traversal in upload

3. Advanced Challenges:
   - Upload web shells
   - Bypass content-type checks
   - Test for race conditions
    `,
  },
  {
    id: 'file-upload-quiz',
    title: 'File Upload Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of file upload vulnerabilities.',
    questions: [
      {
        question: 'Which validation should NOT be relied upon exclusively?',
        options: [
          'Client-side validation',
          'Server-side validation',
          'Content-type validation',
          'File size validation',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a common way to bypass file extension filters?',
        options: [
          'Using multiple extensions (shell.php.jpg)',
          'Using only uppercase extensions',
          'Removing the extension',
          'Using spaces in filenames',
        ],
        correctAnswer: 0,
      },
    ],
  },
];