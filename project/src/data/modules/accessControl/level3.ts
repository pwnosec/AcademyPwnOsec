import { CourseModule } from '../../../types/course';

export const accessControlLevel3Modules: CourseModule[] = [
  {
    id: 'access-control-level3-intro',
    title: 'Level 3: Expert Access Control & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level access control implementation and enterprise security patterns.',
    videoUrl: 'https://example.com/videos/expert-access-control',
  },
  {
    id: 'access-control-level3-lab',
    title: 'Expert Access Control Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice implementing enterprise-grade access control systems.',
    labInstructions: `
Expert Access Control Laboratory

1. Enterprise Patterns:
   - Microservices authorization
   - OAuth 2.0 & OIDC integration
   - API Gateway access control
   - Zero Trust architecture

2. Implementation Examples:
   \`\`\`javascript
   // Microservices Authorization
   class AuthorizationService {
     async validateAccess(context) {
       const { user, resource, action } = context;
       
       // Check token validity
       if (!await this.validateToken(context.token)) {
         throw new AuthError('Invalid token');
       }
       
       // Check resource permissions
       const permissions = await this.getEffectivePermissions(user);
       if (!this.checkResourceAccess(permissions, resource, action)) {
         throw new AuthError('Access denied');
       }
       
       // Audit logging
       await this.auditLog.record({
         user: user.id,
         resource: resource.id,
         action,
         timestamp: new Date(),
         success: true
       });
     }
     
     async getEffectivePermissions(user) {
       // Combine permissions from multiple sources
       const directPermissions = await this.getRolePermissions(user.role);
       const groupPermissions = await this.getGroupPermissions(user.groups);
       const contextualPermissions = await this.getContextualPermissions(user);
       
       return this.mergePermissions([
         directPermissions,
         groupPermissions,
         contextualPermissions
       ]);
     }
   }

   // API Gateway Implementation
   class AccessControlGateway {
     async handleRequest(req) {
       // Rate limiting
       await this.rateLimiter.checkLimit(req.ip);
       
       // Token validation
       const token = await this.tokenValidator.validate(req.token);
       
       // Scope validation
       if (!this.scopeValidator.hasRequiredScopes(token.scopes, req.path)) {
         throw new AuthError('Insufficient scopes');
       }
       
       // Resource-level authorization
       await this.authorizationService.validateAccess({
         user: token.user,
         resource: req.path,
         action: req.method
       });
     }
   }
   \`\`\`

3. Advanced Security Patterns:
   - Fine-grained authorization
   - Dynamic policy enforcement
   - Real-time permission updates
   - Distributed access control

4. Enterprise Considerations:
   - High availability
   - Performance optimization
   - Compliance requirements
   - Audit logging
    `,
  },
  {
    id: 'access-control-level3-quiz',
    title: 'Expert Access Control Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of access control systems.',
    questions: [
      {
        question: 'What is the key principle of Zero Trust architecture?',
        options: [
          'Never trust, always verify',
          'Trust but verify',
          'Trust internal networks',
          'Verify once, trust always',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is most important for microservices authorization?',
        options: [
          'Token-based access control with proper scope validation',
          'Simple API keys',
          'IP whitelisting',
          'Basic authentication',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of an API Gateway in access control?',
        options: [
          'Centralized authentication and authorization',
          'Database access',
          'User interface',
          'File storage',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which feature is essential for enterprise access control systems?',
        options: [
          'Comprehensive audit logging',
          'Simple permissions',
          'Manual updates',
          'Single-user focus',
        ],
        correctAnswer: 0,
      },
    ],
  },
];