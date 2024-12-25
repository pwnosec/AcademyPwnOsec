import React, { useState } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { WebSecurityLabTerminal } from './components/websecurity/WebSecurityLabTerminal';
import { WebSecurityLabInspector } from './components/websecurity/WebSecurityLabInspector';
import { WebSecurityLabTargetApp } from './components/websecurity/WebSecurityLabTargetApp';
import { WebSecurityLabInstructions } from './components/websecurity/WebSecurityLabInstructions';

export function WebSecurityLab() {
  const [activeTab, setActiveTab] = useState('instructions');
  const [labState, setLabState] = useState({
    currentRequest: null,
    responseHeaders: null,
    securityHeaders: {},
    vulnerabilities: [],
    lastScan: null
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Lab Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-bold">Web Security Testing Lab</h1>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-yellow-400">Training Environment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Content */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Instructions & Resources */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-4">
              <WebSecurityLabInstructions />
            </div>
          </div>

          {/* Right Panel - Lab Interface */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              {/* Lab Tabs */}
              <div className="flex border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('target')}
                  className={`px-4 py-3 ${
                    activeTab === 'target' ? 'bg-gray-700 text-blue-400' : 'text-gray-400'
                  }`}
                >
                  Target Application
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-4 py-3 ${
                    activeTab === 'terminal' ? 'bg-gray-700 text-blue-400' : 'text-gray-400'
                  }`}
                >
                  Terminal
                </button>
                <button
                  onClick={() => setActiveTab('inspector')}
                  className={`px-4 py-3 ${
                    activeTab === 'inspector' ? 'bg-gray-700 text-blue-400' : 'text-gray-400'
                  }`}
                >
                  Security Inspector
                </button>
              </div>

              {/* Lab Content */}
              <div className="p-4">
                {activeTab === 'target' && <WebSecurityLabTargetApp state={labState} setState={setLabState} />}
                {activeTab === 'terminal' && <WebSecurityLabTerminal state={labState} setState={setLabState} />}
                {activeTab === 'inspector' && <WebSecurityLabInspector state={labState} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}