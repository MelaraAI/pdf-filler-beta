'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import { FileDown, RefreshCw, Download, Upload } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/lib/auth/AuthContext';

interface SupabaseFile {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  size: number;
}

export interface SupabaseFileDropdownRef {
  refresh: () => void;
}

interface SupabaseFileDropdownProps {
  colorTheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  onFileSelect?: (file: File) => void;
}

const SupabaseFileDropdown = forwardRef<SupabaseFileDropdownRef, SupabaseFileDropdownProps>(({ colorTheme, onFileSelect }, ref) => {
  const [files, setFiles] = useState<SupabaseFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState<string>('');
  const [downloadingFileId, setDownloadingFileId] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const { session } = useAuth();

  // Expose refresh function via ref
  useImperativeHandle(ref, () => ({
    refresh: fetchFiles,
  }));

  // Always fetch files on mount and when session changes
  useEffect(() => {
    fetchFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const fetchFiles = async () => {
    const supabase = createClient();
    setLoading(true);
    try {
      if (!session) {
        console.error('No active session found');
        setFiles([]);
        return;
      }

      const { data, error } = await supabase.storage
        .from('user-documents')
        .list(session.user.id, {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) {
        console.error('Error fetching files:', error);
        return;
      }

      const filesWithMetadata = data?.map(file => ({
        id: file.name,
        name: file.name,
        created_at: file.created_at || '',
        updated_at: file.updated_at || '',
        size: file.metadata?.size || 0
      })) || [];

      setFiles(filesWithMetadata);
      // Auto-select the first file if available
      if (filesWithMetadata.length > 0) {
        setSelectedFileId(filesWithMetadata[0].id);
      } else {
        setSelectedFileId('');
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (fileName: string) => {
    if (!fileName) return;
    
    const supabase = createClient();
    setDownloadingFileId(fileName);
    try {
      if (!session) {
        console.error('No active session found');
        return;
      }

      const filePath = `${session.user.id}/${fileName}`;
      const { data, error } = await supabase.storage
        .from('user-documents')
        .download(filePath);

      if (error) {
        console.error('Error downloading file:', error);
        return;
      }

      // Convert blob to File object
      const file = new File([data], fileName, { type: 'application/pdf' });
      
      if (onFileSelect) {
        onFileSelect(file);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setDownloadingFileId('');
    }
  };

  const uploadToSupabase = async (file: File) => {
    try {
      setUploading(true);
      
      if (!session) {
        console.error('No active session found');
        alert('You must be logged in to upload files. Please log in and try again.');
        return;
      }

      const supabase = createClient();
      
      console.log('Attempting to upload file to Supabase...', file.name);
      console.log('Session found, user authenticated:', session.user.id);
      
      const filePath = `${session.user.id}/${file.name}`;
      console.log('Uploading to path:', filePath);
      
      const { data, error } = await supabase.storage
        .from('user-documents')
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading to Supabase:', error);
        alert(`Upload failed: ${error.message}`);
      } else {
        console.log('File uploaded to user-documents successfully!');
        console.log('Upload data:', data);
        alert('File uploaded successfully!');
        // Refresh the file list after successful upload
        fetchFiles();
      }
    } catch (error) {
      console.error('Error uploading to Supabase:', error);
      alert('An unexpected error occurred during upload.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        uploadToSupabase(file);
      } else {
        alert('Please select a valid PDF file.');
      }
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
      className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 p-6 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
          <FileDown 
            className="w-5 h-5 mr-2" 
            style={{ color: colorTheme?.accent || '#6b7280' }}
          />
          Retrieve Uploaded Files
        </h3>
        <div className="flex items-center gap-2">
          <label htmlFor="file-upload-dropdown" className="cursor-pointer">
            <div
              className="flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${colorTheme?.primary || '#3b82f6'}20`,
                borderColor: `${colorTheme?.primary || '#3b82f6'}30`,
                color: colorTheme?.primary || '#3b82f6'
              }}
            >
              <Upload className={`w-4 h-4 mr-1 ${uploading ? 'animate-spin' : ''}`} />
              {uploading ? 'Uploading...' : 'Upload'}
            </div>
          </label>
          <input
            id="file-upload-dropdown"
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileUpload}
            className="hidden"
            disabled={uploading}
          />
          <button
            onClick={fetchFiles}
            disabled={loading}
            className="flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: `${colorTheme?.secondary || '#64748b'}20`,
              borderColor: `${colorTheme?.secondary || '#64748b'}30`,
              color: colorTheme?.secondary || '#64748b'
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
            <p className="text-xs mt-1">Upload files using the upload section above.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
});

SupabaseFileDropdown.displayName = 'SupabaseFileDropdown';

export default SupabaseFileDropdown;
