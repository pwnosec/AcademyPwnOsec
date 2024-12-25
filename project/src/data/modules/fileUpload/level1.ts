import { CourseModule } from '../../../types/course';

export const fileUploadLevel1Modules: CourseModule[] = [
  {
    id: 'file-upload-level1-intro',
    title: 'Level 1: File Upload Fundamentals',
    duration: '1h',
    type: 'video',
    status: 'available',
    description: 'Learn the basics of file upload vulnerabilities and their impact on web security.',
    videoUrl: 'https://example.com/videos/file-upload-basics',
  },
  {
    id: 'file-upload-level1-lab',
    title: 'Basic File Upload Lab',
    duration: '2h',
    type: 'lab',
    status: 'available',
    description: 'Practice identifying and exploiting basic file upload vulnerabilities.',
    labInstructions: `
File Upload Fundamentals Laboratory

1. Environment Setup:
   - Access the vulnerable web application
   - Review file upload functionality
   - Understand basic file handling concepts

2. Basic Vulnerabilities:
   \`\`\`javascript
   // Vulnerable file upload code
   app.post('/upload', (req, res) => {
     const file = req.files.uploadedFile;
     const filename = file.name;
     
     // ❌ Vulnerable: No validation or sanitization
     file.mv(\`./uploads/\${filename}\`, (err) => {
       if (err) return res.status(500).send(err);
       res.send('File uploaded!');
     });
   });

   // Basic secure implementation
   app.post('/upload', (req, res) => {
     const file = req.files.uploadedFile;
     
     // ✅ Basic validation
     if (!file) return res.status(400).send('No file uploaded');
     
     // ✅ Check file type
     const allowedTypes = ['image/jpeg', 'image/png'];
     if (!allowedTypes.includes(file.mimetype)) {
       return res.status(400).send('Invalid file type');
     }
     
     // ✅ Generate safe filename
     const ext = path.extname(file.name);
     const safeName = \`\${Date.now()}\${ext}\`;
     
     file.mv(\`./uploads/\${safeName}\`, (err) => {
       if (err) return res.status(500).send(err);
       res.send('File uploaded successfully');
     });
   });
   \`\`\`

3. Common Issues:
   - Missing file type validation
   - Unrestricted file names
   - Directory traversal in file paths
   - Dangerous file types

4. Basic Testing Methodology:
   - Test file type restrictions
   - Attempt uploading malicious files
   - Check filename handling
   - Verify upload directory security
    `,
  },
  {
    id: 'file-upload-level1-quiz',
    title: 'File Upload Basics Quiz',
    duration: '30m',
    type: 'quiz',
    status: 'available',
    description: 'Test your understanding of basic file upload security concepts.',
    questions: [
      {
        question: 'Which file type is most dangerous to allow for upload?',
        options: [
          'PHP files',
          'Text files',
          'Image files',
          'PDF files',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the best practice for handling uploaded filenames?',
        options: [
          'Generate a new random filename',
          'Keep the original filename',
          'Add a prefix only',
          'Remove spaces only',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which validation should be performed on file uploads?',
        options: [
          'All of the above',
          'File type validation',
          'File size limits',
          'File content analysis',
        ],
        correctAnswer: 0,
      },
    ],
  },
];