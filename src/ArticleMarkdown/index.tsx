import processor from "./processor"

export type ArticleMarkdownProps = {
  text: string
}

export const ArticleMarkdown = ({ text }: ArticleMarkdownProps) => {
  return <div>{processor.processSync(text).result}</div>
}
