import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Codeblock } from './Codeblock';

type SampleCodeProps = {
  hasTitle?: boolean
  lang?: string
}
function sampleCode({hasTitle = false, lang = ""}: SampleCodeProps) {
  const title = hasTitle ? "sample.js" : ""
  const className = lang ? `hljs language-${lang}` : ""

  const PlaneText = () => {
    return <>const a = "hoge";</>
  }

  const HighlightText = () => {
    return (
      <>
        <span className="hljs-keyword">const</span> a ={' '}
        <span className="hljs-string">"hoge"</span>;
      </>
    )
  }

  return (
    <div title={title} className={className} key={0}>
      {lang ? <HighlightText /> : <PlaneText />}
    </div>
  )
}

export default {
  title: 'Component/Codeblock',
  component: Codeblock,
} as ComponentMeta<typeof Codeblock>;

const Template: ComponentStory<typeof Codeblock> = (args) => <Codeblock {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [sampleCode({})]
}

export const WithTitle = Template.bind({});
WithTitle.args = {
  children: [sampleCode({hasTitle: true})]
}

export const WithSyntaxHighlight = Template.bind({});
WithSyntaxHighlight.args = {
  children: [sampleCode({lang: "js"})]
}

export const WithTitleAndSyntaxHighlight = Template.bind({});
WithTitleAndSyntaxHighlight.args = {
  children: [sampleCode({hasTitle: true, lang: "js"})]
}
