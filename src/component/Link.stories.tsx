import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Component/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const link = Template.bind({});
link.args = {
 href: "https://blog.datsukan.me/",
 title: "datsukan blog",
 children: ["https://blog.datsukan.me/"],
}
