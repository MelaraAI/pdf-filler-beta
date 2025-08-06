'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
//import { useRouter } from 'next/navigation';
import ThemeToggle from '@/app/components/theme-toggle';
import ThemeCustomizer from '@/app/components/theme-customizer';
import FileUploadPreview from './FileUploadPreview';
import AutoFillInstructions from './AutoFillInstructions';
import SupabaseFileDropdown from './SupabaseFileDropdown';

interface FormField {
  id: string;
  name: string;
  value: string | boolean | string[];
  type: 'text' | 'checkbox' | 'radio' | 'dropdown';
  options?: string[];
  x: number;
  y: number;
  width: number;
  height: number;
}

const defaultTheme = {
  name: "Ocean",
  primary: "#4f46e5",
  secondary: "#06b6d4",
  accent: "#0891b2",
  background: "from-blue-950 to-cyan-950",
};

function App() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [instructions, setInstructions] = useState('');
  const [filledFields, setFilledFields] = useState<FormField[]>([]);
  const [colorTheme, setColorTheme] = useState(defaultTheme);
  const instructionsRef = useRef('');
  //const router = useRouter();

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("colorTheme");
    if (saved) {
      setColorTheme(JSON.parse(saved));
    }
  }, []);

  const handleThemeChange = (newTheme: typeof defaultTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem("colorTheme", JSON.stringify(newTheme));
  };

  // Keep ref in sync with instructions state
  const setInstructionsWithRef = useCallback((newInstructions: string) => {
    setInstructions(newInstructions);
    instructionsRef.current = newInstructions;
  }, []);

  const handlePdfLoad = useCallback((file: File) => {
    setPdfFile(file);
    // Reset filled fields when new PDF is loaded
    setFilledFields([]);
  }, []);

  const downloadPDF = useCallback(() => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCg==';
    link.download = 'filled-form.pdf';
    link.click();
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colorTheme.primary}08, ${colorTheme.secondary}08, ${colorTheme.accent}08)`,
      }}
    >
      {/* Background elements for visual consistency */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:24px_24px]"
        style={{
          background: `radial-gradient(circle at 1px 1px, ${colorTheme.primary}15 1px, transparent 0)`,
          backgroundSize: '24px 24px'
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
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <motion.div 
              className="p-2 bg-white/20 dark:bg-slate-900/30 rounded-lg backdrop-blur-sm border border-white/20"
              style={{
                background: `linear-gradient(135deg, ${colorTheme.primary}20, ${colorTheme.secondary}20)`,
                borderColor: `${colorTheme.primary}30`
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FileText 
                className="w-6 h-6"
                style={{ color: colorTheme.primary }}
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white">PDF Form Filler</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Upload, edit, and download your PDF forms</p>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={downloadPDF}
                disabled={!pdfFile}
                className="flex items-center space-x-2 px-6 py-3 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  boxShadow: `0 10px 30px ${colorTheme.primary}20`,
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[calc(100vh-200px)]">
          {/* Left Panel - File Upload & Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FileUploadPreview 
              onPdfLoad={handlePdfLoad}
              filledFields={filledFields}
              colorTheme={colorTheme}
            />
          </motion.div>

          {/* Right Panel - Form Controls */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <AutoFillInstructions
                instructions={instructions}
                setInstructions={setInstructionsWithRef}
                disabled={!pdfFile}
                colorTheme={colorTheme}
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <SupabaseFileDropdown
                colorTheme={colorTheme}
                onFileSelect={handlePdfLoad}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Theme Customizer */}
      <ThemeCustomizer onThemeChangeAction={handleThemeChange} currentTheme={colorTheme} />
    </div>
  );
}

export default App;
