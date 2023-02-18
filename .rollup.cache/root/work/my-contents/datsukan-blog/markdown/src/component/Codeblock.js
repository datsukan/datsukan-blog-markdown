import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import innerText from "react-innertext";
import { CodeblockTitle } from "@component/CodeblockTitle";
import { CodeblockCopyButton } from "@component/CodeblockCopyButton";
export var Codeblock = function (_a) {
    var _b;
    var children = _a.children;
    if (!children || children.length === 0)
        return null;
    // console.log(children)
    var className = children[0].props.className;
    var title = (_b = children[0].props.title) !== null && _b !== void 0 ? _b : "";
    var code = children[0].props.children;
    var codeExists = function () {
        return ReactDOMServer.renderToString(code).length > 0;
    };
    return (_jsxs("div", { children: [title && _jsx(CodeblockTitle, { title: title, className: "inline-block" }), _jsxs("div", __assign({ className: "relative" }, { children: [codeExists() && (_jsx(CodeblockCopyButton, { text: innerText(code), className: "absolute top-2 right-2" })), _jsx("pre", __assign({ className: "\n            !mt-0\n            !overflow-x-auto\n            ".concat(title ? "!rounded-tl-none" : "", "\n            ").concat(className, "\n          ") }, { children: _jsx("code", { children: code }) }))] }))] }));
};
//# sourceMappingURL=Codeblock.js.map