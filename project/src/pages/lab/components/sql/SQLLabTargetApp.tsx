import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface SQLLabTargetAppProps {
  state: {
    currentQuery: string;
    queryResult: any;
    lastAttempt: any;
    databaseState: {
      tables: string[];
      currentUser: string;
      privileges: string[];
    };
  };
  setState: (state: any) => void;
}

export function SQLLabTargetApp({ state, setState }: SQLLabTargetAppProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate vulnerable SQL query
    const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    
    setState({
      ...state,
      currentQuery: query,
      lastAttempt: { username, password, timestamp: new Date() }
    });

    // Simulate login check
    if (username.includes("'") || password.includes("'")) {
      setError('Invalid characters detected in input');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Product Management System</h2>

        {error && (
          <div className="bg-red-900/50 border border-red-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: The login form is vulnerable to SQL injection attacks.</p>
        </div>
      </div>
    </div>
  );
}