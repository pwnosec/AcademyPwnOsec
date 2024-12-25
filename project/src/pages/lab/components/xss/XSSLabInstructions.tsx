import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function XSSLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">XSS Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the XSS Security Testing Lab. This environment provides hands-on experience with Cross-Site Scripting vulnerabilities and security testing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand XSS attack vectors</li>
          <li>• Test different XSS payloads</li>
          <li>• Practice bypass techniques</li>
          <li>• Learn secure implementation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• XSS Inspector for analysis</li>
          <li>• Terminal with testing tools</li>
          <li>• Vulnerable target application</li>
          <li>• Real-time payload testing</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic XSS exploitation</li>
          <li>• Filter bypass techniques</li>
          <li>• DOM-based XSS testing</li>
          <li>• XSS protection implementation</li>
        </ul>
      </div>
    </div>
  );
}