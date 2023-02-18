import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeaderAnchorLink } from "@component/HeaderAnchorLink";
export var Header = function (_a) {
    var id = _a.id, depth = _a.depth, children = _a.children;
    var Component = "h".concat(depth);
    return (_jsxs(Component, __assign({ id: id, className: "group relative -ml-6 pl-6" }, { children: [_jsx(HeaderAnchorLink, { id: id, className: "invisible absolute top-1/2 -translate-y-1/2 -translate-x-7 group-hover:visible" }), children] })));
};
//# sourceMappingURL=Header.js.map