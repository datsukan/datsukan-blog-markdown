import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WarnMessage } from '../Message';

export default {
  title: 'Component/Message/Warn',
  component: WarnMessage,
} as ComponentMeta<typeof WarnMessage>;

const Template: ComponentStory<typeof WarnMessage> = (args) => <WarnMessage {...args} />;

export const warn = Template.bind({});
warn.args = {
    children: ["ほげほげ"]
}
