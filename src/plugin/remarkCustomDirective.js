"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = require("unist-util-visit");
const hastscript_1 = require("hastscript");
function remarkCustomDirective() {
    return transformer;
    function transformer(tree) {
        (0, unist_util_visit_1.visit)(tree, visitor);
        function visitor(node) {
            if (node.type === "textDirective" ||
                node.type === "leafDirective" ||
                node.type === "containerDirective") {
                const data = node.data || (node.data = {});
                const hast = (0, hastscript_1.h)(node.name, node.attributes);
                data.hName = hast.tagName;
                data.hProperties = hast.properties;
            }
        }
    }
}
exports.default = remarkCustomDirective;
