(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/pdf-components/PDFUploader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PDFUploader": ()=>PDFUploader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
;
;
const PDFUploader = (param)=>{
    let { onUpload } = param;
    const handleFileChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            // Validate file type
            if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
                onUpload(file);
            } else {
                alert('Please select a valid PDF file.');
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                className: "w-12 h-12 text-slate-400 mx-auto mb-4"
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "file-upload",
                className: "block text-sm text-slate-600 cursor-pointer",
                children: "Click to upload a PDF"
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "file-upload",
                type: "file",
                accept: ".pdf,application/pdf",
                onChange: handleFileChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/PDFUploader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PDFUploader;
var _c;
__turbopack_context__.k.register(_c, "PDFUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pdf-components/SimplePDFViewer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SimplePDFViewer": ()=>SimplePDFViewer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const SimplePDFViewer = (param)=>{
    let { file, filledFields, onLoadSuccess, onLoadError } = param;
    _s();
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const generateFilledPDF = async (originalFile, fields)=>{
        try {
            // If no fields to fill, just return the original PDF
            if (!fields || fields.length === 0 || fields.every((f)=>!f.value || f.value === '')) {
                return URL.createObjectURL(originalFile);
            }
            const { PDFDocument } = await __turbopack_context__.r("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const bytes = await originalFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(bytes);
            const form = pdfDoc.getForm();
            // Fill the form fields
            fields.forEach((field)=>{
                if (field.value !== '' && field.value !== false) {
                    try {
                        const fieldName = field.name;
                        const pdfField = form.getFields().find((f)=>{
                            const name = f.getName();
                            const normalizedFieldName = fieldName.toLowerCase().replace(/[^\w\s]/g, '');
                            const normalizedPdfName = name.toLowerCase().replace(/[^\w\s]/g, '');
                            // Exact match
                            if (normalizedFieldName === normalizedPdfName) return true;
                            // Contains match
                            if (normalizedFieldName.includes(normalizedPdfName) || normalizedPdfName.includes(normalizedFieldName)) return true;
                            // Word-based fuzzy matching
                            const fieldWords = normalizedFieldName.split(/\s+/);
                            const pdfWords = normalizedPdfName.split(/\s+/);
                            const matchingWords = fieldWords.filter((fieldWord)=>pdfWords.some((pdfWord)=>fieldWord.includes(pdfWord) || pdfWord.includes(fieldWord)));
                            return matchingWords.length >= Math.min(fieldWords.length, pdfWords.length) * 0.6;
                        });
                        if (pdfField) {
                            const fieldType = pdfField.constructor.name;
                            if (fieldType.includes('TextField')) {
                                const textField = pdfField;
                                textField.setText(String(field.value));
                            } else if (fieldType.includes('CheckBox') && typeof field.value === 'boolean') {
                                const checkBox = pdfField;
                                if (field.value) {
                                    checkBox.check();
                                } else {
                                    checkBox.uncheck();
                                }
                            } else if (fieldType.includes('RadioGroup')) {
                                const radioGroup = pdfField;
                                radioGroup.select(String(field.value));
                            } else if (fieldType.includes('Dropdown')) {
                                const dropdown = pdfField;
                                const value = Array.isArray(field.value) ? field.value[0] : String(field.value);
                                dropdown.select(value);
                            }
                        }
                    } catch (error) {
                        console.warn("Error filling field ".concat(field.name, ":"), error);
                    }
                }
            });
            const filledBytes = await pdfDoc.save();
            const blob = new Blob([
                filledBytes
            ], {
                type: 'application/pdf'
            });
            return URL.createObjectURL(blob);
        } catch (error) {
            console.error('Error generating filled PDF:', error);
            // Fallback to original PDF
            return URL.createObjectURL(originalFile);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplePDFViewer.useEffect": ()=>{
            if (!file) return;
            const loadPDF = {
                "SimplePDFViewer.useEffect.loadPDF": async ()=>{
                    try {
                        setIsLoading(true);
                        setError('');
                        // Generate PDF with filled fields
                        const url = await generateFilledPDF(file, filledFields);
                        setPdfUrl({
                            "SimplePDFViewer.useEffect.loadPDF": (prev)=>{
                                // Clean up previous URL
                                if (prev) {
                                    URL.revokeObjectURL(prev);
                                }
                                return url;
                            }
                        }["SimplePDFViewer.useEffect.loadPDF"]);
                        setIsLoading(false);
                        onLoadSuccess === null || onLoadSuccess === void 0 ? void 0 : onLoadSuccess();
                    } catch (err) {
                        const error = err;
                        setError(error.message);
                        setIsLoading(false);
                        onLoadError === null || onLoadError === void 0 ? void 0 : onLoadError(error);
                    }
                }
            }["SimplePDFViewer.useEffect.loadPDF"];
            loadPDF();
            // Cleanup function
            return ({
                "SimplePDFViewer.useEffect": ()=>{
                // Don't revoke URL here as it might still be in use
                // URL cleanup is handled in setPdfUrl
                }
            })["SimplePDFViewer.useEffect"];
        }
    }["SimplePDFViewer.useEffect"], [
        file,
        filledFields
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96 bg-slate-50 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-600",
                children: "Loading PDF..."
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/SimplePDFViewer.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/pdf-components/SimplePDFViewer.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96 bg-red-50 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-600",
                children: [
                    "Error loading PDF: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/SimplePDFViewer.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/pdf-components/SimplePDFViewer.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full rounded-lg overflow-hidden border border-slate-200 min-h-[450px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "".concat(pdfUrl, "#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"),
            width: "100%",
            height: "100%",
            style: {
                border: 'none',
                minHeight: '450px'
            },
            title: "PDF Preview"
        }, void 0, false, {
            fileName: "[project]/app/pdf-components/SimplePDFViewer.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/pdf-components/SimplePDFViewer.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SimplePDFViewer, "M7wCSYRnS39o2etsc2mc3EeNFOQ=");
_c = SimplePDFViewer;
var _c;
__turbopack_context__.k.register(_c, "SimplePDFViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pdf-components/dashboard/FileUploadPreview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FileUploadPreview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$PDFUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/PDFUploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$SimplePDFViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/SimplePDFViewer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function FileUploadPreview() {
    let { onPdfLoad, onFieldsExtracted, filledFields } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const [pdfFile, setPdfFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfError, setPdfError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extractFormFields = async (file)=>{
        try {
            const { PDFDocument } = await __turbopack_context__.r("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const bytes = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(bytes);
            const form = pdfDoc.getForm();
            const fields = form.getFields();
            // Also extract text content to find field labels
            const textContent = [];
            try {
                // Use pdfjs-dist to extract text content and positions
                const pdfjsLib = await __turbopack_context__.r("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const loadingTask = pdfjsLib.getDocument({
                    data: bytes
                });
                const pdfDocument = await loadingTask.promise;
                for(let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++){
                    const page = await pdfDocument.getPage(pageNum);
                    const textContentObj = await page.getTextContent();
                    textContentObj.items.forEach((item)=>{
                        const textItem = item;
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
            return fields.map((field, index)=>{
                const name = field.getName();
                const fieldType = field.constructor.name;
                // Get field position if available
                let fieldX = 0;
                let fieldY = 0;
                let fieldWidth = 150;
                let fieldHeight = 20;
                try {
                    var _acroField_getWidgets__getRectangle, _acroField_getWidgets_, _acroField_getWidgets, _acroField_getWidgets1;
                    const acroField = field.acroField;
                    const rect = acroField === null || acroField === void 0 ? void 0 : (_acroField_getWidgets1 = acroField.getWidgets) === null || _acroField_getWidgets1 === void 0 ? void 0 : (_acroField_getWidgets = _acroField_getWidgets1.call(acroField)) === null || _acroField_getWidgets === void 0 ? void 0 : (_acroField_getWidgets_ = _acroField_getWidgets[0]) === null || _acroField_getWidgets_ === void 0 ? void 0 : (_acroField_getWidgets__getRectangle = _acroField_getWidgets_.getRectangle) === null || _acroField_getWidgets__getRectangle === void 0 ? void 0 : _acroField_getWidgets__getRectangle.call(_acroField_getWidgets_);
                    if (rect) {
                        fieldX = rect.x;
                        fieldY = rect.y;
                        fieldWidth = rect.width;
                        fieldHeight = rect.height;
                    }
                } catch (error) {
                    console.warn("Could not get position for field ".concat(name, ":"), error);
                }
                // Try to find nearby text that could be a label
                let displayName = name;
                let bestLabel = '';
                let closestDistance = Infinity;
                const nearbyLabels = [];
                // Look for text near this field
                textContent.forEach((textItem)=>{
                    const distance = Math.sqrt(Math.pow(textItem.x - fieldX, 2) + Math.pow(textItem.y - fieldY, 2));
                    // Check if this text looks like a field label (not too far away)
                    if (distance < 200 && textItem.text.length > 2 && textItem.text.length < 50) {
                        const text = textItem.text.trim();
                        // Skip common non-label text
                        if (!/^(yes|no|x|check|•|\d+|$)$/i.test(text) && !text.includes('_') && !/^\d+$/.test(text)) {
                            nearbyLabels.push({
                                text,
                                distance
                            });
                            // Prefer text that ends with colon or looks like a label
                            const isLikelyLabel = text.endsWith(':') || text.includes('Name') || text.includes('Address') || text.includes('Date') || text.includes('Phone') || text.includes('Email') || text.includes('Number') || text.includes('Effective') || text.includes('Insured') || text.includes('Contact') || text.includes('Company') || text.includes('Physical') || text.includes('Primary') || text.includes('Producer') || text.includes('Agency') || text.includes('Network') || text.includes('Broker') || text.includes('Client') || text.includes('Website') || text.includes('Information') || /^[A-Z][a-z\s]+/.test(text);
                            if (isLikelyLabel && distance < closestDistance) {
                                closestDistance = distance;
                                bestLabel = text.replace(/:$/, '').trim();
                            }
                        }
                    }
                });
                // Debug logging for field mapping
                console.log('=== PDF FIELD MAPPING DEBUG ===');
                console.log('Field Name: "'.concat(name, '"'));
                console.log("Field Type: ".concat(fieldType));
                console.log("Field Position: x=".concat(fieldX, ", y=").concat(fieldY));
                console.log('Best Label Found: "'.concat(bestLabel, '" (distance: ').concat(closestDistance, ")"));
                console.log('Nearby Labels:', nearbyLabels.sort((a, b)=>a.distance - b.distance).slice(0, 5));
                console.log('===============================');
                // Use the found label if it's good, otherwise fall back to mapping
                if (bestLabel && bestLabel.length > 2) {
                    displayName = bestLabel;
                } else {
                    // Clean up common field naming patterns
                    if (name) {
                        // Common field name mappings
                        const fieldMappings = {
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
                            displayName = name.replace(/^(field|text|input|form)_?/i, '').replace(/_?(field|input|text)$/i, '')// Convert camelCase to readable text
                            .replace(/([A-Z])/g, ' $1')// Convert snake_case to readable text  
                            .replace(/_/g, ' ')// Convert dots to spaces
                            .replace(/\./g, ' ')// Capitalize first letter of each word
                            .split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ').trim();
                            // Handle common field patterns
                            if (displayName.toLowerCase().includes('date') && displayName.toLowerCase().includes('sign')) {
                                displayName = 'Signature Date';
                            } else if (displayName.toLowerCase().includes('name') && displayName.toLowerCase().includes('sign')) {
                                displayName = 'Signature Name';
                            } else if (displayName.toLowerCase().includes('sign')) {
                                displayName = 'Signature';
                            } else if (/text\d+/i.test(name)) {
                                // For generic text fields, try to infer purpose from position or create a generic name
                                displayName = "Text Field ".concat(index + 1);
                            }
                        }
                    }
                }
                // Fallback to a generic name if we couldn't extract anything meaningful
                if (!displayName || displayName.trim() === '') {
                    displayName = "Field ".concat(index + 1);
                }
                // Create and log final mapping
                let finalMapping = {
                    pdfFieldName: name,
                    displayName: displayName,
                    bestLabel: bestLabel,
                    fieldType: fieldType,
                    coordinates: {
                        x: fieldX,
                        y: fieldY
                    },
                    hardcoded: false,
                    smartMapped: false
                };
                // Enhanced logic to connect text labels to fields
                if (bestLabel) {
                    // Check if this looks like "Named Insured" field
                    if (bestLabel.toLowerCase().includes('named') && bestLabel.toLowerCase().includes('insured')) {
                        console.log('🎯 SMART MAPPING FOUND:');
                        console.log('PDF Field: "'.concat(name, '" maps to Display Name: "Named Insured"'));
                        console.log('Based on nearby text: "'.concat(bestLabel, '"'));
                        console.log('This means when user types "Named Insured: Vincent Melara", it should fill this field');
                        displayName = 'Named Insured';
                        finalMapping = {
                            ...finalMapping,
                            displayName: 'Named Insured',
                            smartMapped: true
                        };
                    } else if (bestLabel.toLowerCase().includes('effective') && bestLabel.toLowerCase().includes('date')) {
                        displayName = 'Requested Effective Date';
                        finalMapping = {
                            ...finalMapping,
                            displayName: 'Requested Effective Date',
                            smartMapped: true
                        };
                    } else if (bestLabel.toLowerCase().includes('company') && bestLabel.toLowerCase().includes('phone')) {
                        displayName = 'Company Phone';
                        finalMapping = {
                            ...finalMapping,
                            displayName: 'Company Phone',
                            smartMapped: true
                        };
                    } else if (bestLabel.toLowerCase().includes('physical') && bestLabel.toLowerCase().includes('address')) {
                        displayName = 'Physical U.S. Address';
                        finalMapping = {
                            ...finalMapping,
                            displayName: 'Physical U.S. Address',
                            smartMapped: true
                        };
                    } else if (bestLabel.toLowerCase().includes('primary') && bestLabel.toLowerCase().includes('contact')) {
                        displayName = 'Primary Contact Name';
                        finalMapping = {
                            ...finalMapping,
                            displayName: 'Primary Contact Name',
                            smartMapped: true
                        };
                    }
                }
                console.log('🔗 FINAL FIELD MAPPING:', finalMapping);
                // Store mapping globally for debugging
                const globalWindow = window;
                if (!globalWindow.pdfFieldMappings) {
                    globalWindow.pdfFieldMappings = [];
                }
                globalWindow.pdfFieldMappings.push(finalMapping);
                let type = 'text';
                let value = '';
                let options;
                try {
                    if (fieldType.includes('TextField')) {
                        var _getText, _this;
                        type = 'text';
                        value = ((_getText = (_this = field).getText) === null || _getText === void 0 ? void 0 : _getText.call(_this)) || '';
                    } else if (fieldType.includes('CheckBox')) {
                        var _isChecked, _this1;
                        type = 'checkbox';
                        value = ((_isChecked = (_this1 = field).isChecked) === null || _isChecked === void 0 ? void 0 : _isChecked.call(_this1)) || false;
                    } else if (fieldType.includes('RadioGroup')) {
                        var _radioField_getOptions, _radioField_getSelected;
                        type = 'radio';
                        const radioField = field;
                        options = ((_radioField_getOptions = radioField.getOptions) === null || _radioField_getOptions === void 0 ? void 0 : _radioField_getOptions.call(radioField)) || [];
                        value = ((_radioField_getSelected = radioField.getSelected) === null || _radioField_getSelected === void 0 ? void 0 : _radioField_getSelected.call(radioField)) || '';
                    } else if (fieldType.includes('Dropdown')) {
                        var _dropdownField_getOptions, _dropdownField_getSelected;
                        type = 'dropdown';
                        const dropdownField = field;
                        options = ((_dropdownField_getOptions = dropdownField.getOptions) === null || _dropdownField_getOptions === void 0 ? void 0 : _dropdownField_getOptions.call(dropdownField)) || [];
                        value = ((_dropdownField_getSelected = dropdownField.getSelected) === null || _dropdownField_getSelected === void 0 ? void 0 : _dropdownField_getSelected.call(dropdownField)) || [];
                    }
                } catch (error) {
                    console.warn("Error processing field ".concat(name, ":"), error);
                }
                return {
                    id: "field_".concat(index),
                    name: displayName,
                    value,
                    type,
                    options,
                    x: fieldX,
                    y: fieldY,
                    width: fieldWidth,
                    height: fieldHeight
                };
            });
        } catch (error) {
            console.error('Error extracting form fields:', error);
            return [];
        }
    };
    const handleUpload = async (file)=>{
        setPdfFile(file);
        setPdfError('');
        // Clear previous mappings
        const globalWindow = window;
        globalWindow.pdfFieldMappings = [];
        if (onPdfLoad) {
            onPdfLoad(file);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col min-h-[600px] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-slate-50 border-b border-slate-200 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-slate-900 flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "w-5 h-5 text-slate-600 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        "Document Preview"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-slate-100 flex items-center justify-center p-4 relative min-h-[500px]",
                ref: containerRef,
                children: !pdfFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$PDFUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFUploader"], {
                    onUpload: handleUpload
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, this) : pdfError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "PDF Error"
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: pdfError
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setPdfFile(null);
                                setPdfError('');
                            },
                            className: "mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                            children: "Try Another File"
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 381,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$SimplePDFViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimplePDFViewer"], {
                        file: pdfFile,
                        filledFields: filledFields,
                        onLoadSuccess: ()=>{},
                        onLoadError: (error)=>{
                            console.error('PDF load error:', error);
                            setPdfError('Failed to load PDF file. Please try a different file.');
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                        lineNumber: 396,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 395,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
_s(FileUploadPreview, "iHiY2U8ZFPG1jnjjNWjsjqVlrcU=");
_c = FileUploadPreview;
var _c;
__turbopack_context__.k.register(_c, "FileUploadPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const AutoFillInstructions = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AutoFillInstructions(param) {
    let { instructions, setInstructions, autoFill, disabled } = param;
    _s();
    const handleInstructionsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutoFillInstructions.AutoFillInstructions.useCallback[handleInstructionsChange]": (e)=>{
            setInstructions(e.target.value);
        }
    }["AutoFillInstructions.AutoFillInstructions.useCallback[handleInstructionsChange]"], [
        setInstructions
    ]);
    // Inject the ElevenLabs widget dynamically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoFillInstructions.AutoFillInstructions.useEffect": ()=>{
            const container = document.getElementById('voice-widget-inline');
            if (!container) return;
            container.innerHTML = '';
            const widget = document.createElement('elevenlabs-convai');
            widget.setAttribute('agent-id', 'agent_2601k19e0awtegzbav9nh55vph4w');
            widget.setAttribute('show-branding', 'false');
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
            script.async = true;
            script.type = 'text/javascript';
            container.appendChild(widget);
            container.appendChild(script);
            return ({
                "AutoFillInstructions.AutoFillInstructions.useEffect": ()=>{
                    container.innerHTML = '';
                }
            })["AutoFillInstructions.AutoFillInstructions.useEffect"];
        }
    }["AutoFillInstructions.AutoFillInstructions.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-slate-50 border-b border-slate-200 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-5 h-5 text-slate-600 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-slate-900",
                        children: "Auto-Fill Instructions"
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: instructions,
                        onChange: handleInstructionsChange,
                        placeholder: "Enter field-value pairs, one per line. Examples:\nNamed Insured: Vincent Melara\nRequested Effective Date: 01/15/2024\nCompany Phone: (555) 123-4567\nPhysical U.S. Address: 123 Main St, City, ST 12345\n\nYou can also manually edit fields below and click 'Apply Changes to PDF' to update the document preview.",
                        className: "w-full h-28 border border-slate-300 rounded p-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500 mt-1",
                        children: 'Use format: "Field Name: Value" or "Field Name = Value", one per line. Click "Apply Changes to PDF" to update the preview with all field values.'
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: autoFill,
                                disabled: disabled,
                                className: "w-full sm:w-auto bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-50",
                                children: "Apply Changes to PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "voice-widget-inline",
                                className: "min-h-[60px] w-full sm:w-[300px] flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}, "OQ+HqwS57l0U6Jx0XylnzZQSt8o=")), "OQ+HqwS57l0U6Jx0XylnzZQSt8o=");
_c1 = AutoFillInstructions;
const __TURBOPACK__default__export__ = AutoFillInstructions;
var _c, _c1;
__turbopack_context__.k.register(_c, "AutoFillInstructions$memo");
__turbopack_context__.k.register(_c1, "AutoFillInstructions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
;
var _s = __turbopack_context__.k.signature();
;
;
const ManualFieldEditor = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ManualFieldEditor(param) {
    let { formFields, updateFieldValue } = param;
    _s();
    const renderField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (field)=>{
            switch(field.type){
                case 'checkbox':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: field.value,
                                    onChange: {
                                        "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (e)=>updateFieldValue(field.id, e.target.checked)
                                    }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"],
                                    className: "rounded border-slate-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-slate-700",
                                    children: field.name
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, field.id, false, {
                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this);
                case 'radio':
                    var _field_options;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: field.name
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: (_field_options = field.options) === null || _field_options === void 0 ? void 0 : _field_options.map({
                                    "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: field.id,
                                                    value: option,
                                                    checked: field.value === option,
                                                    onChange: {
                                                        "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (e)=>updateFieldValue(field.id, e.target.value)
                                                    }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"],
                                                    className: "border-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-700",
                                                    children: option
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, option, true, {
                                            fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)
                                }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"])
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, field.id, true, {
                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this);
                case 'dropdown':
                    var _field_options1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-700 mb-1",
                                children: field.name
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: Array.isArray(field.value) ? field.value[0] || '' : field.value,
                                onChange: {
                                    "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (e)=>updateFieldValue(field.id, e.target.value)
                                }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"],
                                className: "w-full border border-slate-300 rounded px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select an option"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    (_field_options1 = field.options) === null || _field_options1 === void 0 ? void 0 : _field_options1.map({
                                        "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option,
                                                children: option
                                            }, option, false, {
                                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                    }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"])
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, field.id, true, {
                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this);
                default:
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-700 mb-1",
                                children: field.name
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: field.value,
                                onChange: {
                                    "ManualFieldEditor.ManualFieldEditor.useCallback[renderField]": (e)=>updateFieldValue(field.id, e.target.value)
                                }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"],
                                className: "w-full border border-slate-300 rounded px-3 py-2",
                                placeholder: "Enter ".concat(field.name.toLowerCase())
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, field.id, true, {
                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this);
            }
        }
    }["ManualFieldEditor.ManualFieldEditor.useCallback[renderField]"], [
        updateFieldValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-slate-50 border-b border-slate-200 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                        className: "w-5 h-5 text-slate-600 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-slate-900",
                        children: "Manual Field Editor"
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4 max-h-96 overflow-y-auto",
                children: formFields.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 text-center",
                    children: "No form fields found. Upload a PDF with form fields to get started."
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this) : formFields.map(renderField)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}, "6LMFf1oLY3WqYO39ry93YH4xCAY=")), "6LMFf1oLY3WqYO39ry93YH4xCAY=");
_c1 = ManualFieldEditor;
const __TURBOPACK__default__export__ = ManualFieldEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "ManualFieldEditor$memo");
__turbopack_context__.k.register(_c1, "ManualFieldEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pdf-components/dashboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$FileUploadPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/dashboard/FileUploadPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$AutoFillInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$ManualFieldEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/dashboard/ManualFieldEditor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function App() {
    _s();
    const [pdfFile, setPdfFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [instructions, setInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formFields, setFormFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filledFields, setFilledFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const instructionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    // Keep ref in sync with instructions state
    const setInstructionsWithRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[setInstructionsWithRef]": (newInstructions)=>{
            setInstructions(newInstructions);
            instructionsRef.current = newInstructions;
        }
    }["App.useCallback[setInstructionsWithRef]"], []);
    const updateFieldValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[updateFieldValue]": (id, value)=>{
            setFormFields({
                "App.useCallback[updateFieldValue]": (fields)=>fields.map({
                        "App.useCallback[updateFieldValue]": (field)=>field.id === id ? {
                                ...field,
                                value
                            } : field
                    }["App.useCallback[updateFieldValue]"])
            }["App.useCallback[updateFieldValue]"]);
        // Only update preview when button is clicked, not on field changes
        }
    }["App.useCallback[updateFieldValue]"], []);
    const handlePdfLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handlePdfLoad]": (file)=>{
            setPdfFile(file);
            // Reset filled fields when new PDF is loaded
            setFilledFields([]);
        }
    }["App.useCallback[handlePdfLoad]"], []);
    const handleFieldsExtracted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleFieldsExtracted]": (fields)=>{
            setFormFields(fields);
        }
    }["App.useCallback[handleFieldsExtracted]"], []);
    const autoFillWithInstructions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[autoFillWithInstructions]": ()=>{
            setFormFields({
                "App.useCallback[autoFillWithInstructions]": (currentFields)=>{
                    const currentInstructions = instructionsRef.current;
                    const updatedFields = [
                        ...currentFields
                    ];
                    if (currentInstructions.trim()) {
                        const lines = currentInstructions.split('\n').filter({
                            "App.useCallback[autoFillWithInstructions].lines": (line)=>line.trim()
                        }["App.useCallback[autoFillWithInstructions].lines"]);
                        lines.forEach({
                            "App.useCallback[autoFillWithInstructions]": (line)=>{
                                const colonMatch = line.match(/^(.+?):\s*(.+)$/);
                                const equalsMatch = line.match(/^(.+?)\s*=\s*(.+)$/);
                                const match = colonMatch || equalsMatch;
                                if (match) {
                                    const fieldName = match[1].trim();
                                    const fieldValue = match[2].trim();
                                    // Enhanced field matching
                                    const matchingFieldIndex = updatedFields.findIndex({
                                        "App.useCallback[autoFillWithInstructions].matchingFieldIndex": (field)=>{
                                            const normalizedFieldName = field.name.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
                                            const normalizedInputName = fieldName.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
                                            // Direct match
                                            if (normalizedFieldName === normalizedInputName) return true;
                                            // Contains match (either direction)
                                            if (normalizedFieldName.includes(normalizedInputName) || normalizedInputName.includes(normalizedFieldName)) return true;
                                            // Key word matching for common field types
                                            const fieldKeywords = [
                                                'named',
                                                'insured',
                                                'effective',
                                                'date',
                                                'address',
                                                'phone',
                                                'email',
                                                'company',
                                                'contact',
                                                'primary',
                                                'producer',
                                                'agency',
                                                'network'
                                            ];
                                            const inputWords = normalizedInputName.split(/\s+/);
                                            const fieldWords = normalizedFieldName.split(/\s+/);
                                            // Check for keyword matches
                                            const hasKeywordMatch = inputWords.some({
                                                "App.useCallback[autoFillWithInstructions].matchingFieldIndex.hasKeywordMatch": (inputWord)=>fieldKeywords.includes(inputWord) && fieldWords.some({
                                                        "App.useCallback[autoFillWithInstructions].matchingFieldIndex.hasKeywordMatch": (fieldWord)=>fieldWord.includes(inputWord) || inputWord.includes(fieldWord)
                                                    }["App.useCallback[autoFillWithInstructions].matchingFieldIndex.hasKeywordMatch"])
                                            }["App.useCallback[autoFillWithInstructions].matchingFieldIndex.hasKeywordMatch"]);
                                            if (hasKeywordMatch) return true;
                                            // Fuzzy word matching
                                            const matchingWords = inputWords.filter({
                                                "App.useCallback[autoFillWithInstructions].matchingFieldIndex.matchingWords": (inputWord)=>fieldWords.some({
                                                        "App.useCallback[autoFillWithInstructions].matchingFieldIndex.matchingWords": (fieldWord)=>fieldWord.includes(inputWord) || inputWord.includes(fieldWord)
                                                    }["App.useCallback[autoFillWithInstructions].matchingFieldIndex.matchingWords"])
                                            }["App.useCallback[autoFillWithInstructions].matchingFieldIndex.matchingWords"]);
                                            return matchingWords.length >= Math.min(inputWords.length, fieldWords.length) * 0.5;
                                        }
                                    }["App.useCallback[autoFillWithInstructions].matchingFieldIndex"]);
                                    if (matchingFieldIndex !== -1) {
                                        const matchingField = updatedFields[matchingFieldIndex];
                                        let newValue;
                                        if (matchingField.type === 'checkbox') {
                                            newValue = /^(true|yes|1|checked|on|x)$/i.test(fieldValue);
                                        } else if (matchingField.type === 'radio' || matchingField.type === 'dropdown') {
                                            var _matchingField_options;
                                            const matchingOption = (_matchingField_options = matchingField.options) === null || _matchingField_options === void 0 ? void 0 : _matchingField_options.find({
                                                "App.useCallback[autoFillWithInstructions]": (option)=>option.toLowerCase().includes(fieldValue.toLowerCase()) || fieldValue.toLowerCase().includes(option.toLowerCase())
                                            }["App.useCallback[autoFillWithInstructions]"]);
                                            newValue = matchingOption || fieldValue;
                                        } else {
                                            newValue = fieldValue;
                                        }
                                        updatedFields[matchingFieldIndex] = {
                                            ...matchingField,
                                            value: newValue
                                        };
                                        console.log('Filled "'.concat(matchingField.name, '" with "').concat(fieldValue, '"'));
                                    } else {
                                        console.warn('Could not find field matching "'.concat(fieldName, '"'));
                                    }
                                }
                            }
                        }["App.useCallback[autoFillWithInstructions]"]);
                    }
                    setFilledFields(updatedFields);
                    return updatedFields;
                }
            }["App.useCallback[autoFillWithInstructions]"]);
        }
    }["App.useCallback[autoFillWithInstructions]"], []);
    const downloadPDF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[downloadPDF]": ()=>{
            const link = document.createElement('a');
            link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCg==';
            link.download = 'filled-form.pdf';
            link.click();
        }
    }["App.useCallback[downloadPDF]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-blue-100 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-6 h-6 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-semibold text-slate-900",
                                            children: "PDF Form Filler"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600",
                                            children: "Upload, edit, and download your PDF forms"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: downloadPDF,
                            disabled: !pdfFile,
                            className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Download PDF"
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[calc(100vh-200px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$FileUploadPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onPdfLoad: handlePdfLoad,
                        onFieldsExtracted: handleFieldsExtracted,
                        filledFields: filledFields
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$AutoFillInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                instructions: instructions,
                                setInstructions: setInstructionsWithRef,
                                autoFill: autoFillWithInstructions,
                                disabled: !pdfFile
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$ManualFieldEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                formFields: formFields,
                                updateFieldValue: updateFieldValue
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(App, "2T6NR7kCRJCg92x7C/aLTfRxkpM=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": ()=>hasA11yProp,
    "mergeClasses": ()=>mergeClasses,
    "toCamelCase": ()=>toCamelCase,
    "toKebabCase": ()=>toKebabCase,
    "toPascalCase": ()=>toPascalCase
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>defaultAttributes
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Icon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>createLucideIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
        let { className, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))), "lucide-".concat(iconName), className),
            ...props
        });
    });
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>FileText
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FileText": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Download
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Download": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Upload
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 3v12",
            key: "1x0j5s"
        }
    ],
    [
        "path",
        {
            d: "m17 8-5-5-5 5",
            key: "7q97r8"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ]
];
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("upload", __iconNode);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Upload": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Sparkles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Sparkles": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>PenLine
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 20h9",
            key: "t2du7b"
        }
    ],
    [
        "path",
        {
            d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
            key: "1ykcvy"
        }
    ]
];
const PenLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("pen-line", __iconNode);
;
 //# sourceMappingURL=pen-line.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Edit3": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript)");
}),
}]);

//# sourceMappingURL=_53b8a77c._.js.map