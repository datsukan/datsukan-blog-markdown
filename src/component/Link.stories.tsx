/* eslint-disable react/react-in-jsx-scope */
import { Link } from "./Link"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "component/Link",
  component: Link,
  argTypes: {
    href: {
      name: "type",
      type: { name: "string", required: true },
      defaultValue: "https://blog.datsukan.me/",
      description: "site url",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "site url" },
      },
      control: {
        type: "text",
      },
    },
    title: {
      name: "type",
      type: { name: "string", required: true },
      defaultValue: "リンクタイトル",
      description: "link title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "link title" },
      },
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => <Link {...args} />

export const link = Template.bind({})
link.args = { children: ["https://blog.datsukan.me/"] }
