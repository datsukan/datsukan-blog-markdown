import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoMessage } from '../Message';

export default {
  title: 'Component/Message/Info',
  component: InfoMessage,
} as ComponentMeta<typeof InfoMessage>;

const Template: ComponentStory<typeof InfoMessage> = (args) => <InfoMessage {...args} />;

export const info = Template.bind({});
info.args = {
    children: ["ほげほげ"]
}
