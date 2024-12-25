import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface CORSLabInspectorProps {
  state: {
    currentRequest: any;
    corsHeaders: any;
    lastAttempt: any;
  };
}

export function CORSLabInspector({ state }: CORSLabInspectorProps) {
  const { currentRequest, corsHeaders } = state;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">CORS Policy Inspector</h2>
        </div>
      </div>

      {currentRequest ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">Request Details</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {JSON.stringify(currentRequest, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-2">CORS Headers</h3>
            <div className="space-y-2">
              {Object.entries(corsHeaders || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{key}:</span>
                  <code className="text-sm text-green-400">{value as string}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {corsHeaders?.['Access-Control-Allow-Origin'] === '*' && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Wildcard origin allowed (security risk)
                </li>
              )}
              {!corsHeaders?.['Access-Control-Allow-Credentials'] && (
                <li className="flex items-center gap-2 text-yellow-400">
                  <AlertCircle className="w-4 h-4" />
                  Credentials not allowed
                </li>
              )}
              {corsHeaders?.['Access-Control-Allow-Methods']?.includes('*') && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  All HTTP methods allowed
                </li>
              )}
              {corsHeaders?.['Access-Control-Allow-Headers'] && (
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  Custom headers configured
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No request to inspect. Make a cross-origin request to begin analysis.
        </div>
      )}
    </div>
  );
}