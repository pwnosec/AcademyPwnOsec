import { CourseModule } from '../../../types/course';

export const directoryTraversalLevel1Modules: CourseModule[] = [
  {
    id: 'dir-traversal-level1-intro',
    title: 'Level 1: Directory Traversal Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of directory traversal vulnerabilities and their impact on web applications.',
    videoUrl: 'https://example.com/videos/dir-traversal-basics',
  },
  {
    id: 'dir-traversal-level1-lab',
    title: 'Basic Directory Traversal Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic directory traversal vulnerabilities.',
    labInstructions: `
# Directory Traversal Basics Laboratory

## 1. Environment Setup
- Access the vulnerable web application
- Review file access functionality
- Understand basic path traversal concepts

## 2. Basic Vulnerabilities

### Vulnerable Node.js Example
\`\`\`javascript
const express = require('express');
const app = express();
const fs = require('fs');

// ❌ Vulnerable endpoint - Direct file path manipulation
app.get('/download', (req, res) => {
  const fileName = req.query.file;
  // VULNERABLE: No path validation
  fs.readFile('/var/www/files/' + fileName, (err, data) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }
    res.send(data);
  });
});
\`\`\`

### Attack Examples
\`\`\`http
# Basic path traversal
GET /download?file=../../../etc/passwd HTTP/1.1
Host: example.com

# Access sensitive files
GET /download?file=../../../etc/shadow HTTP/1.1
Host: example.com
\`\`\`

## 3. Basic Testing Techniques
- Simple path traversal sequences (\`../\`)
- Basic file access attempts
- Common target files:
  - \`/etc/passwd\`
  - \`config.php\`
  - \`.env\` files
  - \`web.config\`

## 4. Defense Implementation

### Secure Node.js Example
\`\`\`javascript
const path = require('path');

// ✅ Secure implementation with path validation
app.get('/download-secure', (req, res) => {
  const fileName = req.query.file;
  const filePath = path.join('/var/www/files', fileName);
  
  // Validate the final path
  if (!filePath.startsWith('/var/www/files/')) {
    res.status(403).send('Access denied');
    return;
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }
    res.send(data);
  });
});
\`\`\`

### Security Best Practices
- Always validate file paths
- Use path normalization
- Implement proper access controls
- Maintain a whitelist of allowed files
`,
  },
  {
    id: 'dir-traversal-level1-quiz',
    title: 'Directory Traversal Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic directory traversal concepts.',
    questions: [
      {
        question: 'Which character sequence is commonly used for directory traversal?',
        options: [
          '../',
          '>>',
          '&&',
          '||',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary risk of directory traversal vulnerabilities?',
        options: [
          'Unauthorized access to sensitive files',
          'Server crash',
          'Database corruption',
          'Network flooding',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the best defense against directory traversal?',
        options: [
          'Path validation and sanitization',
          'Strong passwords',
          'HTTPS encryption',
          'Regular backups',
        ],
        correctAnswer: 0,
      },
    ],
  },
];