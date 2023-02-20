"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codeblock = void 0;
const server_1 = __importDefault(require("react-dom/server"));
const react_innertext_1 = __importDefault(require("react-innertext"));
const CodeblockTitle_1 = require("@component/CodeblockTitle");
const CodeblockCopyButton_1 = require("@component/CodeblockCopyButton");
const Codeblock = ({ children }) => {
    var _a;
    if (!children || children.length === 0)
        return;
    // console.log(children)
    const className = children[0].props.className;
    const title = (_a = children[0].props.title) !== null && _a !== void 0 ? _a : "";
    let code = children[0].props.children;
    const codeExists = () => {
        return server_1.default.renderToString(code).length > 0;
    };
    return (<div>
      {title && <CodeblockTitle_1.CodeblockTitle title={title} className="inline-block"/>}
      <div className="relative">
        {codeExists() && (<CodeblockCopyButton_1.CodeblockCopyButton text={(0, react_innertext_1.default)(code)} className="absolute top-2 right-2"/>)}
        <pre className={`
            !mt-0
            !overflow-x-auto
            ${title ? "!rounded-tl-none" : ""}
            ${className}
          `}>
          <code>{code}</code>
        </pre>
      </div>
    </div>);
};
exports.Codeblock = Codeblock;
