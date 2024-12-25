import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface CORSLabTargetAppProps {
  state: {
    currentRequest: any;
    corsHeaders: any;
    lastAttempt: any;
  };
  setState: (state: any) => void;
}

export function CORSLabTargetApp({ state, setState }: CORSLabTargetAppProps) {
  const [endpoint, setEndpoint] = useState('');
  const [origin, setOrigin] = useState('');
  const [method, setMethod] = useState('GET');
  const [message, setMessage] = useState('');

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requestData = {
      endpoint,
      origin,
      method,
      timestamp: new Date().toISOString()
    };

    // Simulate CORS headers based on configuration
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '3600'
    };

    setState({
      ...state,
      currentRequest: requestData,
      corsHeaders,
      lastAttempt: { endpoint, origin, method, timestamp: new Date() }
    });

    setMessage('Request sent. Check the CORS Policy Inspector for details.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">CORS Testing Interface</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <form onSubmit={handleRequest} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Target Endpoint</label>
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="https://api.example.com/data"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Origin</label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="https://attacker.com"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">HTTP Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Send Request
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: Try different origins and methods to test CORS policies.</p>
        </div>
      </div>
    </div>
  );
}