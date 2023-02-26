import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AlertMessage } from '../Message';

export default {
  title: 'Component/Message/Alert',
  component: AlertMessage,
} as ComponentMeta<typeof AlertMessage>;

const Template: ComponentStory<typeof AlertMessage> = (args) => <AlertMessage {...args} />;

export const alert = Template.bind({});
alert.args = {
    children: ["ほげほげ"]
}
