import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/react-in-jsx-scope */
import { Codeblock } from "./Codeblock";
export default {
    title: "component/Codeblock",
    component: Codeblock,
    argTypes: {},
};
var Template = function (args) { return (_jsx(Codeblock, __assign({}, args))); };
var Child = function (_a) {
    var className = _a.className, title = _a.title, children = _a.children;
    return (_jsx("div", __assign({ className: className, title: title }, { children: children })));
};
export var codeblock = Template.bind({});
codeblock.args = {
    children: [
        _jsx(Child, __assign({ className: "hljs language-js", title: "sample.js" }, { children: _jsx("div", { children: "const a = \"xxxx\";" }) }), 0),
    ],
};
//# sourceMappingURL=Codeblock.stories.js.map