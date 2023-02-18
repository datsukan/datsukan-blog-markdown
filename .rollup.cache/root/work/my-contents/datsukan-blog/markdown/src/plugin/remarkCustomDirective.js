import { visit } from "unist-util-visit";
import { h } from "hastscript";
export default function remarkCustomDirective() {
    return transformer;
    function transformer(tree) {
        visit(tree, visitor);
        function visitor(node) {
            if (node.type === "textDirective" ||
                node.type === "leafDirective" ||
                node.type === "containerDirective") {
                var data = node.data || (node.data = {});
                var hast = h(node.name, node.attributes);
                data.hName = hast.tagName;
                data.hProperties = hast.properties;
            }
        }
    }
}
//# sourceMappingURL=remarkCustomDirective.js.map