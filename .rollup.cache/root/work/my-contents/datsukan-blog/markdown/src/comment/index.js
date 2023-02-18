import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import processor from "./processor";
export var Markdown = function (_a) {
    var text = _a.text;
    return (_jsx("div", __assign({ className: "datsukan-blog-comment-markdown" }, { children: processor.processSync(text).result })));
};
//# sourceMappingURL=index.js.map