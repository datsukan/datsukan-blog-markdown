import processor from "./processor"

type ArticleMarkdownProps = {
  text: string
}

export const ArticleMarkdown = ({ text }: ArticleMarkdownProps) => {
  return <div className="article-markdown">{processor.processSync(text).result}</div>
}
