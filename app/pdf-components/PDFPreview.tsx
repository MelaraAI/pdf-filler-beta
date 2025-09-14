'use client';

import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

interface PDFPreviewProps {
  file: File;
  width?: number;
  height?: number;
  className?: string;
}

export const PDFPreview: React.FC<PDFPreviewProps> = ({ 
  file, 
  width = 128, 
  height = 128, 
  className = '' 
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderPDF = async () => {
      // For now, let's create a simple timeout to show we're "loading" and then show the fallback
      // This will be replaced with actual PDF rendering once we fix the worker issues
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    renderPDF();
  }, [file, width, height]);

  if (loading) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded ${className}`}
        style={{ width, height }}
      >
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  // Show a nice fallback with file info
  return (
    <div 
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded border-2 border-blue-200 dark:border-gray-500 ${className}`}
      style={{ width, height }}
    >
      <FileText className="w-10 h-10 mb-2 text-blue-600 dark:text-blue-400" />
      <div className="text-xs font-medium text-blue-800 dark:text-blue-200 text-center px-2">
        PDF Document
      </div>
      <div className="text-xs text-blue-600 dark:text-blue-300 mt-1 text-center px-2 truncate max-w-full">
        {Math.round(file.size / 1024)}KB
      </div>
    </div>
  );
};
