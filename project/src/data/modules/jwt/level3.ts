import { CourseModule } from '../../../types/course';

export const jwtLevel3Modules: CourseModule[] = [
  {
    id: 'jwt-level3-intro',
    title: 'Level 3: Expert JWT Security',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level JWT security and implement comprehensive defense strategies.',
    videoUrl: 'https://example.com/videos/expert-jwt',
  },
  {
    id: 'jwt-level3-lab',
    title: 'Expert JWT Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice implementing enterprise-grade JWT security and advanced attack mitigation.',
    labInstructions: `
Expert JWT Laboratory

1. Advanced Attack Vectors:
   - Cryptographic attacks
   - Timing attacks
   - Token replay
   - Session manipulation

2. Expert Implementation:
   \`\`\`javascript
   // Secure JWT service
   class SecureJWTService {
     constructor(options = {}) {
       this.algorithm = options.algorithm || 'RS256';
       this.privateKey = options.privateKey;
       this.publicKey = options.publicKey;
       this.tokenLifetime = options.tokenLifetime || '1h';
       this.issuer = options.issuer;
       this.audience = options.audience;
     }

     async generateToken(payload, options = {}) {
       const tokenId = crypto.randomBytes(16).toString('hex');
       
       const token = jwt.sign(
         {
           ...payload,
           jti: tokenId,
           iat: Math.floor(Date.now() / 1000),
           iss: this.issuer,
           aud: this.audience,
         },
         this.privateKey,
         {
           algorithm: this.algorithm,
           expiresIn: this.tokenLifetime,
           ...options,
         }
       );

       // Store token metadata for additional security
       await this.storeTokenMetadata(tokenId, {
         subject: payload.sub,
         fingerprint: options.fingerprint,
         issuedAt: new Date(),
         expiresAt: new Date(Date.now() + ms(this.tokenLifetime)),
       });

       return token;
     }

     async verifyToken(token, options = {}) {
       try {
         const decoded = jwt.verify(token, this.publicKey, {
           algorithms: [this.algorithm],
           issuer: this.issuer,
           audience: this.audience,
           ...options,
         });

         // Additional security checks
         await this.validateTokenMetadata(decoded.jti, {
           subject: decoded.sub,
           fingerprint: options.fingerprint,
         });

         return decoded;
       } catch (error) {
         throw new TokenValidationError(error.message);
       }
     }

     async validateTokenMetadata(tokenId, context) {
       const metadata = await this.getTokenMetadata(tokenId);
       
       if (!metadata) {
         throw new TokenValidationError('Invalid token');
       }

       // Validate token hasn't been revoked
       if (await this.isTokenRevoked(tokenId)) {
         throw new TokenValidationError('Token has been revoked');
       }

       // Validate fingerprint if provided
       if (context.fingerprint && 
           metadata.fingerprint !== context.fingerprint) {
         throw new TokenValidationError('Invalid token fingerprint');
       }

       // Validate subject if provided
       if (context.subject && 
           metadata.subject !== context.subject) {
         throw new TokenValidationError('Invalid token subject');
       }

       return true;
     }

     async revokeToken(tokenId) {
       await this.addToRevocationList(tokenId);
     }
   }

   // Usage example
   const jwtService = new SecureJWTService({
     algorithm: 'RS256',
     privateKey: fs.readFileSync('private.key'),
     publicKey: fs.readFileSync('public.key'),
     issuer: 'https://auth.example.com',
     audience: 'https://api.example.com',
     tokenLifetime: '15m'
   });

   // Generate token with additional security
   const token = await jwtService.generateToken(
     {
       sub: user.id,
       role: user.role,
     },
     {
       fingerprint: req.fingerprint,
     }
   );
   \`\`\`

3. Enterprise Security Features:
   - Token fingerprinting
   - Revocation management
   - Rotation policies
   - Monitoring and alerting

4. Advanced Security Controls:
   - Key management
   - Algorithm enforcement
   - Token validation
   - Audit logging
    `,
  },
  {
    id: 'jwt-level3-quiz',
    title: 'Expert JWT Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of JWT security.',
    questions: [
      {
        question: 'What is token fingerprinting used for?',
        options: [
          'Binding tokens to specific client contexts',
          'Generating random tokens',
          'Encrypting tokens',
          'Storing tokens',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the most secure JWT signing algorithm?',
        options: [
          'RS256 with proper key management',
          'HS256 with long secret',
          'None',
          'RS128',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the purpose of the jti claim?',
        options: [
          'To provide a unique identifier for token revocation',
          'To specify the issuer',
          'To set expiration',
          'To identify the user',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which feature best prevents token replay attacks?',
        options: [
          'Combination of JTI and token fingerprinting',
          'Long expiration times',
          'Using symmetric keys',
          'Removing signatures',
        ],
        correctAnswer: 0,
      },
    ],
  },
];