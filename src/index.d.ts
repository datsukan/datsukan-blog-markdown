import { ComponentStory } from "@storybook/react"
import { Markdown as AM } from "./article"
import { Markdown as CM } from "./comment"

type ArticleMarkdown = ComponentStory<typeof AM>
type CommentMarkdown = ComponentStory<typeof CM>

export type { ArticleMarkdown, CommentMarkdown }
