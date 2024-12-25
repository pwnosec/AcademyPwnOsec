import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface JWTLabTargetAppProps {
  state: {
    currentToken: string;
    decodedToken: any;
    lastAttempt: any;
  };
  setState: (state: any) => void;
}

export function JWTLabTargetApp({ state, setState }: JWTLabTargetAppProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a simple JWT for testing
    const header = {
      alg: "HS256",
      typ: "JWT"
    };
    
    const payload = {
      sub: "1234567890",
      name: username,
      role: "user",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
    };

    // Base64Url encode parts
    const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    
    // In a real app, this would be signed properly
    const signature = "FAKE_SIGNATURE";
    
    const token = `${headerB64}.${payloadB64}.${signature}`;
    
    setState({
      ...state,
      currentToken: token,
      decodedToken: { header, payload },
      lastAttempt: { username, timestamp: new Date() }
    });

    setError('Token generated. Inspect it in the JWT Inspector tab.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Vulnerable JWT Application</h2>

        {error && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{error}</span>
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
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
          <p>Hint: This login form generates vulnerable JWTs for testing.</p>
        </div>
      </div>
    </div>
  );
}