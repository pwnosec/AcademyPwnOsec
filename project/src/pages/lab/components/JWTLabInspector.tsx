import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface JWTLabInspectorProps {
  state: {
    currentToken: string;
    decodedToken: any;
    lastAttempt: any;
  };
}

export function JWTLabInspector({ state }: JWTLabInspectorProps) {
  const { currentToken, decodedToken } = state;

  const getTokenParts = () => {
    if (!currentToken) return { header: null, payload: null, signature: null };
    
    const [headerB64, payloadB64, signature] = currentToken.split('.');
    try {
      const header = JSON.parse(atob(headerB64));
      const payload = JSON.parse(atob(payloadB64));
      return { header, payload, signature };
    } catch (error) {
      return { header: null, payload: null, signature: null };
    }
  };

  const { header, payload, signature } = getTokenParts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">JWT Token Inspector</h2>
        </div>
      </div>

      {currentToken ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">Header</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {header ? JSON.stringify(header, null, 2) : 'Invalid header'}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-2">Payload</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {payload ? JSON.stringify(payload, null, 2) : 'Invalid payload'}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-red-400 mb-2">Signature</h3>
            <p className="text-sm text-gray-300 break-all">
              {signature || 'No signature'}
            </p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {header?.alg === 'none' && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Warning: 'none' algorithm detected
                </li>
              )}
              {payload?.exp && new Date(payload.exp * 1000) < new Date() && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Token has expired
                </li>
              )}
              {!header?.alg && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Missing algorithm
                </li>
              )}
              {header?.alg === 'HS256' && (
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  Using secure algorithm (HS256)
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No token to inspect. Generate or paste a JWT token to begin analysis.
        </div>
      )}
    </div>
  );
}