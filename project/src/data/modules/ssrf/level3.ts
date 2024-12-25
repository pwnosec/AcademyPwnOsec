import { CourseModule } from '../../../types/course';

export const ssrfLevel3Modules: CourseModule[] = [
  {
    id: 'ssrf-level3-intro',
    title: 'Level 3: Expert SSRF & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level SSRF techniques and implement comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-ssrf',
  },
  {
    id: 'ssrf-level3-lab',
    title: 'Expert SSRF Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced exploitation and implement robust defense mechanisms.',
    labInstructions: `
Expert SSRF Laboratory

1. Advanced Attack Vectors:
   - Blind SSRF exploitation
   - Time-based detection
   - Out-of-band techniques
   - Service-specific attacks

2. Expert Techniques:
   \`\`\`javascript
   // Advanced SSRF protection class
   class SSRFProtection {
     constructor(options = {}) {
       this.allowedHosts = new Set(options.allowedHosts || []);
       this.allowedPorts = new Set(options.allowedPorts || [80, 443]);
       this.allowedSchemes = new Set(options.allowedSchemes || ['http', 'https']);
       this.maxRedirects = options.maxRedirects || 3;
       this.timeout = options.timeout || 5000;
     }

     async validateAndFetch(url, options = {}) {
       try {
         // Parse and validate URL
         const parsedUrl = new URL(url);
         
         // Check scheme
         if (!this.allowedSchemes.has(parsedUrl.protocol.slice(0, -1))) {
           throw new Error('Protocol not allowed');
         }
         
         // Resolve hostname to check for internal addresses
         const ip = await this.resolveHostname(parsedUrl.hostname);
         if (this.isInternalIP(ip)) {
           throw new Error('Internal IP addresses not allowed');
         }
         
         // Check port
         const port = parsedUrl.port || (parsedUrl.protocol === 'https:' ? '443' : '80');
         if (!this.allowedPorts.has(parseInt(port))) {
           throw new Error('Port not allowed');
         }
         
         // Perform request with safety measures
         const response = await fetch(url, {
           ...options,
           redirect: 'manual',
           timeout: this.timeout,
           headers: {
             ...options.headers,
             'Host': parsedUrl.host,
           }
         });
         
         return response;
       } catch (error) {
         throw new Error(\`SSRF Protection Error: \${error.message}\`);
       }
     }

     async resolveHostname(hostname) {
       // Implement DNS resolution with caching and validation
     }

     isInternalIP(ip) {
       // Check for internal IP ranges
       const internal = [
         /^127\./,
         /^10\./,
         /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
         /^192\.168\./,
         /^::1$/,
         /^f[cd][0-9a-f]{2}:/i
       ];
       return internal.some(pattern => pattern.test(ip));
     }
   }

   // Usage example
   const ssrfProtection = new SSRFProtection({
     allowedHosts: ['api.example.com', 'cdn.example.com'],
     allowedPorts: [80, 443, 8443],
     maxRedirects: 2
   });

   app.get('/secure-fetch', async (req, res) => {
     try {
       const response = await ssrfProtection.validateAndFetch(req.query.url);
       const data = await response.text();
       res.send(data);
     } catch (error) {
       res.status(403).send(error.message);
     }
   });
   \`\`\`

3. Enterprise Defense Strategies:
   - WAF implementation
   - Network segmentation
   - Cloud security controls
   - Monitoring and alerting

4. Advanced Security Controls:
   - Request rate limiting
   - Response size limits
   - Protocol restrictions
   - IP range filtering
    `,
  },
  {
    id: 'ssrf-level3-quiz',
    title: 'Expert SSRF Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of SSRF security.',
    questions: [
      {
        question: 'Which technique is most effective for detecting blind SSRF?',
        options: [
          'Out-of-band callbacks to attacker-controlled server',
          'Error messages',
          'Response timing',
          'Status codes',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best practice for handling URL redirects in SSRF context?',
        options: [
          'Validate each URL in the redirect chain',
          'Allow all redirects',
          'Block all redirects',
          'Ignore redirects',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which defense mechanism is most effective against SSRF?',
        options: [
          'Comprehensive URL validation with protocol, host, and port restrictions',
          'Basic input validation',
          'HTTPS-only connections',
          'Web application firewall',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of response size limits in SSRF defense?',
        options: [
          'To prevent server resource exhaustion',
          'To improve performance',
          'To reduce bandwidth usage',
          'To encrypt data',
        ],
        correctAnswer: 0,
      },
    ],
  },
];