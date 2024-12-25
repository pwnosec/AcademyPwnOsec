import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function SSRFLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">SSRF Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the SSRF Security Testing Lab. This environment provides hands-on experience with Server-Side Request Forgery vulnerabilities and security testing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand SSRF attack vectors</li>
          <li>• Test internal network access</li>
          <li>• Access cloud metadata endpoints</li>
          <li>• Practice URL manipulation techniques</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Request Inspector for analysis</li>
          <li>• Terminal with SSRF testing tools</li>
          <li>• Target application with vulnerable endpoints</li>
          <li>• Real-time response analysis</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic SSRF exploitation</li>
          <li>• Internal network scanning</li>
          <li>• Cloud metadata access</li>
          <li>• URL scheme abuse</li>
        </ul>
      </div>
    </div>
  );
}