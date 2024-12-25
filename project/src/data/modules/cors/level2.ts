import { CourseModule } from '../../../types/course';

export const corsLevel2Modules: CourseModule[] = [
  {
    id: 'cors-level2-intro',
    title: 'Level 2: Advanced CORS Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced CORS configurations and exploitation techniques.',
    videoUrl: 'https://example.com/videos/advanced-cors',
  },
  {
    id: 'cors-level2-lab',
    title: 'Advanced CORS Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced CORS exploitation and bypass techniques.',
    labInstructions: `
Advanced CORS Laboratory

1. Advanced Techniques:
   - Preflight requests
   - Credential handling
   - Header exploitation
   - Origin validation bypass

2. Advanced Exploitation:
   \`\`\`javascript
   // Testing preflight requests
   fetch('https://api.target.com/sensitive', {
     method: 'PUT',
     headers: {
       'Custom-Header': 'test'
     },
     credentials: 'include'
   });

   // Origin reflection exploitation
   const maliciousOrigin = 'https://evil.com';
   fetch('https://vulnerable-api.com/data', {
     headers: {
       'Origin': maliciousOrigin
     }
   });
   \`\`\`

3. Security Testing:
   - Null origin bypass
   - Subdomain bypass
   - Protocol bypass
   - Reflected origins

4. Advanced Scenarios:
   - Complex origin validation
   - Dynamic CORS policies
   - Credential-based attacks
   - Header-based bypasses
    `,
  },
  {
    id: 'cors-level2-quiz',
    title: 'Advanced CORS Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced CORS concepts.',
    questions: [
      {
        question: 'What triggers a preflight request?',
        options: [
          'Non-simple requests with custom headers',
          'All GET requests',
          'All POST requests',
          'Simple requests only',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which credential mode is most secure?',
        options: [
          'same-origin',
          'include',
          'omit',
          'all',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is origin reflection?',
        options: [
          'Copying the Origin header to Access-Control-Allow-Origin',
          'Blocking all origins',
          'Allowing all origins',
          'Removing origin headers',
        ],
        correctAnswer: 0,
      },
    ],
  },
];