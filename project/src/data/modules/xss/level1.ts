import { CourseModule } from '../../../types/course';

export const xssLevel1Modules: CourseModule[] = [
  {
    id: 'xss-level1-intro',
    title: 'Level 1: XSS Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of Cross-Site Scripting (XSS) attacks and their impact on web security.',
    videoUrl: 'https://example.com/videos/xss-basics',
  },
  {
    id: 'xss-level1-lab',
    title: 'Basic XSS Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic XSS vulnerabilities.',
    labInstructions: `
XSS Fundamentals Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Configure browser developer tools
   - Prepare basic XSS payloads

2. Basic XSS Types:
   - Reflected XSS
   - Stored XSS
   - DOM-based XSS

3. Practice Exercises:
   \`\`\`javascript
   // Basic alert payloads
   <script>alert('XSS')</script>
   
   // Basic HTML injection
   <img src="x" onerror="alert('XSS')">
   
   // DOM manipulation
   <script>document.write(document.location.hash.substring(1))</script>
   \`\`\`

4. Basic Defense Techniques:
   - HTML encoding
   - JavaScript escaping
   - Basic input validation
   - Output sanitization

5. Testing Methodology:
   - Identifying input points
   - Testing reflection points
   - Analyzing responses
   - Documenting findings
    `,
  },
  {
    id: 'xss-level1-quiz',
    title: 'XSS Fundamentals Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic XSS concepts.',
    questions: [
      {
        question: 'Which type of XSS attack is immediately reflected back to the user?',
        options: [
          'Reflected XSS',
          'Stored XSS',
          'DOM-based XSS',
          'Persistent XSS',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary defense against XSS attacks?',
        options: [
          'Output encoding',
          'Firewall rules',
          'Strong passwords',
          'SSL certificates',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which context requires different encoding methods for XSS prevention?',
        options: [
          'All of the above',
          'HTML attributes',
          'JavaScript code',
          'URL parameters',
        ],
        correctAnswer: 0,
      },
    ],
  },
];