import { CourseModule } from '../../../types/course';

export const xxeLevel1Modules: CourseModule[] = [
  {
    id: 'xxe-level1-intro',
    title: 'Level 1: XXE Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of XML External Entity (XXE) injection vulnerabilities and their impact on application security.',
    videoUrl: 'https://example.com/videos/xxe-basics',
  },
  {
    id: 'xxe-level1-lab',
    title: 'Basic XXE Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic XXE vulnerabilities.',
    labInstructions: `
XXE Fundamentals Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review XML processing functionality
   - Understand basic XXE concepts

2. Basic Vulnerabilities:
   \`\`\`javascript
   // Vulnerable Node.js code
   const libxml = require('libxmljs');

   app.post('/process-xml', (req, res) => {
     try {
       // ❌ VULNERABLE: Default configuration allows external entities
       const xmlDoc = libxml.parseXml(req.body.xml);
       const result = processXmlDocument(xmlDoc);
       res.json(result);
     } catch (error) {
       res.status(500).send('Error processing XML');
     }
   });

   // Basic secure implementation
   app.post('/process-xml-secure', (req, res) => {
     try {
       // ✅ Secure configuration
       const xmlDoc = libxml.parseXml(req.body.xml, {
         noent: false,      // Disable entity expansion
         nocdata: true,     // Disable CDATA
         nonet: true,       // Disable network access
         noblanks: true     // Remove blank nodes
       });
       const result = processXmlDocument(xmlDoc);
       res.json(result);
     } catch (error) {
       res.status(500).send('Error processing XML');
     }
   });
   \`\`\`

3. Basic XXE Payloads:
   \`\`\`xml
   <!-- File disclosure -->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
   <root>&xxe;</root>

   <!-- Basic entity test -->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE test [ <!ENTITY test "XXE Test"> ]>
   <root>&test;</root>
   \`\`\`

4. Testing Methodology:
   - Identify XML input points
   - Test entity processing
   - Verify file access capabilities
   - Document findings
    `,
  },
  {
    id: 'xxe-level1-quiz',
    title: 'XXE Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic XXE concepts.',
    questions: [
      {
        question: 'What is the main purpose of XXE attacks?',
        options: [
          'To read local files and access internal services',
          'To modify database records',
          'To execute JavaScript code',
          'To intercept network traffic',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which XML feature must be disabled to prevent XXE?',
        options: [
          'External entity processing',
          'XML validation',
          'XML formatting',
          'XML comments',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against XXE attacks?',
        options: [
          'Disable external entity processing',
          'Use XML encryption',
          'Remove XML support',
          'Enable all entities',
        ],
        correctAnswer: 0,
      },
    ],
  },
];