import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "gatsby-link";
import { LinkIcon } from "@heroicons/react/solid";
export var HeaderAnchorLink = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, id = _a.id;
    return (_jsx("div", __assign({ className: className }, { children: _jsx(Link, __assign({ to: "#".concat(id) }, { children: _jsx(LinkIcon, { className: "block h-5 w-5 cursor-pointer text-secondary" }) })) })));
};
//# sourceMappingURL=HeaderAnchorLink.js.map