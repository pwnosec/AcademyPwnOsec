import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface XSSLabTargetAppProps {
  state: {
    currentInput: string;
    renderedOutput: string;
    lastAttempt: any;
    vulnerabilities: string[];
  };
  setState: (state: any) => void;
}

export function XSSLabTargetApp({ state, setState }: XSSLabTargetAppProps) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate vulnerable comment system
    setComments([...comments, comment]);
    
    setState({
      ...state,
      currentInput: comment,
      renderedOutput: comment,
      lastAttempt: { input: comment, timestamp: new Date() }
    });

    setMessage('Comment added successfully!');
    setComment('');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Vulnerable Comment System</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Add a Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors"
          >
            Post Comment
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Comments</h3>
          <div className="space-y-4">
            {comments.map((c, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg"
                dangerouslySetInnerHTML={{ __html: c }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: The comment system is vulnerable to XSS attacks.</p>
        </div>
      </div>
    </div>
  );
}