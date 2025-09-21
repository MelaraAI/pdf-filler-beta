import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';

interface PDFUploaderProps {
  onUpload: (file: File, signedUrl?: string) => void; // now returns signedUrl too
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
      if (!user || !session) {
        alert('You must be logged in to upload files. Please log in and try again.');
        return null;
      }

      const supabase = createClient();

      // Ensure session is set on client
      await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      });

      // Generate unique ID and path
      const file_id = crypto.randomUUID();
      const uploadPath = `${user.id}/${file.name}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('user-documents')
        .upload(uploadPath, file);

      if (uploadError) {
        console.error('❌ Upload failed:', uploadError.message);
        alert(`Upload failed: ${uploadError.message}`);
        return null;
      }

      // Insert metadata (no signed URL stored in DB)
      const { error: dbError } = await supabase
        .from('unmodified-documents')
        .insert({
          file_id: file_id,
          filename: file.name,
          storage_path: uploadPath,
          mime_type: file.type,
          user_id: user.id,
        });

      if (dbError) {
        console.error('❌ Database insert failed:', dbError.message);
        alert(`File uploaded but failed to save metadata: ${dbError.message}`);
        return null;
      }

      // Generate a signed URL for immediate use (1 hour)
      
      const { data: signedData, error: signedError } = await supabase.storage
        .from('user-documents')
        .createSignedUrl(uploadPath, 60 * 60);

      if (signedError) {
        console.error('❌ Signed URL generation failed:', signedError.message);
        console.error('❌ Full signedError:', signedError);
        alert(`Signed URL creation failed: ${signedError.message}`);
        return null;
      }

      const signedUrl = signedData?.signedUrl;

      // Return the signed URL so it can be passed to n8n
      return signedUrl;
    } catch (error) {
      console.error('Error uploading to Supabase:', error);
      alert('An unexpected error occurred during upload.');
      return null;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        setUploading(true);
        try {
          const signedUrl = await uploadToSupabase(file);

          // Pass both the File and the signed URL to the parent
          onUpload(file, signedUrl || undefined);
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
