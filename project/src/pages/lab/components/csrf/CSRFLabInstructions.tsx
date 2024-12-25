import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function CSRFLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">CSRF Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the CSRF Security Testing Lab. This environment provides hands-on experience with Cross-Site Request Forgery vulnerabilities and protection mechanisms.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand CSRF attack vectors</li>
          <li>• Identify vulnerable endpoints</li>
          <li>• Practice CSRF token bypass techniques</li>
          <li>• Learn secure CSRF protection implementation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Request Inspector for analysis</li>
          <li>• Terminal with CSRF testing tools</li>
          <li>• Vulnerable target application</li>
          <li>• Token generation and validation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic CSRF exploitation</li>
          <li>• Token validation bypass</li>
          <li>• Same-origin policy testing</li>
          <li>• CSRF protection implementation</li>
        </ul>
      </div>
    </div>
  );
}