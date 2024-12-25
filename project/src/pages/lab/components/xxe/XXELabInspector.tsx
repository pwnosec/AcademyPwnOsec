import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface XXELabInspectorProps {
  state: {
    currentInput: string;
    parsedOutput: any;
    lastAttempt: any;
    vulnerabilities: string[];
  };
}

export function XXELabInspector({ state }: XXELabInspectorProps) {
  const { currentInput, parsedOutput } = state;

  const analyzeXML = (xml: string) => {
    const risks = [];
    
    if (xml.includes('<!ENTITY')) {
      risks.push('Custom entity declaration detected');
    }
    if (xml.includes('SYSTEM')) {
      risks.push('External entity usage detected');
    }
    if (xml.includes('file:///')) {
      risks.push('File system access attempt detected');
    }
    if (xml.includes('http://') || xml.includes('https://')) {
      risks.push('Network request attempt detected');
    }
    
    return risks;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">XXE Payload Inspector</h2>
        </div>
      </div>

      {currentInput ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">XML Input</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {currentInput}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-2">Parser Output</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {JSON.stringify(parsedOutput, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {analyzeXML(currentInput).map((risk, index) => (
                <li key={index} className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  {risk}
                </li>
              ))}
              {analyzeXML(currentInput).length === 0 && (
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  No immediate XXE risks detected
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No XML to inspect. Submit an XML document to begin analysis.
        </div>
      )}
    </div>
  );
}