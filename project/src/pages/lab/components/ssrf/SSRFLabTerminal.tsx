import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface SSRFLabTerminalProps {
  state: {
    currentRequest: any;
    responseData: any;
    lastAttempt: any;
  };
  setState: (state: any) => void;
}

export function SSRFLabTerminal({ state, setState }: SSRFLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process SSRF-related commands
    if (command === 'ssrf scan internal') {
      setCommands(prev => [...prev,
        'Scanning internal network...',
        'Found services:',
        '- http://localhost:8080 [Web Server]',
        '- http://10.0.0.1:3306 [Database]',
        '- http://internal-api:8000 [Internal API]',
        'Warning: Internal network access detected!'
      ]);
    } else if (command === 'ssrf test metadata') {
      setCommands(prev => [...prev,
        'Testing cloud metadata endpoints:',
        '1. AWS: http://169.254.169.254/latest/meta-data/',
        '2. GCP: http://metadata.google.internal/',
        '3. Azure: http://169.254.169.254/metadata/instance',
        'Potential metadata endpoint access available'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  ssrf scan internal   - Scan internal network',
        '  ssrf test metadata   - Test metadata endpoints',
        '  ssrf analyze url     - Analyze URL for SSRF',
        '  clear               - Clear terminal',
        '  help                - Show this help message'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
    } else if (command.startsWith('ssrf analyze url')) {
      const url = command.split(' ')[3];
      setCommands(prev => [...prev,
        'Analyzing URL for SSRF vulnerabilities:',
        `URL: ${url || 'No URL provided'}`,
        'Checks:',
        '- Internal hostname resolution',
        '- IP address restrictions',
        '- Protocol handler abuse',
        '- Redirect following behavior'
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
          <span className="text-green-400">SSRF Testing Terminal</span>
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