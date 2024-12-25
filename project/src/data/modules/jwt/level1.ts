import { CourseModule } from '../../../types/course';

export const jwtLevel1Modules: CourseModule[] = [
  {
    id: 'jwt-level1-intro',
    title: 'Level 1: JWT Attack Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of JWT structure, common vulnerabilities, and attack vectors.',
    videoUrl: 'https://example.com/videos/jwt-basics',
  },
  {
    id: 'jwt-level1-lab',
    title: 'Basic JWT Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic JWT vulnerabilities.',
    labInstructions: `
JWT Fundamentals Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Configure JWT testing tools
   - Understand JWT structure and validation

2. Basic Vulnerabilities:
   \`\`\`javascript
   // Vulnerable JWT validation
   app.get('/api/user', (req, res) => {
     const token = req.headers.authorization?.split(' ')[1];
     
     try {
       // ❌ VULNERABLE: No algorithm verification
       const decoded = jwt.verify(token, SECRET_KEY);
       res.json(decoded);
     } catch (error) {
       res.status(401).json({ error: 'Invalid token' });
     }
   });

   // Secure implementation
   app.get('/api/user', (req, res) => {
     const token = req.headers.authorization?.split(' ')[1];
     
     try {
       // ✅ Specify algorithm and verify
       const decoded = jwt.verify(token, SECRET_KEY, {
         algorithms: ['HS256']
       });
       res.json(decoded);
     } catch (error) {
       res.status(401).json({ error: 'Invalid token' });
     }
   });
   \`\`\`

3. Basic Attack Techniques:
   - Token structure analysis
   - Header manipulation
   - Signature verification bypass
   - None algorithm attack

4. Testing Methodology:
   - JWT token inspection
   - Algorithm identification
   - Basic token manipulation
   - Signature validation tests
    `,
  },
  {
    id: 'jwt-level1-quiz',
    title: 'JWT Security Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic JWT security concepts.',
    questions: [
      {
        question: 'Which part of a JWT contains the claims?',
        options: [
          'Payload',
          'Header',
          'Signature',
          'Footer',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the "none" algorithm attack?',
        options: [
          'Removing signature validation requirement',
          'Adding encryption',
          'Changing the payload',
          'Modifying headers',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the best practice for JWT algorithm selection?',
        options: [
          'Explicitly specify allowed algorithms',
          'Accept any algorithm',
          'Use default settings',
          'Disable algorithm checking',
        ],
        correctAnswer: 0,
      },
    ],
  },
];