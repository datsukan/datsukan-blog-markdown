import { visit } from "unist-util-visit";
var delimiter = ":";
export default function customDirective() {
    return transformer;
    function transformer(tree) {
        visit(tree, "element", visitor);
        function visitor(node) {
            if (node.tagName === "code" &&
                !!node.properties &&
                !!node.properties.className &&
                node.properties.className.length > 0) {
                // console.log('rehype', node)
                var aliasList = node.properties.className[0].split(delimiter);
                node.properties.className[0] = aliasList.shift();
                if (aliasList.length === 0 || !aliasList[0])
                    return;
                var title = aliasList.join(delimiter);
                node.properties.title = title;
            }
        }
        return tree;
    }
}
//# sourceMappingURL=rehypeCodeTitle.js.map