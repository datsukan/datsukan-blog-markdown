import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ImageModal } from "@component/ImageModal";
export var Image = function (props) {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    return (_jsxs(_Fragment, { children: [_jsx(ImageModal, { open: open, setOpen: setOpen, image: props }), _jsx("img", __assign({}, props, { onClick: function () { return setOpen(true); }, className: "cursor-zoom-in" }))] }));
};
//# sourceMappingURL=Image.js.map