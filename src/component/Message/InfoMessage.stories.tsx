/* eslint-disable react/react-in-jsx-scope */
import { InfoMessage } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "component/Message/InfoMessage",
  component: InfoMessage,
  argTypes: {},
} as ComponentMeta<typeof InfoMessage>

const Template: ComponentStory<typeof InfoMessage> = args => (
  <InfoMessage {...args} />
)

export const infoMessage = Template.bind({})
infoMessage.args = { children: [<div>test</div>] }
