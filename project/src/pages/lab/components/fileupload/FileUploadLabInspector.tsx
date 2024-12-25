import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface FileUploadLabInspectorProps {
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
}

export function FileUploadLabInspector({ state }: FileUploadLabInspectorProps) {
  const { currentFile, fileValidation, lastAttempt } = state;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">File Inspector</h2>
        </div>
      </div>

      {currentFile ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">File Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Name:</span>
                <code className="text-gray-300">{currentFile.name}</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <code className="text-gray-300">{currentFile.type || 'Unknown'}</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Size:</span>
                <code className="text-gray-300">{(currentFile.size / 1024).toFixed(2)} KB</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-2">Validation Results</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                {fileValidation.type ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
                <span className={fileValidation.type ? 'text-green-400' : 'text-red-400'}>
                  File type validation
                </span>
              </li>
              <li className="flex items-center gap-2">
                {fileValidation.size ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
                <span className={fileValidation.size ? 'text-green-400' : 'text-red-400'}>
                  File size validation
                </span>
              </li>
              <li className="flex items-center gap-2">
                {fileValidation.content ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
                <span className={fileValidation.content ? 'text-green-400' : 'text-red-400'}>
                  Content validation
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Security Analysis</h3>
            <ul className="space-y-2">
              {!currentFile.type && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Missing MIME type - potential bypass attempt
                </li>
              )}
              {currentFile.name.includes('.php') && (
                <li className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-4 h-4" />
                  Potentially dangerous file extension detected
                </li>
              )}
              {currentFile.size > 5 * 1024 * 1024 && (
                <li className="flex items-center gap-2 text-yellow-400">
                  <AlertCircle className="w-4 h-4" />
                  File exceeds size limit (5MB)
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No file to inspect. Upload a file to begin analysis.
        </div>
      )}
    </div>
  );
}