import { CourseModule } from '../../../types/course';

export const authVulnerabilitiesLevel3Modules: CourseModule[] = [
  {
    id: 'auth-level3-intro',
    title: 'Level 3: Expert Authentication Security',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level authentication security and implement enterprise-grade solutions.',
    videoUrl: 'https://example.com/videos/expert-auth',
  },
  {
    id: 'auth-level3-lab',
    title: 'Expert Authentication Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice implementing and testing enterprise authentication systems.',
    labInstructions: `
Expert Authentication Laboratory

1. Advanced Implementation:
   - Single Sign-On (SSO) security
   - SAML vulnerability testing
   - Passwordless authentication
   - Biometric authentication security

2. Enterprise Solutions:
   - Identity Provider (IdP) security
   - Federation security
   - Zero Trust authentication
   - Adaptive authentication

3. Expert Techniques:
   \`\`\`xml
   <!-- SAML assertion manipulation -->
   <saml:Assertion>
     <saml:Subject>
       <saml:NameID>admin@example.com</saml:NameID>
     </saml:Subject>
     <saml:AttributeStatement>
       <saml:Attribute Name="role">
         <saml:AttributeValue>administrator</saml:AttributeValue>
       </saml:Attribute>
     </saml:AttributeStatement>
   </saml:Assertion>

   <!-- OpenID Connect token manipulation -->
   {
     "iss": "https://auth.example.com",
     "sub": "admin_user",
     "aud": "client_id",
     "exp": 1735689600,
     "custom_claim": "manipulated_value"
   }
   \`\`\`

4. Advanced Security Controls:
   - Certificate pinning
   - Mutual TLS authentication
   - Hardware security modules
   - Behavioral biometrics
    `,
  },
  {
    id: 'auth-level3-quiz',
    title: 'Expert Authentication Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of authentication security.',
    questions: [
      {
        question: 'Which attack can compromise SAML-based SSO implementations?',
        options: [
          'XML Signature Wrapping',
          'SQL Injection',
          'Cross-site Scripting',
          'Buffer Overflow',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary benefit of certificate pinning?',
        options: [
          'Prevents man-in-the-middle attacks',
          'Improves performance',
          'Reduces bandwidth usage',
          'Simplifies configuration',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is a key principle of Zero Trust authentication?',
        options: [
          'Never trust, always verify',
          'Trust but verify',
          'Trust internal networks',
          'Verify once, trust always',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is adaptive authentication?',
        options: [
          'Adjusting security based on risk factors',
          'Using multiple passwords',
          'Changing passwords regularly',
          'Using biometric authentication',
        ],
        correctAnswer: 0,
      },
    ],
  },
];