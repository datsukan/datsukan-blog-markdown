import { ComponentStory } from "@storybook/react"
import { Markdown as ArticleMarkdown } from "./article"
import { Markdown as CommentMarkdown } from "./comment"

type TypeArticleMarkdown = ComponentStory<typeof ArticleMarkdown>
type TypeCommentMarkdown = ComponentStory<typeof CommentMarkdown>

export type { TypeArticleMarkdown, TypeCommentMarkdown }
