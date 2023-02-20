import processor from "./processor"

type CommentMarkdownProps = {
  text: string
}

export const CommentMarkdown = ({ text }: CommentMarkdownProps) => {
  return <div className="comment-markdown">{processor.processSync(text).result}</div>
}
