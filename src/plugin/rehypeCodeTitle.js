"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = require("unist-util-visit");
const delimiter = ":";
function customDirective() {
    return transformer;
    function transformer(tree) {
        (0, unist_util_visit_1.visit)(tree, "element", visitor);
        function visitor(node) {
            if (node.tagName === "code" &&
                !!node.properties &&
                !!node.properties.className &&
                node.properties.className.length > 0) {
                // console.log('rehype', node)
                const aliasList = node.properties.className[0].split(delimiter);
                node.properties.className[0] = aliasList.shift();
                if (aliasList.length === 0 || !aliasList[0])
                    return;
                const title = aliasList.join(delimiter);
                node.properties.title = title;
            }
        }
        return tree;
    }
}
exports.default = customDirective;
