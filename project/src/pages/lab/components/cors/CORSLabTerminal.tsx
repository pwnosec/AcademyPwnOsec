import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface CORSLabTerminalProps {
  state: {
    currentRequest: any;
    corsHeaders: any;
    lastAttempt: any;
  };
  setState: (state: any) => void;
}

export function CORSLabTerminal({ state, setState }: CORSLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process CORS-related commands
    if (command === 'cors test-origin') {
      setCommands(prev => [...prev,
        'Testing CORS with different origins:',
        '1. https://evil.com -> Allowed (misconfiguration)',
        '2. null -> Blocked',
        '3. https://subdomain.example.com -> Allowed',
        'Potential security risk: Wildcard origin policy detected'
      ]);
    } else if (command === 'cors analyze-headers') {
      if (state.corsHeaders) {
        setCommands(prev => [...prev,
          'Analyzing CORS headers:',
          JSON.stringify(state.corsHeaders, null, 2),
          'Security Analysis:',
          '- Origin validation: Weak',
          '- Method restrictions: Partial',
          '- Credential handling: Missing'
        ]);
      } else {
        setCommands(prev => [...prev, 'No CORS headers available for analysis']);
      }
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  cors test-origin     - Test different origin configurations',
        '  cors analyze-headers - Analyze CORS headers',
        '  cors preflight      - Test preflight requests',
        '  clear              - Clear terminal',
        '  help               - Show this help message'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
    } else if (command === 'cors preflight') {
      setCommands(prev => [...prev,
        'Sending preflight request:',
        'OPTIONS /api/data HTTP/1.1',
        'Origin: https://attacker.com',
        'Access-Control-Request-Method: PUT',
        'Access-Control-Request-Headers: X-Custom-Header',
        '',
        'Response:',
        'Access-Control-Allow-Origin: *',
        'Access-Control-Allow-Methods: GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers: Content-Type',
        'Access-Control-Max-Age: 3600'
      ]);
    } else {
      setCommands(prev => [...prev, 'Command not found. Type "help" for available commands']);
    }

    setCurrentCommand('');
  };

  return (
    <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-green-400" />
          <span className="text-green-400">CORS Testing Terminal</span>
        </div>
        <button
          onClick={() => setCommands([])}
          className="text-gray-500 hover:text-gray-400"
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>

      <div className="h-80 overflow-y-auto mb-4 space-y-1">
        {commands.map((cmd, i) => (
          <div key={i} className="text-gray-300 whitespace-pre-wrap">{cmd}</div>
        ))}
      </div>

      <form onSubmit={executeCommand} className="flex gap-2">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-gray-300"
          placeholder="Type 'help' for available commands..."
        />
        <button type="submit" className="text-green-400">
          <Play className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}