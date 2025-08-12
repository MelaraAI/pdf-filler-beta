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
      // Step 1 - Check if you're actually signed in using the context
  // ...removed debug logs...
      
      // Use the context authentication instead of making a separate call
      if (!user || !session) {
        console.error('❌ You are not authenticated - RLS will always fail');
        console.error('User from context:', user);
        console.error('Session from context:', session);
        alert('You must be logged in to upload files. Please log in and try again.');
        return;
      } else {
  // ...removed debug log...
      }

      const supabase = createClient();
      
      // Set the session explicitly on the client if it's not picking it up from cookies
      if (session) {
  // ...removed debug log...
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token
        });
      }
      
  // ...removed debug logs...
      
      // Step 2 - Attempt the upload with detailed logging
      const uploadPath = `${user.id}/${file.name}`;
  // ...removed debug logs...
      console.log('File type:', file.type);
      console.log('File name:', file.name);
      console.log('Bucket: user-documents');
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('user-documents')
        .upload(uploadPath, file);

      console.log('=== UPLOAD RESULT ===');
      console.log('Upload data:', uploadData);
      console.log('Upload error:', uploadError);

      if (uploadError) {
        console.error('❌ Upload failed:', uploadError);
        console.error('Error message:', uploadError.message);
        console.error('Full error object:', JSON.stringify(uploadError, null, 2));
        alert(`Upload failed: ${uploadError.message}`);
      } else {
        console.log('✅ File uploaded to user-documents successfully!');
        console.log('Upload data:', uploadData);
        alert('File uploaded successfully!');
      }
    } catch (error) {
      console.error('Error uploading to Supabase:', error);
      alert('An unexpected error occurred during upload.');
    }
  };

  // // Debug function to check authentication status manually
  // const debugAuthStatus = async () => {
  //   const supabase = createClient();
  //   console.log('=== MANUAL AUTH DEBUG ===');
    
  //   console.log('--- Context Authentication ---');
  //   console.log('Context User:', user);
  //   console.log('Context Session:', session);
  //   console.log('Is Authenticated:', isAuthenticated);
    
  //   console.log('--- Supabase Client Authentication (Before Session Set) ---');
  //   const { data: authData, error: authError } = await supabase.auth.getUser();
  //   console.log('Supabase Auth Data:', authData);
  //   console.log('Supabase Auth Error:', authError);
    
  //   // Try setting the session manually if we have one
  //   if (session && !authData?.user) {
  //     console.log('--- Attempting to Set Session Manually ---');
  //     try {
  //       await supabase.auth.setSession({
  //         access_token: session.access_token,
  //         refresh_token: session.refresh_token
  //       });
  //       console.log('✅ Session set successfully');
        
  //       // Check again after setting session
  //       const { data: newAuthData, error: newAuthError } = await supabase.auth.getUser();
  //       console.log('--- After Setting Session ---');
  //       console.log('New Auth Data:', newAuthData);
  //       console.log('New Auth Error:', newAuthError);
        
  //       if (newAuthData?.user) {
  //         console.log('✅ Supabase client now shows user authenticated with ID:', newAuthData.user.id);
  //       } else {
  //         console.log('❌ Still no authenticated user after setting session');
  //       }
  //     } catch (error) {
  //       console.error('❌ Error setting session:', error);
  //     }
  //   }
    
  //   console.log('--- Comparison ---');
  //   if (user && session) {
  //     console.log('✅ Context shows user authenticated with ID:', user.id);
  //   } else {
  //     console.log('❌ Context shows no authenticated user');
  //   }
    
  //   if (authData?.user) {
  //     console.log('✅ Supabase client shows user authenticated with ID:', authData.user.id);
  //   } else {
  //     console.log('❌ Supabase client shows no authenticated user');
  //   }
    
  //   // Check if they match
  //   if (user?.id === authData?.user?.id) {
  //     console.log('✅ Context and Supabase client match!');
  //   } else {
  //     console.log('⚠️  Context and Supabase client DO NOT match!');
  //     console.log('This suggests a session/cookie issue');
  //   }
  // };

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
