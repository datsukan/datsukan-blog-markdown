import React from "react"
import { unified } from "unified"
import remarkParser from "remark-parse"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkDirective from "remark-directive"
import remarkCustomDirective from "@plugin/remarkCustomDirective"
import remarkRehype from "remark-rehype"
import rehypeCodeTitle from "@plugin/rehypeCodeTitle"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeReact from "rehype-react"

import {
  NormalMessage,
  InfoMessage,
  WarnMessage,
  AlertMessage,
} from "@component/Message"
import { Link } from "@component/Link"
import { Codeblock } from "@component/Codeblock"
import { Image } from "@component/Image"
import { Header } from "@component/Header"
import { Checkbox } from "@component/Checkbox"

import "highlight.js/styles/atom-one-dark.css"

const components: Record<string, any> = {
  h1: (props: any) => Header({ ...props, depth: 1 }),
  h2: (props: any) => Header({ ...props, depth: 2 }),
  h3: (props: any) => Header({ ...props, depth: 3 }),
  h4: (props: any) => Header({ ...props, depth: 4 }),
  h5: (props: any) => Header({ ...props, depth: 5 }),
  h6: (props: any) => Header({ ...props, depth: 6 }),
  pre: Codeblock,
  input: Checkbox,
  normal: NormalMessage,
  info: InfoMessage,
  warn: WarnMessage,
  alert: AlertMessage,
  img: Image,
  a: Link,
}

const processor = unified()
  .use(remarkParser)
  .use(remarkBreaks)
  .use(remarkGfm)
  .use(remarkDirective)
  .use(remarkCustomDirective)
  .use(remarkRehype)
  .use(rehypeCodeTitle)
  .use(rehypeHighlight, { ignoreMissing: true })
  .use(rehypeSlug)
  .use(rehypeReact, {
    Fragment: React.Fragment,
    createElement: React.createElement,
    components: components,
  })

export default processor
