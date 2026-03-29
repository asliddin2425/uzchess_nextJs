(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageSelector = ()=>{
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSelector.useEffect": ()=>{
            const handleClickOutside = {
                "LanguageSelector.useEffect.handleClickOutside": (event)=>{
                    if (ref.current && !ref.current.contains(event.target)) {
                        setIsExpanded(false);
                    }
                }
            }["LanguageSelector.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "LanguageSelector.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["LanguageSelector.useEffect"];
        }
    }["LanguageSelector.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onClick: ()=>setIsExpanded((prevState)=>!prevState),
        className: "flex gap-2 font-medium hover:cursor-pointer relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-medium",
                children: "Uzbek"
            }, void 0, false, {
                fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: '/icons/Vector.svg',
                alt: 'language selector arrow',
                width: 24,
                height: 24,
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "absolute -left-5 rounded-lg bg-(--dark) border border-(--stroke) top-8.25 min-w-40.5c",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "px-4 py-3",
                        children: "Uzbek"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "px-4 py-3",
                        children: "English"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "px-4 py-3",
                        children: "Russian"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/leftSide/language.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageSelector, "V4uUt3S29XBLUkgpPKAbkcf5oJ8=");
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavItem",
    ()=>NavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const NavItem = ({ title, url, isActive })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "relative py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: url,
            children: [
                title,
                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 w-full h-0.5 bg-(--blue)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navItem.tsx",
                    lineNumber: 8,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navItem.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navItem.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NavItem;
var _c;
__turbopack_context__.k.register(_c, "NavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$src$2f$components$2f$shared$2f$header$2f$navbar$2f$navItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const destination = [
    {
        title: "Asosiy",
        url: "/"
    },
    {
        title: "Yangiliklar",
        url: "/news"
    },
    {
        title: "Kurslar",
        url: "/courses"
    },
    {
        title: "Kutubxona",
        url: "/library"
    },
    {
        title: "Bog'lanish",
        url: "/contact-us"
    }
];
const NavBar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-row gap-10",
            children: destination.map((dest)=>{
                const isActive = pathname === dest.url;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$src$2f$components$2f$shared$2f$header$2f$navbar$2f$navItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavItem"], {
                    isActive: isActive,
                    ...dest
                }, dest.url, false, {
                    fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navbar.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/uzchess_nextjs/src/components/shared/header/navbar/navbar.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NavBar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uzchess_nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_uzchess_nextjs_src_components_shared_header_d433c397._.js.map