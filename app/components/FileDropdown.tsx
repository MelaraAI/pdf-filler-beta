'use client';

import { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FileDown, RefreshCw, Download, } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/lib/auth/AuthContext';

interface SupabaseFile {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  size: number;
}

export interface FileDropdownRef {
  refresh: () => void;
}

interface FileDropdownProps {
  colorTheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  onFileSelect?: (file: File) => void;
}

const FileDropdown = forwardRef<FileDropdownRef, FileDropdownProps>(({ colorTheme, onFileSelect }, ref) => {
  const [files, setFiles] = useState<SupabaseFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState<string>('');
  const [downloadingFileId, setDownloadingFileId] = useState<string>('');
  const { session } = useAuth();

  const loadFiles = useCallback(async () => {
    try {
      setLoading(true);
      
      if (!session) {
        setFiles([]);
        return;
      }

      const supabase = createClient();

      const { data, error } = await supabase
        .from('pdf_files')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading files:', error);
        setFiles([]);
      } else {
        setFiles(data || []);
      }
    } catch (error) {
      console.error('Unexpected error loading files:', error);
      setFiles([]);
    } finally {
      setLoading(false);
    }
  }, [session]);

  useImperativeHandle(ref, () => ({
    refresh: loadFiles
  }));

  useEffect(() => {
    if (session) {
      loadFiles();
    } else {
      setFiles([]);
    }
  }, [session, loadFiles]);

  const downloadFile = async (fileId: string) => {
    if (!fileId || !session) {
      alert('Please select a file first.');
      return;
    }

    try {
      setDownloadingFileId(fileId);
      
      const file = files.find(f => f.id === fileId);
      if (!file) {
        alert('File not found.');
        return;
      }

      const supabase = createClient();
      const filePath = `${session.user.id}/${file.name}`;

      const { data, error } = await supabase.storage
        .from('user-documents')
        .download(filePath);

      if (error) {
        console.error('Error downloading file:', error);
        return;
      }

      const fileName = file.name;
      if (fileName && fileName.toLowerCase().endsWith('.pdf')) {
        const downloadedFile = new File([data], fileName, { type: 'application/pdf' });
        
        if (onFileSelect) {
          onFileSelect(downloadedFile);
        }
      } else {
        alert('Please select a valid PDF file.');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setDownloadingFileId('');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/20 dark:border-slate-700/30 shadow-lg p-6 space-y-6 h-full flex flex-col"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
            Saved PDF Files
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Load previously uploaded files from your storage
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={loadFiles}
            disabled={loading}
            className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center"
            style={{
              backgroundColor: `${colorTheme?.primary || '#3b82f6'}20`,
              color: colorTheme?.primary || '#3b82f6',
              border: `1px solid ${colorTheme?.primary || '#3b82f6'}30`
            }}
          >
            <RefreshCw className={`w-4 h-4 mr-1 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Select a file to load:
          </label>
          <select
            value={selectedFileId}
            onChange={(e) => setSelectedFileId(e.target.value)}
            className="w-full border border-slate-300/50 dark:border-slate-600/50 rounded-lg px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 transition-all duration-300 text-slate-900 dark:text-white"
            style={{
              '--tw-ring-color': `${colorTheme?.primary || '#3b82f6'}50`,
              borderColor: `${colorTheme?.primary || '#3b82f6'}30`
            } as React.CSSProperties}
            disabled={loading}
          >
            <option value="">
              {loading ? 'Loading files...' : files.length === 0 ? 'No files found' : 'Choose a file'}
            </option>
            {files.map((file) => (
              <option key={file.id} value={file.id}>
                {file.name} ({formatFileSize(file.size)}) - {formatDate(file.created_at)}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => downloadFile(selectedFileId)}
          disabled={!selectedFileId || downloadingFileId === selectedFileId}
          className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            backgroundColor: colorTheme?.primary || '#3b82f6',
            color: 'white'
          }}
        >
          {downloadingFileId === selectedFileId ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Loading File...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Load Selected File
            </>
          )}
        </button>

        {files.length === 0 && !loading && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <FileDown className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No PDF files found in storage.</p>
            <p className="text-xs mt-1">Upload files using the PDF Tools page.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
});

FileDropdown.displayName = 'FileDropdown';

export default FileDropdown;
