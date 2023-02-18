/* eslint-disable react/react-in-jsx-scope */
import { Checkbox } from "./Checkbox"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "component/Checkbox",
  component: Checkbox,
  argTypes: {
    type: {
      name: "type",
      type: { name: "string", required: true },
      defaultValue: "checkbox",
      description: "input type",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "checkbox" },
      },
      control: {
        type: "text",
      },
    },
    checked: {
      name: "checked",
      type: { name: "boolean", required: true },
      defaultValue: true,
      description: "check value",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const Hidden = Template.bind({})
Hidden.args = { type: "", checked: false }

export const True = Template.bind({})
True.args = { type: "checkbox", checked: true }

export const False = Template.bind({})
False.args = { type: "checkbox", checked: false }
