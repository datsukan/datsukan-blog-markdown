import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InformationCircleIcon, ExclamationCircleIcon, XCircleIcon, DotsCircleHorizontalIcon, } from "@heroicons/react/solid";
var baseClass = {
    block: "message-block flex items-center gap-4 rounded-md p-4",
    icon: "h-5 w-5",
};
export var NormalMessage = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (_jsxs("div", __assign({ className: "bg-gray-100 ".concat(baseClass.block, " ").concat(className) }, { children: [_jsx(DotsCircleHorizontalIcon, { className: "text-gray-500 ".concat(baseClass.icon) }), _jsx("div", __assign({ className: "w-full" }, { children: children }))] })));
};
export var InfoMessage = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (_jsxs("div", __assign({ className: "bg-blue-100 ".concat(baseClass.block, " ").concat(className) }, { children: [_jsx(InformationCircleIcon, { className: "text-blue-500 ".concat(baseClass.icon) }), _jsx("div", __assign({ className: "w-full" }, { children: children }))] })));
};
export var WarnMessage = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (_jsxs("div", __assign({ className: "bg-yellow-100 ".concat(baseClass.block, " ").concat(className) }, { children: [_jsx(ExclamationCircleIcon, { className: "text-yellow-500 ".concat(baseClass.icon) }), _jsx("div", __assign({ className: "w-full" }, { children: children }))] })));
};
export var AlertMessage = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (_jsxs("div", __assign({ className: "bg-red-100 ".concat(baseClass.block, " ").concat(className) }, { children: [_jsx(XCircleIcon, { className: "text-red-500  ".concat(baseClass.icon) }), _jsx("div", __assign({ className: "w-full" }, { children: children }))] })));
};
//# sourceMappingURL=index.js.map