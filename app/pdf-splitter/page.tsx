'use client';

import React, { useState, useCallback, useRef, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, X, Scissors } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import SaucyLoader from '../components/SaucyLoader';
import { Button } from '@/app/components/ui/button';
import { useModifiedDocsSubscription } from '@/hooks/UseModifiedDocsSubscription';
import { PDFDocument } from 'pdf-lib';
import { PDFPreview } from '../pdf-components/PDFPreview';

// Lazy load heavy components
const ThemeToggle = lazy(() => import('@/app/components/theme-toggle'));
const ThemeCustomizer = lazy(() => import('@/app/components/theme-customizer'));
const UserAvatar = lazy(() => import('@/app/components/UserAvatar'));
const DownloadPopup = lazy(() => import('../pdf-components/DownloadPopup').then(module => ({ default: module.DownloadPopup })));

const defaultTheme = {
  name: 'Ocean',
  primary: '#4f46e5',
  secondary: '#06b6d4',
  accent: '#0891b2',
  background: 'from-blue-950 to-cyan-950',
};

interface PdfFile {
  id: string;
  file: File;
  name: string;
  size: number;
  pageCount?: number;
}

interface SplitPage {
  pageNumber: number;
  selected: boolean;
}

interface PageRange {
  id: string;
  from: number;
  to: number;
}

type SplitMode = 'pages' | 'range' | 'size';
type ExtractMode = 'all' | 'select';

function App() {
  const [pdfFile, setPdfFile] = useState<PdfFile | null>(null);
  const [splitPages, setSplitPages] = useState<SplitPage[]>([]);
  const [colorTheme, setColorTheme] = useState(defaultTheme);
  const [download, setDownload] = useState<{name: string; url: string} | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [splitMode, setSplitMode] = useState<SplitMode>('pages');
  const [extractMode, setExtractMode] = useState<ExtractMode>('all');
  const [pageRanges, setPageRanges] = useState<PageRange[]>([{ id: '1', from: 1, to: 1 }]);
  const [mergeRanges, setMergeRanges] = useState(false);
  const [pageSize, setPageSize] = useState(1);
  const [maxFileSize, setMaxFileSize] = useState(1);
  const [sizeUnit, setSizeUnit] = useState<'KB' | 'MB'>('MB');
  const { user, session, isLoading } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        setColorTheme(theme);
      } catch (error) {
        console.error('Error parsing saved theme:', error);
      }
    }
  }, []);

  const handleThemeChange = useCallback((newTheme: typeof defaultTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem('selectedTheme', JSON.stringify(newTheme));
  }, []);

  const addRange = useCallback(() => {
    const newRange: PageRange = {
      id: Date.now().toString(),
      from: 1,
      to: pdfFile?.pageCount || 1
    };
    setPageRanges(prev => [...prev, newRange]);
  }, [pdfFile?.pageCount]);

  const updateRange = useCallback((id: string, field: 'from' | 'to', value: number) => {
    setPageRanges(prev => prev.map(range => 
      range.id === id ? { ...range, [field]: value } : range
    ));
  }, []);

  const removeRange = useCallback((id: string) => {
    setPageRanges(prev => prev.filter(range => range.id !== id));
  }, []);

  // Subscribe to modified documents
  useModifiedDocsSubscription(user?.id, ({ filename, signedUrl }: { filename: string; signedUrl: string }) => {
    setDownload({ name: filename, url: signedUrl });
  });

  const handleFileSelect = useCallback(async (file: File) => {
    try {
      setIsProcessing(true);
      
      // Load PDF to get page count
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const pageCount = pdf.getPageCount();
      
      const pdfFileData: PdfFile = {
        id: crypto.randomUUID(),
        file,
        name: file.name,
        size: file.size,
        pageCount
      };
      
      setPdfFile(pdfFileData);
      
      // Initialize split pages (all selected by default)
      const pages: SplitPage[] = Array.from({ length: pageCount }, (_, i) => ({
        pageNumber: i + 1,
        selected: true
      }));
      setSplitPages(pages);
      
    } catch (error) {
      console.error('Error loading PDF:', error);
      alert('Failed to load PDF. Please make sure it\'s a valid PDF file.');
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const removeFile = useCallback(() => {
    setPdfFile(null);
    setSplitPages([]);
  }, []);

  const togglePageSelection = useCallback((pageNumber: number) => {
    setSplitPages(prev => prev.map(page => 
      page.pageNumber === pageNumber 
        ? { ...page, selected: !page.selected }
        : page
    ));
  }, []);

  const selectAllPages = useCallback(() => {
    setSplitPages(prev => prev.map(page => ({ ...page, selected: true })));
  }, []);

  const selectNoPages = useCallback(() => {
    setSplitPages(prev => prev.map(page => ({ ...page, selected: false })));
  }, []);

  const uploadSplitPdfToSupabase = useCallback(async (pdfBytes: Uint8Array, originalFilename: string, pageNumbers: number[]) => {
    try {
      if (!user || !session) {
        alert('You must be logged in to upload files. Please log in and try again.');
        return null;
      }

      // Create FormData for binary file upload
      const formData = new FormData();
      const splitFileName = `split-${originalFilename.replace('.pdf', '')}-pages-${pageNumbers.join('-')}-${Date.now()}.pdf`;
      const pdfBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      formData.append('pdfFile', pdfBlob, splitFileName);
      formData.append('userId', user.id);
      formData.append('originalFilenames', JSON.stringify([originalFilename]));
      formData.append('processingType', 'pdf_split');

      console.log('📤 Uploading split PDF via API...');

      // Use the API route for upload
      const response = await fetch('/api/upload-split-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API response not ok:', response.status, errorText);
        alert(`Upload failed: Server returned ${response.status}`);
        return null;
      }

      const result = await response.json();

      if (!result.success) {
        console.error('❌ API upload failed:', result.error);
        alert(`Upload failed: ${result.error}`);
        return null;
      }

      console.log('✅ File uploaded successfully via API');

      // Generate a signed URL for immediate download access
      const supabase = createClient();
      await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      });

      const { data: signedData, error: signedError } = await supabase.storage
        .from('modified-files')
        .createSignedUrl(result.storagePath, 60 * 60); // 1 hour expiry

      if (signedError) {
        console.error('❌ Signed URL generation failed:', signedError.message);
        alert(`File uploaded but signed URL creation failed: ${signedError.message}`);
        return null;
      }

      console.log('✅ Split PDF uploaded successfully with signed URL');
      return { uploadPath: result.storagePath, signedUrl: signedData?.signedUrl };
    } catch (error) {
      console.error('Error uploading split PDF:', error);
      alert(`An unexpected error occurred during upload: ${error instanceof Error ? error.message : String(error)}`);
      return null;
    }
  }, [user, session]);

  const splitPdf = useCallback(async () => {
    if (!pdfFile || splitPages.length === 0 || !user?.id) return;
    
    const selectedPages = splitPages.filter(page => page.selected);
    if (selectedPages.length === 0) {
      alert('Please select at least one page to split.');
      return;
    }

    setIsProcessing(true);
    
    try {
      console.log('Starting PDF split process...');
      
      // Load the original PDF
      const arrayBuffer = await pdfFile.file.arrayBuffer();
      const originalPdf = await PDFDocument.load(arrayBuffer);
      
      // Create a new PDF with selected pages
      const splitPdf = await PDFDocument.create();
      
      // Copy selected pages
      for (const page of selectedPages) {
        const [copiedPage] = await splitPdf.copyPages(originalPdf, [page.pageNumber - 1]);
        splitPdf.addPage(copiedPage);
      }
      
      // Generate the split PDF bytes
      const pdfBytes = await splitPdf.save();
      
      console.log('PDF split completed, uploading to storage...');
      
      // Upload split PDF to Supabase
      const uploadResult = await uploadSplitPdfToSupabase(
        pdfBytes, 
        pdfFile.name, 
        selectedPages.map(p => p.pageNumber)
      );
      
      if (!uploadResult) {
        throw new Error('Failed to upload split PDF');
      }
      
      console.log('Upload successful:', uploadResult);
      
      // Set download immediately with signed URL for instant access
      if (uploadResult.signedUrl) {
        const splitFileName = `split-${pdfFile.name.replace('.pdf', '')}-pages-${selectedPages.map(p => p.pageNumber).join('-')}.pdf`;
        setDownload({
          name: splitFileName,
          url: uploadResult.signedUrl
        });
      }
      
      // Clear file after successful split
      setPdfFile(null);
      setSplitPages([]);
      
    } catch (error) {
      console.error('Error splitting PDF:', error);
      alert(`Failed to split PDF: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsProcessing(false);
    }
  }, [pdfFile, splitPages, user?.id, uploadSplitPdfToSupabase]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const pdfFile = droppedFiles.find(file => file.type === 'application/pdf');
    
    if (pdfFile) {
      handleFileSelect(pdfFile);
    } else {
      alert('Please drop a PDF file.');
    }
  }, [handleFileSelect]);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      handleFileSelect(file);
    } else {
      alert('Please select a PDF file.');
    }
  }, [handleFileSelect]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SaucyLoader currentTheme={colorTheme} />
      </div>
    );
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => router.push('/dashboard')}
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-600" />
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">PDF Splitter</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Suspense fallback={<div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>}>
              <ThemeToggle />
            </Suspense>
            <Suspense fallback={<div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>}>
              <ThemeCustomizer onThemeChangeAction={handleThemeChange} currentTheme={colorTheme} />
            </Suspense>
            <Suspense fallback={<div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>}>
              <UserAvatar />
            </Suspense>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* Upload Section */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Split Your PDF</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Upload a PDF file and select which pages you want to extract into a new document
            </p>
          </div>

          {!pdfFile && (
            <motion.div
              className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-12 cursor-pointer hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              style={{
                borderColor: `${colorTheme.primary}40`,
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={triggerFileInput}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-4">
                <div>
                  <Scissors 
                    className="w-16 h-16 mx-auto" 
                    style={{ color: colorTheme.primary }}
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">
                    Drop your PDF file here or click to browse
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Supports PDF files up to 50MB
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </motion.div>

        {/* PDF Preview and Page Selection */}
        {pdfFile && (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Split Mode Tabs */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-medium mb-4 text-slate-800 dark:text-white">Split Options</h3>
              
              {/* Mode Tabs */}
              <div className="border-b border-slate-200 dark:border-slate-600 mb-4">
                <nav className="-mb-px flex space-x-8">
                  {[
                    { mode: 'range' as SplitMode, label: 'Range', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
                    { mode: 'pages' as SplitMode, label: 'Pages', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                    { mode: 'size' as SplitMode, label: 'Size', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z' }
                  ].map(({ mode, label, icon }) => (
                    <button
                      key={mode}
                      onClick={() => setSplitMode(mode)}
                      className={`${
                        splitMode === mode
                          ? 'text-slate-900 dark:text-white'
                          : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                      } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                      style={{
                        borderBottomColor: splitMode === mode ? colorTheme.primary : 'transparent'
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                      <span>{label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Extract Mode Toggle */}
              <div className="flex items-center justify-between p-4 bg-slate-100/50 dark:bg-slate-700/30 rounded-lg mb-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white">Extract Mode</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Choose how to handle the extracted pages</p>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="extractMode"
                      value="all"
                      checked={extractMode === 'all'}
                      onChange={(e) => setExtractMode(e.target.value as ExtractMode)}
                      className="h-4 w-4 border-slate-300 dark:border-slate-600 focus:ring-2"
                      style={{ 
                        color: colorTheme.primary,
                        '--tw-ring-color': `${colorTheme.primary}50`
                      } as React.CSSProperties}
                    />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Extract All</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="extractMode"
                      value="select"
                      checked={extractMode === 'select'}
                      onChange={(e) => setExtractMode(e.target.value as ExtractMode)}
                      className="h-4 w-4 border-slate-300 dark:border-slate-600 focus:ring-2"
                      style={{ 
                        color: colorTheme.primary,
                        '--tw-ring-color': `${colorTheme.primary}50`
                      } as React.CSSProperties}
                    />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Select Pages</span>
                  </label>
                </div>
              </div>

              {/* Range Mode Controls */}
              {splitMode === 'range' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">Page Ranges</h4>
                    <button
                      onClick={addRange}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded transition-colors"
                      style={{
                        color: colorTheme.primary,
                        backgroundColor: `${colorTheme.primary}15`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${colorTheme.primary}25`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${colorTheme.primary}15`;
                      }}
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add Range
                    </button>
                  </div>
                  
                  {pageRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-3 p-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-800/50">
                      <div className="flex items-center space-x-2">
                        <label className="text-sm text-slate-600 dark:text-slate-400">From:</label>
                        <input
                          type="number"
                          min="1"
                          max={pdfFile?.pageCount || 1}
                          value={range.from}
                          onChange={(e) => updateRange(range.id, 'from', parseInt(e.target.value) || 1)}
                          onFocus={(e) => e.target.select()}
                          className="w-16 px-2 py-1 border border-slate-200 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-opacity-50"
                          style={{ '--tw-ring-color': `${colorTheme.primary}50` } as React.CSSProperties}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <label className="text-sm text-slate-600 dark:text-slate-400">To:</label>
                        <input
                          type="number"
                          min="1"
                          max={pdfFile?.pageCount || 1}
                          value={range.to}
                          onChange={(e) => updateRange(range.id, 'to', parseInt(e.target.value) || 1)}
                          onFocus={(e) => e.target.select()}
                          className="w-16 px-2 py-1 border border-slate-200 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-opacity-50"
                          style={{ '--tw-ring-color': `${colorTheme.primary}50` } as React.CSSProperties}
                        />
                      </div>
                      <button
                        onClick={() => removeRange(range.id)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={mergeRanges}
                      onChange={(e) => setMergeRanges(e.target.checked)}
                      className="h-4 w-4 border-slate-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-opacity-50"
                      style={{ 
                        color: colorTheme.primary,
                        '--tw-ring-color': `${colorTheme.primary}50`
                      } as React.CSSProperties}
                    />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Merge all ranges into one file</span>
                  </label>
                </div>
              )}

              {/* Pages Mode Controls */}
              {splitMode === 'pages' && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Split every:</label>
                    <input
                      type="number"
                      min="1"
                      value={pageSize}
                      onChange={(e) => setPageSize(parseInt(e.target.value) || 1)}
                      className="w-20 px-3 py-1 border border-slate-200 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-opacity-50"
                      style={{ '--tw-ring-color': `${colorTheme.primary}50` } as React.CSSProperties}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">pages</span>
                  </div>
                </div>
              )}

              {/* Size Mode Controls */}
              {splitMode === 'size' && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Max file size:</label>
                    <input
                      type="number"
                      min="1"
                      value={maxFileSize}
                      onChange={(e) => setMaxFileSize(parseInt(e.target.value) || 1)}
                      className="w-20 px-3 py-1 border border-slate-200 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-opacity-50"
                      style={{ '--tw-ring-color': `${colorTheme.primary}50` } as React.CSSProperties}
                    />
                    <select
                      value={sizeUnit}
                      onChange={(e) => setSizeUnit(e.target.value as 'KB' | 'MB')}
                      className="px-3 py-1 border border-slate-200 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-opacity-50"
                      style={{ '--tw-ring-color': `${colorTheme.primary}50` } as React.CSSProperties}
                    >
                      <option value="KB">KB</option>
                      <option value="MB">MB</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <PDFPreview 
                    file={pdfFile.file}
                    width={80}
                    height={100}
                    className="border-2 border-slate-200 dark:border-slate-600 rounded"
                  />
                  <button
                    onClick={removeFile}
                    className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{pdfFile.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {pdfFile.pageCount} pages • {Math.round(pdfFile.size / 1024)}KB
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  onClick={selectAllPages}
                  variant="outline"
                  className="text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Select All
                </Button>
                <Button
                  onClick={selectNoPages}
                  variant="outline"
                  className="text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Select None
                </Button>
              </div>
            </div>

            {/* Page Selection Grid */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h4 className="text-lg font-medium mb-4 text-slate-800 dark:text-white">
                Select pages to extract ({splitPages.filter(p => p.selected).length} selected)
              </h4>
              
              <div className="grid grid-cols-auto-fit-120 gap-4">
                {splitPages.map((page) => (
                  <motion.div
                    key={page.pageNumber}
                    className={`relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      page.selected 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50'
                    }`}
                    onClick={() => togglePageSelection(page.pageNumber)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <FileText 
                        className={`w-8 h-8 mx-auto mb-2 ${
                          page.selected ? 'text-blue-500' : 'text-slate-400'
                        }`}
                      />
                      <p className={`text-sm font-medium ${
                        page.selected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
                      }`}>
                        Page {page.pageNumber}
                      </p>
                    </div>
                    
                    {page.selected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Split Button */}
            <div className="text-center">
              <Button
                onClick={splitPdf}
                disabled={splitPages.filter(p => p.selected).length === 0 || isProcessing || !user?.id}
                className="px-8 py-3 text-white font-medium"
                style={{
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  opacity: (splitPages.filter(p => p.selected).length === 0 || !user?.id) ? 0.5 : 1
                }}
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Scissors className="w-5 h-5 mr-2" />
                    Split PDF ({splitPages.filter(p => p.selected).length} pages)
                  </>
                )}
              </Button>

              {splitPages.filter(p => p.selected).length === 0 && (
                <p className="text-xs text-slate-500 mt-2">
                  Select at least one page to split
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Download Popup */}
      {download && (
        <Suspense fallback={null}>
          <DownloadPopup
            fileName={download.name}
            fileUrl={download.url}
            isOpen={true}
            onCloseAction={() => setDownload(null)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default function PDFSplitterPage() {
  return <App />;
}
