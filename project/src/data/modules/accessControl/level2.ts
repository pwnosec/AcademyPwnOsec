import { CourseModule } from '../../../types/course';

export const accessControlLevel2Modules: CourseModule[] = [
  {
    id: 'access-control-level2-intro',
    title: 'Level 2: Advanced Access Control Techniques',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced access control concepts and role-based access control implementation.',
    videoUrl: 'https://example.com/videos/advanced-access-control',
  },
  {
    id: 'access-control-level2-lab',
    title: 'Advanced Access Control Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice implementing and testing advanced access control mechanisms.',
    labInstructions: `
Advanced Access Control Laboratory

1. Advanced Concepts:
   - Role-Based Access Control (RBAC)
   - Attribute-Based Access Control (ABAC)
   - Permission inheritance
   - Dynamic authorization

2. Implementation Examples:
   \`\`\`javascript
   // RBAC Implementation
   const roles = {
     admin: ['read', 'write', 'delete', 'manage_users'],
     editor: ['read', 'write'],
     viewer: ['read']
   };

   function checkPermission(user, requiredPermission) {
     const userRole = user.role;
     const permissions = roles[userRole] || [];
     return permissions.includes(requiredPermission);
   }

   // ABAC Implementation
   function checkAccess(user, resource, action) {
     // Check user attributes
     if (resource.department !== user.department) {
       return false;
     }
     
     // Check time-based restrictions
     const currentHour = new Date().getHours();
     if (currentHour < 9 || currentHour > 17) {
       return false;
     }
     
     // Check resource-specific rules
     if (resource.confidential && !user.clearance) {
       return false;
     }
     
     return true;
   }
   \`\`\`

3. Advanced Testing:
   - Role hierarchy testing
   - Permission inheritance verification
   - Cross-role access attempts
   - Dynamic permission updates
    `,
  },
  {
    id: 'access-control-level2-quiz',
    title: 'Advanced Access Control Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced access control concepts.',
    questions: [
      {
        question: 'What is the main advantage of RBAC over simple access control lists?',
        options: [
          'Simplified management of user permissions through roles',
          'Faster authentication',
          'Better encryption',
          'Reduced server load',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which access control model considers user attributes and context?',
        options: [
          'Attribute-Based Access Control (ABAC)',
          'Role-Based Access Control (RBAC)',
          'Mandatory Access Control (MAC)',
          'Discretionary Access Control (DAC)',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is permission inheritance?',
        options: [
          'When roles automatically receive permissions from parent roles',
          'When users share permissions',
          'When permissions expire',
          'When permissions are encrypted',
        ],
        correctAnswer: 0,
      },
    ],
  },
];