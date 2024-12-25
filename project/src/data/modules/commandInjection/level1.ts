import { CourseModule } from '../../../types/course';

export const commandInjectionLevel1Modules: CourseModule[] = [
  {
    id: 'cmd-level1-intro',
    title: 'Level 1: Command Injection Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of command injection vulnerabilities and their impact on system security.',
    videoUrl: 'https://example.com/videos/cmd-injection-basics',
  },
  {
    id: 'cmd-level1-lab',
    title: 'Basic Command Injection Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice basic command injection techniques in a controlled environment.',
    labInstructions: `
Command Injection Basics Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review the ping functionality
   - Prepare basic command injection payloads

2. Basic Techniques:
   - Command chaining
   - Output redirection
   - Basic command execution
   - Understanding system commands

3. Practice Exercises:
   \`\`\`bash
   # Basic command chaining
   127.0.0.1 ; whoami
   
   # Using operators
   127.0.0.1 && id
   
   # Command substitution
   127.0.0.1 \`id\`
   \`\`\`

4. Defense Basics:
   - Input validation principles
   - Command sanitization
   - Safe command execution
    `,
  },
  {
    id: 'cmd-level1-quiz',
    title: 'Command Injection Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic command injection concepts.',
    questions: [
      {
        question: 'Which character is used to chain multiple commands in Unix-like systems?',
        options: [
          'Semicolon (;)',
          'Colon (:)',
          'Comma (,)',
          'Period (.)',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of command injection attacks?',
        options: [
          'To execute unauthorized system commands',
          'To crash the application',
          'To modify database records',
          'To change file permissions',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the best defense against command injection?',
        options: [
          'Input validation and command whitelisting',
          'Removing error messages',
          'Using complex commands',
          'Disabling system commands',
        ],
        correctAnswer: 0,
      },
    ],
  },
];