import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function FileUploadLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">File Upload Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the File Upload Security Testing Lab. This environment provides hands-on experience with file upload vulnerabilities and security testing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand file upload vulnerabilities</li>
          <li>• Test file type validation</li>
          <li>• Practice bypass techniques</li>
          <li>• Learn secure upload implementation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• File Inspector for analysis</li>
          <li>• Terminal with testing tools</li>
          <li>• Target upload application</li>
          <li>• Real-time validation checks</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic file type bypass</li>
          <li>• Content-type manipulation</li>
          <li>• Magic number testing</li>
          <li>• File extension tricks</li>
        </ul>
      </div>
    </div>
  );
}