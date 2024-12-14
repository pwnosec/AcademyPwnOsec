import { CourseModule } from '../../types/course';

export const ssrfModules: CourseModule[] = [
  {
    id: 'ssrf-intro',
    title: 'Introduction to SSRF',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn about Server-Side Request Forgery vulnerabilities and their impact.',
    videoUrl: 'https://example.com/videos/ssrf-intro',
  },
  {
    id: 'ssrf-lab',
    title: 'SSRF Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting SSRF vulnerabilities.',
    labInstructions: `
SSRF Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review URL processing functionality
   - Set up local testing environment

2. Basic Tests:
   - Test internal network access
   - Exploit URL parsers
   - Access cloud metadata endpoints
   - Bypass hostname validation

3. Advanced Challenges:
   - Bypass blacklist filters
   - Use different protocols
   - Chain SSRF with other vulnerabilities
    `,
  },
  {
    id: 'ssrf-quiz',
    title: 'SSRF Security Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of SSRF vulnerabilities.',
    questions: [
      {
        question: 'Which is a common target for SSRF attacks?',
        options: [
          'Cloud instance metadata service',
          'Public web servers',
          'DNS servers',
          'Email servers',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against SSRF?',
        options: [
          'Whitelist allowed destinations',
          'Block all internal IPs',
          'Use only HTTPS',
          'Disable URL processing',
        ],
        correctAnswer: 0,
      },
    ],
  },
];