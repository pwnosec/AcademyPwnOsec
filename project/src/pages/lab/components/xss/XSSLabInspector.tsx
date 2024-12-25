import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface XSSLabInspectorProps {
  state: {
    currentInput: string;
    renderedOutput: string;
    lastAttempt: any;
    vulnerabilities: string[];
  };
}

export function XSSLabInspector({ state }: XSSLabInspectorProps) {
  const { currentInput, renderedOutput } = state;

  const analyzePayload = (input: string) => {
    const risks = [];
    
    if (input.includes('<script>')) {
      risks.push('Basic script tag detected');
    }
    if (input.includes('onerror=') || input.includes('onload=')) {
      risks.push('Event handler injection detected');
    }
    if (input.includes('javascript:')) {
      risks.push('JavaScript protocol handler detected');
    }
    if (input.match(/data:.*base64/)) {
      risks.push('Data URL with base64 encoding detected');
    }
    
    return risks;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">XSS Payload Inspector</h2>
        </div>
      </div>

      {currentInput ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">Input Payload</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {currentInput}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-2">Rendered Output</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {renderedOutput}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {analyzePayload(currentInput).map((risk, index) => (
                <li key={index} className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  {risk}
                </li>
              ))}
              {analyzePayload(currentInput).length === 0 && (
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  No immediate XSS risks detected
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No payload to inspect. Submit a comment to begin analysis.
        </div>
      )}
    </div>
  );
}