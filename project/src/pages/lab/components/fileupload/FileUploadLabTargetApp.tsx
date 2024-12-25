import React, { useState } from 'react';
import { AlertCircle, Upload } from 'lucide-react';

interface FileUploadLabTargetAppProps {
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

export function FileUploadLabTargetApp({ state, setState }: FileUploadLabTargetAppProps) {
  const [message, setMessage] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Simulate basic file validation
    const validation = {
      type: file.type.startsWith('image/'),
      size: file.size <= 5 * 1024 * 1024, // 5MB limit
      content: true // Simplified content validation
    };

    setState({
      ...state,
      currentFile: file,
      fileValidation: validation,
      lastAttempt: {
        name: file.name,
        type: file.type,
        size: file.size,
        timestamp: new Date()
      }
    });

    setMessage('File selected. Check the File Inspector for analysis.');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Vulnerable File Upload</h2>

        {message && (
          <div className="bg-blue-900/50 border border-blue-700 rounded p-3 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">{message}</span>
          </div>
        )}

        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-300 mb-4">
            Drag and drop your file here, or click to select
          </p>
          <input
            type="file"
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          >
            Select File
          </label>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>Hint: This upload form has basic file type restrictions. Try to bypass them!</p>
        </div>
      </div>
    </div>
  );
}