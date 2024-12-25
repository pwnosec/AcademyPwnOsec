import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface WebSecurityLabTerminalProps {
  state: {
    currentRequest: any;
    responseHeaders: any;
    securityHeaders: any;
    vulnerabilities: string[];
    lastScan: any;
  };
  setState: (state: any) => void;
}

export function WebSecurityLabTerminal({ state, setState }: WebSecurityLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process security testing commands
    if (command === 'scan headers') {
      setCommands(prev => [...prev,
        'Scanning security headers...',
        'Results:',
        '✓ Content-Security-Policy: present',
        '✗ Strict-Transport-Security: missing',
        '✓ X-Frame-Options: DENY',
        '✓ X-Content-Type-Options: nosniff',
        '✗ X-XSS-Protection: missing'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  scan headers       - Check security headers',
        '  scan xss          - Test for XSS vulnerabilities',
        '  scan csrf         - Check CSRF protections',
        '  scan csp          - Analyze CSP configuration',
        '  clear            - Clear terminal',
        '  help             - Show this help message'
      ]);
    } else if (command === 'scan xss') {
      setCommands(prev => [...prev,
        'Testing for XSS vulnerabilities...',
        'Injection points found:',
        '- Search parameter: vulnerable',
        '- Comment field: protected',
        '- User profile: partially protected',
        'Recommendation: Implement proper output encoding'
      ]);
    } else if (command === 'scan csrf') {
      setCommands(prev => [...prev,
        'Checking CSRF protections...',
        '- Token validation: missing',
        '- SameSite cookies: not configured',
        '- Custom headers: not implemented',
        'HIGH RISK: Implement CSRF tokens immediately'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
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
          <span className="text-green-400">Security Testing Terminal</span>
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