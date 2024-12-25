import { CourseModule } from '../../../types/course';

export const csrfLevel3Modules: CourseModule[] = [
  {
    id: 'csrf-level3-intro',
    title: 'Level 3: Expert CSRF & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level CSRF security and implement comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-csrf',
  },
  {
    id: 'csrf-level3-lab',
    title: 'Expert CSRF Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice implementing enterprise-grade CSRF protection.',
    labInstructions: `
Expert CSRF Laboratory

1. Enterprise Defense Patterns:
   - Synchronizer token pattern
   - Encrypted token pattern
   - Stateless CSRF tokens
   - Microservices CSRF protection

2. Implementation Examples:
   \`\`\`javascript
   // Advanced CSRF Protection Class
   class CSRFProtection {
     constructor(options = {}) {
       this.secret = options.secret || crypto.randomBytes(32).toString('hex');
       this.tokenLength = options.tokenLength || 32;
       this.cookieName = options.cookieName || 'csrf-token';
       this.headerName = options.headerName || 'X-CSRF-Token';
       this.cookieOptions = {
         httpOnly: true,
         secure: true,
         sameSite: 'strict',
         ...options.cookieOptions
       };
     }

     // Generate encrypted token
     generateToken(userId, action) {
       const timestamp = Date.now();
       const data = \`\${userId}:\${action}:\${timestamp}\`;
       
       // Create HMAC
       const hmac = crypto
         .createHmac('sha256', this.secret)
         .update(data)
         .digest('hex');
       
       // Combine data and HMAC
       const token = Buffer.from(\`\${data}:\${hmac}\`).toString('base64');
       return token;
     }

     // Validate token
     validateToken(token, userId, action) {
       try {
         // Decode token
         const decoded = Buffer.from(token, 'base64').toString();
         const [tokenUserId, tokenAction, timestamp, hmac] = decoded.split(':');
         
         // Validate timestamp (e.g., 15 minutes expiry)
         if (Date.now() - parseInt(timestamp) > 15 * 60 * 1000) {
           return false;
         }
         
         // Validate user and action
         if (tokenUserId !== userId || tokenAction !== action) {
           return false;
         }
         
         // Verify HMAC
         const expectedHmac = crypto
           .createHmac('sha256', this.secret)
           .update(\`\${tokenUserId}:\${tokenAction}:\${timestamp}\`)
           .digest('hex');
         
         return hmac === expectedHmac;
       } catch (error) {
         return false;
       }
     }

     // Middleware for Express
     middleware() {
       return (req, res, next) => {
         // Skip for non-mutating methods
         if (!['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
           return next();
         }
         
         const token = req.headers[this.headerName.toLowerCase()] ||
                      req.body._csrf;
         
         if (!token) {
           return res.status(403).json({ error: 'CSRF token missing' });
         }
         
         if (!this.validateToken(token, req.user.id, req.path)) {
           return res.status(403).json({ error: 'CSRF validation failed' });
         }
         
         next();
       };
     }
   }

   // Usage in Express application
   const csrfProtection = new CSRFProtection({
     secret: process.env.CSRF_SECRET,
     cookieOptions: {
       domain: '.example.com',
       path: '/'
     }
   });

   // Apply middleware
   app.use(csrfProtection.middleware());

   // Generate token for views
   app.use((req, res, next) => {
     if (req.user) {
       res.locals.csrfToken = csrfProtection.generateToken(
         req.user.id,
         req.path
       );
     }
     next();
   });
   \`\`\`

3. Microservices Security:
   \`\`\`javascript
   // API Gateway CSRF protection
   class APIGatewayCSRF {
     async validateRequest(req) {
       // Origin validation
       const origin = req.headers.origin;
       if (!this.isAllowedOrigin(origin)) {
         throw new Error('Invalid origin');
       }
       
       // Token validation
       const token = this.extractToken(req);
       if (!token) {
         throw new Error('Missing CSRF token');
       }
       
       // Rate limiting
       await this.checkRateLimit(req.ip);
       
       // Audit logging
       await this.auditLog.record({
         type: 'csrf_check',
         token,
         origin,
         ip: req.ip,
         path: req.path
       });
     }
     
     isAllowedOrigin(origin) {
       return this.allowedOrigins.has(origin);
     }
     
     extractToken(req) {
       // Multiple token locations
       return (
         req.headers['x-csrf-token'] ||
         req.cookies['csrf-token'] ||
         req.body._csrf
       );
     }
   }
   \`\`\`

4. Security Considerations:
   - Token storage and transmission
   - Cross-origin resource sharing
   - Content security policy
   - Browser security headers
    `,
  },
  {
    id: 'csrf-level3-quiz',
    title: 'Expert CSRF Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of CSRF security.',
    questions: [
      {
        question: 'What is the synchronizer token pattern?',
        options: [
          'Per-session or per-request token validation',
          'Using multiple tokens',
          'Synchronizing requests',
          'Token encryption',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Why is token encryption important in CSRF defense?',
        options: [
          'To prevent token prediction and forgery',
          'To hide the token',
          'To compress the token',
          'To speed up validation',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is most important for CSRF in microservices?',
        options: [
          'Consistent token validation across services',
          'Using different tokens',
          'Avoiding tokens',
          'Token compression',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What makes a CSRF token cryptographically secure?',
        options: [
          'Unpredictability and proper validation',
          'Length of the token',
          'Token visibility',
          'Token storage location',
        ],
        correctAnswer: 0,
      },
    ],
  },
];