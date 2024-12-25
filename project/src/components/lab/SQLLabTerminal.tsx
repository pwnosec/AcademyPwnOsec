import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

export function SQLLabTerminal() {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      setCommands([...commands, `$ ${currentCommand}`, 'Executing command...']);
      setCurrentCommand('');
    }
  };

  return (
    <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-green-400" />
          <span className="text-green-400">SQL Injection Lab Terminal</span>
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
          <div key={i} className="text-gray-300">
            {cmd}
          </div>
        ))}
      </div>

      <form onSubmit={executeCommand} className="flex gap-2">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-gray-300"
          placeholder="Enter command..."
        />
        <button type="submit" className="text-green-400">
          <Play className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}