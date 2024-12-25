import React from 'react';
import { BookOpen, Flag, Shield } from 'lucide-react';

export function SQLLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the SQL Injection Training Lab. This environment simulates a vulnerable web application
          for practicing SQL injection techniques safely.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Identify SQL injection vulnerabilities</li>
          <li>• Extract hidden database information</li>
          <li>• Bypass authentication mechanisms</li>
          <li>• Practice advanced exploitation techniques</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-400" />
          Available Resources
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Web application with login form</li>
          <li>• Terminal with SQLMap and custom tools</li>
          <li>• Database inspector for verification</li>
          <li>• Real-time query analysis</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Safety Guidelines
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• This is an isolated training environment</li>
          <li>• All actions are monitored and logged</li>
          <li>• Database resets every 30 minutes</li>
          <li>• Use only for educational purposes</li>
        </ul>
      </div>
    </div>
  );
}