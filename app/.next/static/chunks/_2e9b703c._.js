(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": ()=>cn,
    "hasEnvVars": ()=>hasEnvVars
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const hasEnvVars = ("TURBOPACK compile-time value", "https://vbaipmlnrqisuwnteedp.supabase.co") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/theme-toggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ThemeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ThemeToggle() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            className: "rounded-full border border-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/components/theme-toggle.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/theme-toggle.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        className: "rounded-full border border-white/20 dark:border-white/20 border-slate-300/50 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50",
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: {
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 180
                },
                transition: {
                    duration: 0.2
                },
                className: "absolute",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "h-5 w-5 text-white dark:text-white text-slate-700"
                }, void 0, false, {
                    fileName: "[project]/app/components/theme-toggle.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/theme-toggle.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: {
                    scale: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -180
                },
                transition: {
                    duration: 0.2
                },
                className: "absolute",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-5 w-5 text-white dark:text-white text-slate-700"
                }, void 0, false, {
                    fileName: "[project]/app/components/theme-toggle.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/theme-toggle.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/theme-toggle.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "uGU5l7ciDSfqFDe6wS7vfMb29jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/theme-customizer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ThemeCustomizer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const colorThemes = [
    {
        name: "Ocean",
        primary: "#4f46e5",
        secondary: "#06b6d4",
        accent: "#0891b2",
        background: "from-blue-950 to-cyan-950"
    },
    {
        name: "Sunset",
        primary: "#f59e0b",
        secondary: "#ef4444",
        accent: "#ec4899",
        background: "from-orange-950 to-red-950"
    },
    {
        name: "Forest",
        primary: "#059669",
        secondary: "#10b981",
        accent: "#14b8a6",
        background: "from-emerald-950 to-teal-950"
    },
    {
        name: "Purple",
        primary: "#8b5cf6",
        secondary: "#a855f7",
        accent: "#c084fc",
        background: "from-purple-950 to-violet-950"
    },
    {
        name: "Rose",
        primary: "#e11d48",
        secondary: "#f43f5e",
        accent: "#fb7185",
        background: "from-rose-950 to-pink-950"
    },
    {
        name: "Cyber",
        primary: "#00ff88",
        secondary: "#00d4ff",
        accent: "#ff0080",
        background: "from-slate-950 to-gray-950"
    }
];
function ThemeCustomizer(param) {
    let { onThemeChangeAction, currentTheme } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed right-4 top-1/2 z-50 -translate-y-1/2",
                initial: {
                    x: 100,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    delay: 1,
                    duration: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>setIsOpen(true),
                    className: "rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 p-3 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20",
                    size: "icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                        className: "h-5 w-5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/theme-customizer.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/theme-customizer.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/theme-customizer.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/app/components/theme-customizer.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "fixed right-4 top-1/2 z-50 w-80 -translate-y-1/2 rounded-3xl bg-white/10 dark:bg-white/10 bg-white/90 p-6 backdrop-blur-lg border border-white/20 dark:border-white/20 border-slate-200/50",
                            initial: {
                                x: 100,
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                x: 100,
                                opacity: 0,
                                scale: 0.9
                            },
                            transition: {
                                type: "spring",
                                damping: 20,
                                stiffness: 300
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-white dark:text-white text-slate-900",
                                            children: "Color Themes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/theme-customizer.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ()=>setIsOpen(false),
                                            className: "rounded-full text-white dark:text-white text-slate-600 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/theme-customizer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/theme-customizer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: colorThemes.map((colorTheme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            className: "relative overflow-hidden rounded-xl p-4 text-left transition-all ".concat(currentTheme.name === colorTheme.name ? "ring-2 ring-white ring-offset-2 ring-offset-transparent" : ""),
                                            style: {
                                                background: "linear-gradient(135deg, ".concat(colorTheme.primary, ", ").concat(colorTheme.secondary, ")")
                                            },
                                            onClick: ()=>onThemeChangeAction(colorTheme),
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: index * 0.1
                                            },
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 text-sm font-medium text-white",
                                                            children: colorTheme.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/theme-customizer.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-3 w-3 rounded-full",
                                                                    style: {
                                                                        backgroundColor: colorTheme.primary
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-3 w-3 rounded-full",
                                                                    style: {
                                                                        backgroundColor: colorTheme.secondary
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-3 w-3 rounded-full",
                                                                    style: {
                                                                        backgroundColor: colorTheme.accent
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/theme-customizer.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                currentTheme.name === colorTheme.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute right-2 top-2",
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        damping: 15,
                                                        stiffness: 300
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-4 w-4 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/theme-customizer.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, colorTheme.name, true, {
                                            fileName: "[project]/app/components/theme-customizer.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-xs text-slate-400 dark:text-slate-400 text-slate-600",
                                    children: "Choose a color theme to customize your experience"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/theme-customizer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/theme-customizer.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/components/theme-customizer.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ThemeCustomizer, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = ThemeCustomizer;
var _c;
__turbopack_context__.k.register(_c, "ThemeCustomizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pdf-components/PDFUploader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PDFUploader": ()=>PDFUploader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
const PDFUploader = (param)=>{
    let { onUpload, colorTheme } = param;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "text-center p-8",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: {
                    scale: 1.1
                },
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                    className: "w-16 h-16 mx-auto mb-6",
                    style: {
                        color: (colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.accent) || '#3b82f6'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    className: "text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10",
                    style: {
                        background: "linear-gradient(to right, ".concat((colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.primary) || '#3b82f6', ", ").concat((colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.secondary) || '#6366f1', ")"),
                        '--hover-bg': "linear-gradient(to right, ".concat((colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.primary) || '#1d4ed8', ", ").concat((colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.secondary) || '#4f46e5', ")")
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "file-upload",
                        className: "cursor-pointer flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Upload PDF File"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-500 dark:text-slate-400 mt-4",
                children: "Select a PDF file with form fields to get started"
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/PDFUploader.tsx",
                lineNumber: 64,
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
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/PDFUploader.tsx",
        lineNumber: 28,
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
//import { motion } from 'framer-motion';
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
    let { onPdfLoad, onFieldsExtracted, filledFields, colorTheme } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
        className: "bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden flex flex-col min-h-[600px] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gradient-to-r from-white/20 to-white/10 dark:from-slate-800/20 dark:to-slate-800/10 border-b border-white/20 dark:border-slate-700/30 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-slate-900 dark:text-white flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "w-5 h-5 mr-2",
                            style: {
                                color: (colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.accent) || '#6b7280'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        "Document Preview"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 flex items-center justify-center p-4 relative min-h-[500px]",
                ref: containerRef,
                children: !pdfFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$PDFUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFUploader"], {
                    onUpload: handleUpload,
                    colorTheme: colorTheme
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 388,
                    columnNumber: 11
                }, this) : pdfError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-red-600 dark:text-red-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "PDF Error"
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: pdfError
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setPdfFile(null);
                                setPdfError('');
                            },
                            className: "mt-4 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                            style: {
                                backgroundColor: (colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.primary) || '#3b82f6',
                                color: 'white'
                            },
                            children: "Try Another File"
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 390,
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
                        lineNumber: 409,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                    lineNumber: 408,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/FileUploadPreview.tsx",
        lineNumber: 375,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AutoFillInstructions = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AutoFillInstructions(param) {
    let { instructions, setInstructions, autoFill, disabled, colorTheme } = param;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        whileHover: {
            boxShadow: colorTheme ? "0 20px 40px ".concat(colorTheme.primary, "20") : "0 20px 40px rgba(59, 130, 246, 0.1)",
            transition: {
                duration: 0.3
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "p-4 backdrop-blur-sm border-b border-white/20 dark:border-slate-700/30 flex items-center",
                style: {
                    background: colorTheme ? "linear-gradient(135deg, ".concat(colorTheme.primary, "15, ").concat(colorTheme.secondary, "15)") : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(219, 234, 254, 0.9))'
                },
                whileHover: {
                    scale: 1.01
                },
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            rotate: 180
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "w-5 h-5 mr-2",
                            style: {
                                color: (colorTheme === null || colorTheme === void 0 ? void 0 : colorTheme.primary) || '#3b82f6'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-slate-900 dark:text-white",
                        children: "Auto-Fill Instructions"
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].textarea, {
                        value: instructions,
                        onChange: handleInstructionsChange,
                        placeholder: "Enter field-value pairs, one per line. Examples:\nNamed Insured: Vincent Melara\nRequested Effective Date: 01/15/2024\nCompany Phone: (555) 123-4567\nPhysical U.S. Address: 123 Main St, City, ST 12345\n\nYou can also manually edit fields below and click 'Apply Changes to PDF' to update the document preview.",
                        className: "w-full h-32 border border-slate-300/50 dark:border-slate-600/50 rounded-lg p-4 text-sm bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400",
                        whileFocus: {
                            scale: 1.02
                        },
                        transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 300
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.3
                        },
                        children: 'Use format: "Field Name: Value" or "Field Name = Value", one per line. Click "Apply Changes to PDF" to update the preview with all field values.'
                    }, void 0, false, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: autoFill,
                                disabled: disabled,
                                className: "w-full sm:w-auto text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/10",
                                style: {
                                    background: colorTheme ? "linear-gradient(135deg, ".concat(colorTheme.accent, ", ").concat(colorTheme.secondary, ")") : 'linear-gradient(135deg, #0d9488, #06b6d4)',
                                    boxShadow: colorTheme ? "0 10px 30px ".concat(colorTheme.accent, "20") : '0 10px 30px rgba(13, 148, 136, 0.2)'
                                },
                                whileHover: {
                                    scale: disabled ? 1 : 1.05
                                },
                                whileTap: {
                                    scale: disabled ? 1 : 0.95
                                },
                                transition: {
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 300
                                },
                                children: "Apply Changes to PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                id: "voice-widget-inline",
                                className: "min-h-[60px] w-full sm:w-[300px] flex items-center justify-center bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-slate-700/30",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx",
        lineNumber: 60,
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
"[project]/app/pdf-components/dashboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
//import { useRouter } from 'next/navigation';
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$customizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/theme-customizer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$FileUploadPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/dashboard/FileUploadPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$AutoFillInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/pdf-components/dashboard/AutoFillInstructions.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const defaultTheme = {
    name: "Ocean",
    primary: "#4f46e5",
    secondary: "#06b6d4",
    accent: "#0891b2",
    background: "from-blue-950 to-cyan-950"
};
function App() {
    _s();
    const [pdfFile, setPdfFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [instructions, setInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formFields, setFormFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filledFields, setFilledFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [colorTheme, setColorTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    const instructionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    //const router = useRouter();
    // Load saved theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const saved = localStorage.getItem("colorTheme");
            if (saved) {
                setColorTheme(JSON.parse(saved));
            }
        }
    }["App.useEffect"], []);
    const handleThemeChange = (newTheme)=>{
        setColorTheme(newTheme);
        localStorage.setItem("colorTheme", JSON.stringify(newTheme));
    };
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
        className: "relative min-h-screen w-full overflow-hidden",
        style: {
            background: "linear-gradient(135deg, ".concat(colorTheme.primary, "08, ").concat(colorTheme.secondary, "08, ").concat(colorTheme.accent, "08)")
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:24px_24px]",
                style: {
                    background: "radial-gradient(circle at 1px 1px, ".concat(colorTheme.primary, "15 1px, transparent 0)"),
                    backgroundSize: '24px 24px'
                }
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                className: "relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/30 shadow-sm",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex items-center gap-3",
                            whileHover: {
                                scale: 1.02
                            },
                            transition: {
                                type: "spring",
                                damping: 20,
                                stiffness: 300
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "p-2 bg-white/20 dark:bg-slate-900/30 rounded-lg backdrop-blur-sm border border-white/20",
                                    style: {
                                        background: "linear-gradient(135deg, ".concat(colorTheme.primary, "20, ").concat(colorTheme.secondary, "20)"),
                                        borderColor: "".concat(colorTheme.primary, "30")
                                    },
                                    whileHover: {
                                        rotate: 360
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-6 h-6",
                                        style: {
                                            color: colorTheme.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-semibold text-slate-900 dark:text-white",
                                            children: "PDF Form Filler"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600 dark:text-slate-400",
                                            children: "Upload, edit, and download your PDF forms"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 300
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: downloadPDF,
                                        disabled: !pdfFile,
                                        className: "flex items-center space-x-2 px-6 py-3 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/10",
                                        style: {
                                            background: "linear-gradient(135deg, ".concat(colorTheme.primary, ", ").concat(colorTheme.secondary, ")"),
                                            boxShadow: "0 10px 30px ".concat(colorTheme.primary, "20")
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Download PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 max-w-7xl mx-auto px-6 py-8",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    delay: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[calc(100vh-200px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.3
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$FileUploadPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onPdfLoad: handlePdfLoad,
                                onFieldsExtracted: handleFieldsExtracted,
                                filledFields: filledFields,
                                colorTheme: colorTheme
                            }, void 0, false, {
                                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-6",
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.01
                                    },
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 300
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$pdf$2d$components$2f$dashboard$2f$AutoFillInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        instructions: instructions,
                                        setInstructions: setInstructionsWithRef,
                                        autoFill: autoFillWithInstructions,
                                        disabled: !pdfFile,
                                        colorTheme: colorTheme
                                    }, void 0, false, {
                                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.01
                                    },
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 300
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualFieldEditor, {
                                        formFields: formFields,
                                        updateFieldValue: updateFieldValue,
                                        colorTheme: colorTheme
                                    }, void 0, false, {
                                        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$customizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onThemeChangeAction: handleThemeChange,
                currentTheme: colorTheme
            }, void 0, false, {
                fileName: "[project]/app/pdf-components/dashboard/page.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pdf-components/dashboard/page.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(App, "6enfhJEy4b7UO9xHbkpQmEwNY5Y=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_2e9b703c._.js.map