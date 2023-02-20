"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeblockTitle = void 0;
const CodeblockTitle = ({ className = "", title }) => {
    return (<span className={`rounded-md rounded-b-none bg-slate-600 py-1.5 px-3 text-xs text-white ${className}`}>
      {title}
    </span>);
};
exports.CodeblockTitle = CodeblockTitle;
