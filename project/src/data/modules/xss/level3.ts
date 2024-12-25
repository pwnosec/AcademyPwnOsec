import { CourseModule } from '../../../types/course';

export const xssLevel3Modules: CourseModule[] = [
  {
    id: 'xss-level3-intro',
    title: 'Level 3: Expert XSS & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level XSS techniques and implement comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-xss',
  },
  {
    id: 'xss-level3-lab',
    title: 'Expert XSS Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced XSS exploitation and implement robust defense mechanisms.',
    labInstructions: `
Expert XSS Laboratory

1. Advanced Attack Scenarios:
   - Blind XSS attacks
   - Universal XSS (UXSS)
   - Mutation XSS
   - Polyglot XSS payloads

2. Expert Techniques:
   \`\`\`javascript
   // Polyglot XSS payload
   javascript:"/*'/*\`/*--></noscript></title></textarea></style></template></noembed></script><html \" onmouseover=/*&lt;svg/*/onload=alert()//>

   // Mutation-based XSS
   <form><input name="</form><script>alert(1)</script>">
   
   // DOM-based race condition
   <script>
     setTimeout(() => {
       document.body.innerHTML = document.location.hash.slice(1)
     }, 1000)
   </script>
   \`\`\`

3. Advanced Defense Implementation:
   - Strict CSP configuration
   - Subresource Integrity (SRI)
   - Trusted Types API
   - HTTP security headers

4. Security Headers:
   \`\`\`http
   Content-Security-Policy: default-src 'self'; script-src 'nonce-random123'
   X-XSS-Protection: 1; mode=block
   X-Content-Type-Options: nosniff
   Referrer-Policy: strict-origin-when-cross-origin
   \`\`\`

5. Framework-Specific Protections:
   - React XSS prevention
   - Angular security
   - Vue.js protections
   - Sanitizer libraries
    `,
  },
  {
    id: 'xss-level3-quiz',
    title: 'Expert XSS Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of XSS security.',
    questions: [
      {
        question: 'What is a polyglot XSS payload?',
        options: [
          'A payload that works in multiple contexts',
          'A multi-line JavaScript code',
          'A base64 encoded script',
          'A DOM-based attack',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which security header provides the strongest XSS protection?',
        options: [
          'Content-Security-Policy',
          'X-XSS-Protection',
          'X-Content-Type-Options',
          'X-Frame-Options',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of Trusted Types API?',
        options: [
          'Prevent DOM-based XSS attacks',
          'Encrypt user input',
          'Validate URLs',
          'Handle CORS requests',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is NOT a valid CSP source directive?',
        options: [
          'unsafe-dynamic-eval',
          'strict-dynamic',
          'nonce-source',
          'hash-source',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is mutation-based XSS?',
        options: [
          'Attacks that exploit DOM parsing behavior',
          'Stored XSS attacks',
          'Reflected XSS attacks',
          'Template injection attacks',
        ],
        correctAnswer: 0,
      },
    ],
  },
];