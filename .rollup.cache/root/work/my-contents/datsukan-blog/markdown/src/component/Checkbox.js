import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export var Checkbox = function (_a) {
    var type = _a.type, checked = _a.checked;
    var _b = useState(checked), isChecked = _b[0], setIsChecked = _b[1];
    if (type !== "checkbox")
        return null;
    return (_jsx("input", { type: "checkbox", checked: isChecked, onChange: function () { return setIsChecked(checked); } }));
};
//# sourceMappingURL=Checkbox.js.map