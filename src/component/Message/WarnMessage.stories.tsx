/* eslint-disable react/react-in-jsx-scope */
import { WarnMessage } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "component/Message/WarnMessage",
  component: WarnMessage,
  argTypes: {},
} as ComponentMeta<typeof WarnMessage>

const Template: ComponentStory<typeof WarnMessage> = args => (
  <WarnMessage {...args} />
)

export const warnMessage = Template.bind({})
warnMessage.args = { children: [<div>test</div>] }
