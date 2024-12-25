import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface SSRFLabTargetAppProps {
  state: {
    currentRequest: any;
    responseData: any;
    lastAttempt: any;
  };
  setState: (state: any) => void;
}

export function SSRFLabTargetApp({ state, setState }: SSRFLabTargetAppProps) {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleFetch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requestData = {
      url,
      method: 'GET',
      timestamp: new Date().toISOString()
    };

    // Simulate response based on URL patterns
    let responseData = null;
    if (url.includes('internal')) {
      responseData = {
        status: 403,
        message: 'Access to internal network detected'
      };
    } else if (url.includes('metadata')) {
      responseData = {
        status: 200,
        data: {
          instance_id: 'i-1234567890abcdef0',
          instance_type: 't2.micro',
          local_hostname: 'ip-10-0-1-123.ec2.internal'
        }
      };
    } else if (url.match(/^https?:\/\/[\d.]+$/)) {
      responseData = {
        status: 200,
        message: 'IP address accessed successfully'
      };
    } else {
      responseData = {
        status: 200,
        message: 'Request processed successfully'
      };
    }

    setState({
      ...state,
      currentRequest: requestData,
      responseData,
      lastAttempt: { url, timestamp: new Date() }
    });

    setMessage('Request sent. Check the Request Inspector for details.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Vulnerable Image Fetcher</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <form onSubmit={handleFetch} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">URL to Fetch</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Fetch Image
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: The application fetches images from the provided URL without proper validation.</p>
        </div>
      </div>
    </div>
  );
}