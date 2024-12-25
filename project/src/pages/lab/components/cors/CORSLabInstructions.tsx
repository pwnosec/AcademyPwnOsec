import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function CORSLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">CORS Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the CORS Security Testing Lab. This environment provides hands-on experience with Cross-Origin Resource Sharing vulnerabilities and security testing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand CORS mechanisms and headers</li>
          <li>• Identify misconfigured CORS policies</li>
          <li>• Practice CORS bypass techniques</li>
          <li>• Learn secure CORS implementation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• CORS Policy Inspector</li>
          <li>• Terminal with CORS testing tools</li>
          <li>• Target application for testing</li>
          <li>• Real-time header analysis</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic CORS policy testing</li>
          <li>• Origin validation bypass</li>
          <li>• Credential handling tests</li>
          <li>• Preflight request analysis</li>
        </ul>
      </div>
    </div>
  );
}