import processor from "./processor"

export type Props = {
  text: string
}

export const Markdown = ({ text }: Props) => {
  return (
    <div className="datsukan-blog-article-markdown">
      {processor.processSync(text).result}
    </div>
  )
}
