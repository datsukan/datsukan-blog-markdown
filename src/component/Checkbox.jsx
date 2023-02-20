"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const react_1 = require("react");
const Checkbox = ({ type, checked }) => {
    const [isChecked, setIsChecked] = (0, react_1.useState)(checked);
    if (type !== "checkbox")
        return;
    return (<input type="checkbox" checked={isChecked} onChange={() => setIsChecked(checked)}/>);
};
exports.Checkbox = Checkbox;
