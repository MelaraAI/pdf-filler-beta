'use client';

import React, { useState, useCallback, useRef, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, Plus, X, Merge } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import SaucyLoader from '../components/SaucyLoader';
import { Button } from '@/components/ui/button';
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
}

function App() {
  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [colorTheme, setColorTheme] = useState(defaultTheme);
  const [download, setDownload] = useState<{name: string; url: string} | null>(null);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<{ index: number; position: 'before' | 'after' } | null>(null);
  const { signOut, user, session, isLoading } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragStart = useCallback((id: string) => {
    setDraggedItem(id);
  }, []);

  const handleCardDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!draggedItem) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX;
    const middle = rect.left + rect.width / 2;
    
    const position = clientX < middle ? 'before' : 'after';
    setDropPosition({ index, position });
  }, [draggedItem]);

  const handleCardDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedItem || !dropPosition) return;

    const draggedIndex = pdfFiles.findIndex(file => file.id === draggedItem);
    let finalDropIndex = dropPosition.index;
    
    if (dropPosition.position === 'after') {
      finalDropIndex += 1;
    }
    
    if (draggedIndex < finalDropIndex) {
      finalDropIndex -= 1;
    }

    if (draggedIndex === finalDropIndex) {
      setDraggedItem(null);
      setDropPosition(null);
      return;
    }

    const newFiles = [...pdfFiles];
    const [removed] = newFiles.splice(draggedIndex, 1);
    newFiles.splice(finalDropIndex, 0, removed);
    setPdfFiles(newFiles);
    
    setDraggedItem(null);
    setDropPosition(null);
  }, [draggedItem, pdfFiles, dropPosition]);

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
    setDropPosition(null);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("colorTheme")
    if (saved) {
      try {
        setColorTheme(JSON.parse(saved))
      } catch {
        setColorTheme(defaultTheme)
      }
    }
  }, [])

  const handleThemeChange = useCallback((newTheme: typeof defaultTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem("colorTheme", JSON.stringify(newTheme));
  }, []);

  // Stable callback for subscription
  const handleNewFile = useCallback(({ filename, signedUrl }: { filename: string; signedUrl: string }) => {
    setDownload({ name: filename, url: signedUrl });
  }, []);

  // Subscribe to modified documents
  useModifiedDocsSubscription(user?.id, handleNewFile);

  const handleLogout = useCallback(async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch {
      console.error('Logout failed');
    }
  }, [signOut]);

  const handleGoHome = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  const handleFileUpload = useCallback((files: FileList) => {
    const pdfFiles = Array.from(files).filter(file => file.type === 'application/pdf');
    
    const newFiles: PdfFile[] = pdfFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      size: file.size
    }));

    setPdfFiles(prev => [...prev, ...newFiles]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const removeFile = useCallback((id: string) => {
    setPdfFiles(prev => prev.filter(file => file.id !== id));
  }, []);

  const uploadMergedPdfToSupabase = useCallback(async (pdfBytes: Uint8Array, originalFilenames: string[]) => {
    try {
      if (!user || !session) {
        alert('You must be logged in to upload files. Please log in and try again.');
        return null;
      }

      // Create FormData for binary file upload
      const formData = new FormData();
      const mergedFileName = `merged-${Date.now()}.pdf`;
      const pdfBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      formData.append('pdfFile', pdfBlob, mergedFileName);
      formData.append('userId', user.id);
      formData.append('originalFilenames', JSON.stringify(originalFilenames));

      console.log('📤 Uploading merged PDF via API...');

      // Use the API route for upload (which has service role permissions)
      const response = await fetch('/api/upload-merged-pdf', {
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

      console.log('✅ Merged PDF uploaded successfully with signed URL');
      return { uploadPath: result.storagePath, signedUrl: signedData?.signedUrl };
    } catch (error) {
      console.error('Error uploading merged PDF:', error);
      alert(`An unexpected error occurred during upload: ${error instanceof Error ? error.message : String(error)}`);
      return null;
    }
  }, [user, session]);

  const mergePdfs = useCallback(async () => {
    if (pdfFiles.length < 2 || !user?.id) return;
    
    setIsUploading(true);
    
    try {
      console.log('Starting PDF merge process...');
      
      // Create a new PDF document
      const mergedPdf = await PDFDocument.create();
      
      // Process each PDF file
      for (const pdfFile of pdfFiles) {
        const arrayBuffer = await pdfFile.file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      
      // Generate the merged PDF
      const pdfBytes = await mergedPdf.save();
      
      console.log('PDF merge completed, uploading to storage...');
      
      // Upload merged PDF to Supabase
      const uploadResult = await uploadMergedPdfToSupabase(pdfBytes, pdfFiles.map(f => f.name));
      
      if (!uploadResult) {
        throw new Error('Failed to upload merged PDF');
      }
      
      console.log('Upload successful:', uploadResult);
      
      // Set download immediately with signed URL for instant access
      if (uploadResult.signedUrl) {
        const mergedFileName = `merged-${Date.now()}.pdf`;
        setDownload({
          name: mergedFileName,
          url: uploadResult.signedUrl
        });
      }
      
      // Clear files after successful merge
      setPdfFiles([]);
      
    } catch (error) {
      console.error('Merge failed:', error);
      alert('PDF merge failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [pdfFiles, user?.id, uploadMergedPdfToSupabase]);

  if (isLoading) {
    return (
      <SaucyLoader 
        currentTheme={colorTheme}
        isLoading={isLoading}
        size="md"
        message="Loading PDF Merger"
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleGoHome}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${colorTheme.primary}20`,
                color: colorTheme.primary,
                border: `1px solid ${colorTheme.primary}30`
              }}
              title="Dashboard"
            >
              <Home className="w-5 h-5" />
            </button>
            <div
              className="flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-lg"
              style={{
                background: `linear-gradient(135deg, ${colorTheme.primary}20, ${colorTheme.secondary}20)`,
                borderColor: `${colorTheme.primary}30`,
              }}
            >
              <FileText className="w-6 h-6" style={{ color: colorTheme.primary }} />
              <div>
                <h1 className="text-xl font-semibold">PDF Merger</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Combine multiple PDFs into one document
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Suspense fallback={null}>
              <ThemeToggle />
            </Suspense>
            <Suspense fallback={null}>
              <UserAvatar colorTheme={colorTheme} onLogout={handleLogout} />
            </Suspense>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 space-y-8 min-h-[calc(100vh-200px)]">
        {/* File Upload Section - Full Width */}
        <div className="w-full">
          <div
            className="border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 hover:border-opacity-80 cursor-pointer"
            style={{
              borderColor: `${colorTheme.primary}40`,
              backgroundColor: `${colorTheme.primary}05`
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <Plus className="w-16 h-16 mx-auto mb-6" style={{ color: colorTheme.primary }} />
            <h3 className="text-xl font-semibold mb-3">Upload PDF Files</h3>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              Drag & drop PDF files here, or click to browse
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span>• Local Files</span>
              <span>• Google Drive</span>
              <span>• Dropbox</span>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf"
            onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
            className="hidden"
          />
        </div>

        {/* PDF Preview & Merge Section */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/20 dark:border-slate-700/30 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Preview & Order ({pdfFiles.length} files)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Drag the documents to reorder them as they will appear in the merged PDF
              </p>
            </div>
            <div className="w-64">
              <label className="block text-sm font-medium mb-2">Output Filename</label>
              <input
                type="text"
                placeholder="merged-document.pdf"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50"
              />
            </div>
          </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4 mb-6 relative min-h-[200px] bg-slate-50 dark:bg-slate-700/20 rounded-lg p-6">
              {pdfFiles.length === 0 && (
                <div className="w-full text-center text-slate-500 py-8">
                  Upload PDF files to see them here for reordering
                </div>
              )}
              {pdfFiles.map((file, index) => (
                <React.Fragment key={`container-${file.id}`}>
                  <div className="relative flex items-center">
                    {/* Drop indicator before */}
                    {dropPosition?.index === index && dropPosition.position === 'before' && (
                      <div 
                        className="absolute -left-3 top-0 bottom-0 w-1 rounded-full z-20"
                        style={{ backgroundColor: colorTheme.primary }}
                      />
                    )}
                    
                    <div
                      className="relative flex-shrink-0 transition-all duration-200"
                      style={{ 
                        minWidth: '140px',
                        transform: draggedItem === file.id ? 'scale(1.05) rotate(5deg)' : 'none',
                        zIndex: draggedItem === file.id ? 50 : 1
                      }}
                      onDragOver={(e) => handleCardDragOver(e, index)}
                      onDrop={handleCardDrop}
                    >
                      <div
                        draggable
                        className="cursor-grab active:cursor-grabbing group"
                        onDragStart={() => handleDragStart(file.id)}
                        onDragEnd={handleDragEnd}
                      >
                        <button
                          onClick={() => removeFile(file.id)}
                          className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-3 h-3" />
                        </button>

                        <div 
                          className="absolute -top-2 -left-2 z-10 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: colorTheme.primary }}
                        >
                          {index + 1}
                        </div>

                        <div 
                          className={`w-32 h-40 rounded-lg border-2 transition-all duration-200 hover:shadow-lg group-hover:scale-105 ${
                            draggedItem === file.id ? 'opacity-70' : ''
                          }`}
                          style={{
                            borderColor: `${colorTheme.primary}40`,
                            backgroundColor: `${colorTheme.primary}10`,
                            position: 'relative',
                            zIndex: 1
                          }}
                        >
                          <div className="w-full h-32 flex items-center justify-center rounded-t-lg bg-white/20 overflow-hidden">
                            <PDFPreview 
                              file={file.file}
                              width={120}
                              height={120}
                              className="object-cover"
                            />
                          </div>

                          <div className="p-2 h-8">
                            <p 
                              className="text-xs font-medium truncate"
                              style={{ color: colorTheme.primary }}
                              title={file.name}
                            >
                              {file.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  {/* Drop indicator after */}
                  {dropPosition?.index === index && dropPosition.position === 'after' && (
                    <div 
                      className="absolute -right-3 top-0 bottom-0 w-1 rounded-full z-20"
                      style={{ backgroundColor: colorTheme.primary }}
                    />
                  )}
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={mergePdfs}
                disabled={pdfFiles.length < 2 || isUploading || !user?.id}
                className="px-8 py-3 text-white font-medium"
                style={{
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  opacity: (pdfFiles.length < 2 || !user?.id) ? 0.5 : 1
                }}
              >
                {isUploading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Merge className="w-5 h-5 mr-2" />
                    Merge {pdfFiles.length} PDFs
                  </>
                )}
              </Button>

              {pdfFiles.length < 2 && (
                <p className="text-xs text-slate-500 mt-2">
                  Upload at least 2 PDF files to merge
                </p>
              )}
            </div>
          </div>
        </div>

      {/* Theme customizer */}
      <ThemeCustomizer onThemeChangeAction={handleThemeChange} currentTheme={colorTheme} />
      
      {/* Download popup for merged PDF */}
      <Suspense fallback={null}>
        <DownloadPopup
          isOpen={!!download}
          onCloseAction={() => setDownload(null)}
          fileName={download?.name || ''}
          fileUrl={download?.url || ''}
          colorTheme={colorTheme}
        />
      </Suspense>
    </div>
  );
}

export default function ProtectedPdfMerger() {
  return <App />;
}
