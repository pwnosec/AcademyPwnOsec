import { CourseModule } from '../../../types/course';

export const csrfLevel1Modules: CourseModule[] = [
  {
    id: 'csrf-level1-intro',
    title: 'Level 1: CSRF Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of Cross-Site Request Forgery attacks and their impact on web security.',
    videoUrl: 'https://example.com/videos/csrf-basics',
  },
  {
    id: 'csrf-level1-lab',
    title: 'Basic CSRF Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic CSRF vulnerabilities.',
    labInstructions: `
CSRF Fundamentals Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review form submissions
   - Understand basic CSRF concepts

2. Basic Vulnerabilities:
   \`\`\`javascript
   // Vulnerable Express endpoint
   app.post('/transfer', (req, res) => {
     const { to, amount } = req.body;
     
     // ❌ VULNERABLE: No CSRF protection
     if (req.session.user) {
       performTransfer(req.session.user, to, amount);
       res.send('Transfer successful');
     }
   });

   // Basic secure implementation
   const csrf = require('csurf');
   const csrfProtection = csrf({ cookie: true });

   app.post('/transfer', csrfProtection, (req, res) => {
     const { to, amount } = req.body;
     
     // ✅ Protected with CSRF token
     if (req.session.user) {
       performTransfer(req.session.user, to, amount);
       res.send('Transfer successful');
     }
   });

   // HTML Form with CSRF Protection
   <form action="/transfer" method="POST">
     <input type="hidden" name="_csrf" value="<%= csrfToken %>">
     <input type="text" name="to" placeholder="Recipient">
     <input type="number" name="amount" placeholder="Amount">
     <button type="submit">Transfer</button>
   </form>
   \`\`\`

3. Basic Attack Scenario:
   \`\`\`html
   <!-- Malicious form on attacker's website -->
   <form action="http://bank.com/transfer" method="POST" id="csrf-form">
     <input type="hidden" name="to" value="attacker">
     <input type="hidden" name="amount" value="1000">
   </form>
   <script>
     document.getElementById('csrf-form').submit();
   </script>
   \`\`\`

4. Basic Defense Techniques:
   - CSRF tokens
   - SameSite cookies
   - Custom headers
   - Referrer validation
    `,
  },
  {
    id: 'csrf-level1-quiz',
    title: 'CSRF Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic CSRF concepts.',
    questions: [
      {
        question: 'What is the main purpose of CSRF attacks?',
        options: [
          'To perform unauthorized actions on behalf of authenticated users',
          'To steal user credentials',
          'To inject malicious code',
          'To intercept network traffic',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which HTTP method is naturally protected against CSRF?',
        options: [
          'GET',
          'POST',
          'PUT',
          'DELETE',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against CSRF?',
        options: [
          'CSRF tokens with proper validation',
          'Input validation',
          'HTTPS encryption',
          'Password protection',
        ],
        correctAnswer: 0,
      },
    ],
  },
];