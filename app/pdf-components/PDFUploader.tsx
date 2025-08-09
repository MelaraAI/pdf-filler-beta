import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';

interface PDFUploaderProps {
  onUpload: (file: File) => void;
  colorTheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const PDFUploader = ({ onUpload, colorTheme }: PDFUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const { user, session } = useAuth();

  const isAuthenticated = !!session && !!user;

  const uploadToSupabase = async (file: File) => {
    try {
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
      }
    } catch (error) {
      console.error('Error uploading to Supabase:', error);
      alert('An unexpected error occurred during upload.');
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        setUploading(true);
        
        try {
          // Upload to Supabase in the background
          await uploadToSupabase(file);
          
          // Still call the original onUpload for immediate preview
          onUpload(file);
        } catch (error) {
          console.error('Error in file upload process:', error);
        } finally {
          setUploading(false);
        }
      } else {
        alert('Please select a valid PDF file.');
      }
    }
  };

  return (
    <motion.div 
      className="text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <Upload 
          className="w-16 h-16 mx-auto mb-6" 
          style={{ color: colorTheme?.accent || '#3b82f6' }}
        />
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <Button 
          onClick={() => document.getElementById('file-upload')?.click()}
          className="text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10 disabled:opacity-50"
          style={{
            background: `linear-gradient(to right, ${colorTheme?.primary || '#3b82f6'}, ${colorTheme?.secondary || '#6366f1'})`,
            '--hover-bg': `linear-gradient(to right, ${colorTheme?.primary || '#1d4ed8'}, ${colorTheme?.secondary || '#4f46e5'})`
          } as React.CSSProperties}
          disabled={uploading || !isAuthenticated}
        >
          <div className="flex items-center gap-2">
            <Upload className={`w-5 h-5 ${uploading ? 'animate-spin' : ''}`} />
            {!isAuthenticated 
              ? 'Please Log In' 
              : uploading 
                ? 'Uploading...' 
                : 'Upload PDF File'
            }
          </div>
        </Button>
      </motion.div>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
        {!isAuthenticated 
          ? 'You must be logged in to upload files'
          : 'Select a PDF file with form fields to get started'
        }
      </p>
      
      <input
        id="file-upload"
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileChange}
        className="hidden"
        disabled={uploading || !isAuthenticated}
      />
    </motion.div>
  );
};
