/* eslint-disable react/react-in-jsx-scope */
import { NormalMessage } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "component/Message/NormalMessage",
  component: NormalMessage,
  argTypes: {},
} as ComponentMeta<typeof NormalMessage>

const Template: ComponentStory<typeof NormalMessage> = args => (
  <NormalMessage {...args} />
)

export const normalMessage = Template.bind({})
normalMessage.args = { children: [<div>test</div>] }
