import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function WebSecurityLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">Web Security Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the Web Security Testing Lab. This environment provides hands-on experience with common web vulnerabilities and security testing techniques.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand common web vulnerabilities</li>
          <li>• Test security headers and configurations</li>
          <li>• Practice vulnerability scanning</li>
          <li>• Learn secure implementation patterns</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Security Header Inspector</li>
          <li>• Vulnerability Scanner</li>
          <li>• Target Test Application</li>
          <li>• Real-time Analysis Tools</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Security Header Analysis</li>
          <li>• XSS Vulnerability Testing</li>
          <li>• CSRF Protection Check</li>
          <li>• Content Security Policy</li>
        </ul>
      </div>
    </div>
  );
}