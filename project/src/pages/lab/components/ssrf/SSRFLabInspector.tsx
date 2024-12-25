import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface SSRFLabInspectorProps {
  state: {
    currentRequest: any;
    responseData: any;
    lastAttempt: any;
  };
}

export function SSRFLabInspector({ state }: SSRFLabInspectorProps) {
  const { currentRequest, responseData } = state;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">Request Inspector</h2>
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
            <h3 className="text-sm font-semibold text-green-400 mb-2">Response Data</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {JSON.stringify(responseData, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {currentRequest?.url?.includes('internal') && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Potential internal network access attempt detected
                </li>
              )}
              {currentRequest?.url?.includes('metadata') && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Cloud metadata endpoint access attempt detected
                </li>
              )}
              {currentRequest?.url?.includes('file://') && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Local file access attempt detected
                </li>
              )}
              {currentRequest?.url?.match(/^https?:\/\/[\d.]+$/) && (
                <li className="flex items-center gap-2 text-yellow-400">
                  <AlertCircle className="w-4 h-4" />
                  IP address-based request detected
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No request to inspect. Make a request to begin analysis.
        </div>
      )}
    </div>
  );
}