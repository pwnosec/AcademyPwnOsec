import { CourseModule } from '../../../types/course';

export const csrfLevel2Modules: CourseModule[] = [
  {
    id: 'csrf-level2-intro',
    title: 'Level 2: Advanced CSRF Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced CSRF attack techniques and bypass methods.',
    videoUrl: 'https://example.com/videos/advanced-csrf',
  },
  {
    id: 'csrf-level2-lab',
    title: 'Advanced CSRF Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced CSRF techniques and bypass methods.',
    labInstructions: `
Advanced CSRF Laboratory

1. Advanced Techniques:
   - Token bypass methods
   - JSON CSRF
   - Same-origin bypass
   - Login CSRF

2. Advanced Vulnerabilities:
   \`\`\`javascript
   // JSON CSRF vulnerability
   app.post('/api/update-profile', (req, res) => {
     // ❌ VULNERABLE: Accepts both JSON and form-data
     const contentType = req.headers['content-type'];
     if (contentType?.includes('application/json')) {
       // Process JSON data
       processJsonRequest(req.body);
     } else {
       // Process form data
       processFormRequest(req.body);
     }
   });

   // Login CSRF vulnerability
   app.post('/login', (req, res) => {
     // ❌ VULNERABLE: No CSRF protection on login
     const { username, password } = req.body;
     authenticateUser(username, password)
       .then(user => {
         req.session.user = user;
         res.redirect('/dashboard');
       });
   });

   // Secure implementations
   app.post('/api/update-profile', (req, res) => {
     // ✅ Strict content-type checking
     if (req.headers['content-type'] !== 'application/json') {
       return res.status(406).send('JSON required');
     }
     
     // ✅ Custom header requirement
     if (!req.headers['x-requested-with']) {
       return res.status(403).send('CSRF protection');
     }
     
     processJsonRequest(req.body);
   });

   // Double submit cookie pattern
   app.use((req, res, next) => {
     if (req.method === 'POST') {
       const csrfCookie = req.cookies['csrf-token'];
       const csrfHeader = req.headers['x-csrf-token'];
       
       if (!csrfCookie || !csrfHeader || csrfCookie !== csrfHeader) {
         return res.status(403).send('CSRF validation failed');
       }
     }
     next();
   });
   \`\`\`

3. Advanced Attack Scenarios:
   \`\`\`javascript
   // JSON CSRF attack
   <form action="https://api.target.com/update" method="POST" 
         enctype="text/plain" id="csrf-form">
     <input type="hidden" name='{"name":"evil","email":"evil@attack.com","padding":"'
            value='"}'>
   </form>

   // Login CSRF attack
   <form action="https://target.com/login" method="POST" id="csrf-form">
     <input type="hidden" name="username" value="attacker">
     <input type="hidden" name="password" value="evil123">
   </form>
   \`\`\`

4. Advanced Defense:
   - Double submit cookie
   - Custom request headers
   - SameSite=Strict cookies
   - Origin validation
    `,
  },
  {
    id: 'csrf-level2-quiz',
    title: 'Advanced CSRF Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced CSRF concepts.',
    questions: [
      {
        question: 'What is Login CSRF?',
        options: [
          'Forcing a user to login as the attacker',
          'Stealing login credentials',
          'Bypassing login forms',
          'Creating fake accounts',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which header helps prevent JSON CSRF?',
        options: [
          'Content-Type with strict validation',
          'Authorization',
          'Cookie',
          'Origin',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the double submit cookie pattern?',
        options: [
          'Comparing a cookie value with a request header/parameter',
          'Using two different cookies',
          'Submitting the form twice',
          'Double encryption of cookies',
        ],
        correctAnswer: 0,
      },
    ],
  },
];