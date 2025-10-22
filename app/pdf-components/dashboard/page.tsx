'use client';

import { useState, useCallback, useRef, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FileText, 
  // Home 
} from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import SaucyLoader from '../../components/SaucyLoader';

// Lazy load heavy components
const ThemeToggle = lazy(() => import('@/app/components/theme-toggle'));
const ThemeCustomizer = lazy(() => import('@/app/components/theme-customizer'));
const UserAvatar = lazy(() => import('@/app/components/UserAvatar'));
const AutoFillInstructions = lazy(() => import('./AutoFillInstructions'));
const SupabaseFileDropdown = lazy(() => import('./SupabaseFileDropdown').then(module => ({ default: module.default })));
const PDFUploader = lazy(() => import('../PDFUploader').then(module => ({ default: module.PDFUploader })));
const SimplePDFViewer = lazy(() => import('../SimplePDFViewer').then(module => ({ default: module.SimplePDFViewer })));
const DownloadPopup = lazy(() => import('../DownloadPopup').then(module => ({ default: module.DownloadPopup })));

import type { SupabaseFileDropdownRef } from './SupabaseFileDropdown';
import { useModifiedDocsSubscription } from '@/hooks/UseModifiedDocsSubscription';



const defaultTheme = {
  name: 'Ocean',
  primary: '#4f46e5',
  secondary: '#06b6d4',
  accent: '#0891b2',
  background: 'from-blue-950 to-cyan-950',
};

function App() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [instructions, setInstructions] = useState('');
  // const [filledFields, setFilledFields] = useState<FormField[]>([]);
  // Update a field value in filledFields
  // const updateFieldValue = useCallback((id: string, value: string | boolean | string[]) => {
  //   setFilledFields((prev) => prev.map(f => f.id === id ? { ...f, value } : f));
  // }, []);
  const [colorTheme, setColorTheme] = useState(defaultTheme);
  const instructionsRef = useRef('');
  const dropdownRef = useRef<SupabaseFileDropdownRef>(null);
  const { signOut, user, session, isLoading } = useAuth();
  const router = useRouter();
  
  // Download popup state
  const [download, setDownload] = useState<{name: string; url: string} | null>(null);

  // Stable callback for subscription
  const handleNewFile = useCallback(({ filename, signedUrl }: { filename: string; signedUrl: string }) => {
    setDownload({ name: filename, url: signedUrl });
  }, []);

  // Subscribe to modified documents
  useModifiedDocsSubscription(user?.id, handleNewFile);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('colorTheme');
    if (saved) {
      setColorTheme(JSON.parse(saved));
    }
  }, []);

  // Authentication check
  useEffect(() => {
    if (!isLoading && !session && !user) {
      router.push('/');
    }
  }, [isLoading, session, user, router]);

  const handleThemeChange = (newTheme: typeof defaultTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem('colorTheme', JSON.stringify(newTheme));
  };

  const setInstructionsWithRef = useCallback((newInstructions: string | ((prev: string) => string)) => {
    if (typeof newInstructions === 'function') {
      const updatedInstructions = newInstructions(instructions);
      setInstructions(updatedInstructions);
      instructionsRef.current = updatedInstructions;
    } else {
      setInstructions(newInstructions);
      instructionsRef.current = newInstructions;
    }
  }, [instructions]);

  const handlePdfLoad = useCallback((file: File, signedUrl?: string) => {
    setPdfFile(file);
    setSignedUrl(signedUrl || null);
  }, []);

  const handlePdfUpload = useCallback(() => {
    if (dropdownRef.current) {
      dropdownRef.current.refresh();
    }
  }, []);

  const handleFileSelect = useCallback(async (file: File) => {
    setPdfFile(file);
    
    // Generate signed URL for the selected file
    if (user && session) {
      try {
        const supabase = createClient();
        
        // Set session if needed
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token
        });
        
        // Generate signed URL for the selected file
        const filePath = `${user.id}/${file.name}`;
        
        const { data: signedData, error: signedError } = await supabase.storage
          .from('user-documents')
          .createSignedUrl(filePath, 60 * 60); // 1 hour expiry
          
        if (!signedError && signedData?.signedUrl) {
          setSignedUrl(signedData.signedUrl);
        } else {
          setSignedUrl(null);
        }
      } catch {
        setSignedUrl(null);
      }
    } else {
      setSignedUrl(null);
    }
  }, [user, session]);

  // const downloadPDF = useCallback(() => {
  //   const link = document.createElement('a');
  //   link.href =
  //     'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCg==';
  //   link.download = 'filled-form.pdf';
  //   link.click();
  // }, []);

  const handleLogout = useCallback(async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Unexpected error during logout:', error);
      alert('An unexpected error occurred during logout.');
    }
  }, [signOut]);

  // const handleGoHome = useCallback(() => {
  //   router.push('/dashboard');
  // }, [router]);

  if (isLoading) {
    return (
      <SaucyLoader 
        currentTheme={colorTheme}
        isLoading={isLoading}
        size="md"
        message="Loading dashboard"
      />
    );
  }

  if (!session || !user) {
    return null;
  }

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: `linear-gradient(135deg, ${colorTheme.primary}08, ${colorTheme.secondary}08, ${colorTheme.accent}08)`,
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${colorTheme.primary}15 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Header */}
      <motion.header
        className="relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/30 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* <motion.button
              onClick={handleGoHome}
              className="p-2 rounded-lg border hover:bg-white/10 dark:hover:bg-slate-700/30 transition-all duration-200"
              style={{
                background: `linear-gradient(135deg, ${colorTheme.secondary}15, ${colorTheme.primary}15)`,
                borderColor: `${colorTheme.secondary}30`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Back to PDF Tools"
            >
              <Home className="w-5 h-5" style={{ color: colorTheme.secondary }} />
            </motion.button> */}
            <div
              className="p-2 rounded-lg border"
              style={{
                background: `linear-gradient(135deg, ${colorTheme.primary}20, ${colorTheme.secondary}20)`,
                borderColor: `${colorTheme.primary}30`,
              }}
            >
              <FileText className="w-6 h-6" style={{ color: colorTheme.primary }} />
            </div>
            <div>
              <h1 className="text-xl font-semibold">PDF Form Filler</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Upload, preview, and download your PDF forms
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Suspense fallback={null}>
              <ThemeToggle />
            </Suspense>
            {/* <Button
              onClick={downloadPDF}
              disabled={!pdfFile}
              className="flex items-center space-x-2"
              style={{
                background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
              }}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </Button> */}
            <Suspense fallback={null}>
              <UserAvatar colorTheme={colorTheme} onLogout={handleLogout} />
            </Suspense>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[calc(100vh-200px)]">
        {/* Left: Upload & Preview */}
        <div className="space-y-6 h-full flex items-center justify-center">
          <SimplePDFViewer
            file={pdfFile}
            colorTheme={colorTheme}
            onRemove={() => {
              setPdfFile(null);
              setSignedUrl(null); // Clear signed URL when removing file
            }}
            onRenderNoPdf={() => (
              <PDFUploader
                onUpload={(file: File, signedUrl?: string) => {
                  handlePdfLoad(file, signedUrl);
                  handlePdfUpload();
                }}
                colorTheme={colorTheme}
              />
            )}
          />
        </div>

        {/* Right: Controls */}
        <div className="space-y-6 h-full flex flex-col">
          <div className="flex-1 min-h-0">
            <AutoFillInstructions
              instructions={instructions}
              setInstructions={setInstructionsWithRef}
              autoFill={pdfFile ? () => {/* TODO: implement AI fill */} : undefined}
              disabled={!pdfFile}
              colorTheme={colorTheme}
              userId={user?.id}
              signedUrl={signedUrl}
              fileName={pdfFile?.name || null}
            />
          </div>
          <div className="flex-1 min-h-0">
            <SupabaseFileDropdown ref={dropdownRef} colorTheme={colorTheme} onFileSelect={handleFileSelect} />
          </div>
        </div>
      </div>

      {/* Theme customizer */}
      <ThemeCustomizer onThemeChangeAction={handleThemeChange} currentTheme={colorTheme} />
      
      {/* Download popup for processed files */}
      <DownloadPopup
        isOpen={!!download}
        onCloseAction={() => setDownload(null)}
        fileName={download?.name || ''}
        fileUrl={download?.url || ''}
        colorTheme={colorTheme}
      />
    </div>
  );
}

export default function ProtectedDashboard() {
  return <App />;
}
