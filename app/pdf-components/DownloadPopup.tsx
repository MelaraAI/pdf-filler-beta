'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface DownloadPopupProps {
  isOpen: boolean;
  onCloseAction: () => void;
  fileName: string;
  fileUrl: string;
  colorTheme?: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

export const DownloadPopup = ({ 
  isOpen, 
  onCloseAction, 
  fileName, 
  fileUrl, 
  colorTheme 
}: DownloadPopupProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloadComplete(true);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        onCloseAction();
        setDownloadComplete(false);
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseAction}
          />
          
          {/* Popup */}
          <motion.div
            className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-6 max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onCloseAction}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Content */}
            <div className="text-center">
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: colorTheme 
                    ? `linear-gradient(135deg, ${colorTheme.primary}20, ${colorTheme.secondary}20)`
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))'
                }}
              >
                {downloadComplete ? (
                  <CheckCircle 
                    className="w-8 h-8 text-green-500" 
                  />
                ) : (
                  <FileText 
                    className="w-8 h-8" 
                    style={{ color: colorTheme?.primary || '#3b82f6' }}
                  />
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                {downloadComplete ? 'Download Complete!' : 'File Ready for Download'}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                {downloadComplete 
                  ? 'Your file has been downloaded successfully.'
                  : 'Your processed PDF is ready to download.'
                }
              </p>
              
              {/* File name */}
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-6 bg-slate-100 dark:bg-slate-800 rounded-lg p-2">
                {fileName}
              </p>
              
              {/* Actions */}
              {!downloadComplete && (
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={onCloseAction}
                    variant="outline"
                    className="px-4 py-2"
                  >
                    Later
                  </Button>
                  
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="px-6 py-2 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      background: colorTheme 
                        ? `linear-gradient(to right, ${colorTheme.primary}, ${colorTheme.secondary})`
                        : 'linear-gradient(to right, #3b82f6, #6366f1)'
                    }}
                  >
                    <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`} />
                    {isDownloading ? 'Downloading...' : 'Download'}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
