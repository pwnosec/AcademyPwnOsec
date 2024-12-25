import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface FileUploadLabTerminalProps {
  state: {
    currentFile: any;
    uploadResponse: any;
    lastAttempt: any;
    fileValidation: {
      type: any;
      size: any;
      content: any;
    };
  };
  setState: (state: any) => void;
}

export function FileUploadLabTerminal({ state, setState }: FileUploadLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process file upload related commands
    if (command === 'file analyze magic') {
      if (state.currentFile) {
        setCommands(prev => [...prev,
          'Analyzing file magic numbers...',
          'File signature: [First 4 bytes]',
          'MIME type: ' + (state.currentFile.type || 'Unknown'),
          'Possible file type bypass detected!'
        ]);
      } else {
        setCommands(prev => [...prev, 'No file available for analysis']);
      }
    } else if (command === 'file generate payload') {
      setCommands(prev => [...prev,
        'Generating malicious file payload...',
        'Example payloads:',
        '1. image.php.jpg',
        '2. shell.php%00.jpg',
        '3. exploit.php.',
        'Warning: Use these payloads ethically!'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  file analyze magic    - Analyze file magic numbers',
        '  file generate payload - Generate test payloads',
        '  file bypass mime     - MIME type bypass techniques',
        '  clear               - Clear terminal',
        '  help                - Show this help message'
      ]);
    } else if (command === 'clear') {
      setCommands([]);
    } else if (command === 'file bypass mime') {
      setCommands(prev => [...prev,
        'MIME Type Bypass Techniques:',
        '1. Content-Type Spoofing:',
        '   - Modify Content-Type header',
        '   - Use: image/jpeg for PHP files',
        '',
        '2. Double Extension:',
        '   - Example: shell.php.jpg',
        '   - Server might process last extension',
        '',
        '3. Null Byte Injection:',
        '   - Example: shell.php%00.jpg',
        '   - May truncate filename validation'
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
          <span className="text-green-400">File Upload Testing Terminal</span>
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