import { Course, CourseModule } from '../types/course';

export const courses: Course[] = [
  {
    id: 'sql-injection',
    title: 'SQL Injection Mastery',
    duration: '10 hours',
    students: 1500,
    lessons: 24,
    image:
      'https://i.ibb.co.com/0Fj0tdV/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-1.png',
    description:
      'Master SQL Injection from basics to advanced techniques through our comprehensive three-level course. Learn to identify, exploit, and defend against SQL Injection vulnerabilities.',
    objectives: [
      'Level 1: Understand SQL Injection fundamentals and basic exploitation',
      'Level 2: Master Blind SQL Injection techniques and automated tools',
      'Level 3: Advanced Error-Based and Time-Based SQL Injection methods',
      'Implement secure coding practices and defense strategies',
    ],
    prerequisites: [
      'Level 1: Basic understanding of SQL and web applications',
      'Level 2: Completion of Level 1 and basic SQL Injection knowledge',
      'Level 3: Strong grasp of Blind SQL Injection techniques',
    ],
  },
  {
    id: 'web-security',
    title: 'Web Application Security',
    duration: '12 hours',
    students: 1200,
    lessons: 30,
    image:
      'https://i.ibb.co.com/PjfNB5V/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner.png',
    description:
      'Comprehensive guide to securing web applications against common vulnerabilities and threats.',
    objectives: [
      'Understand web security fundamentals',
      'Identify common vulnerabilities',
      'Implement security best practices',
      'Deploy secure web applications',
    ],
    prerequisites: [
      'Basic web development knowledge',
      'Understanding of HTTP protocol',
      'JavaScript fundamentals',
    ],
  },
  {
    id: 'xss-defense',
    title: 'XSS Attack & Defense',
    duration: '8 hours',
    students: 980,
    lessons: 20,
    image:
      'https://i.ibb.co.com/gFjKthm/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner.png',
    description:
      'Learn to identify, exploit, and defend against Cross-Site Scripting (XSS) attacks.',
    objectives: [
      'Understand XSS vulnerability types',
      'Master XSS detection techniques',
      'Implement XSS prevention measures',
      'Practice real-world scenarios',
    ],
    prerequisites: [
      'HTML and JavaScript basics',
      'Web browser developer tools',
      'Basic security concepts',
    ],
  },
  {
    id: 'auth-vulnerabilities',
    title: 'Authentication Vulnerabilities',
    duration: '8 hours',
    students: 850,
    lessons: 18,
    image:
      'https://i.ibb.co.com/r238Z7D/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-2.png',
    description:
      'Master the identification and exploitation of authentication vulnerabilities in web applications.',
    objectives: [
      'Understand authentication mechanisms',
      'Identify common authentication flaws',
      'Exploit authentication vulnerabilities',
      'Implement secure authentication',
    ],
    prerequisites: [
      'Basic web security knowledge',
      'Understanding of HTTP/HTTPS',
      'Familiarity with cookies and sessions',
    ],
  },
  {
    id: 'directory-traversal',
    title: 'Directory Traversal',
    duration: '6 hours',
    students: 720,
    lessons: 15,
    image:
      'https://i.ibb.co.com/9q2tZty/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-3.png',
    description:
      'Learn to identify and exploit directory traversal vulnerabilities while implementing proper defenses.',
    objectives: [
      'Understand path traversal attacks',
      'Identify vulnerable file access patterns',
      'Exploit directory traversal flaws',
      'Implement secure file access controls',
    ],
    prerequisites: [
      'Basic understanding of filesystems',
      'Web application fundamentals',
      'Basic command line knowledge',
    ],
  },
  {
    id: 'command-injection',
    title: 'Command Injection',
    duration: '7 hours',
    students: 680,
    lessons: 16,
    image:
      'https://i.ibb.co.com/xFNzTCn/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-4.png',
    description:
      'Master the art of identifying and preventing command injection vulnerabilities in applications.',
    objectives: [
      'Understand command injection vectors',
      'Identify vulnerable code patterns',
      'Exploit command injection flaws',
      'Implement secure input handling',
    ],
    prerequisites: [
      'Basic command line knowledge',
      'Understanding of web applications',
      'Basic programming concepts',
    ],
  },
  {
    id: 'access-control',
    title: 'Access Control Vulnerabilities',
    duration: '9 hours',
    students: 790,
    lessons: 20,
    image:
      'https://i.ibb.co.com/DWPMsK7/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-7.png',
    description:
      'Learn to identify and exploit access control vulnerabilities while implementing proper authorization mechanisms.',
    objectives: [
      'Understand access control models',
      'Identify authorization flaws',
      'Exploit access control vulnerabilities',
      'Implement secure authorization',
    ],
    prerequisites: [
      'Basic web security knowledge',
      'Understanding of authentication',
      'Basic programming concepts',
    ],
  },
  {
    id: 'file-upload',
    title: 'File Upload Vulnerabilities',
    duration: '7 hours',
    students: 650,
    lessons: 16,
    image:
      'https://i.ibb.co.com/SPrrGjH/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-6.png',
    description:
      'Master the identification and prevention of file upload vulnerabilities in web applications.',
    objectives: [
      'Understand file upload risks',
      'Identify vulnerable upload handlers',
      'Exploit file upload flaws',
      'Implement secure file handling',
    ],
    prerequisites: [
      'Basic web development knowledge',
      'Understanding of MIME types',
      'Basic security concepts',
    ],
  },
  {
    id: 'ssrf',
    title: 'Server-Side Request Forgery (SSRF)',
    duration: '8 hours',
    students: 580,
    lessons: 18,
    image:
      'https://i.ibb.co.com/WyXx6Hk/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-5.png',
    description:
      'Learn to identify, exploit, and prevent SSRF vulnerabilities in modern web applications.',
    objectives: [
      'Understand SSRF attack vectors',
      'Identify vulnerable endpoints',
      'Exploit SSRF vulnerabilities',
      'Implement proper request validation',
    ],
    prerequisites: [
      'Understanding of HTTP/HTTPS',
      'Basic networking concepts',
      'Web security fundamentals',
    ],
  },
  {
    id: 'xxe-injection',
    title: 'XXE Injection',
    duration: '6 hours',
    students: 520,
    lessons: 14,
    image:
      'https://i.ibb.co.com/Lz4L62f/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-8.png',
    description:
      'Master the identification and prevention of XML External Entity (XXE) injection vulnerabilities.',
    objectives: [
      'Understand XML processing',
      'Identify XXE vulnerabilities',
      'Exploit XXE injection flaws',
      'Implement secure XML parsing',
    ],
    prerequisites: [
      'Basic XML knowledge',
      'Web application fundamentals',
      'Basic security concepts',
    ],
  },
  {
    id: 'cors-vulnerabilities',
    title: 'CORS Vulnerabilities',
    duration: '5 hours',
    students: 480,
    lessons: 12,
    image:
      'https://i.ibb.co.com/ch512mf/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner-1.png',
    description:
      'Learn to identify and exploit Cross-Origin Resource Sharing (CORS) misconfigurations.',
    objectives: [
      'Understand CORS mechanisms',
      'Identify CORS misconfigurations',
      'Exploit CORS vulnerabilities',
      'Implement secure CORS policies',
    ],
    prerequisites: [
      'Understanding of HTTP headers',
      'Basic web security knowledge',
      'JavaScript fundamentals',
    ],
  },
  {
    id: 'csrf',
    title: 'Cross-Site Request Forgery (CSRF)',
    duration: '6 hours',
    students: 620,
    lessons: 15,
    image:
      'https://i.ibb.co.com/6JFb95Y/Copy-of-Copy-of-Blue-MInimalist-Automotive-Youtube-Banner.png',
    description:
      'Master the identification and prevention of Cross-Site Request Forgery attacks.',
    objectives: [
      'Understand CSRF attack vectors',
      'Identify vulnerable endpoints',
      'Exploit CSRF vulnerabilities',
      'Implement CSRF protection',
    ],
    prerequisites: [
      'Understanding of HTTP methods',
      'Basic web security knowledge',
      'JavaScript fundamentals',
    ],
  },
  {
    id: 'jwt-attacks',
    title: 'JWT Attacks',
    duration: '7 hours',
    students: 550,
    lessons: 16,
    image:
      'https://i.ibb.co.com/GpBpF13/Blue-MInimalist-Automotive-Youtube-Banner-1.png',
    description:
      'Learn to identify and exploit vulnerabilities in JWT implementation and handling.',
    objectives: [
      'Understand JWT structure',
      'Identify JWT vulnerabilities',
      'Exploit JWT weaknesses',
      'Implement secure JWT handling',
    ],
    prerequisites: [
      'Understanding of authentication',
      'Basic cryptography concepts',
      'Web security fundamentals',
    ],
  },
];
