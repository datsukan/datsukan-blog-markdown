import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/react-in-jsx-scope */
import { Link } from "./Link";
export default {
    title: "component/Link",
    component: Link,
    argTypes: {
        href: {
            name: "type",
            type: { name: "string", required: true },
            defaultValue: "https://blog.datsukan.me/",
            description: "site url",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "site url" },
            },
            control: {
                type: "text",
            },
        },
        title: {
            name: "type",
            type: { name: "string", required: true },
            defaultValue: "リンクタイトル",
            description: "link title",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "link title" },
            },
            control: {
                type: "text",
            },
        },
    },
};
var Template = function (args) { return _jsx(Link, __assign({}, args)); };
export var link = Template.bind({});
link.args = { children: ["https://blog.datsukan.me/"] };
//# sourceMappingURL=Link.stories.js.map