import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DuplicateIcon } from "@heroicons/react/outline";
export var CodeblockCopyButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, text = _a.text;
    var _c = useState(true), isInvisible = _c[0], setIsInvisible = _c[1];
    var copyToClipboard = function (copyText) {
        navigator.clipboard.writeText(copyText);
        if (!isInvisible)
            return;
        setIsInvisible(false);
        setTimeout(function () { return setIsInvisible(true); }, 3000);
    };
    return (_jsx("div", __assign({ className: className }, { children: _jsxs("button", __assign({ type: "button", onClick: function () { return copyToClipboard(text); }, className: "relative block rounded-md bg-white/20 p-2 text-white hover:bg-white/40" }, { children: [_jsx("span", __assign({ role: "tooltip", className: "\n            transition-opacity\n            absolute\n            right-0\n            z-10\n            w-[100px]\n            -translate-y-12\n            rounded-lg\n            bg-gray-800\n            py-1\n            px-2\n            text-xs\n            font-medium\n            text-white\n            shadow-sm\n            duration-300\n            ".concat(isInvisible ? "invisible opacity-0" : "opacity-90", "\n          ") }, { children: "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" })), _jsx(DuplicateIcon, { className: "block h-4 w-4" })] })) })));
};
//# sourceMappingURL=CodeblockCopyButton.js.map