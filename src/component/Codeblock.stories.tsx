import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Codeblock } from './Codeblock';

export default {
  title: 'Component/Codeblock',
  component: Codeblock,
} as ComponentMeta<typeof Codeblock>;

const Template: ComponentStory<typeof Codeblock> = (args) => <Codeblock {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: [<div><div>hoge</div></div>]
}
