'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, 
  //Download 
} from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/app/components/theme-toggle';
import ThemeCustomizer from '@/app/components/theme-customizer';
import UserAvatar from '@/app/components/UserAvatar';
import AutoFillInstructions from './AutoFillInstructions';
import SupabaseFileDropdown, { SupabaseFileDropdownRef } from './SupabaseFileDropdown';

import { PDFUploader } from '../PDFUploader';
import { SimplePDFViewer } from '../SimplePDFViewer';



const defaultTheme = {
  name: 'Ocean',
  primary: '#4f46e5',
  secondary: '#06b6d4',
  accent: '#0891b2',
  background: 'from-blue-950 to-cyan-950',
};

function App() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
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

  const setInstructionsWithRef = useCallback((newInstructions: string) => {
    setInstructions(newInstructions);
    instructionsRef.current = newInstructions;
  }, []);

  const handlePdfLoad = useCallback((file: File) => {
    setPdfFile(file);
  }, []);

  const handlePdfUpload = useCallback(() => {
    if (dropdownRef.current) {
      dropdownRef.current.refresh();
    }
  }, []);

  const handleFileSelect = useCallback((file: File) => {
    setPdfFile(file);
  }, []);

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
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
          background: `radial-gradient(circle at 1px 1px, ${colorTheme.primary}15 1px, transparent 0)`,
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
            <ThemeToggle />
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
            <UserAvatar colorTheme={colorTheme} onLogout={handleLogout} />
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
            onRemove={() => setPdfFile(null)}
            onRenderNoPdf={() => (
              <PDFUploader
                onUpload={(file: File) => {
                  handlePdfLoad(file);
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
              userId={user?.id} // ⬅️ add this
            />
          </div>
          <div className="flex-1 min-h-0">
            <SupabaseFileDropdown ref={dropdownRef} colorTheme={colorTheme} onFileSelect={handleFileSelect} />
          </div>
        </div>
      </div>

      {/* Theme customizer */}
      <ThemeCustomizer onThemeChangeAction={handleThemeChange} currentTheme={colorTheme} />
    </div>
  );
}

export default function ProtectedDashboard() {
  return <App />;
}
