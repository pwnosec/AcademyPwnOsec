import { CourseModule } from '../../../types/course';

export const fileUploadLevel2Modules: CourseModule[] = [
  {
    id: 'file-upload-level2-intro',
    title: 'Level 2: Advanced File Upload Security',
    duration: '2h',
    type: 'video',
    status: 'available',
    description: 'Master advanced file upload security concepts and bypass techniques.',
    videoUrl: 'https://example.com/videos/advanced-file-upload',
  },
  {
    id: 'file-upload-level2-lab',
    title: 'Advanced File Upload Lab',
    duration: '3h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced file upload vulnerability testing and secure implementations.',
    labInstructions: `
Advanced File Upload Laboratory

1. Advanced Concepts:
   - Content-Type validation
   - File content analysis
   - Magic number checking
   - Upload race conditions

2. Implementation Examples:
   \`\`\`javascript
   // Advanced file upload handling
   const fileUploadMiddleware = async (req, res, next) => {
     try {
       const file = req.files.uploadedFile;
       
       // Check magic numbers
       const buffer = await file.data;
       const magicNumber = buffer.toString('hex', 0, 4);
       const allowedMagicNumbers = {
         'image/jpeg': 'ffd8ffe0',
         'image/png': '89504e47',
         'application/pdf': '25504446'
       };
       
       if (allowedMagicNumbers[file.mimetype] !== magicNumber) {
         throw new Error('Invalid file content');
       }
       
       // Virus scanning
       const scanResult = await virusScanner.scanBuffer(buffer);
       if (!scanResult.isClean) {
         throw new Error('File may be malicious');
       }
       
       // Store metadata
       req.fileMetadata = {
         originalName: file.name,
         size: file.size,
         mimeType: file.mimetype,
         magicNumber,
         hash: crypto.createHash('sha256').update(buffer).digest('hex')
       };
       
       next();
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   };

   // Race condition prevention
   const uploadLock = new Map();
   
   app.post('/upload', async (req, res) => {
     const lockId = req.session.id;
     if (uploadLock.has(lockId)) {
       return res.status(429).send('Upload in progress');
     }
     
     uploadLock.set(lockId, true);
     try {
       // Handle upload
       await processUpload(req.files.uploadedFile);
       res.send('Upload complete');
     } finally {
       uploadLock.delete(lockId);
     }
   });
   \`\`\`

3. Advanced Testing:
   - Magic number manipulation
   - MIME type spoofing
   - Race condition exploitation
   - Content-Type bypass
    `,
  },
  {
    id: 'file-upload-level2-quiz',
    title: 'Advanced File Upload Assessment',
    duration: '1h',
    type: 'quiz',
    status: 'available',
    description: 'Test your knowledge of advanced file upload security concepts.',
    questions: [
      {
        question: 'What is a magic number in file upload security?',
        options: [
          'A file signature that identifies its type',
          'A random number for filenames',
          'A file size limit',
          'An encryption key',
        ],
        correctAnswer: 0,
      },
      {
        question: 'How can you prevent file upload race conditions?',
        options: [
          'Using upload locks and session tracking',
          'Increasing server speed',
          'Limiting file size',
          'Using multiple servers',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the most reliable method to verify file types?',
        options: [
          'Combining magic numbers and content analysis',
          'Checking file extension',
          'Trusting Content-Type header',
          'Verifying file size',
        ],
        correctAnswer: 0,
      },
    ],
  },
];