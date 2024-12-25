import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface CSRFLabTargetAppProps {
  state: {
    currentRequest: any;
    lastAttempt: any;
    csrfToken: string;
    sessionCookie: string;
  };
  setState: (state: any) => void;
}

export function CSRFLabTargetApp({ state, setState }: CSRFLabTargetAppProps) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate CSRF token for demonstration
    const newCsrfToken = Math.random().toString(36).substring(7);
    
    const requestData = {
      amount: parseFloat(amount),
      recipient,
      timestamp: new Date().toISOString(),
      csrfToken: newCsrfToken
    };

    setState({
      ...state,
      currentRequest: requestData,
      csrfToken: newCsrfToken,
      lastAttempt: { amount, recipient, timestamp: new Date() }
    });

    setMessage('Transfer initiated. Check Request Inspector for details.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Vulnerable Bank Transfer</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <form onSubmit={handleTransfer} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Recipient Account</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <input type="hidden" name="csrf_token" value={state.csrfToken} />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Transfer Funds
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: This form is vulnerable to CSRF attacks. Try to forge a request!</p>
        </div>
      </div>
    </div>
  );
}