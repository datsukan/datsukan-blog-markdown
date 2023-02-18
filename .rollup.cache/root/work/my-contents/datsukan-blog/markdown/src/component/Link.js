import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { SkeletonLinkCard } from "@component/SkeletonLinkCard";
export var Link = function (_a) {
    var href = _a.href, title = _a.title, children = _a.children;
    var _b = useState(true), isLoading = _b[0], setIsLoading = _b[1];
    if (children && children[0] && href === children[0]) {
        var baseUrl = "https://iframe-link-card.vercel.app/";
        return (_jsxs(_Fragment, { children: [isLoading && _jsx(SkeletonLinkCard, {}), _jsx("iframe", { src: "".concat(baseUrl, "?url=").concat(href), className: "h-32 w-full", onLoad: function () { return setIsLoading(false); }, hidden: isLoading })] }));
    }
    return (_jsx("a", __assign({ href: href, title: title, target: "_blank", rel: "noopener noreferrer" }, { children: children })));
};
//# sourceMappingURL=Link.js.map