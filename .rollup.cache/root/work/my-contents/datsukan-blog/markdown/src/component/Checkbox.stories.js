import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/react-in-jsx-scope */
import { Checkbox } from "./Checkbox";
export default {
    title: "component/Checkbox",
    component: Checkbox,
    argTypes: {
        type: {
            name: "type",
            type: { name: "string", required: true },
            defaultValue: "checkbox",
            description: "input type",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "checkbox" },
            },
            control: {
                type: "text",
            },
        },
        checked: {
            name: "checked",
            type: { name: "boolean", required: true },
            defaultValue: true,
            description: "check value",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: true },
            },
            control: {
                type: "boolean",
            },
        },
    },
};
var Template = function (args) { return _jsx(Checkbox, __assign({}, args)); };
export var Hidden = Template.bind({});
Hidden.args = { type: "", checked: false };
export var True = Template.bind({});
True.args = { type: "checkbox", checked: true };
export var False = Template.bind({});
False.args = { type: "checkbox", checked: false };
//# sourceMappingURL=Checkbox.stories.js.map