import { CourseModule } from '../../../types/course';

export const corsLevel3Modules: CourseModule[] = [
  {
    id: 'cors-level3-intro',
    title: 'Level 3: Expert CORS Security',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level CORS security and enterprise-grade implementations.',
    videoUrl: 'https://example.com/videos/expert-cors',
  },
  {
    id: 'cors-level3-lab',
    title: 'Expert CORS Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice implementing enterprise-grade CORS security.',
    labInstructions: `
Expert CORS Laboratory

1. Enterprise Patterns:
   - Microservices CORS
   - API Gateway configuration
   - Cloud service integration
   - Multi-origin management

2. Implementation Examples:
   \`\`\`javascript
   class CORSSecurityManager {
     constructor(options = {}) {
       this.allowedOrigins = new Set(options.allowedOrigins || []);
       this.allowedMethods = options.allowedMethods || ['GET', 'POST'];
       this.allowCredentials = options.allowCredentials || false;
       this.maxAge = options.maxAge || 86400;
     }

     validateOrigin(origin) {
       if (!origin) return false;
       
       // Check against allowed origins
       if (this.allowedOrigins.has(origin)) {
         return true;
       }
       
       // Check against patterns
       return Array.from(this.allowedOrigins).some(pattern => {
         if (pattern.includes('*')) {
           const regex = new RegExp(
             '^' + pattern.replace(/\*/g, '[^.]+') + '$'
           );
           return regex.test(origin);
         }
         return false;
       });
     }

     generateHeaders(req) {
       const origin = req.headers.origin;
       
       if (!this.validateOrigin(origin)) {
         return {};
       }

       const headers = {
         'Access-Control-Allow-Origin': origin,
         'Vary': 'Origin'
       };

       if (this.allowCredentials) {
         headers['Access-Control-Allow-Credentials'] = 'true';
       }

       if (req.method === 'OPTIONS') {
         headers['Access-Control-Allow-Methods'] = 
           this.allowedMethods.join(', ');
         headers['Access-Control-Max-Age'] = this.maxAge;
       }

       return headers;
     }
   }

   // Usage in Express middleware
   const corsManager = new CORSSecurityManager({
     allowedOrigins: [
       'https://main.example.com',
       '*.trusted-domain.com'
     ],
     allowedMethods: ['GET', 'POST', 'PUT'],
     allowCredentials: true
   });

   app.use((req, res, next) => {
     const corsHeaders = corsManager.generateHeaders(req);
     Object.entries(corsHeaders).forEach(([key, value]) => {
       res.header(key, value);
     });
     next();
   });
   \`\`\`

3. Advanced Security Controls:
   - Dynamic policy management
   - Audit logging
   - Attack detection
   - Automated testing

4. Enterprise Considerations:
   - Compliance requirements
   - Performance optimization
   - Scalability concerns
   - Monitoring and alerts
    `,
  },
  {
    id: 'cors-level3-quiz',
    title: 'Expert CORS Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of CORS security.',
    questions: [
      {
        question: 'Which header is required when using credentials?',
        options: [
          'Access-Control-Allow-Credentials',
          'Allow-Credentials',
          'Credentials-Allow',
          'Allow-Access-Credentials',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Why is the Vary: Origin header important?',
        options: [
          'For proper caching with multiple origins',
          'To block all origins',
          'To allow all origins',
          'To improve performance',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best practice for handling multiple origins?',
        options: [
          'Maintain a whitelist and validate each origin',
          'Use wildcard (*) for all origins',
          'Block all cross-origin requests',
          'Allow any origin',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is most important for enterprise CORS security?',
        options: [
          'Comprehensive logging and monitoring',
          'Using wildcards',
          'Blocking all requests',
          'Allowing all methods',
        ],
        correctAnswer: 0,
      },
    ],
  },
];