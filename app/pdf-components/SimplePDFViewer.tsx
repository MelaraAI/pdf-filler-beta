import { useEffect, useState } from 'react';

export interface FormField {
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

interface SimplePDFViewerProps {
  file: File;
  filledFields?: FormField[];
  onLoadSuccess?: () => void;
  onLoadError?: (error: Error) => void;
}

export const SimplePDFViewer = ({ 
  file, 
  filledFields,
  onLoadSuccess, 
  onLoadError 
}: SimplePDFViewerProps) => {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const generateFilledPDF = async (originalFile: File, fields?: FormField[]): Promise<string> => {
    try {
      // If no fields to fill, just return the original PDF
      if (!fields || fields.length === 0 || fields.every(f => !f.value || f.value === '')) {
        return URL.createObjectURL(originalFile);
      }

      const { PDFDocument } = await import('pdf-lib');
      const bytes = await originalFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const form = pdfDoc.getForm();

      // Fill the form fields
      fields.forEach(field => {
        if (field.value !== '' && field.value !== false) {
          try {
            const fieldName = field.name;
            const pdfField = form.getFields().find(f => {
              const name = f.getName();
              const normalizedFieldName = fieldName.toLowerCase().replace(/[^\w\s]/g, '');
              const normalizedPdfName = name.toLowerCase().replace(/[^\w\s]/g, '');
              
              // Exact match
              if (normalizedFieldName === normalizedPdfName) return true;
              
              // Contains match
              if (normalizedFieldName.includes(normalizedPdfName) || 
                  normalizedPdfName.includes(normalizedFieldName)) return true;
              
              // Word-based fuzzy matching
              const fieldWords = normalizedFieldName.split(/\s+/);
              const pdfWords = normalizedPdfName.split(/\s+/);
              
              const matchingWords = fieldWords.filter(fieldWord => 
                pdfWords.some(pdfWord => 
                  fieldWord.includes(pdfWord) || pdfWord.includes(fieldWord)
                )
              );
              
              return matchingWords.length >= Math.min(fieldWords.length, pdfWords.length) * 0.6;
            });

            if (pdfField) {
              const fieldType = pdfField.constructor.name;
              
              if (fieldType.includes('TextField')) {
                const textField = pdfField as unknown as { setText: (text: string) => void };
                textField.setText(String(field.value));
              } else if (fieldType.includes('CheckBox') && typeof field.value === 'boolean') {
                const checkBox = pdfField as unknown as { check: () => void; uncheck: () => void };
                if (field.value) {
                  checkBox.check();
                } else {
                  checkBox.uncheck();
                }
              } else if (fieldType.includes('RadioGroup')) {
                const radioGroup = pdfField as unknown as { select: (option: string) => void };
                radioGroup.select(String(field.value));
              } else if (fieldType.includes('Dropdown')) {
                const dropdown = pdfField as unknown as { select: (option: string) => void };
                const value = Array.isArray(field.value) ? field.value[0] : String(field.value);
                dropdown.select(value);
              }
            }
          } catch (error) {
            console.warn(`Error filling field ${field.name}:`, error);
          }
        }
      });

      const filledBytes = await pdfDoc.save();
      const blob = new Blob([filledBytes], { type: 'application/pdf' });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error generating filled PDF:', error);
      // Fallback to original PDF
      return URL.createObjectURL(originalFile);
    }
  };

  useEffect(() => {
    if (!file) return;

    const loadPDF = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        // Generate PDF with filled fields
        const url = await generateFilledPDF(file, filledFields);
        setPdfUrl(prev => {
          // Clean up previous URL
          if (prev) {
            URL.revokeObjectURL(prev);
          }
          return url;
        });
        
        setIsLoading(false);
        onLoadSuccess?.();
      } catch (err) {
        const error = err as Error;
        setError(error.message);
        setIsLoading(false);
        onLoadError?.(error);
      }
    };

    loadPDF();

    // Cleanup function
    return () => {
      // Don't revoke URL here as it might still be in use
      // URL cleanup is handled in setPdfUrl
    };
  }, [file, filledFields]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96 bg-slate-50 rounded-lg">
        <div className="text-slate-600">Loading PDF...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 bg-red-50 rounded-lg">
        <div className="text-red-600">Error loading PDF: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-slate-200 min-h-[450px]">
      <iframe
        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0`}
        width="100%"
        height="100%"
        style={{ border: 'none', minHeight: '450px' }}
        title="PDF Preview"
      />
    </div>
  );
};
