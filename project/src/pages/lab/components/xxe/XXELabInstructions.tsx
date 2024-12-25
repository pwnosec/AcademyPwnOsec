import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function XXELabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">XXE Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the XXE Security Testing Lab. This environment provides hands-on experience with XML External Entity (XXE) vulnerabilities and security testing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Understand XXE vulnerabilities</li>
          <li>• Test XML parsing security</li>
          <li>• Practice XXE exploitation</li>
          <li>• Learn secure XML handling</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• XXE Inspector for analysis</li>
          <li>• Terminal with testing tools</li>
          <li>• Vulnerable XML parser</li>
          <li>• Real-time payload testing</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic XXE exploitation</li>
          <li>• File content extraction</li>
          <li>• SSRF via XXE</li>
          <li>• XXE defense implementation</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-800">
        <h4 className="font-semibold text-blue-400 mb-2">Sample XML Structure</h4>
        <pre className="text-sm text-gray-300">
{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE user [
   <!ENTITY test "sample">
]>
<user>
   <username>admin</username>
   <password>secret</password>
</user>`}
        </pre>
      </div>
    </div>
  );
}