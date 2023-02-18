/* eslint-disable react/react-in-jsx-scope */
import { AlertMessage } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "component/Message/AlertMessage",
  component: AlertMessage,
  argTypes: {},
} as ComponentMeta<typeof AlertMessage>

const Template: ComponentStory<typeof AlertMessage> = args => (
  <AlertMessage {...args} />
)

export const alertMessage = Template.bind({})
alertMessage.args = { children: [<div>test</div>] }
