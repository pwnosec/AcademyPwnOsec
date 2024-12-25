import { CourseModule } from '../../../types/course';

export const authVulnerabilitiesLevel2Modules: CourseModule[] = [
  {
    id: 'auth-level2-intro',
    title: 'Level 2: Advanced Authentication Attacks',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced authentication bypass techniques and token-based vulnerabilities.',
    videoUrl: 'https://example.com/videos/advanced-auth',
  },
  {
    id: 'auth-level2-lab',
    title: 'Advanced Authentication Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced authentication bypass techniques and token manipulation.',
    labInstructions: `
Advanced Authentication Laboratory

1. Advanced Attack Vectors:
   - OAuth 2.0 vulnerabilities
   - JWT token manipulation
   - Session fixation
   - 2FA bypass techniques

2. Testing Methodology:
   - Token analysis and manipulation
   - OAuth flow analysis
   - Session handling deep dive
   - Authentication flow mapping

3. Advanced Exploitation:
   \`\`\`javascript
   // JWT token manipulation
   {
     "alg": "none",
     "typ": "JWT"
   }
   {
     "user": "admin",
     "role": "administrator",
     "exp": 1735689600
   }

   // OAuth redirect manipulation
   https://example.com/oauth/callback?code=MANIPULATED_CODE
   \`\`\`

4. Defense Implementation:
   - Secure token validation
   - Proper OAuth implementation
   - Multi-factor authentication
   - Session security controls
    `,
  },
  {
    id: 'auth-level2-quiz',
    title: 'Advanced Authentication Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced authentication security concepts.',
    questions: [
      {
        question: 'Which OAuth 2.0 flow is most secure for web applications?',
        options: [
          'Authorization Code Flow with PKCE',
          'Implicit Flow',
          'Password Grant',
          'Client Credentials',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the main security risk of the "none" algorithm in JWTs?',
        options: [
          'It allows token signature bypass',
          'It makes tokens larger',
          'It slows down verification',
          'It requires more processing',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which 2FA method is considered most secure?',
        options: [
          'Hardware security keys',
          'SMS codes',
          'Email codes',
          'Recovery codes',
        ],
        correctAnswer: 0,
      },
    ],
  },
];