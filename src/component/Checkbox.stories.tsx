import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  args: {
    type: "checkbox"
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
    checked: true,
};
