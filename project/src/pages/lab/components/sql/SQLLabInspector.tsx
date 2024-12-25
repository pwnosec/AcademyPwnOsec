import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface SQLLabInspectorProps {
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
}

export function SQLLabInspector({ state }: SQLLabInspectorProps) {
  const { currentQuery, queryResult, databaseState } = state;

  const analyzeQuery = (query: string) => {
    const risks = [];
    
    if (query.toLowerCase().includes("'")) {
      risks.push("Single quote detected - Potential SQL injection point");
    }
    if (query.toLowerCase().includes("--")) {
      risks.push("Comment detected - Possible query manipulation");
    }
    if (query.toLowerCase().includes("union")) {
      risks.push("UNION keyword detected - Potential data extraction attempt");
    }
    if (query.toLowerCase().includes("sleep")) {
      risks.push("SLEEP function detected - Time-based injection attempt");
    }
    
    return risks;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">SQL Query Inspector</h2>
        </div>
      </div>

      {currentQuery ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">Current Query</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {currentQuery}
            </pre>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-2">Database State</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Current User:</span>
                <code className="text-green-400">{databaseState.currentUser}</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Available Tables:</span>
                <code className="text-green-400">{databaseState.tables.join(', ') || 'Unknown'}</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {analyzeQuery(currentQuery).map((risk, index) => (
                <li key={index} className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  {risk}
                </li>
              ))}
              {analyzeQuery(currentQuery).length === 0 && (
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  No immediate security risks detected
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No query to inspect. Execute a query to begin analysis.
        </div>
      )}
    </div>
  );
}