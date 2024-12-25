import { CourseModule } from '../../types/course';

// Level 1: Beginner Modules
const webSecurityLevel1Modules: CourseModule[] = [
  {
    id: 'web-sec-l1-intro',
    title: 'Introduction to Web Security',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the fundamentals of web application security and common threats.',
    videoUrl: 'https://example.com/videos/web-security-intro',
  },
  {
    id: 'web-sec-level1-lab',
    title: 'Basic Security Testing Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying common web vulnerabilities in a controlled environment.',
    labInstructions: `
Web Security Basics Lab

1. Environment Setup:
   - Access the vulnerable web application
   - Set up basic testing tools
   - Configure your testing environment

2. Basic Security Tests:
   - Test for XSS vulnerabilities
   - Identify CSRF weaknesses
   - Basic SQL Injection testing
   - Input validation checks

3. Documentation:
   - Record findings
   - Practice writing security reports
   - Document mitigation strategies

4. Basic Defense Implementation:
   - Input validation
   - Output encoding
   - Basic security headers
    `,
  }
];

// Level 2: Intermediate Modules
const webSecurityLevel2Modules: CourseModule[] = [
  {
    id: 'web-sec-l2-intro',
    title: 'Advanced Web Security Concepts',
    duration: '1.5h',
    type: 'video',
    status: 'available',
    description: 'Master advanced web security concepts and defense mechanisms.',
    videoUrl: 'https://example.com/videos/advanced-web-security',
  }
];

// Level 3: Expert Modules
const webSecurityLevel3Modules: CourseModule[] = [
  {
    id: 'web-sec-l3-intro',
    title: 'Expert Web Security Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Learn expert-level web security techniques and enterprise defense strategies.',
    videoUrl: 'https://example.com/videos/expert-web-security',
  }
];

// Export all modules
export const webSecurityModules: CourseModule[] = [
  ...webSecurityLevel1Modules,
  ...webSecurityLevel2Modules,
  ...webSecurityLevel3Modules,
];