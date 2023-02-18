import processor from "./processor"

type Props = {
  text: string
}

export const Markdown = ({ text }: Props) => {
  return (
    <div className="datsukan-blog-comment-markdown">
      {processor.processSync(text).result}
    </div>
  )
}
