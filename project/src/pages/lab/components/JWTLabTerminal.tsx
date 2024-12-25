import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface JWTLabTerminalProps {
  state: {
    currentToken: string;
    decodedToken: any;
    lastAttempt: any;
  };
  setState: (state: any) => void;
}

export function JWTLabTerminal({ state, setState }: JWTLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process JWT-related commands
    if (command.startsWith('jwt decode')) {
      try {
        const token = command.split(' ')[2];
        const [header, payload] = token.split('.').map(part => 
          JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/')))
        );
        setCommands(prev => [...prev, 
          'Header:', 
          JSON.stringify(header, null, 2),
          'Payload:',
          JSON.stringify(payload, null, 2)
        ]);
      } catch (error) {
        setCommands(prev => [...prev, 'Error: Invalid JWT format']);
      }
    } else if (command.startsWith('jwt verify')) {
      const token = command.split(' ')[2];
      setCommands(prev => [...prev, 'Verifying JWT signature...']);
      // Simulate verification
      setTimeout(() => {
        setCommands(prev => [...prev, 'Signature verification failed: Invalid signature']);
      }, 500);
    } else if (command === 'help') {
      setCommands(prev => [...prev, 
        'Available commands:',
        '  jwt decode <token>  - Decode JWT token',
        '  jwt verify <token>  - Verify JWT signature',
        '  jwt attack none     - Attempt none algorithm attack',
        '  clear              - Clear terminal',
        '  help               - Show this help message'
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
          <span className="text-green-400">JWT Testing Terminal</span>
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