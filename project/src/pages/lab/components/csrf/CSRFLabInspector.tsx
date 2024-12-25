import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface CSRFLabInspectorProps {
  state: {
    currentRequest: any;
    lastAttempt: any;
    csrfToken: string;
    sessionCookie: string;
  };
}

export function CSRFLabInspector({ state }: CSRFLabInspectorProps) {
  const { currentRequest, csrfToken, sessionCookie } = state;

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
            <h3 className="text-sm font-semibold text-green-400 mb-2">Security Tokens</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">CSRF Token:</span>
                <code className="text-sm text-green-400">{csrfToken}</code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Session Cookie:</span>
                <code className="text-sm text-green-400">{sessionCookie || 'Not set'}</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {!csrfToken && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  No CSRF token present
                </li>
              )}
              {!sessionCookie && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  No session cookie found
                </li>
              )}
              <li className="flex items-center gap-2 text-yellow-400">
                <AlertCircle className="w-4 h-4" />
                SameSite cookie attribute not set
              </li>
              {csrfToken && (
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  CSRF token included in request
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No request to inspect. Submit a form or generate a request to begin analysis.
        </div>
      )}
    </div>
  );
}