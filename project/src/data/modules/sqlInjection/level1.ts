import { CourseModule } from '../../../types/course';

export const sqlInjectionLevel1Modules: CourseModule[] = [
  {
    id: 'sql-level1-intro',
    title: 'Level 1: SQL Injection Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of SQL injection vulnerabilities and their impact on database security.',
    videoUrl: 'https://example.com/videos/sql-injection-basics',
  },
  {
    id: 'sql-level1-lab',
    title: 'Basic SQL Injection Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice basic SQL injection techniques in a controlled environment.',
    labInstructions: `
SQL Injection Basics Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review the login form functionality
   - Prepare basic SQL injection payloads

2. Basic Techniques:
   - Simple authentication bypass
   - Basic UNION-based injection
   - Error-based SQL injection
   - Understanding database errors

3. Practice Exercises:
   \`\`\`sql
   -- Basic authentication bypass
   ' OR '1'='1
   
   -- Simple UNION injection
   ' UNION SELECT username, password FROM users--
   
   -- Error-based extraction
   ' AND (SELECT CASE WHEN (1=1) THEN 1/0 ELSE 1 END)--
   \`\`\`

4. Defense Basics:
   - Understanding parameterized queries
   - Input validation principles
   - Basic error handling
    `,
  },
  {
    id: 'sql-level1-quiz',
    title: 'SQL Injection Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic SQL injection concepts.',
    questions: [
      {
        question: 'What is the main purpose of SQL injection attacks?',
        options: [
          'To manipulate database queries',
          'To crash the server',
          'To steal cookies',
          'To modify HTML content',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which character is commonly used to comment out the rest of a SQL query?',
        options: [
          '--',
          '//',
          '#',
          '/*',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best defense against SQL injection?',
        options: [
          'Using prepared statements',
          'Removing error messages',
          'Disabling SQL',
          'Using simple quotes',
        ],
        correctAnswer: 0,
      },
    ],
  },
];