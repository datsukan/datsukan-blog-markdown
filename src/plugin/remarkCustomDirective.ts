import type { Node, Data } from "unist"
import visit from "unist-util-visit"
import h from "hastscript"

export default function remarkCustomDirective() {
  return transformer

  function transformer(tree: Node) {
    visit(tree, visitor)

    function visitor(node: Node) {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        const data = node.data || (node.data = {})
        const name = node.data["name"]
        const attributes = node.data["attributes"]
        if (typeof name !== "string" && typeof name !== "undefined") return
        if (!isNodeData(attributes)) return

        const hast = h(name, attributes)

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    }
  }
}

function isNodeData(attr: unknown): attr is Node<Data> {
  if (
    typeof attr !== "string"
    && !Array.isArray(attr)
    && typeof attr !== "undefined") return false

  if (Array.isArray(attr)) {
    if (attr.length === 0) return false
    for (const att of attr) {
      if (typeof att !== "string" && !(att instanceof Node)) return false
    }
  }

  return true
}
