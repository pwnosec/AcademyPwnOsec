import { CourseModule } from '../../../types/course';

export const directoryTraversalLevel3Modules: CourseModule[] = [
  {
    id: 'dir-traversal-level3-intro',
    title: 'Level 3: Expert Directory Traversal & Defense',
    duration: '2.5h',
    type: 'video',
    status: 'available',
    description: 'Master expert-level directory traversal techniques and implement enterprise-grade defenses.',
    videoUrl: 'https://example.com/videos/expert-dir-traversal',
  },
  {
    id: 'dir-traversal-level3-lab',
    title: 'Expert Directory Traversal Lab',
    duration: '4h',
    type: 'lab',
    status: 'available',
    description: 'Practice advanced exploitation and implement comprehensive defenses.',
    labInstructions: `
Expert Directory Traversal Laboratory

1. Advanced Attack Scenarios:
   - Archive file traversal
   - Zip slip vulnerabilities
   - File upload traversal
   - Symlink attacks

2. Complex Vulnerabilities:
   \`\`\`java
   // Vulnerable Java code example - Zip Slip
   public class ZipExtractor {
       public void extract(String zipFile, String targetDir) {
           try (ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile))) {
               ZipEntry entry;
               while ((entry = zis.getNextEntry()) != null) {
                   // VULNERABLE: No path validation
                   File target = new File(targetDir, entry.getName());
                   
                   // Attacker can include paths like:
                   // "../../../malicious.sh"
                   
                   // Write the file
                   FileOutputStream fos = new FileOutputStream(target);
                   byte[] buffer = new byte[1024];
                   int len;
                   while ((len = zis.read(buffer)) > 0) {
                       fos.write(buffer, 0, len);
                   }
                   fos.close();
               }
           }
       }
   }

   // Secure implementation
   public class SecureZipExtractor {
       public void extractSecure(String zipFile, String targetDir) throws IOException {
           File targetDirFile = new File(targetDir);
           String canonicalTargetDir = targetDirFile.getCanonicalPath();

           try (ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile))) {
               ZipEntry entry;
               while ((entry = zis.getNextEntry()) != null) {
                   File target = new File(targetDir, entry.getName());
                   String canonicalTarget = target.getCanonicalPath();

                   if (!canonicalTarget.startsWith(canonicalTargetDir)) {
                       throw new SecurityException("Path traversal attempt detected");
                   }

                   // Safe to extract
                   Files.copy(zis, target.toPath(), StandardCopyOption.REPLACE_EXISTING);
               }
           }
       }
   }
   \`\`\`

3. File Upload Traversal:
   \`\`\`php
   <?php
   // Vulnerable PHP file upload code
   function processUpload($file) {
       $filename = $file['name'];
       $upload_path = "/var/www/uploads/";
       
       // VULNERABLE: No proper path validation
       move_uploaded_file(
           $file['tmp_name'],
           $upload_path . $filename
       );
   }

   // Secure implementation
   function processUploadSecure($file) {
       $filename = basename($file['name']); // Remove path components
       $upload_path = "/var/www/uploads/";
       
       // Validate file extension
       $allowed = ['jpg', 'png', 'pdf'];
       $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
       if (!in_array($ext, $allowed)) {
           throw new Exception("Invalid file type");
       }
       
       // Generate safe filename
       $safe_filename = bin2hex(random_bytes(16)) . "." . $ext;
       
       // Verify final path
       $final_path = $upload_path . $safe_filename;
       if (strpos(realpath($final_path), realpath($upload_path)) !== 0) {
           throw new Exception("Path traversal detected");
       }
       
       move_uploaded_file($file['tmp_name'], $final_path);
   }
   \`\`\`

4. Enterprise Defense Strategies:
   - Virtual root directories
   - File system access controls
   - Audit logging
   - Real-time monitoring
    `,
  },
  {
    id: 'dir-traversal-level3-quiz',
    title: 'Expert Directory Traversal Assessment',
    duration: '1.5h',
    type: 'quiz',
    status: 'available',
    description: 'Validate your expert-level knowledge of directory traversal security.',
    questions: [
      {
        question: 'What is the Zip Slip vulnerability?',
        options: [
          'Path traversal through malicious archive entries',
          'Compression algorithm flaw',
          'Memory overflow in zip handling',
          'Encryption bypass in zip files',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which method is most effective for preventing file upload traversal?',
        options: [
          'Generating random filenames and validating final paths',
          'Blocking all uploads',
          'Using original filenames',
          'Allowing all file types',
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is a symlink attack?',
        options: [
          'Using symbolic links to access restricted files',
          'Breaking encryption',
          'Modifying file permissions',
          'Deleting system files',
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which is the most secure way to handle file paths in Java?',
        options: [
          'Using getCanonicalPath() with proper validation',
          'Using relative paths',
          'Using string concatenation',
          'Using absolute paths',
        ],
        correctAnswer: 0,
      },
    ],
  },
];