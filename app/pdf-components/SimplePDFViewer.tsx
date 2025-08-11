import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { X } from 'lucide-react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

import { useEffect, useState } from 'react';

interface SimplePDFViewerProps {
    file: File | null;
    colorTheme?: {
        name: string;
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    onRemove?: () => void;
    onRenderNoPdf?: () => React.ReactNode;
}

export const SimplePDFViewer = ({ file, colorTheme, onRemove, onRenderNoPdf }: SimplePDFViewerProps) => {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    // Plugins
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    const zoomPluginInstance = zoomPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const fullScreenPluginInstance = fullScreenPlugin();

    useEffect(() => {
        if (!file) {
            setPdfUrl(null);
            return;
        }
        const url = URL.createObjectURL(file);
        setPdfUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [file]);

    if (!pdfUrl) {
        const bg = colorTheme
            ? `linear-gradient(135deg, ${colorTheme.primary}08, ${colorTheme.secondary}08, ${colorTheme.accent}08)`
            : '#fcfcfc';
        return (
            <div
                className="flex flex-col items-center justify-center h-96 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl group"
                style={{ background: bg }}
            >
                {onRenderNoPdf ? (
                    onRenderNoPdf()
                ) : (
                    <span className="text-slate-600">No PDF selected</span>
                )}
            </div>
        );
    }

    return (
        <div className="relative w-full border border-slate-200 rounded-lg overflow-hidden min-h-[450px] h-[700px] flex flex-col">
            {/* File name and remove button */}
            {(file && onRemove) && (
                <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <span className="truncate text-sm font-medium text-slate-700 dark:text-slate-200" title={file.name}>{file.name}</span>
                    <button
                        onClick={onRemove}
                        className="ml-2 bg-white/80 hover:bg-red-500 hover:text-white rounded-full p-1 shadow-md transition-colors"
                        title="Remove PDF"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* Top Toolbar */}
            <div className="bg-gray-100 dark:bg-gray-800 p-2 border-b border-gray-300 dark:border-gray-700">
                <Toolbar />
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-y-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={pdfUrl}
                        plugins={[
                            toolbarPluginInstance,
                            zoomPluginInstance,
                            pageNavigationPluginInstance,
                            fullScreenPluginInstance
                        ]}
                    />
                </Worker>
            </div>
        </div>
    );
};
