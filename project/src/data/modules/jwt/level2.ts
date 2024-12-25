import { CourseModule } from '../../../types/course';

export const jwtLevel2Modules: CourseModule[] = [
  {
    id: 'jwt-level2-intro',
    title: 'Level 2: Advanced JWT Attacks',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced JWT exploitation techniques and bypass methods.',
    videoUrl: 'https://example.com/videos/advanced-jwt',
  },
  {
    id: 'jwt-level2-lab',
    title: 'Advanced JWT Testing Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced JWT attack techniques and bypass methods.',
    labInstructions: `
Advanced JWT Laboratory

1. Advanced Techniques:
   - Key confusion attacks
   - Algorithm switching
   - Weak secret cracking
   - Token forging

2. Advanced Attacks:
   \`\`\`javascript
   // Key confusion example
   {
     "alg": "RS256",
     "typ": "JWT",
     "kid": "../../public/key"
   }

   // Algorithm switching attack
   {
     "alg": "HS256",    // Changed from RS256
     "typ": "JWT"
   }

   // Weak secret dictionary
   const commonSecrets = [
     'secret',
     'key',
     'secretkey',
     'private',
     'mysecret',
     // ... more common secrets
   ];

   async function crackJWT(token) {
     for (const secret of commonSecrets) {
       try {
         jwt.verify(token, secret);
         return secret; // Found the secret
       } catch (e) {
         continue;
       }
     }
   }
   \`\`\`

3. Testing Tools:
   - JWT_Tool usage
   - Burp Suite JWT Editor
   - Custom cracking scripts
   - Token manipulation tools

4. Advanced Scenarios:
   - Kid parameter injection
   - JWK header injection
   - Blank password attack
   - Signature stripping
    `,
  },
  {
    id: 'jwt-level2-quiz',
    title: 'Advanced JWT Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced JWT attack techniques.',
    questions: [
      {
        question: 'What is a key confusion attack?',
        options: [
          'Tricking the system into using a different key type',
          'Changing the key value',
          'Removing the key',
          'Adding multiple keys',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which parameter is commonly used in header injection attacks?',
        options: [
          'kid (Key ID)',
          'exp (Expiration)',
          'iat (Issued At)',
          'sub (Subject)',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What makes a JWT secret weak?',
        options: [
          'Common words or predictable patterns',
          'Length over 32 characters',
          'Special characters',
          'Numeric values',
        ],
        correctAnswer: 0,
      },
    ],
  },
];