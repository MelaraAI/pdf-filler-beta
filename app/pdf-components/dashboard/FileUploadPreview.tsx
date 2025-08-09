import { useRef, useState } from 'react';
//import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { PDFUploader } from '../PDFUploader';
import { SimplePDFViewer } from '../SimplePDFViewer';

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

export interface FileUploadPreviewProps {
  onPdfLoad?: (file: File) => void;
  onPdfUpload?: () => void; // Called specifically when a file is uploaded, not selected
  onFieldsExtracted?: (fields: FormField[]) => void;
  filledFields?: FormField[];
  colorTheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function FileUploadPreview({ onPdfLoad, onPdfUpload, onFieldsExtracted, filledFields, colorTheme }: FileUploadPreviewProps = {}) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfError, setPdfError] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const extractFormFields = async (file: File): Promise<FormField[]> => {
    try {
      const { PDFDocument } = await import('pdf-lib');
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const form = pdfDoc.getForm();
      const fields = form.getFields();

      // Also extract text content to find field labels
      const textContent: { text: string; x: number; y: number }[] = [];
      try {
        // Use pdfjs-dist to extract text content and positions
        const pdfjsLib = await import('pdfjs-dist');
        const loadingTask = pdfjsLib.getDocument({ data: bytes });
        const pdfDocument = await loadingTask.promise;
        
        for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
          const page = await pdfDocument.getPage(pageNum);
          const textContentObj = await page.getTextContent();
          
          textContentObj.items.forEach((item: unknown) => {
            const textItem = item as { str?: string; transform?: number[] };
            if (textItem.str && textItem.str.trim() && textItem.transform) {
              textContent.push({
                text: textItem.str.trim(),
                x: textItem.transform[4],
                y: textItem.transform[5]
              });
            }
          });
        }
      } catch (error) {
        console.warn('Could not extract text content for field labeling:', error);
      }

      return fields.map((field, index) => {
        const name = field.getName();
        const fieldType = field.constructor.name;
        
        // Get field position if available
        let fieldX = 0;
        let fieldY = 0;
        let fieldWidth = 150;
        let fieldHeight = 20;
        
        try {
          const acroField = (field as unknown as { 
            acroField?: { 
              getWidgets?: () => { 
                getRectangle?: () => { x: number; y: number; width: number; height: number } 
              }[] 
            } 
          }).acroField;
          const rect = acroField?.getWidgets?.()?.[0]?.getRectangle?.();
          if (rect) {
            fieldX = rect.x;
            fieldY = rect.y;
            fieldWidth = rect.width;
            fieldHeight = rect.height;
          }
        } catch (error) {
          console.warn(`Could not get position for field ${name}:`, error);
        }
        
        // Try to find nearby text that could be a label
        let displayName = name;
        let bestLabel = '';
        let closestDistance = Infinity;
        const nearbyLabels: { text: string; distance: number }[] = [];
        
        // Look for text near this field
        textContent.forEach(textItem => {
          const distance = Math.sqrt(
            Math.pow(textItem.x - fieldX, 2) + Math.pow(textItem.y - fieldY, 2)
          );
          
          // Check if this text looks like a field label (not too far away)
          if (distance < 200 && textItem.text.length > 2 && textItem.text.length < 50) {
            const text = textItem.text.trim();
            
            // Skip common non-label text
            if (!/^(yes|no|x|check|•|\d+|$)$/i.test(text) && 
                !text.includes('_') &&
                !/^\d+$/.test(text)) {
              
              nearbyLabels.push({ text, distance });
              
              // Prefer text that ends with colon or looks like a label
              const isLikelyLabel = text.endsWith(':') || 
                                  text.includes('Name') || 
                                  text.includes('Address') ||
                                  text.includes('Date') ||
                                  text.includes('Phone') ||
                                  text.includes('Email') ||
                                  text.includes('Number') ||
                                  text.includes('Effective') ||
                                  text.includes('Insured') ||
                                  text.includes('Contact') ||
                                  text.includes('Company') ||
                                  text.includes('Physical') ||
                                  text.includes('Primary') ||
                                  text.includes('Producer') ||
                                  text.includes('Agency') ||
                                  text.includes('Network') ||
                                  text.includes('Broker') ||
                                  text.includes('Client') ||
                                  text.includes('Website') ||
                                  text.includes('Information') ||
                                  /^[A-Z][a-z\s]+/.test(text);
              
              if (isLikelyLabel && distance < closestDistance) {
                closestDistance = distance;
                bestLabel = text.replace(/:$/, '').trim();
              }
            }
          }
        });
        
        // Debug logging for field mapping
        console.log('=== PDF FIELD MAPPING DEBUG ===');
        console.log(`Field Name: "${name}"`);
        console.log(`Field Type: ${fieldType}`);
        console.log(`Field Position: x=${fieldX}, y=${fieldY}`);
        console.log(`Best Label Found: "${bestLabel}" (distance: ${closestDistance})`);
        console.log('Nearby Labels:', nearbyLabels.sort((a, b) => a.distance - b.distance).slice(0, 5));
        console.log('===============================');
        
        // Use the found label if it's good, otherwise fall back to mapping
        if (bestLabel && bestLabel.length > 2) {
          displayName = bestLabel;
        } else {
          // Clean up common field naming patterns
          if (name) {
            // Common field name mappings
            const fieldMappings: { [key: string]: string } = {
              'fname': 'First Name',
              'lname': 'Last Name',
              'fullname': 'Full Name',
              'email': 'Email Address',
              'phone': 'Phone Number',
              'address': 'Address',
              'city': 'City',
              'state': 'State',
              'zip': 'ZIP Code',
              'zipcode': 'ZIP Code',
              'dob': 'Date of Birth',
              'ssn': 'Social Security Number',
              'employer': 'Employer',
              'occupation': 'Occupation',
              'signature': 'Signature',
              'date': 'Date',
              'amount': 'Amount',
              'total': 'Total',
              'tax': 'Tax',
              'income': 'Income',
              'expense': 'Expense',
              'notes': 'Notes',
              'comments': 'Comments',
              'description': 'Description',
              'insured': 'Named Insured',
              'effective': 'Requested Effective Date',
              'producer': 'Producer Name',
              'agency': 'Agency Name',
              'network': 'Agency Network Affiliations',
              'broker': 'Broker Information',
              'client': 'Client Information',
              'contact': 'Primary Contact Name',
              'website': 'Company Website'
            };
            
            // Check for exact matches first
            const lowerName = name.toLowerCase();
            if (fieldMappings[lowerName]) {
              displayName = fieldMappings[lowerName];
            } else {
              // Remove common prefixes and suffixes
              displayName = name
                .replace(/^(field|text|input|form)_?/i, '')
                .replace(/_?(field|input|text)$/i, '')
                // Convert camelCase to readable text
                .replace(/([A-Z])/g, ' $1')
                // Convert snake_case to readable text  
                .replace(/_/g, ' ')
                // Convert dots to spaces
                .replace(/\./g, ' ')
                // Capitalize first letter of each word
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')
                .trim();
                
              // Handle common field patterns
              if (displayName.toLowerCase().includes('date') && displayName.toLowerCase().includes('sign')) {
                displayName = 'Signature Date';
              } else if (displayName.toLowerCase().includes('name') && displayName.toLowerCase().includes('sign')) {
                displayName = 'Signature Name';
              } else if (displayName.toLowerCase().includes('sign')) {
                displayName = 'Signature';
              } else if (/text\d+/i.test(name)) {
                // For generic text fields, try to infer purpose from position or create a generic name
                displayName = `Text Field ${index + 1}`;
              }
            }
          }
        }
        
        // Fallback to a generic name if we couldn't extract anything meaningful
        if (!displayName || displayName.trim() === '') {
          displayName = `Field ${index + 1}`;
        }
        
        // Create and log final mapping
        let finalMapping = {
          pdfFieldName: name,
          displayName: displayName,
          bestLabel: bestLabel,
          fieldType: fieldType,
          coordinates: { x: fieldX, y: fieldY },
          hardcoded: false,
          smartMapped: false
        };
        
        // Enhanced logic to connect text labels to fields
        if (bestLabel) {
          // Check if this looks like "Named Insured" field
          if (bestLabel.toLowerCase().includes('named') && bestLabel.toLowerCase().includes('insured')) {
            console.log('🎯 SMART MAPPING FOUND:');
            console.log(`PDF Field: "${name}" maps to Display Name: "Named Insured"`);
            console.log(`Based on nearby text: "${bestLabel}"`);
            console.log('This means when user types "Named Insured: Vincent Melara", it should fill this field');
            displayName = 'Named Insured';
            finalMapping = {
              ...finalMapping,
              displayName: 'Named Insured',
              smartMapped: true
            };
          }
          // Check for other common field patterns
          else if (bestLabel.toLowerCase().includes('effective') && bestLabel.toLowerCase().includes('date')) {
            displayName = 'Requested Effective Date';
            finalMapping = { ...finalMapping, displayName: 'Requested Effective Date', smartMapped: true };
          }
          else if (bestLabel.toLowerCase().includes('company') && bestLabel.toLowerCase().includes('phone')) {
            displayName = 'Company Phone';
            finalMapping = { ...finalMapping, displayName: 'Company Phone', smartMapped: true };
          }
          else if (bestLabel.toLowerCase().includes('physical') && bestLabel.toLowerCase().includes('address')) {
            displayName = 'Physical U.S. Address';
            finalMapping = { ...finalMapping, displayName: 'Physical U.S. Address', smartMapped: true };
          }
          else if (bestLabel.toLowerCase().includes('primary') && bestLabel.toLowerCase().includes('contact')) {
            displayName = 'Primary Contact Name';
            finalMapping = { ...finalMapping, displayName: 'Primary Contact Name', smartMapped: true };
          }
        }
        
        console.log('🔗 FINAL FIELD MAPPING:', finalMapping);
        
        // Store mapping globally for debugging
        const globalWindow = window as unknown as { pdfFieldMappings?: typeof finalMapping[] };
        if (!globalWindow.pdfFieldMappings) {
          globalWindow.pdfFieldMappings = [];
        }
        globalWindow.pdfFieldMappings.push(finalMapping);
        
        let type: FormField['type'] = 'text';
        let value: FormField['value'] = '';
        let options: string[] | undefined;

        try {
          if (fieldType.includes('TextField')) {
            type = 'text';
            value = (field as unknown as { getText?: () => string }).getText?.() || '';
          } else if (fieldType.includes('CheckBox')) {
            type = 'checkbox';
            value = (field as unknown as { isChecked?: () => boolean }).isChecked?.() || false;
          } else if (fieldType.includes('RadioGroup')) {
            type = 'radio';
            const radioField = field as unknown as { 
              getOptions?: () => string[];
              getSelected?: () => string;
            };
            options = radioField.getOptions?.() || [];
            value = radioField.getSelected?.() || '';
          } else if (fieldType.includes('Dropdown')) {
            type = 'dropdown';
            const dropdownField = field as unknown as {
              getOptions?: () => string[];
              getSelected?: () => string[];
            };
            options = dropdownField.getOptions?.() || [];
            value = dropdownField.getSelected?.() || [];
          }
        } catch (error) {
          console.warn(`Error processing field ${name}:`, error);
        }

        return {
          id: `field_${index}`,
          name: displayName,
          value,
          type,
          options,
          x: fieldX,
          y: fieldY,
          width: fieldWidth,
          height: fieldHeight,
        };
      });
    } catch (error) {
      console.error('Error extracting form fields:', error);
      return [];
    }
  };

  const handleUpload = async (file: File) => {
    setPdfFile(file);
    setPdfError('');
    
    // Clear previous mappings
    const globalWindow = window as unknown as { pdfFieldMappings?: unknown[] };
    globalWindow.pdfFieldMappings = [];
    
    if (onPdfLoad) {
      onPdfLoad(file);
    }
    
    // Call the upload callback to refresh the dropdown
    if (onPdfUpload) {
      onPdfUpload();
    }
    
    // Extract form fields
    const extractedFields = await extractFormFields(file);
    
    // Log complete mapping summary
    console.log('📋 COMPLETE PDF FIELD MAPPING SUMMARY:');
    console.table(globalWindow.pdfFieldMappings);
    
    if (onFieldsExtracted) {
      onFieldsExtracted(extractedFields);
    }
  };

  return (
    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden flex flex-col h-full w-full">
      <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 dark:from-slate-800/20 dark:to-slate-800/10 border-b border-white/20 dark:border-slate-700/30 flex-shrink-0">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
          <FileText 
            className="w-5 h-5 mr-2" 
            style={{ color: colorTheme?.accent || '#6b7280' }}
          />
          Document Preview
        </h2>
      </div>

      <div className="flex-1 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 flex items-center justify-center p-4 relative overflow-hidden" ref={containerRef}>
        {!pdfFile ? (
          <PDFUploader onUpload={handleUpload} colorTheme={colorTheme} />
        ) : pdfError ? (
          <div className="text-center text-red-600 dark:text-red-400">
            <p className="font-semibold">PDF Error</p>
            <p>{pdfError}</p>
            <button
              onClick={() => {
                setPdfFile(null);
                setPdfError('');
              }}
              className="mt-4 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: colorTheme?.primary || '#3b82f6',
                color: 'white'
              }}
            >
              Try Another File
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <SimplePDFViewer
              file={pdfFile}
              filledFields={filledFields}
              onLoadSuccess={() => {}}
              onLoadError={(error) => {
                console.error('PDF load error:', error);
                setPdfError('Failed to load PDF file. Please try a different file.');
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
