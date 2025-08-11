// import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
// import { FileText, X } from 'lucide-react';
// import { PDFUploader } from '../PDFUploader';
// import { SimplePDFViewer } from '../SimplePDFViewer';

// export interface FileUploadPreviewProps {
//   onPdfLoad?: (file: File) => void;
//   colorTheme?: {
//     primary: string;
//     secondary: string;
//     accent: string;
//   };
// }

// export interface FileUploadPreviewRef {
//   loadFile: (file: File) => void;
// }

// export default forwardRef<FileUploadPreviewRef, FileUploadPreviewProps>(
//   function FileUploadPreview({ onPdfLoad, colorTheme }: FileUploadPreviewProps = {}, ref) {
//     const [pdfFile, setPdfFile] = useState<File | null>(null);

//     const handleUpload = async (file: File) => {
//       setPdfFile(file);
//       if (onPdfLoad) onPdfLoad(file);
//     };

//     // Allow parent to trigger a load
//     useImperativeHandle(ref, () => ({
//       loadFile: handleUpload
//     }));

//     return (
//       <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden flex flex-col h-full w-full">
//         {/* Header */}
//         <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 dark:from-slate-800/20 dark:to-slate-800/10 border-b border-white/20 dark:border-slate-700/30 flex items-center justify-between flex-shrink-0">
//           <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
//             <FileText
//               className="w-5 h-5 mr-2"
//               style={{ color: colorTheme?.accent || '#6b7280' }}
//             />
//             Document Preview
//           </h2>
//           {pdfFile && (
//             <div className="flex items-center gap-2">
//               <div className="text-sm text-slate-600 dark:text-slate-400 bg-white/30 dark:bg-slate-700/30 px-3 py-1 rounded-full">
//                 {pdfFile.name}
//               </div>
//               <button
//                 onClick={() => setPdfFile(null)}
//                 className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-1 rounded-full hover:bg-white/20 dark:hover:bg-slate-700/30"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Body */}
//         <div className="flex-1 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 flex items-center justify-center p-4 relative overflow-hidden">
//           {!pdfFile ? (
//             <PDFUploader onUpload={handleUpload} colorTheme={colorTheme} />
//           ) : (
//             <div className="relative w-full h-full">
//               <SimplePDFViewer file={pdfFile} />
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// );
