import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function JWTLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">JWT Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the JWT Security Testing Lab. This environment provides hands-on experience with JWT vulnerabilities and security testing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand JWT structure and components</li>
          <li>• Identify common JWT vulnerabilities</li>
          <li>• Practice token manipulation techniques</li>
          <li>• Learn secure JWT implementation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• JWT Inspector for token analysis</li>
          <li>• Terminal with JWT tools</li>
          <li>• Target application for testing</li>
          <li>• Real-time token validation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• None algorithm attack</li>
          <li>• Weak secret exploitation</li>
          <li>• Token manipulation</li>
          <li>• Signature verification bypass</li>
        </ul>
      </div>
    </div>
  );
}