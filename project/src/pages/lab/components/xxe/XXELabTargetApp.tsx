import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface XXELabTargetAppProps {
  state: {
    currentInput: string;
    parsedOutput: any;
    lastAttempt: any;
    vulnerabilities: string[];
  };
  setState: (state: any) => void;
}

export function XXELabTargetApp({ state, setState }: XXELabTargetAppProps) {
  const [xmlInput, setXmlInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate vulnerable XML parsing
    setState({
      ...state,
      currentInput: xmlInput,
      parsedOutput: { parsed: true, content: xmlInput },
      lastAttempt: { input: xmlInput, timestamp: new Date() }
    });

    setMessage('XML processed. Check the XXE Inspector for analysis.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">XML Document Parser</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">XML Input</label>
            <textarea
              value={xmlInput}
              onChange={(e) => setXmlInput(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500 font-mono"
              rows={10}
              placeholder="<?xml version='1.0'?>"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Parse XML
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: The XML parser processes external entities without proper validation.</p>
        </div>
      </div>
    </div>
  );
}