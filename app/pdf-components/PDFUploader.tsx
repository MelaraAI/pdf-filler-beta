import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

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

  const uploadToSupabase = async (file: File) => {
    try {
      const supabase = createClient();
      const fileName = `${Date.now()}-${file.name}`;
      
      const { error } = await supabase.storage
        .from('pdf-files')
        .upload(fileName, file);

      if (error) {
        console.error('Error uploading to Supabase:', error);
        // Still proceed with local upload even if Supabase upload fails
      } else {
        console.log('File uploaded to Supabase successfully:', fileName);
      }
    } catch (error) {
      console.error('Error uploading to Supabase:', error);
      // Still proceed with local upload even if Supabase upload fails
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        setUploading(true);
        
        // Upload to Supabase in the background
        uploadToSupabase(file);
        
        // Still call the original onUpload for immediate preview
        onUpload(file);
        
        setUploading(false);
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
          asChild
          className="text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10 disabled:opacity-50"
          style={{
            background: `linear-gradient(to right, ${colorTheme?.primary || '#3b82f6'}, ${colorTheme?.secondary || '#6366f1'})`,
            '--hover-bg': `linear-gradient(to right, ${colorTheme?.primary || '#1d4ed8'}, ${colorTheme?.secondary || '#4f46e5'})`
          } as React.CSSProperties}
          disabled={uploading}
        >
          <label htmlFor="file-upload" className="cursor-pointer flex items-center gap-2">
            <Upload className={`w-5 h-5 ${uploading ? 'animate-spin' : ''}`} />
            {uploading ? 'Uploading...' : 'Upload PDF File'}
          </label>
        </Button>
      </motion.div>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
        Select a PDF file with form fields to get started
      </p>
      
      <input
        id="file-upload"
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileChange}
        className="hidden"
        disabled={uploading}
      />
    </motion.div>
  );
};
