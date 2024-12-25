import { CourseModule } from '../../../types/course';

export const accessControlLevel1Modules: CourseModule[] = [
  {
    id: 'access-control-level1-intro',
    title: 'Level 1: Access Control Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of access control vulnerabilities and their impact on application security.',
    videoUrl: 'https://example.com/videos/access-control-basics',
  },
  {
    id: 'access-control-level1-lab',
    title: 'Basic Access Control Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic access control vulnerabilities.',
    labInstructions: `
Access Control Fundamentals Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review user roles and permissions
   - Understand basic authorization concepts

2. Basic Vulnerabilities:
   \`\`\`javascript
   // Vulnerable endpoint example
   app.get('/api/user/:id/profile', (req, res) => {
     // ❌ No authorization check
     db.getUserProfile(req.params.id)
       .then(profile => res.json(profile))
       .catch(err => res.status(500).json({ error: err.message }));
   });

   // Secure implementation
   app.get('/api/user/:id/profile', authenticate, (req, res) => {
     // ✅ Check if user has permission to access profile
     if (req.user.id !== req.params.id && req.user.role !== 'admin') {
       return res.status(403).json({ error: 'Access denied' });
     }
     
     db.getUserProfile(req.params.id)
       .then(profile => res.json(profile))
       .catch(err => res.status(500).json({ error: err.message }));
   });
   \`\`\`

3. Common Issues:
   - Missing authorization checks
   - Insecure direct object references (IDOR)
   - Horizontal privilege escalation
   - Vertical privilege escalation

4. Basic Testing Methodology:
   - Identify access control mechanisms
   - Test different user roles
   - Attempt unauthorized access
   - Document findings
    `,
  },
  {
    id: 'access-control-level1-quiz',
    title: 'Access Control Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic access control concepts.',
    questions: [
      {
        question: 'What is horizontal privilege escalation?',
        options: [
          'Accessing resources of other users at the same privilege level',
          'Gaining administrative privileges',
          'Accessing public resources',
          'Bypassing authentication',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the most secure approach to access control?',
        options: [
          'Deny by default, allow explicitly',
          'Allow by default, deny explicitly',
          'Hide sensitive functionality',
          'Remove error messages',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is IDOR?',
        options: [
          'Insecure Direct Object References',
          'Internal Database Object Request',
          'Integrated Data Object Response',
          'Invalid Data Object Reference',
        ],
        correctAnswer: 0,
      },
    ],
  },
];