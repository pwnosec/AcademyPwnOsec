import React from 'react';
import { Database, Table } from 'lucide-react';

interface SQLLabDatabaseProps {
  state: {
    tables: any[];
    currentQuery: string;
  };
}

export function SQLLabDatabase({ state }: SQLLabDatabaseProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">Database Inspector</h2>
        </div>
        <span className="text-sm text-gray-400">training_db</span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Table className="w-4 h-4 text-gray-400" />
          <span className="text-sm">Available Tables</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['users', 'products', 'orders', 'customers'].map((table) => (
            <div key={table} className="bg-gray-700 p-3 rounded-lg">
              <h3 className="font-mono text-sm text-blue-300">{table}</h3>
              <p className="text-xs text-gray-400 mt-1">5 columns</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Last Executed Query</h3>
        <div className="bg-gray-900 p-3 rounded-lg">
          <code className="text-sm text-green-400">
            {state.currentQuery || 'No query executed yet'}
          </code>
        </div>
      </div>
    </div>
  );
}