import { CourseModule } from '../../../types/course';

export const xxeLevel3Modules: CourseModule[] = [
  {
    id: 'xxe-level3-intro',
    title: 'Level 3: Expert XXE & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level XXE techniques and implement comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-xxe',
  },
  {
    id: 'xxe-level3-lab',
    title: 'Expert XXE Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced exploitation and implement robust defense mechanisms.',
    labInstructions: `
Expert XXE Laboratory

1. Advanced Attack Vectors:
   - XXE in file upload
   - XXE through XInclude
   - Custom protocol handlers
   - Advanced data exfiltration

2. Expert Techniques:
   \`\`\`javascript
   // Comprehensive XXE protection class
   class XXEProtection {
     constructor(options = {}) {
       this.allowedDoctypes = new Set(options.allowedDoctypes || []);
       this.maxEntityExpansions = options.maxEntityExpansions || 1;
       this.maxEntitySize = options.maxEntitySize || 10000;
       this.disableExternalEntities = options.disableExternalEntities !== false;
     }

     validateXML(xml) {
       // Check for suspicious patterns
       const suspiciousPatterns = [
         /<!ENTITY/i,
         /<!DOCTYPE/i,
         /\[.*SYSTEM/i,
         /\[.*PUBLIC/i
       ];

       if (suspiciousPatterns.some(pattern => pattern.test(xml))) {
         throw new Error('Potentially malicious XML detected');
       }

       return true;
     }

     async parseXML(xml, options = {}) {
       try {
         // Validate XML content
         this.validateXML(xml);

         // Configure secure parser options
         const secureOptions = {
           noent: this.disableExternalEntities,
           nocdata: true,
           nonet: true,
           noblanks: true,
           ...options
         };

         // Parse XML with security measures
         const parser = new XMLParser(secureOptions);
         const result = await parser.parseStringPromise(xml);

         return result;
       } catch (error) {
         throw new Error(\`XML Parsing Error: \${error.message}\`);
       }
     }

     // Secure file upload handling
     async handleXMLUpload(file) {
       const maxSize = 1024 * 1024; // 1MB limit
       
       if (file.size > maxSize) {
         throw new Error('File too large');
       }

       // Check file type
       if (!file.type.match(/^application\\/xml|text\\/xml$/)) {
         throw new Error('Invalid file type');
       }

       const content = await file.text();
       return this.parseXML(content);
     }
   }

   // Usage example
   const xxeProtection = new XXEProtection({
     maxEntityExpansions: 1,
     maxEntitySize: 1024,
     disableExternalEntities: true
   });

   app.post('/upload-xml', async (req, res) => {
     try {
       const result = await xxeProtection.handleXMLUpload(req.files.xml);
       res.json(result);
     } catch (error) {
       res.status(400).send(error.message);
     }
   });
   \`\`\`

3. Enterprise Defense Strategies:
   - XML parser hardening
   - Input validation
   - Output encoding
   - Security monitoring

4. Advanced Security Controls:
   - Entity expansion limits
   - Protocol restrictions
   - Resource quotas
   - Access controls
    `,
  },
  {
    id: 'xxe-level3-quiz',
    title: 'Expert XXE Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of XXE security.',
    questions: [
      {
        question: 'Which feature can be exploited in XML file uploads?',
        options: [
          'XInclude processing',
          'File compression',
          'Image metadata',
          'File permissions',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of entity expansion limits?',
        options: [
          'To prevent billion laughs attacks',
          'To improve parsing speed',
          'To reduce memory usage',
          'To validate XML structure',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which defense mechanism is most effective against XXE?',
        options: [
          'Disabling external entities and implementing parser hardening',
          'Using XML encryption',
          'Implementing access controls',
          'Enabling all entities',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the main risk of custom protocol handlers in XXE?',
        options: [
          'Access to additional system resources',
          'Slower XML processing',
          'Increased memory usage',
          'Parser crashes',
        ],
        correctAnswer: 0,
      },
    ],
  },
];