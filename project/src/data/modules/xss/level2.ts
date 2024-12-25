import { CourseModule } from '../../../types/course';

export const xssLevel2Modules: CourseModule[] = [
  {
    id: 'xss-level2-intro',
    title: 'Level 2: Advanced XSS Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced XSS exploitation techniques and bypass methods.',
    videoUrl: 'https://example.com/videos/advanced-xss',
  },
  {
    id: 'xss-level2-lab',
    title: 'Advanced XSS Testing Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced XSS techniques and filter bypass methods.',
    labInstructions: `
Advanced XSS Laboratory

1. Advanced Techniques:
   - Filter bypass methods
   - CSP bypass techniques
   - DOM clobbering
   - XSS in different contexts

2. Advanced Payloads:
   \`\`\`javascript
   // Encoded payloads
   javascript:eval(atob('YWxlcnQoJ1hTUycpOw=='))
   
   // Event handler XSS
   <svg><animate onbegin=alert(1) attributeName=x dur=1s>
   
   // DOM clobbering
   <form id=x><input name=y>
   <script>alert(x.y.value)</script>
   \`\`\`

3. Filter Bypass Techniques:
   - Character encoding tricks
   - Alternative syntax
   - Protocol handlers
   - Template literals

4. Context-Specific Attacks:
   - HTML attribute injection
   - JavaScript context
   - URL context
   - CSS context

5. Advanced Defense Analysis:
   - Understanding WAF bypasses
   - CSP implementation
   - Input sanitization libraries
   - Context-aware encoding
    `,
  },
  {
    id: 'xss-level2-quiz',
    title: 'Advanced XSS Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced XSS techniques.',
    questions: [
      {
        question: 'Which encoding can be used to bypass basic XSS filters?',
        options: [
          'HTML entity encoding',
          'ROT13 encoding',
          'URL encoding',
          'All of the above',
        ],
        correctAnswer: 3,
      },
      {
        question: 'What is DOM clobbering?',
        options: [
          'Overwriting DOM properties to create XSS vectors',
          'Removing DOM elements',
          'Modifying the DOM structure',
          'Creating new DOM events',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which CSP directive prevents inline script execution?',
        options: [
          'script-src self',
          'default-src self',
          'style-src self',
          'img-src self',
        ],
        correctAnswer: 0,
      },
    ],
  },
];