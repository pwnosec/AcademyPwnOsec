import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface WebSecurityLabTargetAppProps {
  state: {
    currentRequest: any;
    responseHeaders: any;
    securityHeaders: any;
    vulnerabilities: string[];
    lastScan: any;
  };
  setState: (state: any) => void;
}

export function WebSecurityLabTargetApp({ state, setState }: WebSecurityLabTargetAppProps) {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate security scan
    const headers = {
      'Content-Security-Policy': "default-src 'self'",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    const vulnerabilities = [
      'Missing HSTS header',
      'Weak CSP configuration',
      'Clickjacking protection not enforced'
    ];

    setState({
      ...state,
      currentRequest: { url, method: 'GET', timestamp: new Date().toISOString() },
      securityHeaders: headers,
      vulnerabilities,
      lastScan: new Date()
    });

    setMessage('Security scan completed. Check the Security Inspector for results.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Web Security Scanner</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <form onSubmit={handleScan} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Target URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Start Security Scan
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: Try scanning for common web security vulnerabilities and missing security headers.</p>
        </div>
      </div>
    </div>
  );
}