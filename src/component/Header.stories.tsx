import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Component/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <div className='px-5'><Header {...args}>H{args.depth}のタイトル</Header></div>;

export const H2 = Template.bind({});
H2.args = {
    id: "h2xxx",
    depth: 2,
}

export const H3 = Template.bind({});
H3.args = {
    id: "h3xxx",
    depth: 3,
}

export const H4 = Template.bind({});
H4.args = {
    id: "h4xxx",
    depth: 4,
}

export const H5 = Template.bind({});
H5.args = {
    id: "h5xxx",
    depth: 5,
}

export const H6 = Template.bind({});
H6.args = {
    id: "h6xxx",
    depth: 6,
}
