import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface XSSLabTerminalProps {
  state: {
    currentInput: string;
    renderedOutput: string;
    lastAttempt: any;
    vulnerabilities: string[];
  };
  setState: (state: any) => void;
}

export function XSSLabTerminal({ state, setState }: XSSLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process XSS-related commands
    if (command === 'xss generate basic') {
      setCommands(prev => [...prev,
        'Basic XSS Payloads:',
        '<script>alert("XSS")</script>',
        '<img src=x onerror="alert(\'XSS\')">',
        '<svg onload="alert(\'XSS\')">',
        '<body onload="alert(\'XSS\')">',
        'javascript:alert("XSS")'
      ]);
    } else if (command === 'xss bypass filters') {
      setCommands(prev => [...prev,
        'Filter Bypass Techniques:',
        '1. Mixed Case:',
        '<ScRiPt>alert(1)</sCrIpT>',
        '',
        '2. Encoded Characters:',
        '&#x3C;script&#x3E;alert(1)&#x3C;/script&#x3E;',
        '',
        '3. Alternative Attributes:',
        '<div onclick="alert(1)">Click me</div>',
        '',
        '4. Data URI:',
        '<image src="data:image/gif;base64,R0lGOD...">'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  xss generate basic   - Generate basic XSS payloads',
        '  xss bypass filters   - Show filter bypass techniques',
        '  xss analyze         - Analyze current payload',
        '  clear              - Clear terminal',
        '  help               - Show this help message'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
    } else if (command === 'xss analyze') {
      if (state.currentInput) {
        setCommands(prev => [...prev,
          'Analyzing current payload:',
          `Input: ${state.currentInput}`,
          'Analysis:',
          '- Script tags: ' + (state.currentInput.includes('<script>') ? 'Detected' : 'Not found'),
          '- Event handlers: ' + (state.currentInput.match(/on\w+=/i) ? 'Detected' : 'Not found'),
          '- JavaScript URIs: ' + (state.currentInput.includes('javascript:') ? 'Detected' : 'Not found'),
          '- Encoded content: ' + (state.currentInput.includes('&#') ? 'Detected' : 'Not found')
        ]);
      } else {
        setCommands(prev => [...prev, 'No payload available for analysis']);
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
          <span className="text-green-400">XSS Testing Terminal</span>
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