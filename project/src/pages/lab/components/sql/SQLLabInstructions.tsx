import React from 'react';
import { BookOpen, Flag, Shield, Code } from 'lucide-react';

export function SQLLabInstructions() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-lg font-semibold mb-2">SQL Injection Testing Lab Instructions</h2>
        <p className="text-gray-400">
          Welcome to the SQL Injection Security Testing Lab. This environment provides hands-on experience with SQL injection vulnerabilities and exploitation techniques.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-400" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Master SQL injection fundamentals</li>
          <li>• Practice authentication bypass</li>
          <li>• Learn data extraction techniques</li>
          <li>• Understand blind SQL injection</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          Available Tools
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• SQL Query Inspector</li>
          <li>• Terminal with SQLMap</li>
          <li>• Target login application</li>
          <li>• Real-time query analysis</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Lab Challenges
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Basic authentication bypass</li>
          <li>• UNION-based extraction</li>
          <li>• Blind SQL injection</li>
          <li>• Advanced data extraction</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-800">
        <h4 className="font-semibold text-blue-400 mb-2">Database Schema</h4>
        <pre className="text-sm text-gray-300">
{`users:
  - id (int)
  - username (varchar)
  - password (varchar)
  - role (varchar)

products:
  - id (int)
  - name (varchar)
  - price (decimal)
  - category (varchar)

orders:
  - id (int)
  - user_id (int)
  - product_id (int)
  - quantity (int)
  - total (decimal)`}
        </pre>
      </div>
    </div>
  );
}