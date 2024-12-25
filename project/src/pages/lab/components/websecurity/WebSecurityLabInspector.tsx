import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface WebSecurityLabInspectorProps {
  state: {
    currentRequest: any;
    responseHeaders: any;
    securityHeaders: any;
    vulnerabilities: string[];
    lastScan: any;
  };
}

export function WebSecurityLabInspector({ state }: WebSecurityLabInspectorProps) {
  const { securityHeaders, vulnerabilities } = state;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">Security Inspector</h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-400 mb-2">Security Headers</h3>
          <div className="space-y-2">
            {Object.entries(securityHeaders).map(([header, value]) => (
              <div key={header} className="flex justify-between items-center">
                <span className="text-gray-400">{header}:</span>
                <code className="text-sm text-green-400">{value as string}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-yellow-400 mb-2">Vulnerability Analysis</h3>
          <ul className="space-y-2">
            {vulnerabilities.map((vuln, index) => (
              <li key={index} className="flex items-center gap-2 text-red-400">
                <XCircle className="w-4 h-4" />
                {vuln}
              </li>
            ))}
            {vulnerabilities.length === 0 && (
              <li className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                No vulnerabilities detected
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}