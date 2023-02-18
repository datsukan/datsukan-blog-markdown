/* eslint-disable react/react-in-jsx-scope */
import { Codeblock } from "./Codeblock"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ReactElement } from "rehype-react/lib"

export default {
  title: "component/Codeblock",
  component: Codeblock,
  argTypes: {},
} as ComponentMeta<typeof Codeblock>

const Template: ComponentStory<typeof Codeblock> = args => (
  <Codeblock {...args} />
)

const Child = ({
  className,
  title,
  children,
}: {
  className: string
  title: string
  children: ReactElement
}) => {
  return (
    <div className={className} title={title}>
      {children}
    </div>
  )
}

export const codeblock = Template.bind({})
codeblock.args = {
  children: [
    <Child key={0} className="hljs language-js" title="sample.js">
      <div>const a = "xxxx";</div>
    </Child>,
  ],
}
