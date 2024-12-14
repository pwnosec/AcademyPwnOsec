import { CourseModule } from '../../types/course';

export const sqlInjectionModules: CourseModule[] = [
  {
    id: 'sql-intro',
    title: 'Introduction to SQL Injection',
    duration: '45m',
    type: 'video',
    status: 'available',
    description: 'Learn the fundamentals of SQL Injection attacks, their impact on web applications, and why they remain a critical security concern.',
    videoUrl: 'https://example.com/videos/sql-injection-intro',
  },
  {
    id: 'sql-lab-1',
    title: 'Basic SQL Injection Lab',
    duration: '1h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic SQL Injection vulnerabilities in a controlled environment.',
    labInstructions: `
In this lab, you'll work with a vulnerable login form to understand SQL Injection:

1. Setup Instructions:
   - Launch the provided virtual environment
   - Access the login form at http://localhost:8080/login
   - Use the provided tools in the lab environment

2. Objectives:
   - Identify the vulnerable input field
   - Bypass authentication using SQL Injection
   - Extract user data from the database
   - Document your findings and exploitation methods

3. Challenge Tasks:
   - Find a way to login without valid credentials
   - Extract the list of all users in the database
   - Determine the database version and type
    `,
  },
  {
    id: 'sql-quiz-1',
    title: 'SQL Injection Fundamentals Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of SQL Injection concepts and techniques.',
    questions: [
      {
        question: 'Which character is commonly used to terminate SQL statements?',
        options: [';', '/', ':', '|'],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of the UNION operator in SQL Injection attacks?',
        options: [
          'To combine results from multiple queries',
          'To create new tables',
          'To delete data',
          'To modify permissions',
        ],
        correctAnswer: 0,
      },
    ],
  },
];