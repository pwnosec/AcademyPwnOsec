import { CourseModule } from '../../../types/course';

export const directoryTraversalLevel2Modules: CourseModule[] = [
  {
    id: 'dir-traversal-level2-intro',
    title: 'Level 2: Advanced Directory Traversal',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced directory traversal techniques and bypass methods.',
    videoUrl: 'https://example.com/videos/advanced-dir-traversal',
  },
  {
    id: 'dir-traversal-level2-lab',
    title: 'Advanced Directory Traversal Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced directory traversal techniques and filter bypass methods.',
    labInstructions: `
Advanced Directory Traversal Laboratory

1. Advanced Techniques:
   - Path normalization bypass
   - Encoding bypass methods
   - Null byte injection
   - Double encoding tricks

2. Advanced Vulnerabilities:
   \`\`\`python
   # Vulnerable Python code example
   from flask import Flask, send_file, request
   import os

   app = Flask(__name__)

   @app.route('/download')
   def download():
       filename = request.args.get('file')
       
       # VULNERABLE: Incomplete path validation
       if '../' in filename:
           return 'Invalid path', 403
           
       # Still vulnerable to:
       # - ..%2F (URL encoding)
       # - ..%252F (Double encoding)
       # - ..\\/ (Alternative separators)
       # - ..%00 (Null byte injection)
       
       return send_file(f'/var/www/files/{filename}')

   # Attack examples:
   # /download?file=..%2F..%2F..%2Fetc%2Fpasswd
   # /download?file=..%252F..%252F..%252Fetc%252Fpasswd
   # /download?file=..%00/test.txt
   \`\`\`

3. Filter Bypass Techniques:
   \`\`\`javascript
   // Common bypass patterns
   const bypassPatterns = [
     '../',           // Basic traversal
     '..%2F',        // URL encoded
     '..%252F',      // Double encoded
     '..\\/',        // Mixed separators
     '....///',      // Path normalization
     '..;/',         // Semicolon bypass
     '..%00/',       // Null byte injection
     '.%2e/',        // Encoded dot
   ];

   // Testing different encodings
   const encodePayload = (payload) => {
     return encodeURIComponent(payload)
       .replace(/\./g, '%2e')
       .replace(/\//g, '%2f');
   };
   \`\`\`

4. Advanced Defense:
   \`\`\`javascript
   const path = require('path');
   const normalize = require('normalize-path');

   app.get('/download-secure', (req, res) => {
     let fileName = req.query.file;
     
     // Remove null bytes
     fileName = fileName.replace(/\\0/g, '');
     
     // Normalize path (resolve ../, ./, etc)
     const normalizedPath = normalize(
       path.join('/var/www/files', fileName)
     );
     
     // Validate final path
     if (!normalizedPath.startsWith('/var/www/files/')) {
       return res.status(403).send('Access denied');
     }
     
     // Additional security checks
     if (normalizedPath.includes('\\0') || 
         normalizedPath.includes('%00')) {
       return res.status(403).send('Invalid characters');
     }
     
     // Safe file access
     res.sendFile(normalizedPath);
   });
   \`\`\`
    `,
  },
  {
    id: 'dir-traversal-level2-quiz',
    title: 'Advanced Directory Traversal Quiz',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced directory traversal concepts.',
    questions: [
      {
        question: 'Which encoding can bypass basic "../" filters?',
        options: [
          'URL encoding (%2E%2E%2F)',
          'Base64 encoding',
          'ROT13 encoding',
          'ASCII encoding',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of null byte injection in path traversal?',
        options: [
          'To terminate string processing early',
          'To crash the application',
          'To encode special characters',
          'To bypass authentication',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which method best prevents path traversal in Node.js?',
        options: [
          'path.normalize() with base path validation',
          'String replacement',
          'Regular expressions',
          'URL encoding',
        ],
        correctAnswer: 0,
      },
    ],
  },
];