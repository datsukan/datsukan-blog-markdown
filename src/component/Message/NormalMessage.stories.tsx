import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NormalMessage } from '../Message';

export default {
  title: 'Component/Message/Normal',
  component: NormalMessage,
} as ComponentMeta<typeof NormalMessage>;

const Template: ComponentStory<typeof NormalMessage> = (args) => <NormalMessage {...args} />;

export const normal = Template.bind({});
normal.args = {
    children: ["ほげほげ"]
}
