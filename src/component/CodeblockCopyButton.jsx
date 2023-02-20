"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeblockCopyButton = void 0;
const react_1 = require("react");
const outline_1 = require("@heroicons/react/outline");
const CodeblockCopyButton = ({ className = "", text }) => {
    const [isInvisible, setIsInvisible] = (0, react_1.useState)(true);
    const copyToClipboard = (copyText) => {
        navigator.clipboard.writeText(copyText);
        if (!isInvisible)
            return;
        setIsInvisible(false);
        setTimeout(() => setIsInvisible(true), 3000);
    };
    return (<div className={className}>
      <button type="button" onClick={() => copyToClipboard(text)} className={`relative block rounded-md bg-white/20 p-2 text-white hover:bg-white/40`}>
        <span role="tooltip" className={`
            transition-opacity
            absolute
            right-0
            z-10
            w-[100px]
            -translate-y-12
            rounded-lg
            bg-gray-800
            py-1
            px-2
            text-xs
            font-medium
            text-white
            shadow-sm
            duration-300
            ${isInvisible ? "invisible opacity-0" : "opacity-90"}
          `}>
          コピーしました
        </span>

        <outline_1.DuplicateIcon className="block h-4 w-4"/>
      </button>
    </div>);
};
exports.CodeblockCopyButton = CodeblockCopyButton;
